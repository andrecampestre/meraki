new Glide(".glide", {
  // type: "carousel",
  startAt: 0,
  // dragThreshold: 6,
  perView: 3,
  // gaps: 30,
  peek: {
    before: 10,
    after: 10
  },
  // gap: 20,
  breakpoints: {
    600: {
      perView: 1,
      gaps: 0,
      peek: {
        before: 0,
        after: 0
      }
    },
    1400: {
      perView: 4,
    }
  }
}).mount();
