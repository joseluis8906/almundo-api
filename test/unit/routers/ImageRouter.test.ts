import ImageRouter from "@app/routers/ImageRouter";
import { expect as chaiExpect } from "chai";
import { app, version } from "@test/mocks/express";

const router: ImageRouter = new ImageRouter(app, version);

describe("Pruebas unitarias ImageRouter", () => {
  test("Debe contener la propiedad endPoint de tipo string y valor /static", () => {
    chaiExpect(router).to.have.property("endPoint").to.be.a("string").to.be.eq("/static");
  });
});
