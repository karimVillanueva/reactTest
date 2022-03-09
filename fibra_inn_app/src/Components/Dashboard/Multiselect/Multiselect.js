import React, { useState } from "react";

import { Button } from "react-bootstrap";

import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from 'primereact/dropdown';
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import classes from "./Multiselect.module.css";

const Filters = (props) => {
  const [selectedHotels, setSelectedHotels] = useState(null);
  const [selectedGroupedDate, setSelectedGroupedDate] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [dateArray, setDateArray] = useState(null);
  const [hotelArray, setHotelArray] = useState(null);




  const period = [
    { name: "Mensual", code: "Mensual" },
    { name: "Trimestral", code: "Trimestral" },
    { name: "Anual", code: "Anual" },
  ];

  const hotels = [
    { name: "BJXCE Wyndham Garden Celaya", code: 1 },
    { name: "BJXCR Camino Real Guanajuato", code: 2 },
    { name: "BJXIR Wyndham Garden Irapuato", code: 3 },
    { name: "BJXSI	Wyndham Garden Silao", code: 4 },
    { name: "CJSAT	Holiday Inn Ciudad Juarez", code: 5 },
    { name: "CUNPC	Wyndham Garden Playa del Carmen", code: 6 },
    { name: "CUUCY	Courtyard by Marriott Chihuahua", code: 7 },
    { name: "CUUDE	Casa Grande Delicias", code: 8 },
    { name: "CUUMI	Microtel Inn & Suites by Wyndham Chihuahua", code: 9 },
    { name: "CUUMX	Hampton Inn Chihuahua", code: 10 },
    { name: "CUUWY	Casa Grande Chihuahua", code: 11 },
    { name: "GDLAN	Wyndham Garden Guadalajara", code: 12 },
    { name: "GDLPS	AC Hotels by Marriott Guadalajara Expo", code: 13 },
    { name: "GDLVI	Staybridge Suites Guadalajara Expo", code: 14 },
    { name: "HMORS	Hampton Inn Hermosillo", code: 15 },
    { name: "JUAMI	Microtel Inn & Suites by Wyndham Ciudad Juarez", code: 16 },
    { name: "JUAZO	Holiday Inn Express Juárez", code: 17 },
    { name: "MEXCI	Holiday Inn México Coyoacán", code: 18 },
    { name: "MTTFI	Fairfield Inn & Suites Marriott Coatzacoalcos", code: 19 },
    { name: "MTYCP	Crowne Plaza Monterrey Aeropuerto", code: 20 },
    { name: "MTYGA	Hampton Inn Monterrey Galerias", code: 21 },
    { name: "MTYJW	JW Marriott Monterrey Arboleda", code: 22 },
    { name: "MTYVR	Wyndham Garden Monterrey Valle Real", code: 23 },
    { name: "MTYWI	Westin Monterrey Valle", code: 24 },
    { name: "MTYZO	Holiday Inn Express Monterrey Aeropuerto", code: 25 },
    { name: "MTYZV	Holiday Inn Monterrey Valle", code: 26 },
    { name: "PBCMC	Marriott Puebla Mesón del Ángel", code: 27 },
    { name: "PUELN	Holiday Inn Puebla La Noria", code: 28 },
    { name: "QROHT	Hampton Inn Querétaro", code: 29 },
    { name: "REXHA	Hampton Inn Reynosa Zona Industrial", code: 30 },
    { name: "REXVF	Holiday Inn Reynosa Industrial Poniente", code: 31 },
    { name: "SLWCS	Courtyard by Marriott Saltillo", code: 32 },
    { name: "SLWHA	Hampton Inn Saltillo", code: 33 },
    { name: "SLWZO	Holiday Inn Express Saltillo", code: 34 },
    { name: "TAMAL	Holiday Inn Tampico Altamira", code: 35 },
    { name: "TLUDR	Holiday Inn Express Toluca", code: 36 },
    { name: "TLUMI	Microtel Inn & Suites by Wyndham Toluca", code: 37 },
    { name: "TLUZO	Holiday Inn Express Toluca Aeropuerto", code: 38 },
  ];

  const dates = [
    {
      label: "2015",
      code: "15",
      items: [
        { label: "Jan 2015", value: 151 },
        { label: "Feb 2015", value: 152 },
        { label: "Mar 2015", value: 153 },
        { label: "Apr 2015", value: 154 },
        { label: "May 2015", value: 155 },
        { label: "Jun 2015", value: 156 },
        { label: "Jul 2015", value: 157 },
        { label: "Aug 2015", value: 158 },
        { label: "Sep 2015", value: 159 },
        { label: "Oct 2015", value: 1510 },
        { label: "Nov 2015", value: 1511 },
        { label: "Dic 2015", value: 1512 },
      ],
    },
    {
      label: "2016",
      code: "16",
      items: [
        { label: "Jan 2016", value: 161 },
        { label: "Feb 2016", value: 162 },
        { label: "Mar 2016", value: 163 },
        { label: "Apr 2016", value: 164 },
        { label: "May 2016", value: 165 },
        { label: "Jun 2016", value: 166 },
        { label: "Jul 2016", value: 167 },
        { label: "Aug 2016", value: 168 },
        { label: "Sep 2016", value: 169 },
        { label: "Oct 2016", value: 1610 },
        { label: "Nov 2016", value: 1611 },
        { label: "Dic 2016", value: 1612 },
      ],
    },
    {
      label: "2017",
      code: "17",
      items: [
        { label: "Jan 2017", value: 171 },
        { label: "Feb 2017", value: 172 },
        { label: "Mar 2017", value: 173 },
        { label: "Apr 2017", value: 174 },
        { label: "May 2017", value: 175 },
        { label: "Jun 2017", value: 176 },
        { label: "Jul 2017", value: 177 },
        { label: "Aug 2017", value: 178 },
        { label: "Sep 2017", value: 179 },
        { label: "Oct 2017", value: 1710 },
        { label: "Nov 2017", value: 1711 },
        { label: "Dic 2017", value: 1712 },
      ],
    },
    {
      label: "2018",
      code: "18",
      items: [
        { label: "Jan 2018", value: 181 },
        { label: "Feb 2018", value: 182 },
        { label: "Mar 2018", value: 183 },
        { label: "Apr 2018", value: 184 },
        { label: "May 2018", value: 185 },
        { label: "Jun 2018", value: 186 },
        { label: "Jul 2018", value: 187 },
        { label: "Aug 2018", value: 188 },
        { label: "Sep 2018", value: 189 },
        { label: "Oct 2018", value: 1810 },
        { label: "Nov 2018", value: 1811 },
        { label: "Dic 2018", value: 1812 },
      ],
    },
    {
      label: "2019",
      code: "19",
      items: [
        { label: "Jan 2019", value: 191 },
        { label: "Feb 2019", value: 192 },
        { label: "Mar 2019", value: 193 },
        { label: "Apr 2019", value: 194 },
        { label: "May 2019", value: 195 },
        { label: "Jun 2019", value: 196 },
        { label: "Jul 2019", value: 197 },
        { label: "Aug 2019", value: 198 },
        { label: "Sep 2019", value: 199 },
        { label: "Oct 2019", value: 1910 },
        { label: "Nov 2019", value: 1911 },
        { label: "Dic 2019", value: 1912 },
      ],
    },
    {
      label: "2020",
      code: "20",
      items: [
        { label: "Jan 2020", value: 201 },
        { label: "Feb 2020", value: 202 },
        { label: "Mar 2020", value: 203 },
        { label: "Apr 2020", value: 204 },
        { label: "May 2020", value: 205 },
        { label: "Jun 2020", value: 206 },
        { label: "Jul 2020", value: 207 },
        { label: "Aug 2020", value: 208 },
        { label: "Sep 2020", value: 209 },
        { label: "Oct 2020", value: 2010 },
        { label: "Nov 2020", value: 2011 },
        { label: "Dic 2020", value: 2012 },
      ],
    },
    {
      label: "2021",
      code: "21",
      items: [
        { label: "Jan 2021", value: 211 },
        { label: "Feb 2021", value: 212 },
        { label: "Mar 2021", value: 213 },
        { label: "Apr 2021", value: 214 },
        { label: "May 2021", value: 215 },
        { label: "Jun 2021", value: 216 },
        { label: "Jul 2021", value: 217 },
        { label: "Aug 2021", value: 218 },
        { label: "Sep 2021", value: 219 },
        { label: "Oct 2021", value: 2110 },
        { label: "Nov 2021", value: 2111 },
        { label: "Dic 2021", value: 2112 },
      ],
    },
    {
      label: "2022",
      code: "21",
      items: [
        { label: "Jan 2022", value: 221 },
        { label: "Feb 2022", value: 222 },
      ],
    },
  ];


  const optionsDate = dates.count;
  const optionsHotel = hotels.length;

  const groupedItemTemplate = (option) => {
    return (
      <div className="flex align-items-center country-item">
        <img
          alt={option.label}
          src="images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://icons.veryicon.com/png/128/miscellaneous/zzcion/cc-dot-o.png")
          }
          className={classes.flag}
        />
        <div>{option.label}</div>
      </div>
    );
  };

  //Asignacion de valores

  const managePeriod = (e) => {
    setSelectedPeriod(e.value);
  };
  const manageHotels = (e) => {
    setSelectedHotels(e.value);
  };
  const manageDate = (e) => {
    setSelectedGroupedDate(e.value);
  };

  // Set Values

  const setValues = () => {
    let datearray = null;
    let parArray = [];
    let dateArrayTest = [];
    if (selectedGroupedDate.length > 0) {
      datearray = selectedGroupedDate.map((e) => {
        let fstr = e.toString().substr(0, 2);
        let sstr = e.toString().substr(2);
        //console.log( `year: parseInt(${fstr}), month: parseInt(${sstr}) `);

        return {
          year: parseInt(fstr),
          month: parseInt(sstr),
        };
      });
    }

    let group = datearray.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }

      acc[item.year].push(item.month);
      return acc;
    }, {});

    for (let key in group) {
      parArray.push(
        `(year("Data Final"."Fecha") IN (20${key}) AND month("Data Final"."Fecha") IN (${group[
          key
        ]
          .sort(function (a, b) {
            return a - b;
          })
          .join()}))`
      );
      dateArrayTest.push(
        `year("Data Final"."Fecha") IN (20${key}) AND month("Data Final"."Fecha") IN (${group[
          key
        ]
          .sort(function (a, b) {
            return a - b;
          })
          .join()}`
      );
    }


    //*******calculando hotel**********

    let hotelArray = [];
    let newPath = null;
    var datePath = null;
    var datePathSql = null;
    var hotelPath = null;
    var hotelPathSql = null;

    if (selectedHotels.length > 0) {
      let entries = Object.entries(selectedHotels);
      console.log(entries)
      entries.map((el)=>{
        hotelArray.push(el[1].code)
      })

    }


    if (!!selectedGroupedDate && selectedGroupedDate.length !== optionsDate) {
      datePath = `(${parArray.join(" OR ")})`;
      datePathSql = `(${dateArrayTest.join(") OR ")})`;
    }
    if (!!hotelArray && hotelArray.length !== optionsHotel) {
      selectedHotels.length > 1 ?
        (hotelPath = `"Data Final"."Hotel" IN (${hotelArray
            .sort(function (a, b) {
              return a - b;
            })
            .join()})`) :
        (hotelPath = `"Data Final"."Hotel" =(${hotelArray})`);
      selectedHotels.length > 1 ?
        (hotelPathSql = `"Data Final"."Hotel" IN (${hotelArray
            .sort(function (a, b) {
              return a - b;
            })
            .join()})`) :
        (hotelPathSql = `"Data Final"."Hotel" =(${hotelArray})`);
    }

    var zoho = `?ZOHO_CRITERIA=(${!!datePath ? datePath : ""}${
      !!datePath && !!hotelPath ? " AND " : ""
    }${!!hotelPath ? hotelPath : ""})`;

