#NewsCache Web App

 Steps to get started developing on this project

 1. Install node.js

    Along with node comes npm(node package manager). This is helpful in installing all the javascript modules and dependencies
    needed for the project.

 2. Command line statements to install other stuff

   Navigate to project root in cmd or open terminal in the IDE.

   Install Bower: npm install -g bower (-g installs it globally for all projects in future. Ignore it if you don't want it)

   Run bower: bower install

   Install Gulp: npm install -g gulp

 3. To use gulp to enable livereload to avoid running the whole program type -

    gulp watch

    This basically watches for any changes in the javascript and html files.

 4. If we plan to write tests we have to use Karma, a test runner for javascript.
    Will add the stuff if needed.

 5. If using Intellij you will have to go to the application.yml file and change the project root to the root of the project
    on your local computer.