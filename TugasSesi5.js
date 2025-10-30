// Soal ke 1: Cek Lahan dan Cuaca untuk Bercocok Tanam
// === Data Lahan (array 2D) ===
const lahan = [
  ['subur', 'kering', 'subur', 'subur'],
  ['tandus', 'kering', 'kering', 'subur'],
  ['kering', 'subur', 'subur', 'subur'],
  ['kering', 'kering', 'kering', 'kering']
];

// === Data Cuaca (object literal) ===
const weatherData = {
  temperature: 28, // °C
  humidity: 60,    // %
  windSpeed: 10    // km/h
};

// === Fungsi Cek Cuaca ===
function isWeatherIdeal(weather) {
  return (
    weather.temperature >= 20 && weather.temperature <= 30 &&
    weather.humidity > 50 &&
    weather.windSpeed < 15
  );
}

// === Proses Lahan ===
let totalSubur = 0;
let totalDitanami = 0;

for (let i = 0; i < lahan.length; i++) {
  let baris = lahan[i];
  let suburCount = baris.filter(status => status === 'subur').length;
  totalSubur += suburCount;

  // jika lebih dari 50% subur, baris valid
  if (suburCount >= baris.length / 2) {
    totalDitanami += suburCount;
  } else {
    // baris dianggap kering
    lahan[i] = baris.map(() => 'kering');
  }
}

// === Hasil ===
console.log(`Total petak subur: ${totalSubur}`);
console.log(`Total petak yang ditanami: ${totalDitanami}`);

if (isWeatherIdeal(weatherData)) {
  console.log('Cuaca cocok untuk bercocok tanam, sehingga tidak ada peringatan.');
} else {
  console.log('Cuaca tidak cocok untuk bercocok tanam!');
}

// Soal ke 2: Cek Skak Raja oleh Benteng
const board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', 'K', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.']
];

// Cari posisi Raja dan Benteng
let king = null;
let rook = null;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'K') king = [i, j];
    if (board[i][j] === 'R') rook = [i, j];
  }
}

// Cek arah horizontal dan vertikal
function isCheck(king, rook, board) {
  const [kx, ky] = king;
  const [rx, ry] = rook;

  // jika satu baris
  if (kx === rx) {
    const minY = Math.min(ky, ry);
    const maxY = Math.max(ky, ry);
    for (let y = minY + 1; y < maxY; y++) {
      if (board[kx][y] !== '.') return false;
    }
    return true;
  }

  // jika satu kolom
  if (ky === ry) {
    const minX = Math.min(kx, rx);
    const maxX = Math.max(kx, rx);
    for (let x = minX + 1; x < maxX; x++) {
      if (board[x][ky] !== '.') return false;
    }
    return true;
  }

  // kalau beda baris & kolom → aman
  return false;
}

if (isCheck(king, rook, board)) {
  console.log('SKAK!');
} else {
  console.log('Aman');
}
