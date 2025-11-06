
import React, { useState, useEffect } from 'react'
import OrderForm from './components/OrderForm'
import OrdersList from './components/OrdersList'
import AdminPanel from './components/AdminPanel'

export default function App() {
  const [orders, setOrders] = useState(() => {
    try {
      const raw = localStorage.getItem('orders_v1')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('orders_v1', JSON.stringify(orders))
  }, [orders])

  const addOrder = (order) => {
    setOrders(prev => [...prev, {...order, id: Date.now(), estado: 'pendiente'}])
  }

  const updateOrder = (id, changes) => {
    setOrders(prev => prev.map(o => o.id === id ? {...o, ...changes} : o))
  }

  return (
    <div className="container">
      <h1>Aguas Las Mercedes - Prototipo React</h1>
      <div className="grid">
        <div>
          <OrderForm onAdd={addOrder} />
          <OrdersList orders={orders} onUpdate={updateOrder} />
        </div>
        <div>
          <AdminPanel orders={orders} onUpdate={updateOrder} />
        </div>
      </div>
    </div>
  )
}
