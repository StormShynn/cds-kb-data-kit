---
name: I_PICKINGCONFIRMATIONSTATUST
description: "Pickingconfirmationstatust"
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
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PICKINGCONFIRMATIONSTATUST

**Pickingconfirmationstatust**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PickingConfirmationStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PickingConfirmationStatusDesc` |  | |  | `bezei` |  |  |
| `_PickingConfirmationStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PickingConfirmationStatus` | `I_PickingConfirmationStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PickingConfirmationStatus'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'PickingConfirmationStatus'
//Commented by VDM CDS Suite Plugin:@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Picking Confirmation Status - Text'
//Commented by VDM CDS Suite Plugin:@Analytics: { dataCategory: #TEXT, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEPICKCNFSTST'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_PickingConfirmationStatusT
as
select from tvbst
association [0..1] to I_PickingConfirmationStatus as _PickingConfirmationStatus on $projection.PickingConfirmationStatus = _PickingConfirmationStatus.PickingConfirmationStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_PickingConfirmationStatus'
    key statu as PickingConfirmationStatus,
    
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text
    bezei as PickingConfirmationStatusDesc,
    
    _PickingConfirmationStatus,
    _Language
    
} 

where tvbst.tbnam = 'LIPS' and  tvbst.fdnam = 'KOQUA';
```
