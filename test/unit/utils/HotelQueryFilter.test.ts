import HotelQueryFilter from "@app/contrib/utils/HotelQueryFilter";
import * as chai from "chai";
import HotelBusiness from "@app/contrib/business/HotelBusiness";

const obj: HotelQueryFilter = new HotelQueryFilter(null, "", []);

describe("Pruebas unitarias de HotelQueryFilter", () => {
  test("Debe responder al método resolve", () => {
    chai.expect(obj).respondsTo("resolve");
  });

  test("Debe contener la propiedad page de tipo number", () => {
    chai.expect(obj).to.have.property("page").to.be.a("number");
  });

  test("Debe contener la propiedad name de tipo string", () => {
    chai.expect(obj).to.have.property("name").to.be.a("string");
  });

  test("Debe contener la propiedad amenities de tipo array<string>", () => {
    chai.expect(obj).to.have.property("amenities").to.be.an("array")
  });

  test("Debe contener la propiedad hotels de tipo array<Hotel>", () => {
    chai.expect(obj).to.have.property("hotels").to.be.an("array");
  });

  test("Debe contener la propiedad business de tipo HotelBusiness", () => {
    chai.expect(obj).to.have.property("business").to.be.instanceOf(HotelBusiness);
  });
});