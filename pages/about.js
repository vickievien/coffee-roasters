import AboutCommit from '../components/about/Commitment';
import AboutHeadquarter from '../components/about/Headquarter';
import AboutHero from '../components/about/Hero'
import AboutQuality from '../components/about/Quality';

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutCommit />
            <AboutQuality />
            <AboutHeadquarter />
        </div>
    );
}
 
export default About;