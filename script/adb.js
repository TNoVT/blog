function _0xe53c(d, e, f) {
  var g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
  var h = g.slice(0, e);
  var i = g.slice(0, f);
  var j = d.split('').reverse().reduce(function (a, b, c) {
    if (h.indexOf(b) !== -1) return a += h.indexOf(b) * Math.pow(e, c);
  }, 0);
  var k = '';
  while (j > 0) {
    k = i[j % f] + k;
    j = (j - j % f) / f;
  }
  return k || '0';
}
  if (window.location.hostname === 'novel-tt.blogspot.com') {
    let uvjdziehbrcgfwnlasload = false;
    let uvjdziehbrcgfwnlasreceived = false;
    const uvjdziehbrcgfwnlason = function () {
      if (uvjdziehbrcgfwnlasload) {
        return;
      }
      let uvjdziehbrcgfwnlas = {
        style: 'compact',
        loop: parseInt('5'),
        timeout: '0',
        cross: 'off',
        button: 'off',
        caption: 'I have disabled AdBlocker',
        buttonStyle: '',
        title: `It Looks Like You Have AdBlocker Enabled`,
        content: `Please disable AdBlock to proceed to the destination page.`,
        bg_color: 'rgba(255, 0, 0, 0.75)',
        modal_color: 'rgba(255, 255, 255, 1)',
        text_color: 'rgba(35, 40, 45, 1)',
        blur: 'on',
        prefix: 'mdpDeblocker',
        folder: 'deblocker',
        redirect: '',
        translations: 'off',
        guide: 'on'
      };
      wpLocalization();
      advancedTranslation();
      adsBlocked(callbackAdsBlocked);
      function callbackAdsBlocked(blocked, readyState = 0) {
        if (blocked && readyState === 2) {
          doAction();
        } else if (blocked && readyState === 4) {
          doAction();
        } else if (!uvjdziehbrcgfwnlasreceived && readyState === 666) {
          doAction();
        } else if (!document.getElementById(window.mdpAdsId ?? 'mdp-deblocker-ads')) {
          if (!document.getElementById(uvjdziehbrcgfwnlas)) {
            doAction();
          }
        }
      }
      function doAction() {
        uvjdziehbrcgfwnlasreceived = true;
        let t = '0';
        t = parseInt(t);
        if (t > 0) {
          setTimeout(() => {
            chooseAction();
          }, t);
        } else {
          chooseAction();
        }
      }
      function chooseAction() {
        let redURL = '';
        if (redURL.length > 1) {
          window.location.replace(redURL);
        } else {
          showModal();
        }
      }
      function disableTextSelection(e) {
        if (typeof e.onselectstart !== 'undefined') {
          e.onselectstart = function () {
            return false;
          };
        } else if (typeof e.style.MozUserSelect != 'undefined') {
          e.style.MozUserSelect = 'none';
        } else if (typeof e.style.webkitUserSelect != 'undefined') {
          e.style.webkitUserSelect = 'none';
        } else {
          e.onmousedown = function () {
            return false;
          };
        }
        e.style.cursor = 'default';
      }
      function enableSelection(e) {
        if (typeof e.onselectstart != 'undefined') {
          e.onselectstart = function () {
            return true;
          };
        } else if (typeof e.style.MozUserSelect != 'undefined') {
          e.style.MozUserSelect = 'text';
        } else if (typeof e.style.webkitUserSelect != 'undefined') {
          e.style.webkitUserSelect = 'text';
        } else {
          e.onmousedown = function () {
            return true;
          };
        }
        e.style.cursor = 'auto';
      }
      function disableContextMenu() {
        document.oncontextmenu = function (e) {
          let t = e || window.event;
          let n = t.target || t.srcElement;
          if (n.nodeName != 'A') {
            return false;
          }
        };
        document.body.oncontextmenu = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };
      }
      function enableContextMenu() {
        document.oncontextmenu = null;
        document.body.oncontextmenu = null;
        document.ondragstart = null;
      }
      let h_win_disableHotKeys;
      let h_mac_disableHotKeys;
      function disableHotKeys() {
        h_win_disableHotKeys = function (e) {
          if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            e.preventDefault();
          }
        };
        window.addEventListener('keydown', h_win_disableHotKeys);
        document.keypress = function (e) {
          if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            return false;
          }
        };
        h_mac_disableHotKeys = function (e) {
          if (e.metaKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            e.preventDefault();
          }
        };
        window.addEventListener('keydown', h_mac_disableHotKeys);
        document.keypress = function (e) {
          if (e.metaKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            return false;
          }
        };
        document.onkeydown = function (e) {
          if (e.keyCode == 123 || (e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 73) {
            e.preventDefault();
          }
        };
      }
      function disableDeveloperTools() {
        window.addEventListener('keydown', function (e) {
          if (e.keyCode === 123 || (e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
          }
        });
        let checkStatus;
        let element = new Image();
        Object.defineProperty(element, 'id', {
          get: function () {
            checkStatus = 'on';
            throw new Error('Dev tools checker');
          }
        });
        requestAnimationFrame(function check() {
          checkStatus = 'off';
          if ('on' === checkStatus) {
            document.body.parentNode.removeChild(document.body);
            document.head.parentNode.removeChild(document.head);
          } else {
            requestAnimationFrame(check);
          }
        });
      }
      function enableHotKeys() {
        window.removeEventListener('keydown', h_win_disableHotKeys);
        document.keypress = function (e) {
          if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            return true;
          }
        };
        window.removeEventListener('keydown', h_mac_disableHotKeys);
        document.keypress = function (e) {
          if (e.metaKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            return true;
          }
        };
        document.onkeydown = function (e) {
          e = e || window.event;
          if (e.keyCode == 123 || e.keyCode == 18 || e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            return true;
          }
        };
      }
      function addStyles() {
        if (document.querySelector(`#mdpDeblocker-css`)) {
          return;
        }
        let style = document.createElement('style');
        style.id = `mdpDeblocker-css`;
        style.innerHTML = ` .mdpDeblocker-style-compact .mdpDeblocker-blackout, .mdpDeblocker-style-compact-right-top .mdpDeblocker-blackout, .mdpDeblocker-style-compact-left-top .mdpDeblocker-blackout, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-blackout, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-blackout, .mdpDeblocker-style-compact .mdpDeblocker-blackout { position: fixed; z-index: 9997; left: 0; top: 0; width: 100%; height: 100%; display: none; } .mdpDeblocker-style-compact .mdpDeblocker-blackout.active, .mdpDeblocker-style-compact-right-top .mdpDeblocker-blackout.active, .mdpDeblocker-style-compact-left-top .mdpDeblocker-blackout.active, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-blackout.active, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-blackout.active, .mdpDeblocker-style-compact .mdpDeblocker-blackout.active { display: block; -webkit-animation: mdpDeblocker-appear; animation: mdpDeblocker-appear; -webkit-animation-duration: .2s; animation-duration: .2s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-compact .mdpDeblocker-wrapper, .mdpDeblocker-style-compact-right-top .mdpDeblocker-wrapper, .mdpDeblocker-style-compact-left-top .mdpDeblocker-wrapper, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-wrapper, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-wrapper, .mdpDeblocker-style-compact .mdpDeblocker-wrapper { display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9998; } .mdpDeblocker-style-compact .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact .mdpDeblocker-modal { height: auto; width: auto; position: relative; max-width: 40%; padding: 4rem; opacity: 0; z-index: 9999; transition: all 0.5s ease-in-out; border-radius: 1rem; margin: 1rem; text-align: center; } .mdpDeblocker-style-compact .mdpDeblocker-modal.active, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal.active, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal.active, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal.active, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal.active, .mdpDeblocker-style-compact .mdpDeblocker-modal.active { opacity: 1; -webkit-animation: mdpDeblocker-appear; animation: mdpDeblocker-appear; -webkit-animation-delay: .1s; animation-delay: .1s; -webkit-animation-duration: .5s; animation-duration: .5s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-compact .mdpDeblocker-modal h4, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal h4, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal h4, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal h4, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal h4, .mdpDeblocker-style-compact .mdpDeblocker-modal h4 { margin: 0 0 1rem 0; padding-right: .8rem; } .mdpDeblocker-style-compact .mdpDeblocker-modal p, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal p, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal p, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal p, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal p, .mdpDeblocker-style-compact .mdpDeblocker-modal p { margin: 0; } @media only screen and (max-width: 1140px) { .mdpDeblocker-style-compact .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact .mdpDeblocker-modal { min-width: 60%; } } @media only screen and (max-width: 768px) { .mdpDeblocker-style-compact .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact .mdpDeblocker-modal { min-width: 80%; } } @media only screen and (max-width: 420px) { .mdpDeblocker-style-compact .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-top .mdpDeblocker-modal, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-modal, .mdpDeblocker-style-compact .mdpDeblocker-modal { min-width: 90%; } } .mdpDeblocker-style-compact .mdpDeblocker-close, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close, .mdpDeblocker-style-compact .mdpDeblocker-close { position: absolute; right: 1rem; top: 1rem; display: inline-block; cursor: pointer; opacity: .5; width: 32px; height: 32px; -webkit-animation: mdpDeblocker-close-appear; animation: mdpDeblocker-close-appear; -webkit-animation-delay: 1000ms; animation-delay: 1000ms; -webkit-animation-duration: .4s; animation-duration: .4s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-compact .mdpDeblocker-close:hover, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close:hover, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close:hover, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close:hover, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close:hover, .mdpDeblocker-style-compact .mdpDeblocker-close:hover { opacity: 1; } .mdpDeblocker-style-compact .mdpDeblocker-close:before, .mdpDeblocker-style-compact .mdpDeblocker-close:after, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close:before, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close:after, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close:before, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close:after, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close:before, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close:after, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close:before, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close:after, .mdpDeblocker-style-compact .mdpDeblocker-close:before, .mdpDeblocker-style-compact .mdpDeblocker-close:after { position: absolute; left: 15px; content: " "; height: 33px; width: 2px; background: rgba(35, 40, 45, 1); } .mdpDeblocker-style-compact .mdpDeblocker-close:before, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close:before, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close:before, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close:before, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close:before, .mdpDeblocker-style-compact .mdpDeblocker-close:before { transform: rotate(45deg); } .mdpDeblocker-style-compact .mdpDeblocker-close:after, .mdpDeblocker-style-compact-right-top .mdpDeblocker-close:after, .mdpDeblocker-style-compact-left-top .mdpDeblocker-close:after, .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-close:after, .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-close:after, .mdpDeblocker-style-compact .mdpDeblocker-close:after { transform: rotate(-45deg); } .mdpDeblocker-style-compact-right-top .mdpDeblocker-wrapper { justify-content: flex-end; align-items: flex-start; } .mdpDeblocker-style-compact-left-top .mdpDeblocker-wrapper { justify-content: flex-start; align-items: flex-start; } .mdpDeblocker-style-compact-right-bottom .mdpDeblocker-wrapper { justify-content: flex-end; align-items: flex-end; } .mdpDeblocker-style-compact-left-bottom .mdpDeblocker-wrapper { justify-content: flex-start; align-items: flex-end; } .mdpDeblocker-style-full .mdpDeblocker-blackout { position: fixed; z-index: 9998; left: 0; top: 0; width: 100%; height: 100%; display: none; } .mdpDeblocker-style-full .mdpDeblocker-blackout.active { display: block; -webkit-animation: mdpDeblocker-appear; animation: mdpDeblocker-appear; -webkit-animation-delay: .4s; animation-delay: .4s; -webkit-animation-duration: .4s; animation-duration: .4s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-full .mdpDeblocker-modal { height: 100%; width: 100%; max-width: 100%; max-height: 100%; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 45px; opacity: 0; z-index: 9999; transition: all 0.5s ease-in-out; display: flex; align-items: center; justify-content: center; flex-direction: column; } .mdpDeblocker-style-full .mdpDeblocker-modal.active { opacity: 1; -webkit-animation: mdpDeblocker-appear; animation: mdpDeblocker-appear; -webkit-animation-duration: .4s; animation-duration: .4s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-full .mdpDeblocker-modal h4 { margin: 0 0 1rem 0; } .mdpDeblocker-style-full .mdpDeblocker-modal p { margin: 0; } .mdpDeblocker-style-full .mdpDeblocker-close { position: absolute; right: 10px; top: 10px; width: 32px; height: 32px; display: inline-block; cursor: pointer; opacity: .3; -webkit-animation: mdpDeblocker-close-appear; animation: mdpDeblocker-close-appear; -webkit-animation-delay: 1s; animation-delay: 1s; -webkit-animation-duration: .4s; animation-duration: .4s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .mdpDeblocker-style-full .mdpDeblocker-close:hover { opacity: 1; } .mdpDeblocker-style-full .mdpDeblocker-close:before, .mdpDeblocker-style-full .mdpDeblocker-close:after { position: absolute; left: 15px; content: " "; height: 33px; width: 2px; } .mdpDeblocker-style-full .mdpDeblocker-close:before { transform: rotate(45deg); } .mdpDeblocker-style-full .mdpDeblocker-close:after { transform: rotate(-45deg); } .wp-block-button__link { box-shadow: none; cursor: pointer; display: inline-block; padding: calc(0.667em + 2px) calc(1.333em + 2px); text-align: center; text-decoration: none; word-break: break-word; box-sizing: border-box; margin: 1rem 0 0 0; } @-webkit-keyframes mdpDeblocker-appear { from { opacity: 0; } to { opacity: 1; } } @keyframes mdpDeblocker-appear { from { opacity: 0; } to { opacity: 1; } } @-webkit-keyframes mdpDeblocker-close-appear { from { opacity: 0; transform: scale(0.2); } to { opacity: .3; transform: scale(1); } } @keyframes mdpDeblocker-close-appear { from { opacity: 0; transform: scale(0.2); } to { opacity: .3; transform: scale(1); } } body.mdpDeblocker-blur { -webkit-backface-visibility: none; } body.mdpDeblocker-blur > *:not(#wpadminbar):not(.mdpDeblocker-modal):not(.mdpDeblocker-wrapper):not(.mdpDeblocker-blackout):not(#ez-cookie-dialog-wrapper) { -webkit-filter: blur(5px); filter: blur(5px); }	.mdpDeblocker-guide-triger { font-size: smaller; clear: both; margin-top: 1rem; display: block; text-decoration: underline; text-decoration-style: dotted; cursor: pointer; } .mdpDeblocker-guide-triger:hover { text-decoration: underline; text-decoration-style: dotted; } .mdpDeblocker-guide ol { text-align: left; } .mdpDeblocker-guide > div:before{ content: ""; background: linear-gradient( to left, rgba(255,255,255,0.01), white); width: 30%; height: 100%; position: absolute; top: 0; left: 0; }	`;
        style.innerHTML += getCustomCSS();
        let ref = document.querySelectorAll('script');
        let rand = !navigator.brave ? ref[Math.floor(Math.random() * ref.length)] : ref[ref.length - 1];
        rand.parentNode.insertBefore(style, rand);
      }
      function getCustomCSS() {
        let customCSS = ``;
        let prefix = `.mdpDeblocker`;
        customCSS = customCSS.replaceAll(`{{deblocker}}`, prefix);
        customCSS = customCSS.replaceAll(`{{deBlocker}}`, prefix);
        return customCSS;
      }
      function showModal() {
        let prefix = 'mdpDeblocker';
        addStyles();
        if (document.body.classList.contains('mdpDeblocker-style-compact')) {
          return;
        }
        document.body.classList.add('mdpDeblocker-style-compact');
        {
          document.body.classList.add(`mdpDeblocker-blur`);
        }
        if (document.querySelector(`mdpDeblocker-modal`)) {
          return;
        }
        let overlay = document.createElement('div');
        overlay.classList.add(`mdpDeblocker-blackout`);
        overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.75)';
        overlay.classList.add('active');
        document.body.appendChild(overlay);
        let modalWrapper = document.createElement('div');
        modalWrapper.classList.add(`mdpDeblocker-wrapper`);
        document.body.appendChild(modalWrapper);
        let modal = document.createElement('div');
        modal.classList.add(`mdpDeblocker-modal`);
        modal.classList.add(`mdpDeblocker-the-modal`);
        modal.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        modal.classList.add('active');
        modalWrapper.appendChild(modal);
        rednerCloseCross(modal);
        let title = document.createElement('h4');
        title.innerHTML = uvjdziehbrcgfwnlas.title;
        title.style.color = 'rgba(35, 40, 45, 1)';
        modal.appendChild(title);
        let content = document.createElement('div');
        content.classList.add(`mdpDeblocker-content`);
        content.innerHTML = uvjdziehbrcgfwnlas.content;
        content.style.color = 'rgba(35, 40, 45, 1)';
        modal.appendChild(content);
        rednerCloseButton(modal);
        if (typeof renderGuide !== 'undefined') {
          renderGuide(modalWrapper, modal);
        }
        disableTextSelection(document.body);
        disableContextMenu();
        disableHotKeys();
        disableDeveloperTools();
        uvjdziehbrcgfwnlasload = true;
      }
      function rednerCloseCross(modal) {}
      function rednerCloseButton(modal) {}
      function closeClickHandler(e) {
        e.preventDefault();
        let elem = document.querySelector(`.mdpDeblocker-modal`);
        elem.parentNode.removeChild(elem);
        elem = document.querySelector(`.mdpDeblocker-wrapper`);
        elem.parentNode.removeChild(elem);
        elem = document.querySelector(`.mdpDeblocker-blackout`);
        elem.parentNode.removeChild(elem);
        document.body.classList.remove(`mdpDeblocker-blur`);
        enableSelection(document.body);
        enableContextMenu();
        enableHotKeys();
        const bodyClass = `mdpDeblocker-style-` + uvjdziehbrcgfwnlas.style;
        if (document.body.classList.contains(bodyClass)) {
          document.body.classList.remove(bodyClass);
        }
        runLoop();
      }
      function renderGuide(modalWrapper, modal) {
        let guideTrigger = document.createElement('a');
        guideTrigger.classList.add(`mdpDeblocker-guide-triger`);
        guideTrigger.innerHTML = `How do I disable my ad blocker?`;
        guideTrigger.addEventListener('click', guideTriggerHadler);
        modal.appendChild(guideTrigger);
        let guideModal = document.createElement('div');
        guideModal.classList.add(`mdpDeblocker-modal`);
        guideModal.classList.add(`mdpDeblocker-modal-guide`);
        guideModal.style.display = 'none';
        guideModal.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        let guide = document.createElement('div');
        guide.classList.add(`mdpDeblocker-guide`);
        guide.innerHTML = `<h4>To disable ad blocker on this site:</h4>`;
        guide.innerHTML += `<div style="position: relative; text-align: right; background: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1SeGNEJjPpPpnam15VMuGFQphPTb2zhiQBTTo4ajY5784BEMUL169I-TNA3aRTi7azzJ9UFEDrzUIlMHJTkiZmzwz4IlAmjFxfrO2l3Ji3TgHW9QhRYqcy2StfCDjYtp5tcHbL20364ytdn0KMImnUTB5_HitL_ZDetSRAIY64Ck2mvqiUfqr7v06/s1600/browser-top-repeat.jpeg) repeat-x top center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoM35mFHyIiOS467F3zStbOiaEeKmZU2kTn1S2Nd5gnD9m9g9bi60DJQXsSGGdaf7eL2udATRboZeEh_AbZ_42yqGgGpxUENC3mxj0mcONCazYx5JIZp-NIGl55sa-xEfm6UUyKZemOwPhjV0RpYk6amanSVS8y9dDO9-wX5DiIna3o3PsHYHxIbBn/s1600/browser-top-right.gif"></div>`;
        guide.innerHTML += `<ol><li>Right click on the ad blocker extension icon at the top right corner of your browser</li><li>From the menu choose <b>&quot;Disable on this site&quot;</b> or <b>&quot;Pause on this site&quot; </b></li><li>Refresh the page if not automatically refreshed</li></ol>`;
        let guideTriggerOk = document.createElement('a');
        guideTriggerOk.classList.add(`mdpDeblocker-guide-triger`);
        guideTriggerOk.innerHTML = `OK. I understand.`;
        guideTriggerOk.addEventListener('click', guideTriggerHadler);
        guideModal.appendChild(guide);
        guideModal.appendChild(guideTriggerOk);
        modalWrapper.appendChild(guideModal);
      }
      function guideTriggerHadler(e) {
        e.preventDefault();
        const wrapper = e.target.parentNode.parentNode;
        if (wrapper.querySelector(`.mdpDeblocker-the-modal`).classList.contains('active')) {
          wrapper.querySelector(`.mdpDeblocker-the-modal`).classList.remove('active');
          wrapper.querySelector(`.mdpDeblocker-the-modal`).style.display = 'none';
          wrapper.querySelector(`.mdpDeblocker-modal-guide`).classList.add('active');
          wrapper.querySelector(`.mdpDeblocker-modal-guide`).style.display = 'block';
        } else {
          wrapper.querySelector(`.mdpDeblocker-the-modal`).classList.add('active');
          wrapper.querySelector(`.mdpDeblocker-the-modal`).style.display = 'block';
          wrapper.querySelector(`.mdpDeblocker-modal-guide`).classList.remove('active');
          wrapper.querySelector(`.mdpDeblocker-modal-guide`).style.display = 'none';
        }
      }
      function runLoop() {
        if (uvjdziehbrcgfwnlas.loop > 0) {
          let loopTimeout = setTimeout(() => {
            uvjdziehbrcgfwnlasload = false;
            uvjdziehbrcgfwnlas.timeout = 0;
            adsBlocked(callbackAdsBlocked);
          }, uvjdziehbrcgfwnlas.loop * 1000);
        }
      }
      function isFairAdBlocker() {
        let stndzStyle = document.getElementById('stndz-style');
        return null !== stndzStyle;
      }
      function adsBlocked(callback) {
        let adsSrc = 'https://googleads.g.doubleclick.net/pagead/id';
        if (isFairAdBlocker()) {
          callback(true);
        } else {
          adsSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          let head = document.getElementsByTagName('head')[0];
          let script = document.createElement('script');
          let done = false;
          script.setAttribute('src', adsSrc);
          script.setAttribute('type', 'text/javascript');
          script.setAttribute('charset', 'utf-8');
          script.onload = script.onreadstatechange = function () {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
              done = true;
              script.onload = script.onreadystatechange = null;
              if ('undefined' === typeof window.adsbygoogle) {
                callback(true);
              } else {
                uvjdziehbrcgfwnlasreceived = true;
                callback(false);
              }
              script.parentNode.removeChild(script);
            }
          };
          script.onerror = function () {
            callback(true);
          };
          if (!uvjdziehbrcgfwnlasreceived) {
            const fishMemory = Math.floor(Math.random() * 4 + 2);
            setTimeout(() => {
              if (!uvjdziehbrcgfwnlasreceived) {
                callback(true, 666);
              }
            }, fishMemory * 1000);
          }
          const request2 = new XMLHttpRequest();
          function requestError(e) {
            console.error("An error occurred while transferring the file.");
            doAction();
            callbacked = true;
          }
          request2.addEventListener("error", requestError);
          request2.addEventListener("abort", requestError);
          request2.open("GET", "https://static.doubleclick.net/instream/ad_status.js", true);
          request2.send();
          let callbacked = false;
          const request = new XMLHttpRequest();
          request.open("GET", adsSrc, true);
          request.onreadystatechange = res => {
            if (!callbacked) {
              callback(request.responseURL !== adsSrc, request.readyState);
              callbacked = true;
            }
          };
          request.send();
          head.insertBefore(script, head.firstChild);
        }
      }
      function advancedTranslation() {
        return;
      }
      function wpLocalization() {
        if (window.deblocker) {
          const locale = window.deblocker;
          for (const [key, localizedString] of Object.entries(locale)) {
            uvjdziehbrcgfwnlas[key] = localizedString;
          }
        }
      }
      function localizeSingleString(lang, locale, key) {
        if (lang[locale][key].length !== '') {
          uvjdziehbrcgfwnlas[key] = lang[locale][key];
        }
      }
    };
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', () => {
      uvjdziehbrcgfwnlason();
    }) : uvjdziehbrcgfwnlason();
    setTimeout(() => {
      uvjdziehbrcgfwnlason();
    }, 1000);
  }