Feature: Filtrar Hoteles
  los clientes necesitan filtrar el listado
  de hoteles por un conjunto de criterios

  Scenario: Filtrar Hoteles Por Nombre
    Given que los clientes necesitan filtrar el listado de hoteles por nombre
    When se consuma el endpoint /hotels?filters=name
    Then debe devolverse un listado que cumpla las exigencias del filtrado