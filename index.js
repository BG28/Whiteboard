window.addEventListener('load', function(){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    
    // Resizing
    resize();
    // variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function stopPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineCap="round";
        ctx.lineWidth= 2;

        ctx.lineTo(e.clientX, e.clientY);
        console.log(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        console.log(e.clientX, e.clientY);
    }
    // EventListner 
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", stopPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("resize", resize);
});

function resize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
