import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zingchart',
  templateUrl: './zingchart.component.html',
  styleUrls: ['./zingchart.component.scss']
})
export class ZingchartComponent {

  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    this.http.get<any>('http://localhost:8080/api/products').subscribe(
      data => {
        this.products = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef;

  songPlaying: number | null = null;
  songDurations: number[] = [];

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.updateSongDurations();
    });
  }

  toggleSong(index: number) {
    const audioPlayer = document.getElementById(`audioPlayer${index}`) as HTMLAudioElement;

    if (audioPlayer.paused) {
      this.pauseAllSongs(); // Dừng tất cả các bài hát đang chạy trước khi chạy bài hát mới
      audioPlayer.play();
      this.songPlaying = index;
    } else {
      audioPlayer.pause();
      this.songPlaying = -1; // Gán giá trị -1 để không có bài hát nào đang chạy
    }
  }

  pauseAllSongs() {
    const audioPlayers = document.getElementsByTagName('audio');
    for (let i = 0; i < audioPlayers.length; i++) {
      const audioPlayer = audioPlayers[i] as HTMLAudioElement;
      audioPlayer.pause();
    }
  }


  setSongPlaying(index: number | null) {
    this.songPlaying = index;
  }

  updateSongDurations() {
    const audioPlayer = this.audioPlayer.nativeElement as HTMLAudioElement;
    const currentTime = Math.floor(audioPlayer.currentTime);

    if (currentTime && currentTime !== Infinity && this.songPlaying !== null) {
      this.songDurations[this.songPlaying] = currentTime;
    }
  }

}
