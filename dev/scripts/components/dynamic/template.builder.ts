import {Injectable} from "@angular/core";

@Injectable()
export class DynamicTemplateBuilder {

    public prepareTemplate(grid: any) {
        let i = Math.random();
        let template = '';
        for (let i in grid) {
            if (grid[i][0].polygon[0].name == "FullSliderComponent") {
                template += `<${grid[i][0].polygon[0].name} idComponent='${grid[i][0].polygon[0].id}'></${grid[i][0].polygon[0].name}>`;
            } else {
                template += "<section class='block-wrapper'><div class='container'><div class='row'>";
                for (let col in grid[i]) {
                    template += `<div class='col-sm-${grid[i][col].colums}'>`;
                    if (grid[i][col].colums == 8) template += `<div class='block-content'>`;
                    else template += `<div class='sidebar'>`;
                    for (let component in grid[i][col].polygon) {
                        template += `<${grid[i][col].polygon[component].name} idComponent='${grid[i][col].polygon[component].id}'></${grid[i][col].polygon[component].name}>`;
                    }
                    template += "</div></div>"
                }
                template += "</div></div></section>"
            }
        }
        return template;
    }
}
