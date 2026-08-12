---
name: I_PICKINGCONFIRMATIONSTATUS
description: "Pickingconfirmationstatus"
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
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PICKINGCONFIRMATIONSTATUS

**Pickingconfirmationstatus**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PickingConfirmationStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PickingConfirmationStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'PickingConfirmationStatus'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'PickingConfirmationStatus'
@EndUserText.label: 'Picking Confirmation Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEPICKCNFSTS'
@Metadata.ignorePropagatedAnnotations:true 
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ItemPickConfirmationStatus'

define view I_PickingConfirmationStatus
as select from dd07l

association [0..*] to I_PickingConfirmationStatusT as _Text on $projection.PickingConfirmationStatus = _Text.PickingConfirmationStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as PickingConfirmationStatus,
    
    _Text
}

where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
