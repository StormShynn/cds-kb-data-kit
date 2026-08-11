---
name: I_AGREEMENTASSETCALCDATA
description: "Calculation Results for Agreement Asset"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value
semantic_en: "Calculation Results for Agreement Asset"
semantic_vi: "Calculation Results for Agreement Asset — CDS view giao diện dựa trên cms_calc_chg."
keywords:
  - "calculation"
  - "results"
  - "for"
  - "agreement"
  - "asset"
  - "object"
  - "collateral"
  - "prior"
  - "charge"
  - "constellation"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTASSETCALCDATA

**Calculation Results for Agreement Asset**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetUUID` | ✓ | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `CollateralAgreementUUID` | ✓ | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPriorChargeUUID` | ✓ | |  | `pc_cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AssetAgreementUUID` |  | |  | `chg_guid` | `RAW(16)` | GUID for Table CMS_CHG |
| `CollateralConstellationUUID` |  | |  | `con_guid` | `RAW(16)` | Constellation GUID |
| `CollateralAgreementAssetCrcy` |  | |  | `result_curr` | `CUKY(5)` | Calculations Result Currency |
| `AgrAssDistrd1stLnRgCurRskAmt` |  | |  | `dist_lnd_rng1_c` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd2ndLnRgCurRskAmt` |  | |  | `dist_lnd_rng2_c` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd3rdLnRgCurRskAmt` |  | |  | `dist_lnd_rng3_c` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd4thLnRgCurRskAmt` |  | |  | `dist_lnd_rng4_c` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd5thLnRgCurRskAmt` |  | |  | `dist_lnd_rng5_c` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd1stLnRgMaxRskAmt` |  | |  | `dist_lnd_rng1_m` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd2ndLnRgMaxRskAmt` |  | |  | `dist_lnd_rng2_m` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd3rdLnRgMaxRskAmt` |  | |  | `dist_lnd_rng3_m` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd4thLnRgMaxRskAmt` |  | |  | `dist_lnd_rng4_m` | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd5thLnRgMaxRskAmt` |  | |  | `dist_lnd_rng5_m` | `CURR(17)` | Distributed Lending Range |
| `AgreementAssetPriorChargeAmt` |  | |  | `prior_chg_amt` | `CURR(17)` | Prior Charges calculation for ast-cag link |
| `AgreementAssetPriorChargePct` |  | |  | `prior_chg_pct` | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementAssetCalcLastChgdBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `AgreementAssetCalcLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Date on which last change was done |
| `AgreementAssetCalcLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Time at which last change was made |
| `ObjectAssetReferenceSystem` |  | | `_ObjectAssetData` | `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `_CollateralObjectCalcData` | | ✓ | | | | |
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
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_CollateralAgreementAssetCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
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
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_CollateralAgreementAssetCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGASTCALCD',
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
         { table : 'CMS_CALC_CHG',
           role : #MAIN,
           viewElement : ['ObjectAssetUUID','CollateralAgreementUUID','AgreementPriorChargeUUID'],
           tableElement : ['AST_GUID','CAG_GUID','PC_CAG_GUID'] },
         { table : 'CMS_AST',
           role : #LEFT_OUTER_TO_ONE_JOIN,
           viewElement : ['ObjectAssetUUID'],
           tableElement : ['AST_GUID'] } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Calculation Results for Agreement Asset'
define view I_AgreementAssetCalcData
  as select from cms_calc_chg
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData     on  $projection.ObjectAssetUUID         = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                       or  $projection.CollateralAgreementUUID = _CollateralObjectCalcData.CollateralObjectUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData      on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                       or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData     on  $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData  on  $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData      on  $projection.CollateralAgreementUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion             on  $projection.CollateralAgreementUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner             on  $projection.CollateralAgreementUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement  on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost  on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData       on  $projection.CollateralAgreementUUID = _AssetAgreementLinkData.CollateralAgreementUUID
                                                                                       and $projection.ObjectAssetUUID         = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp    on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                       or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..1] to I_ObjectAssetData             as _ObjectAssetData              on  $projection.ObjectAssetUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetPartner          as _ObjectAssetPartner           on  $projection.ObjectAssetUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument         as _ObjectAssetDocument          on  $projection.ObjectAssetUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..1] to I_Currency                    as _CollateralAgreementAssetCrcy on  $projection.CollateralAgreementAssetCrcy = _CollateralAgreementAssetCrcy.Currency
{
  key ast_guid                                    as ObjectAssetUUID,
  key cag_guid                                    as CollateralAgreementUUID,
  key pc_cag_guid                                 as AgreementPriorChargeUUID,
      chg_guid                                    as AssetAgreementUUID,
      con_guid                                    as CollateralConstellationUUID,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralAgreementAssetCrcy'
      result_curr                                 as CollateralAgreementAssetCrcy,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng1_c                             as AgrAssDistrd1stLnRgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng2_c                             as AgrAssDistrd2ndLnRgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng3_c                             as AgrAssDistrd3rdLnRgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng4_c                             as AgrAssDistrd4thLnRgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng5_c                             as AgrAssDistrd5thLnRgCurRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng1_m                             as AgrAssDistrd1stLnRgMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng2_m                             as AgrAssDistrd2ndLnRgMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng3_m                             as AgrAssDistrd3rdLnRgMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng4_m                             as AgrAssDistrd4thLnRgMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      dist_lnd_rng5_m                             as AgrAssDistrd5thLnRgMaxRskAmt,
      @Semantics.amount.currencyCode: 'CollateralAgreementAssetCrcy'
      prior_chg_amt                               as AgreementAssetPriorChargeAmt,
      prior_chg_pct                               as AgreementAssetPriorChargePct,
      last_chg_by                                 as AgreementAssetCalcLastChgdBy,
      last_chg_date                               as AgreementAssetCalcLastChgdDate,
      last_chg_time                               as AgreementAssetCalcLastChgdTime,

      _ObjectAssetData.ObjectAssetReferenceSystem as ObjectAssetReferenceSystem,

      _CollateralObjectCalcData,
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
      _ObjectAssetData,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _CollateralAgreementAssetCrcy
}
```
