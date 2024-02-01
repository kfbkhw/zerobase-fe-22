; (function () {
  'use strict';

  // util

  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);

  // constants and variables

  const $searchInput = get('#search');
  const $searchButton = get('.btn_search');
  const $contentList = getAll('.contents figure');

  // search event

  const setSearchEvent = () => {
    $searchInput.addEventListener('keyup', search);

    $searchInput.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      $searchButton.click();
    });

    $searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      search();
      $searchInput.blur();
    });
  }

  const search = () => {
    const searchInput = $searchInput.value.toLowerCase();

    for (let i = 0; i < $contentList.length; i++) {
      const videoTitle = $contentList[i].querySelector('.video_title').innerText.toLowerCase();
      $contentList[i].style.display = videoTitle.indexOf(searchInput) > -1 ? 'flex' : 'none';
    }
  }

  // preview event

  const setPreviewEvent = () => {
    for (let i = 0; i < $contentList.length; i++) {
      const $videoPreview = $contentList[i].querySelector('picture');
      $videoPreview.addEventListener('mouseover', previewOnMouseOver);
      $videoPreview.addEventListener('mouseout', previewOnMouseOut);
    }
  }

  const previewOnMouseOver = (e) => {
    const $webpSource = e.target.parentNode.querySelector('source');
    $webpSource.setAttribute('srcset', './assets/sample.webp');
  }

  const previewOnMouseOut = (e) => {
    const $webpSource = e.target.parentNode.querySelector('source');
    $webpSource.setAttribute('srcset', './assets/sample.jpg');
  }

  // init

  const init = () => {
    setSearchEvent();
    setPreviewEvent();
  }

  init();

})();