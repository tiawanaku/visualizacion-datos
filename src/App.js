import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Establecemos los estados para los filtros y los datos
  const [distritoMunicipal, setDistritoMunicipal] = useState('');
  const [numeroTestimonio, setNumeroTestimonio] = useState('');
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para obtener los datos desde la API utilizando fetch
  const fetchDatos = async () => {
    setLoading(true);
    
    const url = 'http://localhost:8081/distrito';  // URL correcta de la API

    const requestBody = {
      distritoMunicipal,
      numeroTestimonio
    };

    try {
      const response = await fetch(url, {
        method: 'POST',  // Cambiar a POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),  // Enviamos los filtros en el cuerpo de la solicitud
      });
      const data = await response.json();
      setDatos(data); // Guardamos los datos obtenidos en el estado
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Llamamos a la API cuando los filtros cambian
  useEffect(() => {
    if (distritoMunicipal || numeroTestimonio) {
      fetchDatos();
    }
  }, [distritoMunicipal, numeroTestimonio]); // Cuando cambian los filtros, obtenemos los datos

  return (
    <div className="App">
      <h1>Visualización de Datos de Propietarios</h1>

      {/* Filtros de búsqueda */}
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por Distrito Municipal"
          value={distritoMunicipal}
          onChange={(e) => setDistritoMunicipal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por Número de Testimonio"
          value={numeroTestimonio}
          onChange={(e) => setNumeroTestimonio(e.target.value)}
        />
        <button onClick={fetchDatos}>Buscar</button>
      </div>

      {/* Mostrar los datos obtenidos */}
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="cards-container">
          {datos.map((item) => (
            <div key={item.ID} className="card">
              <h3>{item.DISTRITO_MUNICIPAL}</h3>
              <p><strong>Ubicación Denominación Anterior:</strong> {item.UBICACION_DENOMINACION_ANTERIOR || 'No disponible'}</p>
      <p><strong>Actual Denominación:</strong> {item.ACTUAL_DENOMINACION || 'No disponible'}</p>
      <p><strong>Matrícula:</strong> {item.MATRICULA}</p>
      <p><strong>Partida:</strong> {item.PARTIDA}</p>
      <p><strong>Nro:</strong> {item.NRO || 'No disponible'}</p>
      <p><strong>Reposición Partida:</strong> {item.REPOSICION_PARTIDA || 'No disponible'}</p>
      <p><strong>Actualización:</strong> {item.ACTUALIZACION || 'No disponible'}</p>
      <p><strong>Cambio a Matrícula:</strong> {item.CAMBIO_A_MATRICULA || 'No disponible'}</p>
      <p><strong>Cambio de Razón Social:</strong> {item.CAMBIO_DE_RAZON_SOCIAL || 'No disponible'}</p>
      <p><strong>Cambio de Jurisdicción:</strong> {item.CAMBIO_DE_JURISDICCION || 'No disponible'}</p>
      <p><strong>Solicitud de Transferencia:</strong> {item.SOLIC_DE_TRANSFERENCIA || 'No disponible'}</p>
      <p><strong>Otros:</strong> {item.OTROS || 'No disponible'}</p>
      <p><strong>Número Testimonio:</strong> {item.NUMERO_TESTIMONIO}</p>
      <p><strong>Número Notaría:</strong> {item.NUMERO_NOTARIA || 'No disponible'}</p>
      <p><strong>Notario:</strong> {item.NOTARIO || 'No disponible'}</p>
      <p><strong>Distrito Judicial:</strong> {item.DISTRITO_JUDICIAL || 'No disponible'}</p>
      <p><strong>Testimonio de:</strong> {item.TESTIMONIO_DE || 'No disponible'}</p>
      <p><strong>Reposición Testimonio:</strong> {item.REPOSICION_TESTIMONIO || 'No disponible'}</p>
      <p><strong>Otro:</strong> {item.OTRO || 'No disponible'}</p>
      <p><strong>Superficie Total:</strong> {item.SUPERFICIE_TOTAL}</p>
      <p><strong>Superficie Restante:</strong> {item.SUPERFICIE_RESTANTE || 'No disponible'}</p>
      <p><strong>Notaría de Fe Pública:</strong> {item.NOTARIA_DE_FE_PUBLICA || 'No disponible'}</p>
      <p><strong>Notaría de Gobierno:</strong> {item.NOTARIA_DE_GOBIERNO || 'No disponible'}</p>
      <p><strong>Ley Municipal:</strong> {item.LEY_MUNICIPAL || 'No disponible'}</p>
      <p><strong>Adjudicación:</strong> {item.ADJUDICACION || 'No disponible'}</p>
      <p><strong>Expropiación:</strong> {item.EXPROPIACION || 'No disponible'}</p>
      <p><strong>Cesión de Áreas:</strong> {item.CESION_DE_AREAS || 'No disponible'}</p>
      <p><strong>Detalles:</strong> {item.DETALLES || 'No disponible'}</p>
      <p><strong>Código Catastral:</strong> {item.CODIGO_CATASTRAL || 'No disponible'}</p>
      <p><strong>Equipamiento:</strong> {item.EQUIPAMIENTO || 'No disponible'}</p>
      <p><strong>Área Verde:</strong> {item.AREA_VERDE || 'No disponible'}</p>
      <p><strong>Vías:</strong> {item.VIAS || 'No disponible'}</p>
      <p><strong>Global:</strong> {item.GLOBAL || 'No disponible'}</p>
      <p><strong>Individual:</strong> {item.INDIVIDUAL || 'No disponible'}</p>
      <p><strong>Gravamen Sí:</strong> {item.GRAVAMEN_SI || 'No disponible'}</p>
      <p><strong>Gravamen No:</strong> {item.GRAVAMEN_NO || 'No disponible'}</p>
      <p><strong>Otras Descripciones:</strong> {item.OTRAS_DESCRIPCIONES || 'No disponible'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
