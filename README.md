## How long you spent on the assignment.
- About 15 hours
## What you like about your implementation.
- One of the things I liked about my implementation is that I created the timeline using only absolute positioning. I was going to use CSS grid but wanted to see if I was able to come up with a solution that was compatible across different browsers right away.
- I set the layout in a way that it would facilitate adding zoom functionality.
- I like that looking at the events feels natural by scrolling.

## What you would change if you were going to do it again.
- I would look into using CSS grid to avoid doing all the hacky math that I did to calculate the event's positioning.
- I would avoid using flex. I started with flex and realized it was going to be hard to position multiple events on the same row and make things more complicated.
- Initially I was placing all text inside the cards, but then figured out that for short events I could place them outside to make the events more readable.
- Spend more time figuring out the absolute positioning because is not perfect right now, there is an issue with the first row of elements. It displays correctly, but adding the drag and drop functionality would not work right now.
- Write more tests while I was working on the assignment.
- Right now the timeline is not interactive, it just displays data. I would add more interactiveness, as well as adding functionality to make it feel alive, like the scrolling of the year, month, and day behave at different speeds. Make the month and year be sticky until next month/year comes, etc.
## How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
- I made the decision to pre-process the events in order to group events by row, that way it facilitated the rendering of the events.
- I decided to truncate text where I was not able to fit it to avoid wasting too much space by placing those events on a new line. User experience can be improved by placing a tooltip that lets you see the properties of the event.
- I decided to create a scrollable timeline instead of displaying only events in the width of the screen. The scrollable container allows you to go until the end of the last event.
- I took some inspiration from Asana timeline, dribble examples, and talking with a friend which is a designer/front-end.
## How you would test this if you had more time.
- I will test all the components (for example using a library like enzyme), to test the rendering of the components as well as component properties.
- Test my helper functions for correctness (i.e. using jest);

## Improvements:
While I worked on the assignment for longer than it was suggested, I was not able to work on some things that I would have liked, here they are:
- Add tooltips to see details of event on hover.
- Add a wrapper component in the text component to allow inline editing of event name. (Can use a library like https://www.npmjs.com/package/react-inline-editing)
- Even though it supports mobile, I would focus on creating a better UI experience for mobile. For example, if the timeline is to wide, right now you can essentially keep scrolling for-EVER. I could also increase the size of the timeline header to be easier to read, and change the interval of the days.
- I would change the preProcessing algorithm of the events. Right now it just adds a new element based on the last element of a row, but this can improve drastically because there is a possibility to not show events in a compact way if they are distributed in a certain matter.
- I was not able to figure out exactly the absolute positioning, right now you cannot click in the top row items which would affect the inline editing of components.
- Have a better way to render outliers in the dataset. Like if we add an event that is 3 years from all the others, probably zoom out initially to include all the events.
- Right now all the events are independent of each other, but what if there was a group id that you wanted to identify them by, I would need to change the preprocessing event function to take this into consideration.
- Look into different ways of truncating the name of the events. Right now I do something simple like if it does not fit in the card, truncate it there, or if the event is less than 2 days, render the text next to the event. I will see how different options appear, like adding tooltips, or expanding the event on hover, or making the card height bigger to support multi line name events.
