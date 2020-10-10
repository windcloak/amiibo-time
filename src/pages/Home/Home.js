import React, { useEffect, useState } from 'react';
// import './Home.scss';
import axios from 'axios';

function Home() {
  const [seriesLoading, setSeriesLoading] = useState(true);
  const [error, setError] = useState(false);
  const [series, setSeries] = useState([]);
  const [amiibos, setAmiibos] = useState([]); // amiibos by series
  const [seriesTerm, setSeriesTerm] = useState('Super Smash Bros.');  // series to show

  const API_SERIES_URL = 'https://www.amiiboapi.com/api/amiiboseries';
  const API_AMIIBOS_URL = 'https://www.amiiboapi.com/api/amiibo/';

  // get all series
  useEffect(() => {
    axios
    .get(API_SERIES_URL)
    .then(res => {
      console.log(res.data);
      setSeries(res.data);
      setSeriesLoading(false);
    })
    .catch(err => {
      console.log(err);
      setError(true);
    })
  }, []);

  // get all amiibos in the series
  useEffect(() => {
    axios
    .get(`${API_AMIIBOS_URL}?amiiboSeries=${seriesTerm}`)
    .then(res => {
      console.log(res.data);
      setAmiibos(res.data);
      // setSeriesLoading(false);
    })
    .catch(err => {
      console.log(err);
      setError(true);
    })
  }, [seriesTerm]); // only rerun if series term changes

    return (
        <div>This is the Home<br/>

</div>
    );
  }
export default Home;
