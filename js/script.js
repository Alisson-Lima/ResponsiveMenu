(function(){
    ativarMenu()
    verificarBlur()
    function ativarMenu(){
        const links = document.querySelectorAll("body .container nav ul li a")
        for(var index = 0; index < links.length; index++){
            links[index].addEventListener("click", function(){
                const linkAtivado = document.querySelector(".activate")
                linkAtivado.classList.remove("activate")
                this.classList.add("activate")
            })
        }
    }
    function verificarBlur(){
        let container = document.querySelector(".container")
        let nav = document.querySelector(".container nav") 
    }
})()
