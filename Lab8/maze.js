let isStartedMaze = false;

$(document).ready(function () {
    $("#start").on("click mouseenter", function () {
        setBoundaryEvents();
        setEndOptionEvents();
    });
});

function setBoundaryEvents() {
    $("div.boundary").mouseenter(function () {
        $("div.boundary").addClass("redback");
        $("#boundary1").text("Loser...");
        $("div.boundary").animate(
            {
                "background-color": "red",
                color: "#fff",
                "font-size": "32px",
                "font-weight": "bold",
            },
            1000,
            resetElementsAndValues
        );
        console.log("Loser.....");
    });
}

function setEndOptionEvents() {
    $("#end").mouseenter(function () {
        $("div.boundary").addClass("greenback");
        $("#boundary1").text("Winner!!!");
        $("div.boundary").animate(
            {
                "background-color": "green",
                color: "#fff",
                "font-size": "32px",
                "font-weight": "bold",
            },
            1000,
            resetElementsAndValues
        );
        //alert("Winner......");
        console.log("Winner....");
    });
}

function resetElementsAndValues() {
    isStartedMaze = false;
    //reset background
    $("div.boundary").removeClass("redback").removeClass("greenback");

    //remove message
    $("#boundary1").text("");

    //reset event handlers
    $("div.boundary").off("mouseenter");
    $("#end").off("mouseenter");
}
