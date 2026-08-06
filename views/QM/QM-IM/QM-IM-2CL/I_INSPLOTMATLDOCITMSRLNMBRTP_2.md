---
name: I_INSPLOTMATLDOCITMSRLNMBRTP_2
description: Insplotmatldocitmsrlnmbrtp 2
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTMATLDOCITMSRLNMBRTP_2

**Insplotmatldocitmsrlnmbrtp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `InspectionLot` |
| key `InspLotMatlDocItem` | `InspLotMatlDocItem` |
| key `Equipment` | `Equipment` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `MaterialDocument` | `MaterialDocument` |
| `SerialNumber` | `SerialNumber` |
| `InspLotMatlDocItemType` | `InspLotMatlDocItemType` |
| `_InspectionLot` | *Association* |
| `_InspLotMatlDocItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Insp Stock Posting Serial Number - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'InspLotMatlDocItmSerialNumber'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #B,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
  }
define view entity I_InspLotMatlDocItmSrlNmbrTP_2
  as projection on R_InspLotMatlDocItmSrlNmbrTP
{
  key InspectionLot,
  key InspLotMatlDocItem,
  key Equipment,
      MaterialDocumentYear,
      MaterialDocument,   
      SerialNumber,
      InspLotMatlDocItemType,
      /* Associations */
      _InspectionLot      : redirected to I_InspectionLotTP_2,
      _InspLotMatlDocItem : redirected to parent I_InspLotMatlDocItemTP_2
}
```
