const io=new IntersectionObserver((entries) => {
    entries.forEach((item) => {
        const el=item.target
        const intersectionRatio=item.intersectionRatio
        if(intersectionRatio>0&&intersectionRatio<=1){
            load(el)
        }
        el.onload=el.onerror=() => io.unobserve(el);
    })
})

function load(obj){
    if(!obj.src){
        obj.src=obj.dataset.src
    }
}

function check(){
    return Array.from(document.querySelectorAll('.photo'))
}

check().forEach(item => io.observe(item))