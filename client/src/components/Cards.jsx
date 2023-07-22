import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import BackDrop from "./BackDrop";
import { toast } from "react-toastify";
import { getExercises, reset } from '../store/reducerSlices/eSlice';

const Cards = (props) => {

    const { exer } = useSelector(state => state.exercise);

    return (
        <>
            {exer.length === 0 ? <h1 className='text-4xl text-white'>No Exercises</h1> : <>{

                exer.map(currExer => <Card det={currExer} key={currExer._id} />)
            }</>}
        </>
    )
}

export default Cards