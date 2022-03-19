import { useCallback } from "react";
import { CreateCard } from "./components/CreateCard";
import { BACKEND_URL, post } from "./utils";

function App() {

  const onSubmit = useCallback(async ({ title }, { resetForm }) => {
    await post(`${BACKEND_URL}/record/add`, { title })
    resetForm()
  }, [post])

  return (
    <div className="pt-16">
      <CreateCard onSubmit={onSubmit} /> 
    </div>
  );
}

export default App;
