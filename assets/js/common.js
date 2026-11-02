/* 공용 기능 — SPA 전체에서 쓰는 유틸리티 */

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escBr(s) { return esc(s).replace(/\n/g, '<br>'); }

function media(src, label, alt) {
  if (src) return `<img class="media" src="${esc(src)}" alt="${esc(alt || label)}" loading="lazy">`;
  return `<span class="ph media" aria-hidden="true">${esc(label)}</span>`;
}

function showToast(text) {
  var old = document.querySelector('.toast');
  if (old) old.remove();
  var t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('role', 'status');
  t.textContent = text;
  document.body.appendChild(t);
  setTimeout(function () { t.remove(); }, 3600);
}

function replay(el, cls) {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

function fillSite() {
  document.querySelectorAll('[data-site]').forEach(function (el) {
    el.textContent = SITE[el.dataset.site] ?? '';
  });
}
