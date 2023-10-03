import { BuildOptions } from "./types/config";
import { Configuration as DevserverConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevserverConfiguration {
  return {
    port: options.port,
    open: true,
  };
}
