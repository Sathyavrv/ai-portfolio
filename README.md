# AI Portfolio - Sathya Balamurugan

A modern, AI-powered portfolio website featuring an interactive AI career bot and chatbot powered by Google's Gemini API.

## Features

- **AI Career Bot**: Paste job descriptions for instant analysis of qualifications
- **Interactive Chatbot**: Practice interview questions with AI responses
- **Responsive Design**: Modern UI with smooth animations
- **Skills Visualization**: Radar charts and progress bars
- **Project Portfolio**: Showcase of data science and ML projects

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Charts**: Chart.js
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-portfolio
```

2. Install Vercel CLI:
```bash
npm i -g vercel
```

3. Set up environment variables:
```bash
vercel env add GEMINI_API_KEY
```

4. Run locally:
```bash
vercel dev
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI if you haven't:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Set environment variable:
```bash
vercel env add GEMINI_API_KEY
```

5. Redeploy with environment variable:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and create an account
3. Click "New Project" and import your GitHub repository
4. In the project settings, go to "Environment Variables"
5. Add `GEMINI_API_KEY` with your Google Gemini API key
6. Deploy!

## Environment Variables

You need to set up the following environment variable:

- `GEMINI_API_KEY`: Your Google Gemini API key

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and add it to your Vercel environment variables

## Project Structure

```
ai-portfolio/
├── index.html          # Main portfolio page
├── api/
│   └── gemini.js       # Gemini API serverless function
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel configuration
└── README.md          # This file
```

## Troubleshooting

### 500 Error from API
- Check that `GEMINI_API_KEY` is set in Vercel environment variables
- Verify your Gemini API key is valid and has sufficient quota
- Check Vercel function logs for detailed error messages

### API Not Found
- Ensure the `api/` folder is in the root directory
- Verify `vercel.json` routing configuration is correct

## License

MIT License 