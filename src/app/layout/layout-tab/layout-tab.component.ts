import { AfterViewInit, Component, ElementRef, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/shared/utils';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-layout-tab',
  templateUrl: './layout-tab.component.html',
  styleUrls: ['./layout-tab.component.css']
})
@Injectable()
export class LayoutTabComponent implements OnInit {

  util = new Util();
  sltLanguageList = false;
  langCode = this.translate.currentLang; // 언어 코드
  langData = {
    // 언어코드별 Text 및 Class
    en: { class: 'eng', text: 'English' },
    kh: { class: 'khmer', text: 'ខ្មែរ' },
  };

  constructor( private router: Router , public translate: TranslateService,  )
  {
   this.translate = translate;
   this.translate.setDefaultLang("en");
  }

  ngOnInit(): void {
  const userInfo =  this.util.getSecureStorage("USER_INFO");
  this.util.setSecureStorage("langCode", this.translate.getDefaultLang() );
   const language = this.util.getSecureStorage("langCode");
  console.log(userInfo);
  console.log(language);
  //this.scroll();
  }
  /* ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    window.addEventListener('scroll', this.scroll, true); //third parameter
  } */

  onClickBody(){
    this.sltLanguageList = false
  }

  scroll = (): void => {

  };

  onScrollTop(){
    $(window).scrollTop(0);
 }

 onChangeLanguage( code: string ){
  this.langCode = code;
  this.translate.use(this.langCode);
  this.util.setSecureStorage('langCode', this.langCode);
 }
}
