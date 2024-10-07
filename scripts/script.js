const downloadFile = function (filePath, fileName) {
	// const filePath = "../utils/files/Test.pdf";
	// const fileName = "Demo.pdf";

	downloadBtn.addEventListener("click", () => {
		const link = document.createElement("a");
		link.style.display = "none";
		document.body.appendChild(link);

		link.href = filePath;
		link.download = fileName;

		setTimeout(() => {
			link.click();
			document.body.removeChild(link);
		}, 100);
	});
};
