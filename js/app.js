var selection = document.getElementById("selection");
var elite = document.getElementById("elite");
var one = document.getElementById("one");
var mostrarOcultar = function(e){
  var tabSelect = e.target.dataset.tabSelect;
  if(tabSelect === 'tabselection'){
    //Ocultar Elite y One
    elite.style.display = 'none';
    one.style.display = 'none';
    //Mostrar Selection
    selection.style.display = 'block';
  }else if(tabSelect === 'tabelite'){
    //Ocultar Selection y One
    selection.style.display = 'none';
    one.style.display = 'none';
    //Mostrar Elite
    elite.style.display = 'block';
  }else if(tabSelect === 'tabone'){
    //Ocultar Selection y elite
    selection.style.display = 'none';
    elite.style.display = 'none';
    //Mostrar One
    one.style.display = 'block';
  }
}

var load = function(){
  selection.style.display = 'none';
  elite.style.display = 'none';
  one.style.display = 'none';
var elementsTab= document.getElementsByClassName('tab');
for(var i=0; i<elementsTab.length; i++){
  elementsTab[i].addEventListener("click", mostrarOcultar);
}
}

load();
