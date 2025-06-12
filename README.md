# AI Agent Project

## Project Overview

The AI Agent project is designed to provide an interactive chat interface powered by AI embeddings. It allows users to ask questions and receive intelligent responses. The project leverages modern web technologies like Next.js and React, along with AI-powered APIs for embedding and processing user prompts.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add the following credentials:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   OPENAI_API_KEY=
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the application.

## Features

- **Interactive Chat**: Users can input prompts and receive AI-generated responses.
- **Error Handling**: Custom error pages are implemented to handle various HTTP status codes.
- **React Refresh**: Hot module replacement (HMR) is enabled for seamless development.
- **Optimized Fonts**: Uses `next/font` for font optimization.
- **Vercel Deployment**: Ready for deployment on the Vercel platform.
- **Supabase Authentication**: Supports user authentication via email and magic link for secure and seamless login.

## Version Bumping on Push

This project uses `husky` and `standard-version` to automatically bump the package version on each push commit.

### Setup

1. Install dependencies:

   ```bash
   npm install husky standard-version --save-dev
   ```

2. Enable Husky:

   ```bash
   npx husky install
   ```

3. Add the `post-push` hook:

   ```bash
   npx husky add .husky/post-push "npm run postpush"
   ```

Now, every time you push commits, the package version will be bumped automatically.

## Additional Resources

For more information about Next.js and deployment options, visit:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
