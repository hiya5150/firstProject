import { Component } from "@angular/core";
import {ItemEventData} from 'tns-core-modules/ui/list-view'

@Component ({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css'],
    moduleId: module.id
})
export class CurrentChallengeComponent {

        onItemTap(args: ItemEventData) {
            console.log(args);

        }

}
