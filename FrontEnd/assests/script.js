$('#Upload_btn').click(function (){
    var readFile=new ReadFile();

    var Input= document.getElementById('choose_btn');
    var file=Input.filea[0];
    var formData=new FormData();
    formData.append('file',file);

    readFile.onload=function (e){
        $('img_display').css("background-image","url("+e.target.result+")");
    };
    readFile.readAsDataURL(file);

    $.ajax({
        url: 'http://localhost:8080/imguploader/uploader',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success:function () {
            alert("Upload Success ✨");
        },
        error: function (){
            alert("Upload Failed 💀")
        }
    })
})