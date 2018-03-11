import {
  Directive, EventEmitter, ElementRef, HostListener,
  Input, Output
} from '@angular/core';
import { FileItem } from '../shared/file.model';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = []
  @Output() mouseAbove: EventEmitter<boolean> = new EventEmitter
  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseAbove.emit(true);
    this._preventOpen(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseAbove.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    this.mouseAbove.emit(false);
    const transfer = this._getTransfer(event);
    if (!transfer) {
      return
    }

    this._extractArch(transfer.files)
    this._preventOpen(event);

  }



  private _getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractArch(archivoslista: FileList) {

    for (const propiedad in Object.getOwnPropertyNames(archivoslista)) {
      const archivoTemporal = archivoslista[propiedad];
      if (this._archivoPuedeSerCargado(archivoTemporal)) {
        const newFile = new FileItem(archivoTemporal);
        this.archivos.push(newFile);
      }
    }
    console.log(this.archivos);
  }


  //Validaciones 

  private _preventOpen(event) {
    event.preventDefault();
    event.stopPropagation();
  }


  private _archivoPuedeSerCargado(archivo: File): boolean {

    if (!this._fileExist(archivo.name) && this._ValidFile(archivo.type)) {
      return true;
    } else {
      return false;
    }

  }

  private _ValidFile(tipoArchivo: string): boolean {
    console.log(tipoArchivo)
    return (tipoArchivo === '' || tipoArchivo === undefined) ? 
    false : tipoArchivo.startsWith('application/vnd.ms-excel');
  }



  private _fileExist(nameFile: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombre== nameFile) {
        console.log("El archivo " + nameFile + "ya existe");
        return true;
      } return false;
    }
  }


}
