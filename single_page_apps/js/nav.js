(function() {
  'use strict';

  // returns a node list which is kind of like
  // an array but not exactly so we need to convert
  // to an array
  Array.from(document.querySelectorAll('nav a'))
    .forEach(function addClickEvent(anchorTag) {
      anchorTag.addEventListener('click', function handleNavClick(e) {
        e.preventDefault();

        // adds history to the browser (back/forward buttons)
        window.history.pushState(
          {},                           // stores any data we want to track about the state
          e.target.innerText,           // any string of text you want but is the name/title of the new state
          e.target.getAttribute('href') // what the path should be adjusted to
        );

        // e.target is the same as anchorTag
        changeContent(e.target.getAttribute('href').substring(1));
      })
    });

  // adds an event listener on the window that properly changes the dynamic
  // content if the user clicks back or forward on the browser by using the pathname
  window.addEventListener('popstate', function handleBrowserNav(e) {
    changeContent(window.location.pathname.substring(1));
  });

  /**
   *  Changes the content inside the #content-wrapper
   *  to match the template that is named the same as the argument
   *  @param  {String} page [the template to load]
   *  @return {void}
   */
  function changeContent(page) {
    if (typeof(page) !== 'string') {
      return;
    };

    if (!page.length) {
      page = 'home';
    }

    let fileName = `/templates/${page}.html`
    // let fileName = '/templates/' + page + '.html';

    fetch(fileName)
      .then(function handleResponse(response) {
        if (response.status > 199 && response.status < 300) {
          return response.text();
        } else if (response.status === 404) {
          return fetch('/templates/404.html')
            .then(function handleResponse(response404) {
              return response404.text();
            });
        } else {
          return Promise.reject('Oops');
        }
      })
      .then(function handleHtml(html) {
        document.querySelector('#content-wrapper').innerHTML = html;
      })
      .catch(function handleError(err) {
        console.warn('uhhhh nah', err)
      });
  };

  changeContent('home');
})();
