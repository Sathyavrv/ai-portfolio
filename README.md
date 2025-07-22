# AI Portfolio with Gemini Integration

A modern, AI-powered portfolio website featuring an intelligent job screener and chatbot powered by Google's Gemini AI.

## Features

- **AI Job Screener**: Paste job descriptions to get instant analysis of candidate fit
- **Interactive Chatbot**: Practice interview questions with AI-powered responses
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Real-time AI**: Powered by Google Gemini API for intelligent responses

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

To get a Gemini API key:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env.local` file

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Deploy to Production

```bash
npx vercel --prod
```

## API Endpoints

- `POST /api/gemini` - Handles AI requests for job screening and chatbot responses

## Project Structure

```
ai-portfolio/
├── index.html          # Main portfolio page
├── api/
│   └── gemini.js       # Gemini API serverless function
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel configuration
└── README.md          # This file
```

## How It Works

1. **Job Screener**: Users paste job descriptions, which are sent to Gemini AI along with the candidate's resume data. The AI returns a structured analysis including match scores, pros/cons, and hiring recommendations.

2. **Chatbot**: Users can ask interview questions, and the AI responds as the candidate using the resume data to provide authentic, experience-based answers.

3. **Real-time Processing**: All AI interactions happen in real-time through the Gemini API, providing instant, intelligent responses.

## Technologies Used

- **Frontend**: HTML, CSS (Tailwind), JavaScript
- **Backend**: Vercel Serverless Functions
- **AI**: Google Gemini API
- **Charts**: Chart.js
- **Deployment**: Vercel 