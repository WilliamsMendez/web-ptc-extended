import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

const COLORES = ['#2e5a8a', '#5D8BB5', '#8eacc8']

export default function DeviceViews({ dispositivos = [] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={dispositivos} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90}>
          {dispositivos.map((entry, index) => (
            <Cell key={index} fill={COLORES[index % COLORES.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}