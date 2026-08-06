---
name: I_MAINTORDEROPLONGTEXTTP
description: Maintorderoplongtexttp
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPLONGTEXTTP

**Maintorderoplongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `MaintenanceOrder` |
| key `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| key `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| key `TextObjectType` | `TextObjectType` |
| key `Language` | `Language` |
| `OrderOperationLongText` | `OrderOperationLongText` |
| `_MaintenanceOrder` | *Association* |
| `_MaintenanceOrderOperation` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Oper Long Text - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpLongTextTP
  as projection on R_MaintOrderOpLongTextTP

{
  key     MaintenanceOrder,
  key     MaintenanceOrderOperation,
  key     MaintenanceOrderSubOperation,
  key     TextObjectType,
          @Semantics.language: true
  key     Language,
          @Semantics.text:true
          OrderOperationLongText,
          _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
          _MaintenanceOrderOperation : redirected to parent I_MaintenanceOrderOperationTP
}
```
