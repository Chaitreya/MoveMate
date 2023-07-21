import { useState } from "react";
import { useDispatch } from "react-redux";

import { createExercise } from "../../store/reducerSlices/eSlice";
import { useNavigate } from "react-router-dom";


const CreateE = () => {
    const [user,setUser]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();

    

    const getData=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
        
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(user);
        dispatch(createExercise(user));
        navigate('/crud/read');
    }

    
  return (
    <>
    <h1 className="text-3xl bg-rose-300 mx-auto ">Create</h1>
      
      <form className="w-full max-w-lg m-auto bg-rose-300 p-4 rounded-lg mt-4 " onSubmit={handleSubmit}>
        <div className="flex-col flex-wrap mx-4 mt-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              
            >
              Exercise
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="Exercise"
              placeholder="Pushups"
              onChange={getData}
            />
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              
            >
              Set
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Set"
              placeholder="3"
              onChange={getData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              
            >
              Reps
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="Reps"
              placeholder="12"
              onChange={getData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              
            >
              Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Time"
              placeholder="2"
              onChange={getData}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-2">

          <button  type="submit" className="  shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        Submit
      </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateE;
