import { Given, When, Then } from "cucumber";

Given("que un cliente necesita la información detallada de un único Hotel", () => true);
When("consulte el end point /hotel con id", () => true);
Then("debe devolver la información detallada de un único hotel si existe", () => true);