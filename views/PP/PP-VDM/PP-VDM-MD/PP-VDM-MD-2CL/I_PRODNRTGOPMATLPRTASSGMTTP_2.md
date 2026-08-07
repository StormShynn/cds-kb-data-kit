---
name: I_PRODNRTGOPMATLPRTASSGMTTP_2
description: Prodnrtgopmatlprtassgmttp 2
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRTGOPMATLPRTASSGMTTP_2

**Prodnrtgopmatlprtassgmttp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |
| `ProductionRouting` | ✓ | |  |  |
| `ProductionRoutingSequence` | ✓ | |  |  |
| `ProductionRoutingOpIntID` | ✓ | |  |  |
| `BOOOperationPRTInternalID` | ✓ | |  |  |
| `BOOOperationPRTIntVersCounter` | ✓ | |  |  |
| `ProductionResourceType` |  | |  |  |
| `ProductionResourceInternalID` |  | |  |  |
| `Material` |  | |  |  |
| `Plant` |  | |  |  |
| `ProdnRsceToolItemNumber` |  | |  |  |
| `ProdnRsceToolStandardTextCode` |  | |  |  |
| `ProdnRsceToolText` |  | |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |
| `ProdnRsceToolStandardWorkQty` |  | |  |  |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  |
| `ProdnRsceToolUsageQuantity` |  | |  |  |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `_NonSqncTP` | | ✓ | | |
| `_Header` | | ✓ | | |
| `_ProdnRtgTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Matl PRT Assignment - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRtgOpMatlPRTAssgmtTP_2
  as projection on R_ProdnRtgOpMatlPRTAssgmtTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
  key ProductionRoutingOpIntID,
  key BOOOperationPRTInternalID,
  key BOOOperationPRTIntVersCounter,
      ProductionResourceType,
      ProductionResourceInternalID,
      Material,
      Plant,
      ProdnRsceToolItemNumber,
      ProdnRsceToolStandardTextCode,
      ProdnRsceToolText,
      ProdnRsceToolControlProfile,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
      ProdnRsceToolStandardWorkQty,
      ProdnRsceToolStdWorkQtyUnit,
      ProdnRsceToolTotQtyCalcFormula,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolUsageQuantityUnit'
      ProdnRsceToolUsageQuantity,
      ProdnRsceToolUsageQuantityUnit,
      ProdnRsceToolUsageQtyCalcFmla,
      ChangeNumber,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ChangedDateTime,
      /* Associations */
      _NonSqncTP  : redirected to parent I_ProdnRtgNonHistoricSqncTP_2,
      _Header     : redirected to I_ProductionRoutingHeaderTP_2,
      _ProdnRtgTP : redirected to I_ProductionRoutingTP_2
}
```
