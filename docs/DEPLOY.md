# Deployment instructions
This project has only been tested to deploy on [Heroku](https://www.heroku.com/). It's probably easier to just use this [Build Pack](https://github.com/moneymeets/python-poetry-buildpack) (if you use the build pack, you still have to manually update the frontend. Haven't figured that out yet.) but you can just do it manually with the normal python buildpack too:
1. If using poetry, export the `requirements.txt`:  `poetry export -f requirements.txt --output requirements.txt`
2. Manually build the frontend: `./scripts.sh frontend-build`
3. Push the results to a branch(since we are manually building the frontend. Not sure how to get heroku to do it for us yet.): `git push`
4. Make a new project using Heroku and Deploy!

