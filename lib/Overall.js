class Overall {
  constructor(legs, sleeveStyle, fastening, neckstyle, hemLength, pattern, fabric){
    this.legs = legs ;
    this.sleeveStyle = sleeveStyle;
    this.fastening = fastening;
    this.neckstyle = neckstyle;
    this.hemLength = hemLength;
    this.pattern = pattern;
    this.fabric = fabric;
  }

  getSeason(){
    const date = new Date(2021,11,21).toDateString().split(' ');
    const month = date[1];
    switch(month){
    case 'Jan': return 'winter'; break;
    case 'Feb': return 'winter'; break;
    case 'Mar': return 'spring'; break;
    case 'Apr': return 'spring'; break;
    case 'May': return 'spring'; break;
    case 'Jun': return 'summer'; break;
    case 'Jul': return 'summer'; break;
    case 'Aug': return 'summer'; break;
    case 'Sep': return 'autumn'; break;
    case 'Oct': return 'autumn'; break;
    case 'Nov': return 'autumn'; break;
    case 'Dec': return 'winter'; break;
    }
  }

}