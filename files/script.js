var camera, scene, renderer, dots = [];

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    addEventListener('resize', (event) => { });
    onresize = (event) => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // The colours are in hex format but here the "#" is replaced with "0x". Eg: '#1F2833' becomes '0x1F2833'

    renderer.setClearColor(0x0e1525) // <-- This here is the background color for the background animation
    document.body.appendChild(renderer.domElement);
}


function addSphere() {

    for (var z = -1000; z < 1000; z += 20) {
        let colours = [0x57825d, 0x576882, 0x757854, 0x825759] // <-- This is the array of colours for the circles
        function randomColor() {
            return colours[Math.floor(Math.random() * colours.length)];
        }
        var geometry = new THREE.SphereGeometry(2.0, 32, 32)
        var material = new THREE.MeshBasicMaterial({ color: randomColor() });
        var sphere = new THREE.Mesh(geometry, material)

        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;

        sphere.position.z = z;

        sphere.scale.x = sphere.scale.y = 2;

        scene.add(sphere);

        dots.push(sphere);
    }
}

function animate() {

    for (var i = 0; i < dots.length; i++) {

        dot = dots[i];

        dot.position.z += i / 4;

        if (dot.position.z > 1000) dot.position.z -= 2000;

    }

}

function render() {

    requestAnimationFrame(render);

    renderer.render(scene, camera);
    animate();

}

init();
addSphere();
render();


$(window).scroll(function () {
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    if(document.getElementById('.whatWeDo') != null){
    if (elementScrolled('.whatWeDo')) {
        $('.whatWeDo').animate({
            top: 1,
            opacity: '1.0'
        }, 300)
    }}
    if(document.getElementById('articles') != null){
    if (elementScrolled('#articles')){
        $('.whatWeDo').animate({
            top: 1,
            opacity: '1.0'
        }, 300)
        $('#articles').animate({
            top: 1,
            opacity: 1.0
        }, 300)
    }}
});

