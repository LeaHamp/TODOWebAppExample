var list = document.querySelector('#todolist');
var input = document.querySelector('#newtodo');
input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var text = input.value.trim();
        if (text !== '') {
            var list_item = document.createElement('li');
            list_item.setAttribute('class', 'list-group-item');
            list_item.innerHTML = text;
            list.append(list_item);
            input.value = '';
        }
    }
});
