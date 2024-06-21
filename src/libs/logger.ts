import "setimmediate";
import Logger from "@cuesoftinc/logger";
import service from "../../package.json";

const { logger } = new Logger({
  service: { name: service.name, version: service.version },
  prettyPrint: process.env.REACT_APP_LOG_LEVEL === "debug",
  source: "jsdom",
  level: process.env.REACT_APP_LOG_LEVEL
});

export default logger;
