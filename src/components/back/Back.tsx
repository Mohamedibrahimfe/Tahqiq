import { Link } from "react-router-dom"
export default function Back() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-4 right-4" >
      <Link to="/">Back</Link>
    </button>
  )
}
