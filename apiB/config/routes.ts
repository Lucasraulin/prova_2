import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/PaperController";

const routes = Router();

routes.get("/", (request, response) => {
  response.json({ message: "API" });
});

const controller = new FolhaPagamentoController();

routes.get("/folha/consultar/:cpf/:mes/:ano", (request, response) =>
  controller.consultar(request, response)
);
routes.get("/folha/listar", (request, response) =>
  controller.listar(request, response)
);

export { routes };
