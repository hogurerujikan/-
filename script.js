document.addEventListener('DOMContentLoaded', function() {
const pageTopBtn = document.getElementById('page-top');

// スクロールイベントでボタンの表示/非表示を切り替える
window.addEventListener('scroll', function() {
if (window.scrollY > 200) { // 200pxスクロールしたら表示
pageTopBtn.classList.add('is-show');
} else {
pageTopBtn.classList.remove('is-show');
}
});

// クリックイベントでページトップへスクロール
pageTopBtn.addEventListener('click', function(e) {
e.preventDefault(); // デフォルトのアンカーリンクの動作をキャンセル

window.scrollTo({
top: 0,
behavior: 'smooth' // スムーズにスクロール
});
});
});

