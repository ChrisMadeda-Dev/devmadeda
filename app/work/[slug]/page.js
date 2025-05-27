// app/work/[slug]/page.jsx
import { projects, getProjectData } from "@/lib/projectsData";

import ProjectDetailHeader from "../_components/ProjectDetailHeader";
import ProjectOverview from "../_components/ProjectOverview";
import ProjectProcessSolution from "../_components/ProjectProcessSolution";
import NextPrevNav from "../_components/NextPrevNav";

// Generates static pages for each project slug
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generates metadata for each page
export async function generateMetadata({ params }) {
  const project = getProjectData(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
  };
}

// The page component
export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = getProjectData(slug);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>

      <main>
        <ProjectDetailHeader
          title={project.title}
          tagline={project.tagline}
          heroImage={project.heroImage}
        />
        <ProjectOverview
          client={project.title}
          industry={project.industry}
          role={project.role}
          tech={project.tech}
          challenge={project.challenge}
        />
        <ProjectProcessSolution
          approach={project.approach}
          solution={project.solution}
          results={project.results}
          images={project.processImages || []}
        />
        <NextPrevNav prev={prevProject} next={nextProject} />
      </main>
 
    </>
  );
}
