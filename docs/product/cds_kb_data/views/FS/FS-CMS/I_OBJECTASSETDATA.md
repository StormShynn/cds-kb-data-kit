---
name: I_OBJECTASSETDATA
description: "Object Asset Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value
semantic_en: "Object Asset Details"
semantic_vi: "Object Asset Details — CDS view giao diện dựa trên cms_ast."
keywords:
  - "object"
  - "asset"
  - "details"
  - "type"
  - "parent"
  - "reference"
  - "number"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETDATA

**Object Asset Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetUUID` | ✓ | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetID` |  | |  | `ast_id` | `CHAR(40)` | Asset ID |
| `ObjectAssetType` |  | |  | `ast_typ` | `CHAR(6)` | Asset Type |
| `ObjectAssetParentUUID` |  | |  | `parent_guid` | `RAW(16)` | Asset Guid as a parent GUID for a sub-asset |
| `ObjectAssetReferenceNumber` |  | |  | `object_ref_id` | `CHAR(40)` | Reference ID for the object |
| `ObjectAssetRiskCode` |  | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `ObjectAssetSafetyDiscountSign` |  | |  | `sfty_ind` | `CHAR(2)` | Indicates if the Asset has a Default Safety Discount |
| `ObjectAssetSafetyDiscountPct` |  | |  | `sfty_dscnt` | `DEC(10)` | Percentage of Safety Discount |
| `ObjectAssetSafetyDiscountAmt` |  | |  | `sfty_amount` | `CURR(17)` | Amount of Safety Discount |
| `ObjectAssetSafetyDiscountCrcy` |  | |  | `sfty_amt_curr` | `CUKY(5)` | Currency of the Safety Discount Amount |
| `ObjectAssetReferenceSystem` |  | |  | `objsysid` | `CHAR(6)` | Object System Reference ID |
| `ObjectAssetValuationType` |  | |  | `valuation_typ` | `CHAR(2)` | Type of Valuation Check performed on Collateral Object |
| `ObjectAssetValuationFrequency` |  | |  | `unit_valn_freq` | `CHAR(2)` | Indicator: Units of time for revaluation of an asset |
| `ObjectAssetValuationPeriod` |  | |  | `period_valn_freq` | `NUMC(4)` | Revaluation Period for an Asset |
| `ObjectAssetLastRevaluationDate` |  | |  | `past_valued_date` | `DATS(8)` | Last Date on which the Asset was Valued |
| `ObjectAssetRevaluationStartDte` |  | |  | `start_date` | `DATS(8)` | Date on which the First Valuation is Performed on the Asset |
| `ObjectAssetRevaluationEndDate` |  | |  | `end_date` | `DATS(8)` | Date on which the Last Valuation is Performed on the Asset |
| `ObjectAssetLendingRateSign` |  | |  | `lending_rate_ind` | `CHAR(2)` | Indicator to specify if Asset has a Default Lending Rate |
| `ObjectAsset1stLendingRate` |  | |  | `lending_rate1` | `DEC(10)` | Lending Rate 1 |
| `ObjectAsset2ndLendingRate` |  | |  | `lending_rate2` | `DEC(10)` | Lending Rate 2 |
| `ObjectAsset3rdLendingRate` |  | |  | `lending_rate3` | `DEC(10)` | Lending Rate 3 |
| `ObjectAsset4thLendingRate` |  | |  | `lending_rate4` | `DEC(10)` | Lending Rate 4 |
| `ObjectAsset5thLendingRate` |  | |  | `lending_rate5` | `DEC(10)` | Lending Rate 5 |
| `ObjectAssetLiquidationType` |  | |  | `liqd_typ` | `CHAR(6)` | Liquidation Type |
| `ObjectAssetLiquidationReason` |  | |  | `liqd_reason` | `CHAR(6)` | Liquidation Reason |
| `ObjectAssetLiquidationDate` |  | |  | `liqd_date` | `DATS(8)` | Date on which the Collateral was Liquidated |
| `ObjectAssetLiquidationAmount` |  | |  | `liqd_amt` | `CURR(17)` | Returns from the Liquidation of Collateral |
| `ObjectAssetLiquidationCurrency` |  | |  | `liqd_curr` | `CUKY(5)` | Currency of Liquidation Value |
| `ObjectAssetLqdtnAccountNumber` |  | |  | `acc_number_liq` | `CHAR(35)` | Account number for liquidation proceeds |
| `ObjectAssetLqdtnBankCountry` |  | |  | `bank_cntry_liq` | `CHAR(3)` | Key of Bank Country/Region |
| `ObjectAssetLiquidationBankKey` |  | |  | `bank_key_liq` | `CHAR(15)` | Bank Key |
| `ObjectAssetBankControlKey` |  | |  | `bank_ctrlkey_liq` | `CHAR(2)` | Bank Control Key |
| `ObjectAssetVerificationFrqcy` |  | |  | `unit_verf_freq` | `CHAR(2)` | Indicator: Units of time for verification of an asset |
| `ObjectAssetVerificationPeriod` |  | |  | `period_verf_freq` | `NUMC(4)` | Statement Period for an Asset |
| `ObjectAssetVerificationDate` |  | |  | `last_verf_date` | `DATS(8)` | Last Verification Date |
| `ObjectAssetNominalAmount` |  | |  | `nom_value` | `CURR(17)` | Nominal Value of the Asset |
| `ObjectAssetNominalCurrency` |  | |  | `nom_value_curr` | `CUKY(5)` | Currency of Nominal value |
| `ObjectAssetFinalAmount` |  | |  | `ast_value` | `CURR(17)` | Final Asset Value |
| `ObjectAssetFinalCurrency` |  | |  | `ast_value_curr` | `CUKY(5)` | Currency of the Final Asset Value |
| `ObjectAssetQuantity` |  | |  | `quantity` | `QUAN(13)` | Quantity |
| `ObjectAssetUnitOfMeasure` |  | |  | `unit_of_measure` | `UNIT(3)` | Unit of Measure of Quantity |
| `ObjectAssetOriginalAmount` |  | |  | `ori_value` | `CURR(17)` | Original Protection of the Asset |
| `ObjectAssetOriginalCurrency` |  | |  | `ori_value_curr` | `CUKY(5)` | Currency of the Original Protection Value |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_RealEstateObjectData` | | ✓ | | | | |
| `_CollateralRealEstate` | | ✓ | | | | |
| `_RealEstateObjectPrt` | | ✓ | | | | |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_RealEstatePrtAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_MovableObjectData` | | ✓ | | | | |
| `_ShipObjectData` | | ✓ | | | | |
| `_RightsObjectData` | | ✓ | | | | |
| `_InsuranceObjectData` | | ✓ | | | | |
| `_CollateralInsurance` | | ✓ | | | | |
| `_SecuritiesAccountObjectData` | | ✓ | | | | |
| `_SecuritiesAccountPosition` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_ObjectAssetType` | | ✓ | | | | |
| `_ObjectAssetSafetyDiscountSign` | | ✓ | | | | |
| `_ObjectAssetLiquidationType` | | ✓ | | | | |
| `_ObjectAssetReferenceSystem` | | ✓ | | | | |
| `_ObjectAssetValuationType` | | ✓ | | | | |
| `_ObjectAssetLiquidationReason` | | ✓ | | | | |
| `_ObjectAssetValuationFrequency` | | ✓ | | | | |
| `_ObjectAssetVerificationFrqcy` | | ✓ | | | | |
| `_ObjectAssetSafetyDiscountCrcy` | | ✓ | | | | |
| `_ObjectAssetLiquidationCrcy` | | ✓ | | | | |
| `_ObjectAssetNominalCurrency` | | ✓ | | | | |
| `_ObjectAssetFinalCurrency` | | ✓ | | | | |
| `_ObjectAssetOriginalCurrency` | | ✓ | | | | |
| `_ObjectAssetLqdtnBankCountry` | | ✓ | | | | |
| `_ObjectAssetUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_RealEstateObjectData` | `I_RealEstateObjectData` | [0..*] |
| `_CollateralRealEstate` | `I_CollateralRealEstate` | [0..*] |
| `_RealEstateObjectPrt` | `I_RealEstateObjectPrt` | [0..*] |
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..*] |
| `_RealEstatePrtAccessory` | `I_RealEstatePrtAccessory` | [0..*] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_MovableObjectData` | `I_MovableObjectData` | [0..*] |
| `_ShipObjectData` | `I_ShipObjectData` | [0..*] |
| `_RightsObjectData` | `I_RightsObjectData` | [0..*] |
| `_InsuranceObjectData` | `I_InsuranceObjectData` | [0..*] |
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..*] |
| `_SecuritiesAccountObjectData` | `I_SecuritiesAccountObjectData` | [0..*] |
| `_SecuritiesAccountPosition` | `I_SecuritiesAccountPosition` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_ObjectAssetType` | `I_ObjectAssetType` | [0..1] |
| `_ObjectAssetSafetyDiscountSign` | `I_CollateralSafetyDiscountSign` | [0..1] |
| `_ObjectAssetLiquidationType` | `I_ObjectAssetLiquidationType` | [0..1] |
| `_ObjectAssetReferenceSystem` | `I_ObjectReferenceSystem` | [0..1] |
| `_ObjectAssetValuationType` | `I_CollateralValuationType` | [0..1] |
| `_ObjectAssetLiquidationReason` | `I_CollateralAttributeIndType` | [0..1] |
| `_ObjectAssetValuationFrequency` | `I_ObjectAssetValuationFrqcy` | [0..1] |
| `_ObjectAssetVerificationFrqcy` | `I_ObjectAssetVerificationFrqcy` | [0..1] |
| `_ObjectAssetSafetyDiscountCrcy` | `I_Currency` | [0..1] |
| `_ObjectAssetLiquidationCrcy` | `I_Currency` | [0..1] |
| `_ObjectAssetNominalCurrency` | `I_Currency` | [0..1] |
| `_ObjectAssetFinalCurrency` | `I_Currency` | [0..1] |
| `_ObjectAssetOriginalCurrency` | `I_Currency` | [0..1] |
| `_ObjectAssetLqdtnBankCountry` | `I_Country` | [0..1] |
| `_ObjectAssetUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASSETDATA',
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
    representativeKey: 'ObjectAssetUUID'
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
        automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Details'
