import BackButton from '@/components/back-button';
import H1 from '@/components/h1';
import data from '@/data/projects.json';
import Badge from '../components/badge';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const projects = data.projects;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = data.projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }
  const { title, description, techStack, demoURL, githubURL, thumbnailPath } =
    project;
  return (
    <div className="flex flex-col space-y-4">
      <BackButton />
      <H1>{title}</H1>
      <div className="indent-4">{description}</div>
      <ul>
        <li className="flex items-center text-sm">
          <Badge>TECH STACK</Badge>&nbsp;&nbsp;{techStack.join(', ')}
        </li>
        {demoURL && (
          <li className="flex items-center text-sm">
            <Badge>LINK</Badge>
            &nbsp;&nbsp;
            <a href={`${demoURL}`} target="_blank" rel="noopener noreferrer">
              <div className="text-blue-400 hover:underline">{demoURL}</div>
            </a>
          </li>
        )}
        <li className="flex items-center text-sm mb-10">
          <Badge>SOURCE CODE</Badge>
          &nbsp;&nbsp;
          <a href={`${githubURL}`} target="_blank" rel="noopener noreferrer">
            <div className="text-blue-400 hover:underline">{githubURL}</div>
          </a>
        </li>
      </ul>
      <div className='flex justify-center overflow-hidden'>
        <Image 
          src={thumbnailPath}
          width={400}
          height={400}
          className='object-cover'
          alt={`${title}`}
        />
      </div>
    </div>
  );
}
