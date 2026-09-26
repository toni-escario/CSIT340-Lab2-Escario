import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
  const links = [
    { label: 'Email', href: 'mailto:antonettheee@gmail.com', text: 'antonettheee@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/toni-escario', text: 'github.com/toni-escario' }

  ];

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        {links.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </ul>
    </section>
  );
}
