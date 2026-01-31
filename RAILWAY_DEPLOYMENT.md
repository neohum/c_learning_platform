# Railway 배포 가이드

Railway에 C Learning Platform을 배포하는 방법입니다.

## 문제: GCC 없음

Railway의 기본 Node.js 환경에는 GCC가 설치되어 있지 않습니다. C 코드 컴파일을 위해 GCC를 설치해야 합니다.

## 해결 방법 1: nixpacks.toml 사용 (권장)

이 방법이 가장 간단합니다. 프로젝트에 이미 `nixpacks.toml` 파일이 포함되어 있습니다.

### 배포 단계:

1. **Railway 프로젝트 설정**
   ```bash
   # Railway CLI 설치 (선택사항)
   npm i -g @railway/cli

   # Railway 로그인
   railway login
   ```

2. **코드 푸시**
   ```bash
   cd c-learning-platform-nextjs
   git init
   git add .
   git commit -m "Deploy to Railway with GCC support"
   git push
   ```

3. **Railway에서 자동 감지**
   - Railway가 `nixpacks.toml`을 자동으로 감지합니다
   - GCC와 필요한 도구들이 자동으로 설치됩니다

4. **배포 확인**
   - 배포 후 `https://your-app.up.railway.app/api/health` 접속
   - `"gcc": true` 확인

## 해결 방법 2: Dockerfile 사용

더 많은 제어가 필요한 경우 Dockerfile을 사용할 수 있습니다.

### 배포 단계:

1. **Railway 설정에서 Dockerfile 활성화**
   - Railway 프로젝트 → Settings
   - Build 섹션에서 "Use Dockerfile" 선택

2. **환경 변수 설정** (선택사항)
   ```
   NODE_ENV=production
   PORT=3000
   ```

3. **배포**
   - Git push하면 자동으로 Docker 이미지가 빌드됩니다

## 테스트

배포 후 다음 명령어로 테스트:

```bash
# Health check
curl https://your-app.up.railway.app/api/health

# 결과: {"status":"ok","message":"C Learning Platform API is running","gcc":true}

# C 코드 컴파일 테스트
curl -X POST https://your-app.up.railway.app/api/compile \
  -H "Content-Type: application/json" \
  -d '{"code":"#include <stdio.h>\nint main() { printf(\"Hello!\"); return 0; }"}'
```

## 현재 배포 URL

https://clearningplatform-production.up.railway.app/

## 문제 해결

### GCC가 여전히 false인 경우:

1. **nixpacks.toml 확인**
   - 파일이 프로젝트 루트에 있는지 확인
   - Git에 커밋되었는지 확인

2. **Railway 재배포**
   - Railway 대시보드에서 "Redeploy" 클릭
   - 또는 빈 커밋 푸시: `git commit --allow-empty -m "Redeploy" && git push`

3. **빌드 로그 확인**
   - Railway 대시보드 → Deployments
   - 최신 배포 클릭 → View Logs
   - GCC 설치 로그 확인

### 컴파일 타임아웃

Railway의 무료 플랜은 시간 제한이 있습니다. `app/api/compile/route.ts`에서 타임아웃을 조정할 수 있습니다:

```typescript
const { stdout, stderr } = await execAsync(execCommand, {
  timeout: 5000,  // 5초 → 필요시 조정
  maxBuffer: 1024 * 1024
});
```

## 추가 최적화

### 1. 메모리 제한 설정

Railway Settings → Resources에서 메모리 증가:
- 최소: 512MB
- 권장: 1GB

### 2. Rate Limiting 추가

프로덕션에서는 rate limiting을 추가하세요:

```bash
npm install express-rate-limit
```

### 3. 모니터링

Railway의 메트릭을 확인하여:
- CPU 사용량
- 메모리 사용량
- 응답 시간

## 보안 고려사항

⚠️ **중요**: C 코드 실행은 보안 위험이 있습니다!

프로덕션에서는 다음을 구현하세요:

1. **인증/인가** - 사용자 로그인 요구
2. **Rate Limiting** - API 호출 제한
3. **코드 검증** - 악의적인 코드 차단
4. **리소스 제한** - 메모리/CPU 제한
5. **샌드박싱** - Docker 컨테이너 격리

## 비용

Railway 무료 플랜:
- $5 크레딧/월
- 500시간 실행 시간
- GCC 설치 시 빌드 시간이 약간 증가

프로덕션 사용 시 유료 플랜 고려를 권장합니다.

---

**배포 성공 후 브라우저에서 https://clearningplatform-production.up.railway.app/ 접속하여 테스트하세요!**
