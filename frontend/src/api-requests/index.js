export const postProjects = (project) => fetch('/projects', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
})
export const getProjects = () =>
        fetch('/projects')
            .then(response => response.json())
