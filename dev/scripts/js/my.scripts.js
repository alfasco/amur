function startComment() {
    _hcwp = window._hcwp || [];
    _hcwp.push({
        widget: "Stream",
        widget_id: 80920
    });
    (function() {
        if ("HC_LOAD_INIT" in window) {
            if (HC.VERSION) HC.appInit();
            return
        };
        HC_LOAD_INIT = true;
        var hcc = document.createElement("script");
        hcc.type = "text/javascript";
        hcc.async = true;
        hcc.src = ("https:" == document.location.protocol ? "https" : "http") + "://w.hypercomments.com/widget/hc/80920/ru/widget.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hcc, s.nextSibling);
    })();
}

function startCommentRecent() {
    _hcwp = [];
    _hcwp.push({
        widget: "Mixstream",
        widget_id: 80920,
        filter: "last",
        limit: 5
    });
    (function() {
        if ("HC_LOAD_INIT" in window) {
            if (HC.VERSION) HC.appInit();
            return
        };
        HC_LOAD_INIT = true;
        var hcc = document.createElement("script");
        hcc.type = "text/javascript";
        hcc.async = true;
        hcc.src = ("https:" == document.location.protocol ? "https" : "http") + "://w.hypercomments.com/widget/hc/80920/ru/widget.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hcc, s.nextSibling);
    })();
}
