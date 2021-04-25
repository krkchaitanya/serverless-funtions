require("dotenv").config();

const  Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
.base('appmG9fh5ctg8WXvQ')
.table('products')


exports.handler = async (event, context, cb) => {


    try {

        const { records } = await airtable.list();        
    
        const products = records.map((rcd) => { 
            const { id } = rcd;
            const {price, name, image} = rcd.fields;
            const url = image[0].url;
            return { id, name, price, url }; 
        });

        return {
            statusCode: 200,
            body: JSON.stringify(products)
        }


    } catch(error) {
        console.log(error);
    }

}