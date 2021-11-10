import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from '../models/servicio';

// Filtros que se pueden aplicar a la tabla que lista los servicios

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(servicios: Servicio[], search: string = '', search2: string = '', searchCancel: string = '', search3: string = '', search4: string = ''): Servicio[] {

    // if(search.length === 0) {
    //   return servicios.slice(page,page + 10);    
    // }

    const filteredServicios = servicios.filter(servicio =>
      servicio.fecha.includes(search) &&
      (servicio.solicitante.toLocaleLowerCase().includes(search2.toLocaleLowerCase()) ||
        servicio.camillero?.nombreCamillero.toLocaleLowerCase().includes(search2.toLocaleLowerCase()))
      && servicio.cancelado.toString().toLocaleLowerCase().includes(searchCancel.toLocaleLowerCase())
      && servicio.genareser?.gasnombre.toLocaleLowerCase().includes(search3.toLocaleLowerCase())
      && servicio.genareser2?.gasnombre.toLocaleLowerCase().includes(search4.toLocaleLowerCase())
    );

    return filteredServicios;
    //}
  }

}
