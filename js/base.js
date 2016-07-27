document.addEventListener("DOMContentLoaded", function() {
    $('canvas').focus(function() {
        var sketch = Processing.getInstanceById('mario-canvas');
        if (sketch) {
            if (sketch.loop) {
                sketch.loop();
            }
            if (sketch.unmute) {
                sketch.unmute();
            }
        }
    });

    setInterval(function() {
        console.log('start');
        $('#mario-canvas').focus();
    }, 500);
});
