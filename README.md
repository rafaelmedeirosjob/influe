# Influe 🔍🚀

This a personal project for influencers and companies match

(this project is being developed)

You can see the project up in this link : https://influe.vercel.app/

To login in development, the application not have SMTP server to send confirmation code and send two auth code, because this, i set one user for login in develop.


Key Features:
- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

In developing:
- 💻 Category for the user aplication, if the user is a company or influencer

In backlog:
- 🛡️ Protect API Routes for admins only
- 🌐 OAuth Provider (Social login with instagram & twitter)
- 🔐 Protect Server Actions for admins only
- 👑 Render content for admins using RoleGate component
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
