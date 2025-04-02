/*
상수 정의 (기본값들)
DOM 요소 선택
식당명 편집 기능
메뉴 관리 함수들 (편집 모드 전환, 메뉴 항목 변환, 새 메뉴 생성, 메뉴 삭제)
이벤트 리스너 설정
애플리케이션 초기화 및 시작
*/

// 상수 정의
const DEFAULT_MENU_NAME = "미입력";  // 기본 메뉴명
const DEFAULT_PRICE = "0";           // 기본 가격
const DEFAULT_RESTAURANT_NAME = "식당명을 입력하세요";  // 기본 식당명

// DOM 요소 선택
const resName = document.getElementById("resName");               // 식당명 표시 요소
const resNameInput = document.getElementById("resNameInput");     // 식당명 입력 요소
const normalBtns = document.querySelector(".btn-container.normal-container");  // 일반 모드 버튼 컨테이너
const editBtns = document.querySelector(".btn-container.edit-container");      // 편집 모드 버튼 컨테이너
const menuContainer = document.querySelector(".menu-container");   // 메뉴 목록 컨테이너

// 식당명 편집 기능 설정
function setupRestaurantNameEditing() {
    // 식당명 클릭 시 입력 모드로 전환
    resName.addEventListener("click", () => {
        resName.classList.add("res-name-hidden");               // 표시 요소 숨기기
        resNameInput.classList.remove("res-name-hidden");       // 입력 요소 표시
        resNameInput.value = resName.textContent === DEFAULT_RESTAURANT_NAME ? "" : resName.textContent;  // 현재 값 설정
        resNameInput.focus();  // 입력 요소에 포커스
    });

    // 입력 요소가 포커스를 잃으면 표시 모드로 전환
    resNameInput.addEventListener("blur", () => {
        resName.textContent = resNameInput.value.trim() === "" ? DEFAULT_RESTAURANT_NAME : resNameInput.value;  // 입력 값 또는 기본값 설정
        resName.classList.remove("res-name-hidden");  // 표시 요소 다시 보이기
        resNameInput.classList.add("res-name-hidden");  // 입력 요소 숨기기
    });
}

// 메뉴 관리 함수들

// 편집 모드 전환 함수
function toggleEditMode(isEditMode) {
    if (isEditMode) {  // 편집 모드로 전환
        normalBtns.classList.add("b-hidden");        // 일반 버튼 숨기기
        editBtns.classList.remove("b-hidden");       // 편집 버튼 표시
        convertAllMenusToEditMode();                 // 모든 메뉴를 편집 모드로 변환
    } else {           // 일반 모드로 전환
        normalBtns.classList.remove("b-hidden");     // 일반 버튼 표시
        editBtns.classList.add("b-hidden");          // 편집 버튼 숨기기
        convertAllMenusToDisplayMode();              // 모든 메뉴를 표시 모드로 변환
    }
}

// 모든 메뉴를 편집 모드로 변환
function convertAllMenusToEditMode() {
    document.querySelectorAll(".menu").forEach(item => {
        // 각 메뉴 항목을 편집 모드로 변환
        const { nameInput, priceInput } = convertMenuToEditMode(item);
        
        // 삭제용 체크박스 추가
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("delete-checkbox");
        item.insertBefore(checkBox, item.firstChild);  // 체크박스를 메뉴 항목의 첫 번째 자식으로 삽입
    });
}

// 모든 메뉴를 표시 모드로 변환
function convertAllMenusToDisplayMode() {
    document.querySelectorAll(".menu").forEach(item => {
        // 각 메뉴 항목을 표시 모드로 변환
        convertMenuToDisplayMode(item);
        
        // 체크박스 제거
        const checkbox = item.querySelector(".delete-checkbox");
        if (checkbox) {
            checkbox.remove();
        }
    });
}

