import type { Config } from "tailwindcss"

const config = {
  content: [
    "./mdx-components.{ts,tsx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{md,mdx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      's-laptop': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'tv': '1536px',
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'], 
      },
      objectPosition: {
        'hero-big-screen': 'top 0px left 80%',
      },
      flexBasis:{
        'eList-1': '650px',
        'eList-2': '650px',
      },
      fontSize: {
        'hero-title': '2.75rem',
        'hero-title-sub': '1.75rem',
      },
      margin: {
        'header-gap': '85px',
      },
      height: {
        header: '85px',
        'main-hero': '575px',
        'main-hero-big': '42.5vw',
        'phone': '400px',
        'section-img': '80%',
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
      borderRadius: {
        'header-btn': '10px',
        'primary-btn': '8px',
        'primary-input': '4px',
        'section-image': '32px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'hero': 'url(/src/assets/images/Desktop_Hero_Image.jpg)',
      },
      colors: {
        'white': '#FFFFFF',
        'navy-blue': '#243A66',
        'cyan-blue': '#4DD1FF',
        'dark-blue': '#0F1F38',
        'orange': '#b24000',
        'dark-grey': '#4b5364',
        'pale-bg': '#FFFFFF1A',
        'navy-blue-bg': '#243A66',
        'light-grey-bg': '#EDEFF3',
        'grey-bg': '#DEE1E5',
        'soundscape-white': '#FFFFFF',
        'soundscape-blue': '#243A66',
        'soundscape-bright-blue': '#4DD1FF',
        'soundscape-dark-blue': '#0F1F38',
        'soundscape-orange': '#B24000',
        'soundscape-dark-orange': '#CC4900',
        'soundscape-dark-grey': '#4b5364',
        'soundscape-input-bg': '#FFFFFF1A',
        'soundscape-blue-bg': '#243A66',
        'soundscape-grey-bg': '#EDEFF3',
        'soundscape-white-bg': '#DEE1E5',
        /** ShadCN UI Below */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config