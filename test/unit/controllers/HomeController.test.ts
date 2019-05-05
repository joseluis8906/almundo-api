import HomeController from "@app/controllers/HomeController";
import { expect as chaiExpect } from "chai";

const controller: HomeController = new HomeController();

describe("Pruebas unitarias HomeController", () => {
  test("Debe responder al metodo index", () => {
    chaiExpect(controller).respondsTo("index");
  });
});
