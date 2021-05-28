# 1pm-we-connect
This project's goal is to create a web app in the style of a forum to connect people with similar hobbies to work on projects together.

## Contributors:
- Kevin Hoang, khoang1800
- Thanawat Techaumnuaiwit, thiskappaisgrey
- Alon Katz, alonkatzcs
- Surendra Ghentiyala, surendraGh
- Kenneth Deng, kdeng23

## Tech Stack:
- Frontend Stack
  - [npm](https://www.npmjs.com/ "npm - A package manager for Javscript")
  - [React](https://reactjs.org/ "React - A frontend Javscript framework")
  - [Material-UI](https://material-ui.com/ "Material-UI - A React UI Framework")
- Backend Stack
 - [Flask](https://flask.palletsprojects.com/en/1.1.x/ "Flask - A Python Server framework")
 - [Poetry](https://python-poetry.org/ "Poetry - A package manager for Python(with similar usage to npm, unlike pip)")
## Installation instructions
1. Make sure you have [NodeJS](https://nodejs.org/en/) installed, if not install it. NodeJS is required for npm
2. Make sure you have [Python](https://www.python.org/) installed, with **a version of 3.8 or greater**. 
3. This project uses [Poetry](https://python-poetry.org/docs/) as a package manager, because it has a more intuitive interface than pip. If you don't have it install it here: [Install Poetry](https://python-poetry.org/docs/). You can also just install the required python packages the usual way from our [requirements.txt](./requirements.txt), exported from poetry. The command below will not work if you don't install poetry though.
4. Once you have installed the required software, you can run `./scripts.sh install` which will install the required dependencies for the project automatically! You can also manually do it by looking at the source of the [script](./scripts.sh).
## Scripts
Scripts are located in `./scripts.sh` and can help you with running commands to format the code, serve the frontend/backend, etc. If you want to run these commands manually, look at the source code of the script. Otherwise, run `./scripts.sh` without any arguments to see the different options(or look at the source of the script). 
## [Deployment Instructions](./docs/DEPLOY.md)
See linked document for deploy instructions
## Details: 
The web app will be in the style of a forum where users can make an account, make posts, and respond to those posts. Additionally, they may
create a profile page and view others' profiles to learn more about them. Furthermore, they will be able to delete and update their
posts to fix errors. 

## User Roles:
- Students will be able to find study groups to find help in their classes.
- Hobbyists will be able to create or join a team to work on projects. 
