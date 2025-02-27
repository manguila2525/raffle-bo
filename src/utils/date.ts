export const getDayComplete = (day: Date) => {
    const DT = new Date(day);
    const D = DT.getDay();
    const M = DT.toLocaleString("es-ES", { month: "short", year: "numeric" });
    const completeDay = `${D} ${M}`;
    return completeDay;
  };

  export const getHour = (day: Date): string => {
    const DT = new Date(day);
    const H = DT.getHours();
    const ampm = H >= 12 ? 'pm' : 'am';
    let formattedHours = H % 12;
    formattedHours = formattedHours ? formattedHours : 12; // The hour '0' should be '12'
    
    return `${formattedHours} ${ampm}`;
  };