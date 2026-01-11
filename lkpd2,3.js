let totaldetik = 5440
let jam = Math.floor(totaldetik/3600) //untuk mengambil hitungan jam dan tidak ada 
let sisajam =  totaldetik % 3600 //untuk mengambil sisa detik dari jam 

let menit = Math.floor (sisajam/60)// untuk mengambi menit dari sisa detik  yang ada 
let sisamenit = sisajam % 60 // untuk mengambil sisa detik dari sisa menit 

console.log(`${jam} ini adalah jam, ${menit} inih adalah menit
    detik ${sisamenit}`)
