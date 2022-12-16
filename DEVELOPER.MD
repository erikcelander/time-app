# **Time App**

## **Requirements**

1. As an end-user, I want the app to display the current time on the timer when it is running.
2. As an end-user, I want to be able to start, stop and reset the timer.
3. As an end-user, I want to be able to save a specific tracked time.
4. As an end-user, I want to be able to switch between viewing the timer and viewing previously saved tracked times.
5. As an end-user, I want my previously saved times to be persistently saved even when closing or refreshing the page.
6. As an end-user, I want to be able to clear my previously saved times.

## **Test cases**
-------
## **Test case #1: Display current time on timer**

### **Goal**

To verify that the app is able to display the current time on the timer when it is running.


### **Pre-requisites**


- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right clicking on the index.html file and choosing the option ‘Open with Live Server’

### **Scenario**

- The user opens the web-app by right clicking on the index.html and choosing option ‘Open with Live Server’. 
- They start the timer by clicking the "Start" button and the timer begins counting up from 0.

### **Instructions**

1. Open the app in your browser by right clicking the index.html file in VSCode and choosing option ‘Open with Live Server’.
2. Click the "Start" button to begin the timer.
3. Observe the timer display on the screen.


### **Expected result**

The timer should display the current time, updating every second as the timer continues to run. 

------
## **Test case #2: Start, stop, and reset timer**

### **Goal** 
To verify that the user is able to start, stop, and reset the timer in the app.

### **Pre-requisites**

- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right clicking on the index.html file and choosing the option ‘Open with Live Server’

### **Scenario**

- User starts the timer by clicking the "Start" button, and the timer begins counting up from 0. 
- After a few seconds, the user clicks the "Stop" button to pause the timer, and then clicks the "Reset" button to reset the timer back to 0.

### **Instructions**

1. Open the app in your browser by right clicking the index.html file in VSCode and choosing option ‘Open with Live Server’.
2. Click the "Start" button to begin the timer.
3. Wait for a few seconds.
4. Click the "Stop" button to pause the timer.
5. Click the "Reset" button to reset the timer.


### **Expected result**

The timer should start counting up from 0 when the "Start" button is clicked. When the "Stop" button is clicked, the timer should pause and stop updating. When the "Reset" button is clicked, the timer should reset back to 0.

----
## **Test case #3: Save specific tracked time**

### **Goal** 
To verify that the user is able to save a specific tracked time in the app.

### **Pre-requisites**

- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right clicking on the index.html file and choosing the option ‘Open with Live Server’

### **Scenario**

- The user opens the app and they start the timer by clicking the "Start" button, and the timer begins counting up from 0. 
- After 30 seconds, the user clicks the "Stop" button to pause the timer. 
- When the timer is paused, the user clicks the “Save” button, enters a title for the time and clicks the “Submit” button.




### **Instructions**

1. Open the app in your browser by right clicking the index.html file in VSCode and choosing option ‘Open with Live Server’.
2. Click the "Start" button to begin the timer.
3. Wait 30 seconds or until the timer reaches a specific time that the user wants to save.
4. Click the "Stop" button to pause the timer.
5. Click the “Save” button to display the time form.
6. Input “Test #3” as the title.
7. Click the "Submit” button to save the time and title.
8. Click the “View saved times” button to verify that the time and title was saved correctly.


### **Expected result**

The specific time that was displayed on the timer when it was stopped should be saved to the app with the entered title. The user should be able to view the saved time in the time-list component of the app by clicking the button “View saved times”.

------
## **Test case #4: Switch between displaying timer and displaying list of saved times**

### **Goal** 

Verify that the user can switch between viewing the timer and viewing previously saved tracked times.

### **Pre-requisites**

- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right - clicking on the index.html file and choosing the option ‘Open with Live Server’


### **Scenario**


- The user opens the web-app and sees the timer on the screen.
- The user starts the timer and waits for some time to pass.
- The user clicks on the "save" button and enters a title for the tracked time.
- The user clicks on the button to switch to the view of previously saved tracked times.
- The user sees a list of the saved tracked times, including the one that was just saved.
- The user clicks on the button to switch back to the timer view.
- The user sees the timer on the screen again.

