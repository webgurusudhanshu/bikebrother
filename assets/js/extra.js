if($(".sortable.datatable").length > 0){
    $(".sortable.datatable").tablesort()
}
// profile icon
if($('.profile-user').length > 0){
    $('.profile-user').initial({
        width: 46,
        height: 46,
        fontSize: 20,
        fontWeight: 700
    });
}
// file input
let formatSizeUnits = (bytes) => {
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
}
let readURL = (input) => {
    let imageName = '',
        imageSize = '',
        imageExt  = '';
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(event) {
            $("#blah").html('<img src="'+event.target.result+'">');
        }
        reader.readAsDataURL(input.files[0]);                
        imageSize = input.files[0].size;      
        imageName = input.files[0].name;
        imageExt = input.files[0].name.split('.').pop().toLowerCase();
        $("#fileName").text(imageName);
        $("#fileExt").text(imageExt);
        $("#fileSize").text(formatSizeUnits(imageSize));                
        $("#preview").removeClass('d-none');
    }
}
let removeFile = () => {
    $("#preview").addClass('d-none');
    $("#uploadImg").val("");
}
// selectable checkbox
if($('.mainCheckbox').length > 0 || $('.childCheckbox').length > 0 || $("#inActiveItem").length > 0){
    
}
// sticky js

$(".app-menu").sticky({
    topSpacing: 0
})