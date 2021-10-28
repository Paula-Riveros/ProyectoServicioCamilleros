import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from '../models/servicio';

@Pipe({
  name: 'promedio'
})
export class PromedioPipe implements PipeTransform {

  transform(servicios: Servicio[], search: string = '', search2: string = '', searchCancel: string = '', search3: string = '', search4: string = ''): number {

    const filteredServicios = servicios.filter(servicio =>
      servicio.fecha.includes(search) &&
      (servicio.solicitante.toLocaleLowerCase().includes(search2.toLocaleLowerCase()) ||
        servicio.camillero?.nombreCamillero.toLocaleLowerCase().includes(search2.toLocaleLowerCase()))
      && servicio.cancelado.toString().toLocaleLowerCase().includes(searchCancel.toLocaleLowerCase())
      && servicio.genareser?.gasnombre.toLocaleLowerCase().includes(search3.toLocaleLowerCase())
      && servicio.genareser2?.gasnombre.toLocaleLowerCase().includes(search4.toLocaleLowerCase())
    );

    const promedio = Math.round(filteredServicios.reduce((acc, obj) =>
    acc + obj.tiempoTotal, 0)/filteredServicios.length);

    return promedio;
    //}
  }

}
