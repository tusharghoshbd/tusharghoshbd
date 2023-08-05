$(document).ready(function () {
    $('[required="required"]')
        .prev("label")
        .append("<span>*</span>")
        .children("span")
        .addClass("required");
    $("tbody tr:even").addClass("even");

    $("#btnAddTask").click(function (evt) {
        evt.preventDefault();
        $("#taskCreation").removeClass("not");
    });

    $("tbody tr").click(function (evt) {
        $(evt.target)
            .closest("td")
            .siblings()
            .andSelf()
            .toggleClass("rowHighlight");
    });

    $("#tblTasks tbody").on("click", ".deleteRow", function (evt) {
        evt.preventDefault();
        $(evt.target).parents("tr").remove();
    });

    $("#saveTask").click(function (evt) {
        evt.preventDefault();
        var task = $("form").toObject();
        $("#taskRow").tmpl(task).appendTo($("#tblTasks tbody"));
    });
});
(function ($) {
    $.fn.extend({
        toObject: function () {
            var result = {};
            $.each(this.serializeArray(), function (i, v) {
                result[v.name] = v.value;
            });
            return result;
        },
        fromObject: function (obj) {
            $.each(this.find(":input"), function (i, v) {
                var name = $(v).attr("name");
                if (obj[name]) {
                    $(v).val(obj[name]);
                } else {
                    $(v).val("");
                }
            });
        },
    });
})(jQuery);
