
import { Router } from "express";
import productModel from "../models/products.js";

const productsRouter = Router()

productsRouter.get('/', async (req, res) => {
    

    } catch (error) {
        res.status(500).render('templates/error', {
            error: error,
        });
    }
});
productsRouter.get('/:pid', async (req, res) => {
    try{
        const idProducto = req.params.pid
        const producto = await productModel.findById(idProducto)
            if(producto){
                res.status(200).send(producto)
            }else{
                res.status(404).send("Producto no existe")
            }
    }catch(error){
        res.status(500).send(`Error interno del servidor - Consulta producto: ${error}`)
    }})

productsRouter.post('/', async (req, res) => {
    try{
        const producto = req.body
        
        const mensaje = await productModel.create(producto)
            if(mensaje == 'Producto creado exitosamente')
                res.status(200).send(mensaje)
            else{
                res.status(400).send(mensaje)
            }
    }catch(error) {
        res.status(500).send(`Error interno del servidor - Al crear producto: ${error}`)
    }})

productsRouter.put('/:pid', async (req, res) => {
    try {
        const idProducto = req.params.pid
        const updateProduct = req.body
        const mensaje = await productModel.findByIdAndUpdate
            if (mensaje == 'Producto actualizado exitosamente'){
                res.status(200).send(mensaje)
            } else {
                res.status(404).send(mensaje)
            }
    } catch (error) {
        res.status(500).send(`Error interno del servidor - Al actualizar producto: ${error}`)      
}})

productsRouter.delete('/:pid', async (req, res) => {
    try{
        const idProducto = req.params.pid
        const mensaje = await PRODUCTMANAGER.deleteProduct(idProducto)
            if (mensaje == 'Producto eliminado exitosamente' ){
                res.status(200).send(mensaje)
            }else{
                    res.status(404).send(mensaje)
            } 
        }catch (error) {
            res.status(500).send(`Error interno del servidor al eliminar producto: ${error}`)
        }})


export default productsRouter