# Deployment instructions
This project has only been tested to deploy on [Heroku](https://www.heroku.com/). It's probably easier to just use this [Build Pack](https://github.com/moneymeets/python-poetry-buildpack) (if you use the build pack, you still have to manually update the frontend. Haven't figured that out yet.) but you can just do it manually with the normal python buildpack too:
1. Optional: Fork the project(to deploy on heroku, you need a git repo apparently. Maybe you can figure out how to deploy it without the repo.)
2. Dependencies have been updated on: May 28, 2021.You may have to update the requirements.txt file using poetry in the future. To export the poetry dependencies to `requirements.txt` run(in the root folder of this project): `./scripts.sh expt-req` OR `poetry export -f requirements.txt --output requirements.txt`
3. Manually build the frontend: `./scripts.sh frontend-build`
4. Push the results to a branch(since we are manually building the frontend. Not sure how to get heroku to do it for us yet.): `git push`
5. Make a new project using Heroku and Deploy!

