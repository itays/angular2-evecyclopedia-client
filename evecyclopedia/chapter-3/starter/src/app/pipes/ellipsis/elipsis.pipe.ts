/**
 * Created by isidis on 12/15/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'elipsis'})
export class ElipsisPipe implements PipeTransform {
    transform(text: string, numOfLetters: number) {
        if (!text) {
            return text;
        }
        if (!numOfLetters || text.length <= numOfLetters) {
            return text;
        }

        text = text.substr(0, numOfLetters);

        let lastSpace = text.lastIndexOf(' ');

        if (lastSpace !== -1) {
            text = text.substr(0, lastSpace);
        }

        return text + '...';
    }
}

