import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createExercise, reset } from "../store/reducerSlices/eSlice"

const ExerciseForm = (props) => {
    const [formData, setFormData] = useState({ exercise: "", sets: "", reps: "", completed: "" });
    const dispatch = useDispatch();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(createExercise(formData));
        setFormData({ exercise: "", sets: "", reps: "", completed: "" })
    }
    console.log(formData);
    return (
        <form className=" max-w-sm  bg-lime-200 p-4 rounded-lg " onSubmit={formSubmitHandler}>
            <div className="flex-col mx-4 mt-6">
                <div className="w-full  px-3 mb-6 ">
                    {/* <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                    >
                        Exercise
                    </label> */}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Exercise Name"
                        onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
                        value={formData.exercise}
                    />

                </div>
                <div className="w-full  px-3 mb-6">
                    {/* <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                    >
                        Set
                    </label> */}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="number"
                        placeholder="No. of Sets"
                        onChange={(e) => setFormData({ ...formData, sets: e.target.value })}
                        value={formData.sets}
                    />
                </div>
                <div className="w-full  px-3 mb-6">
                    {/* <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                    >
                        Reps
                    </label> */}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="number"

                        placeholder="No. of Reps"
                        onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
                        value={formData.reps}
                    />
                </div>
                <div className="w-full  px-3">
                    {/* <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                    >
                        Time
                    </label> */}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="number"
                        placeholder="No. of Sets Completed"
                        onChange={(e) => setFormData({ ...formData, completed: e.target.value })}
                        value={formData.completed}
                    />
                </div>
                <div className="w-full  px-3 mt-6">
                    <button type="submit" className=" w-full shadow bg-rose-500 hover:bg-rose-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ExerciseForm