import { styles } from '../styles'
import { KeyboardCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500'></div>
        </div>
        <div className="max-w-lg">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Kirill</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a <span className="text-[#915eff]">Frontend Developer</span>. <br/>I develop user interfaces and web applications</p>
        </div>
      </div>
      <KeyboardCanvas />
    </section>
  )
}

export default Hero