export const ASSETS = {
  profile: {
    image: "/images/profile.png",
  },

  logos: {
    education: {
      kasetsart: "/images/logo/education/ku_logo.png",
    },
    work: {
      sertis: "/images/logo/work/sertis_logo.avif",
    },
  },

  screen: {
    mobile: "/images/screen/mobile-screen.png",
  },

  projects: {
    kanok: {
      cover: "/images/projects/kanok/cover.png",
      coverPage: "/images/projects/kanok/cover-page.png",
      logo: "/images/projects/kanok/logo.png",
      gradient: "/images/projects/kanok/gradient.svg",
      screens: (index: number) => `/images/projects/kanok/screen/${index}.png`,
      videos: {
        1: "/videos/kanok/1.mp4",
        2: "/videos/kanok/2.mp4",
        3: "/videos/kanok/3.mp4",
      },
    },
    prism: {
      cover: "/images/projects/prism/cover.png",
      coverPage: "/images/projects/prism/cover-page.png",
      logo: "/images/projects/prism/logo.png",
      gradient: "/images/projects/prism/gradient.svg",
      screens: (index: number) => `/images/projects/prism/screen/${index}.png`,
    },
    partyCal: {
      cover: "/images/projects/party_cal/cover.png",
      coverPage: "/images/projects/party_cal/cover-page.png",
      logo: "/images/projects/party_cal/logo.png",
      gradient: "/images/projects/party_cal/gradient.svg",
      screens: (index: number) => `/images/projects/party_cal/screen/${index}.png`,
      videos: {
        1: "/videos/party_cal/1.mp4",
      },
    },
    scbRe: {
      cover: "/images/projects/scb_re/cover.png",
      coverPage: "/images/projects/scb_re/cover-page.png",
      logo: "/images/projects/scb_re/logo.png",
      gradient: "/images/projects/scb_re/gradient.svg",
      screens: (index: number) => `/images/projects/scb_re/screen/${index}.png`,
      videos: {
        1: "/videos/scb_re/1.mp4",
        2: "/videos/scb_re/2.mp4",
      },
    },
    cmcs: {
      cover: "/images/projects/cmcs/cover.png",
      coverPage: "/images/projects/cmcs/cover-page.png",
      logo: "/images/projects/cmcs/logo.png",
      gradient: "/images/projects/cmcs/gradient.svg",
      screens: (index: number) => `/images/projects/cmcs/screen/${index}.png`,
    },
    eventBook: {
      cover: "/images/projects/event_book/cover.png",
      coverPage: "/images/projects/event_book/cover-page.png",
      logo: "/images/projects/event_book/logo.png",
      gradient: "/images/projects/event_book/gradient.svg",
      screens: (index: number) => `/images/projects/event_book/screen/${index}.png`,
    },
    pos: {
      cover: "/images/projects/POS/cover.png",
      coverPage: "/images/projects/POS/cover-page.png",
      logo: "/images/projects/POS/logo.png",
      gradient: "/images/projects/POS/gradient.svg",
      screens: (index: number) => `/images/projects/POS/screen/${index}.png`,
      videos: {
        1: "/videos/pos/1.mp4",
      },
    },
    shopLanding: {
      cover: "/images/projects/shop_landing/cover.png",
      coverPage: "/images/projects/shop_landing/cover-page.png",
      logo: "/images/projects/shop_landing/logo.png",
      gradient: "/images/projects/shop_landing/gradient.svg",
      screens: (index: number) => `/images/projects/shop_landing/screen/${index}.png`,
    },
    alumni: {
      cover: "/images/projects/alumni/cover.png",
      coverPage: "/images/projects/alumni/cover-page.png",
      logo: "/images/projects/alumni/logo.png",
      gradient: "/images/projects/alumni/gradient.svg",
      screens: (index: number) => `/images/projects/alumni/screen/${index}.png`,
      content: {
        fullLogo: "/images/projects/alumni/content/full-logo.png",
        color: "/images/projects/alumni/content/color.png",
        typography: "/images/projects/alumni/content/typography.png",
      },
    },
  },
} as const;

export const generateScreenPaths = (basePath: (index: number) => string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => basePath(i + 1));
};
