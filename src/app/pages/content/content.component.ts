import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:String="https://i0.wp.com/teamcomics.com.br/wp-content/uploads/2023/03/LOONEY2.jpg?fit=1170%2C658&ssl=1"
  @Input()
  contentTitle:string="MINHA NOTICIA"
  @Input()
  contentDescription:string="LOONEY TUNES"
  private id:string = "0"
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value:any) =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string ){
    const result = dataFake.filter(article=>{
      return article.id===id
    })[0]
    console.log(result)
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
  
  
}
