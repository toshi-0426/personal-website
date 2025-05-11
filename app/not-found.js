import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1 className='text-2xl'>404</h1>
      <div>Page was not found</div>
      <div className='mt-4'>
        <Link href="/" className='border p-1'>Return Home</Link>
      </div>
      
    </div>
  )
}