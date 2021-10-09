$(document).ready(function() {
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
    document.cookie = updatedCookie;
  }

  function switchCookieAgreement(isShow) {
    if (isShow) {
      $('.cookie-warning').addClass('cookie-warning_show');
    } else {
      // по окончанию анимации делаем display: none;
      $('.cookie-warning').one('transitionend webkitTransitionEnd oTransitionEnd', function() {
        $(this).hide();
      });

      $('.cookie-warning').removeClass('cookie-warning_show');
    }
  }

  $('.cookie-warning_close-button').on('click', function() {
    // Скрываем уведомление и запоминаем это в куке
    switchCookieAgreement(false);
    setCookie('hideCookieAgreement', true);
  })

  if (!getCookie('hideCookieAgreement')) {
    setTimeout(
      function() { switchCookieAgreement(true) },
      1500
    );
  } else {
    $('.cookie-warning').hide()
  }

});