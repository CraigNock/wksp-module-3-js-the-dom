# The DOM Workshop

## Exercise 1 - Creating DOM Nodes

In the exercise-1 folder, there are the following files.

- `example.html` (READ ONLY) This is the file that contains the HTML of a short webpage.
- `exercise.html` (READ ONLY) This is the HTML file in which you will use JavaScript to recreate the HTML content from `example.html`
- `scripts.js` This is where you will write the JS required to inject all of the HTML into `exercise.html`

### Exercise 1.1

Create the content of a webpage entirely with `JS`!

1. Open folder `📂 exercise-1-1`
2. Recreate the content structure from `example.html` in enclosed `exercise.html`.
3. To do this, **you are not allowed to modify any of the HTML files**, only `scripts.js` should be modified.
4. Once you've completed this, compare `example.html` and your `exercise-1-1/exercise.html` file using "Live Preview", you will notice that they look nothing alike.
5. Add code to the `scripts.js` that will add a `<link>` to the `styles.css` in the `<head>` of `exercise.html`.

### Exercise 1.2

Add classes with `JS`!

1. Duplicate `📂 exercise-1-1` folder and name it `📂 exercise-1-2`
2. Open `styles.css`. This is the CSS that created that legen- ...wait for it... -dary! styling.

_By now, you all know how bad it is to style with tagnames and `id`s._

3. In `styles.css` replace the tags with classes (We can leave `#main` and `body`. They don't annoy me _too_ much. 😜)
4. Now add the class names to the `exercise.html` file.
5. Once you've completed this exercise, **nothing** should have changed. You just have more efficient code... not for long!

B-E-A-U-tiful!

### Exercise 1.3

Style a webpage entirely with `JS`!

In a fit of inefficiency, you decide to **not** have a `.css` file, but still need the page to look good.

1. Duplicate `📂 exercise-1-2` folder and name it `📂 exercise-1-3`
2. In `scripts.js` remove all of the classes! Do it!
3. Open the `styles.css` file. Look at all of that CSS...
4. You need to add all of that CSS from the `scripts.js`.

To do this, you will need to target the tags themselves, and assign the required CSS.
