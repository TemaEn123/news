import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import Dotenv from "dotenv-webpack"
import dotenv from 'dotenv';

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  // Загружаем переменные окружения из .env файла
  const env = dotenv.config().parsed ?? {}; // Используем пустой объект по умолчанию

  // Преобразуем переменные окружения в объект для DefinePlugin
  const envKeys = Object.keys(env).reduce<Record<string, string>>((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
    new Dotenv(),
    new webpack.DefinePlugin(envKeys),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, "locales"),
            to: path.resolve(paths.output, "locales"),
          },
        ],
      })
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
