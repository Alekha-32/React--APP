import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounderd-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowFiltering
        allowPaging
        allowSorting
        allowPdfExport
        allowExcelExport
        editSettings={editing}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Filter,
            ContextMenu,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        ></Inject>
      </GridComponent>
    </div>
  );
};

export default Orders;
