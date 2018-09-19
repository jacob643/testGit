import { Container } from "inversify";
import Types from "./types";
import { Server } from "./server";
import { Application } from "./app";
import { Route } from "./routes/index";
import { Routes } from "./routes";
import { UserController } from "./routes/userController";
import { GameController } from "./routes/gameController";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);
container.bind(Types.Routes).to(Routes);

container.bind(Types.Index).to(Route.Index);
container.bind(Types.Users).to(UserController.Users);
container.bind(Types.Games).to(GameController.Games);

export { container };
