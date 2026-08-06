---
name: C_MATLSTKATKEYDATEINALTUOM
description: This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?
tags:
  - MM
  - bo:plant
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - metadata-only
---
# C_MATLSTKATKEYDATEINALTUOM

**This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Product` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | `CHAR(4)` | Plant |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` | `CHAR(10)` | Customer for Special Stock |
| `SpecialStockIdfgStockOwner` | `CHAR(10)` | Add. Supplier for Special Stock |
| `InventoryStockType` | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Type |
| `MaterialBaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `AlternativeUnit` | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `MatlWrhsStkQtyInMatlBaseUnit` | `QUAN(31)` |  |
| `MatlCnsmpnQtyInMatlBaseUnit` | `QUAN(31)` |  |
| `MatlStkIncrQtyInMatlBaseUnit` | `QUAN(31)` |  |
| `MatlStkDecrQtyInMatlBaseUnit` | `QUAN(31)` |  |
| `MatlWrhsStkQtyInAltUoM` | `QUAN(31)` | Stock Quantity in AUoM |
| `MatlCnsmpnQtyInAltUoM` | `QUAN(31)` | Consumption Quantity in AUoM |
| `MatlStkIncrQtyInAltUoM` | `QUAN(31)` | Stock Increase Quantity in AUoM |
| `MatlStkDecrQtyInAltUoM` | `QUAN(31)` | Stock Decrease Quantity in AUoM |
