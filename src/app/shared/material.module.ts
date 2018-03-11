import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatStepperModule,
    MatAutocompleteModule, 
 MatChipsModule,
 MatExpansionModule,
 MatTabsModule,
 MatProgressSpinnerModule,
 MatSidenavModule
 
    
    
} from '@angular/material';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatStepperModule, 
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatSidenavModule
       ],
    exports: [MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDialogModule,
        FormsModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatProgressBarModule, 
        MatCardModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatSidenavModule
        
    ],
    providers: [],
})
export class MaterialModule { }