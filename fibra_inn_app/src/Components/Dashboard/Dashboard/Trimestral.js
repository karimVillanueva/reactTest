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
      <iframe className={classes.kpis} id="kpis" src="https://analytics.zoho.com/open-view/1933165000006578137/12c003abd005198ff8e87b4f952b475a"></iframe>
      <Dropdown value={option} options={options} onChange={(e) => setOption(e.value)} optionLabel="name" className={classes.btn} filter={true} placeholder="ADR"/>
      <iframe className={classes.graficas} name="iframe" id="youriframe" src={ option || "https://analytics.zoho.com/open-view/1933165000006560716/8c9e43b2d28088544b4e404f50006dfd"}></iframe>
    </>
  );

} 

export default Mensual; 

/*

            <option value="https://analytics.zoho.com/open-view/1933165000006560716/8c9e43b2d28088544b4e404f50006dfd">
                ADR</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006574127/1fae5c4418d5c4e2c538c002cbbc3771">
                Flowthrough</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006574018/876cb40979f0749eb221217418c4c260">
                Ingresos A y B</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006560423/e50f962748df7af9c9a31b666003895c">
                Ingresos Habitaciones</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006560519/365ae1bd5316614ca8ec6e158f7415cd">
                Ocupación</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006560815/b89477996a066341084176ee48d5b083">
                RevPAR</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006574280/53094f09ae4eb612810335b1dbb09c24">
                UBO</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007086700/a1c6c80db436b291ebdc31b62ee9969c">
                Gastos de Habitaciones</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007086510/8f8d8603deacae8ac530036c1e33bb9d">
                % Gastos de Habitaciones</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007086298/0bb66113e26178d5069ea6d00e0da5d6">
                Gastos de Habitaciones (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007086128/323386ffa3638bd9c20dde07b4d1a928">
                Comisiones Agencias Directas</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007085921/5278795484dddd7bd84cb29c38af2383">
                % Comisiones Agencias Directas</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007085696/e923e5c6c69c586cd026c14c9c7e4904">
                Comisiones Agencias Directas (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007085500/0ef5b972020904d04a84d6c9b3047577">
                Desayuno Continental</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007085282/0d0cdf509551c6def1c337ebae66219c">
                % Desayuno Continental</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007084943/d045d8a0f8b2187c38b5ca846bfd0938">
                Desayuno Continental (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007084760/e89adf6cde2b971c4f44784b9c8af622">
                Gastos de Admininstración</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007084526/7b9ea47618ef1f360393ae6c59b02e8b">
                % Gastos de Administración</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007084314/d520d266a45f648a21648471fccf5b77">
                Gastos de Administación (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007084098/c619c84d9f992b4be975778d2468e076">
                Gastos de Venta</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007083880/3ccf0311f569c14e16324957692aa683">
                % Gastos de Venta</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007083684/69c22514da4c7b89a3f31cd2a86b4d15">
                Gastos de Venta (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007083304/1631aea8509bbfa3c51773c20b398cab">
                Gastos de Mantenimiento</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007083494/f22e964ca9a7be151ae65429b6b6e5d6">
                % Gastos de Mantenimiento</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007083107/60a829a9e4c8215efdbf2760b3194625">
                Gastos de Mantenimiento (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007081911/d4cf197b6e8ba6b5acc412a22880abef">
                Gastos de Energéticos</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007081511/7784f786f62526b5de64ff672836da12">
                % Gastos de Energéticos</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007081714/35f0e0c90478c072c31f3c368cc1daac">
                Gastos de Energéticos (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007081112/b9000597726bb07a338390cafaa78d8f">
                Gastos de Regalías</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007087201/ad40b090b6b2c12aa46a32a4f7596843">
                % Gastos de Regalías</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007081308/a46b1b0ec462b184198bd676719ed09e">
                Gastos de Regalías (por cuarto)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007073702/a7210b025d12ecffb574a37606d15e44">
                %Ocupación</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007073858/fbcb408fad645996d336d15842da2896">
                Ranking Ocupación Plaza</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007073926/5b0672d4ed6a125a9e4a268306e46cb3">
                Tarifa Promedio (ADR)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007073994/2a00f6378dcd5b609fd24ecf6a1eef54">
                Ranking ADR Plaza</option>
            <option value="https://analytics.zoho.com/open-view/1933165000006560815/b89477996a066341084176ee48d5b083">
                Rev Par</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091084/0659fc550003e0965050542572ae46d9">
                Ranking Rev Par</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091156/d27774a4be0a9c0f008396992bb03d25">
                % Penetración REV Par</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091271/a7a723d19fc99a98d6a6aac2a511942a">
                Servicios Especializados</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091360/51bcec869da3052152e5affff49a238d">
                % Servicios Especializados</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091428/151ef0d936f9963e805f8e0a7ba48f4f">
                Servicios Especializados (por cuarto ocupado)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091494/b755cfb591a6f1462a123f34498cccfb">
                Costo Taktik</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091608/2fe95e640f2fe5539b3e88b003ddd648">
                % Costo Taktik</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091678/32de335693d552b0459b4bfdfad1d802">
                Costo Taktik (por cuarto ocupado)</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091746/8753e7c38662c8450953ac751317ebcd">
                Ingresos habitaciones real</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091814/2e8f859fb576d1a1db85964e71daece8">
                Ingreso habitaciones Presupuesto</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091882/3ef9f3c68ca45841bfe1b8c196c2a572">
                Ingreso habitaciones Año Anterior</option>
            <option value="https://analytics.zoho.com/open-view/1933165000007091950/cfa88c9c9cfbb44d0310e84990da8dff">
                Tarifa Promedio (neta de comisiones y desayuno)</option>


*/