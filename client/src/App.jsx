import { useCallback } from "react";
import useSWR from 'swr'
import { Card } from "./components/Card";
import { CreateCard } from "./components/CreateCard";
import { BACKEND_URL, sendFetch, fetcher } from "./utils";

function App() {
  const { data, mutate } = useSWR(`${BACKEND_URL}/cards`, fetcher)
  const onSubmit = useCallback(async ({ title }, { resetForm }) => {
    await sendFetch(`${BACKEND_URL}/cards`, "POST", { title })
    resetForm()
    await mutate()
  }, [fetch, mutate])

  const onDelete = useCallback((id) => async () => {
    await sendFetch(`${BACKEND_URL}/cards/${id}`, "DELETE")
    await mutate()
  }, [fetch, mutate])

  return (
    <div className="pt-16">
      <CreateCard onSubmit={onSubmit} />
      <div className="mt-8 w-full flex flex-wrap px-5 max-w-xl mx-auto">
        {(data || []).map(({ _id, title }) => <Card title={title} onDelete={onDelete(_id)} />)}
      </div>
    </div>
  );
}

export default App;
