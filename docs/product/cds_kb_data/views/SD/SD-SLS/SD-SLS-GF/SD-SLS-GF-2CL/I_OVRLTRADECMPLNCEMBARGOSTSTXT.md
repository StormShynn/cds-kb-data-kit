---
name: I_OVRLTRADECMPLNCEMBARGOSTSTXT
description: "Ovrltradecmplncembargoststxt"
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
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVRLTRADECMPLNCEMBARGOSTSTXT

**Ovrltradecmplncembargoststxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallTrdCmplncEmbargoSts` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `OverallTrdCmplncEmbargoStsDesc` |  | |  | `ddtext` |  |  |
| `_OverallTrdCmplncEmbargoSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallTrdCmplncEmbargoSts` | `I_OvrlTradeCmplncEmbargoStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
    dataCategory: #TEXT, 
    representativeKey: 'OverallTrdCmplncEmbargoSts',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
     },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE, 
                             #SEARCHABLE_ENTITY ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.internalName: #LOCAL

@AbapCatalog: {
    sqlViewName: 'ISDOTCEST',
    compiler.compareFilter:true
}
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Embargo Status f Trade Compliance - Txt'
define view I_OvrlTradeCmplncEmbargoStsTxt 
    as select from  dd07t
    
association[0..1] to I_OvrlTradeCmplncEmbargoStatus  as _OverallTrdCmplncEmbargoSts on $projection.OverallTrdCmplncEmbargoSts = _OverallTrdCmplncEmbargoSts.OverallTrdCmplncEmbargoSts   
association[0..1] to I_Language                      as _Language                   on $projection.Language = _Language.Language
    
{
    @ObjectModel.foreignKey.association: '_OverallTrdCmplncEmbargoSts'
    key substring(domvalue_l, 1, 1) as OverallTrdCmplncEmbargoSts,  

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW 
    ddtext as OverallTrdCmplncEmbargoStsDesc,

    //Associations
    _OverallTrdCmplncEmbargoSts,
    _Language
}
where
   ( 
     dd07t.domname  = 'DOM_TOTAL_EMCST'
   )
   and(
     dd07t.as4local = 'A'
   )
```
