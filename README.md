# Event manager website

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)

## Description

![](./screenshot.jpg)

Built with Next.js 14, this project is a full-stack platform for managing events. It can serves as a hub, spotlighting different events. With secured payements handle by Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

## Tech stack

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## Features

- **Authentication with Clerk**
- **Events** : creating, reading, updating, deleting events.
  - Create events: users can create new events
  - Read events: users can access to a detail view for one specific event or list all awailable events.
  - Update events: users can update their events
  - Delete events
- **Related events**: event related are accessible on the detail page
- **Organized events**: event created by a user are shown on the user's profile
- **Search and filter**: it's easy to search a specific event
- **New Category**: When creating a new event the user can select an existing category or create a new one.
- **Checkout and pay with stripe**: we are using the Stripe API to handle secured payement.
- **Search orders**: A user can easily search in the past orders to find a purchase

## Installation

To install and set up the project, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/gmagnenat/event_platform.git
cd event_platform
```

2. **Install the project dependencies**

```bash
npm install
```

2. **Add an .env file**  
   Create a new file .env the root of the project with the following values.

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk endpoints
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB
MONGODB_URI=

WEBHOOK_SECRET=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Add your keys and credentials

4. **Run the project**

```bash
npm run dev
```
