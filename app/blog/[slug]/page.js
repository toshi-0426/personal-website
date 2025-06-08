import { notFound } from 'next/navigation';
import { getPost as getPostNotCached, getPosts } from '@/lib/posts';

import { cache } from 'react';
import Link from 'next/link';

const getPost = cache(async (slug) => getPostNotCached(slug));

export async function generateStaticParams() {
  const { posts } = await getPosts({ limits: 1000 });
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  return params;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;
  try {
    const { frontmatter } = await getPost(slug);
    return frontmatter;
  } catch (e) {}
  return {
    title: titles[params.slug],
    description,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  let post;

  try {
    post = await getPost(slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <div className="flex space-x-2 mb-8">
        {post.frontmatter.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/?tags=${tag}`}
            className="dark:text-gray-400 text-gray-500"
          >
            #{tag}
          </Link>
        ))}
      </div>
      {post.content}
    </article>
  );
}
