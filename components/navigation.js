import Link from 'next/link';

export default function Navigation() {
  const className = 'md:p-1 hover:bg-gray-200 hover::text-gray-700 text-lg';
  return (
    <nav className="font-mono">
      <ul className="flex md:space-x-4 flex-col md:flex-row">
        <li>
          <Link href="/" className={`${className} inline md:hidden`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={className}>
            About
          </Link>
        </li>
        <li>
          <Link href="/about/projects" className={className}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/photos" className={className}>
            Photos
          </Link>
        </li>
        <li>
          <Link href="/blog" className={className}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
