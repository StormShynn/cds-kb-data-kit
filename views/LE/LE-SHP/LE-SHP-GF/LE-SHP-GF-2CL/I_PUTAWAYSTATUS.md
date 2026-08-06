---
name: I_PUTAWAYSTATUS
description: Putawaystatus
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
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
# I_PUTAWAYSTATUS

**Putawaystatus**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PutawayStatus` | `cast(left(dd07l.domvalue_l, 1 ) as le_putaway_status preserving type)` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PutawayStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILEKOSTK'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Putaway Status'
@VDM.viewType: #BASIC
@ObjectModel: {
  representativeKey: 'PutawayStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #C,
    sizeCategory: #S },
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'OverallPickStatus',
  dataCategory: #VALUE_HELP }
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_PutawayStatus
  as select from dd07l

  association [0..*] to I_PutawayStatusText as _Text on $projection.PutawayStatus = _Text.PutawayStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(left(dd07l.domvalue_l, 1 ) as le_putaway_status preserving type) as PutawayStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                            as DomainValue,

      _Text
}

where
      dd07l.domname  = 'LE_PUTAWAY_STATUS'
  and dd07l.as4local = 'A'
```
