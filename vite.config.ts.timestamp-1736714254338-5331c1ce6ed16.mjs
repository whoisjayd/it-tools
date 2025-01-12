// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { nodePolyfills } from "file:///home/sharevb/it-tools/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_rollup@2.79.2_vite@4.4.9/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { defineConfig } from "file:///home/sharevb/it-tools/node_modules/.pnpm/vite@4.4.9_@types+node@18.15.11_less@4.1.3/node_modules/vite/dist/node/index.js";
import vue from "file:///home/sharevb/it-tools/node_modules/.pnpm/@vitejs+plugin-vue@4.3.2_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///home/sharevb/it-tools/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import markdown from "file:///home/sharevb/it-tools/node_modules/.pnpm/vite-plugin-vue-markdown@0.23.5_rollup@2.79.2_vite@4.4.9/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import svgLoader from "file:///home/sharevb/it-tools/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import { VitePWA } from "file:///home/sharevb/it-tools/node_modules/.pnpm/vite-plugin-pwa@0.16.0_vite@4.4.9_workbox-build@7.3.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import AutoImport from "file:///home/sharevb/it-tools/node_modules/.pnpm/unplugin-auto-import@0.16.4_@vueuse+core@10.11.1_rollup@2.79.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///home/sharevb/it-tools/node_modules/.pnpm/unplugin-vue-components@0.25.0_rollup@2.79.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { NaiveUiResolver } from "file:///home/sharevb/it-tools/node_modules/.pnpm/unplugin-vue-components@0.25.0_rollup@2.79.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Unocss from "file:///home/sharevb/it-tools/node_modules/.pnpm/unocss@0.57.7_postcss@8.4.49_rollup@2.79.2_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import { configDefaults } from "file:///home/sharevb/it-tools/node_modules/.pnpm/vitest@0.34.0_jsdom@22.0.0_less@4.1.3/node_modules/vitest/dist/config.js";
import Icons from "file:///home/sharevb/it-tools/node_modules/.pnpm/unplugin-icons@0.17.0_@vue+compiler-sfc@3.2.47/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///home/sharevb/it-tools/node_modules/.pnpm/unplugin-icons@0.17.0_@vue+compiler-sfc@3.2.47/node_modules/unplugin-icons/dist/resolver.mjs";
import VueI18n from "file:///home/sharevb/it-tools/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.13.0_rollup@2.79.2_vue-i18n@9.14.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_dirname = "/home/sharevb/it-tools";
var __vite_injected_original_import_meta_url = "file:///home/sharevb/it-tools/vite.config.ts";
var baseUrl = process.env.BASE_URL ?? "/";
var vite_config_default = defineConfig({
  plugins: [
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [resolve(__vite_injected_original_dirname, "locales/**")],
      strictMessage: false,
      escapeHtml: true
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "vue-i18n",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Icons({ compiler: "vue3" }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    markdown(),
    svgLoader(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      manifest: {
        name: "IT Tools",
        description: "Aggregated set of useful tools for developers.",
        display: "standalone",
        lang: "fr-FR",
        start_url: `${baseUrl}?utm_source=pwa&utm_medium=pwa`,
        orientation: "any",
        theme_color: "#18a058",
        background_color: "#f1f5f9",
        icons: [
          {
            src: "/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16"
          },
          {
            src: "/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Components({
      dirs: ["src/"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [NaiveUiResolver(), IconsResolver({ prefix: "icon" })]
    }),
    Unocss(),
    nodePolyfills()
  ],
  base: baseUrl,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "node:fs/promises": fileURLToPath(new URL("./src/_empty.ts", __vite_injected_original_import_meta_url)),
      "node:fs": fileURLToPath(new URL("./src/_empty.ts", __vite_injected_original_import_meta_url)),
      "fs": fileURLToPath(new URL("./src/_empty.ts", __vite_injected_original_import_meta_url)),
      "@babel/core": fileURLToPath(new URL("./src/_empty.ts", __vite_injected_original_import_meta_url)),
      "isolated-vm": fileURLToPath(new URL("./src/_empty.ts", __vite_injected_original_import_meta_url))
    }
  },
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version)
  },
  test: {
    exclude: [...configDefaults.exclude, "**/*.e2e.spec.ts"]
  },
  build: {
    target: "esnext",
    // sourcemap: false,
    minify: !process.env.VERCEL,
    // cssMinify: false,
    rollupOptions: {
      external: ["node:fs/promises", "regex", "./out/isolated_vm", "isolated-vm"],
      output: {
        format: "es",
        manualChunks: (id) => {
          if (id.includes("monaco-editor"))
            return "monaco-editor";
          if (id.includes("tesseract.js"))
            return "tesseract.js";
          if (id.includes("pdfjs"))
            return "pdfjs";
          if (id.includes("unicode"))
            return "unicode";
        },
        sourcemapIgnoreList: (relativeSourcePath) => {
          const normalizedPath = path.normalize(relativeSourcePath);
          return normalizedPath.includes("node_modules");
        }
      },
      cache: false
    }
  },
  optimizeDeps: {
    include: ["re2-wasm-embedded", "isolated-vm", "pdfjs-dist"],
    // optionally specify dependency name
    esbuildOptions: {
      supported: {
        "top-level-await": true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zaGFyZXZiL2l0LXRvb2xzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zaGFyZXZiL2l0LXRvb2xzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NoYXJldmIvaXQtdG9vbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBVUkwsIGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tICd2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxscyc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBtYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWFya2Rvd24nO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnO1xuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcbmltcG9ydCBWdWVJMThuIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnO1xuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkwgPz8gJy8nO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFtyZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXG4gICAgICBzdHJpY3RNZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVzY2FwZUh0bWw6IHRydWUsXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICB7XG4gICAgICAgICAgJ25haXZlLXVpJzogWyd1c2VEaWFsb2cnLCAndXNlTWVzc2FnZScsICd1c2VOb3RpZmljYXRpb24nLCAndXNlTG9hZGluZ0JhciddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSWNvbnMoeyBjb21waWxlcjogJ3Z1ZTMnIH0pLFxuICAgIHZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gICAgbWFya2Rvd24oKSxcbiAgICBzdmdMb2FkZXIoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgc3RyYXRlZ2llczogJ2dlbmVyYXRlU1cnLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ0lUIFRvb2xzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZ2dyZWdhdGVkIHNldCBvZiB1c2VmdWwgdG9vbHMgZm9yIGRldmVsb3BlcnMuJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICBsYW5nOiAnZnItRlInLFxuICAgICAgICBzdGFydF91cmw6IGAke2Jhc2VVcmx9P3V0bV9zb3VyY2U9cHdhJnV0bV9tZWRpdW09cHdhYCxcbiAgICAgICAgb3JpZW50YXRpb246ICdhbnknLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxOGEwNTgnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2YxZjVmOScsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNngxNicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0zMngzMi5wbmcnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbJ3NyYy8nXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgcmVzb2x2ZXJzOiBbTmFpdmVVaVJlc29sdmVyKCksIEljb25zUmVzb2x2ZXIoeyBwcmVmaXg6ICdpY29uJyB9KV0sXG4gICAgfSksXG4gICAgVW5vY3NzKCksXG4gICAgbm9kZVBvbHlmaWxscygpLFxuICBdLFxuICBiYXNlOiBiYXNlVXJsLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ25vZGU6ZnMvcHJvbWlzZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL19lbXB0eS50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ25vZGU6ZnMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL19lbXB0eS50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ2ZzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9fZW1wdHkudHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAYmFiZWwvY29yZSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvX2VtcHR5LnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnaXNvbGF0ZWQtdm0nOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL19lbXB0eS50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICdpbXBvcnQubWV0YS5lbnYuUEFDS0FHRV9WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbiksXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJyoqLyouZTJlLnNwZWMudHMnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIC8vIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAhcHJvY2Vzcy5lbnYuVkVSQ0VMLFxuICAgIC8vIGNzc01pbmlmeTogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnbm9kZTpmcy9wcm9taXNlcycsICdyZWdleCcsICcuL291dC9pc29sYXRlZF92bScsICdpc29sYXRlZC12bSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGZvcm1hdDogJ2VzJyxcbiAgICAgICAgbWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ21vbmFjby1lZGl0b3InKSkgcmV0dXJuICdtb25hY28tZWRpdG9yJztcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3Rlc3NlcmFjdC5qcycpKSByZXR1cm4gJ3Rlc3NlcmFjdC5qcyc7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdwZGZqcycpKSByZXR1cm4gJ3BkZmpzJztcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3VuaWNvZGUnKSkgcmV0dXJuICd1bmljb2RlJztcbiAgICAgICAgICAvLyBpZiAoaWQuaW5jbHVkZXMoJ3RyYW5zZm9ybWVycycpKSByZXR1cm4gJ3RyYW5zZm9ybWVycyc7XG4gICAgICAgICAgLy8gaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgLy8gICByZXR1cm4gXCJ2ZW5kb3JcIjtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZW1hcElnbm9yZUxpc3Q6IChyZWxhdGl2ZVNvdXJjZVBhdGgpID0+IHtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IHBhdGgubm9ybWFsaXplKHJlbGF0aXZlU291cmNlUGF0aCk7XG4gICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRQYXRoLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlMi13YXNtLWVtYmVkZGVkJywgJ2lzb2xhdGVkLXZtJywgJ3BkZmpzLWRpc3QnXSwgLy8gb3B0aW9uYWxseSBzcGVjaWZ5IGRlcGVuZGVuY3kgbmFtZVxuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICBzdXBwb3J0ZWQ6IHtcbiAgICAgICAgJ3RvcC1sZXZlbC1hd2FpdCc6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1AsU0FBUyxLQUFLLHFCQUFxQjtBQUN2UixTQUFTLGVBQWU7QUFDeEIsU0FBUyxxQkFBcUI7QUFFOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGNBQWM7QUFDckIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHVCQUF1QjtB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
