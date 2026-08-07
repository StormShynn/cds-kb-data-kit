---
name: I_RAPERFOBLGNDISTINCTTYPE
description: "Raperfoblgndistincttype"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNDISTINCTTYPE

**Raperfoblgndistincttype**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RAPerfOblgnDistinctType` | ✓ | |  | `cast(dd07l.domvalue_l as farr_distinct)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRADISTINCTTYPE'

@Consumption.ranked: true

@EndUserText.label: 'Distinct Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'RAPerfOblgnDistinctType'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_RAPerfOblgnDistinctType
  as select from dd07l

  composition [0..*] of I_RAPerfOblgnDistinctTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_distinct) as RAPerfOblgnDistinctType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                        as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_DISTINCT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
