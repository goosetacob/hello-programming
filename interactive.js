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