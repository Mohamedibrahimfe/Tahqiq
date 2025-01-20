import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

export default function DashLayout() {
    
  return (
    <div >
        <div className="mb-16">
            <Sidebar />
        </div>
        <div className="min-h-screen">
            <Outlet />
        </div>
    </div>
  )
}
