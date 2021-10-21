import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from '../models/servicio';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(servicios: Servicio[], page: number = 0, search: string = '',
    search2: string = '', searchCancel: string = '', searchSolicitado: any = null): Servicio[] {

    // if(search.length === 0) {
    //   return servicios.slice(page,page + 10);    
    // }

    // if (searchSolicitado == null && search.length === 0 && search2.length === 0 && searchCancel.length === 0) {
    //   return servicios.slice(page, page + 10);
    // } else {

      const filteredServicios = servicios.filter(servicio =>
        servicio.fecha.includes(search) &&
        (servicio.solicitante.toLocaleLowerCase().includes(search2.toLocaleLowerCase()) ||
          servicio.camillero?.nombreCamillero.toLocaleLowerCase().includes(search2.toLocaleLowerCase())) &&
        servicio.cancelado.toString().toLocaleLowerCase().includes(searchCancel.toLocaleLowerCase()) 

        //&& servicio.genareser?.oid.toString().includes(searchSolicitado.toString())
      );

      return filteredServicios.slice(page, page + 20);
    //}
  }

}
