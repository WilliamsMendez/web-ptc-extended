import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useEffect, useState } from 'react'

export default function ViewsPorHora({ horas = [] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={horas}>
        <XAxis dataKey="hora" tick={{ fontSize: 11 }} interval={2} />
        <YAxis hide />
        <Tooltip wrapperClassName='text-brand-primary/70' />
        <Bar dataKey="sesiones" radius={[3, 3, 0, 0]}>
          {horas.map((entry, index) => (
            <Cell key={index} fill={entry.sesiones === Math.max(...horas.map(h => h.sesiones)) ? '#2e5a8a' : '#8eacc8'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
