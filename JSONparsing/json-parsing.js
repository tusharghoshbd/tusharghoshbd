$(document).ready(function () {
    $("#btnDisplay").click(function () {
        console.log("click");
        let userId = $("#userId").val();
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users?id=" + userId,
            success: showUserInfo,
        });
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
            success: showPostList,
        });
    });
});

function showUserInfo(data) {
    let userData = data[0];
    let userInfo = `<p> Name: ${userData.name} </p>
    <p>Email: ${userData.email} </p>
    <p> Address: ${userData.address.street}, ${userData.address.suite} ${userData.address.city}, ${userData.address.zipcode}    
    `;

    $("#userInfo").html(userInfo);
}

function showPostList(data) {
    let postList = "";
    for (const item of data) {
        postList += `
          Title: ${item.title} <br/>
          Body: ${item.body}<br/>
          <button onclick="showComments(${item.id})">Show comments</button>
          <div id="comment_${item.id}"></div>
          <hr/>
        `;
    }
    $("#postList").html(postList);
}

function showComments(postId) {
    $.ajax({
        url:
            "https://jsonplaceholder.typicode.com/posts/" +
            postId +
            "/comments",
        success: function (data) {
            let comments = "";
            for (const [i, item] of data.entries()) {
                comments += `&emsp;comment ${i + 1} : ${item.body} <br/>`;
            }
            $("#comment_" + postId).html(comments);
        },
    });
}
