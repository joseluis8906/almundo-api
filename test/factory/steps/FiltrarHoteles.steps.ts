import { Given, When, Then } from "cucumber";

Given("que los clientes necesitan filtrar el listado de hoteles por nombre", () => true);
When("se consuma el endpoint /hotels?filters=name", () => true);
Then("debe devolverse un listado que cumpla las exigencias del filtrado", () => true);