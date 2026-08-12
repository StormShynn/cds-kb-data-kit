---
name: I_CNDNCONTRSETTLMTCALCMETHOD
description: "Cndncontrsettlmtcalcmethod"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRSETTLMTCALCMETHOD

**Cndncontrsettlmtcalcmethod**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtCalcMethod` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_settlmt_calc_method )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Settlement Calculation Method'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  sapObjectNodeType.name: 'CndnContrSettlmtCalcMethod',
  representativeKey: 'CndnContrSettlmtCalcMethod',
  resultSet.sizeCategory: #XS,
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities:   [ #ANALYTICAL_DIMENSION ,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #SEARCHABLE_ENTITY,
                             #SQL_DATA_SOURCE,
                             #VALUE_HELP_PROVIDER ],
  usageType: {
    serviceQuality: #A,
    dataClass:      #META,
    sizeCategory:   #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrSettlmtCalcMethod 
  as select from dd07l
  
  composition [0..*] of I_CndnContrSettlmtCalcMethodT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_settlmt_calc_method ) as CndnContrSettlmtCalcMethod,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTLMT_CALC_METHOD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
