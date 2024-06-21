const knex = require('../database/index');

module.exports = {

    async prodsGeral(req, res){
        const result = await knex('produtos');
        return res.json(result);
    },
    async prodsNome(req, res){
        const { nome } = req.params;
        const result = await knex('produtos').where('nome','like','%'+ nome +'%');
        return res.json(result);
    },


    
    async createProd(req, res){
        const {nome}  = req.body;
        const { descri }  = req.body;
        const { fabricante }  = req.body;
        const { qtda }  = req.body;
        const { preco }  = req.body;
        const { custo }  = req.body;
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
        const { cod } = req.params;

        await knex('produtos')
              .where({ cod })
              .del();
        
        return res.status(201).send(
                {
                    msg:'Registro deletado com sucesso !!!!'
                }
            );
     }
    
}