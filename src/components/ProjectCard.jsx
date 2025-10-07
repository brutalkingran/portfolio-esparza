const ProjectCard = ({ projectData = "" }) => {
  return (
    <a href={ projectData.url } target="_blank" rel="noreferrer" className="p-6 border rounded-lg shadow hover:shadow-xl transition bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-teal-500">{ projectData.name }</h3>
      <p className="text-gray-600 dark:text-gray-300">{ projectData.desc }</p>
    </a>
  )
}

export default ProjectCard;