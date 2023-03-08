


class responseApi{


    structure = {
        status  :'success',
        message :'',
        code    :'200',
        results : null,
    }

 constructor(){
 }
    setEstado = (codigo,estado,mensaje)=>{

        this.structure.status  = estado;
        this.structure.code    = codigo;
        this.structure.message = mensaje;
    }


    setResultado = (ressult)=>{

        this.structure.results = ressult;
    }


    toResponse = ()=>{

        return{
            status  : this.structure.status,
            message : this.structure.message,
            code    : this.structure.code,
            results : this.structure.results
        }
        
    }






}

module.exports = responseApi;