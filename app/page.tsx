import Hero from "./Components/Hero";
import BentoMenu from "./Components/BentoMenu";
import NewsLetter from './Components/NewsLetter'

export default async function Home() {
  return (

    <main>
      <Hero></Hero>
      <BentoMenu></BentoMenu>
      <NewsLetter></NewsLetter>

    </main>
  );
}
