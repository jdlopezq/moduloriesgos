export class FileItem{
 
    public file:File;
    public nombre:string;
    public url: string
    public isLoading:boolean
    public progress:number;

    constructor( file:File){
        this.file=file;
        this.nombre=file.name;
         this.progress=0;
         this.isLoading=false

    }

}