# NewsCache Web App

This is a web application that brings all the latest news that a person might be interested in together under one umbrella.
The application makes use of Faroo's Rest API to crawl the web and gather all the news articles.

All the back end is RESTful and is completely done using Spring. Security is handled using Spring Security on the backend. H2 in-memory
database is used in the application. Liquibase is used for setting up mock data. I am using Web sockets/STOMP for having live updates in the application. The front end stack is angularJS
with many additional libraries. These include SocksJS equivalent directives for live updates and cross browser communication and angular-masonry
for cascading grid layouts on the interest pages to list all the stories. Even gulp is used in the project for live reload capabilities and
minification. The application is unfortunately almost devoid of tests due to short amount of time taken in developing the application. Tests
may come in later.


### Steps to start developing or to run the project

 1. Install node.js

    Along with node comes npm(node package manager). This is helpful in installing all the javascript modules and dependencies
    needed for the project.

 2. Command line statements to install other stuff

   * Navigate to project root in cmd or open terminal in the IDE.

   * Install Bower: npm install -g bower (-g installs it globally for all projects in future. Ignore it if you don't want it)

   * Run bower: bower install

   * Install Gulp: npm install -g gulp

 3. This project uses gulp - a javascript task runner.

   * To use gulp to enable livereload to avoid running the whole program type "-gulp watch" in the terminal.
     This basically watches for any changes in the javascript and html files.

 4. If we plan to write tests we have to use Karma, a test runner for javascript.
    Will add the stuff if needed.

 5. If using Intellij you will have to go to the application.yml file and change the project root to the root of the project
    on your local computer.

 6. Run the application on localhost:8080/newscache/#/ in any web browser!!