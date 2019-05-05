"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
cucumber_1.Given("que los clientes necesitan filtrar el listado de hoteles por nombre", function () { return true; });
cucumber_1.When("se consuma el endpoint /hotels?filters=name", function () { return true; });
cucumber_1.Then("debe devolverse un listado que cumpla las exigencias del filtrado", function () { return true; });
