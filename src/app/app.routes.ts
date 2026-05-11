import { Routes } from '@angular/router';
import { WhoWeAre } from './pages/who-we-are/who-we-are';
import { BusinessIdea } from './pages/business-idea/business-idea';
import { ProductDefinition } from './pages/product-definition/product-definition';
import { LegalForm } from './pages/legal-form/legal-form';
import { InvestmentFinance } from './pages/investment-finance/investment-finance';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'quienes-somos', pathMatch: 'full' },
  { path: 'quienes-somos', component: WhoWeAre },
  { path: 'idea-negocio', component: BusinessIdea },
  { path: 'definicion-producto', component: ProductDefinition },
  { path: 'forma-juridica', component: LegalForm },
  { path: 'inversion-financiacion', component: InvestmentFinance },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: 'quienes-somos' }
];
