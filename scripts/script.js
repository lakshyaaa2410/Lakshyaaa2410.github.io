// File Downloader
const downloadBrochure = function (filePath, fileName) {
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

// Swipe In Animation
function addScrollAnimation() {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0,
		}
	);

	const elementsToAnimate = document.querySelectorAll(
		".animLeft, .animRight"
	);

	elementsToAnimate.forEach((element) => {
		observer.observe(element);
	});
}
addScrollAnimation();

// Navlink Highlight
const navLinks = document.querySelectorAll(".links");

navLinks.forEach((navLink) => {
	navLink.addEventListener("mouseover", function () {
		navLinks.forEach((link) => {
			if (link !== navLink) {
				link.style.opacity = "0.5";
			} else {
				link.style.opacity = "1";
			}
		});
	});

	navLink.addEventListener("mouseout", function () {
		navLinks.forEach((link) => {
			link.style.opacity = "1";
		});
	});
});
