const {urlMod} = require('../models/urlModel');
const {nanoid} = require('nanoid');
//app.use(express.json());
//app.use(express.urlencoded({extended:true}));
async function generateUrl(req,res)
{
    const actUrl=req.body;
    if(!actUrl) return res.status(404).json({err:"URL is mandatory"});
    const shortUrl= nanoid(8);
    await urlMod.create(shortUrl,actUrl);
    return res.json({shorted:shortUrl});

}
module.exports={generateUrl};