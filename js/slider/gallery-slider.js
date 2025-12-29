/**
 * 画像ギャラリースライダー
 * - ゆっくり流れる無限ループスライダー（右→左）
 * - 矢印・ページネーションなし
 * - hover時に該当スライドが上に上がり、他が薄くなる
 */
export const initializeCultureGallery = () => {
  const slider = document.querySelector(".js-culture-slider");

  if (!slider) return;

  const options = {
    mediaQuery: "min",
    type: "loop",
    fixedWidth: "223rem",
    gap: "10rem",
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false, // hover時もスクロールを止めない
    },

    breakpoints: {
      899: {
        fixedWidth: "350rem",
        gap: "32rem",
      },
    },
  };
  const splide = new Splide(slider, options);
  splide.mount(window.splide.Extensions);
};
