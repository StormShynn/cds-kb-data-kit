---
name: I_QUALITYMGMTCTRLKEYTEXT
description: Qualitymgmtctrlkeytext
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QUALITYMGMTCTRLKEYTEXT

**Qualitymgmtctrlkeytext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityMgmtCtrlKey` | ✓ | |  | `qm_pur` |
| `Language` | ✓ | |  | `sprache` |
| `QualityMgmtCtrlKeyText` |  | |  | `kurztext` |
| `_Language` | | ✓ | | |
| `_QualityMgmtCtrlKey` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_QualityMgmtCtrlKey` | `I_QualityMgmtCtrlKey` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Control Key for Quality Management - Text' 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IQMCONTROLKEYT'
@ObjectModel.representativeKey: 'QualityMgmtCtrlKey'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view entity I_QualityMgmtCtrlKeyText as select from tq08t
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_QualityMgmtCtrlKey  as _QualityMgmtCtrlKey 
      on $projection.QualityMgmtCtrlKey = _QualityMgmtCtrlKey.QualityMgmtCtrlKey
{
   key qm_pur as QualityMgmtCtrlKey,
   @Semantics.language: true
   key sprache as Language, 
   @Semantics.text: true
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   kurztext as QualityMgmtCtrlKeyText,

  //Associations 
   _QualityMgmtCtrlKey,
   _Language
   
}
```
