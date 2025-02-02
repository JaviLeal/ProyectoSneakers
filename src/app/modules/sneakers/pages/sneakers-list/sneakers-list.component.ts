import { Component, OnInit } from '@angular/core';
import { SneakersService } from '../../services/sneakers.service';  
import { Sneaker } from '../../../../interfaces/sneaker.interface';

@Component({
  selector: 'app-sneakers-list',
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.scss']
})
export class SneakersListComponent implements OnInit {

  sneakers: Sneaker[] = [];

  constructor(private sneakersService: SneakersService) { }

  ngOnInit(): void {
    this.sneakersService.getAllSneakers().subscribe((data) => {
      this.sneakers = data;
    });
  }

}
