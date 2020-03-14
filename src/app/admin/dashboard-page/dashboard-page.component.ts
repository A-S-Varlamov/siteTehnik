import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'
import { PostsService } from '../../shared/posts.service'
import { Post } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  postSub: Subscription
  searchStr = ''

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSub = this.postsService.getAll().subscribe( posts => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe()
    }
  }

  remove( id: string ) {

  }
}
