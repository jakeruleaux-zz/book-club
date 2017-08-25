import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { ContactComponent }   from './contact/contact.component';
import { BookclubComponent }   from './bookclub/bookclub.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

const appRoutes: Routes = [
  {
     path: 'about',
     component: AboutComponent
   },
   {
      path: 'contact',
      component: ContactComponent
    },
    {
       path: '',
       component: BookclubComponent
     },
     {
       path: 'members/:id',
       component: MemberDetailComponent
     },
     {
       path: 'admin',
       component: AdminComponent
     },
     {
       path: 'edit-member',
       component: EditMemberComponent
     }
   ];
   export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
