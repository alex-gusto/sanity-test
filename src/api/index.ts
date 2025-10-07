import { client, urlFor } from "@/sanity/client";

export const getServices = async () => {
  const services = await client.fetch(`*[_type == "service"]`);

  return services.map((service) => ({
    ...service,
    image: {
      ...service.image,
      src: urlFor(service.image).url(),
    },
  }));
};

export const getLogos = async () => {
  const logos = await client.fetch(`*[_type == "company"]`);

  return logos.map((logo) => ({
    ...logo,
    image: {
      ...logo.image,
      src: urlFor(logo.image).url(),
    },
  }));
};

export const getTeam = async () => {
  const teams = await client.fetch(`*[_type == "team"]`);
  console.log("🚀 ~ getTeam ~ teams:", teams);

  return teams.map((team) => ({
    ...team,
    members: team.members.map((member) => ({
      ...member,
      image: {
        ...member.image,
        src: member.image ? urlFor(member.image).url() : "",
      },
    })),
  }));
};
