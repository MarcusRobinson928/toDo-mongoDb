$(function () {

    render = function () {
        $.ajax({ url: '/todo', method: 'GET'})
        .then(function (data) {
            todoStr = '';
            data.forEach(element => {
                todoStr += `<li>${element.todo}</li>`;
                todoStr += `<div class="listButtons">`;
                todoStr += `<i id='box' class="far fa-square"></i>`;
                todoStr += `<i id='x' class="fas fa-times"></i>`;
                todoStr += `</div>`;
            });
            $('.list').append(todoStr)
        })
        .catch(function(err) {
            console.log(err)
        });

        $('.submit').on('click', function (event) {
            event.preventDefault();

            newToDo = {
                todo: $('.input').val().trim()
            }

            for (key in newToDo) {
                if (newToDo[key] === '') {
                    alert("Please enter a To Do");
                    return;
                }
            }
            $.ajax({ url: '/todo', method: 'POST', data: newToDo})
            .then(function (data) {
                if (data.id) {
                    $('.input').val('');
                    render();
                } else {
                    alert(`There's Been an error`)
                }
            })
        })
        $('.list').ready(function() {
            $('#x').click(function() {
                message();
            });
            $('.cancel').click(function(){
                hide();
              });
        });
        function message() {
            $('.deleteMessage').slideDown();
        }
        function hide() {
            $('.deleteMessage').slideUp();
        }
        $('#box').click(function() {
            $(this).find("i").toggleClass("fas fa-check-square")
        });
    }
    render()
});
{/* <i id="box" class="far fa-square"></i> */}