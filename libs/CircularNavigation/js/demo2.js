(function() {

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler() {
        if (!open) {
            this.innerHTML = "بستن";
            classie.add(wrapper, 'opened-nav');
        } else {
            this.innerHTML = "منو اصلی";
            classie.remove(wrapper, 'opened-nav');
        }
        open = !open;
    }

    function closeWrapper() {
        classie.remove(wrapper, 'opened-nav');
    }

})();