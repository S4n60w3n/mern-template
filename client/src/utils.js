export const BACKEND_URL = "http://localhost:5000"

export const fetcher = (url) => fetch(url).then((res) => res.json());


export const post = (url, body) => fetch(url, { method: "POST", body: JSON.stringify(body), headers: { "Content-type": "application/json" } })