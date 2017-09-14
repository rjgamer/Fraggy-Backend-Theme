$(function () {

    $('a > img').each(function () {
        var $this = $(this);
        if ($this.prop('src').indexOf('modify_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-pencil"></i>');
        } else if ($this.prop('src').indexOf('options_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-cog"></i>');
        } else if ($this.prop('src').indexOf('noclock_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-list-alt"></i>');
        } else if ($this.prop('src').indexOf('view_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-desktop"></i>');
        } else if ($this.prop('src').indexOf('up_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-up"></i>');
        } else if ($this.prop('src').indexOf('down_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-down"></i>');
        } else if ($this.prop('src').indexOf('delete_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-trash"></i>');
        } else if ($this.prop('src').indexOf('folder_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-folder"></i>');
        } else if ($this.prop('src').indexOf('add_child.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-files"></i>');
        } else if ($this.prop('src').indexOf('restore_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-recycle"></i>');
        }
    });

    $('button, input[type="button"], input[type="reset"]')
            .addClass('btn btn-outline-light');

    $('button[type="submit"], input[type="submit"]')
            .addClass('btn btn-primary')
            .removeClass('btn-outline-light');

    $('input[type="text"], input[type="password"], textarea')
            .addClass('form-control');

    var $contentBody = $('#content > .content-body');
    if ($contentBody.find('.card, .alert').length === 0) {
        $contentBody
                .find('> div')
                .addClass('card')
                .find('> div')
                .addClass('card-body');
    }

    $('#addonsPage nav.navbar a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf('templates') > -1) {
            $this.prepend('<i class="fa fa-fw fa-paint-brush"></i> ');
        } else if ($this.attr('href').indexOf('modules') > -1) {
            $this.prepend('<i class="fa fa-fw fa-puzzle-piece"></i> ');
        } else if ($this.attr('href').indexOf('languages') > -1) {
            $this.prepend('<i class="fa fa-fw fa-language"></i> ');
        }
    });

    var $welcomeMessage = $('#welcomeMessage'),
            welcomeMessageText = $welcomeMessage.text();

    welcomeMessageText = welcomeMessageText.replace('imBackend', 'im Backend');
    $welcomeMessage.text(welcomeMessageText);

    $('form[action="intro2.php"] table:first').addClass('table');

    if ($('.jcalendar').length) {
        $.insert(WB_URL + '/include/jscalendar/calendar-system.css');
    }

    if ($('.jsadmin').length) {
        $.insert(WB_URL + '/modules/jsadmin/backend.css');
    }
    $('#publishdate, #enddate').css({'width': 150, 'display': 'inline-block'});


});

