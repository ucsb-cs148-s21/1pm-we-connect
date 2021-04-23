# Project: We Connect
Mentor: Paul Kang

Meeting Time: Saturday 4/17/2021

Type of Meeting: Backend Learning Meeting where Thanawat (attempted) to teach flask to other team members

Scribe: Thanawat 

Team: Thanawat Techaumnuaiwit ✓,  Kevin Hoang ✓, Kenneth Deng ✓


# Slides for meeting


## slide 1

**REST API questions**

-   **Feynman method**  Explain it as if you were teaching somebody. Use analogies and stray away from using any vocabulary that is
-   What is an API?
-   What are the components of a REST API?
-   How do you make a POST request to a REST API? What data do you need to send?


## slide 2

**Using curl**

-   Let&rsquo;s try using `curl` to make API requests
-   There&rsquo;s other tools that are easier to use than curl like Postman or httpie(also command line but more intuitive flags)


## slide 2

**Creating a Todo Flask Application**

-   If you were making a Todo flask REST API, what are somethings that you need? What are the requirements of a todo application?
-   Break it down into the MVC. How would you represent the model? The view? What does the controller need to do?


## slide 3

**Making the flask application**

-   For now, let&rsquo;s represent the model as a python array
-   Let&rsquo;s go ahead and make all the endpoints that are necessary!
-   Clone the application from the github repository that I made earlier, do `poetry install` and you should be all setup!


## app requirements

-   have an endpoint for individual todos
-   have the full CRUD: be able to make new todos, see them, update them, and delete them
-   if we have time, we can introduce `sqlite3` but if not, then maybe later?

