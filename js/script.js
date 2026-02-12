// Chuyển trang
function switchPage(pageName, event) {
    if (event) {
        event.preventDefault();
    }

    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Hiển thị trang được chọn
    const selectedPage = document.querySelector(`[data-page="${pageName}"]`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Cập nhật nav item active
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    if (event && event.target) {
        const navItem = event.target.closest('.nav-item');
        if (navItem) {
            navItem.classList.add('active');
        }
    }
}

// Toggle Switch cho Cài Đặt
function initToggleSwitches() {
    const bgmToggle = document.getElementById('bgmToggle');
    const sfxToggle = document.getElementById('sfxToggle');

    if (bgmToggle) {
        bgmToggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    if (sfxToggle) {
        sfxToggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}

// Reset Progress
function resetProgress() {
    if (confirm('⚠️ Bạn có chắc chắn muốn reset tiến trình? Hành động này không thể hoàn tác!')) {
        alert('✅ Tiến trình đã được reset!');
        // Reset data
        document.getElementById('money').textContent = '5000';
        document.getElementById('diamond').textContent = '250';
        document.getElementById('power').textContent = '850';
    }
}

// Tương tác với các nút cửa hàng
function initShopButtons() {
    document.querySelectorAll('.shop-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('🎉 Rương được mở! (Chức năng này sẽ được phát triển)');
        });
    });
}

// Tương tác với các level
function initLevelCards() {
    document.querySelectorAll('.level-card:not(.locked)').forEach(card => {
        card.addEventListener('click', function() {
            alert('⚔️ Bắt đầu màn chơi! (Chức năng này sẽ được phát triển)');
        });
    });
}

// Khởi tạo khi DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    initToggleSwitches();
    initShopButtons();
    initLevelCards();
});