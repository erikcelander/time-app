# **Time App**
Time App is a simple web application built with Node.js, JavaScript, and HTML. It uses the npm package "live-server" to display the HTML page. The app has four main components: the root component time-app, timer-clock to display the timer and handle the controls, time-form to save specific times, and time-list to view previously saved times.

## **Future of the app**
Because of the nature of this project, it is not intended to be a fully functional app. It is a school project that was developed to demonstrate the use of a module that I have previously built.

I will not be continuing development on this project, but are open to others using and adding features to it. 

## **Dependencies**
js-stopwatch-timer: [js-stopwatch-timer](https://github.com/erikcelander/js-stopwatch-timer) module is the main dependency for the Time App. This module provides the core functionality for the timer features of the app. In order to use and continue to develop the Time App, you will need to ensure that you have the js-stopwatch-timer module installed. 

Node.js: This project uses Node.js as the runtime environment for the web app. You can download and install Node.js from the official website [here](https://nodejs.org/).

npm package live-server: This project uses the npm package "live-server" to serve the HTML file. You can download and install the package globally by running `npm install -g live-server` in the terminal.

## **Requirements**

1. As an end-user, I want the app to display the current time on the timer when it is running.
2. As an end-user, I want to be able to start, stop and reset the timer.
3. As an end-user, I want to be able to save a specific tracked time.
4. As an end-user, I want to be able to switch between viewing the timer and viewing previously saved tracked times.
5. As an end-user, I want my previously saved times to be persistently saved even when closing or refreshing the page.
6. As an end-user, I want to be able to clear my previously saved times.

## **Testing**
The app has 6 user requirements. Each requirement has a manual test case that is easy to execute and reproduce to ensure that the app is fully functional. The test cases can be found below.

## **Status**
The app is currently passing all test cases. The app is fully functional and meets all current requirements.

## **Test cases**
-------
## **Test case #1: Display current time on timer**

### **Goal**

To verify that the app is able to display the current time on the timer when it is running.


### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal

### **Scenario**

- The user starts the timer by clicking the "Start" button and the timer begins counting up from 0.

### **Instructions**

1. Run `npm start` to start the server
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app
3. Click the "Start" button to begin the timer.
4. Observe the timer display on the screen.


### **Expected result**

The timer should display the current time, updating every second as the timer continues to run. 

------
## **Test case #2: Start, stop, and reset timer**

### **Goal** 
To verify that the user is able to start, stop, and reset the timer in the app.

### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal

### **Scenario**

- User starts the timer by clicking the "Start" button, and the timer begins counting up from 0. 
- After a few seconds, the user clicks the "Stop" button to pause the timer.
- The user then clicks the "Reset" button to reset the timer back to 0.

### **Instructions**

1. Run `npm start` to start the server
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app
3. Click the "Start" button to begin the timer.
4. Wait for a few seconds.
5. Click the "Stop" button to pause the timer.
6. Click the "Reset" button to reset the timer.


### **Expected result**

The timer should start counting up from 0 when the "Start" button is clicked. When the "Stop" button is clicked, the timer should pause and stop updating. When the "Reset" button is clicked, the timer should reset back to 0.

----
## **Test case #3: Save specific tracked time**

### **Goal** 
To verify that the user is able to save a specific tracked time in the app.

### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal

### **Scenario**

- The user opens the app and they start the timer by clicking the "Start" button, and the timer begins counting up from 0. 
- After 30 seconds, the user clicks the "Stop" button to pause the timer. 
- When the timer is paused, the user clicks the “Save” button, enters a title for the time and clicks the “Submit” button.

### **Instructions**

1. Run `npm start` to start the server.
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app.
3. Click the "Start" button to begin the timer.
4. Wait 30 seconds or until the timer reaches a specific time that the user wants to save.
5. Click the "Stop" button to pause the timer.
6. Click the “Save” button to display the time form.
7. Input “Test #3” as the title.
8. Click the "Submit” button to save the time and title.
9. Click the “View saved times” button to verify that the time and title was saved correctly.


### **Expected result**

The specific time that was displayed on the timer when it was stopped should be saved to the app with the entered title. The user should be able to view the saved time in the time-list component of the app by clicking the button “View saved times”.

------
## **Test case #4: Switch between displaying timer and displaying list of saved times**

### **Goal** 

Verify that the user can switch between viewing the timer and viewing previously saved tracked times.

### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal

### **Scenario**

- The user saves a tracked time
- The user switches between the views of the timer and the list of previously saved tracked times 
- The user views the displayed information about the just now saved time.

### **Instructions**

1. Run `npm start` to start the server.
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app.
3. Click the "Start" button to begin the timer.
4. Wait for some time to pass.
5. Click the "Stop" button to pause the timer.
6. Click the “Save” button to display the time form.
7. Enter a title for the tracked time, such as "Test #4", and click the "Save" button.
8. Click the button to switch to the view of previously saved tracked times.
9. Verify that the list of saved tracked times includes the one that was just saved.
10. Click the button to switch back to the timer view.
11. Verify that the timer is displayed on the screen again.


### **Expected Result**

In step 8 the user is able to successfully switch between the views of the timer and the list of previously saved tracked times.
In step 9, the user is able to see the saved tracked times (including the one that was just saved), and in step 11, the user is able to see the timer again, as expected.

----

## **Test case #5: Persistent storage**

### **Goal** 

Verify that the user's previously saved times are persistently saved even when closing or refreshing the page.


### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal


### **Scenario**

- The user saves a tracked time
- The user refreshes the web-app page.
- The user sees the previously saved tracked time.
- The user closes the web-app.
- The user reopens the web-app and clicks on the button to switch to the view of previously saved tracked times.

### **Instructions**

1. Run `npm start` to start the server.
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app.
3. Click the "Start" button to begin the timer.
4. Wait for some time to pass.
5. Click the "Stop" button to pause the timer.
6. Click the “Save” button to display the time form.
7. Enter a title for the tracked time, such as "Test #5", and click the "Save" button.
8. Refresh the web-app page.
9. Verify that the previously saved tracked time from step 4 is still displayed on the page.
10. Close the web-app.
11. Reopen the web-app by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
12. Click the button to switch to the view of previously saved tracked times.
13. Verify that the previously saved tracked time from step 4 is still displayed in the list of saved tracked times.


### **Expected Result**

In step 9, the user is able to see the previously saved tracked time from step 7, even after refreshing the page.

In step 12, the user is able to see the previously saved tracked time from step 7, even after closing and reopening the web-app.

-----

## **Test case #6**

### **Goal** 
Verify that the user can clear their previously saved times.

### **Pre-requisites**

- The user has installed the dependencies by running `npm install` in the terminal
- The user has previously saved at least one tracked time

### **Scenario**

- The user sees a list of their previously saved tracked times.
- The user clicks on the "clear" button to delete all of their previously saved tracked times.
- The user sees that the list of previously saved tracked times is now empty.
- The user clicks on the button to switch back to the timer view.
- The user closes the web-app.
- The user reopens the web-app and clicks on the button to switch to the view of previously saved tracked times.

### **Instructions**

1. Run `npm start` to start the server.
2. Navigate to `localhost:8181` or `http://127.0.0.1:8181` in your browser to open the app.
3. Click the button to switch to the view of previously saved tracked times.
4. Verify that the list of previously saved tracked times is not empty.
5. Click the "Clear" button to delete all of the previously saved tracked times.
6. Verify that the list of previously saved tracked times is now empty.
7. Click the button to switch back to the timer view.
8. Close the web-app.
9. Reopen the web-app by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
10. Click the button to switch to the view of previously saved tracked times.
11. Verify that the list of previously saved tracked times is still empty.

### **Expected Result**

In step 6, the user is able verify that they successfully cleared their previously saved tracked times in step 5.

In step 11 the user sees that the list of previously saved tracked times is still empty, even after closing and reopening the web-app.




