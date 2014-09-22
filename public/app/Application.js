Ext.define('AgeStoneVideos.Application', {
    name: 'AgeStoneVideos',

    extend: 'Ext.app.Application',
    
    requires: 'Ext.form.field.VTypes',

    stores: [
        // TODO: add stores here
    ],

    controllers: [
       'Login'
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

        // custom Vtype for vtype:'customPass'
        //var passRegex = ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20});
        Ext.apply(Ext.form.field.VTypes, {
            //  vtype validation function
            customPass: function(val, field) {
                return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
            },
            // vtype Text property: The error text to display when the validation function returns false
            customPassText: 'Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one special symbol @#$% and between 6 and 20 characters.',
        });
    
        var task = new Ext.util.DelayedTask(function () {

            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');
                        // Ext.create('widget.login'); // assim também da
                        // Ext.create('AgeStoneVideos.view.Login'); // e assim também
                    }
                }
            });

            //Ext.getBody().unmask();
        });
        task.delay(2000);
    },
});
