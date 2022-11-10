import HomeCollection from '../components/home/Collection'
import HomeHero from '../components/home/Hero'
import HomeWhyUs from '../components/home/why'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeCollection />
      <HomeWhyUs />
    </div>
  )
}
