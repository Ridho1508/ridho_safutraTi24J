let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];
 
console.log("Daftar Nilai Siswa:");
studentsScore.forEach(student => {
  console.log(`Nama: ${student.name}, Nilai: ${student.score}`);
}
);

// Siswa dengan nilai tertinggi:
// Nama: Dira
// Nilai: 100

var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  }
];
console.log("\nPemenang MotoGP dari Italia:");
motoGP.forEach(race => {
  if (race.winner.country === 'Italy') {
    console.log(`Sirkuit: ${race.circuit}, Lokasi: ${race.location}, Pemenang: ${race.winner.firstName} ${race.winner.lastName}`);
  }                         
});

// Pemenang MotoGP dari Italia:
// Sirkuit: Losail, Lokasi: Qatar, Pemenang: Andrea Dovizioso
// Sirkuit: De Jerez, Lokasi: Spain, Pemenang: Valentino Rossi
// Sirkuit: Mugello, Lokasi: Italy, Pemenang: Andrea Dovizioso

