import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Spotlight } from "../Spotlight";

export function NavBar() {
  const navigate = useNavigate()

  return (
    <nav className="bg-slate-900">
      <div className="max-w-xl flex justify-between m-auto p-4">
        <IconHome aria-labelledby="Navigate Home" onClick={() => navigate('/')} className="cursor-pointer stroke-white" role="img" />
        <Spotlight />
      </div>
    </nav>
  )
}