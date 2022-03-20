export const BACKEND_URL = 'http://localhost:5000'

export const fetcher = (url) => fetch(url).then((res) => res.json())

export const sendFetch = (url, method, body) =>
  fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json' },
  })
