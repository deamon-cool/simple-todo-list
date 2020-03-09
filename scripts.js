(function() {

    var console = '!!@@#!!!???';

    ['today', 'tomorrow', 'future'].forEach(establishList);

    // var todoToday = establishList('today'),
    //     todoTomorrow = establishList('tomorrow'),
    //     todoFuture = establishList('future');

    function establishList(listType) {
        var section = document.querySelector('section.' + listType),
            addButton = section.querySelector('h1 a'),
            todoElements = section.querySelectorAll('ul li'),
            list = section.querySelector('ul');

        addButton.onclick = function (e) {
            e.preventDefault();

            var listItem = document.createElement('li'),
                title = window.prompt('Enter todo item:'),
                completeButton = document.createElement('a');

            listItem.innerHTML = title + ' ';

            completeButton.innerHTML = 'X';
            completeButton.setAttribute('href', '#');

            listItem.appendChild(completeButton);
            list.appendChild(listItem);

            completeButton.onclick = createCompleteHandler(listItem);
        };

        // for each element create object button link
        forEach(todoElements, function (element) {
            var title = element.firstChild.nodeValue;

            element.querySelector('a').onclick = createCompleteHandler(element);
        });
    }

    function forEach(array, callback) {
        for (var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }

    function createCompleteHandler(element) {
        return function (e) {
            e.preventDefault();
            element.className = 'completed';
        };
    }
})();