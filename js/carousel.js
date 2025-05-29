/******************Add the story ******************/
const image_profile = [
    ['https://pngfre.com/wp-content/uploads/1000072449-911x1024.png','Virat_18..'],
    ['https://th.bing.com/th/id/OIP.3C05SxekoFcKsguKGsdyigHaHa?w=197&h=197&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7','hardik_.33'],
    ['https://wikifamouspeople.com/wp-content/uploads/2022/01/Kinjal-Dave.jpg','kinjaldave'],
    ['https://th.bing.com/th/id/OIP.TqrGr34cFiJdNqYKSw4tKQHaLH?cb=iwc2&rs=1&pid=ImgDetMain','KL Rahul'],
    ['https://th.bing.com/th/id/R.85f07f487bd334d490f7297626ee2b96?rik=MALWVygAzPHCOQ&riu=http%3a%2f%2fvipactors.com%2fwp-content%2fuploads%2f2023%2f07%2fAnushka-Sharma.jpg&ehk=yjs5iTN4knMsqDEJwsnDHrvhz5uzQ0au16QZu2wu6r4%3d&risl=&pid=ImgRaw&r=0','anushka_'],
    ['https://th.bing.com/th/id/OIP.9Jbg8o1CTjE-v-1ksMTWmwHaIj?cb=iwc2&w=831&h=960&rs=1&pid=ImgDetMain','shubmangill'],
    ['https://th.bing.com/th/id/OIP.GOgq0cHSB5nC-5Abwt2sAwAAAA?cb=iwc2&rs=1&pid=ImgDetMain','Ishani_dave'],
    ['https://cdn2.allevents.in/transup/f2/0f5bb4a47f4190a73423824ceb2574/ab6761610000e5ebf78923904ab4bb312f36e788.jpg','kirtidan..'],
    ['https://pngfre.com/wp-content/uploads/1000072449-911x1024.png','Virat_18'],
    ['https://th.bing.com/th/id/OIP.3C05SxekoFcKsguKGsdyigHaHa?w=197&h=197&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7','hardik_.33'],
    ['https://wikifamouspeople.com/wp-content/uploads/2022/01/Kinjal-Dave.jpg','kinjaldave'],
    ['https://th.bing.com/th/id/OIP.TqrGr34cFiJdNqYKSw4tKQHaLH?cb=iwc2&rs=1&pid=ImgDetMain','KL Rahul'],
    ['https://th.bing.com/th/id/R.85f07f487bd334d490f7297626ee2b96?rik=MALWVygAzPHCOQ&riu=http%3a%2f%2fvipactors.com%2fwp-content%2fuploads%2f2023%2f07%2fAnushka-Sharma.jpg&ehk=yjs5iTN4knMsqDEJwsnDHrvhz5uzQ0au16QZu2wu6r4%3d&risl=&pid=ImgRaw&r=0','anushka_'],
    ['https://th.bing.com/th/id/OIP.9Jbg8o1CTjE-v-1ksMTWmwHaIj?cb=iwc2&w=831&h=960&rs=1&pid=ImgDetMain','shubmangill'],
    ['https://th.bing.com/th/id/OIP.GOgq0cHSB5nC-5Abwt2sAwAAAA?cb=iwc2&rs=1&pid=ImgDetMain','Ishani_dave'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})