import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import {
  IntroHero,
  LogosSection,
  Navbar,
  ServicesSection,
  TeamSection,
} from "./components";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

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
