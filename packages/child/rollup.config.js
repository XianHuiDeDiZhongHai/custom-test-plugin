export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.es.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      sourcemap: true,
      name: "Child",
      globals: {
        parent: "parent",
      },
    },
  ],
}
