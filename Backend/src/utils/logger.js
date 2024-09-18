import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);
const httpTransportOptions = {
    host: 'http-intake.logs.us5.datadoghq.com',
    path: `/api/v2/logs?dd-api-key=${process.env.DATA_DOG_API}&ddsource=nodejs&service=my-app`,
    ssl: true
  };
  
// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    // new transports.Console({
    //   format: consoleLogFormat,
    // }),
    //new transports.File({ filename: "app.log" }),
    new transports.Http(httpTransportOptions),
  ],
});

export default logger;