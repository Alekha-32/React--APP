import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  Inject,
  Filter,
  Page,
  Selection,
  Edit,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounderd-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridComp"
        dataSource={customersData}
        allowFiltering
        allowPaging
        allowSorting
        toolbar={["Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, Selection, Filter, Page, Edit, Toolbar]}
        ></Inject>
      </GridComponent>
    </div>
  );
};

export default Customers;
