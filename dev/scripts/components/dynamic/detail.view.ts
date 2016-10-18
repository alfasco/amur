import { Component, ComponentRef, ViewChild, ViewContainerRef}   from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy}          from '@angular/core';
import { OnChanges, SimpleChange, ComponentFactory} from '@angular/core';

import {Router, NavigationStart} from '@angular/router';
import {Location} from '@angular/common';

import { DynamicTypeBuilder } from './type.builder';
import { DynamicTemplateBuilder } from './template.builder';

import {TemplateService} from './template.service';

@Component({
    selector: 'dynamic-detail',
    template: `<div #dynamicContentPlaceHolder></div>
      <div id="contentPreloader" [class.hide]="content">
        <div class="bubblingG" style="position: absolute;top: 0;right: 0;left: 0;bottom: 0;">
            <span id="bubblingG_1"> </span>
            <span id="bubblingG_2"> </span>
            <span id="bubblingG_3"> </span>
        </div>
      </div>`,
    providers: [
        TemplateService
    ]
})
export class DynamicDetail implements AfterViewInit, OnChanges, OnDestroy, OnInit {
    private content: any;
    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', { read: ViewContainerRef })
    protected dynamicComponentTarget: ViewContainerRef;
    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<any>;

    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;
    //last url for query grid
    protected lastUrl: String;
    protected lastCode: Number;

    // wee need Dynamic component builder
    constructor(
        protected typeBuilder: DynamicTypeBuilder,
        protected templateBuilder: DynamicTemplateBuilder,
        private router: Router,
        private tpl: TemplateService,
        private location: Location
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart)
                this.refreshContent(event.url);
            this.content = false;
        })
    }

    /** Get a Factory and create a component */

    protected refreshContent(url: String) {

        if (this.componentRef) {
            this.componentRef.destroy();
        }

        this.lastUrl = url;
        this.lastCode = Math.random();
        this.updateGrid(url, this.lastCode);
    }

    protected updateGrid(url: String, code: Number) {
        this.tpl.getGrid(url).subscribe(
            grid => {
                if (url == this.lastUrl && code == this.lastCode) {
                    // here we get a TEMPLATE with dynamic content === TODO
                    var template = this.templateBuilder.prepareTemplate(grid);
                    // here we get Factory (just compiled or from cache)
                    this.typeBuilder
                        .createComponentFactory(template)
                        .then((factory: ComponentFactory<any>) => {
                            // Target will instantiate and inject component (we'll keep reference to it)
                            this.componentRef = this
                                .dynamicComponentTarget
                                .createComponent(factory);
                        });
                    this.content = true;
                }
            },
            error => console.log(<any>error));
    }

    /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;

        this.refreshContent(this.location.path());
    }
    // wasViewInitialized is an IMPORTANT switch
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent(this.location.path());
    }
    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
