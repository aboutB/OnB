document.addEventListener('mousemove', function (event) {
    const cursor = document.querySelector('.cursor');
    const trailingCursor = document.querySelector('.trailing-cursor');

    // 커서 위치 업데이트
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

    // 지연된 커서 위치 업데이트
    setTimeout(() => {
        trailingCursor.style.transform = `translate(${event.clientX - 10}px, ${event.clientY - 10}px)`;
    }, 50);
});