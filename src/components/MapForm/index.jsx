import Map from "../GoogleMap"
import TravelForm from "../TravelForm"

const MapForm = () => {
  const center = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired map center coordinates
  const zoom = 12; // Adjust the zoom level as needed


  return (
    <>
    <div className="mt-[100px]">
    <Map center={center} zoom={zoom}/><TravelForm/>
    </div>
    </>
  )
}

export default MapForm