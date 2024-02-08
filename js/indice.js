function selectArea(oObject){
    var id = oObject.id; // Get the id.
    console.log("este id: ", id);
    document.getElementById(id).style.background = "rgb(66 107 122 ";
}


function leaveArea(oObject){
    var id = oObject.id; // Get the id.
    console.log("este id: ", id);
    document.getElementById(id).style.backgroundColor = '#04AA6D';
}