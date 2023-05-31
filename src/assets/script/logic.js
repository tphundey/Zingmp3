// Lắng nghe sự kiện click trên nút phát
    const playBtn = document.querySelector('.btn-toggle-play');
    const image = document.querySelector('.image-music img');
    
    playBtn.addEventListener('click', function() {
        console.log(a);
        console.log('a');
      // Kiểm tra xem audio có đang phát hay không
      if (audio.paused) {
        // Nếu đang tạm dừng, thêm lớp rotate vào hình ảnh
        image.classList.add('rotate');
      } else {
        // Nếu đang phát, xóa lớp rotate khỏi hình ảnh
        image.classList.remove('rotate');
      }
    });