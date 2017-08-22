/* tslint:disable:no-var-requires */
import * as Config from "webpack-chain";

import * as CommonConfig from "./config.common";
import { Credentials, EnvOptions } from "./types";

const ScreepsWebpackPlugin = require("screeps-webpack-plugin");

function webpackConfig(options: EnvOptions = {}): Config {
  // get the common configuration to start with
  const config = CommonConfig.init(options);

  const credentials: Credentials = require("./credentials.json");
  credentials.branch = "world";

  config.plugin("screeps")
    .use(ScreepsWebpackPlugin, [credentials]);

  return config;
}

module.exports = webpackConfig;