define view I_ObjectAssetData
  as select from cms_ast
  association [0..*] to I_ObjectAssetPartner           as _ObjectAssetPartner            on  $projection.ObjectAssetUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument          as _ObjectAssetDocument           on  $projection.ObjectAssetUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_AssetAgreementLinkData       as _AssetAgreementLinkData        on  $projection.ObjectAssetUUID = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..*] to I_RealEstateObjectData         as _RealEstateObjectData          on  $projection.ObjectAssetReferenceNumber = _RealEstateObjectData.RealEstateInternalID
  association [0..*] to I_CollateralRealEstate         as _CollateralRealEstate          on  $projection.ObjectAssetReferenceNumber = _CollateralRealEstate.ColltrlRealEstateConvertedID
  association [0..*] to I_RealEstateObjectPrt          as _RealEstateObjectPrt           on  $projection.ObjectAssetReferenceNumber = _RealEstateObjectPrt.RealEstatePrtInternalID
  association [0..*] to I_CollateralRealEstatePart     as _CollateralRealEstatePart      on  $projection.ObjectAssetReferenceNumber = _CollateralRealEstatePart.ColltrlREPartConvertedID
  association [0..*] to I_RealEstatePrtAccessory       as _RealEstatePrtAccessory        on  $projection.ObjectAssetReferenceNumber = _RealEstatePrtAccessory.RealEstatePrtAccsryInternalID
  association [0..*] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory        on  $projection.ObjectAssetReferenceNumber = _ColltrlREPartAccessory.ColltrlREPrtAccsryConvertedID
  association [0..*] to I_MovableObjectData            as _MovableObjectData             on  $projection.ObjectAssetReferenceNumber = _MovableObjectData.MovableObjectInternalID
  association [0..*] to I_ShipObjectData               as _ShipObjectData                on  $projection.ObjectAssetUUID = _ShipObjectData.ObjectAssetUUID
  association [0..*] to I_RightsObjectData             as _RightsObjectData              on  $projection.ObjectAssetReferenceNumber = _RightsObjectData.RightsObjectInternalID
  association [0..*] to I_InsuranceObjectData          as _InsuranceObjectData           on  $projection.ObjectAssetReferenceNumber = _InsuranceObjectData.InsuranceObjectInternalID
  association [0..*] to I_CollateralInsurance          as _CollateralInsurance           on  $projection.ObjectAssetReferenceNumber = _CollateralInsurance.CollateralInsuranceConvertedID
  association [0..*] to I_SecuritiesAccountObjectData  as _SecuritiesAccountObjectData   on  $projection.ObjectAssetReferenceNumber = _SecuritiesAccountObjectData.SecuritiesAcctObjInternalID
  association [0..*] to I_SecuritiesAccountPosition    as _SecuritiesAccountPosition     on  $projection.ObjectAssetReferenceNumber = _SecuritiesAccountPosition.SecuritiesAcctPosInternalID
  association [0..1] to I_CollateralObjectCalcData     as _CollateralObjectCalcData      on  $projection.ObjectAssetUUID                    = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                         and _CollateralObjectCalcData.CollateralObjectType = 'AST'
  association [0..*] to I_AgreementAssetCalcData       as _AgreementAssetCalcData        on  $projection.ObjectAssetUUID = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..1] to I_ObjectAssetType              as _ObjectAssetType               on  $projection.ObjectAssetType = _ObjectAssetType.ObjectAssetType
  association [0..1] to I_CollateralSafetyDiscountSign as _ObjectAssetSafetyDiscountSign on  $projection.ObjectAssetSafetyDiscountSign = _ObjectAssetSafetyDiscountSign.CollateralSafetyDiscountSign
  association [0..1] to I_ObjectAssetLiquidationType   as _ObjectAssetLiquidationType    on  $projection.ObjectAssetLiquidationType = _ObjectAssetLiquidationType.ObjectAssetLiquidationType
  association [0..1] to I_ObjectReferenceSystem        as _ObjectAssetReferenceSystem    on  $projection.ObjectAssetReferenceSystem = _ObjectAssetReferenceSystem.ObjectReferenceSystem
  association [0..1] to I_CollateralValuationType      as _ObjectAssetValuationType      on  $projection.ObjectAssetValuationType = _ObjectAssetValuationType.CollateralValuationType
  association [0..1] to I_CollateralAttributeIndType   as _ObjectAssetLiquidationReason  on  $projection.ObjectAssetLiquidationReason                = _ObjectAssetLiquidationReason.CollateralAttributeIndType
                                                                                         and _ObjectAssetLiquidationReason.CollateralAttributeIndCat = 'AST004'
  association [0..1] to I_ObjectAssetValuationFrqcy    as _ObjectAssetValuationFrequency on  $projection.ObjectAssetValuationFrequency = _ObjectAssetValuationFrequency.ObjectAssetValuationFrequency
  association [0..1] to I_ObjectAssetVerificationFrqcy as _ObjectAssetVerificationFrqcy  on  $projection.ObjectAssetVerificationFrqcy = _ObjectAssetVerificationFrqcy.ObjectAssetVerificationFrqcy
  association [0..1] to I_Currency                     as _ObjectAssetSafetyDiscountCrcy on  $projection.ObjectAssetSafetyDiscountCrcy = _ObjectAssetSafetyDiscountCrcy.Currency
  association [0..1] to I_Currency                     as _ObjectAssetLiquidationCrcy    on  $projection.ObjectAssetLiquidationCurrency = _ObjectAssetLiquidationCrcy.Currency
  association [0..1] to I_Currency                     as _ObjectAssetNominalCurrency    on  $projection.ObjectAssetNominalCurrency = _ObjectAssetNominalCurrency.Currency
  association [0..1] to I_Currency                     as _ObjectAssetFinalCurrency      on  $projection.ObjectAssetFinalCurrency = _ObjectAssetFinalCurrency.Currency
  association [0..1] to I_Currency                     as _ObjectAssetOriginalCurrency   on  $projection.ObjectAssetOriginalCurrency = _ObjectAssetOriginalCurrency.Currency
  association [0..1] to I_Country                      as _ObjectAssetLqdtnBankCountry   on  $projection.ObjectAssetLqdtnBankCountry = _ObjectAssetLqdtnBankCountry.Country
  association [0..1] to I_UnitOfMeasure                as _ObjectAssetUnitOfMeasure      on  $projection.ObjectAssetUnitOfMeasure = _ObjectAssetUnitOfMeasure.UnitOfMeasure
{
  key ast_guid         as ObjectAssetUUID,
      ast_id           as ObjectAssetID,
      @ObjectModel.foreignKey.association: '_ObjectAssetType'
      ast_typ          as ObjectAssetType,
      parent_guid      as ObjectAssetParentUUID,
      object_ref_id    as ObjectAssetReferenceNumber,
      risk_code        as ObjectAssetRiskCode,
      @ObjectModel.foreignKey.association: '_ObjectAssetSafetyDiscountSign'
      sfty_ind         as ObjectAssetSafetyDiscountSign,
      sfty_dscnt       as ObjectAssetSafetyDiscountPct,
      @Semantics.amount.currencyCode: 'ObjectAssetSafetyDiscountCrcy'
      sfty_amount      as ObjectAssetSafetyDiscountAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetSafetyDiscountCrcy'
      sfty_amt_curr    as ObjectAssetSafetyDiscountCrcy,
      @ObjectModel.foreignKey.association: '_ObjectAssetReferenceSystem'
      objsysid         as ObjectAssetReferenceSystem,
      @ObjectModel.foreignKey.association: '_ObjectAssetValuationType'
      valuation_typ    as ObjectAssetValuationType,
      @ObjectModel.foreignKey.association: '_ObjectAssetValuationFrequency'
      unit_valn_freq   as ObjectAssetValuationFrequency,
      period_valn_freq as ObjectAssetValuationPeriod,
      past_valued_date as ObjectAssetLastRevaluationDate,
      start_date       as ObjectAssetRevaluationStartDte,
      end_date         as ObjectAssetRevaluationEndDate,
      lending_rate_ind as ObjectAssetLendingRateSign,
      lending_rate1    as ObjectAsset1stLendingRate,
      lending_rate2    as ObjectAsset2ndLendingRate,
      lending_rate3    as ObjectAsset3rdLendingRate,
      lending_rate4    as ObjectAsset4thLendingRate,
      lending_rate5    as ObjectAsset5thLendingRate,
      @ObjectModel.foreignKey.association: '_ObjectAssetLiquidationType'
      liqd_typ         as ObjectAssetLiquidationType,
      @ObjectModel.foreignKey.association: '_ObjectAssetLiquidationReason'
      liqd_reason      as ObjectAssetLiquidationReason,
      liqd_date        as ObjectAssetLiquidationDate,
      @Semantics.amount.currencyCode: 'ObjectAssetLiquidationCurrency'
      liqd_amt         as ObjectAssetLiquidationAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetLiquidationCrcy'
      liqd_curr        as ObjectAssetLiquidationCurrency,
      acc_number_liq   as ObjectAssetLqdtnAccountNumber,
      @ObjectModel.foreignKey.association: '_ObjectAssetLqdtnBankCountry'
      bank_cntry_liq   as ObjectAssetLqdtnBankCountry,
      bank_key_liq     as ObjectAssetLiquidationBankKey,
      bank_ctrlkey_liq as ObjectAssetBankControlKey,
      @ObjectModel.foreignKey.association: '_ObjectAssetVerificationFrqcy'
      unit_verf_freq   as ObjectAssetVerificationFrqcy,
      period_verf_freq as ObjectAssetVerificationPeriod,
      last_verf_date   as ObjectAssetVerificationDate,
      @Semantics.amount.currencyCode: 'ObjectAssetNominalCurrency'
      nom_value        as ObjectAssetNominalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetNominalCurrency'
      nom_value_curr   as ObjectAssetNominalCurrency,
      @Semantics.amount.currencyCode: 'ObjectAssetFinalCurrency'
      ast_value        as ObjectAssetFinalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetFinalCurrency'
      ast_value_curr   as ObjectAssetFinalCurrency,
      @Semantics.quantity.unitOfMeasure: 'ObjectAssetUnitOfMeasure'
      quantity         as ObjectAssetQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ObjectAssetUnitOfMeasure'
      unit_of_measure  as ObjectAssetUnitOfMeasure,
      @Semantics.amount.currencyCode: 'ObjectAssetOriginalCurrency'
      ori_value        as ObjectAssetOriginalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetOriginalCurrency'
      ori_value_curr   as ObjectAssetOriginalCurrency,

      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _AssetAgreementLinkData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstate'
      _RealEstateObjectData,
      _CollateralRealEstate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstatePart'
      _RealEstateObjectPrt,
      _CollateralRealEstatePart,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ColltrlREPartAccessory'
      _RealEstatePrtAccessory,
      _ColltrlREPartAccessory,
      _MovableObjectData,
      _ShipObjectData,
      _RightsObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'      
      _InsuranceObjectData,
      _CollateralInsurance,
      _SecuritiesAccountObjectData,
      _SecuritiesAccountPosition,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _ObjectAssetType,
      _ObjectAssetSafetyDiscountSign,
      _ObjectAssetLiquidationType,
      _ObjectAssetReferenceSystem,
      _ObjectAssetValuationType,
      _ObjectAssetLiquidationReason,
      _ObjectAssetValuationFrequency,
      _ObjectAssetVerificationFrqcy,
      _ObjectAssetSafetyDiscountCrcy,
      _ObjectAssetLiquidationCrcy,
      _ObjectAssetNominalCurrency,
      _ObjectAssetFinalCurrency,
      _ObjectAssetOriginalCurrency,
      _ObjectAssetLqdtnBankCountry,
      _ObjectAssetUnitOfMeasure
}
```
