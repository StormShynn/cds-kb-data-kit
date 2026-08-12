---
name: I_COLLTRLREPARTVALUE
description: "Value Details for Collateral RE Part"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value
semantic_en: "Value Details for Collateral RE Part"
semantic_vi: "Value Details for Collateral RE Part — CDS view giao diện dựa trên cms_re_prt_val."
keywords:
  - "value"
  - "details"
  - "for"
  - "collateral"
  - "part"
  - "colltrl"
  - "real"
  - "estate"
  - "type"
  - "calculated"
  - "amount"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREPARTVALUE

**Value Details for Collateral RE Part**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlRealEstatePartValueUUID` | ✓ | |  | `prt_val_guid` | `RAW(16)` | GUID for part value |
| `CollateralRealEstatePartUUID` |  | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstateValueType` |  | |  | `val_type` | `CHAR(10)` | Value Calculation Method |
| `ColltrlREValueCalculatedAmount` |  | |  | `calc_amount` | `CURR(17)` | Calculated Value |
| `ColltrlREValCalculatedCurrency` |  | |  | `calc_amt_curr` | `CUKY(5)` | Calculated value Currency |
| `ColltrlREValueEnteredAmount` |  | |  | `entered_amount` | `CURR(17)` | Entered Value |
| `ColltrlREValueEnteredCurrency` |  | |  | `ent_amt_curr` | `CUKY(5)` | Entered value Currency |
| `ColltrlREValueValidFromDate` |  | |  | `val_valid_from` | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `ColltrlREValueValidToDate` |  | |  | `val_valid_to` | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
| `ColltrlRealEstateValuationDate` |  | |  | `val_date` | `DATS(8)` | Date on which Real Estate Valuation was Performed |
| `ColltrlRealEstateValueOrigin` |  | |  | `val_origin` | `CHAR(6)` | Origin of Value |
| `CollateralRealEstateEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` |  | |  | `created_date` | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` |  | |  | `created_time` | `TIMS(6)` | Created At |
| `ColltrlRealEstateLastChangedBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` |  | |  | `last_chg_date` | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` |  | |  | `last_chg_time` | `TIMS(6)` | Last Changed At |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessoryMaster` | | ✓ | | | | |
| `_ColltrlREPartPartner` | | ✓ | | | | |
| `_CollateralRealEstatePartCost` | | ✓ | | | | |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_ColltrlREValuationResult` | | ✓ | | | | |
| `_ColltrlREValCalculatedCrcy` | | ✓ | | | | |
| `_ColltrlREValueEnteredCurrency` | | ✓ | | | | |
| `_ColltrlRealEstateValueOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..1] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_ColltrlREPartAccessoryMaster` | `I_ColltrlREPartAccessoryMaster` | [0..*] |
| `_ColltrlREPartPartner` | `I_ColltrlREPartPartner` | [0..*] |
| `_CollateralRealEstatePartCost` | `I_CollateralRealEstatePartCost` | [0..*] |
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_ColltrlREValuationResult` | `I_ColltrlREValuationResult` | [0..1] |
| `_ColltrlREValCalculatedCrcy` | `I_Currency` | [0..1] |
| `_ColltrlREValueEnteredCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRealEstateValueOrigin` | `I_CollateralAttributeIndType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREPARTVALUE',
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
    representativeKey: 'ColltrlRealEstatePartValueUUID'
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
@EndUserText.label: 'Value Details for Collateral RE Part'
define view I_ColltrlREPartValue
  as select from cms_re_prt_val
  association [0..1] to I_CollateralRealEstatePart     as _CollateralRealEstatePart      on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePart.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREPartMaster          as _ColltrlREPartMaster           on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory        on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessory.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessoryMaster as _ColltrlREPartAccessoryMaster  on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessoryMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartPartner         as _ColltrlREPartPartner          on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartPartner.CollateralRealEstatePartUUID
  association [0..*] to I_CollateralRealEstatePartCost as _CollateralRealEstatePartCost  on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePartCost.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlRELandRegister        as _ColltrlRELandRegister         on  $projection.CollateralRealEstatePartUUID = _ColltrlRELandRegister.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREValuationResult     as _ColltrlREValuationResult      on  $projection.CollateralRealEstateValueType = _ColltrlREValuationResult.ColltrlREValuationResult
  association [0..1] to I_Currency                     as _ColltrlREValCalculatedCrcy    on  $projection.ColltrlREValCalculatedCurrency = _ColltrlREValCalculatedCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlREValueEnteredCurrency on  $projection.ColltrlREValueEnteredCurrency = _ColltrlREValueEnteredCurrency.Currency
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlRealEstateValueOrigin  on  _ColltrlRealEstateValueOrigin.CollateralAttributeIndCat = 'REO016'
                                                                                         and $projection.ColltrlRealEstateValueOrigin                = _ColltrlRealEstateValueOrigin.CollateralAttributeIndType

{
  key prt_val_guid   as ColltrlRealEstatePartValueUUID,
      obj_prt_guid   as CollateralRealEstatePartUUID,
      part_id        as CollateralRealEstatePartID,
      @ObjectModel.foreignKey.association: '_ColltrlREValuationResult'
      val_type       as CollateralRealEstateValueType,
      @Semantics.amount.currencyCode: 'ColltrlREValCalculatedCurrency'
      calc_amount    as ColltrlREValueCalculatedAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREValCalculatedCrcy'
      calc_amt_curr  as ColltrlREValCalculatedCurrency,
      @Semantics.amount.currencyCode: 'ColltrlREValCalculatedCurrency'
      entered_amount as ColltrlREValueEnteredAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREValueEnteredCurrency'
      ent_amt_curr   as ColltrlREValueEnteredCurrency,
      val_valid_from as ColltrlREValueValidFromDate,
      val_valid_to   as ColltrlREValueValidToDate,
      val_date       as ColltrlRealEstateValuationDate,
      @ObjectModel.foreignKey.association: '_ColltrlRealEstateValueOrigin'
      val_origin     as ColltrlRealEstateValueOrigin,
      created_by     as CollateralRealEstateEnteredBy,
      created_date   as ColltrlRealEstateEnteredDate,
      created_time   as ColltrlRealEstateEnteredTime,
      last_chg_by    as ColltrlRealEstateLastChangedBy,
      last_chg_date  as ColltrlRELastChangedDate,
      last_chg_time  as ColltrlRELastChangedTime,

      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ColltrlREPartAccessory,
      _ColltrlREPartAccessoryMaster,
      _ColltrlREPartPartner,
      _CollateralRealEstatePartCost,
      _ColltrlRELandRegister,
      _ColltrlREValuationResult,
      _ColltrlREValCalculatedCrcy,
      _ColltrlREValueEnteredCurrency,
      _ColltrlRealEstateValueOrigin
}
```
