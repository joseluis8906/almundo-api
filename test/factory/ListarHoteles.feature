Feature: Listar Hoteles
  los clientes necesitan conocer
  el listado de los hoteles

  Scenario: Quiero listar hoteles
    Given que los clientes necesitan listar hoteles
    When realice una consulta al endPoint /hotels
    Then debe entregarse una lista de hoteles