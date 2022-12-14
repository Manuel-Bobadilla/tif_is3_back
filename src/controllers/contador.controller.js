import {pool} from '../db.js'

export function incrementar(valor){
    return (valor + 1)
}

export function decrementar(valor){
    return (valor - 1)
}

export const getContador = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM contador where id = 1')

    res.set('Access-Control-Allow-Origin', '*')

    if(rows.length){
        res.json(rows[0])
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
        const valorNuevoContador = incrementar(contador[0][0].valor)

        await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])
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
        const valorNuevoContador = decrementar(contador[0][0].valor)

        await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])
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

export const reiniciarContador = async (req, res) => {
    const contador = await pool.query('SELECT valor FROM contador where id = 1')
    
    res.set('Access-Control-Allow-Origin', '*')

    if(contador [0][0]){
        await pool.query('UPDATE contador SET valor = 0')
        res.send({
            valor: 0
        })
    }else{
        return res.status(404).json({
            message: 'Contador no encontrado'
        })
    }

}