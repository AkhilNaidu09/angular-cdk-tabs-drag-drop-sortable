import { Component, ViewChild } from "@angular/core";
import { TabsetComponent } from "ngx-bootstrap/tabs";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 5";

  currentTabId: any;
  previousTabId: any;
  tabsList = [
    { title: "Dynamic Title 1", content: "Dynamic content 1", active: true },
    { title: "Dynamic Title 2", content: "Dynamic content 2" },
    { title: "Dynamic Title 3", content: "Dynamic content 3" },
    { title: "Dynamic Title 4", content: "Dynamic content 4" },
    { title: "Dynamic Title 5", content: "Dynamic content 5" }
  ];

  @ViewChild("someTabs") someTabs: TabsetComponent;

  drop(event) {
    var previousIndex = parseInt(
      event.previousContainer.id.replace("tabIndex_", "")
    );
    var currentIndex = parseInt(event.container.id.replace("tabIndex_", ""));
    if (
      previousIndex != NaN &&
      currentIndex != NaN &&
      previousIndex != undefined &&
      currentIndex != undefined &&
      previousIndex != currentIndex &&
      previousIndex != 0 &&
      currentIndex != 0
    ) {
      this.tabsList.splice(
        currentIndex,
        0,
        this.tabsList.splice(previousIndex, 1)[0]
      );
      this.someTabs.tabs.splice(
        currentIndex,
        0,
        this.someTabs.tabs.splice(previousIndex, 1)[0]
      );
    } else if (previousIndex == 0 && currentIndex == 0) {
      alert("Primary tabs cannot drag and drop");
    } else {
      alert("Invalid drag and drop");
    }
  }

  getAllListConnections(index) {
    var connections = [];
    for (var i = 0; i < this.tabsList.length; i++) {
      if (i != index) {
        connections.push("tabIndex_" + i);
      }
    }
    return connections;
  }
}
