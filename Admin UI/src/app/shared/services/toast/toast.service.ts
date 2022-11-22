import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  show(type: 'success' | 'info' | 'warn' | 'error' | 'custom' , status: string, msg: string) {
    this.messageService.add({ severity: type, summary: status, detail: msg, life: 9000 });
  }
}
