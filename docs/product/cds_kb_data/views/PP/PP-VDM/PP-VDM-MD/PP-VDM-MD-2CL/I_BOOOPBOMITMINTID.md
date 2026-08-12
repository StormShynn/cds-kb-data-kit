---
name: I_BOOOPBOMITMINTID
description: "BOO Op BOM Item Internal ID"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value
semantic_en: "BOO Op BOM Item Internal ID"
semantic_vi: "BOO Op BOM Item Internal ID — CDS view giao diện dựa trên BOO Op BOM Item Internal ID."
keywords:
  - "boo"
  - "bom"
  - "item"
  - "internal"
  - "bill"
  - "operations"
  - "type"
  - "group"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BOOOPBOMITMINTID

**BOO Op BOM Item Internal ID**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `plnty` | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` | `CHAR(8)` | Key for Task List Group |
| `BOOOpBOMItemInternalID` | ✓ | |  | `zuonr` | `NUMC(8)` | No. for material comp. allocation to task list |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IBOOOBOMII'
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'BOOOpBOMItemInternalID'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'BOO Op BOM Item Internal ID'
@Metadata.allowExtensions:true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
//define view I_BOOOpBOMItmIntId
define view entity I_BOOOpBOMItmIntId
  as select distinct from plmz

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                          and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plmz.plnty as BillOfOperationsType,

      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key plmz.plnnr as BillOfOperationsGroup,

  key plmz.zuonr as BOOOpBOMItemInternalID,

      _BillOfOperationsType,
      _BillOfOperationsGroup
}
```
