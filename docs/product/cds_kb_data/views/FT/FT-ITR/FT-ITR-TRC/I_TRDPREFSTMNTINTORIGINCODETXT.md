---
name: I_TRDPREFSTMNTINTORIGINCODETXT
description: "Trdprefstmntintorigincodetxt"
app_component: FT-ITR-TRC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-TRC
  - interface-view
  - component:FT-ITR-TRC
  - lob:Other
---
# I_TRDPREFSTMNTINTORIGINCODETXT

**Trdprefstmntintorigincodetxt**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TrdPrefStmntInternalOriginCode` | ✓ | |  | `cast(domvalue_l as /sapsll/prene_r3)` |  |  |
| `TrdPrefStmntIntOriginCodeDesc` |  | |  | `cast(ddtext as /sapsll/prene_desc_r3)` |  |  |
| `_Language` | | ✓ | | | | |
| `_TrdPrefStmntIntOriginCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TrdPrefStmntIntOriginCode` | `I_TrdPrefStmntIntOriginCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 
 
@EndUserText.label: 'Preference Internal Origin Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TrdPrefStmntInternalOriginCode'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
@ObjectModel.modelingPattern:#NONE
                                        

@Analytics.technicalName: 'ITrdPrefStmntIntOrignCodeTxt'                                        
                                        
define view entity I_TrdPrefStmntIntOriginCodeTxt
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_TrdPrefStmntIntOriginCode as _TrdPrefStmntIntOriginCode on $projection.TrdPrefStmntInternalOriginCode = _TrdPrefStmntIntOriginCode.TrdPrefStmntInternalOriginCode
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                  as Language,
      @ObjectModel.foreignKey.association: '_TrdPrefStmntIntOriginCode'
  key cast(domvalue_l as /sapsll/prene_r3) as TrdPrefStmntInternalOriginCode, 
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#LOW
      cast(ddtext as /sapsll/prene_desc_r3) as TrdPrefStmntIntOriginCodeDesc,

      _Language,
      _TrdPrefStmntIntOriginCode
}
where
      domname  = '/SAPSLL/PRENE_R3'
  and as4local = 'A'
```
