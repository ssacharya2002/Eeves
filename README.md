<div align="center">
  <img src="./scrrenshots/eeves.svg" alt="Eeves Logo" />
</div>

# Eeves

Eeves is a community-oriented platform that enables users to participate in events and purchase tickets. This project is built with Next.js, TypeScript, Prisma, and MySQL, with authentication handled by Clerk.js and payment processing via Stripe.

<div align="center">
  <img src="./scrrenshots/landing-page.png" alt="Eeves Logo" />
</div>

## Table of Contents

- [Eeves](#eeves)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication with Clerk.js
- Secure payment processing with Stripe
- Scalable development with Next.js and TypeScript
- Data management using Prisma ORM and MySQL
- Event creation and management
- Ticket purchasing and tracking
- Google Maps integration for event locations

## Technologies Used

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma ORM
- **Database:** MySQL
- **Authentication:** Clerk.js
- **Payment Processing:** Stripe
- **Other:** Docker, Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssacharya2002/eeves
   cd eeves
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```bash

   DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<dbname>?ssl-mode=REQUIRED"


    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    NEXT_PUBLIC_AWS_ACCESS_KEY_ID=
    NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=
    NEXT_PUBLIC_S3_BUCKET_NAME=
    NEXT_PUBLIC_AWS_REGION=
    NEXT_PUBLIC_CLOUDFRONT_URL=

    STRIPE_API_KEY=
    FRONTEND_STORE_URL=http://localhost:3000
    STRIPE_WEBHOOK_SECRET=

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   ```


4. Run Prisma generate command:
    ```bash
    npx prisma generate
    ````

1. Push the Prisma schema to the database:

   ```bash
   npx prisma db push
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- isit http://localhost:3000 to view the application.
- Sign up or log in using Clerk.js authentication.
- Create, manage, and browse events.
- Purchase tickets securely using Stripe.

## Contributing

- Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

- This project is licensed under the MIT License.
