---
name: I_OVERALLTOTALSDDOCREFSTATUST
description: "Overalltotalsddocrefstatust"
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
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLTOTALSDDOCREFSTATUST

**Overalltotalsddocrefstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallTotalSDDocRefStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OverallTotalSDDocRefStatusDesc` |  | |  | `bezei` |  |  |
| `_OverallTotalSDDocRefStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallTotalSDDocRefStatus` | `I_OverallTotalSDDocRefStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallTotalSDDocRefStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Total Reference Status of SD Document - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVTTSDDCRFSTT'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_OverallTotalSDDocRefStatusT
as select from tvbst

association [0..1] to I_OverallTotalSDDocRefStatus as _OverallTotalSDDocRefStatus on $projection.OverallTotalSDDocRefStatus = _OverallTotalSDDocRefStatus.OverallTotalSDDocRefStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
    key statu as OverallTotalSDDocRefStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    bezei as OverallTotalSDDocRefStatusDesc,
    
    _OverallTotalSDDocRefStatus,
    _Language
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'RFGSK');
```
