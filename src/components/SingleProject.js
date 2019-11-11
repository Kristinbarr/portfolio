import React from 'react'

const SingleProject = ({ project }) => {
  console.log('project', project)
  return (
    <div className={project.class_name}>
      <a href={project.thumbnail} target='_blank' rel='noreferrer noopener'>
        <img src={project.thumbnail} alt={project.thumbnail_alt} />
      </a>
      <p>
        {project.name}{' '}
        <span>
          <a href={project.link_live} target='_blank' rel='noreferrer noopener'>
            LIVE SITE
          </a>{' '}
        </span>
        {project.link_code ? (
          <span>
            <a
              href={project.link_code}
              target='_blank'
              rel='noreferrer noopener'
            >
              CODE
            </a>
          </span>
        ) : null}
        {project.link_demo ? (
          <span>
            <a
              href={project.link_demo}
              target='_blank'
              rel='noreferrer noopener'
            >
              DEMO
            </a>
          </span>
        ) : null}
      </p>
      <p>
        {project.description.map((el, i) => (
          <div key={i}>
            -{el}
            <br />
          </div>
        ))}
      </p>
    </div>
  )
}

export default SingleProject
