import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

export default function SevenDaysViewsGraph({ historial = [] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={historial}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pageViews" stroke="#5D8BB5" strokeWidth={2} dot={{ fill: '#5D8BB5' }} />
      </LineChart>
    </ResponsiveContainer>
  )
}