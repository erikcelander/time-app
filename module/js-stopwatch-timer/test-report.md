Because of the limitations attached with this module due to its use of built-in javascript method setInterval as the method to measure time, testing was done by running the command line example-app located at /example-app/index.js and manually evaluating the results. The example app uses all public methods to start a timer, lap it at 5 seconds, reset it at 10 seconds, start a countdown from 10 seconds and stopping when finished, taking in to account the limitations brought in by the use of setInterval.



| Method    | Test method                                     | Status |
|-----------|-------------------------------------------------|:------:|
| start     | run example app and manually evaluating result |    ✅   |
| stop      | run example app and manually evaluating result |    ✅   |
| reset     | run example app and manually evaluating result |    ✅   |
| lap       | run example app and manually evaluating result |    ✅   |
| countdown | run example app and manually evaluating result |    ✅   |
| log       | run example app and manually evaluating result |    ✅   |