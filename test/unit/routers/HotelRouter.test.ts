import HotelRouter from "@app/routers/HotelRouter";
import HotelController from "@app/controllers/HotelController";
import { expect as chaiExpect } from "chai";
import { app, version } from "@test/mocks/express";

const router: HotelRouter = new HotelRouter(app, version);

describe("Pruebas unitarias objeto HotelRouter", () => {
  test("Debe contener la propiedad endPoint de tipo string y valor /api/v1/hotels", () => {
    chaiExpect(router).to.have.property("endPoint").to.be.a("string").to.be.eq("/api/v1/hotels");
  });

  test("Debe contener la propiedad controller de tipo HotelController", () => {
    chaiExpect(router).to.have.property("controller").instanceof(HotelController);
  });
});