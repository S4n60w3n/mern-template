import { useField } from "formik";

export const Input = ({ name, ...rest }) => {
  const [field] = useField(name);
    return <input className="w-full border-2 px-4 py-2 rounded border-gray-900" {...field} {...rest} />
}