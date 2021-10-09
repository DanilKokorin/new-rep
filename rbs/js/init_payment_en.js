document.addEventListener('DOMContentLoaded', function() {
  $('input.styled').checkbox();
  $("#modal-binding").dialog({
    resizable: false,
    modal: true,
    autoOpen: false,
    buttons: {
      "DeleteBinding": {
        text: "OK",
        id: "deactiveBinding",
        class: "btn-white",
        click: function() {
          $(this).dialog("close");
        }
      },
      "Cancel": {
        class: "btn-white",
        text: "Cancel",
        click: function() {
          $(this).dialog("close");
        }
      }
    }
  });
  $("#delete-binding").click(function(e) {
    e.preventDefault();
    $("#modal-binding").dialog('open');
  });

  $(document).payment({
    getFeeEnabled: true,
    messageTimeRemaining: "#HOU#:#MIN#:#SEC#",
    bindingCheckboxEnabled: true,
    agreementCheckboxEnabled: true,
    language: "en",
    emailEnabled: true,
    onReady: function() {
      $(document).ready(function() {
        initMain();
        initBindings();
      });
    }
  });
});