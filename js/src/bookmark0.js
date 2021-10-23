$.get('/json_data/bookmark.json', function (data) {
    var bmjQuery = $("#bookmark-list");
    for (var i = 0; i < data.length; i++) {
        bmjQuery.append('<h3 class="bookmark-title" id="' + data[i].category + '">' + data[i].category + '</h3>')
        var dataCategory = data[i].bookmarks;
        var bmCategory = $('<div class="bookmark-type bg-class"></div>');
        for (var j = 0; j < dataCategory.length; j++) {
            var dataitem = dataCategory[j];
            var bgColor;
            if (dataitem.bg == undefined || dataitem.bg == null || dataitem.bg == "") {
                bgColor = "#ffffff";
            } else {
                bgColor = dataitem.bg;
            }
            var paddingTopBottom;
            if (dataitem.padding == undefined || dataitem.padding == null || dataitem.padding == "") {
                paddingTopBottom = 0;
            } else {
                paddingTopBottom = dataitem.padding;
            }
            var referrerInfo;
            if (dataitem.referrer == undefined || dataitem.referrer == null || dataitem.referrer == "") {
                referrerInfo = dataitem.name;
            } else {
                referrerInfo = dataitem.referrer;
            }
            var imgHtml;
            if (dataitem.img == undefined || dataitem.img == null || dataitem.img == "") {
                imgHtml = "";
            } else {
                imgHtml = '<a href="' + dataitem.url + '" target="_blank" class="nofancybox" alt="' + referrerInfo + '" title="' + referrerInfo + '"><img src="' + dataitem.img + '" style="padding-top:' + paddingTopBottom + ';padding-bottom:' + paddingTopBottom + ';"></img></a>';
            }
            bmCategory.append('<div class="bookmark-item gride-style" style="background-color:' + bgColor + '">' + imgHtml + '<a href="' + dataitem.url + '" target="_blank"><span class="item-name">' + dataitem.name + '</span></a></div>')
        }
        bmjQuery.append(bmCategory);
    }
    // $("#bookmark-list .bookmark-title:first-child").append('<i class="fa fa-th" aria-hidden="true"></i>');
    // var switchMenu = $("#bookmark-list .bookmark-title .fa");
    // switchMenu.mouseover(function () {
    //     switchMenu.css("color", "red");
    // });
    // switchMenu.mouseout(function () {
    //     switchMenu.css("color", $("#bookmark-list .bookmark-title").css("color"));
    // });
    // switchMenu.click(function () {
    //     switchMenu.toggleClass("fa-list").toggleClass("fa-th");
    //     $("#bookmark-list .bookmark-type .bookmark-item").toggleClass("gride-style").toggleClass("list-style");
    //     if ($("#bookmark-list .bookmark-type .bookmark-item").hasClass("gride-style")) {
    //         $.cookie("bookmark-style", "gride-style");
    //         $("#bookmark-list .bookmark-type").addClass("bg-class");
    //     } else {
    //         $.cookie("bookmark-style", "list-style");
    //         $("#bookmark-list .bookmark-type").removeClass("bg-class");
    //     }
    // });
    // var bookmarkStyle = $.cookie("bookmark-style");
    // if ((bookmarkStyle == undefined && $("#bookmark-list").width() < 450) || bookmarkStyle == "list-style") {
    //     switchMenu.removeClass("fa-th").addClass("fa-list");
    //     $("#bookmark-list .bookmark-type .bookmark-item").removeClass("gride-style").addClass("list-style");
    //     $("#bookmark-list .bookmark-type").removeClass("bg-class");
    // } else {
    //     switchMenu.removeClass("fa-list").addClass("fa-th");
    //     $("#bookmark-list .bookmark-type .bookmark-item").removeClass("list-style").addClass("gride-style");
    //     $("#bookmark-list .bookmark-type").addClass("bg-class");
    // }
});