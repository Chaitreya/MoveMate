import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const changeHandler = () => {
    navigate("/crud/create");
  };
  const changeHandler2=()=>{
    navigate('/crud/read');
  }
  return (
    <>
    
      <div className="bg-zinc-400">
        <button
          onClick={changeHandler}
          className="m-2 border border-rose-400 p-2 rounded-xl bg-green-400 font-semibold"
        >
          Add Exercise
        </button>
        <button
          onClick={changeHandler2}
          className="m-2 border border-rose-400 p-2 rounded-xl bg-green-400 font-semibold"
        >
          View Exercises
        </button>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
