import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  text: String = 'API Button';
  @Output()
  btnClick = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.btnClick.emit();
    this.text = "XXXXXX";
    this.apiService.getRoot().subscribe(res => this.setText(res))
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  }
  setText(str: any) {
    console.log(`API Response: ${str.message}`)
    console.log(`API Response: ${this.text}`)
  }

}
