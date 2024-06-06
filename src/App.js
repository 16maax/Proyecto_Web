import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos de react-datepicker
import "./App.css"; 

const App = () => {
  return (
    <div className="app">
      <h1>Gestión de Pedidos</h1>
      <div className="pedido-form">
        <h2>Agregar Nuevo Pedido</h2>
        <form>
          <div className="form-group">
            <label>Cliente:</label>
            <input type="text" name="cliente" />
          </div>
          <div className="form-group">
            <label>Fecha de Compra:</label>
            <input type="date" name="fechaCompra" />
          </div>
          <div className="form-group">
            <label>Orden de Compra:</label>
            <input type="text" name="ordenCompra" />
          </div>
          <div className="form-group">
            <label>Modelo:</label>
            <input type="text" name="modelo" />
          </div>
          <div className="form-group">
            <label>Costo:</label>
            <input type="text" name="costo" />
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <input type="text" name="precio" />
          </div>
          <div className="form-group">
            <label>Fecha de Solicitud:</label>
            <input type="date" name="fechaSolicitud" />
          </div>
          <div className="form-group">
            <label>Fecha de Entrega:</label>
            <input type="date" name="fechaEntrega" />
          </div>
          <div className="form-group">
            <label>Guía para Cliente:</label>
            <input type="text" name="guiaCliente" />
          </div>
          <button type="submit">Agregar Pedido</button>
        </form>
      </div>
      <div className="pedido-list">
        <h2>Lista de Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha de Compra</th>
              {/* Otros encabezados de la tabla... */}
            </tr>
          </thead>
          <tbody>
            {/* Muestra de ejemplo de un pedido */}
            <tr>
              <td>Cliente de ejemplo</td>
              <td>2024-06-05</td>
              {/* Otros datos del pedido de ejemplo... */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
