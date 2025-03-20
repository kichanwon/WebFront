const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const logo = document.querySelector('.navbar__logo');
const icon = document.querySelector('.navbar__logo i');

// 모바일 메뉴 토글 버튼 클릭 시 메뉴 보이기/숨기기
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// 마우스를 로고에 올리면 아이콘 변경 (와인잔 → 빈 와인잔)
logo.addEventListener('mouseover', () => {
    icon.classList.replace('fa-wine-glass', 'fa-wine-glass-empty');
});

// 마우스를 떼면 원래 아이콘으로 복귀 (빈 와인잔 → 와인잔)
logo.addEventListener('mouseout', () => {
    icon.classList.replace('fa-wine-glass-empty', 'fa-wine-glass');
});