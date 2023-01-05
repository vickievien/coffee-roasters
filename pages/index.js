import HomeCollection from '../components/home/Collection'
import HomeHero from '../components/home/Hero'
import HomeHow from '../components/home/How'
import HomeWhyUs from '../components/home/Why'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeCollection />
      <HomeWhyUs />
      <HomeHow />
    </div>
  )
}
