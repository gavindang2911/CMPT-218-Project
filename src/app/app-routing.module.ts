import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HistoryComponent } from './history/history.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
  { path: 'history', component: HistoryComponent},
  { path: 'chart', component: BarChartComponent},
  { path: '', component: TableComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

