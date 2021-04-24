function change() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var m_e = "empty";
    var last_x_position, last_y_position;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e) {
        var color = document.getElementById("colour").value;
        var width_of_line = document.getElementById("line").value;
        var radius = document.getElementById("radius").value;
        m_e = "mouseDown";

    }
    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e) {
        m_e = "mouseUP";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e) {
        m_e = "mouseleave";
    }
    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e) {
        m_e = "mouseDown";
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if (m_e == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.moveTo(last_x_position, last_y_position);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }
        last_x_position = current_position_of_mouse_x;
        last_y_position = current_position_of_mouse_y;
    }
}