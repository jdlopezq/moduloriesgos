import { Injectable } from '@angular/core';
import { dataDemo } from '../Models/data.model';

@Injectable()
export class LocaldataService {

  constructor() {console.log("Servicio listo para usar") }
getDataLocal(){
return this.Data;
}

private Data:any[]=[
  {
      TipoDocumento: "NIT",
      NumeroIdentificación: 1018408197,
      NombreCompleto: "",
      LineaCredito: "Tarjeta Ris Rotativo",
      EstadoActual: "Aprobado",
      MontoAprobado: 15000000,
      FechaAprobación: "26/10/2016",
      Asesor: "JOSE ISABEL RENTERIA",
      Analista: "ISABEL CRISTINA NIETO URAN",
      Edad: null,
      Genero: "",
      NivelFormación: "",
      Ocupacion: "",
      Clasificacion: "",
      EmpresaTrabaja: "",
      FechaContratación: "19/10/2007",
      EstadoCivil: "",
      PersonasCargo: 0,
      TipoVivienda: "FAMILIAR",
      Ciudad: "BOGOTA D.C.",
      Estrato: 3,
      TotalIngresos: 20100000.00,
      GastosPersonales: 10000000.00,
      CuotaCentralRiesgo: 0.00,
      OficinaEntrega: "ESTADIO",
      Score: 0,
      Convenio: "MEDIA NARANJA",
      EtapaActual: "Análisis y Decisión",
      id: 1
  },
  {
      TipoDocumento: "NIT",
      NumeroIdentificación: 800245737,
      NombreCompleto: "",
      LineaCredito: "Tarjeta Ris Rotativo",
      EstadoActual: "Desembolsado",
      MontoAprobado: 15000000,
      FechaAprobación: "18/11/2016",
      Asesor: "WILLIAM ANDRES CARDONA",
      Analista: "ISABEL CRISTINA NIETO URAN",
      Edad: null,
      Genero: "",
      NivelFormación: "",
      Ocupacion: "",
      Clasificacion: "",
      EmpresaTrabaja: "",
      FechaContratación: "20/04/2013",
      EstadoCivil: "",
      PersonasCargo: 0,
      TipoVivienda: "PROPIA",
      Ciudad: "MEDELLIN",
      Estrato: 3,
      TotalIngresos: 50000000.00,
      GastosPersonales: 16000000.00,
      CuotaCentralRiesgo: 0.00,
      OficinaEntrega: "ESTADIO",
      Score: 0,
      Convenio: "SIN CONVENIO",
      EtapaActual: "Portafolio",
      id: 2
  },
]}