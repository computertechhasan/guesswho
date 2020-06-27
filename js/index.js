let urls_aquired = 0;
let url_array = null;

function get_photo_urls() {
        let image_holder = [];
        let photo_api_url = "http://" + window.location.hostname + ":5005/all_pics"
        console.log("sending request to " + photo_api_url);
        $.ajax({
            type: "GET",
            url: photo_api_url
        })
        .done(function(response_data, resonse_status, response_xhr) {
            console.log("we out here!");
            // console.log(response_data);
            urls_aquired = 1;
            url_array = response_data;
            console.log("we made it");
            busy_wait();
        })
        .fail(function(response_data, response_status, response_xhr) {
            console.log("we failed!");
        })


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
}

function busy_wait() {
    while (urls_aquired < 1) {
        console.log("sitting");
    }
    loop_through_cards();
}

async function loop_through_cards() {
    console.log("did we ever");
}