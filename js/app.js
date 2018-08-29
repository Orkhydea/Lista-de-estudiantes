$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$("#remove-skill").click(deleteSkills);
   function deleteSkills() {
      console.log("Remove");
     var btns = $(event.currentTarget);
    var boton = btns.parent();
    var colBoton = boton.parent();
    var rowBoton = colBoton.parent();

    rowBoton.remove();
   }

function getSkills() {
    // var skill = $("#skill-input").val();
 var $skill = $("#skill-input");
    //console.log(name, phone);
    addSkills($skill.val());

    /*Limpiar input*/
    // $("#name-input").val('');
    $skill.val('');
    ;
}

var template = '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalDelete">' +
    '<span>_skill_</span>' +
     '<i class="fas fa-times"></i>';

function addSkills(skill) {
    // count++;
    var finalTemplate = "";
    finalTemplate = template.replace("_skill_", skill);


    $("article").append(finalTemplate);

    // $("h5").html("Total contactos:" + count);
    // swal("Yei!", "Contacto agregado!", "success");
};
//$(document).ready(function () {
    //$('.modal').modal();
    $("#add-skill").click(getSkills);
//});