---
name: I_SECURITIESACCOUNTPOSITION
description: "Securities Account Position Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPOSITION')/$value
semantic_en: "Securities Account Position Details"
semantic_vi: "Securities Account Position Details — CDS view giao diện dựa trên P_SecuritiesAccountPosition_TF."
keywords:
  - "securities"
  - "account"
  - "position"
  - "details"
  - "acct"
  - "internal"
  - "object"
  - "sqnc"
  - "nmbr"
tags:
  - FS
  - account
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SECURITIESACCOUNTPOSITION

**Securities Account Position Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPOSITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountPositionUUID` | ✓ | |  | `sec_acc_pos_guid` | `RAW(16)` | GUID for securities positions in an account |
| `SecuritiesAcctPosInternalID` |  | |  | `sec_acc_pos_guid_conv` | `CHAR(40)` | Reference ID for the object |
| `SecuritiesAccountObjectUUID` |  | |  | `sec_acc_guid` | `RAW(16)` | GUID for securities account |
| `SecuritiesAcctPosSqncNmbr` |  | |  | `pos_no` | `NUMC(4)` | Sequence Number of a Position in a Securities Account |
| `SecuritiesAcctPosExtRefNmbr` |  | |  | `pos_old_ref_no` | `CHAR(32)` | ID of a Positiion Referenced from an External System |
| `SecuritiesAccountPositionID` |  | |  | `isin` | `CHAR(20)` | Unique ID for a Position in a Securities Account |
| `SecuritiesAcctPosNumberOfUnits` |  | |  | `no_of_units` | `DEC(15)` | Number of Units in a Securities Position |
| `SecuritiesAcctPosNominalAmount` |  | |  | `nominal_value` | `CURR(17)` | Nominal Value of a Position |
| `SecuritiesAcctPosNominalCrcy` |  | |  | `nominal_val_curr` | `CUKY(5)` | Currency of nominal value of a position |
| `SecuritiesAcctPosCurPriceAmt` |  | |  | `current_price` | `CURR(17)` | Current Price of a Securities Postion per Unit |
| `SecuritiesAcctPosCurPriceCrcy` |  | |  | `curr_price_curr` | `CUKY(5)` | Currency of Current Price of a Securities Position |
| `SecuritiesAcctPosCurPricePct` |  | |  | `curr_price_pct` | `DEC(10)` | Current Price of a Unit of a Securities Position |
| `SecuritiesAcctPosMarketValAmt` |  | |  | `market_value` | `CURR(17)` | Market Value of a Securities Position |
| `SecuritiesAcctPosMarketValCrcy` |  | |  | `market_val_curr` | `CUKY(5)` | Currency of the Market Value of Securities Positions |
| `SecuritiesAcctPosCnvrtdMktAmt` |  | |  | `con_mkt_val` | `CURR(17)` | Market Value of a Securities Account Position |
| `SecuritiesAcctPosCnvrtdMktCrcy` |  | |  | `con_mkt_val_curr` | `CUKY(5)` | Currency of Converted Market Value of Positions |
| `SecuritiesAccountPosRiskCode` |  | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `SecuritiesAcctPosSftyDiscSign` |  | |  | `sfty_ind` | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `SecuritiesAcctPosSftyDiscPct` |  | |  | `sfty_dscnt` | `DEC(10)` | Safety discount |
| `SecuritiesAcctPosSftyDiscAmt` |  | |  | `sfty_amount` | `CURR(17)` | Safety discount as an amount |
| `SecuritiesAcctPosSftyDiscCrcy` |  | |  | `sfty_amt_curr` | `CUKY(5)` | Currency of the Safety discount amount |
| `SecuritiesAcctPosLendgRateSign` |  | |  | `lending_rate_ind` | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `SecuritiesAcctPos1stLendgRate` |  | |  | `lending_rate1` | `DEC(10)` | Lending rate 1 |
| `SecuritiesAcctPosLqdtnType` |  | |  | `liqd_typ` | `CHAR(6)` | Liquidation type |
| `SecuritiesAcctPosLqdtnReason` |  | |  | `liqd_reason` | `CHAR(6)` | Liquidation Reason |
| `SecuritiesAcctPosLqdtnDate` |  | |  | `liqd_date` | `DATS(8)` | Date of Liquidation of Collateral |
| `SecuritiesAcctPosLqdtnAmount` |  | |  | `liqd_amt` | `CURR(17)` | Proceeds obtained from liquidation of the collateral |
| `SecuritiesAcctPosLqdtnCurrency` |  | |  | `liqd_curr` | `CUKY(5)` | Currency of Liquidation value |
| `SecuritiesAcctPosEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Securities Add-On User |
| `SecuritiesAcctPosEnteredDate` |  | |  | `created_date` | `DATS(8)` | Created On |
| `SecuritiesAcctPosEnteredTime` |  | |  | `created_time` | `TIMS(6)` | Created At |
| `SecuritiesAcctPosLastChangedBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `SecuritiesAcctPosLastChgdDate` |  | |  | `last_chg_date` | `DATS(8)` | Last Changed on |
| `SecuritiesAcctPosLastChgdTime` |  | |  | `last_chg_time` | `TIMS(6)` | Last Changed  At |
| `_SecuritiesAccountObjectData` | | ✓ | | | | |
| `_SecuritiesAcctObjMstrData` | | ✓ | | | | |
| `_SecuritiesAccountPartner` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_SecuritiesAcctPosNominalCrcy` | | ✓ | | | | |
| `_SecuritiesAcctPosCurPriceCrcy` | | ✓ | | | | |
| `_SecuritiesAcctPosMktValCrcy` | | ✓ | | | | |
| `_SecuritiesAcctPosSftyDiscCrcy` | | ✓ | | | | |
| `_SecuritiesAcctPosLqdtnCrcy` | | ✓ | | | | |
| `_SecAcctPosCnvrtdMktCrcy` | | ✓ | | | | |
| `_SecuritiesAccountPosRiskCode` | | ✓ | | | | |
| `_SecuritiesAcctPosSftyDiscSign` | | ✓ | | | | |
| `_SecuritiesAcctPosLqdtnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecuritiesAccountObjectData` | `I_SecuritiesAccountObjectData` | [0..1] |
| `_SecuritiesAcctObjMstrData` | `I_SecuritiesAcctObjMstrData` | [0..1] |
| `_SecuritiesAccountPartner` | `I_SecuritiesAccountPartner` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_SecuritiesAcctPosNominalCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctPosCurPriceCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctPosMktValCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctPosSftyDiscCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAcctPosLqdtnCrcy` | `I_Currency` | [0..1] |
| `_SecAcctPosCnvrtdMktCrcy` | `I_Currency` | [0..1] |
| `_SecuritiesAccountPosRiskCode` | `I_CollateralObjectRiskCode` | [0..1] |
| `_SecuritiesAcctPosSftyDiscSign` | `I_CollateralSafetyDiscountSign` | [0..1] |
| `_SecuritiesAcctPosLqdtnType` | `I_ObjectAssetLiquidationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPOSITION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPOSITION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ISECACCPOS',
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
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'SecuritiesAccountPositionUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_SEC_ACC_POS',
           role : #MAIN,
           viewElement : ['SecuritiesAccountPositionUUID'],
           tableElement : ['SEC_ACC_POS_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Securities Account Position Details'
define view I_SecuritiesAccountPosition
  as select from P_SecuritiesAccountPosition_TF(P_SAPClient : $session.client)
  association [0..1] to I_SecuritiesAccountObjectData  as _SecuritiesAccountObjectData   on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountObjectData.SecuritiesAccountObjectUUID
  association [0..1] to I_SecuritiesAcctObjMstrData    as _SecuritiesAcctObjMstrData     on $projection.SecuritiesAccountObjectUUID = _SecuritiesAcctObjMstrData.SecuritiesAccountObjectUUID
  association [0..*] to I_SecuritiesAccountPartner     as _SecuritiesAccountPartner      on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountPartner.SecuritiesAccountObjectUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData               on $projection.SecuritiesAcctPosInternalID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..1] to I_Currency                     as _SecuritiesAcctPosNominalCrcy  on $projection.SecuritiesAcctPosNominalCrcy = _SecuritiesAcctPosNominalCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctPosCurPriceCrcy on $projection.SecuritiesAcctPosCurPriceCrcy = _SecuritiesAcctPosCurPriceCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctPosMktValCrcy   on $projection.SecuritiesAcctPosMarketValCrcy = _SecuritiesAcctPosMktValCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctPosSftyDiscCrcy on $projection.SecuritiesAcctPosSftyDiscCrcy = _SecuritiesAcctPosSftyDiscCrcy.Currency
  association [0..1] to I_Currency                     as _SecuritiesAcctPosLqdtnCrcy    on $projection.SecuritiesAcctPosLqdtnCurrency = _SecuritiesAcctPosLqdtnCrcy.Currency
  association [0..1] to I_Currency                     as _SecAcctPosCnvrtdMktCrcy       on $projection.SecuritiesAcctPosCnvrtdMktCrcy = _SecAcctPosCnvrtdMktCrcy.Currency
  association [0..1] to I_CollateralObjectRiskCode     as _SecuritiesAccountPosRiskCode  on $projection.SecuritiesAccountPosRiskCode = _SecuritiesAccountPosRiskCode.CollateralObjectRiskCode
  association [0..1] to I_CollateralSafetyDiscountSign as _SecuritiesAcctPosSftyDiscSign on $projection.SecuritiesAcctPosSftyDiscSign = _SecuritiesAcctPosSftyDiscSign.CollateralSafetyDiscountSign
  association [0..1] to I_ObjectAssetLiquidationType   as _SecuritiesAcctPosLqdtnType    on $projection.SecuritiesAcctPosLqdtnType = _SecuritiesAcctPosLqdtnType.ObjectAssetLiquidationType
{
  key sec_acc_pos_guid      as SecuritiesAccountPositionUUID,
      sec_acc_pos_guid_conv as SecuritiesAcctPosInternalID,
      sec_acc_guid          as SecuritiesAccountObjectUUID,
      pos_no                as SecuritiesAcctPosSqncNmbr,
      pos_old_ref_no        as SecuritiesAcctPosExtRefNmbr,
      isin                  as SecuritiesAccountPositionID,
      no_of_units           as SecuritiesAcctPosNumberOfUnits,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosNominalCrcy'
      nominal_value         as SecuritiesAcctPosNominalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosNominalCrcy'
      nominal_val_curr      as SecuritiesAcctPosNominalCrcy,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosCurPriceCrcy'
      current_price         as SecuritiesAcctPosCurPriceAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosCurPriceCrcy'
      curr_price_curr       as SecuritiesAcctPosCurPriceCrcy,
      curr_price_pct        as SecuritiesAcctPosCurPricePct,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosMarketValCrcy'
      market_value          as SecuritiesAcctPosMarketValAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosMktValCrcy'
      market_val_curr       as SecuritiesAcctPosMarketValCrcy,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosCnvrtdMktCrcy'
      con_mkt_val           as SecuritiesAcctPosCnvrtdMktAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecAcctPosCnvrtdMktCrcy'
      con_mkt_val_curr      as SecuritiesAcctPosCnvrtdMktCrcy,
      @ObjectModel.foreignKey.association: '_SecuritiesAccountPosRiskCode'
      risk_code             as SecuritiesAccountPosRiskCode,
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosSftyDiscSign'
      sfty_ind              as SecuritiesAcctPosSftyDiscSign,
      sfty_dscnt            as SecuritiesAcctPosSftyDiscPct,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosSftyDiscCrcy'
      sfty_amount           as SecuritiesAcctPosSftyDiscAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosSftyDiscCrcy'
      sfty_amt_curr         as SecuritiesAcctPosSftyDiscCrcy,
      lending_rate_ind      as SecuritiesAcctPosLendgRateSign,
      lending_rate1         as SecuritiesAcctPos1stLendgRate,
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosLqdtnType'
      liqd_typ              as SecuritiesAcctPosLqdtnType,
      liqd_reason           as SecuritiesAcctPosLqdtnReason,
      liqd_date             as SecuritiesAcctPosLqdtnDate,
      @Semantics.amount.currencyCode: 'SecuritiesAcctPosLqdtnCurrency'
      liqd_amt              as SecuritiesAcctPosLqdtnAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_SecuritiesAcctPosLqdtnCrcy'
      liqd_curr             as SecuritiesAcctPosLqdtnCurrency,
      created_by            as SecuritiesAcctPosEnteredBy,
      created_date          as SecuritiesAcctPosEnteredDate,
      created_time          as SecuritiesAcctPosEnteredTime,
      last_chg_by           as SecuritiesAcctPosLastChangedBy,
      last_chg_date         as SecuritiesAcctPosLastChgdDate,
      last_chg_time         as SecuritiesAcctPosLastChgdTime,

      _SecuritiesAccountObjectData,
      _SecuritiesAcctObjMstrData,
      _SecuritiesAccountPartner,
      _ObjectAssetData,
      _SecuritiesAcctPosNominalCrcy,
      _SecuritiesAcctPosCurPriceCrcy,
      _SecuritiesAcctPosMktValCrcy,
      _SecuritiesAcctPosSftyDiscCrcy,
      _SecuritiesAcctPosLqdtnCrcy,
      _SecAcctPosCnvrtdMktCrcy,
      _SecuritiesAccountPosRiskCode,
      _SecuritiesAcctPosSftyDiscSign,
      _SecuritiesAcctPosLqdtnType
}
```
