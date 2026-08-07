---
name: I_QLTYFIRSTARTICLEINSPTP_2
description: Qltyfirstarticleinsptp 2
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYFIRSTARTICLEINSPTP_2

**Qltyfirstarticleinsptp 2**

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
| `QltyInProcmt1stArticleInsp` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `InspLotUsageDecisionValuation` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_QltyInProcurement` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'First Article Inspection - TP'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType: { 
                        serviceQuality  : #C,
                        sizeCategory    : #S,
                        dataClass       : #MASTER 
                }


define view entity I_QltyFirstArticleInspTP_2 as projection on R_QltyFirstArticleInspTP {
  key Material,
  key QltyInProcmtIntID,
  key QltyInProcmt1stArticleInsp,
  PurchaseOrder,
  PurchaseOrderItem,
  InspLotUsageDecisionValuation,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  ChangedDateTime,
  
  /* Associations */
  _QltyInProcurement : redirected to parent I_QualityInProcurementTP_2
}
```
