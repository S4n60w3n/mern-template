export const Card = ({ title, onDelete }) => {
  return (
    <div className={'relative text-xl w-64 text-center px-8 py-8 shadow-xl'}>
      {title}
      <button
        className="absolute right-4 top-4 text-red-500 p-2"
        onClick={onDelete}
      >
        X
      </button>
    </div>
  )
}
