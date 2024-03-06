import Hero from "./Components/Hero";
import BentoMenu from "./Components/BentoMenu";
import NewsLetter from './Components/NewsLetter'
import BMI from "./Components/BMICalculator";

export default async function Home() {
  return (

    <main >
      <Hero></Hero>
      <div className="lg:mx-10 lg:px-20 px-5 py-5" >
      <BentoMenu></BentoMenu>
      <BMI/>
      <NewsLetter></NewsLetter>
      </div>
    </main>
  );
}
