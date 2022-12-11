# js-stopwatch-timer

A simple stopwatch/timer module created with pure vanilla JavaScript without any external dependencies.

----

## Usage

### How to install and use in a project

1. Download the repo
2. Copy file src/timer.js in to your project directory
3. Import the module and create an instance of Timer
 ```js
 import Timer from 'timer.js'
 const timer = new Timer()

 timer.start()
````
----

## Methods
```js
timer.start()
````
Starts counting upwards from 0.

----

```js
timer.stop()
````
Stops the timer.


----

```js
timer.reset()
````
Stops the timer and resets the time.

----

```js
timer.countdown(seconds)
````
Starts a countdown of seconds depending on user input.

----

```js
timer.lap()
````
Returns the time that has passed in an object.

----

```js
timer.log()
````
Logs current time.

---


## Versions

### 1.0.0

* 1.0.0 was released 2022-09-26






