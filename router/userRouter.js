import express from 'express';
import { writeFile } from 'fs';
const router =express.Router();
import * as fs from 'fs/promises';
import path from 'path'
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname,'../','data','transaction.json');



// creating router
router.get('/',async(req,res)=>{
try{
    const data=await fs.readFile(filepath,'utf-8');
    const js_data=JSON.parse(data);
    res.json(js_data);
}catch(error){
    console.log(error);
}
});


//creating the transaction
router.post('/',async(req,res)=>{
    const newTransaction=req.body;
    try{
const json_data=await fs.readFile(filepath,'utf-8');
    const transactions=JSON.parse(json_data);
    transactions.push(newTransaction);
    await fs.writeFile(filepath,JSON.stringify(transactions,null,2));
    res.json({
        message:'transaction created'
    })
    }catch(error){
        res.status(500).json({
            message:'error'
        })
    }
});

//delete the transaction
router.delete('/:id',async(req,res)=>{
    const id = Number(req.params.id);
    try{
        const dta=await fs.readFile(filepath,'utf-8');
        const JS=JSON.parse(dta);
        const newtransaction=JS.filter(t=>t.id!==id);
        await fs.writeFile(filepath,JSON.stringify(newtransaction,null,2));
        res.status(200).json({
            message:'transaction deleted'
        })
    }catch(error){
        res.status(500).json({
            message:'error'
        })
    }
})



export default router;