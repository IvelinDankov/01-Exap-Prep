import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import handlebars from "express-handlebars";
import initDatabase from "./config/dbConfig.js";
import { auth } from "./middlewares/authMiddleware.js";

const port = 5000;

const app = express();

initDatabase();

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

app.use(auth);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
