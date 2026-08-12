---
name: I_TRADECMPLNCLEGALCTRLCHKSTST
description: "Tradecmplnclegalctrlchkstst"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
