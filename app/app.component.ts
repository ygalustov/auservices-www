/*
 * Copyright (c) Yury Galustov <ygalustov@gmail.com All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Utils} from "./Utils";

@Component({
    selector: "app",
    templateUrl: "app/app.component.html"
})
export class AppComponent implements OnInit {
    public topMenuDisplay: string;

    public title = "Tour of Heroes";
    public hero = "Windstorm";

    ngOnInit() {

    }
}