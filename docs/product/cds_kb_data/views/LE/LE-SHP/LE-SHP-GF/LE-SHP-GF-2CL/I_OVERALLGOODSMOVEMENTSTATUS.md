---
name: I_OVERALLGOODSMOVEMENTSTATUS
description: "OVERALLGoods MovementSTATUS"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OVERALLGOODSMOVEMENTSTATUS

**OVERALLGoods MovementSTATUS**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallGoodsMovementStatus` | ✓ | |  | `cast(left(dd07l.domvalue_l, 1 ) as wbstk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallGoodsMovementStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'OverallGoodsMovementStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S },
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION ],
  modelingPattern: #ANALYTICAL_DIMENSION,
  sapObjectNodeType.name: 'OverallGoodsMovementStatus',
  dataCategory: #VALUE_HELP }
@EndUserText.label: 'Overall Goods Movement Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@Search.searchable: true
@VDM.viewType: #BASIC
@Consumption.ranked: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRGDSMVTSTS'
@Metadata.ignorePropagatedAnnotations:true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_OverallGoodsMovementStatus
  as select from dd07l

  association [0..*] to I_OverallGoodsMovementStatusT as _Text on $projection.OverallGoodsMovementStatus = _Text.OverallGoodsMovementStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(left(dd07l.domvalue_l, 1 ) as wbstk preserving type ) as OverallGoodsMovementStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                 as DomainValue,

      _Text
}
where
      dd07l.domname  = 'STATV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
