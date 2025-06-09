import Card from '@/components/card';
import data from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectList() {
  const { projects } = data;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <li key={project.slug} className="mb-4">
          <Link href={`/about/projects/${project.slug}`}>
            <Card className="font-mono h-80 rounded-lg">
              <div className="font-semibold mb-4 text-center">
                {project.title}
              </div>
              <div className="relative h-60 overflow-y-hidden">
                <Image
                  fill
                  src={project.thumbnailPath}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain w-80 h-80"
                  alt={project.title}
                />
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
