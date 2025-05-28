# AI Agent Project

## Project Overview

The AI Agent project is designed to provide an interactive chat interface powered by AI embeddings. It allows users to ask questions and receive intelligent responses. The project leverages modern web technologies like Next.js and React, along with AI-powered APIs for embedding and processing user prompts.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/ai-agent.git
   cd ai-agent
   ```

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

## Additional Resources

For more information about Next.js and deployment options, visit:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
