import { HttpHeaders } from '@angular/common/http';

export const TIME_OUT = 5000;

export const CONTENT_TYPE = 'application/json';
export const CONTENT_TYPE_2 = 'application/json2';
const TOTAL_ELEMENTS = '85';

export const PRINCIPAL_HEADER = new HttpHeaders()
.set('Content-Type:', CONTENT_TYPE)
.set('Total-Elements:', TOTAL_ELEMENTS);


export const SECONDARY_HEADER = new HttpHeaders()
.set('Content-Type:', CONTENT_TYPE_2)