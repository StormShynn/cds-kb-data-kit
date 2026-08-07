---
name: I_ITEMPICKINGINCOMPLETIONSTST
description: Itempickingincompletionstst
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_ITEMPICKINGINCOMPLETIONSTST

**Itempickingincompletionstst**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ItemPickingIncompletionStatus` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `ItemPickingIncompletionStsDesc` |  | |  | `bezei` |
| `_ItemPickingIncompletionStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemPickingIncompletionStatus` | `I_ItemPickingIncompletionSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ItemPickingIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Item Picking Incompletion Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDITPICKGCPSTST'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_ItemPickingIncompletionStsT
as select from tvbst 

association[0..1] to I_ItemPickingIncompletionSts as _ItemPickingIncompletionStatus
  on $projection.ItemPickingIncompletionStatus = _ItemPickingIncompletionStatus.ItemPickingIncompletionStatus
association[0..1] to I_Language as _Language
  on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ItemPickingIncompletionStatus'
    key statu as ItemPickingIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as ItemPickingIncompletionStsDesc,
    
    //Associations
    _ItemPickingIncompletionStatus,
    _Language        
}
where (tvbst.tbnam = 'LIPS') and (tvbst.fdnam = 'UVPIK');
```
