import React from "react";

export default function Card({ item }: { item: TokoTani }) {
	return (
		<a
			className="cursor-pointer hover:bg-green-primary hover:rounded-md p-2"
			href={`https://api.whatsapp.com/send?phone=${item.dataPerson.NoWa}`}
			target="_blank"
			rel="noreferrer"
		>
			<div className="bg-white rounded-md p-3 flex flex-col gap-1 shadow-2xl h-full">
				<img
					className="aspect-square"
					src={item.fotoTanaman}
					alt={item.namaProducts}
				/>
				<h4 className="font-bold text-sm text-green-primary">
					{item.namaProducts.toUpperCase()}
				</h4>
				<h4
					className="mt-auto font-bold text-sm"
					style={{
						color: "orange",
					}}
				>
					Harga : Rp. {item.harga}
				</h4>
				<h4
					className="font-bold text-sm"
					style={{
						color: "grey",
					}}
				>
					Stok : {item.stok}
				</h4>
				<button className="rounded-full w-full text-center text-sm text-white font-bold bg-green-primary">
					Hubungi
				</button>
			</div>
		</a>
	);
}