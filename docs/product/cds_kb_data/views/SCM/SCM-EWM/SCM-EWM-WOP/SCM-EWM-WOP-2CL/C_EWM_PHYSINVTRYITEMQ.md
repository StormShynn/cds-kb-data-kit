---
name: C_EWM_PHYSINVTRYITEMQ
description: "This CDS view provides information about physical inventory items in your warehouse. This CDS view provides the data to answer the following business questions: How many active physical inventory items are in the warehouse? How many physical inventory items have been counted in the past month? How many storage bins have been covered during the physical inventory this year? How many physical inventory items have count difference? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_PHYSINVTRYITEMQ')/$value
semantic_en: "This CDS view provides information about physical inventory items in your warehouse. This CDS view provides the data to answer the following business questions: How many active physical inventory items are in the warehouse? How many physical inventory items have been counted in the past month? How many storage bins have been covered during the physical inventory this year? How many physical inventory items have count difference? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Whse Physical Inventory Item - Query — CDS view tiêu dùng dựa trên Whse Physical Inventory Item - Query."
keywords:
  - "whse"
  - "physical"
  - "inventory"
  - "item"
  - "query"
  - "warehouse"
  - "number"
  - "year"
  - "docs"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# C_EWM_PHYSINVTRYITEMQ

**This CDS view provides information about physical inventory items in your warehouse. This CDS view provides the data to answer the following business questions: How many active physical inventory items are in the warehouse? How many physical inventory items have been counted in the past month? How many storage bins have been covered during the physical inventory this year? How many physical inventory items have count difference? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_PHYSINVTRYITEMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `PhysicalInventoryDocNumber` |  | |  |  | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryItemNumber` |  | |  |  | `NUMC(6)` | Item |
| `PhysicalInventoryDocYear` |  | |  |  | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMNrOfPhysicalInventoryDocs` |  | |  |  | `INT4(10)` | Number of Physical Inventory Documents |
| `EWMNrOfPhysicalInventoryItems` |  | |  |  | `INT4(10)` | Number of Physical Inventory Document Items |
| `EWMNumberOfStorageBins` |  | |  |  | `INT1(3)` |  |
| `EWMPhysicalInventoryStatus` |  | |  |  | `CHAR(4)` | Physical Inventory Status |
| `EWMPhysicalInventoryStatusText` |  | |  |  | `CHAR(60)` | Status of Physical Inventory Item |
| `PhysicalInventoryDocumentType` |  | |  |  | `CHAR(2)` | Physical Inventory Procedure (Document Type of Phys. Inv.) |
| `localized` |  | |  | `_DocType._Text.PInvDocumentTypeText : localized` |  |  |
| `PInvCountedUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCountedDate` |  | |  |  | `DATS(8)` |  |
| `PhysicalInventoryCountUserName` |  | |  |  | `CHAR(12)` | User Name |
| `PhysInventoryCrtnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCreationDate` |  | |  |  | `DATS(8)` |  |
| `EWMPhysInvtryPostingDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryPostingDate` |  | |  |  | `DATS(8)` |  |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `EWMPhysicalInventoryPriority` |  | |  |  | `NUMC(1)` | Priority of Physical Inventory |
| `EWMPhysInvtryReason` |  | |  |  | `CHAR(4)` | Reason for Physical Inventory/Inventory Difference |
| `PInvDocumentItemIsPrinted` |  | |  |  | `CHAR(1)` | Status: Physical Inventory Document Item Already Printed Out |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `EWMStorageBinSubdivision` |  | |  |  | `CHAR(1)` | Storage Bin is Subdivided |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `EWMStockUsage` |  | |  |  | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwnerName` |  | |  |  | `CHAR(81)` |  |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EWMPhysInventoryCountingCycle` |  | |  |  | `CHAR(1)` | Cycle Counting Indicator |
| `EWMPInvCycCountingIntvlValue` |  | |  |  | `NUMC(4)` | Cycle Counting Interval in Working Days |
| `EWMPInvCycCountingBufferValue` |  | |  |  | `NUMC(2)` | Cycle Counting Buffer in Working Days |
| `NameOfEntitledToDisposeParty` |  | |  |  | `CHAR(81)` |  |
| `StockDocumentCategory` |  | |  |  | `CHAR(3)` | Special Reference Stock Type |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Special Stock Identification Header |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WhseQualityInspectionType` |  | |  |  | `CHAR(1)` | Inspection ID Type |
| `EWMStockReferenceDocCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMStockReferenceDocument` |  | |  |  | `CHAR(35)` | Reference Document |
| `EWMStockReferenceDocumentItem` |  | |  |  | `NUMC(10)` | Reference Document Item |
| `StockIdentificationNumber` |  | |  |  | `CHAR(20)` | Identification Number of Stock |
| `EWMGoodsReceiptDateTime` |  | |  |  | `DEC(15)` | Goods Receipt Date |
| `EWMGoodsReceiptDate` |  | |  |  | `DATS(8)` | Goods Receipt Date in UTC |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `MatlBatchIsInRstrcdUseStock` |  | |  |  | `CHAR(1)` | Batch in Restricted-Use Stock |
| `EWMStorageBinIsEmpty` |  | |  |  | `CHAR(1)` | Empty Storage Bin |
| `EWMPhysInvtryHasChangeCounting` |  | |  |  | `CHAR(1)` | Physical Inventory Has Changed Count Item |
| `EWMPhysInvtryHasDifference` |  | |  |  | `CHAR(1)` | Physical Inventory Has Difference Item |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `PhysicalInventoryRefDocYear` |  | |  |  | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMRefPhysicalInventoryDoc` |  | |  |  | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryRefDocItem` |  | |  |  | `NUMC(6)` | Item |
| `PInvFreeDefinedRefText` |  | |  |  | `CHAR(70)` | Document ID of Reference Document |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_PHYSINVTRYITEMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_PHYSINVTRYITEMQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@OData.publish: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.serviceQuality: #D,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [#ANALYTICAL_QUERY],
                modelingPattern:#ANALYTICAL_QUERY }
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Whse Physical Inventory Item - Query'
define transient view entity C_EWM_PhysInvtryItemQ
  provider contract analytical_query
  as projection on I_EWM_PhysInvtryItemC

{
  @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: false,
      mandatory: false
  }
  @EndUserText.label: 'Warehouse'
  EWMWarehouse,

  @EndUserText.label: 'Physical Inventory Document Number'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryDocNumber,

  @EndUserText.label: 'Physical Inventory Item Number'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryItemNumber,

  @EndUserText.label: 'Physical Inventory Document Year'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryDocYear,

  @EndUserText.label: 'Number of Physical Inventory Documents'
  EWMNrOfPhysicalInventoryDocs,

  @EndUserText.label: 'Number of Physical Inventory Items'
  EWMNrOfPhysicalInventoryItems,

  @EndUserText.label: 'Number of Storage Bins'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
     exceptionAggregationBehavior: #COUNT,
     exceptionAggregationElements: ['EWMWarehouse','EWMStorageBin']} ]}
  EWMNumberOfStorageBins,

  @EndUserText.label: 'Physical Inventory Status'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysicalInventoryStatus,
  @EndUserText.label: 'Description of Physical Inventory Status'
  EWMPhysicalInventoryStatusText,
  

  @EndUserText.label: 'Physical Inventory Document Type'
  @Consumption.filter: {
    selectionType: #RANGE,
    multipleSelections: true,
    mandatory: false
  }
  PhysicalInventoryDocumentType,
  @EndUserText.label: 'Desc of Physical Inventory Document Type'
  _DocType._Text.PInvDocumentTypeText : localized,
  
  @EndUserText.label: 'Physical Inventory Counted UTC Date Time'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PInvCountedUTCDateTime,
 
  @EndUserText.label: 'Physical Inventory Count Date in UTC'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysInvtryCountedDate,
  
  @EndUserText.label: 'Physical Inventory Count User Name'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryCountUserName,
  @EndUserText.label: 'Phys Inventory Creation Date Time in UTC'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysInventoryCrtnUTCDateTime,
  
  @EndUserText.label: 'Physical Inventory Creation Date in UTC'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysInvtryCreationDate,
  
  @EndUserText.label: 'Phys Inventory Posting Date Time in UTC'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysInvtryPostingDateTime,
  
  @EndUserText.label: 'Physical Inventory Posting Date in UTC'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysInvtryPostingDate,
  
  @EndUserText.label: 'Activity Area'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  ActivityArea,
  @EndUserText.label: 'Description of Activity Area'  
  _ActivityArea._Text.ActivityAreaName : localized,
  
  @Consumption.filter: {
    selectionType: #RANGE,
    multipleSelections: true,
    mandatory: false
  }
  @EndUserText.label: 'Physical Inventory Priority'
  EWMPhysicalInventoryPriority,
  @EndUserText.label: 'Desc of Physical Inventory Priority'
  _Priority._Text.PInvPriorityText : localized,

  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  @EndUserText.label: 'Physical Inventory Reason'
  EWMPhysInvtryReason,
  @EndUserText.label: 'Description of Physical Inventory Reason'  
  _Reason._Text.PInvReasonText : localized,
  

  @EndUserText.label: 'Physical Inventory Doc Item Is Printed'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  @Semantics.booleanIndicator
  PInvDocumentItemIsPrinted,

  @EndUserText.label: 'Storage Type'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }

  EWMStorageType,
  @EndUserText.label: 'Storage Bin'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStorageBin,
  @EndUserText.label: 'Storage Section'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStorageSection,
  @EndUserText.label: 'Storage Bin Type'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStorageBinType,
  @EndUserText.label: 'Source Storage Bin Access Type'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStorageBinAccessType,
  @EndUserText.label: 'Storage Bin Is Subdivided'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStorageBinSubdivision,
  @EndUserText.label: 'Product'

  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  Product,
  @EndUserText.label: 'Batch'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  Batch,
  @EndUserText.label: 'Stock Type'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStockType,
  @EndUserText.label: 'Stock Usage'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMStockUsage,

  @EndUserText.label: 'Stock Owner'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }

  EWMStockOwner,
  @EndUserText.label: 'Stock Owner Name'

  StockOwnerName,
  @EndUserText.label: 'Party Entitled to Dispose'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EntitledToDisposeParty,

  @EndUserText.label: 'Physical Invtry Cycle Counting'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMPhysInventoryCountingCycle,
  @EndUserText.label: 'Physical Invtry Cycle Counting Interval'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }  
  EWMPInvCycCountingIntvlValue,
  @EndUserText.label: 'Physical Invtry Cycle Counting Buffer'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }  
  EWMPInvCycCountingBufferValue,  

  @EndUserText.label: 'Name of Party Entitled to Dispose'
  NameOfEntitledToDisposeParty,

  @EndUserText.label: 'Stock Document Category'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  StockDocumentCategory,

  @EndUserText.label: 'Internal ID of WBS Element'
  WBSElementInternalID,
  @EndUserText.label: 'External ID of WBS Element'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  WBSElementExternalID,
  @EndUserText.label: 'Special Stock Identifying Sales Order'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  SpecialStockIdfgSalesOrder,
  @EndUserText.label: 'Special Stk Identifying Sales Order Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  SpecialStockIdfgSalesOrderItem,
  @EndUserText.label: 'Type of Warehouse Quality Inspection'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }

  WhseQualityInspectionType,
  /*Hidden due to performance issue
  @EndUserText.label: 'Document Number of Quality Inspection'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }

  QualityInspectionDocument,*/
  @EndUserText.label: 'Category of Stock Reference Document'
  EWMStockReferenceDocCategory,

  @EndUserText.label: 'Stock Reference Document'
  EWMStockReferenceDocument,
  @EndUserText.label: 'Stock Reference Document Item'
  EWMStockReferenceDocumentItem,
  @EndUserText.label: 'Identification Number of Stock'
  StockIdentificationNumber,
  @EndUserText.label: 'Goods Receipt Date Time'
  EWMGoodsReceiptDateTime,
  @EndUserText.label: 'Goods Receipt Date'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMGoodsReceiptDate,
  @EndUserText.label: 'Shelf Life Expiration Date'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  ShelfLifeExpirationDate,
  @EndUserText.label: 'Country or Region of Origin'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  CountryOfOrigin,
  @EndUserText.label: 'Batch in Restricted-Use Stock'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  MatlBatchIsInRstrcdUseStock,

  @EndUserText.label: 'Storage Bin Is Empty'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  @Semantics.booleanIndicator
  EWMStorageBinIsEmpty,
  @EndUserText.label: 'Physical Invtry Has Changed Count Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  @Semantics.booleanIndicator
  EWMPhysInvtryHasChangeCounting,
  @EndUserText.label: 'Physical Invtry Has Difference Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  @Semantics.booleanIndicator
  EWMPhysInvtryHasDifference,

  @EndUserText.label: 'Warehouse Order'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }

  WarehouseOrder,

  @EndUserText.label: 'Ref Doc Year of Physical Inventory Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryRefDocYear,
  @EndUserText.label: 'Ref Document of Physical Inventory Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  EWMRefPhysicalInventoryDoc,
  @EndUserText.label: 'Ref Doc Item of Physical Inventory Item'
  @Consumption.filter: {
  selectionType: #RANGE,
  multipleSelections: true,
  mandatory: false
  }
  PhysicalInventoryRefDocItem,

  @EndUserText.label: 'Ref Text During Phys Inventory Creation'
  PInvFreeDefinedRefText
}
```
