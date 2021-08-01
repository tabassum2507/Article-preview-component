const shareBtn = document.querySelector('.share-btn');
const shareBox = document.getElementsByClassName('share-box')[0];
const icon = shareBtn.getElementsByTagName('img')[0];

shareBtn.addEventListener('click', function() {
  shareBox.classList.toggle('show');
  shareBtn.classList.toggle('clicked');
  icon.classList.toggle('btn-clicked');
})