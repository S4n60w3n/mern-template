import { Input } from '../Input';
import { Formik, Form } from 'formik';


export const CreateCard = ({ onSubmit }) => {
    return (<Formik initialValues={{ title: '' }} onSubmit={onSubmit}>
      <Form className='w-72 relative mx-auto'>
        <h2 className='text-3xl text-gray-800 mb-4'>Create card</h2>
        <Input name="title" />
        <button className={"shadow w-full my-4 px-4 py-2 border-2 border-gray-700 rounded text-white bg-blue-600 hover:bg-blue-500"} type="submit">
          Submit
        </button>
    </Form>
      </Formik>)
      
}