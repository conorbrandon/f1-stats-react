import React, { useState, useRef, useEffect } from "react";
import styles from "./Mapbox.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import mapboxgl from 'mapbox-gl';

interface MapboxProps {
  races: ErgastRace[],
  activePopup?: number,
  mapType: string,
}

export const Mapbox: React.FC<MapboxProps> = ({ races, activePopup, mapType }) => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement>();
  const racesRef = useRef<ErgastRace[]>(races);
  const activePopupRef = useRef<number | undefined>(activePopup);

  const [markerMap, setMarkerMap] = useState<mapboxgl.Marker[]>([]);
  const style: string = 'mapbox://styles/mapbox/outdoors-v9';
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(0.5);

  const addMarkersForRaces = (races: ErgastRace[], map: mapboxgl.Map) => {
    console.log('addMarkersForRaces', { races, map });
    setMarkerMap([]);
    let [sumLng, sumLat] = [0, 0];
    setMarkerMap(races.map((race, i) => {
      // console.log(race.Circuit.Location);
      let lng = parseFloat(race.Circuit.Location.long);
      let lat = parseFloat(race.Circuit.Location.lat);
      sumLng += lng;
      sumLat += lat;
      const marker: mapboxgl.Marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ closeButton: true, closeOnClick: true })
            .setHTML(`
        <div><a class="no-underline" style="color: black; border: solid white 1px;" href="/${race.season}/${race.round}" >
          <h3>Round ${race.round}</h3>    
          <h2>${race.raceName}</h2> 
          <h4>${race.Circuit.circuitName}</h4>
          <p>${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
        </a></div>`)
        )
        .addTo(map as mapboxgl.Map);
      return marker;
    }));
    sumLng /= races.length;
    sumLat /= races.length;
    map?.setCenter([sumLng | 0, sumLat | 0]);
  };
  const removeMarkersForRaces = () => {
    console.log('removeMarkersForRaces', { markerMap })
    markerMap?.forEach(marker => marker.remove());
  };

  useEffect(() => {
    const initializeMap = (setMap: any, mapContainer: any) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style,
        center: [lng, lat],
        zoom
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.on("load", () => {
        console.log('map loaded');
        setMap(map);
        addMarkersForRaces(races, map);
      });
    };
    if (!map) initializeMap(setMap, mapContainer);
    else if (map) {
      if (racesRef.current !== races) {
        console.log('races changed', { races });
        removeMarkersForRaces();
        if (map) addMarkersForRaces(races, map as mapboxgl.Map);
        racesRef.current = races;
      } else {
        console.log('races constant');
      }
    }
  }, [races]);
  useEffect(() => {
    console.log({activePopup}, {activePopupRef: activePopupRef.current});
    if (activePopup !== undefined) {
      console.log('show');
      markerMap[activePopup]?.togglePopup();
    } 
    if (activePopupRef.current !== undefined) {
      console.log('hide');
      markerMap[activePopupRef.current]?.togglePopup();
    }
    activePopupRef.current = activePopup;
  }, [activePopup]);


  return (
    <div id="map" className={`${styles.map} ${styles[mapType]}`} ref={el => (mapContainer.current = el as HTMLDivElement)}></div>
  );
};
