import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateExercise } from "../../store/reducerSlices/eSlice";

const Update = () => {
  

    const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { user, loading } = useSelector((state) => state.app);
  console.log(user);
  
  

  useEffect(() => {
    if (id) {
      const singleUser = user.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
      console.log(singleUser[0]);
    }
  }, []);
  console.log(updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleSubmit=(e)=>{
   e.preventDefault();
    dispatch(updateExercise(updateData));
    navigate('/crud/read');
  }
  
  return (
    <>
      <h1 className="text-3xl text-center mt-4 font-semibold ">Update</h1>

      <form
        className="w-full max-w-lg m-auto bg-rose-300 p-4 rounded-lg mt-4 "
        onSubmit={handleSubmit}
      >
        <div className="flex-col flex-wrap mx-4 mt-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Exercise
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="Exercise"
              placeholder="Pushups"
              value={updateData && updateData.Exercise}
                onChange={newData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Set
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Set"
              placeholder="3"
               value={updateData && updateData.Set}
               onChange={newData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Reps
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="Reps"
              placeholder="12"
              value={updateData && updateData.Reps}
                onChange={newData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Complete
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Complete"
              placeholder="2"
              value={updateData && updateData.Complete}
                onChange={newData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-2">
            <button
              type="submit"
              className="  shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
