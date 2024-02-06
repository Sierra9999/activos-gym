import React from 'react'
import Image from 'next/image'

const BentoMenu = () => {

  const workouts = [
    {
      workoutName: 'Yoga',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/images/yoga.jpg'
    },
    {
      workoutName: 'Treadmill',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/images/treadmill.jpg'
    },

    {
      workoutName: 'Weight Lifting',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/images/weight-lifting.jpg'
    },
    {
      workoutName: 'Dancing Classes',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/images/dancing-classes.jpg'
    },
    {
      workoutName: 'Kickboxing',
      workoutTime: '00:00',
      caloriesBurnt: '100',
      imgSrc: '/images/kickboxing.jpg'
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
      <article className={` ${classname}`}>

        <figure className='h-full'>
          <Image className='object-cover w-full h-full' width={300} height={300} src={imgSrc} alt={alt} />
        </figure>
        <div className='relative bottom-28 left-4 h-0 z-1'>
          <h2 className='text-xl ml-1 font-bold mb-1'>{workoutName}</h2>
          <div className=''>
            <a href="" className='btn mr-2'> <span className="text-yellow">{workoutTime}</span> <br /> Time</a>
            <a href="" className='btn mr-2'><span className='text-red'>{caloriesBurnt}</span> <br /> Calories</a>
          </div>
        </div>
        <div class="relative bg-black opacity-50  h-full bottom-full hover:opacity-25 cursor-pointer "></div>
      </article>)
  }

  return (
    <section>
      <h1 className=' mt-10 text-center text-bold text-3xl'>Find your perfect match 💫</h1>
      <section class="grid md:grid-cols-3 grid-cols-2 gap-4 mt-7">
        {workouts.map(({ caloriesBurnt, workoutName, workoutTime, imgSrc }, index) => (WorkoutCard({
          imgSrc,
          workoutName,
          caloriesBurnt,
          workoutTime,
          alt: '',
          classname: index > 0 ? '' : 'col-span-2 md:col-span-2 h-96'
        })))}
      </section>
    </section>

  )
}

export default BentoMenu