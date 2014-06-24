(function($) {

    $.fn.pageBuilder = function() {


        if (this.length) {


            $('body').prepend(
                    '<div class="actions-toolbar">\n\
                        <div class="actions">\n\
                            <span class="action" id="addButton">\n\
                                <span class="fa fa-bars"></span><a>Add Menu Button</a></span>\n\
                            <span class="action" id="addText">\n\
                                <span class="fa fa-text-width"></span><a>Add Text Container</a>\n\
                            </span>\n\
                            <span class="action" id="pageSettings">\n\
                                <span class="fa fa-gear"></span><a>Page Settings</a>\n\
                            </span>\n\
                            <span class="action" id="resetPage">\n\
                                <span class="fa fa-times"></span><a>Reset Page</a>\n\
                            </span>\n\
                        </div>\n\
                    </div><div class="actions-toolbar-end"></div>');

            /*******/

            function createButton() {
                $('.modal-overlay').fadeIn(200);
                $('#textButtonEntryModal').fadeIn(300);
            }

            function createText() {
                $('.modal-overlay').fadeIn(200);
                $('#textElementEntryModal').fadeIn(300);
            }


            function pageSettings() {
                $('.modal-overlay').fadeIn(200);
                $('#pageSettingsModal').fadeIn(300);
                $('.colorpicker').css('z-index', '3');
            }


            $('#saveButtonText').click(function() {
                var buttonText = $('#buttonTextEntry').val();
                $(".navigation").append(
                        '<div class="button">' + buttonText + '</div>');
                $(".button").draggable({containment: "parent", snap: true});
                $('.modal-overlay').fadeOut(200);
                $('.data-modal').fadeOut(300);
                $('#buttonTextEntry').val("");
                var buttonText = null;
                $('.button').each(function() {
                    var _this = this;
                    $(this).ColorPicker({
                        eventName: 'dblclick',
                        onChange: function(hsb, hex, rgb) {
                            _this.style.background = '#' + hex;
                        }
                    });
                    $(this).draggable({containment: "parent", snap: true});
                });
            });


            $('#saveTextEntry').click(function() {
                var textContent = $('#TextContenEntry').val();
                $(".container").append(
                        '<div class="text">\n\
                         <div class="text-settings"><span class="fa fa-gear"></span>\n\
                         </div><div class="text-remove"><span class="fa fa-times"></span></div>' + textContent + '</div>');
                $(".text").draggable({containment: "parent"});
                $('.modal-overlay').fadeOut(200);
                $('.data-modal').fadeOut(300);
                $('#TextContenEntry').val("");
                var textContent = null;
                $('.text').each(function() {
                    var _this = this;
                    $(this).find('.fa-gear').ColorPicker({
                        onChange: function(hsb, hex, rgb) {
                            _this.style.background = '#' + hex;
                        }
                    });
                    $('.colorpicker').draggable({cancel: '.colorpicker_color, .colorpicker_hue'});
                    $(this).find('.fa-times').click(function() {
                        $(this).parents('.text').fadeOut(200, function() {
                            $(this).remove();
                        });
                    });
                });
            });


            $('#savePageSettings').click(function() {
                var pageWidth = $('#pageWidth').val();
                $('#page').css('width', pageWidth);
                $('.modal-overlay').fadeOut(200);
                $('.data-modal').fadeOut(300);
                $('#pageWidth').val("");
                var pageWidth = null;
            });


            $("#resetPage").click(function() {
                $.get(location, function(data) {
                    document.open();
                    document.write(data);
                    document.close();
                    $.cache = {};
                });
            });



            $("#addButton").on("click", createButton);
            $("#addText").on("click", createText);
            $("#pageSettings").on("click", pageSettings);


            /*******/
        }
        else {
            console.log("There is no selector in the Markup code");
            return;
        }
    };


}(jQuery));