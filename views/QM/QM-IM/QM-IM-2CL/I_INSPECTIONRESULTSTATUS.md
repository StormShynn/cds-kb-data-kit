---
name: I_INSPECTIONRESULTSTATUS
description: Inspectionresultstatus
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTSTATUS

**Inspectionresultstatus**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionResultStatus` | ✓ | |  | `status` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Inspectionresultstatustext` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Result Status'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionResultStatus'
@Analytics.technicalName: 'IINSPRESULTSTAT'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionResultStatus as select from tq76 
   association [0..*] to I_Inspectionresultstatustext as _Text 
     on $projection.InspectionResultStatus = _Text.InspectionResultStatus
{
   @ObjectModel.text.association: '_Text'
  key tq76.status as InspectionResultStatus,    
  
   // Do show text field directly in consumption/odata layer; in such a layer text is consumed via association _Text
   @UI.hidden: true
   _Text[1:Language = $session.system_language].InspectionResultStatusText,
   
  //Associations
   _Text    
}
```
