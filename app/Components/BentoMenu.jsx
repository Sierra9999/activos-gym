import React from 'react'
import Image from 'next/image'

const BentoMenu = () => {

  const workouts = [
    {
      workoutName: 'Treadmill',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/treadmill.jpg'
    },
    {
      workoutName: 'Yoga',
      workoutTime : '00:00',
      caloriesBurnt : '100',
      imgSrc : '/images/yoga.jpg'
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
    <article className={classname}>
      <figure>
        <Image width={300} height={300} src={imgSrc} ></Image>
      </figure>
      <div>
        <h2>{workoutName}</h2>
        <p>{workoutTime}</p>
        <p>{caloriesBurnt}</p>
      </div>
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
          classname: index > 0 ? 'p-4 bg-green-800' : 'p-4 bg-green-800 col-span-2 md:col-span-2' })))}
    </section>
  )
}

export default BentoMenu