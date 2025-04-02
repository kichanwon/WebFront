// Constants
const DEFAULT_MENU_NAME = "미입력";
const DEFAULT_PRICE = "0";
const DEFAULT_RESTAURANT_NAME = "식당명을 입력하세요";

// DOM Elements
const resName = document.getElementById("resName");
const resNameInput = document.getElementById("resNameInput");
const normalBtns = document.querySelector(".btn-container.normal-container");
const editBtns = document.querySelector(".btn-container.edit-container");
const menuContainer = document.querySelector(".menu-container");

// Restaurant name editing
function setupRestaurantNameEditing() {
    resName.addEventListener("click", () => {
        resName.classList.add("res-name-hidden");
        resNameInput.classList.remove("res-name-hidden");
        resNameInput.value = resName.textContent === DEFAULT_RESTAURANT_NAME ? "" : resName.textContent;
        resNameInput.focus();
    });

    resNameInput.addEventListener("blur", () => {
        resName.textContent = resNameInput.value.trim() === "" ? DEFAULT_RESTAURANT_NAME : resNameInput.value;
        resName.classList.remove("res-name-hidden");
        resNameInput.classList.add("res-name-hidden");
    });
}

// Menu management functions
function toggleEditMode(isEditMode) {
    if (isEditMode) {
        normalBtns.classList.add("b-hidden");
        editBtns.classList.remove("b-hidden");
        convertAllMenusToEditMode();
    } else {
        normalBtns.classList.remove("b-hidden");
        editBtns.classList.add("b-hidden");
        convertAllMenusToDisplayMode();
    }
}

function convertAllMenusToEditMode() {
    document.querySelectorAll(".menu").forEach(item => {
        const { nameInput, priceInput } = convertMenuToEditMode(item);
        
        // Add checkbox for deletion
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("delete-checkbox");
        item.insertBefore(checkBox, item.firstChild);
    });
}

function convertAllMenusToDisplayMode() {
    document.querySelectorAll(".menu").forEach(item => {
        convertMenuToDisplayMode(item);
        
        // Remove checkbox
        const checkbox = item.querySelector(".delete-checkbox");
        if (checkbox) {
            checkbox.remove();
        }
    });
}

function convertMenuToEditMode(menuItem) {
    const menuName = menuItem.querySelector(".menu-name");
    const menuPrice = menuItem.querySelector(".menu-price");
    
    const nameText = menuName.textContent.trim();
    const priceText = menuPrice.textContent.trim().replace("원", "");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameText === DEFAULT_MENU_NAME ? "" : nameText;
    nameInput.placeholder = "메뉴명";
    nameInput.classList.add("menu-name-input");

    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.value = priceText === DEFAULT_PRICE ? "" : priceText;
    priceInput.placeholder = "가격";
    priceInput.classList.add("menu-price-input");
    
    menuName.replaceWith(nameInput);
    menuPrice.replaceWith(priceInput);
    
    return { nameInput, priceInput };
}

function convertMenuToDisplayMode(menuItem) {
    const nameInput = menuItem.querySelector(".menu-name-input");
    const priceInput = menuItem.querySelector(".menu-price-input");
    
    if (nameInput && priceInput) {
        const nameText = nameInput.value.trim() === "" ? DEFAULT_MENU_NAME : nameInput.value;
        const priceText = priceInput.value.trim() === "" ? `${DEFAULT_PRICE}원` : `${priceInput.value}원`;

        const nameSpan = document.createElement("span");
        nameSpan.textContent = nameText;
        nameSpan.classList.add("menu-name");

        const priceSpan = document.createElement("span");
        priceSpan.textContent = priceText;
        priceSpan.classList.add("menu-price");

        nameInput.replaceWith(nameSpan);
        priceInput.replaceWith(priceSpan);
    }
}

function createNewMenuItem() {
    const newMenuItem = document.createElement("li");
    newMenuItem.classList.add("menu");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("delete-checkbox");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "메뉴명";
    nameInput.classList.add("menu-name-input");

    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "가격";
    priceInput.classList.add("menu-price-input");

    newMenuItem.appendChild(checkBox);
    newMenuItem.appendChild(nameInput);
    newMenuItem.appendChild(priceInput);
    
    return newMenuItem;
}

function deleteSelectedMenuItems() {
    const checkedItems = document.querySelectorAll(".menu .delete-checkbox:checked");
    
    if (checkedItems.length > 0) {
        checkedItems.forEach(checkbox => {
            const menuItem = checkbox.closest(".menu");
            if (menuItem) {
                menuContainer.removeChild(menuItem);
            }
        });
    } else {
        alert("삭제할 메뉴를 선택해주세요.");
    }
}

// Event listeners setup
function setupEventListeners() {
    // Restaurant name editing
    setupRestaurantNameEditing();
    
    // Edit mode button
    document.getElementById("updateBtn").addEventListener("click", () => {
        toggleEditMode(true);
    });
    
    // Exit edit mode button
    document.getElementById("exitBtn").addEventListener("click", () => {
        toggleEditMode(false);
    });
    
    // Add menu button
    document.getElementById("addMenu").addEventListener("click", () => {
        const newMenuItem = createNewMenuItem();
        menuContainer.appendChild(newMenuItem);
    });
    
    // Delete menu button
    document.getElementById("deleteMenu").addEventListener("click", deleteSelectedMenuItems);
}

// Initialize application
function init() {
    setupEventListeners();
}

// Start the application
init();