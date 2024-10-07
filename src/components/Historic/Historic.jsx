import React from 'react'
import './historic.css'
import MarsModel from '../MarsModel/MarsModel'

const Historic = () => {
	return (
		<div className='historic'>
			<p className="title">Historic seismic</p>
        <p className="content">Namazu presents a clean, noise-free snapshot of historic seismic data from Mars. Instead of complex 3D models, users can view clear, annotated screenshots of seismic events over time. This helps researchers quickly identify patterns in Marsquakes and understand the planet's seismic landscape.</p>

				<MarsModel />
		
		</div>
	)
}

export default Historic