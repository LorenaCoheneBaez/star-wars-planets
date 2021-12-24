import React from 'react';

const UlCard = ({ diameter, climate, terrain}) => {
  return (
    <ul>
      <li><p>Diámetro: {diameter}</p>  </li>
      <li><p>Clima: {climate}</p></li>
      <li><p>Terreno: {terrain}</p></li>
    </ul>
  );
}

export default UlCard;
