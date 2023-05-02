import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'inline-flex items-center justify-center rounded border border-transparent font-medium text-center text-base leading-snug transition py-3 px-6 shadow-lg ease-in duration-200 focus:(ring-2 ring-offset-2 ring-blue-500 ring-offset-blue-200)',
    ],
  ],

  presets: [presetUno(), presetIcons(), presetAttributify()],

  transformers: [transformerVariantGroup()],
})
