window.onload = function () {
    document.getElementById("contain").onclick = function () {
        var div = document.createElement('div');
        var x = event.clientX;     // Get the horizontal coordinate
        var y = event.clientY;
        div.className = 'new-rect';// Get the vertical coordinate
        div.style.left = event.clientX + 'px';
        div.style.top = event.clientY + 'px';
        document.getElementById("contain").appendChild(div);
        setTimeout(function () {
            $(".new-rect").remove();
        }, 5000);
    };
};