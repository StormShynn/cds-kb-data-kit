---
name: I_PRODPLNTINSPTYPESETTINGTP_2
description: "Prodplntinsptypesettingtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODPLNTINSPTYPESETTINGTP_2

**Prodplntinsptypesettingtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `InspLotIsTaskListRequired` |  | |  |  |  |  |
| `InspLotHasMaterialSpec` |  | |  |  |  |  |
| `InspLotHasConfignSpecification` |  | |  |  |  |  |
| `InspLotHasBatchCharc` |  | |  |  |  |  |
| `InspLotHasAutomSpecAssgmt` |  | |  |  |  |  |
| `InspLotHasCharc` |  | |  |  |  |  |
| `HasPostToInspectionStock` |  | |  |  |  |  |
| `InspLotIsAutomUsgeDcsnPossible` |  | |  |  |  |  |
| `SamplingProcedure` |  | |  |  |  |  |
| `InspLotDynamicRule` |  | |  |  |  |  |
| `InspLotSampleQuantityInPercent` |  | |  |  |  |  |
| `InspectionLotIsFullInspection` |  | |  |  |  |  |
| `InspLotSkipIsAllowed` |  | |  |  |  |  |
| `InspLotHasManualSampleSize` |  | |  |  |  |  |
| `InspLotIsSmplCalcMnlTriggered` |  | |  |  |  |  |
| `InspLotIsSerialNmbrPossible` |  | |  |  |  |  |
| `InspLotDurationInDays` |  | |  |  |  |  |
| `InspLotSummaryControl` |  | |  |  |  |  |
| `InspQualityScoreProcedure` |  | |  |  |  |  |
| `InspLotAcceptedScrapRatioInPct` |  | |  |  |  |  |
| `InspectionLotHasAppraisalCosts` |  | |  |  |  |  |
| `QualityCostCollector` |  | |  |  |  |  |
| `ProdInspTypeSettingIsActive` |  | |  |  |  |  |
| `InspTypeIsPrfrd` |  | |  |  |  |  |
| `InspLotHasHandlingUnit` |  | |  |  |  |  |
| `InspLotHasMultipleSpec` |  | |  |  |  |  |
| `InspLotOfEWMSummaryControl` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Inspection Type Settings - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdPlntInspTypeSettingTP_2
  as projection on R_ProdPlntInspTypeSettingTP as ProdPlntInspTypeSetting
{
  key InspectionLotType,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,

      @Semantics.booleanIndicator: true
      InspLotIsTaskListRequired,
      @Semantics.booleanIndicator: true
      InspLotHasMaterialSpec,
      @Semantics.booleanIndicator: true
      InspLotHasConfignSpecification,
      @Semantics.booleanIndicator: true
      InspLotHasBatchCharc,
      @Semantics.booleanIndicator: true
      InspLotHasAutomSpecAssgmt,
      @Semantics.booleanIndicator: true
      InspLotHasCharc,
      @Semantics.booleanIndicator: true
      HasPostToInspectionStock,
      @Semantics.booleanIndicator: true
      InspLotIsAutomUsgeDcsnPossible,
      SamplingProcedure,
      InspLotDynamicRule,
      InspLotSampleQuantityInPercent,
      @Semantics.booleanIndicator: true
      InspectionLotIsFullInspection,
      @Semantics.booleanIndicator: true
      InspLotSkipIsAllowed,
      @Semantics.booleanIndicator: true
      InspLotHasManualSampleSize,
      @Semantics.booleanIndicator: true
      InspLotIsSmplCalcMnlTriggered,
      @Semantics.booleanIndicator: true
      InspLotIsSerialNmbrPossible,
      InspLotDurationInDays,
      InspLotSummaryControl,
      InspQualityScoreProcedure,
      InspLotAcceptedScrapRatioInPct,
      @Semantics.booleanIndicator: true
      InspectionLotHasAppraisalCosts,
      QualityCostCollector,
      @Semantics.booleanIndicator: true
      ProdInspTypeSettingIsActive,
      @Semantics.booleanIndicator: true
      InspTypeIsPrfrd,
      @Semantics.booleanIndicator: true
      InspLotHasHandlingUnit,
      @Semantics.booleanIndicator: true
      InspLotHasMultipleSpec,
      InspLotOfEWMSummaryControl,

      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2
}
```
