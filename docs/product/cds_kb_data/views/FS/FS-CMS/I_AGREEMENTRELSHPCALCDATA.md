---
name: I_AGREEMENTRELSHPCALCDATA
description: "Calculation Results for CAG Relations"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value
semantic_en: "Calculation Results for CAG Relations"
semantic_vi: "Calculation Results for CAG Relations — CDS view giao diện dựa trên cms_calc_rel."
keywords:
  - "calculation"
  - "results"
  - "for"
  - "cag"
  - "relations"
  - "agreement"
  - "relationship"
  - "srce"
  - "agrmt"
  - "relshp"
  - "secdry"
  - "dest"
  - "collateral"
  - "constellation"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRELSHPCALCDATA

**Calculation Results for CAG Relations**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRelationshipUUID` | ✓ | |  | `rel_guid` | `RAW(16)` | GUID for Table CMS_REL |
| `AgreementRelationshipSrceUUID` |  | |  | `source_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgrmtRelshpSrceSecdryUUID` |  | |  | `src_sec_guid` | `RAW(16)` | Relationship Source Secondary GUID |
| `AgreementRelationshipDestUUID` |  | |  | `destination_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` |  | |  | `con_guid` | `RAW(16)` | Constellation GUID |
| `AgreementRelationshipCurrency` |  | |  | `result_curr` | `CUKY(5)` | Calculations Result Currency |
| `AgrRelDistrdColltrlCurRskAmt` |  | |  | `dist_col_val_c` | `CURR(17)` | Distributed Collateral value |
| `AgrRelDistrdColltrlMaxRskAmt` |  | |  | `dist_col_val_m` | `CURR(17)` | Distributed Collateral value |
| `AgrRelDistrdColltrlCurRskPct` |  | |  | `dist_cv_pct_c` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrRelDistrdColltrlMaxRskPct` |  | |  | `dist_cv_pct_m` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtRelshpCalcLastChgdBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `AgrmtRelshpCalcLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Date on which last change was done |
| `AgrmtRelshpCalcLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Time at which last change was made |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementRelationshipCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..*] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..1] |
| `_AgreementRelationshipCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRELCALCD',
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
@EndUserText.label: 'Calculation Results for CAG Relations'
define view I_AgreementRelshpCalcData
  as select from cms_calc_rel
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on $projection.AgreementRelationshipSrceUUID = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _CollateralObjectCalcData.CollateralObjectUUID
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on $projection.AgreementRelationshipSrceUUID = _AgreementAssetCalcData.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on $projection.AgreementRelationshipSrceUUID = _AgreementPortionCalcData.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on $projection.AgreementRelationshipSrceUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementData     as _CollateralAgreementData     on $projection.AgreementRelationshipSrceUUID = _CollateralAgreementData.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion            on $projection.AgreementRelationshipSrceUUID = _AgreementPortion.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner            on $projection.AgreementRelationshipSrceUUID = _AgreementPartner.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on $projection.AgreementRelationshipSrceUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost on $projection.AgreementRelationshipSrceUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on $projection.AgreementRelationshipSrceUUID = _AssetAgreementLinkData.CollateralAgreementUUID
                                                                                      or $projection.AgreementRelationshipDestUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..1] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp   on $projection.AgreementRelationshipUUID = _CollateralAgreementRelshp.AgreementRelationshipUUID
  association [0..1] to I_Currency                    as _AgreementRelationshipCurrency  on $projection.AgreementRelationshipCurrency = _AgreementRelationshipCurrency.Currency
{
  key rel_guid         as AgreementRelationshipUUID,
      source_guid      as AgreementRelationshipSrceUUID,
      src_sec_guid     as AgrmtRelshpSrceSecdryUUID,
      destination_guid as AgreementRelationshipDestUUID,
      con_guid         as CollateralConstellationUUID,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgreementRelationshipCurrency'
      result_curr      as AgreementRelationshipCurrency,
      @Semantics.amount.currencyCode: 'AgreementRelationshipCurrency'
      dist_col_val_c   as AgrRelDistrdColltrlCurRskAmt,
      @Semantics.amount.currencyCode: 'AgreementRelationshipCurrency'
      dist_col_val_m   as AgrRelDistrdColltrlMaxRskAmt,
      dist_cv_pct_c    as AgrRelDistrdColltrlCurRskPct,
      dist_cv_pct_m    as AgrRelDistrdColltrlMaxRskPct,
      last_chg_by      as AgrmtRelshpCalcLastChgdBy,
      last_chg_date    as AgrmtRelshpCalcLastChgdDate,
      last_chg_time    as AgrmtRelshpCalcLastChgdTime,

      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementRelationshipCurrency

}
```
