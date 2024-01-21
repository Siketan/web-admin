type TokoTani = {
	id: number;
	namaProducts: string;
	harga: number;
	stok: number;
	satuan: string;
	fotoTanaman: string;
	deskripsi: string;
	status: string;
	dataPerson: DataPerson;
};

type FilteredTokoTani = {
	kecamatan: string;
	desa: string;
	NIK: string;
	nama: string;
	namaProducts: string;
	stok: string;
	satuan: string;
	harga: string;
	deskripsi: string;
	fotoProduk: string;
	status: string;
};

type DataPerson = {
	NIK: string;
	NIP: string;
	NoWa: string;
	alamat: string;
	desa: string;
	foto: string;
	kecamatan: string;
	nama: string;
};