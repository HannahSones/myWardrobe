class Top {
  constructor (sleeveStyle, fastening, neckStyle, hemLength, fit){
    this.sleeveStyle = sleeveStyle; 
    this.fastening = fastening; 
    this.neckStyle = neckStyle; 
    this.hemLength = hemLength;
    this.fit = fit;
    
  }

  getSeason(){
    return 'summer'; 
  }

  getLayer(seasosn){
    
  }

  setFabric(fabric){
    return this.fabric = fabric; 
  }
}





module.exports = Top;