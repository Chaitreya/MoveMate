import pic2 from "../assets/profile-pic (1).png";

import "./About.css";
import pic3 from "../assets/landscape-g659f8694a_1280 (1).jpg";
import picb1 from "../assets/box1.jpg";
import picb2 from "../assets/box-2.jpg";

const About = () => {
  return (
    <>
      <div className="slogan relative hidden md:block">
        <img className="h-auto w-full" src={pic3} />
        <p className="absolute top-1/3 left-1/3 text-center text-white font-bold md:text-3xl">
          Run for a mile daily to be healthy.
        </p>
      </div>
      <div className="bg-zinc-900 md:px-11">

        <div className="Mission p-4 py-10">
          <h2 className="font-mono text-center text-lg text-white font-semibold pb-2 md:text-5xl md:pb-4">
            ABOUT MOVEMATE
          </h2>
          <div className=" text-justify text-white   m-auto md:w-1/2 md:text-lg">

            <p>Movemate is a platform where you get all your fitness record.</p>
            <p>
              Set your daily goals to burn calories. Invite your friends to
              challenges and compare your performace with them. We have more than
              150K community.We provides user profiles, activity feeds,
              challenges, leaderboards, and the ability to follow and interact
              with other users. Users can share achievements, provide support, and
              engage in friendly competition.
            </p>
          </div>
        </div>
        <div className="box bg-rose-400 m-4 md:flex ">
          <div className="p-4 md:w-1/2 ">
            <img className="border-t-4 border-l-4 border-zinc-900  md:w-[400px] md:mx-auto" src={picb1} />
          </div>
          <div className="p-4 text-white md:max-w-lg md:mt-8">
            <h3 className="font-mono font-medium text-xl pb-2 underline underline-offset-4 decoration-zinc-900">
              Fitness Hacks For Life
            </h3>
            <p className="font-normal opacity-90">
              I will have been training at Fitness Within 3 years December 2020.
              Since working out here I am stronger and in better shape than at any
              other time in my life. I find every class and every trainer are
              different but always super challenging, and this variety of workouts
              keeps me invested in maintaining a consistent motivation to show up
              and work hard
            </p>
          </div>
        </div>
        <div className="box bg-rose-400 m-4 md:flex md:flex-row-reverse ">
          <div className="p-4 md:w-1/2">
            <img className="border-t-4 border-r-4 border-zinc-900 md:w-[400px] md:mx-auto md:h-[300px]" src={picb2} />
          </div>
          <div className="p-4 text-white md:max-w-lg md:pl-2 md:mt-8">
            <h3 className="font-mono font-medium text-xl pb-2 underline underline-offset-4 decoration-zinc-900">
              Our Mission
            </h3>
            <p className="font-normal opacity-90">
              To enhance the quality of life. We serve through our fitness
              philosophy, facilities, programs, and products and to instill in the
              lives of people everywhere the value of health and fitness.
            </p>
          </div>
        </div>
        <div className="text-center text-3xl font-bold text-white pt-10">Testimonial</div>
        <div className=" flex-col container md:grid md:grid-cols-3  lg: grid lg:grid-cols-4  p-8 md:p-8 ">
          <div className="testimonial p-4  bg-white text-black bg-opacity-70 rounded-2xl md:col-span-2">
            <div className="flex items-center pb-2">
              <div>
                <img className="img1" src={pic2} />
              </div>
              <div className="flex-col p-2 leading-tight">
                <h3 className="text-lg font-medium">Amelia</h3>
                <p className="text-sm font-normal opacity-70">Verified User</p>
              </div>
            </div>
            <p>
              I will have been training at Fitness Within 3 years December 2020.
              Since working out here I am stronger and in better shape than at any
              other time in my life. I find every class and every trainer are
              different but always super challenging, and this variety of workouts
              keeps me invested in maintaining a consistent motivation to show up
              and work hard. The trainers are ALWAYS so encouraging, offering
              modifications when needed. Fitness Within always seems to go above
              and beyond to meet the needs of ALL of their clients. I have always
              felt that the staff value me as a member here. For example, the
              continuation of classes through zoom during the shutdown was great,
              with so many live and recorded options available. The level of
              accountability and expectation to give it your all never faltered.
              (June 2020)
            </p>
          </div>
          <div className="testimonial p-4 bg-neutral-500 rounded-2xl text-white">
            <div className="flex items-center pb-2">
              <div>
                <img className="img1" src={pic2} />
              </div>
              <div className="flex-col p-2 leading-tight">
                <h3 className="text-lg font-medium">Amelia</h3>
                <p className="text-sm font-normal opacity-70">Verified User</p>
              </div>
            </div>
            <p className="pb-4">
              Since joining Fitness Within one year ago, I have become stronger
              and I have lost 38lbs. The workouts are always different, hard and
              fun! The trainers will push you harder than though you could go.
              When I joined, I also signed up for their HYBRID program. I liked
              knowing you have someone there if you have questions and who is also
              going to hold you accountable. The meal plans were easy to customize
              to your personal needs.
            </p>
          </div>
          <div className="testimonial p-4 bg-neutral-500 text-white rounded-2xl">
            <div className="flex items-center pb-2">
              <div>
                <img className="img1" src={pic2} />
              </div>
              <div className="flex-col p-2 leading-tight">
                <h3 className="text-lg font-medium">Amelia</h3>
                <p className="text-sm font-normal opacity-70">Verified User</p>
              </div>
            </div>
            <p>
              For my birthday, my fiancé purchased the bootcamp service from
              Fitness Within. We were new to Reading and I wanted to find a new
              workout spot. I am stronger than when I started and I love how every
              bootcamp is different. Fitness Within is judgment free and I feel
              like everyone is a motivator. I joined Shred Challenge III because I
              wanted to challenge myself with something different. It was great to
              have everything laid out for us from the beginning.
            </p>
          </div>
          <div className="testimonial p-4  bg-white text-black bg-opacity-70 rounded-2xl md:col-span-2 lg:col-span-2">
            <div className="flex items-center pb-2">
              <div>
                <img className="img1" src={pic2} />
              </div>
              <div className="flex-col p-2 leading-tight">
                <h3 className="text-lg font-medium">Amelia</h3>
                <p className="text-sm font-normal opacity-70">Verified User</p>
              </div>
            </div>
            <p>
              Since joining Fitness Within 7 months ago I have lost 25 pounds. My
              favorite workouts are in small group. The trainers can give everyone
              as much attention as they need. They also push you to really
              challenge yourself with every workout. My favorite thing about the
              studio is the healthy competition with weekly challenges or the
              shred challenges but at the same time there is no judgment. Everyone
              wants everyone else to succeed and become the best version of
              themselves.It has helped me physically and mentally; I’m so lucky to
              have found Fitness Within. (July 2020)
            </p>
          </div>
          <div className="testimonial p-4 bg-neutral-500 text-white rounded-2xl md:row-start-3 md:col-span-3 lg:col-start-4 lg:row-start-1 lg:row-end-3">
            <div className="flex items-center pb-2">
              <div>
                <img className="img1" src={pic2} />
              </div>
              <div className="flex-col p-2 leading-tight">
                <h3 className="text-lg font-medium">Amelia</h3>
                <p className="text-sm font-normal opacity-70">Verified User</p>
              </div>
            </div>
            <p>
              I have been with Fitness Within for over 7 months. My biggest
              achievement is that I lost 12 lbs on the last Shred Challenge.
              During the Shred Challenge, my coach got me back on track when I
              lost motivation and all of the coaches are amazing and really care
              about you. The nutritional guidance is simple and straight forward.
              The recipes I have tried are surprisingly delicious, but so much
              more nutritious than what I might normally put together for even a
              “healthy meal”. My favorite part of the environment and culture is
              that the community is so welcoming and supportive. Even when I am
              the weakest or slowest in a class, I never feel out of place because
              everyone truly supports each other.My favorite thing about the
              workouts here is the people. We are like a family and everyone is
              pulling for each other. The trainers, besides the fact that they
              know their “stuff”, they make training fun and they know how to
              change it up. It certainly is never boring in this facility. I
              appreciate the availability of the trainers to respond to all your
              concerns/questions. They really want everyone to succeed (June 2020)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
