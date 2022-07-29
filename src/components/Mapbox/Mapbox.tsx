import React, { useState, useRef, useEffect } from "react";
import styles from "./Mapbox.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import mapboxgl from 'mapbox-gl';
import { FlagHelper } from "../../helpers/FlagHelper";
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { ErgastCircuit } from "../../model/ErgastCircuit";

type MapType = 'vertical' | 'horizontal' | 'square' | 'smallVertical' | 'smallSquare';
interface MapboxProps {
  races: ErgastRace[],
  circuit?: ErgastCircuit,
  activePopup?: number,
  mapType: MapType,
  zoomParam?: number
}

export const Mapbox: React.FC<MapboxProps> = ({ races, activePopup, mapType, zoomParam, circuit }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement>();
  const racesRef = useRef<ErgastRace[] | ErgastCircuit>(races.length ? races : circuit || []);
  const activePopupRef = useRef<number | undefined>(activePopup);

  const [markerMap, setMarkerMap] = useState<mapboxgl.Marker[]>([]);
  const [style, setStyle] = useState<string>(isDarkMode ? 'mapbox://styles/mapbox/navigation-night-v1' : 'mapbox://styles/mapbox/outdoors-v11');
  useEffect(() => isDarkMode ? setStyle('mapbox://styles/mapbox/navigation-night-v1') : setStyle('mapbox://styles/mapbox/outdoors-v11'), [isDarkMode]);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(zoomParam || 0.5);

  const addMarkersForRaces = (races: ErgastRace[], map: mapboxgl.Map) => {
    // console.log('addMarkersForRaces', { races, map });
    setMarkerMap([]);
    let [sumLng, sumLat] = [0, 0];
    setMarkerMap(races.map((race, i) => {
      // console.log(race.Circuit.Location);
      let lng = parseFloat(race.Circuit.Location.long);
      let lat = parseFloat(race.Circuit.Location.lat);
      sumLng += lng;
      sumLat += lat;
      const marker: mapboxgl.Marker = new mapboxgl.Marker({ color: isDarkMode ? 'darkred' : 'red' })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ closeButton: true, closeOnClick: true, className: isDarkMode ? styles.popupdark : styles.popuplight })
            .setHTML(`
        <div class=${isDarkMode ? styles.popupdark : styles.popuplight}>
          <a class="no-underline" href="/${race.season}/${race.round}" >
          <h3>Round ${race.round}</h3>    
          <h2>${race.raceName}</h2> 
          <h4>${race.Circuit.circuitName}</h4>
          <p>${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
          <img src='${FlagHelper.getFlag(race.Circuit.Location.country)}' />
        </a></div>`)
        )
        .addTo(map as mapboxgl.Map);
      return marker;
    }));
    sumLng /= races.length;
    sumLat /= races.length;
    // console.log({ sumLng, sumLat })
    map?.setCenter([sumLng | 0, sumLat | 0]);
  };
  const addMarkerForCircuit = (circuit: ErgastCircuit, map: mapboxgl.Map) => {
    let lng = parseFloat(circuit.Location.long);
    let lat = parseFloat(circuit.Location.lat);
    new mapboxgl.Marker({ color: isDarkMode ? '#8b0000' : 'red' })
    .setLngLat([lng, lat])
    .setPopup(
      new mapboxgl.Popup({ closeButton: true, closeOnClick: true, className: isDarkMode ? styles.popupdark : styles.popuplight })
        .setHTML(`
    <div>
      <h2>${circuit.circuitName}</h2>
      <p>${circuit.Location.locality}, ${circuit.Location.country}</p>
      <img src='${FlagHelper.getFlag(circuit.Location.country)}' />
    </div>`)
    )
    .addTo(map as mapboxgl.Map);
    map.setCenter([lng, lat]);
  };
  const removeMarkersForRaces = () => {
    // console.log('removeMarkersForRaces', { markerMap })
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
        // console.log('map loaded');
        setMap(map);
        if (races.length) addMarkersForRaces(races, map as mapboxgl.Map);
        else if (circuit) addMarkerForCircuit(circuit, map as mapboxgl.Map);
      });
    };
    if (!map) initializeMap(setMap, mapContainer);
    else if (mapContainer.current) initializeMap(setMap, mapContainer);
    else if (map) {
      if (racesRef.current !== races) {
        // console.log('races changed', { races });
        removeMarkersForRaces();
        if (map) {
          if (races.length) addMarkersForRaces(races, map as mapboxgl.Map);
          else if (circuit) addMarkerForCircuit(circuit, map as mapboxgl.Map);
        }
        racesRef.current = races;
      } else {
        // console.log('races constant');
      }
    }
  }, [races, mapContainer.current, style]);
  useEffect(() => {
    // console.log({activePopup}, {activePopupRef: activePopupRef.current});
    if (activePopup !== undefined) {
      // console.log('show');
      markerMap[activePopup]?.togglePopup();
    } 
    if (activePopupRef.current !== undefined) {
      // console.log('hide');
      markerMap[activePopupRef.current]?.togglePopup();
    }
    activePopupRef.current = activePopup;
  }, [activePopup]);


  return (
    // ${isDarkMode ? styles.mapdark : styles.maplight}
    <div id="map" className={`${styles.map} ${styles[mapType]}`} ref={el => (mapContainer.current = el as HTMLDivElement)}></div>
  );
};