// 단일 메뉴 항목을 편집 모드로 변환
function convertMenuToEditMode(menuItem) {
    const menuName = menuItem.querySelector(".menu-name");   // 메뉴명 요소
    const menuPrice = menuItem.querySelector(".menu-price"); // 가격 요소
    
    // 현재 텍스트 값 가져오기
    const nameText = menuName.textContent.trim();
    const priceText = menuPrice.textContent.trim().replace("원", "");

    // 메뉴명 입력 필드 생성
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameText === DEFAULT_MENU_NAME ? "" : nameText;  // 기본값이면 빈 값으로 설정
    nameInput.placeholder = "메뉴명";
    nameInput.classList.add("menu-name-input");

    // 가격 입력 필드 생성
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.value = priceText === DEFAULT_PRICE ? "" : priceText;  // 기본값이면 빈 값으로 설정
    priceInput.placeholder = "가격";
    priceInput.classList.add("menu-price-input");
    
    // 기존 요소를 입력 필드로 교체
    menuName.replaceWith(nameInput);
    menuPrice.replaceWith(priceInput);
    
    return { nameInput, priceInput };  // 생성된 입력 필드 반환
}

// 단일 메뉴 항목을 표시 모드로 변환
function convertMenuToDisplayMode(menuItem) {
    const nameInput = menuItem.querySelector(".menu-name-input");   // 메뉴명 입력 필드
    const priceInput = menuItem.querySelector(".menu-price-input"); // 가격 입력 필드
    
    if (nameInput && priceInput) {
        // 입력된 값이나 기본값으로 텍스트 설정
        const nameText = nameInput.value.trim() === "" ? DEFAULT_MENU_NAME : nameInput.value;
        const priceText = priceInput.value.trim() === "" ? `${DEFAULT_PRICE}원` : `${priceInput.value}원`;

        // 새 표시 요소 생성
        const nameSpan = document.createElement("span");
        nameSpan.textContent = nameText;
        nameSpan.classList.add("menu-name");

        const priceSpan = document.createElement("span");
        priceSpan.textContent = priceText;
        priceSpan.classList.add("menu-price");

        // 입력 필드를 표시 요소로 교체
        nameInput.replaceWith(nameSpan);
        priceInput.replaceWith(priceSpan);
    }
}

// 새 메뉴 항목 생성
function createNewMenuItem() {
    const newMenuItem = document.createElement("li");  // 새 메뉴 항목 요소 생성
    newMenuItem.classList.add("menu");

    // 체크박스 생성
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("delete-checkbox");

    // 메뉴명 입력 필드 생성
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "메뉴명";
    nameInput.classList.add("menu-name-input");

    // 가격 입력 필드 생성
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "가격";
    priceInput.classList.add("menu-price-input");

    // 요소들을 메뉴 항목에 추가
    newMenuItem.appendChild(checkBox);
    newMenuItem.appendChild(nameInput);
    newMenuItem.appendChild(priceInput);
    
    return newMenuItem;  // 생성된 메뉴 항목 반환
}

// 선택된 메뉴 항목 삭제
function deleteSelectedMenuItems() {
    // 체크된 항목 선택
    const checkedItems = document.querySelectorAll(".menu .delete-checkbox:checked");
    
    if (checkedItems.length > 0) {
        // 각 체크된 항목 삭제
        checkedItems.forEach(checkbox => {
            const menuItem = checkbox.closest(".menu");
            if (menuItem) {
                menuContainer.removeChild(menuItem);
            }
        });
    } else {
        // 선택된 항목이 없으면 알림
        alert("삭제할 메뉴를 선택해주세요.");
    }
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 식당명 편집 기능 설정
    setupRestaurantNameEditing();
    
    // 편집 모드 버튼 클릭 시
    document.getElementById("updateBtn").addEventListener("click", () => {
        toggleEditMode(true);  // 편집 모드로 전환
    });
    
    // 종료 버튼 클릭 시
    document.getElementById("exitBtn").addEventListener("click", () => {
        toggleEditMode(false);  // 일반 모드로 전환
    });
    
    // 메뉴 추가 버튼 클릭 시
    document.getElementById("addMenu").addEventListener("click", () => {
        const newMenuItem = createNewMenuItem();  // 새 메뉴 항목 생성
        menuContainer.appendChild(newMenuItem);   // 메뉴 컨테이너에 추가
    });
    
    // 메뉴 삭제 버튼 클릭 시
    document.getElementById("deleteMenu").addEventListener("click", deleteSelectedMenuItems);
}

// 애플리케이션 초기화
function init() {
    setupEventListeners();  // 이벤트 리스너 설정
}

// 애플리케이션 시작
init();  // 초기화 함수 호출