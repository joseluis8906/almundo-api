import RootRouter from "@app/routers/RootRouter";
import { expect as chaiExpect } from "chai";
import { app } from "@test/mocks/express";

const router: RootRouter = new RootRouter(app);

describe("Pruebas unitarias del objeto RootRouter", () => {
  test("Debe contener la propiedad version de tipo string", () => {
    chaiExpect(router).to.have.property("version").to.be.a("string");
  });
});