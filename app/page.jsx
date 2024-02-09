import Image from "next/image";
import Hero from "./Components/Hero";
import BentoMenu from "./Components/BentoMenu";
import NewsLetterForm from './Components/NewsLetterForm/'
import os from 'os'

async function getAllCharacters() {
  const data = await fetch(`http://localhost:3000/api/emails`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Home() {

  let emails = await getAllCharacters()
  // console.log(emails)
  return (

    <main>
      <h1>{emails? emails[0] : 'waiting'}</h1>
      <Hero></Hero>
      <BentoMenu></BentoMenu>
      <NewsLetterForm></NewsLetterForm>
    </main>
  );
}
