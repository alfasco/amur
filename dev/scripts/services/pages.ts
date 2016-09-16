import { Injectable }     from '@angular/core';

@Injectable()
export class PagesService {
    public pages: any;
    constructor() {
    }

    check() {
        this.pages = true;
    }

}
