$(function(){    
    // Click Menu to show up submenu
    $('.nav-dropdown').each(function(){
        var $self = $(this);
        var handle = $self.children('[data-toggle="dropdown"]');
        $(handle).click(function(){
            var submenu = $self.children('.nav-submenu');
            $(submenu).toggle();
            return false;
        });
    });
});
