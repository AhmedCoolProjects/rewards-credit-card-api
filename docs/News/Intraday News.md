---
sidebar_position: 1
---

Provides intraday news from over 3,000 global news sources including major publications, regional media, and social. This endpoint returns up to the last 50 articles. Use the [historical news](https://iexcloud.io/docs/api/#historical-news) endpoint to fetch news as far back as January 2019

```bash title="HTTP REQUEST"

GET /stock/{symbol}/news/last/{last}

```

```json title="RESPONSE"
[
  {
    "datetime": 1545215400000,
    "headline": "Voice Search Technology Creates A New Paradigm For Marketers",
    "source": "Benzinga",
    "url": "https://cloud.iexapis.com/stable/news/article/8348646549980454",
    "summary": "<p>Voice search is likely to grow by leap and bounds, with technological advancements leading to better adoption and fueling the growth cycle, according to Lindsay Boyajian, <a href=\"http://loupventures.com/how-the-future-of-voice-search-affects-marketers-today/\">a guest contributor at Loup Ventu...",
    "related": "AAPL,AMZN,GOOG,GOOGL,MSFT",
    "image": "https://cloud.iexapis.com/stable/news/image/7594023985414148",
    "lang": "en",
    "hasPaywall": true
  }
]
```

```bash title="SSE Example"

curl --header 'Accept: text/event-stream' https://cloud-sse.iexapis.com/stable/news-stream\?symbols\=aapl\&token\=YOUR_TOKEN

```
