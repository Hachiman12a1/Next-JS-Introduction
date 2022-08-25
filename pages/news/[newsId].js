import React from 'react';
import {useRouter} from 'next/router'

function DetailPage(props) {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);
  // send a request to the backend API
  // to fetch the news item with newsId
  return (
    <h1>
      Detail Page
    </h1>
  );
}

export default DetailPage;