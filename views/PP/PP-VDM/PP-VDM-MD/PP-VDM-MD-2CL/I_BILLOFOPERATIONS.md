---
name: I_BILLOFOPERATIONS
description: Bill of Operations
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value
semantic_en: Bill of Operations
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_BILLOFOPERATIONS

**Bill of Operations**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillOfOperationsType` | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` | `CHAR(2)` | Group Counter |
| `BillOfOperationsVersionType` | `CHAR(1)` | Version Profile |
| `BillOfOperationsSubtype` | `CHAR(1)` | Version Profile |
| `LastUsageDate` | `DATS(8)` | Date of the Last Call |
| `NumberOfUsages` | `DEC(4)` | Number of Calls |
| `HasChangeNumber` | `CHAR(1)` | Task list with change number |
| `HasParameterEffectivity` | `CHAR(1)` | Task list with parameter effectivity |
| `LastChangeDate` | `DATS(8)` | Date of the last change made to the task list |
| `LastChangeTime` | `TIMS(6)` | Time of last change made to the task list |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By User |
| `IsMarkedForDeletion` | `CHAR(1)` | Indicator: Delete completely in reorganization run |
| `BillOfOperationsVariantDesc` | `CHAR(40)` | Describes a task list group counter |
| `RoutingIsReworkRouting` | `CHAR(1)` | Rework Routing |
| `ProdnProcgIsFlexible` | `CHAR(1)` | Flexible Processing |
| `BillOfOperationIsExecutedInMES` | `CHAR(1)` | Order Execution for this Routing to be Performed in SAP ME |
| `BillOfOperationsIsTrnsfdToERP` | `CHAR(1)` | Planning for this Routing to be Performed in SAP ERP |
| `ShopFloorRtgTemplateCategory` | `CHAR(1)` | Template Category |
| `ShopFloorRoutingTemplateType` | `CHAR(1)` | Template Type |
| `ShopFloorRtgTemplateSubType` | `CHAR(1)` | Segment Validity |
| `ShopFloorRoutingTemplateOwner` | `CHAR(12)` | Owner |
