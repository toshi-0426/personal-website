import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='space-y-4'>
      <h1 className="text-2xl">404</h1>
      <div>The page you&apos;re looking for was not found.</div>
      <Link href="/" className="border p-1 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-800">
          Return Home
      </Link>
    </div>
  );
}
