# **Reflection**

## Chapter 2: Meaningful names

This chapter made it very clear that names in code should be intention-revealing, aim to avoid disinformation, and make meaningful distinctions. I have applied this when naming my classes, methods, and variables. For example, the method name “displayTimeList” is clear, concise a verb phrase, and clearly describes its purpose and function. When working with components, I chose to add the full word “component” to the end of each variable name to avoid encoding, add meaningful context and improve understandability. 

It would’ve been “faster” for me to assign the component “#timeListComponent” the variable name “tlc”/“tlComp”/”timeListComp” but it would also result in the code being harder to read and require the reader to use mental mapping to understand its purpose.

Another example of how I applied the rules specified in the chapter when assigning variable names is that for example, the “#timerFormComponent” variable includes the word "form" in its name to provide context and clarify that it is a component that displays a form, rather than something else like a list of times (which I assigned the variable name #timeListComponent).

----

## Chapter 3: Functions

My code follows several principles from this chapter to ensure that it is well-organized and easily maintainable. I designed the code to be easy to read and understand and this is achieved through the use of functions that are well-named and have a clear purpose. All functions in my code maintain a consistent level of abstraction and are defined as close to the function call as possible. By structuring the code in a way that makes it easy to read from top to bottom, I achieve enhanced readability and understandability. 




For instance, the displayTimeList function has a single, clear purpose and no arguments, adhering to the principles of having functions do one thing and be as small as possible. Additionally, the function has a single level of abstraction, meaning that it only contains code related to displaying the time list and hiding the timer and avoids duplication of code. 



This is the only function where I think that I don’t completely adhere to the principles of the book, specifically the one regarding maintaining abstraction levels. This method mixes low-level details (creating and manipulating DOM elements) with high-level concepts (formatting the duration of the time) as well as maybe being on the edge of having too many lines of code. For example, I could’ve had one method that creates and returns empty table data cells and another method that populates these cells with data, however that would require the populating method to take two arguments, the cells and the data. I decided to have it as one method that is easy to read, and understand and only does one thing: it creates and returns table cells populated with the appropriate data.




-----



## Chapter 4: Comments

I’ve tried to adhere to the principles of clean code for this chapter by using as descriptive and meaningful names for variables and functions as possible so that my code relies on itself to convey its purpose by being self-explanatory but to comply with the best practices that I’ve been taught, the code is also documented with JSDoc comments. However, I do feel confident that my code has high readability and is easy enough to understand on its own. 

An example of a documentation comment in the code is this one for the method render(): “Renders the time-list component with the currently available data.” It is short, and simple and accurately describes what it does in the current state of the code.

----

## Chapter 5: Formatting

The code I've written follows the rules specified in this chapter of ‘clean code' by consistently applying a set of formatting rules and following the conventions of the language used. It is structured in a way that follows the “newspaper metaphor” by being easy to follow from top to bottom. My code also makes effective use of horizontal space and includes documentation for added context. Additionally, it follows the recommendation to keep file sizes small, with all components of the app containing only slightly more or less than 100 lines of code each excluding the HTML template.

--- 

## Chapter 6: Objects and data structures

My code follows the rule of keeping variables private by using the private field syntax (for example #timerComponent). This allows for flexibility in changing the implementation, as the variables can only be accessed within the class. Additionally, I avoid adding getters and setters to objects, as the objects expose functions that operate on their data rather than directly exposing their data through getters and setters. My code follows the rule of composition over inheritance by using custom elements and the HTMLElement class as the base class for the majority of my classes. I’ve structured the code to be as clean and efficient as possible by creating small, focused classes and methods and organized it purposefully within the file to try to avoid unnecessary complexity and code duplication.

----

## Chapter 7: Error handling

Due to the nature and scope of this project, there isn’t a whole lot of error handling present but I’ve tried to apply the rules specified in this chapter in my code. I throw errors when necessary and always handle them appropriately. No method returns or has null as a parameter. Instead of throwing the generic Error, I throw the appropriate error type and when I catch it, I present the user with a message on how to prevent the error from occurring again. 

----

## Chapter 8: Boundaries

Because of the nature and scope of this project, the amount of third-party code is limited and if I disregard the npm-package live-server used only to enable an easy way of serving the HTML file during development and its dependencies, the only “third-party” code is the `js-stopwatch-timer` module that the application is built upon which in itself has no other external dependencies.

I tried to structure my code to apply the rules specified in this chapter whenever possible, such as using the generic variable name timer instead of the actual module name `js-stopwatch-timer` to improve readability. To hide the interface of the “third-party” code, I created the class `TimeTracker` which provides a stable interface I could use to interact with. 

----

## Chapter 9: Tests

During the development of my test cases, I have tried to adhere to the guidelines for writing acceptance tests according to this chapter when applicable. My tests are written in a way that makes them easy to both understand and maintain. Each test is written to test a specific project requirement and I’ve tried my best to design them to be easy to execute and repeatable.

----

## Chapter 10: Classes

I kept in mind what this chapter had to say about classes during the creation and development of my classes in this project. I declare variables in the beginning and the names of my classes and their members are accurate and reflect their responsibilities. My classes are small, single-responsibility classes and by keeping the majority of variables and functions private and only exposing the necessary ones to the public I maintain encapsulation.

-----

## Chapter 11: Systems

The components of the app follow the `separation of construction and use` principle by using a constructor to instantiate and set up the properties and event listeners. This helps to ensure that the component is properly initialized before it is used which improves the reliability and maintainability of the system. The application also follows the use of layering and separation of concerns by organizing its functionality into distinct components, such as the timer and time list components, and limiting the responsibilities of each component to a specific concern. This helps to further the system's maintainability and improves its modularity by making it easier to understand and modify the code.
