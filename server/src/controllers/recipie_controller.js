const Recipie = require('./../models/Recipie')
const {filterRecipie} = require('./../utils/filter_recipie')

const getRecipies = async (req,res)=>{
    try {
        let filterParams = req.query
        
        const allFilters = filterRecipie(filterParams)
       
        let data = await Recipie.find(allFilters);
        
     data.map((v,i)=>{
            v.image = `${req.protocol}://${req.get('host')}${v.image}`

        })
      
        res.status(200).json( { status: 200 , message : "API call success", data ,count:data.length })
        

        
    } catch (error) {
        res.status(500).json({status: 500,message:error.message})
        
    }

}

module.exports ={getRecipies}
