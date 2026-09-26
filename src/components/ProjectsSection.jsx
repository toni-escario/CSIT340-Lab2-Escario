import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      year: '2024',
      title: 'Gym Membership System',
      description: 'My first project in Web Development.',
      tech: 'HTML',
      link: 'https://github.com/toni-escario',
    },
    {
      year: '2025',
      title: 'HammyNotes',
      description: 'A student journal system that a student could use.',
      tech: 'HTML',
      link: 'https://github.com/toni-escario',
    },
    {
      year: '2025',
      title: 'FloodGuard',
      description: 'A mobile app mockup for barangay-level flood alerts.',
      tech: 'HTML · CSS',
      link: 'https://github.com/toni-escario',
    },
    {
      year: '2025',
      title: "Destiny's Three",
      description: 'A dark-fantasy RPG for our OOP2 final project, with a Java Swing GUI.',
      tech: 'Java · Swing',
      link: 'https://github.com/toni-escario',
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
