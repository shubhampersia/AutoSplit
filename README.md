# AutoSplit

> Effortless shared expenses, powered by Next.js, Convex, Clerk, and more.

---

## 🚀 Features

- 🔒 Authentication with Clerk
- ⚡ Real-time backend with Convex
- 📝 Modern Next.js frontend
- 💸 Track balances, groups, expenses, and settlements
- 📨 Email support with Resend
- 🤖 Gemini AI API integration

---

## 🖥️ Local Development Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd autosplit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development servers

#### In terminal 1, run:

```bash
npm run dev
```

#### In terminal 2, run:

```bash
npx convex dev
```

---

## 🌎 Environment Variables Reference

| Variable                           | Where to find it                                               |
|-------------------------------------|---------------------------------------------------------------|
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY  | Clerk Dashboard → API Keys → Publishable Key                  |
| CLERK_SECRET_KEY                   | Clerk Dashboard → API Keys → Secret Key                       |
| CONVEX_DEPLOY_KEY                  | Convex Dashboard → Settings → URL & Deploy Key → Deploy Key   |
| CONVEX_DEPLOYMENT                  | Convex Dashboard → Settings → URL & Deploy Key → Deployment Name |
| NEXT_PUBLIC_CONVEX_URL             | Convex Dashboard → Settings → URL & Deploy Key → API URL      |
| NEXT_PUBLIC_CLERK_SIGN_IN_URL      | Use `/sign-in` (default)                                      |
| NEXT_PUBLIC_CLERK_SIGN_UP_URL      | Use `/sign-up` (default)                                      |
| CLERK_JWT_ISSUER_DOMAIN            | Clerk Dashboard → Instance Settings → Frontend API URL         |
| RESEND_API_KEY                     | Resend Dashboard → API Keys                                   |
| GEMINI_API_KEY                     | [Google AI Studio](https://makersuite.google.com/app/apikey)  |

---

**Happy building! 🚀**
