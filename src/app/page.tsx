import { Navbar } from './home/partials/navbar';
import Hero from './home/partials/hero';
import TrustedBy from './home/partials/trusted-by';
import ServicesProcess from './home/partials/services-process';
import UseCaseTabs from './home/partials/usecase-tabs';
import ContactForm from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import ImpactStatistics from './home/partials/impact-statistics';
import Projects from './home/partials/projects';
import ScrollUp from './home/partials/scroll-up';
import Services from './home/partials/services';
import Testimonials from './home/partials/testimonials';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicesProcess />
      <Services />
      <UseCaseTabs />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <ScrollUp />
    </div>
  );
}
