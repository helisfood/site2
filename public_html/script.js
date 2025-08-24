document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for fade-in animation on scroll
    const animatedElements = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- کد نهایی برای ساعت و تاریخ زنده تهران با چینش صحیح ---
    const timeSpan = document.getElementById('time-string');

    function updateTehranTime() {
        const now = new Date();
        const timeZone = 'Asia/Tehran';

        // دریافت جداگانه هر بخش از تاریخ
        const weekday = now.toLocaleString('fa-IR', { timeZone, weekday: 'long' });
        const day = now.toLocaleString('fa-IR', { timeZone, day: 'numeric' });
        const month = now.toLocaleString('fa-IR', { timeZone, month: 'long' });
        const year = now.toLocaleString('fa-IR', { timeZone, year: 'numeric' });

        // دریافت زمان
        const time = now.toLocaleString('fa-IR', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        // چیدن دستی رشته تاریخ با ترتیب صحیح
        const finalDateString = `${weekday}، ${day} ${month} ${year}`;

        // نمایش نهایی
        timeSpan.innerHTML = `${finalDateString} | ${time}`;
    }

    updateTehranTime(); 
    setInterval(updateTehranTime, 1000);

});