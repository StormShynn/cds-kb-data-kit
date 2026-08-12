---
name: I_PRODUCTIONROUTINGDEX
description: "Production Routing Main Header"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGDEX')/$value
semantic_en: "Production Routing Main Header"
semantic_vi: "Production Routing Main Header — CDS view giao diện dựa trên P_ProductionRoutingDEX."
keywords:
  - "production"
  - "routing"
  - "main"
  - "header"
  - "bill"
  - "operations"
  - "type"
  - "group"
  - "version"
  - "last"
  - "usage"
  - "date"
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
---
# I_PRODUCTIONROUTINGDEX

**Production Routing Main Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `BillOfOperationsVersionType` |  | |  |  | `CHAR(1)` | Version Profile |
| `LastUsageDate` |  | |  |  | `DATS(8)` | Date of the Last Call |
| `NumberOfUsages` |  | |  |  | `DEC(4)` | Number of Calls |
| `HasChangeNumber` |  | |  |  | `CHAR(1)` | Task list with change number |
| `HasParameterEffectivity` |  | |  |  | `CHAR(1)` | Task list with parameter effectivity |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of the last change made to the task list |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of last change made to the task list |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Indicator: Delete completely in reorganization run |
| `BillOfOperationsVariantDesc` |  | |  |  | `CHAR(40)` | Describes a task list group counter |
| `RoutingIsReworkRouting` |  | |  |  | `CHAR(1)` | Rework Routing |
| `ProdnProcgIsFlexible` |  | |  |  | `CHAR(1)` | Flexible Processing |
| `BillOfOperationIsExecutedInMES` |  | |  |  | `CHAR(1)` | Order Execution for this Routing to be Performed in SAP ME |
| `BillOfOperationsIsTrnsfdToERP` |  | |  |  | `CHAR(1)` | Planning for this Routing to be Performed in SAP ERP |
| `_ProdnRtgHeader` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdnRtgHeader` | `I_ProductionRoutingHeaderDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTIONROUTINGDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductionRouting'
@EndUserText.label: 'Production Routing Main Header'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic: true
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProductionRoutingDEX
as select from P_ProductionRoutingDEX
association [1..*] to I_ProductionRoutingHeaderDEX            as _ProdnRtgHeader     on  $projection.BillOfOperationsType     = _ProdnRtgHeader.BillOfOperationsType
                                                                                     and $projection.ProductionRoutingGroup   = _ProdnRtgHeader.ProductionRoutingGroup
                                                                                     and $projection.ProductionRouting        = _ProdnRtgHeader.ProductionRouting
{
 @ObjectModel.foreignKey.association: '_BillOfOperationsType'
key BillOfOperationsType,
@ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
key ProductionRoutingGroup,
key ProductionRouting,
BillOfOperationsVersionType,
LastUsageDate,
NumberOfUsages,
HasChangeNumber,
HasParameterEffectivity,
@Semantics.systemDate.lastChangedAt: true
LastChangeDate,
LastChangeTime,
@Semantics.user.lastChangedBy: true
LastChangedByUser,
IsMarkedForDeletion,
BillOfOperationsVariantDesc,
RoutingIsReworkRouting,
ProdnProcgIsFlexible,
@Semantics.booleanIndicator:true
BillOfOperationIsExecutedInMES,
@Semantics.booleanIndicator:true
BillOfOperationsIsTrnsfdToERP,
/* Associations */
_BillOfOperationsGroup,
_BillOfOperationsType,
_ProdnRtgHeader
}
```
