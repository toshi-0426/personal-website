import H1 from '@/components/h1';
import Pagination from '@/components/pagination';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPostsPage({ searchParams }) {
  const searchparams = await searchParams;
  const tags = searchparams.tags?.split(',');
  const order = searchparams.order ?? 'newest';
  const page = searchparams.page ?? 1;
  const limit = searchparams.limit ?? 4;

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === 'newest',
    page,
    limit,
  });

  return (
    <>
      <H1>Recent Posts</H1>

      <div className="text-lg text-gray-600 dark:text-gray-400">
        These blog posts are for learning purposes
      </div>

      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Stay up to date with most recent posts
      </div>

      <hr />

      <div className="mb-8">
        Display&nbsp;
        {order === 'newest' && (
          <Link href="/blog?order=oldest" className="underline">
            oldest
          </Link>
        )}
        {order === 'oldest' && (
          <Link href="/blog?order=newest" className="underline">
            newest
          </Link>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="pl-3">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl text-gray-800 dark:text-gray-200"
            >
              {post.frontmatter.title}
            </Link>
            <div className="text-gray-400 text-sm mt-2">
              {post.frontmatter.date}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </>
  );
}
