import ProjectsCard from './ProjectCard';
import { projects } from '../../data';
import SectionTitle from './SectionTitle';

const Project=()=>{

    return <section className='align-element py-20
    'id='project'>
    <SectionTitle text='My Projects'/>
    <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project)=>{
            return <ProjectsCard key={project.id} {...project}/>
        })}
    </div>
    </section>
}

export default Project