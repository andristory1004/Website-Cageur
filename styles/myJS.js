window.addEventListener('scroll', reveal);

function reveal(){
    var reveal = document.querySelectorAll('.reveal');

    for(var i=0; i<reveal.length; i++){
        var windowheight = window.innerHeight;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classlist.add('active');
        }
        else{
            reveals[i].classlist.remove('active');
        }
    }
}