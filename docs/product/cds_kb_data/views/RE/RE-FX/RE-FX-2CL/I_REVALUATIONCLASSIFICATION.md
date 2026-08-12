---
name: I_REVALUATIONCLASSIFICATION
description: "Revaluationclassification"
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
  - classification
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONCLASSIFICATION

**Revaluationclassification**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REValuationClassification` | ✓ | |  | `cast( dd07l.domvalue_l as rececesltype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALCLS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Valuation Classification'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'REValuationClassification',
  resultSet.sizeCategory: #XS,
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'REValuationClassification'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define root view entity I_REValuationClassification as select from dd07l 
  composition [0..*] of I_REValuationClassificationTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as rececesltype ) as REValuationClassification,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      
      _Text
} 
where dd07l.domname  = 'RECECESLTYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
