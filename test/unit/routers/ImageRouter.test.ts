import ImageRouter from "@app/routers/ImageRouter";
import ImageController from "@app/controllers/ImageController";
import { expect as chaiExpect } from "chai";
import { app, version } from "@test/mocks/express";

const router: ImageRouter = new ImageRouter(app, version);

describe("Pruebas unitarias ImageRouter", () => {
  test("Debe contener la propiedad endPoint de tipo string y valor /api/v1/images", () => {
    chaiExpect(router).to.have.property("endPoint").to.be.a("string").to.be.eq("/api/v1/images");
  });

  test("Debe contener la propiedad controller de tipo ImageController", () => {
    chaiExpect(router).to.have.property("controller").to.be.instanceOf(ImageController);
  });
});
