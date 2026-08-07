---
name: I_TRANSPCHARGECALCLEVEL
description: Transpchargecalclevel
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCLEVEL

**Transpchargecalclevel**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcLevel` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/calc_level preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics: {internalName: #LOCAL,
             dataCategory: #DIMENSION,
             technicalName: 'ICALCLEVEL'}
@Consumption.ranked: true
@EndUserText:   {label: 'Transportation Charges Calculation Level'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspChargeCalcLevel',
                 representativeKey:  'TranspChargeCalcLevel',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                                      supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                                              #CDS_MODELING_ASSOCIATION_TARGET,
                                                              #CDS_MODELING_DATA_SOURCE,
                                                              #SEARCHABLE_ENTITY,
                                                              #SQL_DATA_SOURCE,
                                                              #VALUE_HELP_PROVIDER],
                                      dataCategory: #VALUE_HELP,
                 modelingPattern: #ANALYTICAL_DIMENSION}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspChargeCalcLevel
  as select from dd07l
  composition [0..*] of I_TranspChargeCalcLevelText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/calc_level preserving type) as TranspChargeCalcLevel,
      @Analytics.hidden: false
      @Consumption.hidden: false
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                        as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/CALC_LEVEL'
  and as4local = 'A'
  and substring(domvalue_l, 1, 1) <> '2'
```
