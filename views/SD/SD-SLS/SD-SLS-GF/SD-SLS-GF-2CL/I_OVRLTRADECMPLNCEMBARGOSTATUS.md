---
name: I_OVRLTRADECMPLNCEMBARGOSTATUS
description: Ovrltradecmplncembargostatus
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVRLTRADECMPLNCEMBARGOSTATUS

**Ovrltradecmplncembargostatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallTrdCmplncEmbargoSts` | ✓ | |  | `cast (substring( dd07l.domvalue_l, 1, 1) as tdd_total_emcst preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OvrlTradeCmplncEmbargoStsTxt` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
    dataCategory: #VALUE_HELP, 
    representativeKey: 'OverallTrdCmplncEmbargoSts',  
    resultSet.sizeCategory: #XS,
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                              #CDS_MODELING_ASSOCIATION_TARGET, 
                              #SQL_DATA_SOURCE, 
                              #CDS_MODELING_DATA_SOURCE,
                              #VALUE_HELP_PROVIDER, 
                              #SEARCHABLE_ENTITY ],
     modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@AbapCatalog: {
    sqlViewName: 'ISDOTCES',
    compiler.compareFilter:true
}
@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Embargo Status for Trade Compliance'
define view I_OvrlTradeCmplncEmbargoStatus 
    as select from dd07l 
    
association [0..*] to I_OvrlTradeCmplncEmbargoStsTxt as _Text on $projection.OverallTrdCmplncEmbargoSts = _Text.OverallTrdCmplncEmbargoSts
{
    @ObjectModel.text.association: '_Text'
    key cast (substring( dd07l.domvalue_l, 1, 1) as tdd_total_emcst preserving type ) as OverallTrdCmplncEmbargoSts,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
      
    _Text
}
where
   ( 
     dd07l.domname  = 'DOM_TOTAL_EMCST'
   )
   and(
     dd07l.as4local = 'A'
   )
```
