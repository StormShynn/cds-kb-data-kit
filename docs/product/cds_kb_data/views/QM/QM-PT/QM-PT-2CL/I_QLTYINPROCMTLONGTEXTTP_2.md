---
name: I_QLTYINPROCMTLONGTEXTTP_2
description: "Qltyinprocmtlongtexttp 2"
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
  - transactional-processing
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYINPROCMTLONGTEXTTP_2

**Qltyinprocmtlongtexttp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `QltyInProcmtIntID` | ✓ | |  |  |  |  |
| `LongTextInternalNumber` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` |  | |  |  |  |  |
| `QltyInProcmtLongText` |  | |  |  |  |  |
| `LongTextCreatedByUser` |  | |  |  |  |  |
| `LongTextCreatedAt` |  | |  |  |  |  |
| `LongTextLastChangedByUser` |  | |  |  |  |  |
| `LongTextLastChangedAt` |  | |  |  |  |  |
| `_QltyInProcurement` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Qlty Info Recd in Procmt Long Text - TP'
@ObjectModel.dataCategory: #TEXT
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking    : #REQUIRED
@ObjectModel.usageType: { 
                        serviceQuality  : #C,
                        sizeCategory    : #S,
                        dataClass       : #MASTER
                }

define view entity I_QltyInProcmtLongTextTP_2 as projection on R_QltyInProcmtLongTextTP {
  key Material,
  key QltyInProcmtIntID,
  key LongTextInternalNumber,
  @Semantics.language: true
  key Language,
  LongTextID,
  
  @Semantics.text: true
  QltyInProcmtLongText,
  LongTextCreatedByUser,
  LongTextCreatedAt,
  LongTextLastChangedByUser,
  LongTextLastChangedAt,
  /* Associations */
  _QltyInProcurement : redirected to parent I_QualityInProcurementTP_2
}
```
