import React from 'react'
import Image from 'next/image'

const BentoMenu = () => {

  const workouts = [
    {
      workoutName: 'Yoga',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/yoga.jpg'
    },
    {
      workoutName: 'Treadmill',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/treadmill.jpg'
    },

    {
      workoutName: 'Weight Lifting',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/weight-lifting.jpg'
    },
    {
      workoutName: 'Dancing Classes',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/dancing-classes.jpg'
    },
    {
      workoutName: 'Kickboxing',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/kickboxing.jpg'
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
    <article  className={` ${classname}`}>

      <figure className='h-full'>
        <Image className='object-cover w-full h-full' width={300} height={300} src={imgSrc} alt={alt} />
      </figure>
      <div className='relative bottom-20 left-3 h-0 z-1'>
        <h2>{workoutName}</h2>
        <p>{workoutTime}</p>
        <p>{caloriesBurnt}</p>
      </div>
      <div class="relative bg-black opacity-35  h-full bottom-full hover:opacity-10 cursor-pointer "></div>
    </article>)
  }

  return (
    <section class="grid md:grid-cols-3 grid-cols-2 gap-4 mt-10">
      {workouts.map(({caloriesBurnt,workoutName, workoutTime,imgSrc},index)=>(WorkoutCard({
          imgSrc,
          workoutName, 
          caloriesBurnt,
          workoutTime, 
          alt: '',
          classname: index > 0 ? '' : 'col-span-2 md:col-span-2 h-96' })))}
    </section>
  )
}

export default BentoMenu