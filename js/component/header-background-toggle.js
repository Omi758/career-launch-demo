/**
 * ヘッダーの背景色変更とスクロール方向による表示/非表示制御
 *
 * 仕様：
 * - top-kvの下端が画面上部に来たらheaderをスライドインで表示
 * - 下方向スクロール時：headerを表示（画面上部に固定）
 * - 上方向スクロール時：headerをスライドアウトで非表示
 * - top-kvの下端より上に戻ったらheaderを非表示
 *
 * 実装方針：
 * 1. ScrollTriggerでtop-kvの下端通過を検知（onEnter/onLeaveBack）
 * 2. 通常のスクロールイベントでスクロール方向を監視
 * 3. フラグ管理で状態を追跡（isHeaderVisible, isAnimating, isPastKvBottom）
 * 4. GSAPでアニメーション実行
 */
export const initializeHeaderBackgroundToggle = () => {
  // ScrollTriggerプラグインを登録
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const header = document.querySelector(".js-header");
    const kvSection = document.querySelector(".js-kv");
    const headerFixedClass = "is-scrolled";

    if (!header || !kvSection) return;

    const headerHeight = header.offsetHeight;
    let isHeaderVisible = false; // headerが表示されているかどうかのフラグ
    let lastScrollY = window.scrollY || window.pageYOffset; // 最後のスクロール位置
    let isAnimating = false; // アニメーション中かどうかのフラグ
    let isPastKvBottom = false; // top-kvの下端を通過したかどうかのフラグ

    // headerをスライド表示する関数
    const showHeader = () => {
      if (isHeaderVisible || isAnimating) return; // すでに表示されているかアニメーション中の場合は何もしない

      isAnimating = true;

      // まず初期位置を設定してからクラスを追加
      gsap.set(header, { y: -headerHeight });
      header.classList.add(headerFixedClass);

      // その後アニメーションを実行
      gsap.to(header, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          isHeaderVisible = true;
          isAnimating = false;
        },
      });
    };

    // headerを初期状態に戻す関数
    const hideHeader = () => {
      if (!isHeaderVisible || isAnimating) return; // すでに非表示かアニメーション中の場合は何もしない

      isAnimating = true;

      gsap.to(header, {
        y: -headerHeight,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          header.classList.remove(headerFixedClass);
          gsap.set(header, { y: 0 });
          isHeaderVisible = false;
          isAnimating = false;
        },
      });
    };

    // スクロールイベントハンドラー
    const handleScroll = () => {
      // top-kvの下端より下にいる場合のみ処理
      if (isPastKvBottom && !isAnimating) {
        const currentScrollY = window.scrollY || window.pageYOffset;
        const scrollDirection =
          currentScrollY > lastScrollY
            ? 1
            : currentScrollY < lastScrollY
            ? -1
            : 0;

        // スクロール方向に応じてヘッダーを表示/非表示
        if (scrollDirection === 1) {
          // 下方向にスクロールしている場合はヘッダーを表示
          if (!isHeaderVisible) {
            showHeader();
          }
        } else if (scrollDirection === -1) {
          // 上方向にスクロールしている場合はヘッダーを非表示
          if (isHeaderVisible) {
            hideHeader();
          }
        }

        lastScrollY = currentScrollY;
      }
    };

    ScrollTrigger.create({
      trigger: kvSection,
      start: "bottom top",
      markers: false,
      onEnter: () => {
        // top-kvの下端が画面上部に来たらヘッダーを表示
        isPastKvBottom = true;
        showHeader();
        lastScrollY = window.scrollY || window.pageYOffset;
      },
      onLeaveBack: () => {
        // top-kvの下端より上に戻ったらヘッダーを非表示
        isPastKvBottom = false;
        hideHeader();
        lastScrollY = window.scrollY || window.pageYOffset;
      },
    });

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
};
