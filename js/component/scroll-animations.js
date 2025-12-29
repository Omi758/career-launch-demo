/**
 * スクロールアニメーション
 * 各ページのスクロールアニメーションを管理
 * ScrollTriggerを使用してスクロール連動でアニメーションを実行
 */

/**
 * TOPページKVアニメーション
 */
export const initTopKvAnimation = () => {
  const kvCopyEn = document.querySelectorAll(".js-top-kv-copy--en span");
  const kvCopyJa = document.querySelector(".js-top-kv-copy--ja");

  if (!kvCopyEn.length || !kvCopyJa) return;

  gsap.set(kvCopyEn, { autoAlpha: 0, y: "30rem" });
  gsap.set(kvCopyJa, { autoAlpha: 0, y: "30rem" });

  const kvTl = gsap.timeline();

  kvTl
    .to(kvCopyEn[0], {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    })
    .to(
      kvCopyEn[1],
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .to(
      kvCopyJa,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    );
};

/**
 * 下層ページKVアニメーション
 */
export const initSubKvAnimation = () => {
  const subKv = document.querySelector(".js-sub-kv");
  const subKvTitleEn = document.querySelector(".js-sub-kv-title--en");
  const subKvTitleJa = document.querySelector(".js-sub-kv-title--ja");

  if (!subKv || !subKvTitleEn || !subKvTitleJa) return;

  gsap.set(subKvTitleEn, { autoAlpha: 0, y: "30rem" });
  gsap.set(subKvTitleJa, { autoAlpha: 0, y: "30rem" });

  const subKvTl = gsap.timeline();

  subKvTl
    .to(subKvTitleEn, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(
      subKvTitleJa,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );
};

/**
 * TOPページServiceセクションの背景アニメーション
 */
export const initTopServiceAnimation = () => {
  const service = document.querySelector(".js-top-service");

  if (!service) return;

  // ブレークポイントに応じた目標値を設定
  const isPC = window.matchMedia("(min-width: 900px)").matches;
  const targetWidth = isPC ? "98%" : "95%";

  // CSS変数を使って疑似要素の幅とopacityをアニメーション
  gsap.to(service, {
    "--bg-width": targetWidth,
    "--bg-opacity": 1,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: service,
      start: "top 80%",
      // markers: true, // デバッグ用
    },
  });
};

/**
 * TOPページRecruitアニメーション
 */
export const initTopRecruitAnimation = () => {
  const recruit = document.querySelector(".js-top-recruit");
  const recruitCopyEn = document.querySelector(".js-top-recruit-copy--en");

  if (!recruit || !recruitCopyEn) return;

  // ブレークポイントに応じた開始位置を設定
  const isPC = window.matchMedia("(min-width: 900px)").matches;
  const startPosition = isPC ? "top 30%" : "top 70%";

  gsap.set(recruitCopyEn, { autoAlpha: 0, y: "50rem" });

  gsap.to(recruitCopyEn, {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: recruit,
      start: startPosition,
      // markers: true,
    },
  });
};

/**
 * AboutページPhilosophyセクションの円アニメーション
 */
export const initAboutPhilosophyAnimation = () => {
  const philosophy = document.querySelector(".js-about-philosophy");
  const circleMission = document.querySelector(".js-about-circle-mission");
  const circleVision = document.querySelector(".js-about-circle-vision");
  const circleValue = document.querySelector(".js-about-circle-value");

  if (!philosophy || !circleMission || !circleVision || !circleValue) return;

  const circles = [circleMission, circleVision, circleValue];
  const isPC = window.matchMedia("(min-width: 900px)").matches;

  // PC・SP共通: 下から上へ（y方向）
  const initialState = { autoAlpha: 0, y: "50rem" };
  const animateState = { autoAlpha: 1, y: 0 };

  // 初期状態を設定
  gsap.set(circles, initialState);

  if (isPC) {
    // PC版: タイムラインで順番にアニメーション（1回限り）
    const philosophyTl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophy,
        start: "top 70%",
        once: true,
        // markers: true,
      },
    });

    philosophyTl
      .to(circleMission, {
        ...animateState,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        circleVision,
        {
          ...animateState,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        circleValue,
        {
          ...animateState,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
  } else {
    // SP版: 各円を個別にスクロール連動でアニメーション（1回限り）
    circles.forEach((circle) => {
      gsap.to(circle, {
        ...animateState,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle, // 各円自身をトリガーに
          start: "top 85%",
          once: true, // 1回だけ実行
          // markers: true,
        },
      });
    });
  }
};

/**
 * ServiceページServiceDetailセクションのリストアニメーション
 * 各liが左から右へスライドイン＋フェードイン
 */
export const initServiceDetailAnimation = () => {
  const serviceDetailLists = document.querySelectorAll(
    ".js-service-detail-list"
  );
  if (!serviceDetailLists.length) return;

  serviceDetailLists.forEach((list) => {
    const items = list.querySelectorAll(".js-service-detail-list-item");
    if (!items.length) return;

    // 初期状態: 透明 + 右側がクリップされた状態
    gsap.set(items, {
      autoAlpha: 0,
      clipPath: "inset(0 100% 0 0)",
    });

    // タイムラインで各liを順番にアニメーション
    const listTl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 75%",
        once: true,
        // markers: true,
      },
    });

    items.forEach((item, index) => {
      listTl.to(
        item,
        {
          autoAlpha: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "power2.out",
        },
        index * 0.18 // 各liを0.18秒ずつ遅らせる
      );
    });
  });
};

/**
 * 全アニメーションを初期化
 */
export const initScrollAnimations = () => {
  // GSAPとScrollTriggerが利用可能か確認
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded");
    return;
  }

  // ScrollTriggerプラグインの登録
  gsap.registerPlugin(ScrollTrigger);

  // 各アニメーションを初期化
  initTopKvAnimation();
  initSubKvAnimation();
  initTopServiceAnimation();
  initTopRecruitAnimation();
  initAboutPhilosophyAnimation();
  initServiceDetailAnimation();
};
