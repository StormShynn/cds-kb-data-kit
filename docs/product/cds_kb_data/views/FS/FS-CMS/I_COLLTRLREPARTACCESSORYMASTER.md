---
name: I_COLLTRLREPARTACCESSORYMASTER
description: "Accessory Details for Collateral RE Part"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value
semantic_en: "Accessory Details for Collateral RE Part"
semantic_vi: "Accessory Details for Collateral RE Part — CDS view giao diện dựa trên cms_re_prt_acs."
keywords:
  - "accessory"
  - "details"
  - "for"
  - "collateral"
  - "part"
  - "colltrl"
  - "real"
  - "estate"
  - "type"
  - "number"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREPARTACCESSORYMASTER

**Accessory Details for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREPartAccessoryUUID` | ✓ | |  | `prt_acs_guid` | `RAW(16)` | GUID for part accessory |
| `CollateralRealEstatePartUUID` |  | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `ColltrlRealEstateAccessoryType` |  | |  | `acs_type` | `CHAR(6)` | Accessory Type |
| `ColltrlRENumberOfAccessory` |  | |  | `no_of_acs` | `INT4(10)` | No of Accessory Units |
| `ColltrlREAccessoryAmount` |  | |  | `acs_value` | `CURR(17)` | Value of the Accessory |
| `ColltrlREAccessoryCurrency` |  | |  | `acs_value_curr` | `CUKY(5)` | Currency for Value of the accessory |
| `ColltrlREIsSubAssetCreated` |  | |  | `is_sub_ast_crea` | `CHAR(1)` | Indicates whether a Sub-asset is created for Building Part |
| `ColltrlREAccessoryDescription` |  | |  | `acs_desc` | `CHAR(30)` | Description of the cost |
| `ColltrlRealEstateAccessoryID` |  | |  | `acs_id` | `NUMC(4)` | Sequence Number of Accessory or Special Equipment |
| `CollateralRealEstateRiskCode` |  | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `ColltrlRESafetyDiscountSign` |  | |  | `sfty_ind` | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `ColltrlRESafetyDiscountPercent` |  | |  | `sfty_dscnt` | `DEC(10)` | Safety discount |
| `ColltrlRESafetyDiscountAmount` |  | |  | `sfty_amount` | `CURR(17)` | Safety discount as an amount |
| `ColltrlRESftyDiscountCurrency` |  | |  | `sfty_amt_curr` | `CUKY(5)` | Currency of the Safety discount amount |
| `ColltrlRealEstateValuationType` |  | |  | `valuation_typ` | `CHAR(2)` | Type of Check conducted on the object |
| `ColltrlREValuationFrequency` |  | |  | `unit_valn_freq` | `CHAR(2)` | Indicator : Valuation Period |
| `ColltrlREValuationPeriod` |  | |  | `period_valn_freq` | `NUMC(4)` | Period of revaluation for a real estate |
| `ColltrlRELastRevaluationDate` |  | |  | `past_valued_date` | `DATS(8)` | Most Recent Date on which the Real Estate was last Valued |
| `ColltrlRERevaluationStartDate` |  | |  | `start_date` | `DATS(8)` | Revaluation Start date |
| `ColltrlRERevaluationEndDate` |  | |  | `end_date` | `DATS(8)` | End date for Revaluation of the Real Estate |
| `ColltrlRealEstateLendingSign` |  | |  | `lending_rate_ind` | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `ColltrlRE1stLendingRate` |  | |  | `lending_rate1` | `DEC(10)` | Lending rate 1 |
| `ColltrlRE2ndLendingRate` |  | |  | `lending_rate2` | `DEC(10)` | Lending rate 2 |
| `ColltrlRE3rdLendingRate` |  | |  | `lending_rate3` | `DEC(10)` | Lending rate 3 |
| `ColltrlRE4thLendingRate` |  | |  | `lending_rate4` | `DEC(10)` | Lending rate 4 |
| `ColltrlRE5thLendingRate` |  | |  | `lending_rate5` | `DEC(10)` | Lending rate 5 |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ColltrlREPartPartner` | | ✓ | | | | |
| `_CollateralRealEstatePartCost` | | ✓ | | | | |
| `_ColltrlREPartValue` | | ✓ | | | | |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_ColltrlREAccessoryType` | | ✓ | | | | |
| `_CollateralRealEstateRiskCode` | | ✓ | | | | |
| `_ColltrlRESafetyDiscountSign` | | ✓ | | | | |
| `_ColltrlREAccessoryCurrency` | | ✓ | | | | |
| `_ColltrlRESftyDiscountCurrency` | | ✓ | | | | |
| `_ColltrlREValuationType` | | ✓ | | | | |
| `_ColltrlREValuationFrequency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..1] |
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..1] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_ColltrlREPartPartner` | `I_ColltrlREPartPartner` | [0..*] |
| `_CollateralRealEstatePartCost` | `I_CollateralRealEstatePartCost` | [0..*] |
| `_ColltrlREPartValue` | `I_ColltrlREPartValue` | [0..*] |
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_ColltrlREAccessoryType` | `I_CollateralAttributeIndType` | [0..1] |
| `_CollateralRealEstateRiskCode` | `I_CollateralObjectRiskCode` | [0..1] |
| `_ColltrlRESafetyDiscountSign` | `I_CollateralSafetyDiscountSign` | [0..1] |
| `_ColltrlREAccessoryCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRESftyDiscountCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREValuationType` | `I_CollateralValuationType` | [0..1] |
| `_ColltrlREValuationFrequency` | `I_ColltrlREValuationFrequency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREPRTACSRYMSTR',
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
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,                         
    representativeKey: 'ColltrlREPartAccessoryUUID'
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
@EndUserText.label: 'Accessory Details for Collateral RE Part'
define view I_ColltrlREPartAccessoryMaster
  as select from cms_re_prt_acs
  association [0..1] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory        on  $projection.ColltrlREPartAccessoryUUID = _ColltrlREPartAccessory.ColltrlREPartAccessoryUUID
  association [0..1] to I_CollateralRealEstatePart     as _CollateralRealEstatePart      on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePart.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREPartMaster          as _ColltrlREPartMaster           on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartPartner         as _ColltrlREPartPartner          on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartPartner.CollateralRealEstatePartUUID
  association [0..*] to I_CollateralRealEstatePartCost as _CollateralRealEstatePartCost  on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePartCost.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartValue           as _ColltrlREPartValue            on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartValue.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlRELandRegister        as _ColltrlRELandRegister         on  $projection.CollateralRealEstatePartUUID = _ColltrlRELandRegister.CollateralRealEstatePartUUID
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREAccessoryType        on  $projection.ColltrlRealEstateAccessoryType        = _ColltrlREAccessoryType.CollateralAttributeIndType
                                                                                         and _ColltrlREAccessoryType.CollateralAttributeIndCat = 'REO010'
  association [0..1] to I_CollateralObjectRiskCode     as _CollateralRealEstateRiskCode  on  $projection.CollateralRealEstateRiskCode = _CollateralRealEstateRiskCode.CollateralObjectRiskCode
  association [0..1] to I_CollateralSafetyDiscountSign as _ColltrlRESafetyDiscountSign   on  $projection.ColltrlRESafetyDiscountSign = _ColltrlRESafetyDiscountSign.CollateralSafetyDiscountSign
  association [0..1] to I_Currency                     as _ColltrlREAccessoryCurrency    on  $projection.ColltrlREAccessoryCurrency = _ColltrlREAccessoryCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRESftyDiscountCurrency on  $projection.ColltrlRESftyDiscountCurrency = _ColltrlRESftyDiscountCurrency.Currency
  association [0..1] to I_CollateralValuationType      as _ColltrlREValuationType        on  $projection.ColltrlRealEstateValuationType = _ColltrlREValuationType.CollateralValuationType
  association [0..1] to I_ColltrlREValuationFrequency  as _ColltrlREValuationFrequency   on  $projection.ColltrlREValuationFrequency = _ColltrlREValuationFrequency.ColltrlREValuationFrequency
{
  key prt_acs_guid     as ColltrlREPartAccessoryUUID,
      obj_prt_guid     as CollateralRealEstatePartUUID,
      part_id          as CollateralRealEstatePartID,
      @ObjectModel.foreignKey.association: '_ColltrlREAccessoryType'
      acs_type         as ColltrlRealEstateAccessoryType,
      no_of_acs        as ColltrlRENumberOfAccessory,
      @Semantics.amount.currencyCode: 'ColltrlREAccessoryCurrency'
      acs_value        as ColltrlREAccessoryAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREAccessoryCurrency'
      acs_value_curr   as ColltrlREAccessoryCurrency,
      @Semantics.booleanIndicator: true
      is_sub_ast_crea  as ColltrlREIsSubAssetCreated,
      acs_desc         as ColltrlREAccessoryDescription,
      acs_id           as ColltrlRealEstateAccessoryID,
      @ObjectModel.foreignKey.association: '_CollateralRealEstateRiskCode'
      risk_code        as CollateralRealEstateRiskCode,
      @ObjectModel.foreignKey.association: '_ColltrlRESafetyDiscountSign'
      sfty_ind         as ColltrlRESafetyDiscountSign,
      sfty_dscnt       as ColltrlRESafetyDiscountPercent,
      @Semantics.amount.currencyCode: 'ColltrlRESftyDiscountCurrency'
      sfty_amount      as ColltrlRESafetyDiscountAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRESftyDiscountCurrency'
      sfty_amt_curr    as ColltrlRESftyDiscountCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlREValuationType'
      valuation_typ    as ColltrlRealEstateValuationType,
      @ObjectModel.foreignKey.association: '_ColltrlREValuationFrequency'
      unit_valn_freq   as ColltrlREValuationFrequency,
      period_valn_freq as ColltrlREValuationPeriod,
      past_valued_date as ColltrlRELastRevaluationDate,
      start_date       as ColltrlRERevaluationStartDate,
      end_date         as ColltrlRERevaluationEndDate,
      lending_rate_ind as ColltrlRealEstateLendingSign,
      lending_rate1    as ColltrlRE1stLendingRate,
      lending_rate2    as ColltrlRE2ndLendingRate,
      lending_rate3    as ColltrlRE3rdLendingRate,
      lending_rate4    as ColltrlRE4thLendingRate,
      lending_rate5    as ColltrlRE5thLendingRate,

      _ColltrlREPartAccessory,
      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ColltrlREPartPartner,
      _CollateralRealEstatePartCost,
      _ColltrlREPartValue,
      _ColltrlRELandRegister,
      _ColltrlREAccessoryType,
      _CollateralRealEstateRiskCode,
      _ColltrlRESafetyDiscountSign,
      _ColltrlREAccessoryCurrency,
      _ColltrlRESftyDiscountCurrency,
      _ColltrlREValuationType,
      _ColltrlREValuationFrequency

}
```
