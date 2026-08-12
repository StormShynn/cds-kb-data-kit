---
name: I_COLLATERALOBJECTCALCDATA
description: "Calculation Result for CMS Object"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value
semantic_en: "Calculation Result for CMS Object"
semantic_vi: "Calculation Result for CMS Object — CDS view giao diện dựa trên cms_calc_obj."
keywords:
  - "calculation"
  - "result"
  - "for"
  - "cms"
  - "object"
  - "collateral"
  - "type"
  - "constellation"
  - "asset"
  - "parent"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTCALCDATA

**Calculation Result for CMS Object**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectUUID` | ✓ | |  | `obj_guid` | `RAW(16)` | CMS-Basel II: Object GUID |
| `CollateralObjectType` |  | |  | `obj_typ` | `CHAR(3)` | CMS Object Type |
| `CollateralConstellationUUID` |  | |  | `con_guid` | `RAW(16)` | Constellation GUID |
| `ObjectAssetType` |  | |  | `ast_typ` | `CHAR(6)` | Asset Type |
| `ObjectAssetParentUUID` |  | |  | `parent_guid` | `RAW(16)` | Asset Guid as a parent GUID for a sub-asset |
| `CollateralObjectCurrency` |  | |  | `result_curr` | `CUKY(5)` | Calculations Result Currency |
| `ObjectAssetAmount` |  | |  | `asset_value` | `CURR(17)` | Final Asset Value |
| `ObjectAssetLendingAmt` |  | |  | `lending_value` | `CURR(17)` | Lending value Calculation for Asset |
| `ObjectAssetLendingLimit1Amt` |  | |  | `lending_limit1` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit2Amt` |  | |  | `lending_limit2` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit3Amt` |  | |  | `lending_limit3` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit4Amt` |  | |  | `lending_limit4` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit5Amt` |  | |  | `lending_limit5` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingRange1Amt` |  | |  | `lending_range1` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange2Amt` |  | |  | `lending_range2` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange3Amt` |  | |  | `lending_range3` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange4Amt` |  | |  | `lending_range4` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange5Amt` |  | |  | `lending_range5` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingAmt` |  | |  | `prt_len_val` | `CURR(17)` | Lending value Calculation for Asset |
| `ObjectAssetPrtLendingLimit1Amt` |  | |  | `prt_len_lim1` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit2Amt` |  | |  | `prt_len_lim2` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit3Amt` |  | |  | `prt_len_lim3` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit4Amt` |  | |  | `prt_len_lim4` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit5Amt` |  | |  | `prt_len_lim5` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingRange1Amt` |  | |  | `prt_len_rng1` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange2Amt` |  | |  | `prt_len_rng2` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange3Amt` |  | |  | `prt_len_rng3` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange4Amt` |  | |  | `prt_len_rng4` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange5Amt` |  | |  | `prt_len_rng5` | `CURR(17)` | Lending Range calculation for Asset |
| `ObjAstFreeLendgLmtCurRskAmt` |  | |  | `free_lending_limit_c` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjAstFreeLendgLmtMaxRskAmt` |  | |  | `free_lending_limit_m` | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjAstFreeLendgLmtCurRskPct` |  | |  | `free_lending_limit_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `ObjAstFreeLendgLmtMaxRskPct` |  | |  | `free_lending_limit_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `CollateralRblCreditSystem` |  | |  | `credit_system` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  | `rbl_id` | `CHAR(64)` | Receivable ID |
| `RblCoverageGapCurRiskAmt` |  | |  | `coverage_gap_c` | `CURR(17)` | Coverage Gap Calculation for RBL |
| `RblCoverageGapMaxRiskAmt` |  | |  | `coverage_gap_m` | `CURR(17)` | Coverage Gap Calculation for RBL |
| `RblCoverageGapCurRiskPct` |  | |  | `cov_gap_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `RblCoverageGapMaxRiskPct` |  | |  | `cov_gap_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `RblCollateralRatioCurRiskPct` |  | |  | `coll_ratio_pct_c` | `DEC(10)` | Collateralization Ratio |
| `RblCollateralRatioMaxRiskPct` |  | |  | `coll_ratio_pct_m` | `DEC(10)` | Collateralization Ratio |
| `AgreementCollateralCurRiskAmt` |  | |  | `coll_value_c` | `CURR(17)` | Collateral Value Calculation for CAG |
| `AgreementCollateralMaxRiskAmt` |  | |  | `coll_value_m` | `CURR(17)` | Collateral Value Calculation for CAG |
| `AgreementCollateralCurRiskPct` |  | |  | `coll_value_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementCollateralMaxRiskPct` |  | |  | `coll_value_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendingCurRiskAmt` |  | |  | `lend_val_grt_c` | `CURR(17)` | Lending value calculation Guarantee |
| `AgreementGuarLendingMaxRiskAmt` |  | |  | `lend_val_grt_m` | `CURR(17)` | Lending value calculation Guarantee |
| `AgreementGuarLendingCurRiskPct` |  | |  | `lnd_vl_grt_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendingMaxRiskPct` |  | |  | `lnd_vl_grt_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendgLmtCurRskAmt` |  | |  | `lend_lmt_grt_c` | `CURR(17)` | Lending limit calculation for Guarantee |
| `AgreementGuarLendgLmtMaxRskAmt` |  | |  | `lend_lmt_grt_m` | `CURR(17)` | Lending limit calculation for Guarantee |
| `AgreementGuarLendgLmtCurRskPct` |  | |  | `lend_lmt_grt_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendgLmtMaxRskPct` |  | |  | `lend_lmt_grt_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtLoanToValAgrmtCurRskAmt` |  | |  | `ltov_wrt_cag_c` | `CURR(17)` | Loan to value ratio for cag as amount |
| `AgrmtLoanToValAgrmtMaxRskAmt` |  | |  | `ltov_wrt_cag_m` | `CURR(17)` | Loan to value ratio for cag as amount |
| `AgrmtLoanToValAgrmtCurRskPct` |  | |  | `ltov_cag_pct_c` | `DEC(10)` | Loan to value ratio for cag as percentage |
| `AgrmtLoanToValAgrmtMaxRskPct` |  | |  | `ltov_cag_pct_m` | `DEC(10)` | Loan to value ratio for cag as percentage |
| `AgrLoaToValPriorChrgCurRskAmt` |  | |  | `ltov_wrt_pr_c` | `CURR(17)` | Loan to value ratio with ref to prior charge: as amount |
| `AgrLoaToValPriorChrgMaxRskAmt` |  | |  | `ltov_wrt_pr_m` | `CURR(17)` | Loan to value ratio with ref to prior charge: as amount |
| `AgrLoaToValPriorChrgRskCurPct` |  | |  | `ltov_pr_pct_c` | `DEC(10)` | Loan to value ratio with ref to prior charge: as pct |
| `AgrLoaToValPriorChrgMaxRskPct` |  | |  | `ltov_pr_pct_m` | `DEC(10)` | Loan to value ratio with ref to prior charge: as pct |
| `AgreementLoanToValRblCurRskAmt` |  | |  | `ltov_wrt_rbl_c` | `CURR(17)` | Loan to value ratio with ref to RBL : as amount |
| `AgreementLoanToValRblMaxRskAmt` |  | |  | `ltov_wrt_rbl_m` | `CURR(17)` | Loan to value ratio with ref to RBL : as amount |
| `AgreementLoanToValRblCurRskPct` |  | |  | `ltov_rbl_pct_c` | `DEC(10)` | Loan to value ratio with ref to RBL: as pct |
| `AgreementLoanToValRblMaxRskPct` |  | |  | `ltov_rbl_pct_m` | `DEC(10)` | Loan to value ratio with ref to RBL: as pct |
| `AgrmtDistrdColltrlCurRskAmt` |  | |  | `dist_cv_c` | `CURR(17)` | Distributed Collateral value |
| `AgrmtDistrdColltrlMaxRskAmt` |  | |  | `dist_cv_m` | `CURR(17)` | Distributed Collateral value |
| `AgrmtDistrdColltrlCurRskPct` |  | |  | `dist_cv_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtDistrdColltrlMaxRskPct` |  | |  | `dist_cv_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementCvrgRatioCurRiskPct` |  | |  | `cov_ratio_pct_c` | `DEC(10)` | Coverage ratio of collateral agreements |
| `AgreementCvrgRatioMaxRiskPct` |  | |  | `cov_ratio_pct_m` | `DEC(10)` | Coverage ratio of collateral agreements |
| `AgrmtColltrlRightsCurRskAmt` |  | |  | `coll_right_c` | `CURR(17)` | Collateral Right Determined for  CAG |
| `AgrmtColltrlRightsMaxRskAmt` |  | |  | `coll_right_m` | `CURR(17)` | Collateral Right Determined for  CAG |
| `AgrmtColltrlRightsCurRskPct` |  | |  | `coll_rgt_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtColltrlRightsMaxRskPct` |  | |  | `coll_rgt_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `CollateralObjCalcLastChangedBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `CollateralObjCalcLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Date on which last change was done |
| `CollateralObjCalcLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Time at which last change was made |
| `ObjectAssetUUID` |  | | `_ObjectAssetData` | `ObjectAssetUUID` | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetReferenceSystem` |  | | `_ObjectAssetData` | `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_ReceivableData` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_CollateralObjectType` | | ✓ | | | | |
| `_ObjectAssetType` | | ✓ | | | | |
| `_CollateralObjectCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_ReceivableData` | `I_ReceivableData` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_CollateralObjectType` | `I_CollateralObjectType` | [0..1] |
| `_ObjectAssetType` | `I_ObjectAssetType` | [0..1] |
| `_CollateralObjectCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLOBJCALCD',
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
        serviceQuality: 'C',
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
        mapping: [
         { table : 'CMS_CALC_OBJ',
           role : #MAIN,
           viewElement : ['CollateralObjectUUID'],
           tableElement : ['OBJ_GUID'] },
         { table : 'CMS_AST',
           role : #LEFT_OUTER_TO_ONE_JOIN,
           viewElement : ['ObjectAssetUUID'],
           tableElement : ['AST_GUID'] }  ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Calculation Result for CMS Object'
define view I_CollateralObjectCalcData
  as select from cms_calc_obj
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.CollateralObjectUUID = _AgreementAssetCalcData.CollateralAgreementUUID
                                                                                      or  $projection.CollateralObjectUUID = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.CollateralObjectUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralObjectUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.CollateralObjectUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.CollateralObjectUUID       = _AgreementReceivableCalcData.CollateralAgreementUUID
                                                                                      or  (
                                                                                          $projection.CollateralRblCreditSystem  = _AgreementReceivableCalcData.CollateralRblCreditSystem
                                                                                          and $projection.CollateralReceivableID = _AgreementReceivableCalcData.CollateralReceivableID
                                                                                          and $projection.CollateralObjectType   = 'RBL'
                                                                                        )
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData     on  $projection.CollateralObjectUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion            on  $projection.CollateralObjectUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner            on  $projection.CollateralObjectUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.CollateralObjectUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost on  $projection.CollateralObjectUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on  $projection.CollateralObjectUUID = _AssetAgreementLinkData.CollateralAgreementUUID
                                                                                      or  $projection.CollateralObjectUUID = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp   on  $projection.CollateralObjectUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralObjectUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData on  $projection.CollateralRblCreditSystem = _AgreementReceivableLinkData.CollateralRblCreditSystem
                                                                                      and $projection.CollateralReceivableID    = _AgreementReceivableLinkData.CollateralReceivableID
                                                                                      and $projection.CollateralObjectType      = 'RBL'
  association [0..*] to I_ReceivableData              as _ReceivableData              on  $projection.CollateralRblCreditSystem = _ReceivableData.CollateralRblCreditSystem
                                                                                      and $projection.CollateralReceivableID    = _ReceivableData.CollateralReceivableID
                                                                                      and $projection.CollateralObjectType      = 'RBL'
  association [0..1] to I_ObjectAssetData             as _ObjectAssetData             on  $projection.CollateralObjectUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetPartner          as _ObjectAssetPartner          on  $projection.CollateralObjectUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument         as _ObjectAssetDocument         on  $projection.CollateralObjectUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..1] to I_CollateralObjectType        as _CollateralObjectType        on  $projection.CollateralObjectType = _CollateralObjectType.CollateralObjectType
  association [0..1] to I_ObjectAssetType             as _ObjectAssetType             on  $projection.ObjectAssetType = _ObjectAssetType.ObjectAssetType
  association [0..1] to I_Currency                    as _CollateralObjectCurrency    on  $projection.CollateralObjectCurrency = _CollateralObjectCurrency.Currency
{
  key obj_guid                                    as CollateralObjectUUID,
      @ObjectModel.foreignKey.association: '_CollateralObjectType'
      obj_typ                                     as CollateralObjectType,
      con_guid                                    as CollateralConstellationUUID,
      @ObjectModel.foreignKey.association: '_ObjectAssetType'
      ast_typ                                     as ObjectAssetType,
      parent_guid                                 as ObjectAssetParentUUID,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralObjectCurrency'
      result_curr                                 as CollateralObjectCurrency,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      asset_value                                 as ObjectAssetAmount,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_value                               as ObjectAssetLendingAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_limit1                              as ObjectAssetLendingLimit1Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_limit2                              as ObjectAssetLendingLimit2Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_limit3                              as ObjectAssetLendingLimit3Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_limit4                              as ObjectAssetLendingLimit4Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_limit5                              as ObjectAssetLendingLimit5Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_range1                              as ObjectAssetLendingRange1Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_range2                              as ObjectAssetLendingRange2Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_range3                              as ObjectAssetLendingRange3Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_range4                              as ObjectAssetLendingRange4Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lending_range5                              as ObjectAssetLendingRange5Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_val                                 as ObjectAssetPrtLendingAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_lim1                                as ObjectAssetPrtLendingLimit1Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_lim2                                as ObjectAssetPrtLendingLimit2Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_lim3                                as ObjectAssetPrtLendingLimit3Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_lim4                                as ObjectAssetPrtLendingLimit4Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_lim5                                as ObjectAssetPrtLendingLimit5Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_rng1                                as ObjectAssetPrtLendingRange1Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_rng2                                as ObjectAssetPrtLendingRange2Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_rng3                                as ObjectAssetPrtLendingRange3Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_rng4                                as ObjectAssetPrtLendingRange4Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      prt_len_rng5                                as ObjectAssetPrtLendingRange5Amt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      free_lending_limit_c                        as ObjAstFreeLendgLmtCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      free_lending_limit_m                        as ObjAstFreeLendgLmtMaxRskAmt,
      free_lending_limit_pct_c                    as ObjAstFreeLendgLmtCurRskPct,
      free_lending_limit_pct_m                    as ObjAstFreeLendgLmtMaxRskPct,
      credit_system                               as CollateralRblCreditSystem,
      rbl_id                                      as CollateralReceivableID,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coverage_gap_c                              as RblCoverageGapCurRiskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coverage_gap_m                              as RblCoverageGapMaxRiskAmt,
      cov_gap_pct_c                               as RblCoverageGapCurRiskPct,
      cov_gap_pct_m                               as RblCoverageGapMaxRiskPct,
      coll_ratio_pct_c                            as RblCollateralRatioCurRiskPct,
      coll_ratio_pct_m                            as RblCollateralRatioMaxRiskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coll_value_c                                as AgreementCollateralCurRiskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coll_value_m                                as AgreementCollateralMaxRiskAmt,
      coll_value_pct_c                            as AgreementCollateralCurRiskPct,
      coll_value_pct_m                            as AgreementCollateralMaxRiskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lend_val_grt_c                              as AgreementGuarLendingCurRiskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lend_val_grt_m                              as AgreementGuarLendingMaxRiskAmt,
      lnd_vl_grt_pct_c                            as AgreementGuarLendingCurRiskPct,
      lnd_vl_grt_pct_m                            as AgreementGuarLendingMaxRiskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lend_lmt_grt_c                              as AgreementGuarLendgLmtCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      lend_lmt_grt_m                              as AgreementGuarLendgLmtMaxRskAmt,
      lend_lmt_grt_pct_c                          as AgreementGuarLendgLmtCurRskPct,
      lend_lmt_grt_pct_m                          as AgreementGuarLendgLmtMaxRskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_cag_c                              as AgrmtLoanToValAgrmtCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_cag_m                              as AgrmtLoanToValAgrmtMaxRskAmt,
      ltov_cag_pct_c                              as AgrmtLoanToValAgrmtCurRskPct,
      ltov_cag_pct_m                              as AgrmtLoanToValAgrmtMaxRskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_pr_c                               as AgrLoaToValPriorChrgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_pr_m                               as AgrLoaToValPriorChrgMaxRskAmt,
      ltov_pr_pct_c                               as AgrLoaToValPriorChrgRskCurPct,
      ltov_pr_pct_m                               as AgrLoaToValPriorChrgMaxRskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_rbl_c                              as AgreementLoanToValRblCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      ltov_wrt_rbl_m                              as AgreementLoanToValRblMaxRskAmt,
      ltov_rbl_pct_c                              as AgreementLoanToValRblCurRskPct,
      ltov_rbl_pct_m                              as AgreementLoanToValRblMaxRskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      dist_cv_c                                   as AgrmtDistrdColltrlCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      dist_cv_m                                   as AgrmtDistrdColltrlMaxRskAmt,
      dist_cv_pct_c                               as AgrmtDistrdColltrlCurRskPct,
      dist_cv_pct_m                               as AgrmtDistrdColltrlMaxRskPct,
      cov_ratio_pct_c                             as AgreementCvrgRatioCurRiskPct,
      cov_ratio_pct_m                             as AgreementCvrgRatioMaxRiskPct,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coll_right_c                                as AgrmtColltrlRightsCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralObjectCurrency'
      coll_right_m                                as AgrmtColltrlRightsMaxRskAmt,
      coll_rgt_pct_c                              as AgrmtColltrlRightsCurRskPct,
      coll_rgt_pct_m                              as AgrmtColltrlRightsMaxRskPct,
      last_chg_by                                 as CollateralObjCalcLastChangedBy,
      last_chg_date                               as CollateralObjCalcLastChgdDate,
      last_chg_time                               as CollateralObjCalcLastChgdTime,

      _ObjectAssetData.ObjectAssetUUID            as ObjectAssetUUID,
      _ObjectAssetData.ObjectAssetReferenceSystem as ObjectAssetReferenceSystem,

      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementReceivableLinkData,
      _ReceivableData,
      _ObjectAssetData,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _CollateralObjectType,
      _ObjectAssetType,
      _CollateralObjectCurrency
}
```
