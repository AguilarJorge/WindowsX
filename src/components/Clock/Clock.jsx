import React, { useEffect, useState } from 'react';
import './Clock.css';

function Clock(props) {
    const {formatoHora, includeTextH, includesHora, separadorFecha, formatoFecha, mesCompleto} = props;
    const dias = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo'
    ]
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ]
    const [date, setDate] = useState(new Date());
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    useEffect(() => {
        let timer = setInterval(() => refresh(), 1000);
        return function clear() {
            clearInterval(timer);
        }
    });
    function refresh() {
        setDate(new Date());
    }

    let horas = date.getHours();
    let minutos = date.getMinutes() > 10 ? date.getMinutes() : '0'+date.getMinutes();
    let segundos = date.getSeconds() > 10 ? date.getSeconds() : '0'+date.getSeconds();
    let ampm;
    if (formatoHora === 12) {
        ampm = horas >= 12 ? 'pm' : 'am';
        horas = horas % 12;
        horas = horas ? horas : 12;
    }
    let horaIncluye = includesHora.split(':');
    let horaString = [];
    horaIncluye.forEach((e, i) => {
        if (e === 'h') { e = horas}
        else if (e === 'm') {e = minutos}
        else if (e === 's') {e = segundos}
        if (i === horaIncluye.length - 1) {
            horaString.push(e);
        } else {
            horaString.push(e, ':');
        }
    })
    horaString = horaString.join('');
    if (includeTextH && formatoHora === 12) {
        horaString = horaString+' '+ampm;
    }
    useEffect(() => {
        setHora(horaString);
    }, [horaString]);

    let diaNum = date.getDate();
    let diaName = dias[date.getDay() - 1];
    let mesName = mesCompleto ? meses[date.getMonth()] : meses[date.getMonth()].substring(0, 3);
    let anio = date.getFullYear();
    let formato = formatoFecha.split('/');
    let fechaString = [];
    formato.forEach((e, i) => {
        let ex = e;
        if (e === 'dd') { e = diaNum}
        else if (e === 'DD') {e = diaName+', '}
        else if (e === 'mm') {e = date.getMonth()}
        else if (e === 'MM') {e = mesName}
        else if (e === 'yy') {e = anio}
        else if (e === 'YY') {e = anio.toString().substr(-2)}
        if (i === formato.length - 1) {
            fechaString.push(e)
        } else {
            if (ex !== 'DD') {
                separadorFecha ? fechaString.push(e, separadorFecha) : fechaString.push(e, ' ');
            } else {
                fechaString.push(e)
            }
        }
    })
    fechaString = fechaString.join('');
    useEffect(() => {
        setFecha(fechaString);
    }, [fechaString]);

    return (
        <div className="clock">
            <div className="hora">{hora}</div>
            <div className="fecha">{fecha}</div>
        </div>
    );
}

export default Clock;
