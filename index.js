window.addEventListener("load",()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const headerH=document.querySelector("header h1");
    const headerP=document.querySelector("header p");

    const colors=[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    pads.forEach((pad,index)=>{
        pad.addEventListener("click",()=>{
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubble(index);
        });
    });

    const createBubble=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation=`jump 1s ease`;
        headerH.style.color=colors[index];
        headerP.style.color=colors[colors.length-index-1];
        console.log(colors.length);
        bubble.addEventListener("animationend",()=>{
            visual.removeChild(bubble);
        })
    }
})