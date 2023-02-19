---
sidebar_position: 1
---

This endpoint streams real-time foreign currency exchange rates.

```bash title="SSE Streaming Example (Paid subscriptions only)"

# Updates up to 4 times per second
curl --header 'Accept: text/event-stream' https://cloud-sse.iexapis.com/stable/forex\?symbols\=USDCAD\&token\=YOUR_TOKEN

```
