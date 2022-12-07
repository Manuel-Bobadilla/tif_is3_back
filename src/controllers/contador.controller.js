import {pool} from '../db.js'

export const getContador = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM contador where id = 1')

    res.set('Access-Control-Allow-Origin', '*')

    if(rows.length){
        res.json(rows[0])
        console.log("mostrando")
    }else{
        return res.status(404).json({
            message: 'Contador no encontrado'
        })
    }

}

export const createContador = async (req, res) => {
    const [rows] = await pool.query('SELECT valor FROM contador where id = 1')

    res.set('Access-Control-Allow-Origin', '*')

    if(!rows.length){
        const [rows] = await pool.query('INSERT INTO contador (valor, id) VALUES (0, 1)')
        res.send({
            id: rows.insertId,
            valor: 0,
        })
    }else{
        return res.sendStatus(418)
    }

}

export const incrementarContador = async (req, res) => {
    const contador = await pool.query('SELECT valor FROM contador where id = 1')
    
    res.set('Access-Control-Allow-Origin', '*')

    if(contador [0][0]){
        const valorNuevoContador = contador[0][0].valor + 1

        await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])
        console.log("incrementado")
        res.send({
            valor: valorNuevoContador
        })
    }else{
        return res.status(404).json({
            message: 'Contador no encontrado'
        })
    }
    

}

export const decrementarContador = async (req, res) => {
    const contador = await pool.query('SELECT valor FROM contador where id = 1')
    
    res.set('Access-Control-Allow-Origin', '*')

    if(contador [0][0]){
        const valorNuevoContador = contador[0][0].valor - 1

        await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])
        console.log("decremento")
        res.send({
            valor: valorNuevoContador
        })
    }else{
        return res.status(404).json({
            message: 'Contador no encontrado'
        })
    }

}

export const deleteContador = async (req, res) => {
    const [result] = await pool.query('DELETE FROM contador WHERE id = 1')

    res.set('Access-Control-Allow-Origin', '*')

    if(result.affectedRows){
        res.sendStatus(200)
    }else{
        return res.status(404).json({
            message: "contador no encontrado"
        })
    }
    
}