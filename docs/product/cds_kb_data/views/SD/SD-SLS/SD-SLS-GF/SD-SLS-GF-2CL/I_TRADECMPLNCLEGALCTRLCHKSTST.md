---
name: I_TRADECMPLNCLEGALCTRLCHKSTST
description: "Tradecmplnclegalctrlchkstst"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_TRADECMPLNCLEGALCTRLCHKSTST

**Tradecmplnclegalctrlchkstst**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradeCmplncLegalCtrlChkSts` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TradeCmplncLegalCtrlChkStsDesc` |  | |  | `ddtext` |  |  |
| `_TradeCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TradeCmplncLegalCtrlChkSts` | `I_TradeCmplncLegalCtrlChkSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
    dataCategory: #TEXT, 
    representativeKey: 'TradeCmplncLegalCtrlChkSts',
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

@AbapCatalog:{
    sqlViewName: 'ITRDCMPLCCHKSTST',
    compiler.compareFilter: true  
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Sched Ln Lgl Ctrl Sts f Trd Cmplnc - Txt'
define view I_TradeCmplncLegalCtrlChkStsT 
    as select from dd07t 
    
association[0..1] to I_TradeCmplncLegalCtrlChkSts  as _TradeCmplncLegalCtrlChkSts on $projection.TradeCmplncLegalCtrlChkSts = _TradeCmplncLegalCtrlChkSts.TradeCmplncLegalCtrlChkSts 
association[0..1] to I_Language                    as _Language                   on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_TradeCmplncLegalCtrlChkSts'
    key substring(domvalue_l, 1, 1) as TradeCmplncLegalCtrlChkSts,  

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage                  as Language,
    
    @Semantics.text: true
    @Search.ranking: #LOW
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9    
    ddtext                          as TradeCmplncLegalCtrlChkStsDesc,
 
 
    //Associations
    _TradeCmplncLegalCtrlChkSts,
    _Language
}
where
   ( 
     dd07t.domname  = 'DOM_LCCST'
   )
   and(
     dd07t.as4local = 'A'
   )
```
