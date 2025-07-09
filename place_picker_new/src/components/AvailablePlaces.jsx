import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlace } from '../http.js'
import { useFetch } from '../hooks/useFetch.js';

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlace ();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
       
      resolve(sortedPlaces);
    });
  });
  
}

export default function AvailablePlaces({ onSelectPlace }) {
  
  const {isFetching, error, fetchedData : availablePlaces} = useFetch(fetchSortedPlaces, []);

  if (error){
    return (
      <ErrorPage title='An error occoured!' message={error.message} />
    );
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading ={isFetching}
      fetchingText = "Fetching the places....."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
