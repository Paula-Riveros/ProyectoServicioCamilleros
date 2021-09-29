import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from '../models/servicio';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(servicios: Servicio[], page: number = 0, search: string = ''): Servicio[] {
    if(search.length === 0) {
      return servicios.slice(page,page + 5);
    }

    const filteredServicios = servicios.filter( servicio => servicio.fecha.includes( search ) );
    return filteredServicios.slice(page,page + 5);
  }

}
