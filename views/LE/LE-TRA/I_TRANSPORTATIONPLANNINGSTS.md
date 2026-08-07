---
name: I_TRANSPORTATIONPLANNINGSTS
description: "Transportationplanningsts"
app_component: LE-TRA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-TRA
  - interface-view
  - transport
  - component:LE-TRA
  - lob:Logistics Execution
---
# I_TRANSPORTATIONPLANNINGSTS

**Transportationplanningsts**

| Property | Value |
|---|---|
| App Component | `LE-TRA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationPlanningStatus` | ✓ | |  | `cast(left(dd07l.domvalue_l, 1 ) as trsta preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TransportationPlanningStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'TransportationPlanningStatus',
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
  dataCategory: #VALUE_HELP }
@EndUserText.label: 'Transportation Planning Status'
@Analytics: { dataCategory: #DIMENSION}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDTRSPTPLNGSTS'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_TransportationPlanningSts
  as select from dd07l

  association [0..*] to I_TransportationPlanningStsT as _Text on $projection.TransportationPlanningStatus = _Text.TransportationPlanningStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(left(dd07l.domvalue_l, 1 ) as trsta preserving type ) as TransportationPlanningStatus,

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
```
