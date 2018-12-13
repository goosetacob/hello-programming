# Hello Programming
Making a website requires the following three programming languages!
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

index.html
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
### CSS (Cascading Style Sheets)
Helps us style web pages.

Now that we have a way of structuring titles, sentences, paragraphs, links, etc with HTML we can refer to them to style them.

style.css
```css
body {
    background-color: lightgrey;
}

h3 {
    color: indigo;
}

h3 a {
    color: lightcoral;
}

div.paragraph {
    background-color: lightsalmon;
    border-radius: 5px;
    padding: 10px;
}

div#first {
    outline-style: dotted;
    outline-color: aqua;
}

div#second {
    outline-style: dashed;
    outline-color: greenyellow;
}
```
### JS (JavaScript)
Helps us make our webpage interactive!

interactive.js
```javascript
// wait for the page to load
window.onload = function () {
    // get all the div elements with `class="paragraph"`
    var all_paragraphs = document.getElementsByClassName("paragraph");

    var countFunction = function () {
        // get the clicks-count element
        var clicksCountElement = document.getElementById("clicks-count");

        // read the clicks-count number value from the element
        var clicksCount = parseInt(clicksCountElement.textContent);

        // increment the clicks-count value
        clicksCount = clicksCount + 2;

        // write the new clicks-count value
        clicksCountElement.innerHTML = clicksCount;
    };

    // listen for clicks on each paragraph and call the function `countFunction` 
    for (var i = 0; i < all_paragraphs.length; i++) {
        // count like a software engineer!
        // counting starts at 0
        // so the first paragraph is the 0th paragraph, second is the 1st, etc...
        all_paragraphs[i].addEventListener('click', countFunction);
    }
}
```

## Bring It ALL Together
Update the `<head></head>` element to be:
```html
<head>
    <title>School Project</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="interactive.js"></script>
</head>
```
## It's ALIVE!
Now that we understand all the moving parts, lets create these files and see it in action!