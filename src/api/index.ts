/* eslint-disable @typescript-eslint/no-explicit-any */
import { client, urlFor } from "@/sanity/client";

export const getServices = async () => {
  const services = await client.fetch(`*[_type == "service"]`);

  return services.map((service: any) => ({
    ...service,
    image: {
      ...service.image,
      src: urlFor(service.image).url(),
    },
  }));
};

export const getLogos = async () => {
  const logos = await client.fetch(`*[_type == "company"]`);

  return logos.map((logo: any) => ({
    ...logo,
    image: {
      ...logo.image,
      src: urlFor(logo.image).url(),
    },
  }));
};

export const getTeam = async () => {
  const teams = await client.fetch(`*[_type == "team"]`);

  return teams.map((team: any) => ({
    ...team,
    members: team.members.map((member: any) => ({
      ...member,
      image: {
        ...member.image,
        src: member.image ? urlFor(member.image).url() : "",
      },
    })),
  }));
};
