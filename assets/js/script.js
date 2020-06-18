const detectMob = () => {
	const toMatch = [
		/Android/i,
		/webOS/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i,
	]

	return toMatch.some((toMatchItem) => {
		return navigator.userAgent.match(toMatchItem)
	})
}

const swiper = new Swiper('.slides', {
	direction: 'vertical',
	effect: 'fade',
	mousewheel: {
		releaseOnEdges: true,
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 600
})
