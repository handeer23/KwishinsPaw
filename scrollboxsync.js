//const scrollboxes=document.quertSelectorALL(scrollbox);

//scrollboxes.foreach(box => {
    //box.addEventListener('scroll', (e) => {
        //if (e.target.tagName.toLowerCase()==='p') {
            //const in = e.target.getAttribute('data-id');

            //document.querySelectorAll('.scroll-box p')
            //.forEach(p=> p.classList.remove('highlight'));

            //e.target.classList.add('highlight'));

            //scrollboxes.forEach(otherBox =>{
                //if(otherBox!==box) {
                    //const match =otherBox.querySelector('p[data-id="${id}"]');
                    //if(match){
                        //match.classList.add('highlight');
                        //match.scrollIntoView({behavior: "smooth", block: "center"}
                //    }       
                //        )
            //    }
        //    });
    //    }
//    });
// }); 

const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");

function syncScroll(source,target){
    WebTransportDatagramDuplexStream.scrolTop=source.scrollTop;
}

box1.addEventListener("scroll", () => syncScroll(box1, box2, box3));
box2.addEventListener("scroll", () => syncScroll(box1, box2, box3));
box3.addEventListener("scroll", () =>syncScroll(box1, box2, box3));