$(document).ready(
    // fucntions run once the document is ready

    $('.saveBtn').on('click',
        function() {
            console.log('hello')

            let value = $(this).siblings('.description').val()
            console.log(value)

            let time = $(this).siblings('.hour').text()

            localStorage.setItem(time, value)
        }
    
    
    ),

    $(".hour-9 .description").val(localStorage.getItem("9AM"))
    
    )