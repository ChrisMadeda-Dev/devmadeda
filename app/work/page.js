import React from 'react'
import WorkPageHeader from './_components/WorkPageHeader'
import { projects } from "@/lib/projectsData";
import ProjectGrid from './_components/ProjectGrid';
import CallToAction from '../components/CallToAction';
import QuickLinks from './_components/QuickLinks';

const page = () => {
  return (
    <div>
        <WorkPageHeader />
        <ProjectGrid projects={projects} />
        <QuickLinks/>
        <CallToAction/>
    </div>
  )
}

export default page