import {pool} from '../db.js'

export const getContador = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM contador where id = 1')

    if(rows.length > 0){
        res.json(rows[0])
    }else{
        return res.status(404).json({
            message: 'Contador no encontrado'
        })
    }

}

export const createContador = async (req, res) => {
    const [rows] = await pool.query('SELECT valor FROM contador where id = 1')

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
    const valorNuevoContador = contador[0][0].valor + 1

    await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])

    res.send({
        valor: valorNuevoContador
    })

}

export const decrementarContador = async (req, res) => {
    const contador = await pool.query('SELECT valor FROM contador where id = 1')
    const valorNuevoContador = contador[0][0].valor - 1

    await pool.query('UPDATE contador SET valor = (?)', [valorNuevoContador])

    res.send({
        valor: valorNuevoContador
    })

}

export const deleteContador = async (req, res) => {
    const [result] = await pool.query('DELETE FROM contador WHERE id = 1')

    if(result.affectedRows){
        res.sendStatus(204)
    }else{
        return res.status(404).json({
            message: "contador no encontrado"
        })
    }
    
}