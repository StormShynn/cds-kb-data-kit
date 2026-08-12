---
name: I_OVRLITMPICKINGINCOMPLTNSTS
description: "Ovrlitmpickingincompltnsts"
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OVRLITMPICKINGINCOMPLTNSTS

**Ovrlitmpickingincompltnsts**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OvrlItmPickingIncompletionSts` | ✓ | |  | `cast(left(dd07l.domvalue_l, 1 ) as uvpik_su preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OvrlItmPickingIncompltnStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'OvrlItmPickingIncompletionSts',
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
  sapObjectNodeType.name: 'OvrlItmPickIncompletionSts',
  dataCategory: #VALUE_HELP }
@EndUserText.label: 'Overall Item Picking Incompletion Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDORITMPIKINCS'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_OvrlItmPickingIncompltnSts
  as select from dd07l

  association [0..*] to I_OvrlItmPickingIncompltnStsT as _Text on $projection.OvrlItmPickingIncompletionSts = _Text.OvrlItmPickingIncompletionSts
{
      @ObjectModel.text.association: '_Text'
  key cast(left(dd07l.domvalue_l, 1 ) as uvpik_su preserving type ) as OvrlItmPickingIncompletionSts,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                    as DomainValue,

      _Text
}
where
      dd07l.domname  = 'STATV'
  and dd07l.as4local = 'A'
```
