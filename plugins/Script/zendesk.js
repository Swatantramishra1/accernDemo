window.zEmbed || (function () {
    var queue = [];

    window.zEmbed = function () {
        queue.push(arguments);
    }
    window.zE = window.zE || window.zEmbed;
    document.zendeskHost = 'subdomain.zendesk.com';
    document.zEQueue = queue;
}());

