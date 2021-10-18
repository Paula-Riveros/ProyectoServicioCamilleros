import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from '../models/servicio';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(servicios: Servicio[], page: number = 0, search: string = '', 
  searchOtro: string = '', searchCancel: string = ''): Servicio[] {

    // if(search.length === 0) {
    //   return servicios.slice(page,page + 10);    
    // }


    const filteredServicios = servicios.filter( servicio => 
      (servicio.fecha.includes( search ) ||
      servicio.solicitante.toLocaleLowerCase().includes( search.toLocaleLowerCase() ) ||
      servicio.camillero?.nombreCamillero.toLocaleLowerCase().includes( search.toLocaleLowerCase() )) &&
      servicio.genareser?.gasnombre.toLocaleLowerCase().includes( searchOtro.toLocaleLowerCase() ) &&
      servicio.cancelado.toString().toLocaleLowerCase().includes( searchCancel.toLocaleLowerCase() )
      );
    return filteredServicios.slice(page,page + 10);
  }

}
