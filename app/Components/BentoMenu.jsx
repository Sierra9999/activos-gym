import React from 'react'

const BentoMenu = () => {

  const workouts = [
    {
      workoutName: 'Treadmill',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      workoutName: 'Yoga',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      workoutName: 'Weight Lifting',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      workoutName: 'Samba',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      workoutName: 'Kickboxing',
      workoutTime : '00:00',
      caloriesBurnt : '100',
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
        <img src={imgSrc} alt={alt} />
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
      {workouts.map(({caloriesBurnt,workoutName, workoutTime},index)=>(WorkoutCard({
          workoutName, 
          caloriesBurnt,
          workoutTime, 
          alt: '',
          classname: index > 0 ? 'p-4 bg-green-800' : 'p-4 bg-green-800 col-span-2 md:col-span-2' })))}
    </section>
  )
}

export default BentoMenu