/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          "100%": { transform: 'translate(0, 0)'}
        },
      },
      animation: {
        "waving-hand": "wave 3s ease-in-out infinite"
      },
      backdropBlur: {
        myAltCoins: "5.5px"
      },
      colors: {
        gray: {
          '20': 'rgba(126, 126, 126, 0.20)',
          '300': 'rgba(217, 217, 217, 0.05)',
        },
        body: "#00150F;",
        text: "#777f8a",
        green: "#0c4b41",
        lightGreen: "rgba(15, 174, 150, 1);",
        error: "rgba(174, 0, 0, 1);",
        green2: "#31985A",
        lightGreen2: "#43FFD2",
        darkGreen: "#142B2B",
        red: "#D978AC",
        grey: "#939393",
        myAltCoinsBg: "linear-gradient(0deg, rgba(126, 126, 126, 0.20) 0%, rgba(126, 126, 126, 0.20) 100%), rgba(217, 217, 217, 0.05);",
        tableText: "rgba(182, 182, 182, 1)",
      },
      borderColor: {
        header: "#0fae9633",
        border: "#0c4b41",
        tableBorder: "rgba(255, 255, 255, 0.05)",
        myAltCoins: "rgba(255, 255, 255, 0.25);",
        banner: "rgba(255, 255, 255, 0.02);",
        btn: " rgba(255, 255, 255, 0.2)"
      },
      backgroundColor: {
        footer: "rgba(18, 18, 18, 1);",
        banner: "rgba(255, 255, 255, 0.02);",
        banner2: "rgba(255, 255, 255, 0.05)",
        activatedBanner: "rgba(126, 126, 126, 0.29)",
        black: "#010101;",
        btn2: "rgba(126, 126, 126, 0.29);",
        tab: "#012820;",
        table: "rgba(255, 255, 255, 0.02);",
        hoverMyAltCoins: "rgb(126 126 126 / 45%)",
        invest: "rgb(255 255 255 / 8%);",
        wisp: "linear-gradient(180deg, #C173FF 0%, #70EEFF 100%)",
        trading: "#0b1917;",
        supportBorder: "rgba(15, 174, 150, 1);",
        support: "rgb(14 69 59)",
        headerBottom: "#031815",
        select: "rgb(31 74 71 / 48%)",
        staking: "rgb(7 32 26)",
        staking2: "rgb(6 26 21)",
        history: "rgb(7 32 26 / 34%)",
        input: "rgb(255 255 255 / 6%)",
        adminInput: "rgb(15 17 21)",
        depositCardTransak: "rgba(15, 174, 150, 0.25)",
        hoverHeh: "rgb(255 255 255 / 8%)",
        newStaking: "rgba(0, 0, 0, 0.60)",
        inputBlet: "rgb(9 9 9 / 28%)"
      },
      backgroundImage: {
        header: "linear-gradient(180deg, #0C352F 0%, #011C18 100%), linear-gradient(0deg, #0FAE96, #0FAE96)",
        myAltCoins: "linear-gradient(90deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);",
        hero: "url('./public/mainBG.png')",
        h3First: "linear-gradient(270deg, #B72346 0%, #C5882D 90.3%);",
        h3Second: "linear-gradient(270deg, #4431BA 0%, #979DD8 90.3%);",
        h3Thirty: "linear-gradient(270deg, #30AE35 0%, #236D49 90.3%);",
        experienced: "linear-gradient(270deg, #2E8868 0%, #2DC597 90.3%)",
        regForm: "url('./public/bg-rightForm.png')",
        bgForm: "url('./public/bg-left.png')",
        bgProfile: "url('./public/profile/bgprofile.png')",
        selectMenu: "linear-gradient(90deg, rgba(14, 123, 80, 0.5) 2.89%, rgba(33, 82, 70, 0.35) 100%)",
        deposit: "linear-gradient(0deg, rgba(15, 174, 150, 0.45), rgba(15, 174, 150, 0.45)),linear-gradient(0deg, rgba(15, 174, 150, 0.15), rgba(15, 174, 150, 0.15))",
        withdraw: "linear-gradient(90deg, rgba(14, 123, 80, 0.5) 2.89%, rgba(33, 82, 70, 0.35) 100%);",
        withdrawBtn: "linear-gradient(0deg, rgba(15, 174, 150, 0.45), rgba(15, 174, 150, 0.45)),linear-gradient(0deg, rgba(15, 174, 150, 0.15), rgba(15, 174, 150, 0.15))",
        btnTrading: "linear-gradient(90deg, rgb(72 153 72) 0%, rgb(44 124 149) 100%);",
        btnTrading2: "linear-gradient(90deg, rgb(157 90 106) 0%, rgb(203 74 74) 100%);",
        depositCardBg: "url('./public/depositCard/bg.png')",
        depositCard: "linear-gradient(180deg, #040a0838 0%, rgb(0 0 0 / 12%) 100%);",
        adminBtn: "linear-gradient(267.13deg, #13948C 4.83%, #135968 100%)",
        adminBtnRemove: "linear-gradient(267.13deg, #a91f1f 4.83%, #681313 100%)",
        wispTable: "linear-gradient(180deg, #73ff98 0%, #70ffd3 100%)",
        circleTable: "url('./public/88888888888888.png')",
        phone: "url('./public/phone-2.png')",
        hardShadow: "linear-gradient(180deg, #C173FF 0%, #70EEFF 100%)",
        bigImage: "url('./public/bg-img-1.png')",
        portfolio: "url('./public/phone-3.png')",
        swapContainer: "linear-gradient(90deg, rgba(14, 123, 80, 0.5) 2.89%, rgba(33, 82, 70, 0.35) 100%)",
      },
      container: false,
      screens: {
          '2xl': { max: '1535px' },
          xl: { max: '1279px' },
          lg: { max: '1023px' },
          md: { max: '767px' },
          sm: { max: '639px' },
          xs: { max: '450px' },
          minxs: { min: '450px' },
          minsm: { min: '640px' },
          minmd: { min: '768px' },
          minlg: { min: '1024px' },
          minxl: { min: '1280px' },
          min2xl: { min: '1536px' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
}


