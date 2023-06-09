import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IconsEmailComponent } from './icons-email/icons-email.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioHeadComponent } from './portfolio-head/portfolio-head.component';
import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartsiteContentComponent } from './startsite-content/startsite-content.component';
import { SimpleCrmComponent } from './simple-crm/simple-crm.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IconsEmailComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioHeadComponent,
    JoinComponent,
    ElPolloLocoComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    StartsiteContentComponent,
    SimpleCrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
