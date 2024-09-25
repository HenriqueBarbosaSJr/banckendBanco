const knex = require('../database/index');

module.exports = {
    
    async prodsGeral(req, res){

        try {
            const result = await knex('produtos').orderBy('codpro');
            return res.json(result);
        
        } catch (error) {
            return res.status(400).json({'error': error});
        } 
         

    },


    async prodsNome(req, res){

        try {

            const { nome } = req.params;
            const result = await knex('produtos').where('nome','like','%'+ nome +'%');
            return res.json(result);
            
        } catch (error) {
            return res.status(400).json({'error': error});
        }



    },


    
    async createProd(req, res){

        try {
            const {nome}  = req.body;
            const { descri }  = req.body;
            const { fabricante }  = req.body;
            const { qtda }  = req.body;
            const { preco }  = req.body;
            const { custo }  = req.body;
            console.log(descri);
            
            await knex('produtos').insert({
                nome,
                descri,
                fabricante,
                qtda,
                preco,
                custo
            });
            return res.status(201).send(
                {
                    msg:'Cadastro efetuado com sucesso !!!!'
                }
            );
            
        } catch (error) {
            return res.status(400).json({'error': error});
        }
       
    },

    async updateProd(req, res){
        const { cod } = req.params;
        const {nome}  = req.body;
        const { descri }  = req.body;
        const { fabricante }  = req.body;
        const { qtda }  = req.body;
        const { preco }  = req.body;
        const { custo }  = req.body;

        await knex('produtos').update({
            nome,
            descri,
            fabricante, 
            qtda,
            preco,
            custo
        }).where({ cod });
        return res.status(201).send(
            {
                msg:'Atualização efetuada com sucesso !!!!'
            }
        );
    },
    async deleteProd(req, res){
        const { codpro } = req.params;
        try {
                const response = await knex('compras').where({codpro});
                if (response.length!=0){
                    return res.status(409).send({msg:'Registro não pode ser deletado, consta venda na tabela compras'});
                    
                }else{
                    await knex('produtos')
                    .where({ codpro })
                    .del();
                    return res.status(200).send({ msg:'Registro deletado com sucesso !!!!'});
                }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: error });
        }
     }
}