import { DomSanitizer  } from '@angular/platform-browser';

export class WeatherInfo {
    public imageUrl:any;
    constructor(public city: string,public tmp: string,public feelLike: string,
                public wind: string) {

        this.imageUrl = +this.tmp >= 20 ? 'url(assets/Images/sunny.jpeg)':
                                          'url(assets/Images/winter.jpeg)';  
    }

}