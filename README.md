# Influe 🔍🚀

This a personal project for influencers and companies match

(this project is being developed)

You can see the project up in this link : https://influe.vercel.app/

To login in development, the application not have SMTP server to send confirmation code and send two auth code, because this, i set one user for login in develop.


Key Features:
-  Next-auth v5
-  Next.js 14 
-  Credentials Provider
-  Forgot password functionality
-  Email verification
-  Two factor verification
-  User roles (Admin & User)
-  Register component
-  Forgot password component
-  Change email with new verification
-  Change password with old password
-  Enable/disable two-factor 
-  Change user role

In developing:
- 💻 Category for the user aplication, if the user is a company or influencer

In backlog:
- 🛡️ Protect API Routes for admins only
- 🌐 OAuth Provider (Social login with instagram & twitter)
- 💻 Dashboard with metrics for influencers
- 💻 Sugestions posts with AI
- 💻 CRUD proposals
- 💻 Search influencers with price per publication




### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/rafaelmedeirosjob/influe.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

TIKTOK_CLIENT_ID=
TIKTOK_CLIENT_SECRET=

INSTAGRAM_CLIENT_ID=
INSTAGRAM_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
