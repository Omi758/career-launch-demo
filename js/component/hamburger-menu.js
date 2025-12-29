/**
 * ハンバーガーメニュー
 **/
export const initializeHamburgerMenu = () => {
  const dialog = document.querySelector(".js-menu-dialog");
  const openBtn = document.querySelector(".js-hamburger-open");
  const closeBtn = document.querySelector(".js-hamburger-close");
  const backdrop = document.querySelector(".js-menu-backdrop");

  if (!dialog || !openBtn || !closeBtn || !backdrop) return;

  // scroll位置を保持する変数
  let scrollPosition = 0;

  // ブレイクポイント（SCSSのmqと同じ値）
  const mediaQuery = window.matchMedia("(min-width: 900px)");

  // scrollをロックする関数
  const lockScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    // 以下Safari対応（但し条件下によってsafariでも機能しない場合あり）
    // document.body.style.position = "fixed";
    // document.body.style.top = `-${scrollPosition}px`;
    // document.body.style.width = "100%";
  };

  // scrollをアンロックする関数
  const unlockScroll = () => {
    document.body.style.overflow = "";
    // document.body.style.position = "";
    // document.body.style.top = "";
    // document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  };

  const openMenu = () => {
    lockScroll(); // scrollをロック
    dialog.showModal();
    gsap.to([dialog, backdrop], {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const closeMenu = () => {
    gsap.to([dialog, backdrop], {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        dialog.close();
        unlockScroll(); // scrollロックを解除
      },
    });
  };

  // 画面幅がPCサイズのブレイクポイントを超えた時の処理
  const handleMediaChange = (e) => {
    // PC版になった かつ モーダルが開いている場合
    if (e.matches && dialog.open) {
      closeMenu();
    }
  };

  // メディアクエリの変数を監視
  mediaQuery.addEventListener("change", handleMediaChange);

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  // Escapeキーでメニューを閉じる
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault(); // デフォルトの即座に閉じる動作を防ぐ
    closeMenu();
  });

  // backdropをクリックしたら閉じる
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeMenu();
    }
  });
};
