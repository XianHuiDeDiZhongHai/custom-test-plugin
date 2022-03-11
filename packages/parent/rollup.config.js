import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"
export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      sourcemap: true,
      name: "Parent",
    },
    {
      file: "dist/bundle.es.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    livereload(),
    serve({
      open: true,
      host: "localhost",
      port: 8186,
      contentBase: "./",
      // openPage: "/examples/index.html",
    }),
  ],
}
