
import React, { useState } from 'react'

export default function OrderForm({ onAdd }) {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [producto, setProducto] = useState('agua')
  const [cantidad, setCantidad] = useState(1)
  const [pago, setPago] = useState('efectivo')

  const submit = (e) => {
    e.preventDefault()
    if(!nombre || !direccion) { alert('Completa nombre y dirección'); return }
    onAdd({ nombre, direccion, producto, cantidad: Number(cantidad), pago })
    setNombre(''); setDireccion(''); setCantidad(1); setPago('efectivo')
  }

  return (
    <form onSubmit={submit} className="card">
      <h2>Registrar Pedido</h2>
      <label>Nombre
        <input value={nombre} onChange={e=>setNombre(e.target.value)} />
      </label>
      <label>Dirección
        <input value={direccion} onChange={e=>setDireccion(e.target.value)} />
      </label>
      <label>Producto
        <select value={producto} onChange={e=>setProducto(e.target.value)}>
          <option value="agua">Agua Purificada</option>
          <option value="hielo">Hielo</option>
          <option value="gas">Gas</option>
        </select>
      </label>
      <label>Cantidad
        <input type="number" min="1" value={cantidad} onChange={e=>setCantidad(e.target.value)} />
      </label>
      <label>Método de pago
        <select value={pago} onChange={e=>setPago(e.target.value)}>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="debito">Tarjeta débito</option>
        </select>
      </label>
      <button type="submit">Enviar Pedido</button>
    </form>
  )
}
