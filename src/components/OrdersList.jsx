
import React from 'react'

export default function OrdersList({ orders, onUpdate }) {
  if(orders.length===0) return <div className="card"><h2>Pedidos Recibidos</h2><p>No hay pedidos.</p></div>
  return (
    <div className="card">
      <h2>Pedidos Recibidos</h2>
      {orders.map(o=>(
        <div key={o.id} className="order">
          <p><strong>{o.nombre}</strong> — {o.producto} x{o.cantidad}</p>
          <p>{o.direccion}</p>
          <p>Pago: {o.pago} — Estado: {o.estado}</p>
          <div className="actions">
            <button onClick={()=>onUpdate(o.id,{estado:'en ruta'})}>Marcar En Ruta</button>
            <button onClick={()=>onUpdate(o.id,{estado:'entregado'})}>Marcar Entregado</button>
            <button onClick={()=>window.open('https://www.google.com/maps/search/'+encodeURIComponent(o.direccion))}>Ver Ruta</button>
          </div>
        </div>
      ))}
    </div>
  )
}
