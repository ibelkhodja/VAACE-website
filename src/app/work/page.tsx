import { Column, RevealFx } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { team, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${team.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="16" delay={0.6}>
        <div >
          <Projects />
        </div>
      </RevealFx>
    </Column>
  );
}
