import H1 from '@/components/h1';
import data from '@/data/projects.json';

export async function generateStaticParams() {
  const projects = data.projects;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params: { slug } }) {
  const project = data.projects.find((project) => project.slug === slug);
  return (
    <>
      <H1>{project.title}</H1>
      {project.description}
    </>
  );
}
