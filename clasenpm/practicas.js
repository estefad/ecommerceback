import fs from "fs";

class productManager{
    constructor(){
        this.products = [];
        this.path= "./data/products.json" //guardar info en archivo
        
    }

    //leer el archivo
    async getProducts(){
        try {
            
            const file = await fs.promises.readFile(this.path, "utf-8")
            const fileParse = JSON.parse(file)

            this.products = fileParse || []
            console.log(this.products)
            

        } catch (err) {
            console.log(err)  
        }
       
    }
     async addProduct(product){

     
        try {

            await this.getProducts()
            const {title, description, price, thumbnail, code, stock} = product

            const newProduct={
            id: this.products.length + 1, //id autoincremental
            title,
            description,
            price,
            thumbnail,
            code,
            stock
            }
        //validar codigo de prod
            const productoExiste= this.products.find((product) => product.code === code)
                if(productoExiste) throw new Error(`ya existe un producto con el codigo: ${code}`)
            
        this.products.push(product)

        await fs.promises.writeFile(this.path, JSON.stringify(this.products))
        //sobreescribimos el archivo json para que se vallan agregando productos
            
        } catch (error) {
            
        }
        
    }


    async getProductById(){
        try {
            await this.getProducts()
            const id = this.products.find((product) => product.id === id)
           if (!product) throw new Error("no existe el producto con el id")
            
        } catch (err) {
            console.log(err) 
        }
        
    }

    async updateProduct(id, data){
        try {

            await this.getProductById(id)

            const index = this.products.findIndex((product=> product.id === id))
            this.products[index] = {...this.products[i]}//copiamos el objeto
            this.products[index] = {...this.products[i], ...data} //actualizamos el objeto

            await fs.promises.writeFile(this.path, JSON.stringify(this.products))

        } catch (err) {
            
        }
    }

    async deleteProduct(id){
        try {
            await this.getProductById(id) //no llamamos a get porque en id ya se llama a esa func

            this.products = this.products.filter(products => products.id !== id)
            await fs.promises.writeFile(this.path, JSON.stringify(this.products))
            
        } catch (err) {
            
        }
    }
}

const product = new productManager()
product.addProduct(
    { 
        title: "producto 1",
        description: "descripcion producto 1",
        price: 1000,
        thumbnail: "https://via.placeholder.com/300/92c952",
        code: "ABC123",
        stock: 10
    }
)

product.addProduct(
    { 
        title: "producto 2",
        description: "descripcion producto 2",
        price: 1000,
        thumbnail: "https://via.placeholder.com/300/92c952",
        code: "A123",
        stock: 12
    }
)

product.getProducts();




















//LIBRERIA SIN DOCUMENTACION NO SE USA!

//instalacion global - servira la instalacion para todos los proyectos, ya que se instala en la compu
//local - modulo pertenecera solo mi proyecto, no a otro
//npm i -g express - global
//npm i express - local

//versionado de dependencias
//v2.0.4
//2 - version mayor, ref a cambios grandes, puede afectar los proyectos
//0 - version menor, ref a cambios pequenos, no afecta v anteriores
//4 - patch, ref a cambios pequenos, afecta a la version menor

//MANEJO DE ARCHIVOS JS - como persistir la info
//fs - manejo de archivos - file system


