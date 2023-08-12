$(function () {
    $("#start").click(function () {
        $(".circle").remove();

        const circleNum = $("#circlenumber").val();
        const cirWidth = $("#circlewidth").val();
        //alert(circleNum)
        for (let i = 0; i < circleNum; i++) {
            $("#container").append($("<div id='' class='circle'></div>"));
        }
        //.css('background', 'rgb(255,220,200)')
        const max = 255;
        const min = 0;

        $(".circle").each(function () {
            let r = Math.random() * (max - min) + min;
            let g = Math.random() * (max - min) + min;
            let b = Math.random() * (max - min) + min;

            $(this)
                .click(function () {
                    $(this).hide();
                })
                .css("width", cirWidth)
                .css("height", cirWidth)
                .css("background", "rgb(" + r + "," + g + "," + b + ")")
                .css("z-index", r)
                .css("position", "relative")
                .css("top", r)
                .css("left", b)
                .animate(
                    { width: "" + cirWidth, height: "" + cirWidth },
                    "slow",
                    startAnimation
                );
        });
    });
});

function startAnimation() {
    const cirWidth = $("#circlewidth").val();
    const rate = $("#rate").val();
    const growth = $("#growth").val();

    $(".circle").each(function () {
        for (let i = 100; i < cirWidth; i += 10) {
            $(this).animate({ width: "" + i, height: "" + i }, "slow");
        }
    });
}
