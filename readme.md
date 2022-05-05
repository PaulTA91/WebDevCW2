# Web Application Development 2 Coursework 2

## Launching the Application
The fully deployed application is available at `https://paul-armstrong-webdev2-cw2.herokuapp.com/`

In order to run locally first clone this repository then navigate into the repo via command line. This can also be acheived by opening the folder insde a Visaul Studio Code workspace and opening a terminal.

First use the command `npm install` to install all node mdules outlined in the `package.json` file.

Once this has been completed simply execute the command `node index.js` in the terminal. This will then display a console message pointing to a specific port.

The application can then be accessed by navigating to `http://localhost:PORTNUMBER/`.

## Using the Application
The application is fully navigable with unregistered or logged out users capable of visiting pages accessed through hyperlinks and buttons.

In order to use the CRUD functions for editing the database a user must first log in to the application as these pages are lcoked behind verification processes.

First navigate to `http://localhost:PORTNUMBER/register` and register a username and password. This can then be used on `http://localhost:PORTNUMBER/login`.

A succesfull login will automatically redirect to the edit page at `http://localhost:PORTNUMBER/edit`. Unfortunately a failed login results in a blank screen at this point in time. This is also the case when trying to navigate to the edit page without a valid session.

All CRUD operations can be performed on `http://localhost:PORTNUMBER/edit` and are fully functional. This page also includes an option to view all dishes, including those set as unavailable. Included is a Log Out button that terminates the session and redirects to the application home page.

## Notes
This is an MVC web application built on Node using Express framework and nedb for data storage and using Mustache templates for importing views.

Template used is Restoran – Free Responsive Bootstrap 5 Restaurant Website Template developed by HTML Codex and ThemeWagon. The template is used with permission as the links and credit remain part of the footer available on each page.

## Design
The design for the application has changed since the inital design plans were constructed. This is due to both a lack of knowledge and the difficulty of arranging items exactly as shown in in the design document.

The application is fully responsive in mobile views although while the navbar expands on clicking the icon it does not retract on clicking again. This was a difficult issue to pinpoint and as such I ran out of time before implementing a fix.

The contact page was also changed slightly as I did not have enough time left to implement the Google Maps API into the application.