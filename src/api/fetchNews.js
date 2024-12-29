// This will be our backend API endpoint
export async function fetchNewsFromAPI() {
  const response = await fetch('https://newsapi.org/v2/top-headlines', {
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`,
      'X-Api-Key': import.meta.env.VITE_NEWS_API_KEY,
      'User-Agent': 'news-app/1.0'
    },
    params: {
      country: 'us'
    }
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}
