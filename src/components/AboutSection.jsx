import SectionHeading from './SectionHeading';
import Fact from './Fact';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I was born in Cebu City and eventually moved to Cavite, where I studied until high school,
        then moved back to Cebu City for senior high school and college. I love to play games, play
        guitar, sing, and dance. I picked IT because I was really curious about this course and
        wanted to learn different code and designing systems.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="3rd year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}
