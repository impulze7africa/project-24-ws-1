import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">Impulze7</Link>
          </li>
          <li>
            <Link href="/about">about us</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-6xl">About Page</h1>
    </div>
  );
};

export default About;
