# Hello Programming
Making a website requires the following three programming languages!
* [HTML (Hyper Text Markup Language)](#html-hyper-text-markup-language)
* [CSS (Cascading Style Sheets](#css-cascading-style-sheets)
* [JS (JavaScript](#js-javascript)
### HTML (Hyper Text Markup Language)
Helps us control the structure of text. 

Looking at the following, how do you know where a paragraph or sentence begins or ends, how do you know what a link is??
```text
Excerpt from The House on Mango Street by Sandra Cisneros
https://www.amazon.com/House-Mango-Street-Sandra-Cisneros/dp/0679734775
The boys and girls live in separate worlds. The boys in their universe and we in ours. My brothers for example. They've got plenty to say to me and Nenny inside the house. But outside they can't be seen talking to girls.
Excerpt from Frankenstein by Mary Shelley
https://www.amazon.com/Frankenstein-1818-Text-Penguin-Classics-ebook/dp/B071NCSKSP/
"Abhorred monster! Fiend that thou art! The tortures of hell are too mild a vengeance for thy crimes: Wretched devil! You reproach me with your creation; come on, then, that I may extinguish the spark which I so negligently7 bestowed."
```
Now look at this second section, what do things wrapped in `<h3></h3>` look like, what about `<div></div>`, and `<a></a>`. Notice how we can also give these sections names with `class` and `id`.

*index.html*
```html
<head>
    <title>School Project</title>
</head>

<body>
    <h3 class="title">
        Excerpt from <a class="link" href="https://www.amazon.com/House-Mango-Street-Sandra-Cisneros/dp/0679734775">The
            House on Mango Street by Sandra Cisneros</a>
    </h3>
    <div class="paragraph" id="first">
        The boys and girls live in separate worlds. The boys in their universe and we in ours. My brothers for example.
        They've got plenty to say to me and Nenny inside the house. But outside they can't be seen talking to girls.
    </div>
    <h3 class="title">
        Excerpt from <a class="link" href="https://www.amazon.com/Frankenstein-1818-Text-Penguin-Classics-ebook/dp/B071NCSKSP/">Frankenstein
            by Mary Shelley</a>
    </h3>
    <div class="paragraph" id="second">
        "Abhorred monster! Fiend that thou art! The tortures of hell are too mild a vengeance for thy crimes: Wretched
        devil! You reproach me with your creation; come on, then, that I may extinguish the spark which I so
        negligently7
        bestowed."
    </div>
    <h3>Paragraph Clicks</h3>
    <div class="paragraph" id="clicks-count">0</div>
</body>
```
`<body></body>`, `<h3></h3>`, `<div></div>`, and anything in `< >` is called a tag. These tags helps us create `elements`.
```html
div tag
<div></div>

div element
<div class="paragraph" id="clicks-count">0</div>
```
### CSS (Cascading Style Sheets)
Helps us style web pages.

Now that we have a way of structuring titles, sentences, paragraphs, links, etc with HTML we can refer to them to style them.

*style.css*
```css
/*
make the background of all body tags be lightgrey
*/
body {
    background-color: lightgrey;
}

/*
make the text color of all h3 tags be indigo
*/
h3 {
    color: indigo;
}

/*
make the text color of all a tags inside h3 tags be lightcoral
*/
h3 a {
    color: lightcoral;
}

/* 
make the background color be lightsalmon, have a 5px border radius, and have padding around it for all divs with class="paragraph"
*/
div.paragraph {
    background-color: lightsalmon;
    border-radius: 5px;
    padding: 10px;
}

/* 
make outline aqua colored and dotted for all divs with id="first"
*/
div#first {
    outline-style: dotted;
    outline-color: aqua;
}

/* 
make outline greenyellow colored and dashed for all divs with id="second"
*/
div#second {
    outline-style: dashed;
    outline-color: greenyellow;
}
```
`h3`, `h3 a`, `div.paragraph`, `div#first`, and anything before `{...}` is called a selector, they help us find elements in the HTML. Once we find an HTML element, we can set css attributes like `background-color`, `color`, `outline-style`, etc.

Notice how the selector for the `class="paragraph"` tag is `div.paragraph` and the selector for `id="first"` is `div#first`.
### JS (JavaScript)
Helps us make our webpage interactive!

Now that we have a structured beautiful looking webpage, we can add JavaScript to react to any actions our user may do.

*interactive.js*
```javascript
// wait for the page to load
window.onload = function () {
    // get all the div elements with `class="paragraph"`
    var all_paragraphs = document.getElementsByClassName("paragraph");

    // function to increment the number in clicks-count element
    var incrementCountFunction = function () {
        // get the clicks-count element
        var clicksCountElement = document.getElementById("clicks-count");

        // read the clicks-count number value from the element
        var clicksCount = parseInt(clicksCountElement.textContent);

        // increment the clicks-count value
        clicksCount = clicksCount + 1;

        // write the new clicks-count value
        clicksCountElement.innerHTML = clicksCount;
    };

    // listen for clicks on each paragraph and call the function `countFunction` 
    for (var i = 0; i < all_paragraphs.length; i++) {
        // count like a software engineer!
        // counting starts at 0
        // so the first paragraph is the 0th paragraph, second is the 1st, etc...
        all_paragraphs[i].addEventListener('click', incrementCountFunction);
    }
}
```
We created variables with the `var` keyword, think of variables like variables in math class except in programming it can be a sentence (string), number (integer), collection of things (array), or many other things.

We created functions with the `function () {...}` keyword, think of functions as a small list of instructions that you only write once! Then to run that list of instructions, you call the function name instead of re-writing the instructions again.

We used for-loops to go over all the elements with `class="paragraph"` and listen for when they are clicked in order to call our `incrementCountFunction` function.

We used existing functions (provided by the browser) in order to find elements in our webpage with `document.getElementsByClassName("paragraph")` and listen to things that happen to them (events) with `all_paragraphs[i].addEventListener('click', incrementCountFunction)`
## Bring It ALL Together
Update the `<head></head>` element in `index.html` to be:
```html
<head>
    <title>School Project</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="interactive.js"></script>
</head>
```
This tells the browser to go read the CSS in the `style.css` file and the JavaScript in the `interactive.js` file when it loads `index.html`.
## It's ALIVE!
Now that we understand all the moving parts, lets create these files and see it in action!
1. create a folder on your desktop with any name.
1. create a the files `index.html`, `style.css`, `interactive.js`, then copy-paste the the code from above into them.
1. open up a web browser, go to `File` > `Open File` and look for the `index.html` file you created in your folder.
1. try changing the text in the html, the style in the css, or the code in the javascript!