### **Instructions**

1. Open the web-app in your browser by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
2. Click the "Start" button to begin the timer.
3. Wait for some time to pass.
4. Click the "Stop" button to pause the timer.
5. Click the “Save” button to display the time form.
6. Enter a title for the tracked time, such as "Test #4", and click the "Save" button.
7. Click the button to switch to the view of previously saved tracked times.
8. Verify that the list of saved tracked times includes the one that was just saved.
9. Click the button to switch back to the timer view.
10. Verify that the timer is displayed on the screen again.


### **Expected Result**

In step 7 the user is able to successfully switch between the views of the timer and the list of previously saved tracked times.
In step 8, the user is able to see the saved tracked times (including the one that was just saved), and in step 10, the user is able to see the timer again, as expected.

----

## **Test case #5: Persistent storage**

### **Goal** 

Verify that the user's previously saved times are persistently saved even when closing or refreshing the page.


### **Pre-requisites**

- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right clicking on the index.html file and choosing the option ‘Open with Live Server’


### **Scenario**

- The user opens the web-app and sees the timer on the screen.
- The user starts the timer and waits for some time to pass.
- The user clicks on the "stop" button to stop the timer.
- The user clicks on the "save" button and enters a title for the tracked time.
- The user refreshes the web-app page.
- The user sees the previously saved tracked time.
- The user closes the web-app.
- The user reopens the web-app and clicks on the button to switch to the view of previously saved tracked times.

### **Instructions**

1. Open the web-app in your browser by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
2. Click the "Start" button to begin the timer.
3. Wait for some time to pass.
4. Click the "Stop" button to pause the timer.
5. Click the “Save” button to display the time form.
6. Enter a title for the tracked time, such as "Test #5", and click the "Save" button.
7. Refresh the web-app page.
8. Verify that the previously saved tracked time from step 4 is still displayed on the page.
9. Close the web-app.
10. Reopen the web-app by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
11. Click the button to switch to the view of previously saved tracked times.
12. Verify that the previously saved tracked time from step 4 is still displayed in the list of saved tracked times.


### **Expected Result**

In step 8, the user is able to see the previously saved tracked time from step 6, even after refreshing the page.

In step 12, the user is able to see the previously saved tracked time from step 6, even after closing and reopening the web-app.

-----

## **Test case #6**

### **Goal** 
Verify that the user can clear their previously saved times.

### **Pre-requisites**

- The user has installed the VSCode extension 'Live Server'
- The user has opened the web-app by right clicking on the index.html file and choosing the option ‘Open with Live Server’
- The user has previously saved at least one tracked time

### **Scenario**

- The user opens the web-app and clicks on the button to switch to the view of previously saved tracked times.
- The user sees a list of their previously saved tracked times.
- The user clicks on the "clear" button to delete all of their previously saved tracked times.
- The user sees that the list of previously saved tracked times is now empty.
- The user clicks on the button to switch back to the timer view.
- The user closes the web-app.
- The user reopens the web-app and clicks on the button to switch to the view of previously saved tracked times.

### **Instructions**

1. Open the web-app in your browser by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
2. Click the button to switch to the view of previously saved tracked times.
3. Verify that the list of previously saved tracked times is not empty.
4. Click the "Clear" button to delete all of the previously saved tracked times.
5. Verify that the list of previously saved tracked times is now empty.
6. Click the button to switch back to the timer view.
7. Close the web-app.
8. Reopen the web-app by right clicking the index.html file in VSCode and choosing the option ‘Open with Live Server’.
9. Click the button to switch to the view of previously saved tracked times.
10. Verify that the list of previously saved tracked times is still empty.

### **Expected Result**

In step 5, the user is able verify that they successfully cleared their previously saved tracked times in step 4.

In step 10, the user sees that the list of previously saved tracked times is still empty, even after closing and reopening the web-app.




