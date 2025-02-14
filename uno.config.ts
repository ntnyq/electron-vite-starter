/**
 * @file UnoCSS config
 */

import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { resolve } from './scripts/utils'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetWind3(),
    presetTypography(),
    presetIcons({
      autoInstall: true,
      scale: 1.2,
      extraProperties: {
        color: 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetWebFonts({
      fonts: {
        mono: 'DM Mono',
        sans: 'DM Sans:200,400,700',
      },
      processors: createLocalFontProcessor({
        fontAssetsDir: resolve('resources/fonts'),
        fontServeBaseUrl: '/fonts',
      }),
      timeouts: {
        failure: 60_000,
        warning: 30_000,
      },
    }),
  ],

  shortcuts: [
    {
      /**
       * @pg bg
       */
      'bg-active': 'bg-#8881',
      'bg-base': 'bg-white dark:bg-#111',
      'bg-code': 'bg-gray5:5',
      'bg-glass': 'bg-white:75 dark:bg-#111:75 backdrop-blur-5',
      'bg-secondary': 'bg-#eee dark:bg-#222',
      'bg-tooltip': 'bg-white:75 dark:bg-#111:75 backdrop-blur-8',
      'bg-gradient-more':
        'bg-gradient-to-t from-white via-white:80 to-white:0 dark:from-#111 dark:via-#111:80 dark:to-#111:0',

      /**
       * @pg color
       */
      'color-active': 'color-primary-600 dark:color-primary-400',
      'color-base': 'color-neutral-800 dark:color-neutral-300',

      /**
       * @pg border
       */
      'border-active': 'border-primary-600/25 dark:border-primary-400/25',
      'border-base': 'border-#8882',

      /**
       * @pg btn
       */
      'btn-action-active': 'color-active border-active! bg-active op100!',
      'btn-action-sm': 'btn-action text-sm',
      'btn-action':
        'border border-base rounded flex gap-2 items-center px2 py1 op75 hover:op100 hover:bg-active disabled:pointer-events-none disabled:op30! select-none',
    },
  ],

  theme: {
    colors: {
      primary: {
        100: '#D2E8CF',
        200: '#A9D3A2',
        300: '#7CBC71',
        400: '#579E4B',
        50: '#E9F4E7',
        500: '#49833E',
        600: '#396831',
        700: '#2C5026',
        800: '#1D3419',
        900: '#0F1C0D',
        950: '#080E07',
        DEFAULT: '#579E4B',
      },
    },
  },
})
