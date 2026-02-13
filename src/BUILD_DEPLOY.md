# 비센스바움 홈페이지 배포 가이드

## 1. 빌드하기

### 필수 설치
```bash
# Node.js 18 이상 설치 필요
node --version

# 패키지 설치
npm install
```

### 프로덕션 빌드
```bash
npm run build
```

빌드가 완료되면 `dist` 폴더가 생성됩니다.

## 2. Tomcat 배포하기

### 방법 1: 직접 복사 (권장)
1. `dist` 폴더의 **모든 내용**을 복사
2. `D:\apache-tomcat-7.0.47\webapps\wissensbaum\` 폴더에 붙여넣기
3. Tomcat 재시작

### 방법 2: WAR 파일로 배포
```bash
# dist 폴더로 이동
cd dist

# ZIP으로 압축
jar -cvf wissensbaum.war *

# 또는 7-Zip 사용
7z a -tzip wissensbaum.war *
```

생성된 `wissensbaum.war` 파일을 `D:\apache-tomcat-7.0.47\webapps\` 폴더에 복사하면 자동으로 압축 해제됩니다.

## 3. 접속 URL

```
http://localhost:8080/wissensbaum/
```

또는 외부 접속:
```
http://[서버IP]:8080/wissensbaum/
```

## 4. 업데이트 시

소스 코드 수정 후:
```bash
# 1. 빌드
npm run build

# 2. 기존 파일 삭제
D:\apache-tomcat-7.0.47\webapps\wissensbaum\ 폴더 내용 전체 삭제

# 3. 새 파일 복사
dist 폴더 내용 전체를 wissensbaum 폴더에 복사

# 4. Tomcat 재시작 (필요시)
```

## 5. Tomcat 설정 (선택사항)

### 루트 경로로 설정하기
만약 `http://localhost:8080/`로 바로 접속하고 싶다면:

1. `vite.config.ts` 수정:
```typescript
base: '/', // '/wissensbaum/' 대신 '/'로 변경
```

2. `webapps/ROOT` 폴더에 배포

### MIME 타입 설정 확인
`D:\apache-tomcat-7.0.47\conf\web.xml`에 다음 내용이 있는지 확인:

```xml
<mime-mapping>
    <extension>js</extension>
    <mime-type>application/javascript</mime-type>
</mime-mapping>
<mime-mapping>
    <extension>css</extension>
    <mime-type>text/css</mime-type>
</mime-mapping>
```

## 6. 문제 해결

### 404 에러 발생 시
- Tomcat 로그 확인: `logs/catalina.out`
- 배포 경로 확인: `webapps/wissensbaum` 폴더에 `index.html` 파일 존재 확인

### 리소스 로딩 실패 시
- 브라우저 개발자 도구(F12) → Console 탭에서 경로 확인
- `vite.config.ts`의 `base` 설정과 실제 배포 경로가 일치하는지 확인

### EmailJS 연동 확인
- 브라우저 Console에서 EmailJS 오류 확인
- 네트워크 방화벽에서 EmailJS API 차단 여부 확인

## 7. 성능 최적화

배포 전 체크리스트:
- ✅ `npm run build`로 프로덕션 빌드
- ✅ 불필요한 console.log 제거
- ✅ 이미지 최적화
- ✅ Gzip 압축 활성화 (Tomcat 설정)

## 8. 보안 설정

Tomcat 보안 설정 (선택사항):
1. 디렉토리 리스팅 비활성화
2. HTTPS 설정
3. CORS 헤더 설정 (API 사용 시)
