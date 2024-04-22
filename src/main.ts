import express from "express";
import { Signale } from "signale";

import { bookRouter } from "./books/infrastructure/BookRouter";
import {userRouter} from "./users/infrastructure/UserRouter";
import {assignamentRouter} from "./assignaments/infrastructure/AssignamentRouter"

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/assignaments", assignamentRouter);


app.listen(4000, () => {
  signale.success("Server online in port 4000");
});