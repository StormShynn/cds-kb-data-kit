---
name: I_PRODUCTINSPTYPESETTING
description: "Productinsptypesetting"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - product
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_PRODUCTINSPTYPESETTING

**Productinsptypesetting**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  | `art` |  |  |
| `Product` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `InspLotIsTaskListRequired` |  | |  | `ppl` |  |  |
| `InspLotHasMaterialSpec` |  | |  | `spezueber` |  |  |
| `InspLotHasConfignSpecification` |  | |  | `conf` |  |  |
| `InspLotHasBatchCharc` |  | |  | `tls` |  |  |
| `InspLotHasAutomSpecAssgmt` |  | |  | `app` |  |  |
| `InspLotHasCharc` |  | |  | `mer` |  |  |
| `HasPostToInspectionStock` |  | |  | `insmk` |  |  |
| `InspLotIsAutomUsgeDcsnPossible` |  | |  | `ave` |  |  |
| `SamplingProcedure` |  | |  | `stichprver` |  |  |
| `InspLotDynamicRule` |  | |  | `dynregel` |  |  |
| `InspLotSampleQuantityInPercent` |  | |  | `sproz` |  |  |
| `InspectionLotIsFullInspection` |  | |  | `hpz` |  |  |
| `InspLotSkipIsAllowed` |  | |  | `dyn` |  |  |
| `InspLotHasManualSampleSize` |  | |  | `mpb` |  |  |
| `InspLotIsSmplCalcMnlTriggered` |  | |  | `mst` |  |  |
| `InspLotIsSerialNmbrPossible` |  | |  | `ein` |  |  |
| `InspLotDurationInDays` |  | |  | `mpdau` |  |  |
| `InspLotSummaryControl` |  | |  | `chg` |  |  |
| `InspQualityScoreProcedure` |  | |  | `qkzverf` |  |  |
| `InspLotAcceptedScrapRatioInPct` |  | |  | `qpmat` |  |  |
| `InspectionLotHasAppraisalCosts` |  | |  | `kzprfkost` |  |  |
| `QualityCostCollector` |  | |  | `aufnr_co` |  |  |
| `ProdInspTypeSettingIsActive` |  | |  | `aktiv` |  |  |
| `InspTypeIsPrfrd` |  | |  | `apa` |  |  |
| `InspLotHasHandlingUnit` |  | |  | `afr` |  |  |
| `InspLotHasMultipleSpec` |  | |  | `ms_flag` |  |  |
| `InspLotOfEWMSummaryControl` |  | |  | `chg_orig_17` |  |  |
| `_InspectionLotType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotType` | `I_InspectionLotType` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDCTINSPTPST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Settings for Inspection Type in Product'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
define view I_ProductInspTypeSetting 
  as select from qmat 
  
    association [1..1] to I_InspectionLotType as _InspectionLotType   on  $projection.InspectionLotType = _InspectionLotType.InspectionLotType
    association [1..1] to I_Product           as _Product             on  $projection.Product = _Product.Product
    association [1..1] to I_Plant             as _Plant               on  $projection.Plant = _Plant.Plant
  
{
  key art   as InspectionLotType, //old:ProductInspectionType
  key matnr as Product,
  key werks as Plant,
      ppl as InspLotIsTaskListRequired,
      spezueber as InspLotHasMaterialSpec,
      conf as InspLotHasConfignSpecification,
      tls  as InspLotHasBatchCharc,//new, old:IsProdInspSpecBatchDetermined,
      app as InspLotHasAutomSpecAssgmt, //new,old: ProdInspHasAutomSpecAssgmt,
      mer as InspLotHasCharc, //new,old:IsProdInspByCharacteristics,
      insmk as HasPostToInspectionStock,
      ave as InspLotIsAutomUsgeDcsnPossible,
      stichprver as SamplingProcedure,
      dynregel as InspLotDynamicRule,
      sproz as InspLotSampleQuantityInPercent, // old:ProductInspectionPercentage,
      hpz as InspectionLotIsFullInspection,
      dyn as InspLotSkipIsAllowed, //new, old:IsProductInspectionSkipAllowed,
      mpb as InspLotHasManualSampleSize, //old: IsProdInspSmplEnteredManually,
      mst as InspLotIsSmplCalcMnlTriggered,
      ein as InspLotIsSerialNmbrPossible,
      mpdau as InspLotDurationInDays,  //new, old:ProdAverageInspectionDuration,
      chg as InspLotSummaryControl, //new, old: CtrlProdInspectionLotCreation,
      qkzverf as InspQualityScoreProcedure,
      qpmat as InspLotAcceptedScrapRatioInPct, //new, old ProdInspLotAllwdShrOfScrapPct,
      kzprfkost as InspectionLotHasAppraisalCosts,
      aufnr_co as QualityCostCollector,
      aktiv as ProdInspTypeSettingIsActive, //new, old: ProdInspTypeMatlCombnIsActive,
      apa as InspTypeIsPrfrd, //new, old: IsPrfrdProductInspectionType,
      afr as InspLotHasHandlingUnit, //new, old: ProdInspLotIsForHandlingUnit,
//MMA
//FEH
//PRFRQ
//NKMPR
      ms_flag as InspLotHasMultipleSpec, //new, old: ProdInspTypeHasMltplSpec,
      chg_orig_17 as  InspLotOfEWMSummaryControl,  
  
  //Association
  _InspectionLotType,
  _Product,
  _Plant
}
```
