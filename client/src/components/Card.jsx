import React from 'react'
import del from "../assets/delete.svg";
import edi from "../assets/edit.svg";
import { deleteExercise, getExercises, reset } from '../store/reducerSlices/eSlice';
import { useDispatch } from 'react-redux';

const Card = (props) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteExercise(props.det._id));
    }

    const updateHandler = () => {

    }
    return (
        <div className='bg-purple-800 md:h-64 p-6 md:10 rounded-2xl shadow-sm shadow-slate-50'>
            <div className='flex-col md:flex-row'>
                <div className='flex justify-evenly font-bold text-lg text-white '>
                    <div className='space-y-1'>
                        <h1>Exercise:</h1>
                        <h1>Reps:</h1>
                        <h1>Sets:</h1>
                        <h1>Completed:</h1>
                    </div>
                    <div className='space-y-1 text-lime-200'>
                        <h1>{props.det.exercise}</h1>
                        <h1>{props.det.reps}</h1>
                        <h1>{props.det.sets}</h1>
                        <h1>{props.det.completed}</h1>
                    </div>
                    {/* <div className='space-y-1 text-lime-200'>
                        <h1>Dips</h1>
                        <h1>12</h1>
                        <h1>12</h1>
                        <h1>3</h1>
                    </div> */}
                </div>

                <div className='flex justify-evenly md:space-x-0  mt-4'>
                    <button onClick={deleteHandler} className='flex text-white items-center  space-x-1 p-3 px-6 bg-black rounded-xl'>
                        <img src={del} alt="delete" className='text-white h-4 w-4' />
                        <h2>Delete</h2>
                    </button>
                    <button onClick={updateHandler} className='flex text-white items-center  space-x-1 p-3 px-6 bg-black rounded-xl'>
                        <img src={edi} alt="edit" className='text-white h-4 w-4' />
                        <h2>Update</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card