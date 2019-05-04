import HomeRouter from "@app/routers/HomeRouter";
import HomeController from "@app/controllers/HomeController";
import { expect as chaiExpect } from "chai";
import { app } from "@test/mocks/express";

const router: HomeRouter = new HomeRouter(app, "");

describe("Pruebas unitarias del objeto router", () => {
  test("Debe contener la propiedad endPoit de tipo string y valor /", () => {
    chaiExpect(router).to.have.property("endPoint").to.be.a("string").to.be.eq("/");
  });

  test("Debe responder al metodo getHandler", () => {
    chaiExpect(router).to.have.property("controller").instanceof(HomeController);
  });
});