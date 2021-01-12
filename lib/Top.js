class Top {
  constructor (sleeveStyle, fastening, neckStyle, hemLength, fit){
    this.sleeveStyle = sleeveStyle;
    this.fastening = fastening;
    this.neckStyle = neckStyle;
    this.hemLength = hemLength;
    this.fit = fit;

  }

  getSeason(){
    const date = new Date().toDateString().split(' ');
    const month = date[1];
    switch(month){
    case 'Jan': return {month: month, season: 'winter', }; break;
    case 'Feb': return {month: month, season: 'winter', }; break;
    case 'Mar': return {month: month, season: 'spring', }; break;
    case 'Apr': return {month: month, season: 'spring', }; break;
    case 'May': return {month: month, season: 'spring', }; break;
    case 'Jun': return {month: month, season: 'summer', }; break;
    case 'Jul': return {month: month, season: 'summer', }; break;
    case 'Aug': return {month: month, season: 'summer', }; break;
    case 'Sep': return {month: month, season: 'autumn', }; break;
    case 'Oct': return {month: month, season: 'autumn', }; break;
    case 'Nov': return {month: month, season: 'autumn', }; break;
    case 'Dec': return {month: month, season: 'winter', }; break;
    }
  }

}




module.exports = Top;