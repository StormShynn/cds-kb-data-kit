---
name: I_TRANSPCHARGECALCSTATUS
description: "Transpchargecalcstatus"
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
  - status
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCSTATUS

**Transpchargecalcstatus**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tcc_calc_status preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics:     {dataCategory:       #DIMENSION,
                 internalName:       #LOCAL }
@Consumption.ranked: true
@EndUserText:   {label: 'Transportation Charge Calculation Status'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspChargeCalcStatus',
                 representativeKey:  'TranspChargeCalcStatus',
                 dataCategory: #VALUE_HELP,
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 resultSet.sizeCategory:#XS }
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspChargeCalcStatus
  as select from dd07l
  composition [0..*] of I_TranspChargeCalcStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tcc_calc_status preserving type) as TranspChargeCalcStatus,
      @Analytics.hidden: false
      @Consumption.hidden: false
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                             as DomainValue,
      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/TCC_CALC_STATUS'
  and as4local                    =  'A'
```
