document.addEventListener('DOMContentLoaded', function () {
	// Numbers animation
	const boxes = document.querySelectorAll('.prize')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.1 && !entry.target.classList.contains('loaded')) {
				entry.target.classList.add('loaded')

				let time = 1,
					cc = 1

				$('.offer .prize span').each(function() {
					let i = 0,
						num = $(this).data('num'),
						step = time / num,
						that = $(this),
						int = setInterval(() => {
							if (i <= num) {
								that.text(i.toLocaleString())
							} else {
								that.text(num.toLocaleString())
								cc = cc + 2
								clearInterval(int)
							}

							i = i + 1000
						}, step)
				})
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))


	// Footer disclaimer
	$('footer .disclaimer .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// 'Up' button
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})
})



window.addEventListener('scroll', function () {
	// 'Up' button
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)
})