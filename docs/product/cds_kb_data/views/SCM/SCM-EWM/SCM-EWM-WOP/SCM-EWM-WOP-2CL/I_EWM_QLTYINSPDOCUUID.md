---
name: I_EWM_QLTYINSPDOCUUID
description: "Ewm Qltyinspdocuuid"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_QLTYINSPDOCUUID

**Ewm Qltyinspdocuuid**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityInspectionDocUUID` | ✓ | |  |  |  |  |
| `QualityInspectionDocument` |  | |  |  |  |  |
| `InspectionPartialLot` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Whse Quality Insp UUID to Quality Insp'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_EWM_QltyInspDocUUID
  as select from P_EWM_QltyInspectionEmbedded
{     
  key P_EWM_QltyInspectionEmbedded.QualityInspectionDocUUID,
      P_EWM_QltyInspectionEmbedded.QualityInspectionDocument,
      P_EWM_QltyInspectionEmbedded.InspectionPartialLot
}
```
