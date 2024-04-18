import productModel from "../models/products";

const getProducts = async (limit, page, filter, ord) => {
 

    const pag = page !== undefined ? page : 1;
    const limi = limit !== undefined ? limit : 10;

    if (filter == "true" || filter == "false") {
        metFilter = "status"
    } else {
        if (filter !== undefined)
            metFilter = "category";
    }

    const query = metFilter != undefined ? { [metFilter]: filter } : {};
    const ordQuery = ord !== undefined ? { price: ord } : {};

    console.log(query)

    const prods = await productModel.paginate(query, { limit: limi, page: pag, sort: ordQuery });
    console.log(ordQuery)
    res.status(200).send(prods)
   
}