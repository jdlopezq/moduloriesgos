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
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressBarModule    
} from '@angular/material';
import {FormsModule} from '@angular/forms'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [MatButtonModule,
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
        MatProgressBarModule
       ],
    exports: [MatButtonModule,
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
        MatProgressBarModule
    ],
    providers: [],
})
export class MaterialModule { }