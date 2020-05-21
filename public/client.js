const editable = document.getElementById('editor')
const outlineText = Array.prototype.slice.call( document.getElementsByClassName("outline"), 0 );

editable.addEventListener('input', function() {
    console.log(editable.textContent)
  
    let newText = editable.textContent
    
    outlineText.forEach(function(item){
      item.innerHTML = newText
    })
  
});
