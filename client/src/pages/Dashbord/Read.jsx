import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteE,show } from "../../store/reducerSlices/eSlice";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.app);
  const navigate=useNavigate();

  useEffect(() => {
    dispatch(show());
  }, []);

  if (loading) {
    return <h1 className="text-center text-4xl text-rose-400 mt-20 uppercase">loading</h1>;
  }
  return (
    <>
      <h1 className="text-3xl text-center mt-4 font-semibold">All Exercises</h1>
      {user &&
        user.map((user) => {
          return (
            <div key={user.id} className="card bg-slate-300 mx-auto w-1/3 rounded-xl m-2 p-4">
              <h1 className="uppercase text-2xl font-semibold">
                {user.Exercise}
              </h1>
              <h1>Set: {user.Set}</h1>
              <h1>Reps: {user.Reps}</h1>
              <h1>Complete: {user.Complete}</h1>
              <button className=" mx-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl"
               onClick={()=>navigate(`/crud/update/${user.id}`)}
              >
                Update
              </button>
              <button className="  shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl"
              onClick={()=>dispatch(deleteE(user.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Read;
