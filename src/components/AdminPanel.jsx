
import React from 'react'

export default function AdminPanel({ orders, onUpdate }) {
  const total = orders.length
  const pendientes = orders.filter(o=>o.estado==='pendiente').length
  const enruta = orders.filter(o=>o.estado==='en ruta').length
  const entregados = orders.filter(o=>o.estado==='entregado').length

  return (
    <div className="card">
      <h2>Panel Administrativo</h2>
      <p>Total pedidos: {total}</p>
      <p>Pendientes: {pendientes}</p>
      <p>En ruta: {enruta}</p>
      <p>Entregados: {entregados}</p>
      <h3>Pedidos</h3>
      {orders.map(o=>(
        <div key={o.id} className="order-small">
          <p>{o.nombre} — {o.producto} — {o.estado}</p>
          <div className="actions">
            <button onClick={()=>onUpdate(o.id,{estado:'en ruta'})}>En ruta</button>
            <button onClick={()=>onUpdate(o.id,{estado:'entregado'})}>Entregado</button>
          </div>
        </div>
      ))}
    </div>
  )
}
