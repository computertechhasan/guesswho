let urls_aquired = 0;
let url_array = null;

function get_photo_urls() {
        let image_holder = [];
        let photo_api_url = "http://" + window.location.hostname + ":5005/all_pics"
        // console.log("sending request to " + photo_api_url);
        $.ajax({
            type: "GET",
            url: photo_api_url
        })
        .done(function(response_data, resonse_status, response_xhr) {
            // console.log("we out here!");
            // console.log(response_data);
            urls_aquired = 1;
            let pics_array = response_data["pic_array"];
            let amount_of_pics = pics_array.length;
            // console.log("there are " + amount_of_pics + " pics");
            if (pics_array != null) {
                let outside_holder = document.getElementById("card-holder"); 
                let cards = document.getElementById("card-holder").childNodes;
                for (let i = 0; i < cards.length; ++i) {
                
                    let rand_num = Math.floor((Math.random() * 134) + 1);
                    // console.log("on " + cards[i]);
                    // console.log(cards[i].nodeName);
                    if (cards[i].nodeName.toLowerCase() === "div") {
                        // console.log("we found a div. it has children: ");
                        // console.log(cards[i].childNodes);
                        let card_children = cards[i].childNodes;
                        for (let j = 0; j < card_children.length; ++j) {
                            // console.log("the current child is " + card_children[j].nodeName + " has children");
                            // console.log(card_children[j].childNodes);
                            child_children = card_children[j].childNodes;
                            for (let z = 0; z < child_children.length; z++) {
                                // console.log(child_children[z].nodeName);
                                if (child_children[z].nodeName.toLowerCase() === "a") {
                                    // console.log("we found an a");
                                    let a_children = child_children[z].childNodes;
                                    let image = child_children[z].childNodes[0];
                                    // console.log("we are here");
                                    // console.log("r num is" + rand_num);
                                    image.src = "pics/" + pics_array[rand_num];
                                    // console.log("we found a " + image.nodeName);
                                }
                                else if (child_children[z].nodeName.toLowerCase() === "div") {
                                    // let name_label = child_children[z].childNodes[0];
                                    // console.log(name_label.nodeName);
                                    // name_label.innerHTML = "CATS FAM";
                                    console.log("found a " + child_children[z] + " has children");
                                    console.log(child_children[z].childNodes);
                                    console.log(child_children[z].childNodes[1].nodeName);
                                    console.log(child_children[z].childNodes[1].childNodes[1]);
                                    child_children[z].childNodes[1].childNodes[1].innerHTML = (pics_array[rand_num].split("/")[0] + " " + (pics_array[rand_num].split("/")[1]).split(".")[0]);
                                    // childNodes[0].innerHTML = "cats yo";
                                    // console.log(name_label);
                                }
                            }
                        }
                    }

                    
                    let card_div = document.createElement("div");
                    card_div.classList.add("col-lg-4");
                    card_div.classList.add("col-md-6");
                    card_div.classList.add("mb-4");
                    let inner_div = document.createElement("div");
                    inner_div.classList.add("card");
                    inner_div.classList.add("h-100");
                    let pic_a = document.createElement("a");
                    let pic = document.createElement("img");
                    pic.classList.add("card-img-top");
                    let card_body = document.createElement("div");
                    card_body.classList.add("card-body");
                    let name_header_four = document.createElement("h4");
                    name_header_four.classList.add("card-title");
                    let name_a = document.createElement("a");
                    name_a.innerHTML = "HI I AM ALIVE";
                    name_header_four.appendChild(name_a);
                    card_body.appendChild(name_header_four);
                    pic_a.appendChild(pic);
                    inner_div.appendChild(pic_a);
                    inner_div.appendChild(card_body);
                    // /*
                    cards.appendChild(card_div);
                    // */
                }
            }
            console.log("we made it");
        })
        .fail(function(response_data, response_status, response_xhr) {
            console.log("we failed!");
        })

        /*
        if (urls_aquired > 1) {
            let cards = document.getElementById("card-holder").childNodes;
            console.log(url_array);
            // let amount_of_photos = url_array.length();
            if (url_array != null) {
                for (let i = 0; i < cards.length; ++i) {
                    // console.log("on " + cards[i]);
                    // console.log(cards[i].nodeName);
                    if (cards[i].nodeName.toLowerCase() === "div") {
                        // console.log("we found a div. it has children: ");
                        // console.log(cards[i].childNodes);
                        let card_children = cards[i].childNodes;
                        for (let j = 0; j < card_children.length; ++j) {
                            // console.log("the current child is " + card_children[j].nodeName);
                            child_children = card_children[j].childNodes;
                            for (let z = 0; z < child_children.length; z++) {
                                // console.log(child_children[z].nodeName);
                                if (child_children[z].nodeName.toLowerCase() === "a") {
                                    // console.log("we found an a");
                                    let a_children = child_children[z].childNodes;
                                    let image = child_children[z].childNodes[0];
                                    console.log("we are here");
    
                                    image.src = "pics/alexa/one.jpg";
                                    // console.log("we found a " + image.nodeName);
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            console.log("it was not 1");
        }
        */
}