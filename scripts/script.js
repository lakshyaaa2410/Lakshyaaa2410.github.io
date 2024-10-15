const downloadButtonClasses = [
	"Connector1",
	"Connector5",
	"Connector6",
	"Single_AC",
	"Dual_AC",
	"Single_DC",
	"Dual_DC",
];

downloadButtonClasses.forEach((btnClass) => {
	const downloadBtns = document.querySelectorAll(`.${btnClass}`);

	const filePath = `../../utils/files/${btnClass}.pdf`;
	downloadBtns.forEach((downloadBtn) => {
		downloadBtn.addEventListener("click", function (event) {
			const fileName = `${event.target.classList[4]}_${event.target.classList[2]}.pdf`;
			console.log(fileName);

			downloadBrochure(filePath, fileName);
		});
	});
});

// File Downloader
const downloadBrochure = function (filePath, fileName) {
	const link = document.createElement("a");
	link.style.display = "none";
	link.href = filePath;
	link.download = fileName;
	document.body.appendChild(link);

	link.click();
	document.body.removeChild(link);
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

// Scrolling Popup Test

document.addEventListener("scroll", function () {
	const sections = document.querySelectorAll("section");
	let currSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (window.scrollY >= sectionTop - sectionHeight / 3)
			currSection = section.getAttribute("id");
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");

		if (link.getAttribute("href") === `${currSection}`)
			link.classList.add("active");
	});
});
