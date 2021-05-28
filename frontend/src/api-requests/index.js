export const postProject = (project) =>
    fetch("/projects", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
export const getProjects = () =>
    fetch("/projects").then((response) => response.json())
export const getTags = () => fetch("/popular/20").then((res) => res.json())
export const getProjectsUsingTags = (tags) => fetch("/search/" + tags.join("_")).then(res => res.json())
