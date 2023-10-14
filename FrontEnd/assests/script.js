document.addEventListener('DOMContentLoaded', function () {
    var chooseFileInput = document.getElementById('choose_btn');
    var imageContainer = document.getElementById('img_display');
    var tableBody = document.querySelector('#table tbody');
    var uploadButton = document.getElementById('Upload_btn');
    var rowCount = 0;

    chooseFileInput.addEventListener('change', function () {
        var file = chooseFileInput.files[0];

        if (file) {

            displayImage(file);
        }
    });

    uploadButton.addEventListener('click', function () {

        var file = chooseFileInput.files[0];

        if (file) {

            rowCount++;

            var newRow = tableBody.insertRow();

            var cellNo = newRow.insertCell(0);
            var cellName = newRow.insertCell(1);
            var cellPreview = newRow.insertCell(2);


            cellNo.textContent = rowCount;
            cellName.textContent = file.name;


            var imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(file);
            imgElement.classList.add('img-thumbnail', 'small-image');
            cellPreview.appendChild(imgElement);


            chooseFileInput.value = '';
            imageContainer.innerHTML = '';
        }
    });

    function displayImage(file) {
        imageContainer.innerHTML = '';

        var imgElement = document.createElement('img');
        imgElement.classList.add('img-thumbnail', 'small-image');
        imgElement.src = URL.createObjectURL(file);

        imageContainer.appendChild(imgElement);
    }
});
