---
name: I_INSPECTIONRESULTSTATUSTEXT
description: "Inspectionresultstatustext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - inspection
  - text
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTSTATUSTEXT

**Inspectionresultstatustext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionResultStatus` | ✓ | |  | `status` |  |  |
| `InspectionResultStatusText` |  | |  | `cast( tq76t.kurztext as vdm_qinspresultstatus_text preserving type )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Result Status - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspectionResultStatus'
}
@Analytics.technicalName: 'IINSPRESULTSTATT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Inspectionresultstatustext as select from tq76t 
{
   @Semantics.language: true
   key tq76t.sprache as Language,
   key tq76t.status as InspectionResultStatus,
   @Semantics.text: true
   cast( tq76t.kurztext as vdm_qinspresultstatus_text preserving type  ) as InspectionResultStatusText
}
```
