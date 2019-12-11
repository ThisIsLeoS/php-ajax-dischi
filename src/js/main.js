// compilation of Handlebars' template
var albumTemplateCompiled = Handlebars.compile($("body > #album").html());

getAlbums();

function getAlbums() {
    $.ajax({
        "url": "getAllAlbums.php",
        "method": "GET",
        "success": function(albums) {
            printAlbums(albums);
        },
        "error": function (iqXHR, textStatus, errorThrown) {
            alert(
                "iqXHR.status: " + iqXHR.status + "\n" +
                "textStatus: " + textStatus + "\n" +
                "errorThrown: " + errorThrown
            );
        }
    });
}

function printAlbums(albums) {
    for (var i = 0; i < albums.length; ++i) {

        // execution of the compiled Handlebars' template
        var albumTemplateExecuted = albumTemplateCompiled(albums[i]);

        $("main").append(albumTemplateExecuted);
    }
}
