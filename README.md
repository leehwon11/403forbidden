# 403 Forbidden — 현도훈 × 모해인 갠홈

## 폴더 구성

```
index.html        입구 (부팅 화면 + 보안 경고창)
home.html         시스템 메뉴
commission.html   이미지 백업 — 커미션
pairframe.html    이미지 백업 — 페어틀
log.html          글 로그 (잠긴 글 포함)
messenger.html    메신저 백업
wiki.html         캐릭터 위키
timeline.html     타임라인
assets/js/data.js ★ 내용은 전부 여기서 고쳐요
assets/css/style.css  색 · 글꼴 · 모양
assets/js/common.js   공용 기능 (보통 안 건드려도 돼요)
assets/img/       이미지 넣는 곳
```

## 내용 채우기

1. `assets/js/data.js` 를 열고 대괄호 `[ ]` 로 된 자리를 채워요.
2. 이미지는 `assets/img/` 아래에 올리고, data.js 의 `src: ''` 에 경로를 적어요.
   예) `src: 'assets/img/commission/01.png'`
3. 커미션 · 페어틀 · 글 · 대화 · 타임라인은 `{ ... },` 한 덩어리를 복사해서 늘리면 돼요.

## 색 바꾸기

`assets/css/style.css` 맨 위 `:root` 의 `--bar` (창 제목 바 색) 같은 값을 바꾸면 사이트 전체에 적용돼요.

## 잠긴 글 주의

글 로그의 `password` 는 분위기용 장치예요. 브라우저에서 소스 보기를 하면 볼 수 있으니,
정말 숨겨야 하는 글은 올리지 마세요.

## 부팅 화면

- 같은 탭에서는 처음 한 번만 나오고, 새로 열면 다시 나와요.
- 끄려면 data.js 의 `bootIntro: true` 를 `false` 로.
- 기기에서 '움직임 줄이기'를 켠 사람에게는 자동으로 생략돼요.

## 나루(naru.pub)에 올리기

**직접 업로드:** 나루 파일 관리자에 이 폴더 안의 내용물을 구조 그대로 올려요. (index.html 이 맨 위에 있어야 해요)

**GitHub 연결:**
1. GitHub에서 새 저장소(Repository)를 만들어요.
2. `uploading an existing file` 을 눌러 이 폴더 안의 파일 · 폴더를 전부 끌어다 놓고 Commit.
3. 나루 설정에서 그 저장소를 연결하면, 이후 GitHub에 수정해서 올릴 때마다 자동 배포돼요.
