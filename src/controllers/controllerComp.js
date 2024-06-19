const knex = require('../database/index');

module.exports ={

    async createComp(req, res){
        let respCliente;
        const {codcli}  = req.body;
        const { codpro }  = req.body;
        const { qtda }  = req.body;
        const { preco }  = req.body;
        

        if(codcli != '' && codpro != ''){
            respCliente = await knex('clientes')
                            .where('codcli','=',codcli );
        }else{
            return res.status(400).send(
                {
                    msg:'Código no cliente ou produto inexistente - antes da consulta !!!!'
                }
            ); 
        } 
        

        if (respCliente != '' ){

            const respProduto = await knex('produtos')
            .where('cod','=',codpro );
            if (respProduto !=''){1
                
                await knex('compras').insert({
                    codcli,
                    codpro,
                    qtda,
                    preco
                });
                return res.status(201).send(
                    {
                        msg:'Cadastro efetuado com sucesso !!!!'
                    }
                );
            }else{
                return res.status(400).send(
                    {
                        msg:'Código do produto inválido !!!!'
                    }
                );
            }
            

        }else{
            return res.status(400).send(
                {
                    msg:'Código no cliente inexistente - Após a consulta!!!!'
                }
            );
        }


       
  
      
    }
}