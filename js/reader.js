const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {

        width:600,

        height:776,

        size:"fixed",

        minWidth:280,

        maxWidth:700,

        minHeight:420,

        maxHeight:900,

        maxShadowOpacity:.5,

        showCover:true,

        mobileScrollSupport:true,

        usePortrait:true,

        autoSize:true

    });

pageFlip.loadFromHTML(document.querySelectorAll(".page"));