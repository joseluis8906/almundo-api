Feature: Filtrar Hoteles
  los clientes necesitan filtrar el listado
  de hoteles por un conjunto de criterios

  Scenario: Filtrar Hoteles Por Diversos Criterios
    Given que los clientes necesitan filtrar el listado de hoteles por diversos criterios
    When se consuma el end point /hotels?filters={calificacion:4,precio:60000}
    Then debe devolverse un listado que cumpla las exigencias del filtrado