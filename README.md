# Electron + React + Typescript template

> **Electron**: HTML, CSS, Javascript와 같은 기본적인 웹 지식으로도 데스크탑 애플리케이션을 만들 수 있는 프레임워크.

### 프로젝트 실행

```bash
git clone https://github.com/ptp-templates/electron-react-typescript {app name}

yarn install
yarn start
```

<br>
<br>
<br>

---

<br>
<br>
<br>

### 프로젝트 세팅 (CLI 입력 필요 없음)

```bash
npx create-react-app {app name} --template typescript
```

```bash
yarn add electron-is-dev
yarn add electron electron-builder concurrently cross-env wait-on
```

- electron-is-dev
  - 개발 환경과 프로덕션 환경을 확인
- electron
  - 일렉트론 패키지
- electron-builder
  - 일렉트론을 패키징하는 모듈. 다양한 옵션 사용 가능
- concurrently
  - 두 개 이상의 명령어를 하나의 스크립트에서 실행할 수 있음
- cross-env
  - 운영체제마다 다른 환경변수 설정을 통일시켜줌
- wait-on
  - Node 환경에서 파나 이상의 포트, 소켓같은 자원이 사용 가능해질 때까지 대기하도록 지연시키는 모듈
