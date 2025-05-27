import React from 'react'
import WorkPageHeader from './_components/WorkPageHeader'
import { projects } from "@/lib/projectsData";
import ProjectGrid from './_components/ProjectGrid';

const page = () => {
  return (
    <div>
        <WorkPageHeader />
        <ProjectGrid projects={projects} />
    </div>
  )
}

export default page