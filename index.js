import http from "http";
import fs from "fs";

const port = "8080";

function openHTML(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let page = null;

  switch (req.url) {
    case "/index.html":
    case "/":
      page = fs.readFileSync("./pages/index.html", "utf8");
      break;

    case "/about.html":
      page = fs.readFileSync("./pages/about.html", "utf8");
      break;

    case "/contact-me.html":
      page = fs.readFileSync("./pages/contact-me.html", "utf8");
      break;

    default:
      page = fs.readFileSync("./pages/404.html", "utf8");
      break;
  }

  res.write(page);
  res.end();
}

http.createServer(openHTML).listen(port);
