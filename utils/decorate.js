function extract(from){

  var years, months, days, hours, minutes, seconds;
  seconds = Math.floor(from / 1000);
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  months = Math.floor(days / 30);
  days = days % 30;
  years = Math.floor(months / 12);
  months = months % 12;

  return {
      years,
      months, 
      days, 
      hours, 
      minutes, 
      seconds
  };
  
}

function calculate({years, months, days, hours, minutes, seconds}){

  if(years){
      return years > 1 ? `Há ${years} anos` : `Há ${years} ano`;
  }

  if(months){
      return months > 1 ? `Há ${months} meses` : `Há ${months} mês`;
  }

  if(days){
      return days > 1 ? `Há ${days} dias` : `Há ${days} dia`;
  }

  if(hours){
      return hours > 1 ? `Há ${hours} horas` : `Há ${hours} hora`;
  }

  if(minutes){
      return minutes > 1 ? `Há ${minutes} minutos` : `Há ${minutes} minuto`;
  }

  if(seconds){
      return seconds > 1 ? `Há ${seconds} segundos` : `Há ${seconds} segundo`;
  }else{
      return 'Agora';
  }

}

function decorate(date){
  return calculate(extract(date));
}

module.exports = decorate;