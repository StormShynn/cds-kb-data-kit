---
name: C_CHANGERECORDDEX
description: Change RecordDEX
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - change-record
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDDEX

**Change RecordDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |  |  |
| `ChangeRecord` |  | |  |  |  |  |
| `ChangeRecordType` |  | |  |  |  |  |
| `ParentChangeRecordUUID` |  | |  |  |  |  |
| `RootChangeRecordUUID` |  | |  |  |  |  |
| `ChangeRecordPriority` |  | |  |  |  |  |
| `ChangeRecordStatus` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ChangeRecordCategory` |  | |  |  |  |  |
| `ChgRecordApplication` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ChangeRecordLifecycleStatus` |  | |  |  |  |  |
| `ChgRecdDigitalSignatureStatus` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #L}
@ObjectModel :{
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }
@EndUserText.label: 'Data Extraction for Change Record Header'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

// CDC Annotation for DATA extraction

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}
@AccessControl.authorizationCheck: #MANDATORY
define view entity C_ChangeRecordDEX
  as select from I_ChgRecHeader
{
            @Semantics.uuid: true
  key       ChangeRecordUUID,
            ChangeRecord,
            ChangeRecordType,
            @Semantics.uuid: true
            ParentChangeRecordUUID,
            @Semantics.uuid: true
            RootChangeRecordUUID,
            ChangeRecordPriority,
            ChangeRecordStatus,
            ChangeNumber,
            ChangeRecordCategory,
            ChgRecordApplication,
            CreatedByUser,
            CreationDateTime,
            LastChangedByUser,
            LastChangeDateTime,
            ChangeRecordLifecycleStatus,
            ChgRecdDigitalSignatureStatus
}
```
