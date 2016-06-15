function getUserCommits() {
    $.ajax({
        method: "GET",
        url: "https://api.github.com/repos/" + document.getElementById("textBox").value + "/Calculator/commits",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            for (i = 0; i < data.length; i++) {
                $("body").append("<strong>" + data[i].commit.author.name + "</strong></br>");
            }
        }
    });
}