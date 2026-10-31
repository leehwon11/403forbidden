/* 공용 기능 — 보통은 고칠 일 없어요 */

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* 이미지가 있으면 <img>, 없으면 빗금 자리 */
function media(src, label, alt) {
  if (src) return `<img class="media" src="${esc(src)}" alt="${esc(alt || label)}" loading="lazy">`;
  return `<span class="ph media" aria-hidden="true">${esc(label)}</span>`;
}

/* 페이지 들어올 때 오른쪽 아래 알림 */
function showToast(text) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('role', 'status');
  t.textContent = text;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3600);
}

/* 흔들림 · 색 번짐 효과를 다시 재생 */
function replay(el, cls) {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

/* 공통 하단 문구 채우기 */
function fillSite() {
  document.querySelectorAll('[data-site]').forEach((el) => {
    el.textContent = SITE[el.dataset.site] ?? '';
  });
}

/* 갤러리 + 이미지 열기 창 (커미션 · 페어틀 공용) */
function initGallery({ items, prefix, folder, caption, sub }) {
  const grid = document.getElementById('grid');
  const count = document.getElementById('count');
  const tabs = document.querySelectorAll('.tab');
  const viewer = document.getElementById('viewer');
  const vTitle = document.getElementById('v-title');
  const vImg = document.getElementById('v-img');
  const vCap = document.getElementById('v-cap');
  const vNote = document.getElementById('v-note');
  let filter = 'all';
  let list = [];
  let cur = -1;
  let lastFocus = null;

  const fileName = (i) => prefix + String(items.indexOf(list[i]) + 1).padStart(3, '0');

  function render() {
    list = filter === 'all' ? items : items.filter((x) => x.tag === filter);
    count.textContent = `[${list.length}개의 파일이 확인되었습니다.]`;
    grid.innerHTML = list.map((it, i) => `
      <button type="button" class="thumb" data-i="${i}" aria-label="${esc(fileName(i))} 열기">
        <span class="thumb-img">${media(it.src, fileName(i), caption(it))}</span>
        <span class="thumb-cap"><span>${esc(caption(it))}</span><small>${esc(sub(it))}</small></span>
      </button>`).join('');
  }

  function open(i) {
    cur = (i + list.length) % list.length;
    const it = list[cur];
    vTitle.textContent = `${fileName(cur)} — ${cur + 1}/${list.length}`;
    vImg.className = 'viewer-img' + (it.src ? '' : ' ph');
    vImg.innerHTML = it.src ? `<img src="${esc(it.src)}" alt="${esc(caption(it))}">` : esc(fileName(cur) + ' · 원본 크기');
    vCap.textContent = `${caption(it)} · ${sub(it)}`;
    vNote.textContent = it.note || '';
    if (viewer.hidden) lastFocus = document.activeElement;
    viewer.hidden = false;
    viewer.querySelector('.viewer-close').focus();
  }
  function close() {
    viewer.hidden = true;
    if (lastFocus) lastFocus.focus();
  }

  tabs.forEach((b) => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    tabs.forEach((t) => t.setAttribute('aria-pressed', String(t === b)));
    render();
  }));
  grid.addEventListener('click', (e) => {
    const b = e.target.closest('.thumb');
    if (b) open(Number(b.dataset.i));
  });
  viewer.addEventListener('click', (e) => { if (e.target === viewer) close(); });
  viewer.querySelector('.viewer-close').addEventListener('click', close);
  document.getElementById('v-prev').addEventListener('click', () => open(cur - 1));
  document.getElementById('v-next').addEventListener('click', () => open(cur + 1));
  document.addEventListener('keydown', (e) => {
    if (viewer.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open(cur - 1);
    if (e.key === 'ArrowRight') open(cur + 1);
  });

  render();
}

document.addEventListener('DOMContentLoaded', () => {
  fillSite();
  const t = document.body.dataset.toast;
  if (t) showToast(t);
});
