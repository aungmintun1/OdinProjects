let APIKEY = "1fWJNOTY6cuEfqkg4RgNMHDLhuwevds7";

  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //to stop the page reload

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        // we make a GET request to the server
       
        let fig = document.createElement("div");
        let img = document.createElement("img");
        let fc = document.createElement("h2");
        //we create a div container, in the container we have an image and a header 

        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        //we add the url of the gif in the img.src, we also add the text into our header variable fc

        fig.appendChild(img);
        fig.appendChild(fc);
        //after creating and assigning the values of our HTML tags, we append these tags to our container div
        
        let out = document.querySelector(".out");
        //out is the div, where we place the gif containers

        out.insertAdjacentElement("afterbegin", fig);
        /*this is going to insert the fig containers into the out section in our html
        this allows us to create and insert a new fig container onto the top each time instead of the bottom which prevents user
        from having to scroll down everytime a new gif is generated
        */

        document.querySelector("#search").value = "";
        //this empties the searchbar everytime the user clicks on the button
      })

      .catch(err => {
        console.error(err);
      });
  });
