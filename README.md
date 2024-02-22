# Web API - Kampus
Sebuah web API sederhana yang memiliki tema website perkuliahan/kampus

## Link Server
* Local = http://localhost:3000
* Deployed = https://webapi-kampus.vercel.app

## Daftar Endpoint
* "/api/v1/mahasiswa", GET => menampilkan seluruh data mahasiswa
* "/api/v1/mahasiswa", POST => menginput data mahasiswa pada tabel Mahasiswas
* "/api/v1/mahasiswa/:id", GET => menampilkan data mahasiswa berdasarkan parameter id
* "/api/v1/mahasiswa/:id", PUT => mengubah/mengupdate data mahasiswa berdasarkan parameter id
* "/api/v1/mahasiswa/:id", DELETE => menghapus data mahasiswa berdasarkan parameter id
* "/api/v1/mahasiswa/and/dosen", POST => menginput data mahasiswa dan dosen secara sekaligus pada tabel Mahasiswas dan Dosens
* "/api/v1/dosen?dosenFakultas=", GET => menampilkan data dosen berdasarkan kolom dosenFakultas yang dicari

## Dokumentasi
Swagger UI = http://localhost:3000/api-docs
