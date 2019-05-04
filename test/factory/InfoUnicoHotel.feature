Feature: Información Único Hotel
  los clientes necesitan conocer
  en detalle la información de un Hotel

  Scenario: Devolver Información Único Hotel
    Given que un cliente necesita la información detallada de un único Hotel
    When consulte el end point /hotel/:id
    Then debe devolver la información detallada de un único hotel si existe