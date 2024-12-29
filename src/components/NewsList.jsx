import React from 'react'
import NewsCard from './NewsCard'

function NewsList({ news }) {
  if (!news || news.length === 0) {
    return <div className="text-center text-gray-500">No news articles available.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  )
}

export default NewsList

