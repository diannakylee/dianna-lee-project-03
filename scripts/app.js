$(function () {
// Page will have images of characters
// When a user clicks an image, generate a random quote based on the character
// Create an array with Kevin Audio Clips
audioFiles = {
    kevinAudio : [
        "resources/kevin-alone.mp3",
        "resources/kevin-anyone-order-me.mp3",
        "resources/kevin-buzz-your-girlfriend.mp3",
        "resources/kevin-cheapskate.mp3",
        "resources/kevin-come-and-get-me.mp3",
        "resources/kevin-disappear.mp3",
        "resources/kevin-dont-get-scared.mp3",
        "resources/kevin-eating-junk.mp3",
        "resources/kevin-macoroni.mp3",
        "resources/kevin-no-clothes.mp3",
        "resources/kevin-not-driving.mp3",
        "resources/kevin-private-stuff.mp3",
        "resources/kevin-shower.mp3",
        "resources/kevin-thirsty-for-more.mp3",
        "resources/kevin-toothbrush.mp3",
        "resources/kevin-two-idiots.mp3",
    ],

    // Create an array with Marv Audio Clips

    marvAudio : [
        "resources/marv-afraid-of-the-dark.mp3",
        "resources/marv-dressed-like-chicken.mp3",
        "resources/marv-electrocuted.mp3",
        "resources/marv-kill-that-kid.mp3",
        "resources/marv-reached-top.mp3",
        "resources/marv-suck-brick.mp3",
        "resources/marv-tool-chest.mp3"
    ],

// Create an array with Harry Audio Clips

    harryAudio : [
            "resources/harry-hiya-pal.mp3",
            "resources/harry-little-creep.mp3",
            "resources/harry-mumble.mp3",
            "resources/harry-shoes-off.mp3",
            "resources/harry-shoot-you.mp3"
        ],

// Create an array with Buzz Audio Clips

    buzzAudio : [
            "resources/buzz-phlegm-wad.mp3",
            "resources/buzz-apology.mp3",
            "resources/buzz-on-my-ass.mp3",
            "resources/buzz-barf-it-up.mp3",
            "resources/buzz-trout.mp3"
        ],

// Create an array with Uncle Frank Audio Clips

    frankAudio : [
            "resources/frank-in-your-purse.mp3",
            "resources/frank-little-jerk.mp3",
            "resources/frank-little-pervert.mp3",
            "resources/frank-singing.mp3",
            "resources/frank-wreck-my-trip.mp3",
        ],

// Create an array with Angels Audio Clips

    angelsAudio : [
            "resources/angels-count-of-10.mp3",
            "resources/angels-keep-the-change.mp3",
            "resources/angels-tell-me-you-love-me.mp3"
        ],
}

// Create a function that creates a random number based on the array length as per the character

const randomTrack = function (array) {
    console.log(array);
    return Math.floor(Math.random() * (array.length));
}

// Create a function that will play a random quote from the respective character 


$('.character').on('click', function () {
    // $(this).find('img').removeClass('wobble-hor-bottom');
    let name = $(this).attr('id');
    let nameArray = name + "Audio";
    let thing = audioFiles[nameArray];
    const newSRC = audioFiles[nameArray][randomTrack(thing)]; 
    console.log(newSRC);
    $('#track').attr('src', newSRC);
    $('#track').trigger('play');
    $(this).find('img').toggleClass('wobble-hor-bottom');
});



// $('.character').on('click', function () {
//     if ($(this).find('img').hasClass('wobble-hor-bottom')){
//         removeClass('wobble-hor-bottom');
//     } 
// });


// Technical challenge:
// Initially to get the app working, I started out with a function for each individual character to ensure the function actually works.  However, as a challenge to myself, I decided to consolidate 


// Animations for Header Text

anime.timeline({ loop: true })
    .add({
        targets: '.animate-title-2 .title-pop',
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: function (el, i) {
            return 800 * i;
        }
    }).add({
        targets: '.animate-title-2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 3000
    });


// Scroll Reveal & Smooth Scroll for Main Section

    ScrollReveal().reveal('.character', {delay: 500});

    $('a').smoothScroll({
        offset: 50,
    });

});