/*
    leer con props el valor src del primer iframe
    if (props.actualPath.indexOf("?") > 0) {
      let getPath = props.actualPath.split("?")[0];
      newPath = `${getPath}${!!datePath || !!hotelPath ? zoho : ""}`;
    } else {
      newPath = `${props.actualPath}${!!datePath || !!hotelPath ? zoho : ""}`;
    }
    
*/


    //console.log(`Last route ${zoho}`);
    let newRoute = `${!!datePathSql ? datePathSql : ""}${
      !!datePathSql && !!hotelPathSql ? " AND " : ""
    }${!!hotelPathSql ? hotelPathSql : ""})`;
    if (!datePathSql) {
      newRoute = newRoute.slice(0, -1);
    }

    console.log(`ruta APIII ${newRoute}`);
    console.log(`ruta  zoho ${zoho}`);


    
  };

  return (
    <div className={classes.multiselect_demo}>
      <div className={classes.card}>
        <Dropdown
          value={selectedPeriod}
          options={period}
          onChange={(e) => {
            managePeriod(e);
          }}
          optionLabel="name"
          placeholder="Periodo"
        />
        <h5>Fecha</h5>
        <MultiSelect
          value={selectedGroupedDate}
          options={dates}
          onChange={(e) => {
            manageDate(e);
          }}
          optionLabel="label"
          optionGroupLabel="label"
          maxSelectedLabels={3}
          optionGroupChildren="items"
          optionGroupTemplate={groupedItemTemplate}
          placeholder="Selecionar fecha"
        />
        <h5>Hotel</h5>
        <MultiSelect
          value={selectedHotels}
          options={hotels}
          onChange={(e) => {
            manageHotels(e);
          }}
          optionLabel="name"
          maxSelectedLabels={3}
          placeholder="Selecionar hotel"
        />

        <Button variant="primary" className={classes.btn} onClick={setValues}>
          Aplicar
        </Button>
      </div>
    </div>
  );
};

export default Filters;
