import H1 from '@/components/h1';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function Home({}) {
  const { posts } = await getPosts({
    newest: true,
    limit: 3,
  });

  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page!</H1>
        <p>My name is Toshiyasu.</p>
        <div className="text-lg mt-2">
          Checkout my{' '}
          <Link href="/about/projects" className="underline">
            Projects
          </Link>
          ,{' '}
          <Link href="/photos" className="underline">
            Photos
          </Link>
          , and{' '}
          <Link href="/blog" className="underline">
            Blog
          </Link>
          .
        </div>
      </section>
      <hr />

      <section className="mt-8">
        <h2 className="text-xl mb-8">Latest posts on the blog</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="text-gray-400 text-lg">
                {post.frontmatter.date}&nbsp;
              </span>
              <Link href={`/blog/${post.slug}`} className="underline text-lg">
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
