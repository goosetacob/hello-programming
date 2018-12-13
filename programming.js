window.onload = function () {
    document.getElementById('survey').onsubmit = function (event) {
        // stop it from sending this information somewhere else, like a server
        event.preventDefault();

        // uncomment this, what does it look like?
        //console.log(this);

        // uncomment this, what happens?
        //formData = new FormData(this);

        // uncomment this, what happend?
        //console.log(formData.get("firstname"));
        //console.log(formData.get("lastname"));

        // uncomment this, what happens?
        //alert("Hello" + formData.get("firstname") + formData.get("lastname") + ",what did you eat for breakfast?!");
    }
}