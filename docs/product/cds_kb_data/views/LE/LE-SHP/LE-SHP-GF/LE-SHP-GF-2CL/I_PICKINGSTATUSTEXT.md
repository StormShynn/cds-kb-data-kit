---
name: I_PICKINGSTATUSTEXT
description: "Pickingstatustext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PICKINGSTATUSTEXT

**Pickingstatustext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PickingStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PickingStatusName` |  | |  | `bezei` |  |  |
| `_PickingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PickingStatus` | `I_PickingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PickingStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Picking Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPICKGSTST'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_PickingStatusText
as select from tvbst

association[0..1] to I_PickingStatus as _PickingStatus on $projection.PickingStatus = _PickingStatus.PickingStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
    @ObjectModel.foreignKey.association: '_PickingStatus'
    key statu as PickingStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as PickingStatusName,
    
    //Assocaitions
    _PickingStatus,
    _Language
} 

where (tvbst.tbnam = 'LIPS') and (tvbst.fdnam = 'KOSTA');
```
