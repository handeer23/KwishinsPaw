const scrollboxes=document.quertSelectorALL(scrollbox);

scrollboxes.foreach(box => {
    box.addEventListener('scroll', (e) => {
        if (e.target.tagName.toLowerCase()==='p') {
            const in = e.target.getAttribute('data-id');

            document.querySelectorAll('.scroll-box p')
            .forEach(p=> p.classList.remove('highlight'));

            e.target.classList.add('highlight'));

            scrollboxes.forEach(otherBox =>{
                if(otherBox!==box) {
                    const match =otherBox.querySelector('p[data-id="${id}"]');
                    if(match){
                        match.classList.add('highlight');
                        match.scrollIntoView({behavior: "smooth", block: "center"}
                    }       
                        )
                }
            });
        }
    });
}); 