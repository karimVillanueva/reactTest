import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import classes from './Mensual.module.css'

const Mensual =() =>{
  const [option, setOption] = useState(null);

  const options = [
    { name: 'ADR', value:"https://analytics.zoho.com/open-view/1933165000006437074/458556bba6785c05358bae8e1d794e44"},         
    { name: 'Flowthrough', value:"https://analytics.zoho.com/open-view/1933165000006560220/6d59e4b3581c55c679283a7a9e7c8792"},
    { name: 'Ingresos A y B', value:"https://analytics.zoho.com/open-view/1933165000006437110/ee1a326bf3d8d6c07ff47cc4c7b4b4f6"},    
    { name: 'Ingresos Habitacionales', value:"https://analytics.zoho.com/open-view/1933165000006450001/74a998e849c474197bfb7dd7dc3be463"},
    { name: 'Ocupación', value:"https://analytics.zoho.com/open-view/1933165000006437021/f327ea2e243ff01c39e14b42da8eb1a9"},
    { name: 'Penetración RevPAR', value:"https://analytics.zoho.com/open-view/1933165000006437040/46ba03668163e930c16900684a52aeb2"},    
    { name: 'UBO', value:"https://analytics.zoho.com/open-view/1933165000006560135/7ecde29b7d2b8c2b2e3bb6f99792e9a8"},   
    { name: 'Gastos de Habitaciones', value:"https://analytics.zoho.com/open-view/1933165000007086632/db6e59f600e52dde1a064ff0e3179437"},   
    { name: '% Gastos de Habitaciones', value:"https://analytics.zoho.com/open-view/1933165000007086413/a244e8e57f9d817edb8b205d9f88f1cf"},  
    { name: 'Gastos de Habitaciones (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007086247/0040006f776a08b99a2574b88967b7a5"},    
    { name: 'Comisiones Agencias Directas', value:"https://analytics.zoho.com/open-view/1933165000007086033/310e5ebfe642a99b8b3e73e0dd68f452"},   
    { name: '% Comisiones Agencias Directas', value:"https://analytics.zoho.com/open-view/1933165000007085822/819f711811f3c555cbe5373d11ed94df"},     
    { name: 'Comisiones Agencias Directas (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007085626/f69659b9e1fbf8e1d473229cdbb21550"},
    { name: 'Desayuno Continental', value:"https://analytics.zoho.com/open-view/1933165000007085408/afaf4dcd466214bbb6e0e39363f1b745"},      
    { name: '% Desayuno Continental', value:"https://analytics.zoho.com/open-view/1933165000007085183/96c59efcf806783f58fe0f9bf89ad762"},      
    { name: 'Desayuno Continental (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007084875/ea7b6d8804b46ad1c5f5187126dddd8d"},      
    { name: 'Gastos de Admininstración', value:"https://analytics.zoho.com/open-view/1933165000007084648/0d522cd07f8234a201a5fde985020f45"},      
    { name: '% Gastos de Administración', value:"https://analytics.zoho.com/open-view/1933165000007084436/02fe3c98a1733064def9ff6ca709a7f1"},      
    { name: 'Gastos de Administación (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007084220/9170966470f747c76d82ec95fd61589b"},      
    { name: 'Gastos de Venta', value:"https://analytics.zoho.com/open-view/1933165000007084006/f58ea6c21ec473d63905f7744f42082d"},      
    { name: '% Gastos de Venta', value:"https://analytics.zoho.com/open-view/1933165000007083810/31ee814f5f22ed80300af53861a0d8e7"},      
    { name: 'Gastos de Venta (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007083609/cd758a1a51f24e96fe742b969e6d7ad3"},      
    { name: 'Gastos de Mantenimiento', value:"https://analytics.zoho.com/open-view/1933165000007083229/16754fb6fef4c5567fcb48274157e975"},      
    { name: '% Gastos de Mantenimiento', value:"https://analytics.zoho.com/open-view/1933165000007083426/147cc70e0b1d2a284d62bad64ace15fc"},      
    { name: 'Gastos de Mantenimiento (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007083030/9cfb812d54c5207da8db8ac2c67b497c"},      
    { name: 'Gastos de Energéticos', value:"https://analytics.zoho.com/open-view/1933165000007081836/f50e3f448afe9bec055028e1f843153e"},      
    { name: '% Gastos de Energéticos', value:"https://analytics.zoho.com/open-view/1933165000007081434/8b486e74de37ff95e502f94c1af91401"},   
    { name: 'Gastos de Energéticos (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007081637/0de2f9c5aa831ce6077fbbd078e8fe69"},   
    { name: 'Gastos de Regalías', value:"https://analytics.zoho.com/open-view/1933165000007081025/0d67d9d3250ce3f0c8445ff931d66cf5"},   
    { name: '% Gastos de Regalías', value:"https://analytics.zoho.com/open-view/1933165000007087106/b23488de44a3b46a7c3cf7ae6983da2b"},   
    { name: 'Gastos de Regalías (por cuarto)', value:"https://analytics.zoho.com/open-view/1933165000007081238/9a4b0eeab061c00b8a8625238a3efb68"},    
    { name: '% Ocupación', value:"https://analytics.zoho.com/open-view/1933165000007073017/567395b30efc410c3516371ed4a765cb"},    
    { name: 'Ranking Ocupación Plaza', value:"https://analytics.zoho.com/open-view/1933165000007073079/010e0c9963d5d06ac54e4aeb015749af"},    
    { name: 'Tarifa Promedio (ADR)', value:"https://analytics.zoho.com/open-view/1933165000007073140/c81724043772ec88e16d1219da6eac9b"},    
    { name: 'Ranking ADR Plaza', value:"https://analytics.zoho.com/open-view/1933165000007073174/c78caed26ee973547bcd1543e065943d"},   
    { name: 'Rev Par', value:"https://analytics.zoho.com/open-view/1933165000006437040/46ba03668163e930c16900684a52aeb2"},   
    { name: 'Ranking Rev Par', value:"https://analytics.zoho.com/open-view/1933165000007073209/274530a49c8417c7d340b533f422eb99"},    
    { name: '% Penetración REV Par', value:"https://analytics.zoho.com/open-view/1933165000007091191/de32507e827888f49ca0bc3aa1a7c34d"},    
    { name: 'Servicios Especializados', value:"https://analytics.zoho.com/open-view/1933165000007073277/13b17ea72f94491161287f9c07cf0c00"},    
    { name: '% Servicios Especializados', value:"https://analytics.zoho.com/open-view/1933165000007073322/e7295cbb7fb8161ac5c562210fcbf74e"},    
    { name: 'Servicios Especializados (por cuarto ocupado)', value:"https://analytics.zoho.com/open-view/1933165000007073360/15c13106a762b60c849951f588b33acf"},    
    { name: 'Costo Taktik', value:"https://analytics.zoho.com/open-view/1933165000007073413/8dac16f472d12b7719e5a40c1bc07725"},   
    { name: '% Costo Taktik', value:"https://analytics.zoho.com/open-view/1933165000007073448/81c217e49a4f2b8f526f6e7ec2dc5fdb"},   
    { name: 'Costo Taktik (por cuarto ocupado)', value:"https://analytics.zoho.com/open-view/1933165000007073480/04052dfb60de8b9efa0d99356448e675"},    
    { name: 'Ingresos habitaciones real', value:"https://analytics.zoho.com/open-view/1933165000007073512/244671ebb16e5a0ddd031fa61df3bc81"},  
    { name: 'Ingreso habitaciones Presupuesto', value:"https://analytics.zoho.com/open-view/1933165000007073550/c2586f2b1189c9d9da7e36d205a0ee97"},   
    { name: 'Ingreso habitaciones Año Anterior', value:"https://analytics.zoho.com/open-view/1933165000007073585/c714f418a214b0b04f3e38f1ee19ed57"},  
    { name: 'Tarifa Promedio (neta de comisiones y desayuno)', value:"https://analytics.zoho.com/open-view/1933165000007073659/ccd0f13cc08e994e554df67c409efeb5"},          
  ]


  return(
    <>
      <iframe className={classes.kpis} id="kpis" src="https://analytics.zoho.com/open-view/1933165000006168432/672c4c75f98b1888c885674d13c15134"></iframe>
      <Dropdown value={option} options={options} onChange={(e) => setOption(e.value)} optionLabel="name" className={classes.btn} filter={true} placeholder="ADR"/>
      <iframe className={classes.graficas} name="iframe" id="youriframe" src={ option || "https://analytics.zoho.com/open-view/1933165000006437074/458556bba6785c05358bae8e1d794e44"}></iframe>
    </>
  );

} 

export default Mensual; 