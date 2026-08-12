---
name: I_BOOOPPRTINTERNALID
description: "BOO Operation PRT Internal ID"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPPRTINTERNALID')/$value
semantic_en: "BOO Operation PRT Internal ID"
semantic_vi: "BOO Operation PRT Internal ID — CDS view giao diện dựa trên BOO Operation PRT Internal ID."
keywords:
  - "boo"
  - "operation"
  - "prt"
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
# I_BOOOPPRTINTERNALID

**BOO Operation PRT Internal ID**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPPRTINTERNALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `plnty` | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` | `CHAR(8)` | Key for Task List Group |
| `BOOOperationPRTInternalID` | ✓ | |  | `pzlfh` | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPPRTINTERNALID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPPRTINTERNALID')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'BOOOperationPRTInternalID'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@Search.searchable: true
@EndUserText.label: 'BOO Operation PRT Internal ID'
@Metadata.allowExtensions:true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
//define view I_BOOOperationPRTInternalID
define view entity I_BOOOpPRTInternalID
  as select distinct from plfh

  association [1..1] to I_BillOfOperationsType     as _BillOfOperationsType     on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  
  association [1..1] to I_BillOfOperationsGroup    as _BillOfOperationsGroup    on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plfh.plnty     as   BillOfOperationsType,

      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key plfh.plnnr     as   BillOfOperationsGroup,

  key plfh.pzlfh     as   BOOOperationPRTInternalID,

      _BillOfOperationsType,
      _BillOfOperationsGroup

}
```
