import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExerciseForm from "../components/ExerciseForm";
import Cards from "../components/Cards";
import { getExercises, reset } from '../store/reducerSlices/eSlice';
import { toast } from "react-toastify";
import BackDrop from '../components/BackDrop';

const DashBoard = () => {
    const { user } = useSelector((state) => state.auth);
    const { exer, isLoading, isError, message } = useSelector(state => state.exercise);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (!user) {
            navigate("/login");
        }

        dispatch(getExercises());

        return () => {
            dispatch(reset());
        }
    }, [user, navigate, dispatch, message, isError]);


    if (isLoading) {
        return <BackDrop />
    }

    return (
        <div className='bg-zinc-900 h-screen'>
            <div className='bg-zinc-900 space-y-5 md:space-y-0 md:px-24 px-5 pt-6 gap-4 md:flex md:space-x-5'>
                <div >
                    <h1 className='text-white text-2xl text-center'>Create exercise to track</h1>
                    <ExerciseForm />
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 flex-grow'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default DashBoard