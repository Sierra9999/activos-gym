import React from 'react'
import PricingCard from '../Components/PricingCard'

const Pricing = () => {
  return (
    <div>
      <h1 className='text-center my-10'>Revitalize with monthly fitness 🔥 conquer your goals today!</h1>
      <section className="
        flex
        justify-center
        flex-wrap
        align-center
        my-10">
        <PricingCard price={0} title='Week Trial'></PricingCard>
        <PricingCard price={20} title='Welcome Pack'></PricingCard>
        <PricingCard price={50} title='Dance Classes'></PricingCard>
        <PricingCard price={100} title='FitPulse Tribe'></PricingCard>
      </section>

    </div>
  )
}

export default Pricing