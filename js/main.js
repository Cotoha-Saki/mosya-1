document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    // クリックイベントを追加
    dropdownButton.addEventListener('click', function (event) {
        // ドロップダウンメニューの表示/非表示を切り替える
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }

        // クリックしたイベントを親に伝播させない
        event.stopPropagation();
    });

    // ウィンドウの外をクリックしたらメニューを非表示にする
    window.addEventListener('click', function () {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    });
});
