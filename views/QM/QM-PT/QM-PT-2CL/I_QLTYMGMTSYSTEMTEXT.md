---
name: I_QLTYMGMTSYSTEMTEXT
description: Qltymgmtsystemtext
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
# I_QLTYMGMTSYSTEMTEXT

**Qltymgmtsystemtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityManagementSystem` | `tq02u.qssysfam` |
| key `Language` | `tq02u.sprsl` |
| `QualityManagementSystemText` | `cast( tq02u.qstext as vdm_qmsystem_text preserving type )` |
| `_Language` | *Association* |
| `_QualityManagementSystem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_QualityManagementSystem` | `I_QualityManagementSystem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Management System - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IQLTYMGMTSYSTT'
@ObjectModel.representativeKey: 'QualityManagementSystem'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyMgmtSystemText as select from tq02u 

  association [0..1] to I_Language as _Language
      on  $projection.Language = _Language.Language
  association [1..1] to I_QualityManagementSystem as _QualityManagementSystem
      on  $projection.QualityManagementSystem = _QualityManagementSystem.QualityManagementSystem
{
  key tq02u.qssysfam as QualityManagementSystem,
  @Semantics.language: true
  key tq02u.sprsl as Language,
  
  @Semantics.text: true
  cast( tq02u.qstext as vdm_qmsystem_text preserving type  )      as QualityManagementSystemText, 
  /* Associations */
  _QualityManagementSystem,
  _Language  
  
}
```
