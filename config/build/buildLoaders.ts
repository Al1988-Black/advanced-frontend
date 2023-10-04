import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // cssLoader
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // если мы не использовали typescript то нужен еще babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typeScriptLoader, cssLoader];
}
