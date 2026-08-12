---
name: I_TOTALBLOCKSTATUSTEXT
description: "Totalblockstatustext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_TOTALBLOCKSTATUSTEXT

**Totalblockstatustext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TotalBlockStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TotalBlockStatusDesc` |  | |  | `bezei` |  |  |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TotalBlockStatus` | `I_TotalBlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TotalBlockStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Total Block Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDTOTBLKSTST'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ] 
@Search.searchable: true

define view I_TotalBlockStatusText
as select from tvbst

association[0..1] to I_TotalBlockStatus as _TotalBlockStatus on $projection.TotalBlockStatus = _TotalBlockStatus.TotalBlockStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_TotalBlockStatus'
    key statu as TotalBlockStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW 
    bezei as TotalBlockStatusDesc,
    
    _TotalBlockStatus,
    @Search.defaultSearchElement: false
    _Language
    
}
where (tvbst.tbnam = 'LIKP') and (tvbst.fdnam = 'SPSTG')
  and ((tvbst.statu = '') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
