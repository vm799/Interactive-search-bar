
document.getElementById("search-name").addEventListener("keyup", function(){

    const searchQuery = event.target.value.toLowerCase()
    
    const allDOMnames = document.getElementsByClassName("dwarf")
    
    for(let i=0; i < allDOMnames.length; i++){
        const dwarfNames = allDOMnames[i].textContent.toLowerCase()
        console.log(dwarfNames)
        if (dwarfNames.includes(searchQuery)){
            allDOMnames[i].style.display="block"
            allDOMnames[i].classList.add("bounce")
            allDOMnames[i].classList.add("border")
            } else {
                allDOMnames[i].style.display="none"
            }
    }


})

