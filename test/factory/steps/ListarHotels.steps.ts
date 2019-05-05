import { Given, When, Then } from "cucumber";

Given("que los clientes necesitan listar hoteles", () => true);
When("realice una consulta al endPoint /hotels", () => true);
Then("debe entregarse una lista de hoteles", () => true);