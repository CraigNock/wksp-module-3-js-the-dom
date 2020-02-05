# The DOM Workshop

## Exercise 2 - The Frog Race

By the end of this exercise, you will have a track, a stable of frogs that you can race, and everytime you load the page, random frogs from the stable will race a predetermined distance. _Gambling is not condoned or encouraged._

**💡 For each step in this exercise, you will _always_ build on what you created in the previous step.**

### Exercise 2.1 - Set up the track

1. Write a `for` loop that will generate a "lane" for each frog.
2. Each lane should be an `li`.
3. Inside each `li` there should be a `span` that contains the lane number.

We are going to need to target each lane separately at some point in our program. So let's give each lane its own `id` as well.

4. Assign each lane an `id` following the this pattern: `lane-<LANE_NUMBER>`. e.g. `lane-1`, `lane-2`, `lane-3`, etc.
5. If you preview the page, you should now see an ordered list, with the lane number as its only value.

### Exercise 2.2 - Call in the frogs!

1. Duplicate `📂 exercise-2-1` folder and name it `📂 exercise-2-2`

We need to add our stable of frogs to the app. You will find a file called `frogStable.js` in `exercise-2/assets/`.

2. Link that file in your `index.html` file. It should be added right _before_ the `app.js` file is added.
3. Define an empty array called `racers`. We will push random frogs from the stable into this array.
4. Write a `for` loop that keeps pushing frogs from `frogStable` into `racers` until we have the required number of frogs (as defined by `FROGS`).
5. Output the racers array to the console to make sure you actually have frogs in there.

### Exercise 2.3 - Line 'em up!

We need to assign each frog to a lane.

1. Duplicate `📂 exercise-2-2` folder and name it `📂 exercise-2-3`
2. Use the racers array to assign each frog to a lane.
3. We should also show the name/number of the frog in the lane. (This will involve creating at least one element inside the lane `li`)
4. Add a class of `frog` to each of the frogs so that we can style them later.
5. Let's also temporarily set the background color of the frog element to the color assigned to it in its object.
6. Set the frog's progress to 0 inside its object, inside of the racers array.
7. Add each frog's progress to the screen as well.
8. This might also be a good time to add the stylesheet that is in the assets folder.

### Exercise 2.4 - Make 'em hop!

1. Duplicate `📂 exercise-2-3` folder and name it `📂 exercise-2-4`
2. Create a function called `racingFrog`. It will accept one parameter. This parameter will be a frog object from the racers array.
3. We need to calculate a random distance for each hop the frog will make. Use `Math.random()` for this. It might be good to consider percentages here...
4. Use `setInterval` to keep the frog hopping until the progress is greater than 100%. Remember to `clearInterval` once it reaches the end of the course. 
5. Write a message to the console, once the frog has reached the end.
6. If you have ever seen a frog race, it isn't all that exciting. The frogs are generally not that motivated to reach the end... To that end, let's add a variable delay to the setInterval to simulate a frog waiting around between hops.
7. "Why aren't they moving?!!" Examine the CSS file and determine what property you can modify to get them moving on the screen.
8. Almost done! Now, call `racingFrog()` for each frog in the race. 

### Exercise 2.5 - And the Winner is...

1. Create an array named `ranking`;
2. As soon as a frog reaches the end, push it into the array.
3. Once all of the frogs have finished, write a message to the console as well as the first, second and third place frogs (as applicable).

Hint: You will need to use setInterval... 

### Challenge 1

It would be great if we could pick frogs at random from the stable, instead of simply taking them in order. Go back to code you wrote for Exercise 2.2 and see what you can change to make this happen. You will most likely need to use a `while` loop instead of a `for` loop.

### Challenge 2

The race needs some sprucing up. Make the game a more presentable! Flex those CSS muscles.

This could also include 

- replace the beautiful circles with actual frog images.
- announcing the winner in the page.
- printing each frog's progress.
- a podium for the winners.
- etc.