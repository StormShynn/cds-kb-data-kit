---
name: I_AGREEMENTPORTIONCALCDATA
description: "Calculation Results for CAG Portions"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value
semantic_en: "Calculation Results for CAG Portions"
semantic_vi: "Calculation Results for CAG Portions — CDS view giao diện dựa trên cms_calc_cag_por."
keywords:
  - "calculation"
  - "results"
  - "for"
  - "cag"
  - "portions"
  - "agreement"
  - "portion"
  - "collateral"
  - "constellation"
  - "crcy"
  - "agrmt"
  - "portn"
  - "free"
  - "colltrl"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONCALCDATA

**Calculation Results for CAG Portions**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionUUID` | ✓ | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` | ✓ | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` |  | |  | `con_guid` | `RAW(16)` | Constellation GUID |
| `CollateralAgreementPortionCrcy` |  | |  | `result_curr` | `CUKY(5)` | Calculations Result Currency |
| `AgrmtPortnFreeColltrlMaxRskAmt` |  | |  | `free_col_val_m` | `CURR(17)` | Free collateral calculation for CAG |
| `AgrmtPortnFreeColltrlCurRskAmt` |  | |  | `free_col_val_c` | `CURR(17)` | Free collateral calculation for CAG |
| `AgrmtPortnFreeColltrlCurRskPct` |  | |  | `free_coll_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtPortnFreeColltrlMaxRskPct` |  | |  | `free_coll_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtPortnCalcLastChgdBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `AgrmtPortnCalcLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Date on which last change was done |
| `AgrmtPortnCalcLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Time at which last change was made |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AgreementPortionRules` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_CollateralAgrmtPortionCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AgreementPortionRules` | `I_AgreementPortionRules` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_CollateralAgrmtPortionCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORCALCD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'XXL',
        dataClass: 'TRANSACTIONAL'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ]
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Calculation Results for CAG Portions'
define view I_AgreementPortionCalcData
  as select from cms_calc_cag_por
  association [0..1] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  $projection.CollateralAgreementUUID = _CollateralObjectCalcData.CollateralObjectUUID
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
                                                                                      and $projection.AgreementPortionUUID    = _AgreementReceivableCalcData.AgreementPortionUUID
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData     on  $projection.CollateralAgreementUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..1] to I_AgreementPortion            as _AgreementPortion            on  $projection.AgreementPortionUUID    = _AgreementPortion.AgreementPortionUUID
                                                                                      and $projection.CollateralAgreementUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner            on  $projection.CollateralAgreementUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
                                                                                      or  $projection.AgreementPortionUUID    = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AgreementPortionRules       as _AgreementPortionRules       on  $projection.AgreementPortionUUID = _AgreementPortionRules.AgreementPortionUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on  $projection.CollateralAgreementUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp   on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData on  $projection.AgreementPortionUUID = _AgreementReceivableLinkData.AgreementPortionUUID
  association [0..1] to I_Currency                    as _CollateralAgrmtPortionCrcy  on  $projection.CollateralAgreementPortionCrcy = _CollateralAgrmtPortionCrcy.Currency
{
  key cag_por_guid    as AgreementPortionUUID,
  key cag_guid        as CollateralAgreementUUID,
      con_guid        as CollateralConstellationUUID,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralAgrmtPortionCrcy'
      result_curr     as CollateralAgreementPortionCrcy,
      @Semantics.amount.currencyCode: 'CollateralAgreementPortionCrcy'
      free_col_val_m  as AgrmtPortnFreeColltrlMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementPortionCrcy'
      free_col_val_c  as AgrmtPortnFreeColltrlCurRskAmt,
      free_coll_pct_c as AgrmtPortnFreeColltrlCurRskPct,
      free_coll_pct_m as AgrmtPortnFreeColltrlMaxRskPct,
      last_chg_by     as AgrmtPortnCalcLastChgdBy,
      last_chg_date   as AgrmtPortnCalcLastChgdDate,
      last_chg_time   as AgrmtPortnCalcLastChgdTime,

      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementReceivableCalcData,
      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AgreementPortionRules,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementReceivableLinkData,
      _CollateralAgrmtPortionCrcy
}
```
