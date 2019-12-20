import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: '8xc01B_m9lY', song: 'NONSTOP Vinamix | Liên Khúc Nhạc Trẻ Remix Đón Xuân 2020 Vol 4 | Nonstop Vinahouse Việt Mix 2020'},
    {id: 'JGwWNGJdvx8', song: 'Ed Sheeran - Shape of You'},
    {id: 'RgKAFK5djSk', song: 'See You Again'},
    {id: 'tcHJodG5hX8', song: 'Why Do I?'},
    // {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
