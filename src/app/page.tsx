import {
  IntroHero,
  LogosSection,
  Navbar,
  ServicesSection,
  TeamSection,
} from "./components";

export default async function IndexPage() {
  return (
    <main>
      <Navbar />
      <IntroHero />
      <ServicesSection />
      <LogosSection />
      <TeamSection />
    </main>
  );
}
