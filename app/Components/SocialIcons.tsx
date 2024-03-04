import React from 'react'
import Socials, {SocialsProps} from './Icons/Socials'
const iconsSize : number = 26
const platforms : Array<SocialsProps['name']> = ['facebook','pinterest','twitter', 'youtube']

const SocialIcons = () => {
  return (
    <section className='flex py-5'>
        {platforms.map((platform)=>(<a href="#" className='mr-3'><Socials name={platform} size={iconsSize} /></a>))}
    </section>
  )
}

export default SocialIcons