---
name: I_INSPLOTMATLDOCITEMTP_2
description: Insplotmatldocitemtp 2
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
  - transactional-processing
  - item-level
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTMATLDOCITEMTP_2

**Insplotmatldocitemtp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `InspLotMatlDocItem` | ✓ | |  |  |  |  |
| `InspLotMatlDocItemType` |  | |  |  |  |  |
| `InspLotMatlDocItmQtyUnit` |  | |  |  |  |  |
| `InspLotQtyPosted` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `InspLotMaterialPostedTo` |  | |  |  |  |  |
| `InspLotBatchTransferredTo` |  | |  |  |  |  |
| `MaterialDocumentItemText` |  | |  |  |  |  |
| `UsageDecisionStockType` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspLotMatlDocItmSrlNmbr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Material Document Item in Insp Lot - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
  }
  
define view entity I_InspLotMatlDocItemTP_2 as projection on R_InspLotMatlDocItemTP 
{
  key InspectionLot,
  key InspLotMatlDocItem,
  InspLotMatlDocItemType,
  InspLotMatlDocItmQtyUnit,
  @Semantics.quantity.unitOfMeasure: 'InspLotMatlDocItmQtyUnit'
  InspLotQtyPosted,  
  StorageLocation,
  InspLotMaterialPostedTo,
  InspLotBatchTransferredTo,
  MaterialDocumentItemText,
  UsageDecisionStockType,
  CreationDate,

  /* Associations */
  _InspectionLot:           redirected to parent I_InspectionLotTP_2,
  _InspLotMatlDocItmSrlNmbr: redirected to composition child I_InspLotMatlDocItmSrlNmbrTP_2

}
```
