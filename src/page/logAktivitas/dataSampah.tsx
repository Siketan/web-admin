import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";

const breadcrumbItems = [
	{ title: "Dashboard", href: "/" },
	{ title: "Log Aktivitas" },
].map((item, index) => (
	<Anchor href={item.href} key={index} className="text-white opacity-50">
		{item.title}
	</Anchor>
));

const DataSampah = () => {
	return (
		<div>
			<Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
			<h3 className="text-white text-2xl font-bold mt-4">
				Log Aktivitas
			</h3>
			<div className="min-h-[70vh] w-full flex justify-center items-center">
				<p className="text-lg font-bold text-white">Coming Soon...</p>
			</div>
		</div>
	);
};

export default DataSampah;
