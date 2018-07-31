import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <div style={{fontSize: "20px", color: "blue"}}>
        <h1>About</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Image />
    </div>
);

export default About;