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
      "Отмена": {
        class: "btn-white",
        text: "Отмена",
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
    language: "ru",
    emailEnabled: true,
    onReady: function(data) {
      $(document).ready(function() {
        initMain();
        initBindings();

        var canSbolPay = window.SbolPay
          && data.merchantOptions.indexOf('SBOL_PAYMENT_ALLOWED') !== -1
          && data.sbolInfo
          && data.sbolInfo.underMaintenance !== true
          && !(data.sbolInfo.underSmsCheckoutLimit !== true && data.merchantOptions.indexOf('SBOL_SMS_CHECKOUT') !== -1)
        if (canSbolPay) {
          window.SbolPay({
            selector: '#sbol-pay-container',
            rowView: true,
            rowViewMinWidth: 800,
            mdOrder: $.url.param('mdOrder'),
          });
        }
      });
    }
  });
});
