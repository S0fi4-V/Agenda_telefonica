const app = Vue.createApp({
    //methos, data, props, etc

    data(){

        return{
            
            nombre:'',
            apellido:'',
            telefono:'',
            categoria:'ELige una opción',
            contactos:[
                {nombre:'Paola', apellido:'Saldivar', telefono:'4777256479',
                categoria:'1', mensajes:0, llamadas:0}
            ],
            nombresCategorias:{
                "1": "Familia",
                "2": "Amigos",
                "3": "Trabajo",
            },
            mensajes:0,
            llamadas:0,
           
        }
    
    },

    methods:{
       obtenerCategoria(id){
        return this.nombresCategorias[id];
       },

       agregarContacto(){

        if(!this.nombre || !this.apellido ||!this.telefono || !this.categoria){
            alert("Requieres completar todos los campos");
            return;
        
        }
            

        this.contactos.push({
            nombre: this.nombre, apellido: this.apellido, telefono: this.telefono, 
            categoria: this.categoria, mensajes:0, llamadas:0,
        });
        this.nombre='';
        this.apellido='';
        this.telefono='';
        this.categoria='Elige una opcion';
        this.mensajes=0,
        this.llamadas=0
      },

      eliminarContacto(index){
        this.contactos.splice(index, 1);
      }
       
    },

    computed:{
        cantidadMensajes(){
            let total=0;
            for(objeto of this.contactos){
                total+= objeto.mensajes;
            }

            return total;
            return this.contactos.forEach(usuario => 
                total += usuario.mensajes);
        },

         cantidadLlamadas(){
            let total=0;
            for(objeto of this.contactos){
                total+= objeto.llamadas;
            }

            return total;
            return this.contactos.forEach(usuario => 
                total += usuario.llamadas);
        },
        cantidadContactos() {
        return this.contactos.length;
        },
    }

});

const app1 = app.mount('#componente')// trigger deploy