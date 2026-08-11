---
name: I_AGREEMENTRECEIVABLECALCDATA
description: "Calculation Results for CAG Receivable"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value
semantic_en: "Calculation Results for CAG Receivable"
semantic_vi: "Calculation Results for CAG Receivable — CDS view giao diện dựa trên cms_calc_cag_rbl."
keywords:
  - "calculation"
  - "results"
  - "for"
  - "cag"
  - "receivable"
  - "agreement"
  - "collateral"
  - "credit"
  - "system"
  - "portion"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRECEIVABLECALCDATA

**Calculation Results for CAG Receivable**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementReceivableUUID` | ✓ | |  | `cag_rbl_guid` | `RAW(16)` | GUID for Table CMS_CAG_RBL |
| `CollateralRblCreditSystem` |  | |  | `credit_system` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  | `rbl_id` | `CHAR(64)` | Receivable ID |
| `AgreementPortionUUID` |  | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` |  | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` |  | |  | `con_guid` | `RAW(16)` | Constellation GUID |
| `CollateralAgreementRblCrcy` |  | |  | `result_curr` | `CUKY(5)` | Calculations Result Currency |
| `AgrmtRblDistrdColltrlCurRskAmt` |  | |  | `dist_cv_c` | `CURR(17)` | Distributed Collateral value |
| `AgrmtRblDistrdColltrlMaxRskAmt` |  | |  | `dist_cv_m` | `CURR(17)` | Distributed Collateral value |
| `AgrmtRblDistrdColltrlCurRskPct` |  | |  | `dist_cv_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtRblDistrdColltrlMaxRskPct` |  | |  | `dist_cv_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementRblCalcLastChgdBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `AgreementRblCalcLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Date on which last change was done |
| `AgreementRblCalcLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Time at which last change was made |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AgreementPortionRules` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_ReceivableData` | | ✓ | | | | |
| `_CollateralAgreementRblCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..1] |
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AgreementPortionRules` | `I_AgreementPortionRules` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..1] |
| `_ReceivableData` | `I_ReceivableData` | [0..*] |
| `_CollateralAgreementRblCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRBLCALCD',
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
@EndUserText.label: 'Calculation Results for CAG Receivable'
define view I_AgreementReceivableCalcData
  as select from cms_calc_cag_rbl
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  $projection.CollateralAgreementUUID                = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                      or  (
                                                                                          $projection.CollateralRblCreditSystem              = _CollateralObjectCalcData.CollateralRblCreditSystem
                                                                                          and $projection.CollateralReceivableID             = _CollateralObjectCalcData.CollateralReceivableID
                                                                                          and _CollateralObjectCalcData.CollateralObjectType = 'RBL'
                                                                                        )
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..1] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
                                                                                      and $projection.AgreementPortionUUID    = _AgreementPortionCalcData.AgreementPortionUUID
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
  association [0..1] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData on  $projection.AgreementReceivableUUID = _AgreementReceivableLinkData.AgreementReceivableUUID
  association [0..*] to I_ReceivableData              as _ReceivableData              on  $projection.CollateralRblCreditSystem = _ReceivableData.CollateralRblCreditSystem
                                                                                      and $projection.CollateralReceivableID    = _ReceivableData.CollateralReceivableID
  association [0..1] to I_Currency                    as _CollateralAgreementRblCrcy  on  $projection.CollateralAgreementRblCrcy = _CollateralAgreementRblCrcy.Currency
{
  key cag_rbl_guid  as AgreementReceivableUUID,
      credit_system as CollateralRblCreditSystem,
      rbl_id        as CollateralReceivableID,
      cag_por_guid  as AgreementPortionUUID,
      cag_guid      as CollateralAgreementUUID,
      con_guid      as CollateralConstellationUUID,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralAgreementRblCrcy'
      result_curr   as CollateralAgreementRblCrcy,
      @Semantics.amount.currencyCode: 'CollateralAgreementRblCrcy'
      dist_cv_c     as AgrmtRblDistrdColltrlCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementRblCrcy'
      dist_cv_m     as AgrmtRblDistrdColltrlMaxRskAmt,
      dist_cv_pct_c as AgrmtRblDistrdColltrlCurRskPct,
      dist_cv_pct_m as AgrmtRblDistrdColltrlMaxRskPct,
      last_chg_by   as AgreementRblCalcLastChgdBy,
      last_chg_date as AgreementRblCalcLastChgdDate,
      last_chg_time as AgreementRblCalcLastChgdTime,

      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AgreementPortionRules,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementReceivableLinkData,
      _ReceivableData,
      _CollateralAgreementRblCrcy
}
```
