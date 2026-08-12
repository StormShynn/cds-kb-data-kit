---
name: I_OVTRDCOMPLLEGALCTRLCHKSTSTXT
description: "Ovtrdcompllegalctrlchkststxt"
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
# I_OVTRDCOMPLLEGALCTRLCHKSTSTXT

**Ovtrdcompllegalctrlchkststxt**

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
| `OvrlTrdCmplncLegalCtrlChkSts` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `OvrlTrdCmplncLglCtrlChkStsDesc` |  | |  | `ddtext` |  |  |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlTrdCmplncLegalCtrlChkSts` | `I_OvrlTrdCmplncLegalCtrlChkSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
    dataCategory: #TEXT, 
    representativeKey: 'OvrlTrdCmplncLegalCtrlChkSts',
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
    sqlViewName: 'ISDOTCLCCST',
    compiler.compareFilter:true
}

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Legal Control Sts f Trade Cmplnc - Txt'
define view I_OvTrdComplLegalCtrlChkStsTxt 
    as select from  dd07t
    
association[0..1] to I_OvrlTrdCmplncLegalCtrlChkSts  as _OvrlTrdCmplncLegalCtrlChkSts on $projection.OvrlTrdCmplncLegalCtrlChkSts = _OvrlTrdCmplncLegalCtrlChkSts.OvrlTrdCmplncLegalCtrlChkSts 
association[0..1] to I_Language                      as _Language                   on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
    key substring(domvalue_l, 1, 1) as OvrlTrdCmplncLegalCtrlChkSts,  

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW     
    ddtext as OvrlTrdCmplncLglCtrlChkStsDesc,

    //Associations
    _OvrlTrdCmplncLegalCtrlChkSts,
    _Language
}
where
   ( 
     dd07t.domname  = 'DOM_TOTAL_LCCST'
   )
   and(
     dd07t.as4local = 'A'
   )
```
