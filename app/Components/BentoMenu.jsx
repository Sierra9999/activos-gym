import React from 'react'
import Image from 'next/image'

const BentoMenu = () => {

  const workouts = [
    {
      workoutName: 'Yoga',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/Images/yoga.jpg'
    },
    {
      workoutName: 'Treadmill',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/Images/treadmill.jpg'
    },

    {
      workoutName: 'Weight Lifting',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/Images/weight-lifting.jpg'
    },
    {
      workoutName: 'Dancing Classes',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/Images/dancing-classes.jpg'
    },
    {
      workoutName: 'Kickboxing',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/Images/kickboxing.jpg'
    },
  ]

  const WorkoutCard = ({
    classname,
    imgSrc,
    alt = "no alternative text was provided",
    workoutName,
    caloriesBurnt,
    workoutTime
  }) => {
    return (
      <article style={{backgroundImage: `url(${imgSrc})`, minHeight:300, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: "cover"}} className={`rounded-md overflow-hidden ${classname}`}>

        <div className='p-4 bottom-28 left-4 h-0'>
            <h2 className='glass-container text-2xl ml-1 font-bold mb-2'>{workoutName}</h2>
            <div className=''>
              <a href="" className=' btn bg-gray-900 mr-2 btn-white-text'><span className="text-yellow">{workoutTime}</span> <br /> Time</a>
              <a href="" className=' btn bg-gray-900 mr-2 btn-white-text'><span className='text-red'>{caloriesBurnt}</span> <br /> Calories</a>
            </div>
          </div>
      </article>)
  }

  return (
    <section>
      <h1 id='exercises' className=' mt-10 text-center text-bold text-3xl'>Find your perfect match 💫</h1>
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-7">
        {workouts.map(({ caloriesBurnt, workoutName, workoutTime, imgSrc }, index) => (WorkoutCard({
          imgSrc,
          workoutName,
          caloriesBurnt,
          workoutTime,
          alt: '',
          classname: index > 0 ? 'col-span-2 sm:col-span-1' : 'col-span-2 md:col-span-2 h-96'
        })))}
      </section>
    </section>

  )
}

export default BentoMenu