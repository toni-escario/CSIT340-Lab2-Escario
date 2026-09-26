import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

export default function ExperienceSection() {
  const items = [
    {
      period: '2024 – Present',
      title: 'BS Information Technology',
      place: 'Cebu Institute of Technology – University',
      description: "The school where I've been learning in the IT course.",
    },
    {
      period: '2022 – 2024',
      title: 'Head of Social Responsibility',
      place: 'STEM Student Consortium',
      description: 'Led social responsibility initiatives for the consortium during senior high school.',
    },
    {
      period: '2022 – 2024',
      title: 'Senior High School, STEM Strand',
      place: 'University of San Jose – Recoletos',
      description: 'Moved back to Cebu City for senior high school here before college.',
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {items.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </ol>
    </section>
  );
}
