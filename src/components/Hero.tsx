import Image from "next/image"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className={styles.hero2}>
        <h1 className="hero__title">
            Find, book or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking process.
        </p>
        </div>
    </div>
  )
}

export default Hero