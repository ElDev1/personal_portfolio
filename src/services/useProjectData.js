import webProjects from './webProjects.json'

export async function useProjectsData (dataType) {
  if (dataType === 'web') {
    const response = await fetch(webProjects)
      .then(data => data.json)
    return response
  }
}
