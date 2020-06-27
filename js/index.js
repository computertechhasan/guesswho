function loop_through_cards() {
    let cards = document.getElementById("card-holder").childNodes;
    console.log(cards.length);

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
                        console.log("we found an a");
                        let a_children = child_children[z].childNodes;
                        let image = child_children[z].childNodes[0];
                        image.src = "pics/alexa/one.jpg";
                        console.log("we found a " + image.nodeName);

                    }
                }

            }
        }


    }
    
}

function loop_through_photos() {
    let image_holder = [];
    let photo_api_url = window.location.hostname + ":5005/all_pics"
    console.log("sending request to " + photo_api_url);
    $.ajax({
        type: "GET",
        url: photo_api_url
    })
    .done(function(response_data, resonse_status, response_xhr) {
        console.log("we out here!");
        console.log(response_data);
    })
    .fail(function(response_data, response_status, response_xhr) {
        console.log("we failed!");
    })
}