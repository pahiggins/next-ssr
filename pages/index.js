import Link from 'next/link';

const Index = () => (
    <div style={{fontSize: "20px", color: "blue"}}>
        <h1>SSR Magician</h1>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
);

export default Index;