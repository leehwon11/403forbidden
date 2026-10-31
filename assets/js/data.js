/* =========================================================
   ★ 내용은 거의 다 이 파일에서 고쳐요 ★
   - 대괄호 [ ] 로 된 부분이 채워 넣을 자리예요.
   - 이미지: assets/img 폴더에 파일을 올리고 src 에 경로를 적어요.
     예) src: 'assets/img/commission/01.png'
     src 를 '' (빈칸)으로 두면 회색 빗금 자리가 보여요.
   - 항목을 늘리려면 { ... }, 한 덩어리를 복사해서 붙이면 돼요.
     덩어리 사이의 쉼표(,)를 빼먹지 않게 조심!
   ========================================================= */

const SITE = {
  title: '403 Forbidden',
  footer: '「어린 신인데 키워주시죠」 현도훈(자캐) × 모해인 · 드림 개인 홈페이지',
  notice: '[주의사항 / 지뢰 안내 한 줄]',
  pairLine: '[여기에 페어 한 줄 소개]',
  lastSync: '[YYYY.MM.DD]',
  contact: '[방명록 / 연락처 링크]',
  bootIntro: true,   // false 로 바꾸면 입구의 부팅 화면을 건너뛰어요
  /* 부팅 시퀀스에 나오는 줄
     text: 화면에 뜨는 문장, cls: 'dim' / 'alert' / '' (비어두면 기본), wait: 대기 밀리초 */
  boot: [
    { text: '> PLANET.EARTH SYSTEM v0.403', cls: 'dim', wait: 700 },
    { text: '> BOOT SEQUENCE INITIATED', cls: 'dim', wait: 500 },
    { text: '', cls: '', wait: 300 },
    { text: '[커널을 로드합니다…]', cls: '', wait: 650 },
    { text: '[메모리 할당… ■■■■■■■■ 완료]', cls: '', wait: 700 },
    { text: '[시스템 시계 동기화…]', cls: 'dim', wait: 450 },
    { text: '', cls: '', wait: 250 },
    { text: '[등록 캐릭터 데이터베이스에 연결합니다…]', cls: '', wait: 800 },
    { text: '[캐릭터 조회 중… 2건의 등록 데이터가 확인되었습니다.]', cls: '', wait: 600 },
    { text: '[#1 현도훈 — 분류: DREAM — 권한: 확인됨]', cls: '', wait: 500 },
    { text: '[#2 모해인 — 분류: ORIGINAL — 권한: 확인됨]', cls: '', wait: 500 },
    { text: '', cls: '', wait: 300 },
    { text: '[관계 로그를 동기화합니다…]', cls: '', wait: 700 },
    { text: '[경고: 접근 거부 이력이 존재합니다 — 403 FORBIDDEN]', cls: 'alert', wait: 800 },
    { text: '[‘us’ 영역에 대한 접근 요청이 감지되었습니다.]', cls: 'alert', wait: 700 },
    { text: '[보안 프로토콜을 실행합니다…]', cls: '', wait: 600 }
  ],
  /* 입구에서 "재시도" 버튼을 누를 때마다 순서대로 나오는 문구 */
  knock: [
    '조건이 충족되지 않았습니다: 때',
    '425 Too Early — 거절이 아닙니다. 아직 이를 뿐입니다.',
    '반대편에서도 같은 요청이 감지되었습니다.',
    '재시도로는 열리지 않습니다.'
  ]
};

/* ---------- 등록 캐릭터 (홈 + 위키) ---------- */
const CHARACTERS = [
  {
    id: 'dohun',
    name: '현도훈',
    tag: 'DREAM',
    face: '',            // 홈 카드의 작은 얼굴 이미지
    portrait: '',        // 위키의 큰 이미지
    other: '모해인',
    rows: [
      ['등록번호', '[No.000]'],
      ['분류', '자작 캐릭터'],
      ['나이', '[ ]'],
      ['소속', '[ ]'],
      ['등급', '[ ]'],
      ['상태', '[ ]'],
      ['한 줄', '[ ]']
    ],
    traits: '[특성 1]\n[특성 2]\n[특성 3]',
    relation: '[관계 메모]',
    appearance: '[외형 — 키, 인상, 옷차림 등]',
    personality: '[성격 — 말투, 습관, 가치관 등]',
    background: '[배경 — 과거, 현재 상황 등]',
    likes: ['[ ]', '[ ]'],
    dislikes: ['[ ]', '[ ]'],
    spoiler: '[스포일러 내용 — 열람 확인 후 표시됨]'
  },
  {
    id: 'haein',
    name: '모해인',
    tag: 'ORIGINAL',
    face: '',
    portrait: '',
    other: '현도훈',
    rows: [
      ['등록번호', '[No.000]'],
      ['분류', '원작 캐릭터'],
      ['나이', '[ ]'],
      ['소속', '[ ]'],
      ['등급', '[ ]'],
      ['상태', '[ ]'],
      ['한 줄', '[ ]']
    ],
    traits: '[특성 1]\n[특성 2]\n[특성 3]',
    relation: '[관계 메모]',
    appearance: '[외형]',
    personality: '[성격]',
    background: '[배경]',
    likes: ['[ ]', '[ ]'],
    dislikes: ['[ ]', '[ ]'],
    spoiler: '[스포일러 내용]'
  }
];

