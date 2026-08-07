---
name: I_INSPECTIONSUBSETTP_21
description: "Inspectionsubsettp 21"
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
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONSUBSETTP_21

**Inspectionsubsettp 21**

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
| `InspectionSubsetInternalID` | ✓ | |  |  |  |  |
| `InspPlanOperationInternalID` | ✓ | |  |  |  |  |
| `InspectionSubsetSortKey` |  | |  |  |  |  |
| `MaterialSample` |  | |  |  |  |  |
| `InspSbstMatlSmplProperty` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `InspSbstEquipProperty` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `InspSbstFuncnlLocProperty` |  | |  |  |  |  |
| `ShopFloorItem` |  | |  |  |  |  |
| `InspSbstShopFloorItemProperty` |  | |  |  |  |  |
| `SelectedCodeSetPlant` |  | |  |  |  |  |
| `SelectedCodeSet` |  | |  |  |  |  |
| `InspSubsetUsageDcsnCodeGroup` |  | |  |  |  |  |
| `InspSubsetUsageDcsnCode` |  | |  |  |  |  |
| `InspSubsetUsageDcsnValuation` |  | |  |  |  |  |
| `InspectionSubsetTime` |  | |  |  |  |  |
| `InspSbstTimeFldProperty` |  | |  |  |  |  |
| `InspectionSubsetDate` |  | |  |  |  |  |
| `InspSbstDateFldProperty` |  | |  |  |  |  |
| `InspSubsetLongNumericKey` |  | |  |  |  |  |
| `InspSbstLongNmbrFldProperty` |  | |  |  |  |  |
| `InspSubsetShortNumericKey` |  | |  |  |  |  |
| `InspSbstShrtNmbrFldProperty` |  | |  |  |  |  |
| `InspectionSubsetLongCharKey` |  | |  |  |  |  |
| `InspSbstLongTxtFldProperty` |  | |  |  |  |  |
| `InspectionSubsetShortCharKey` |  | |  |  |  |  |
| `InspSbstShrtTxtFldProperty` |  | |  |  |  |  |
| `InspectionPartialLot` |  | |  |  |  |  |
| `InspectionSubsetYieldQty` |  | |  |  |  |  |
| `InspectionSubsetScrapQty` |  | |  |  |  |  |
| `InspectionSubsetReworkQty` |  | |  |  |  |  |
| `InspectionSubsetQtyUnit` |  | |  |  |  |  |
| `Inspector` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_InspSubsetCharacteristic` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Point - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
  }
}
define view entity I_InspectionSubsetTP_21
  as projection on R_InspectionSubsetTP as InspectionSubset
{
  key InspectionLot,
  key InspectionSubsetInternalID,
  key InspPlanOperationInternalID,
      InspectionSubsetSortKey,
      MaterialSample,
      InspSbstMatlSmplProperty,
      Equipment,
      InspSbstEquipProperty,
      FunctionalLocation,
      InspSbstFuncnlLocProperty,
      ShopFloorItem,
      InspSbstShopFloorItemProperty,
      SelectedCodeSetPlant,
      SelectedCodeSet,
      InspSubsetUsageDcsnCodeGroup,
      InspSubsetUsageDcsnCode,
      InspSubsetUsageDcsnValuation,
      InspectionSubsetTime,
      InspSbstTimeFldProperty,
      InspectionSubsetDate,
      InspSbstDateFldProperty,
      InspSubsetLongNumericKey,
      InspSbstLongNmbrFldProperty,
      InspSubsetShortNumericKey,
      InspSbstShrtNmbrFldProperty,
      InspectionSubsetLongCharKey,
      InspSbstLongTxtFldProperty,
      InspectionSubsetShortCharKey,
      InspSbstShrtTxtFldProperty,
      InspectionPartialLot,
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      InspectionSubsetYieldQty,
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      InspectionSubsetScrapQty,
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      InspectionSubsetReworkQty,
      InspectionSubsetQtyUnit,
      Inspector,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      ChangedDateTime,

      _InspectionOperation      : redirected to parent I_InspectionOperationTP_2,
      _InspectionLot            : redirected to I_InspectionLotTP_2,
      _InspSubsetCharacteristic : redirected to composition child I_InspSubsetCharacteristicTP_2
}
```
