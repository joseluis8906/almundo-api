import HotelController from "@app/controllers/HotelController";
import { expect as chaiExpect } from "chai";

const controller: HotelController = new HotelController();

describe("Pruebas unitarias de HotelController", () => {
  test("Debe responder al método list", () => {
    chaiExpect(controller).respondsTo("list");
  });

  test("Debe responder al método findOne", () => {
    chaiExpect(controller).respondsTo("findOne");
  });
});