/* ---------- 이미지 백업: 커미션 ----------
   tag 는 '해인' / '도훈' / '투샷' 중 하나 (필터 버튼과 같은 글자) */
const COMMISSIONS = [
  { src: '', tag: '해인', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '도훈', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '투샷', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '투샷', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '해인', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '도훈', artist: '[작가명]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' }
];

/* ---------- 이미지 백업: 페어틀 (가로형) ---------- */
const PAIRFRAMES = [
  { src: '', tag: '투샷', title: '[페어틀 제목]', maker: '[제작자]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '해인', title: '[페어틀 제목]', maker: '[제작자]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '도훈', title: '[페어틀 제목]', maker: '[제작자]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' },
  { src: '', tag: '투샷', title: '[페어틀 제목]', maker: '[제작자]', date: '[YYYY.MM]', note: '[코멘트 한 줄]' }
];

/* ---------- 글 로그 ----------
   body: 문단마다 따옴표로 감싸고 쉼표로 구분
   password: 비워두면 공개 글, 적으면 잠긴 글
   ※ 주의: 이 비밀번호는 '연출용'이에요. 사이트 소스 보기를 하면 누구나 볼 수 있어서
     진짜로 숨겨야 하는 글에는 쓰지 마세요. */
const LOGS = [
  { title: '[글 제목 01]', date: '[YYYY.MM.DD]', pov: '[해인 / 도훈]', password: '',
    body: ['[본문이 여기에 들어갑니다.]', '[두 번째 문단.]'] },
  { title: '[글 제목 02]', date: '[YYYY.MM.DD]', pov: '[해인 / 도훈]', password: '',
    body: ['[본문]'] },
  { title: '[글 제목 03]', date: '[YYYY.MM.DD]', pov: '[해인 / 도훈]', password: '0403',
    body: ['[잠긴 글의 본문]'] },
  { title: '[글 제목 04]', date: '[YYYY.MM.DD]', pov: '[해인 / 도훈]', password: '',
    body: ['[본문]'] }
];

/* ---------- 메신저 백업 ----------
   from: 'haein'(왼쪽) / 'dohun'(오른쪽) / 'system'(가운데 알림) / 'error'(빨간 알림) */
const CHATS = [
  {
    title: '[대화 백업 01]', date: '[YYYY.MM.DD]', about: '[상황 한 줄]',
    messages: [
      { from: 'system', text: '대화 기록을 복원했습니다 · [YYYY.MM.DD]' },
      { from: 'haein', text: '[해인의 메시지]', time: '[00:00]' },
      { from: 'dohun', text: '[도훈의 메시지]', time: '[00:00]' },
      { from: 'dohun', text: '[도훈의 메시지]', time: '[00:00]' },
      { from: 'error', text: '전송 실패 — 403 · 메시지가 상대에게 닿지 않았습니다' },
      { from: 'haein', text: '[해인의 메시지]', time: '[00:00]' }
    ]
  },
  {
    title: '[대화 백업 02]', date: '[YYYY.MM.DD]', about: '[상황 한 줄]',
    messages: [
      { from: 'system', text: '대화 기록을 복원했습니다 · [YYYY.MM.DD]' },
      { from: 'dohun', text: '[도훈의 메시지]', time: '[00:00]' },
      { from: 'haein', text: '[해인의 메시지]', time: '[00:00]' }
    ]
  }
];

/* ---------- 타임라인 ----------
   type: 'deny'(빨강) / 'ok'(초록) / ''(흰색) */
const TIMELINE = [
  { date: '[YYYY.MM]', code: '201 CREATED',    type: '',     title: '[캐릭터 등록 — 첫 만남]', desc: '[사건 설명]' },
  { date: '[YYYY.MM]', code: '403 FORBIDDEN',  type: 'deny', title: '[첫 번째 거절]',          desc: '[권한은 있었지만 열리지 않았던 순간]' },
  { date: '[YYYY.MM]', code: '425 TOO EARLY',  type: '',     title: '[아직 이른 순간]',        desc: '[사건 설명]' },
  { date: '[YYYY.MM]', code: '102 PROCESSING', type: '',     title: '[사건 제목]',             desc: '[사건 설명]' },
  { date: '[YYYY.MM]', code: '200 OK',         type: 'ok',   title: '[문이 열린 날]',          desc: '[사건 설명]' }
];
