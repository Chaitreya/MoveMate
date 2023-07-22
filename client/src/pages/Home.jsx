import { Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import TimelineIcon from '@mui/icons-material/Timeline';
import Diversity1Icon from '@mui/icons-material/Diversity1';

function Home() {

    return (
        <div className='flex justify-center items-start bg-zinc-900 '>
            <div className="flex flex-col justify-center mt-24 mx-8">
                <div className="text-white  p-2 flex flex-col h-2/3 border-b pb-24">
                    <h1 className="text-rose-500 text-4xl text-left font-bold">MoveMate</h1>
                    <br></br>
                    <p className='font-semibold p-2'>Unleash Your Fitness Journey: Profile, Progress, Exercises, Graphs, and Friends. Elevate Your Fitness Game!</p>
                    <div className="flex justify-end">
                        <Link to={'/register'} className="mt-20 px-4 py-3 text-lg font-semibold cursor-pointer bg-rose-500 hover:bg-rose-700 duration-200 rounded-lg justify-self-end w-1/2 text-center">SignUp Now</Link>
                    </div>
                </div>
                <div className='text-white mt-12 border-b pb-28 text-center'>
                    <h1 className='text-rose-500 text-xl font-bold p-2'>Profiles</h1>
                    <PersonAddIcon className='scale-125 mt-2' />
                    <h2 className='p-4 mt-4 font-semibold text-lime-200'>Build and Showcase profiles, share your fitness journey with the world. Inspire others on our platform.</h2>
                </div>
                <div className='text-white mt-12 border-b pb-28 text-center'>
                    <h1 className='text-rose-500 text-xl font-bold p-2'>Log your exercises</h1>
                    <HistoryToggleOffIcon className='scale-125 mt-2' />
                    <h2 className='p-4 mt-4 font-semibold text-lime-200'>Effortlessly log exercises, track progress, reach fitness goals. Start your journey today! </h2>
                </div>
                <div className='text-white mt-12 border-b pb-28 text-center'>
                    <h1 className='text-rose-500 text-xl font-semibold'>Graphs</h1>
                    <TimelineIcon className='scale-125 mt-2' />
                    <h2 className='p-4 mt-4 font-semibold text-lime-200'>Track exercises, visualize progress with interactive graphs. Achieve your fitness goals with data-driven insights.</h2>
                </div>
                <div className='text-white mt-12 border-b pb-28 text-center'>
                    <h1 className='text-rose-500 text-xl font-semibold'>Grow with friends</h1>
                    <Diversity1Icon className='scale-125 mt-2' />
                    <h2 className='p-4 mt-4 font-semibold text-lime-200'>Follow friends, stay connected. Share workouts, motivate each other. Together, achieve your fitness goals.</h2>
                </div>

            </div>

        </div>
    )
}

export default Home;