# Calculadora de Impuesto Anual de Vehiculos para el 2024

---

Esta aplicación calcula el impuesto vehicular en base al tipo de combustible que utiliza el vehiculo.

La formula usada es la siguiente:
***Impuesto = CostoActualDelVehiculo * PorcentajeSegunTipoDeCombustible***

Para realizar esta aplicación se hizo uso de javascript para la funcionalidad, html para la estructura y css para el diseño.

Uso de O/C: Por otro lado, se usó el principio de abierto/cerrado para su construcción, donde la clase *CalculadoraTax* se tiene como una clase abstracta y es heredada por las calculadoras de impuestos, que usan un porcentaje especifico según el tipo de combustible que utiliza el vehiculo.

Este programa cumple con el principio abierto/cerrado ya que se pueden extender más tipos de calculadoras, cada una con su porcentaje especifico, sin necesidad de alterar el código actual.

---

Andres Santiago Rodriguez Reyes
Código: 20231020089