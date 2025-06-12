import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import handlebars from "express-handlebars";

const port = 5000;

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.use(express.urlencoded());
app.use(cookieParser());

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
