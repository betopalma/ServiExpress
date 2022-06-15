const fxuser = require('./cargabaseusers.js')
const { Category, Service, Publication } = require('../../src/database/postgres');





const fx = async function() {
    try {

        fxuser()
        //Categorias
        
        const c1=await Category.create({name:'Home and Construction'});
        const s11=await Service.create({name:'Floors'})
        const s12=await Service.create({name:'Ceilings'})
        const s13=await Service.create({name:'Exteriors'})
        const s14=await Service.create({name:'Coverings'})
        const s15=await Service.create({name:'Plumbing'})
        const s16=await Service.create({name:'Electrician'})
        const s17=await Service.create({name:'Glazier'})
        

        const c2=await Category.create({name:'Beauty and personal care'});
        const s21=await Service.create({name:'Massages and treatments'})
        const s22=await Service.create({name:'Esthetic'})
        const s23=await Service.create({name:'Depilation'})
        const s24=await Service.create({name:'Manicure'})
        const s25=await Service.create({name:'Pedicure'})
        const s26=await Service.create({name:'Hairdressing'})
        const s27=await Service.create({name:'Tattoos'})        


        const c3=await Category.create({name:'Courses and classes'});
        const s31=await Service.create({name:'Idioms'})
        const s32=await Service.create({name:'School support'})
        const s33=await Service.create({name:'Computing'})
        const s34=await Service.create({name:'Singing and dancing'})
        const s35=await Service.create({name:'Driving'})
        const s36=await Service.create({name:'Cooking'})
        const s37=await Service.create({name:'Musical instruments'})   

        const c4=await Category.create({name:'Medicine and Helath'});
        const s41=await Service.create({name:'Psychology'})
        const s42=await Service.create({name:'Odontology'})
        const s43=await Service.create({name:'Nursing'})
        const s44=await Service.create({name:'Geriatrics'})
        const s45=await Service.create({name:'Ambulances'})
        const s46=await Service.create({name:'Therapeutic companion'})
        const s47=await Service.create({name:'Prepaid'})   

        const c5=await Category.create({name:'Parties and events'});
        const s51=await Service.create({name:'Animation'})
        const s52=await Service.create({name:'Game rental'})
        const s53=await Service.create({name:'Catering'})
        const s54=await Service.create({name:'Decoration and setting'})
        const s55=await Service.create({name:'Deverages'})
        const s56=await Service.create({name:'DJ'})
        const s57=await Service.create({name:'Equipment rental'})   


        const c6=await Category.create({name:'Transportation'});
        const s61=await Service.create({name:'Removals'})
        const s62=await Service.create({name:'Passengers'})
        const s63=await Service.create({name:'Trailers'})
        const s64=await Service.create({name:'Parcels'})
        const s65=await Service.create({name:'Couriers'})
        const s66=await Service.create({name:'Car rentals'})
        const s67=await Service.create({name:'Trailers'})   



        const c7=await Category.create({name:'Technology'});
        const s71=await Service.create({name:'Technical PC Suppotr'})
        const s72=await Service.create({name:'Full Stack Dev'})
        const s73=await Service.create({name:'Phones repair'})
        const s74=await Service.create({name:'GPS'})
        const s75=await Service.create({name:'Audio and video'})
        const s76=await Service.create({name:'Relojes'})
        const s77=await Service.create({name:'Consoles'})   

        const c8=await Category.create({name:'Vehicle maintenance'});
        const s81=await Service.create({name:'Mechanical workshops'})
        const s82=await Service.create({name:'Wheels and tires'})
        const s83=await Service.create({name:'Locksmiths'})
        const s84=await Service.create({name:'Windshield and glass'})
        const s85=await Service.create({name:'Tunning'})
        const s86=await Service.create({name:'Rubber bands'})
        const s87=await Service.create({name:'Vehicle safety'})   


        const c9=await Category.create({name:'Pet services'});
        const s91=await Service.create({name:'Kindergarten'})
        const s92=await Service.create({name:'Training'})
        const s93=await Service.create({name:'Adoption'})
        const s94=await Service.create({name:'Hairdressers'})
        const s95=await Service.create({name:'Dog walkers'})
        const s96=await Service.create({name:'Veterinary'})
        const s97=await Service.create({name:'Care and hygiene'})  
        
        
        const c10=await Category.create({name:'Accounting and legal advice'});
        const s101=await Service.create({name:'Accountant and study'})
        const s102=await Service.create({name:'Lawyer and study'})
        const s103=await Service.create({name:'Managers'})
        const s104=await Service.create({name:'Appraisers'})
        const s105=await Service.create({name:'Insurance'})
        const s106=await Service.create({name:'Warranty'})
        const s107=await Service.create({name:'Taxes'})  
// Se paso a cargabseusers
 /*        const juan=await User.create(
            {email:'nnxx@hotmail.com', 
            password: '123456', 
            name: 'Juan', 
            last_name: 'Perez',
            country: 'Peru',
            province_state: 'Lima',
            rol: 'client' ,
            description: "Mecanico de todo tipo de vehiculo, presupuesto sin compromiso, y disponibilidad para ir a domicilio por alguna emergencia",
            avatar_image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Fernando Fernandez",comment:"Muy cumplido",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Carlos Perez",comment:"Bien",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Nicolas Garcia",comment:"No se pudo completar el trabajo por un problema mio",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
  
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Que buen servicio",rating:5},{commenter:"Mengano Gomez",comment:"Trabajo decente, medio caro",rating:3}],
        })
        juan.createFavorite()
        const fernando=await User.create(
            {email:'fer@hotmail.com', 
            password: '123456', 
            name: 'Fernando', 
            last_name: 'Fernandez',
            country: 'Argentina',
            province_state: 'Buenos Aires',
            rol: 'client' ,
            description: "Soy electricista matriculado, puedo trabajar en instalaciones indistriales o instalaciones del hogar",
            avatar_image: "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            buyer_reputation: 4,  
            buyer_opinions:[
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Jorge Juarez",comment:"Mal Servicio",rating:1},{commenter:"Jhonatan Perez",comment:"Muy puntual y responsable",rating:5}],
        })
        fernando.createFavorite()
        const damian=await User.create(
            {email:'damian@hotmail.com', 
            password: '123456', 
            name: 'Damian', 
            last_name: 'Dominguez',
            country: 'Uruguay',
            description: "Mas de 20 Años en el rubro de construccion y arquitectura, presentame tu proyecto y yo lo hago realidad.",
            avatar_image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            province_state: 'Montevideo',
            rol: 'client' ,
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3, buyer_avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Jorge Flores",comment:"Lo recomiendo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}],
            seller_reputation: 3,
            seller_opinions:[{commenter:"Armando Paredes",comment:"Se desempeño muy bien y termino antes de tiempo",rating:5},{commenter:"Juan Lopez",comment:"Se tardo mucho en terminar",rating:3}],
        })
        damian.createFavorite()
        const lucas=await User.create(
            {email:'lucas@hotmail.com', 
            password: '123456', 
            name: 'Lucas', 
            last_name: 'Juarez',
            avatar_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            country: 'Colombia',
            description: "Presupuesto sin compromiso",
            province_state: 'Bogota',
            rol: 'client' ,
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3,buyer_avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Cumplido y bien hecho",rating:5},{commenter:"Fernando Vazquez",comment:"Me gusto su trabajo",rating:4}],
        })
        lucas.createFavorite()

 */
        const c11=await Category.create({name:'Music photography and film'});
        const s111=await Service.create({name:'Photography'})
        const s112=await Service.create({name:'Music'})
        const s113=await Service.create({name:'Film'})
        const s114=await Service.create({name:'Advice'})
        const s115=await Service.create({name:'Equipments rental'})
        const s116=await Service.create({name:'Musical Instrument'})
        const s117=await Service.create({name:'Rehearsal rooms'})  

        const c12=await Category.create({name:'Clothing and fashion'});
        const s121=await Service.create({name:'Making'})
        const s122=await Service.create({name:'Prints'})
        const s123=await Service.create({name:'Repairs'})
        const s124=await Service.create({name:'Laundry'})
        const s125=await Service.create({name:'Dry cleaner'})
        const s126=await Service.create({name:'Embroidery'})
        const s127=await Service.create({name:'Cutting and modeling'})  

        const c13=await Category.create({name:'Delivery'});
        const s131=await Service.create({name:'Breakfast'})
        const s132=await Service.create({name:'Beverages'})
        const s133=await Service.create({name:'Food'})
        const s134=await Service.create({name:'Ice Creams'})
        const s135=await Service.create({name:'Others'})
        const s136=await Service.create({name:''})
        const s137=await Service.create({name:''})  

        const c14=await Category.create({name:'Office services'});
        const s141=await Service.create({name:'Photocopiers'})
        const s142=await Service.create({name:'Dispenser'})
        const s143=await Service.create({name:'Fitness equipment'})
        const s144=await Service.create({name:'Lift truck'})
        const s145=await Service.create({name:'Furniture repair'})
        const s146=await Service.create({name:'Luminaires'})
        const s147=await Service.create({name:'Cleaning'})  

        const c15=await Category.create({name:'Travels and tourism'});
        const s151=await Service.create({name:'Excursions'})
        const s152=await Service.create({name:'Accommodation'})
        const s153=await Service.create({name:'Tickets'})
        const s154=await Service.create({name:'Travel assistance'})
        const s155=await Service.create({name:'Car rentals'})
        const s156=await Service.create({name:'Tourist packages'})
        const s157=await Service.create({name:'Fishing'}) 

        const c16=await Category.create({name:'Communication and design'});
        const s161=await Service.create({name:'Marketing'})
        const s162=await Service.create({name:'Graphic design'})
        const s163=await Service.create({name:'Translators'})
        const s164=await Service.create({name:'Announcers'})
        const s165=await Service.create({name:'Advertising'})
        const s166=await Service.create({name:'Comunity Manager'})
        const s167=await Service.create({name:'Video Edition'}) 
/* 
        const plomeria=await Category.create({name:'Plomeria'});
        const gas=await Category.create({name:'Gas'});
        const electricidad=await Category.create({name:'Electricidad'});
        const asesoramiento=await Service.create({name:'Asesoramiento'})
        const instalaciones=await Service.create({name:'Instalacioes'})
        const soldaduras=await Service.create({name:'Soldaduras'})
        const pinturas=await Service.create({name:'Pinturas'})

        plomeria.setServices(asesoramiento);
        plomeria.setServices(instalaciones);
        gas.setServices(instalaciones);
        electricidad.setServices(soldaduras);
        electricidad.setServices(instalaciones);
        electricidad.setServices(pinturas);
        electricidad.setServices(asesoramiento); */

        c1.setServices(s11);c1.setServices(s12);c1.setServices(s13);c1.setServices(s14);c1.setServices(s15);c1.setServices(s16);c1.setServices(s17);
        c2.setServices(s21);c2.setServices(s22);c2.setServices(s23);c2.setServices(s24);c2.setServices(s25);c2.setServices(s26);c2.setServices(s27);
        c3.setServices(s31);c3.setServices(s32);c3.setServices(s33);c3.setServices(s34);c3.setServices(s35);c3.setServices(s36);c3.setServices(s37);
        c4.setServices(s41);c4.setServices(s42);c4.setServices(s43);c4.setServices(s44);c4.setServices(s45);c4.setServices(s46);c4.setServices(s47);
        c5.setServices(s51);c5.setServices(s52);c5.setServices(s53);c5.setServices(s54);c5.setServices(s55);c5.setServices(s56);c5.setServices(s57);
        c6.setServices(s61);c6.setServices(s62);c6.setServices(s63);c6.setServices(s64);c6.setServices(s65);c6.setServices(s66);c6.setServices(s67);
        c7.setServices(s71);c7.setServices(s72);c7.setServices(s73);c7.setServices(s74);c7.setServices(s75);c7.setServices(s76);c7.setServices(s77);
        c8.setServices(s81);c8.setServices(s82);c8.setServices(s83);c8.setServices(s84);c8.setServices(s85);c8.setServices(s86);c8.setServices(s87);
        c9.setServices(s91);c9.setServices(s92);c9.setServices(s93);c9.setServices(s94);c9.setServices(s95);c9.setServices(s96);c9.setServices(s97);
        c10.setServices(s101);c10.setServices(s102);c10.setServices(s103);c10.setServices(s104);c10.setServices(s105);c10.setServices(s106);c10.setServices(s107);
        c11.setServices(s111);c11.setServices(s112);c11.setServices(s113);c11.setServices(s114);c11.setServices(s115);c11.setServices(s116);c11.setServices(s117);
        c12.setServices(s121);c12.setServices(s122);c12.setServices(s123);c12.setServices(s124);c12.setServices(s125);c12.setServices(s126);c12.setServices(s127);
        c13.setServices(s131);c13.setServices(s132);c13.setServices(s133);c13.setServices(s134);c13.setServices(s135);c13.setServices(s136);c13.setServices(s137);
        c14.setServices(s141);c14.setServices(s142);c14.setServices(s143);c14.setServices(s144);c14.setServices(s145);c14.setServices(s146);c14.setServices(s147);
        c15.setServices(s151);c15.setServices(s152);c15.setServices(s153);c15.setServices(s154);c15.setServices(s155);c15.setServices(s156);c15.setServices(s157);
        c16.setServices(s161);c16.setServices(s162);c16.setServices(s163);c16.setServices(s164);c16.setServices(s165);c16.setServices(s166);c16.setServices(s167);



        const pub1=await Publication.create( 
            {
                "date": "2022-06-09T23:25:03.723Z",
                "state": "Active",
                "title": "Mecanico",
                "album": [

                "https://images.unsplash.com/photo-1643701079732-3b1c7a797e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"


                ],
                "detail": `Autoelectrico, mecánica general, Afinaciones, cambio de aciete, fuel injection, escaneo, calibración de cuerpos de aceleración, revisión de compraventa, cambio de bombas de agua y de gasolina, bandas de accesorios y de distribución,
                Servicio a domicilio.
                
                Servicio de auxilio mecánico vial
                
                Lunes a domingo de 8 am a 8pm
                
                Se aceptan tarjetas de crédito y débito.`,
                "detail_resume": "Se hacen trabajos de mecanica en general",
                "price": 5000,
                "userId": 1,
                "categoryId": 1,
                "services": []
                }
        )
        const pub2=await Publication.create( 
        {
            "date": "2022-06-09T23:25:33.552Z",
            "state": "Active",
            "title": "Electricista matriculado",
            "album": [
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            "detail": `TECNICO ELECTRICISTA  A DOMICILIO 
            REALIZO LOS SIGUIENTES TRABAJOS:
            • Realización de pozo  a tierra.
            • Cableado y recableado de instalaciones eléctricas.
            • Tomacorrientes, Interruptores.
            • Detección de Cortocircuitos, Fugas de Corriente.
            • Instalación De Alumbrado en general. 
            •  Instalación De Ducha eléctricas.
            •  Instalación de chapas eléctricas
            * Tableros Eléctricos, Llaves Térmicas, Diferenciales.
            • Instalaciones de videoporteros MANO DE OBRA DE CALIDAD CASAS, OFICINAS, DEPARTAMENTOS, LOCALES, GALERIAS. 
            Rodolfo Antón 
            ELECTRICISTA  `,
            "detail_resume": "Estoy matriculado en todo tipo de instalacion",
            "price": 1000,
            "userId": 2,
            "categoryId": 2,
            "services": []
            },
        )
        const pub3=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub4=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub5=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub6=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub7=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub8=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub9=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
        const pub10=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
    }
    catch (error) {
        console.log(error)
    }
    
}


module.exports = fx;
