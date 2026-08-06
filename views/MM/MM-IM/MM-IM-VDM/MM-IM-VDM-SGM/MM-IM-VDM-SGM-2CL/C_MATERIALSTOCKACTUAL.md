---
name: C_MATERIALSTOCKACTUAL
description: This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?
tags:
  - MM
  - bo:companycode
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
  - metadata-only
---
# C_MATERIALSTOCKACTUAL

**This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Material` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | `CHAR(4)` | Plant |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` | `CHAR(10)` | Customer for Special Stock |
| `InventoryStockType` | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `MaterialBaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `MatlWrhsStkQtyInMatlBaseUnit` | `QUAN(31)` | Stock Quantity |
| `MaterialName` | `CHAR(40)` | Product Description |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `PlantName` | `CHAR(30)` | Plant Name |
| `StorageLocationName` | `CHAR(16)` | Storage Location Name |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `InventoryStockTypeName` | `CHAR(60)` | Inventory Stock Type Name |
| `InventorySpecialStockTypeName` | `CHAR(20)` | Special Stock Type Name |
