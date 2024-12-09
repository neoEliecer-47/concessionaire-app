import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.carsContainer} id='discover'>
        <div></div>
      </div>
    </main>
  )
}
