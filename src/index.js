import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import handlebars from "express-handlebars";
import initDatabase from "./config/dbConfig.js";
import { auth } from "./middlewares/authMiddleware.js";
import expressSession from "express-session";

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
    helpers: {
      setTitle(title) {
        this.pageTitle = title;
      },
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(cookieParser());
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(auth);

app.use(express.static("src/public"));

app.use(express.urlencoded());

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
