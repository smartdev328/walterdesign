
        document.ontouchmove = function (event) {
            event.preventDefault();
        }
        var content = document.querySelector('.main-content .content');
        if (navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/)) {
            content.style.visibility = "hidden";
        }
        window.onload = function () {
            var content = document.querySelector('.main-content .content');
            content.style.visibility = "visible";
            if (navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/)) {
                var cards = document.querySelectorAll(".card");
                var arr_cards = Array.from(cards);
                arr_cards.forEach(function (item, index, arr) {
                    item.style.width = "25%";


                });

            }
            var userAgent = window.navigator.userAgent;

            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {

                var img = document.querySelector(".card img");
                var cards = document.querySelectorAll(".card");
                var arr_cards = Array.from(cards);
                arr_cards.forEach(function (item, index, arr) {
                    item.style.width = img.width + 2 + "px";

                });
                var content = document.querySelector(".main-content .content");
                content.style.width = img.width * 4 + 10 + "px";

            }

        }