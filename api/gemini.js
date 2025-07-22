// File: /api/gemini.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { prompt } = req.body;
  
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
  
    // This is where we securely use the Environment Variable on the server
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'API key not configured' });
    }
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  
    try {
      const geminiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });
  
      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API error:', errorText);
        throw new Error(`Gemini API failed: ${errorText}`);
      }
  
      const data = await geminiResponse.json();
      res.status(200).json(data);
  
    } catch (error) {
      console.error('Error in serverless function:', error);
      res.status(500).json({ error: 'Failed to fetch response from AI model.' });
    }
  }