Ext.define('AgeStoneVideos.Application', {
    name: 'AgeStoneVideos',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    splashscreen: {},

    init: function () {
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
        splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function () {
    
        var task = new Ext.util.DelayedTask(function () {

            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true
            });

            //Ext.getBody().unmask();
        });
        task.delay(2000);
    },
});
