import { useEffect, useRef, useState } from "react";

const MAP_SCRIPT_ID = "imprenta-dorrego-gmaps-js";
let loadPromise: Promise<void> | null = null;

function loadMapsApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if ((window as unknown as { google?: { maps?: unknown } }).google?.maps) {
    return Promise.resolve();
  }
  if (loadPromise) return loadPromise;

  const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
  const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID ?? "imprenta-dorrego";

  loadPromise = new Promise<void>((resolve, reject) => {
    const callbackName = `__initGMap_${Math.random().toString(36).slice(2)}`;
    (window as unknown as Record<string, unknown>)[callbackName] = () => {
      resolve();
      delete (window as unknown as Record<string, unknown>)[callbackName];
    };
    const script = document.createElement("script");
    script.id = MAP_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=${callbackName}&channel=${channel}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("No se pudo cargar Google Maps"));
    document.head.appendChild(script);
  });
  return loadPromise;
}

// Estilo oscuro/grafito para integrar con el fondo onyx de la sección de contacto.
const DARK_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#0f0f12" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0f0f12" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a8a8f" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c9a227" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#9a9a9f" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#161618" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1d1d22" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#26262c" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#7a7a7f" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2a2a30" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#1a1a1f" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#101015" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3a3a40" }] },
];

export function MapView({
  lat,
  lng,
  zoom = 15,
  title,
}: {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadMapsApi()
      .then(() => {
        if (cancelled || !ref.current) return;
        const map = new google.maps.Map(ref.current, {
          center: { lat, lng },
          zoom,
          disableDefaultUI: true,
          zoomControl: true,
          styles: DARK_STYLE,
          backgroundColor: "#0f0f12",
        });
        new google.maps.Marker({
          position: { lat, lng },
          map,
          title: title ?? "Imprenta Dorrego",
        });
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [lat, lng, zoom, title]);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center border border-paper/15 bg-onyx/60 p-6 text-center text-sm text-paper/50">
        No se pudo cargar el mapa en este momento.
      </div>
    );
  }

  return <div ref={ref} className="h-full w-full" />;
}
