"use strict";




$("#shuffle-btn").on('click', function(event) {
        console.log("Hello");

    $.getJSON("values/food.json", function(restaurants, status){

        $("#welcome").hide();


        for(var i = 0; i < restaurants.length; i++){
            console.log(restaurants[i]);
        }

        var random_rest_obj = restaurants[~~(Math.random() * restaurants.length)]

        console.log("MONEY: ", random_rest_obj.money);

        var booze_string = "No Booze";
        var money_string = random_rest_obj.money;
        var menu_link_string_1 = random_rest_obj.menu_img;
        var menu_link_string_2 = random_rest_obj.menu_img_2;




        if (random_rest_obj.has_booze){
            booze_string = "Has Booze";
        }

        var random_rest_string =    `<h2 class="lead">${random_rest_obj.name}</h2>
                                     <p class="flow-text">${money_string}</p>
                                     <p class="flow-text">${booze_string}</p>`;

        if (random_rest_obj.pat_approved == true){
            random_rest_string +=  `<p class="flow-text"><strong>BONUS: </strong>Pat Approved!</p>`;
        }

        if (random_rest_obj.menu_url != ""){
            random_rest_string += `<a href="${random_rest_obj.menu_url}">View Menu</a>`;
        }


        if(menu_link_string_1 != "" && menu_link_string_2 != ""){
            random_rest_string += `  <div class="row center">
                                    <img class="col s6" src="${menu_link_string_1}"></a>
                                    <img class="col s6" src="${menu_link_string_2}"></a>
                                    </div>`;

        }else if(menu_link_string_1 != ""){
            random_rest_string += `<img class="col s6" src="${menu_link_string_1}"></a>`;
        }



        $("#random_rest_container").html(random_rest_string);


    });
});




/*{
"name":"Taco Mamacita",
"type":"Mexican",
"notes": "",
"pat_approved": false,
"has_booze": true
}*/


