import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => (
    <div>
        <h1>Robots</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
        <div>
        {
            props.robots.map(robot => (
                <li key={robot.id}>
                    <Link href={`/robots/${robot.id}`}>
                        <a>{robot.name}</a>
                    </Link>
                </li>
            ))
        }
        </div>
    </div>
);

Robots.getInitialProps = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await response.json();

    return { robots };
};

export default Robots;