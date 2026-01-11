let nama = "gatot"
let gaji = 200000000
let tunjangan = 20/100 * gaji
let pajak = 0.15 *(gaji + tunjangan)
let gajibersih = gaji + tunjangan - pajak 

console.log (`${nama} nama memiliki gaji sebesar Rp.${gaji}, dan tunjangan sebesar Rp.${tunjangan} dan akan di pajak sebesar Rp.${pajak}, jadi gaji bersih yang di miliki ${nama} adalahRp.${gajibersih}`)