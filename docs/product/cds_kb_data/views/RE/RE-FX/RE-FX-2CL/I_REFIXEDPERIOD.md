---
name: I_REFIXEDPERIOD
description: "Refixedperiod"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REFIXEDPERIOD

**Refixedperiod**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REFixedPeriod` | ✓ | |  | `fixper` |  |  |
| `REMixedCalculationIsActive` |  | |  | `mixcalc` |  |  |
| `RE365YearIsUsed` |  | |  | `day365` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REFixedPeriodText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREFIXPERIOD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@EndUserText.label: 'Real Estate Fixed Period'
@ObjectModel: {
  representativeKey: 'REFixedPeriod',
  semanticKey: ['REFixedPeriod'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateFixedPeriod'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_REFixedPeriod
  as select from tivcdfixper as _FixedPeriod
  association [0..*] to I_REFixedPeriodText as _Text on $projection.REFixedPeriod = _Text.REFixedPeriod
{     
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key fixper  as REFixedPeriod,
      mixcalc as REMixedCalculationIsActive,
      day365  as RE365YearIsUsed,

      _Text
}
```
