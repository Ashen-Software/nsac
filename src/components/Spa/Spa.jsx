import './spa.css';

const Spa = () => {
  return (
    <div className="spa">
      <p className="title">Signal processing algorithm</p>
      <p>
			To accurately detect seismic events on Mars, Namazu uses the Short-Term Average / Long-Term Average (STA/LTA) algorithm. This method is widely used in seismology to differentiate between noise and real seismic activity. The algorithm works by comparing the average signal amplitude over a short time window (STA) with the average amplitude over a longer time window (LTA).
      </p>
      <ul>
        <li>
				STA (Short-Term Average): This window captures sudden changes in the signal, such as the onset of a seismic wave.
        </li>
        <li>
				LTA (Long-Term Average): This window calculates the background noise level, helping to establish a baseline for comparison.
        </li>
      </ul>
      <p>
			When the STA/LTA ratio exceeds a certain threshold, the algorithm flags that portion of the signal as a potential seismic event. This method is effective for detecting low-amplitude signals in noisy environments, like the surface of Mars, where seismic data often has a low signal-to-noise ratio. By using STA/LTA, Namazu can reliably filter out noise and highlight the meaningful seismic data, making it easier to analyze and visualize the activity on Mars.
      </p>
    </div>
  );
};

export default Spa;