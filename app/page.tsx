import Hero from "./Components/Hero";
import BentoMenu from "./Components/BentoMenu";
import NewsLetter from './Components/NewsLetter'
import BMI from "./Components/BMICalculator";

export default async function Home() {
  return (

    <main>
      <Hero></Hero>
      <BentoMenu></BentoMenu>
      <BMI/>
      <NewsLetter></NewsLetter>
    </main>
  );
}
