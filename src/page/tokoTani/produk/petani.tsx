import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { ProductsPetani } from "@/infrastruture";
import { getTokoTani } from "../../../infrastucture/toko";
import { Image } from "@mantine/core";
import LoadingAnimation from "../../../components/loadingSession";
import React from "react";
import { set } from "core-js/core/dict";

function ProdukPetani() {
	const [datas, setDatas] = useState<FilteredTokoTani[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getTokoTani().then((res) => {
			const response = res.data.data as TokoTani[];
			const filterData = response.map((obj) => {
				return Object.keys(obj).reduce((result, key) => {
					if (key === "dataPerson") {
						result = { ...result, ...obj[key] };
					} else {
						result[key] = obj[key];
					}
					return result;
				}, {});
			});
			console.log(filterData);
			setDatas(filterData as FilteredTokoTani[]);
			setLoading(false);
		});
	}, []);
	const [filters, setFilters] = useState({
		kecamatan: "",
		desa: "",
		NIK: "",
		nama: "",
		namaProducts: "",
		stok: "",
		satuan: "",
		harga: "",
		deskripsi: "",
		fotoProduk: "",
		status: "",
	});

	const handleFilterChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		column: string
	) => {
		// console.log(e.target.value, column);
		setFilters((prevFilters) => ({
			...prevFilters,
			[column]: e.target.value,
		}));
	};

	const filteredData = datas.filter((item) => {
		return Object.keys(filters).every((key) => {
			// console.log("tes", key, filters[key], item[key]);
			if (filters[key] !== "") {
				if (typeof item[key] === "number") {
					return (item[key] as Number)
						.toString()
						.includes(filters[key]);
				} else if (typeof item[key] === "string") {
					console.log("tes");
					return (item[key] as String)
						.toLowerCase()
						.includes(filters[key].toLowerCase());
				}
			}
			return true;
		});
	});
	const totalData = filteredData.length;

	return (
		<div className="flex justify-center pt-12">
			<div className="w-full max-w-screen-xl shadow-xl rounded-lg overflow-x-auto">
				<p className="text-right mt-4 px-10">
					<strong>Jumlah Data :</strong> {totalData} Data Produk
					Petani
				</p>
				<div className=" pt-10">
					<div className="h-[calc(100vh-200px)] overflow-y-scroll">
						<table className="min-w-full">
							<thead className="bg-slate-100">
								<tr>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Kecamatan
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Desa
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										NIK Petani
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Nama Petani
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Nama Produk
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Stok
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Satuan
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Harga
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Deskripsi
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Foto Produk
									</th>
									<th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
										Status Produk
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.kecamatan}
												onChange={(e) =>
													handleFilterChange(
														e,
														"kecamatan"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Kecamatan"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.desa}
												onChange={(e) =>
													handleFilterChange(
														e,
														"desa"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Desa"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.NIK}
												onChange={(e) =>
													handleFilterChange(e, "NIK")
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter NIK Petani"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.nama}
												onChange={(e) =>
													handleFilterChange(
														e,
														"nama"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Nama Petani"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.namaProducts}
												onChange={(e) =>
													handleFilterChange(
														e,
														"namaProducts"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Produk"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.stok}
												onChange={(e) =>
													handleFilterChange(
														e,
														"stok"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Filter"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.satuan}
												onChange={(e) =>
													handleFilterChange(
														e,
														"satuan"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Satuan"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.harga}
												onChange={(e) =>
													handleFilterChange(
														e,
														"harga"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Harga"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.deskripsi}
												onChange={(e) =>
													handleFilterChange(
														e,
														"deskripsi"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Deskripsi"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.fotoProduk}
												onChange={(e) =>
													handleFilterChange(
														e,
														"fotoProduk"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Foto Produk"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
									<td className="sticky bg-white top-[40px] z-10 px-4 py-2 border">
										<div className="flex items-center">
											<input
												type="text"
												value={filters.status}
												onChange={(e) =>
													handleFilterChange(
														e,
														"status"
													)
												}
												className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
												placeholder="Filter Status Produk"
											/>
											<FontAwesomeIcon
												icon={faFilter}
												className="text-gray-500 ml-2"
											/>
										</div>
									</td>
								</tr>
								{filteredData.map((item, i) => (
									<tr
										key={i}
										style={{
											backgroundColor:
												i % 2 === 0
													? "#f7fafc"
													: "#ffffff",
										}}
									>
										<td className="px-4 py-2 border">
											{item.kecamatan}
										</td>
										<td className="px-4 py-2 border">
											{item.desa}
										</td>
										<td className="px-4 py-2 border">
											{item.NIK}
										</td>
										<td className="px-4 py-2 border">
											{item.nama}
										</td>
										<td className="px-4 py-2 border">
											{item.namaProducts}
										</td>
										<td className="px-4 py-2 border">
											{item.stok}
										</td>
										<td className="px-4 py-2 border">
											{item.satuan}
										</td>
										<td className="px-4 py-2 border">
											{item.harga}
										</td>
										<td className="px-4 py-2 border">
											{item.deskripsi}
										</td>
										<td className="px-4 py-2 border">
											<Image
												width={200}
												height={80}
												mx="auto"
												radius="md"
												src={item.fotoProduk}
											/>
										</td>
										<td className="px-4 py-2 border">
											{/* {item.status} */}
											status produk
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{loading && <LoadingAnimation session={undefined} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProdukPetani;
