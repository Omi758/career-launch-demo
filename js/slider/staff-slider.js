/**
 * スタッフスライダー
 */
export const initializeAboutStaffSlider = () => {
  const slider = document.querySelector(".js-staff-slider");

  if (!slider) return;

  new Splide(slider, {
    type: "loop",
    perPage: 1,
    perMove: 1,
    fixedWidth: "285rem",
    gap: "40rem",
    arrows: false,
    autoplay: true,
    interval: 3000,
    pagination: false,
    drag: true,
    padding: { left: "172rem" }, // スライダーの左のパディング(PC開始位置)

    breakpoints: {
      899: {
        fixedWidth: "230rem", // レスポンシブ対応_899px以下の設定
        gap: "32rem",
        padding: { left: "20rem" }, // スライダーの左のパディング(SP開始位置)
      },
    },
  }).mount();
};
