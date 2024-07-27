(() => {
    const refs = {
      // Додати атрибут data-mobile-open на кнопку відкриття
      openMobileBtn: document.querySelector("[data-mobile-open]"),
      // Додати атрибут data-mobile-close на кнопку закриття
      closeMobileBtn: document.querySelector("[data-mobile-close]"),
      // Додати атрибут data-mobile на бекдроп модалки
      mobile: document.querySelector("[data-mobile]"),
    };
  
    refs.openMobileBtn.addEventListener("click", toggleMobile);
    refs.closeMobileBtn.addEventListener("click", toggleMobile);
  
    function toggleMobile() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.mobile.classList.toggle("is-open");
    }
  })();