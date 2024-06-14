const knex = require('../database/index');

module.exports ={

    async createComp(req, res){
        const {codcli}  = req.body;
        const { codpro }  = req.body;
        const { qtda }  = req.body;
        const { preco }  = req.body;
        
        const respCliente = await knex('clientes')
                            .where('codcli','=',codcli );
       
        if (respCliente != '' ){
            const respProduto = await knex('produtos')
            .where('cod','=',codpro );
            if (respProduto !=''){
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
                        msg:'Código do produto errado !!!!'
                    }
                );
            }
            

        }else{
            return res.status(400).send(
                {
                    msg:'Código no cliente errado !!!!'
                }
            );
        }


       
  
      
    }
}