---
name: I_COLLATERALREALESTATEPARTCOST
description: "Cost Details for Collateral RE Part"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value
semantic_en: "Cost Details for Collateral RE Part"
semantic_vi: "Cost Details for Collateral RE Part — CDS view giao diện dựa trên cms_re_prt_cst."
keywords:
  - "cost"
  - "details"
  - "for"
  - "collateral"
  - "part"
  - "colltrl"
  - "real"
  - "estate"
  - "type"
  - "description"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALREALESTATEPARTCOST

**Cost Details for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlRealEstatePartCostUUID` | ✓ | |  | `prt_cst_guid` | `RAW(16)` | GUID for part cost |
| `CollateralRealEstatePartUUID` |  | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstateCostType` |  | |  | `cost_type` | `CHAR(6)` | Cost Type |
| `ColltrlRECostDescription` |  | |  | `cost_desc` | `CHAR(30)` | Description of the cost |
| `CollateralRealEstateCostDate` |  | |  | `cost_date` | `DATS(8)` | Date on which the Cost was Incurred |
| `CollateralRealEstateCostAmount` |  | |  | `cost_amt` | `CURR(17)` | Actual Cost Amount |
| `ColltrlRealEstateCostCurrency` |  | |  | `cost_curr` | `CUKY(5)` | Cost Currency |
| `ColltrlRECostBaseMeasure` |  | |  | `cost_base_meas` | `CHAR(1)` | Base Measure |
| `ColltrlREPlannedCostAmount` |  | |  | `plan_cost_amt` | `CURR(17)` | Plan Cost Amount |
| `ColltrlREPlannedCostCurrency` |  | |  | `plan_cost_curr` | `CUKY(5)` | Cost currency |
| `ColltrlRECostValueEnhancing` |  | |  | `ind_val_maintain` | `CHAR(2)` | Indicator - Value Enhancing/ Increasing |
| `ColltrlRealEstateCostMeasure` |  | |  | `cst_measure` | `CHAR(6)` | Modernization or Renovation Measure |
| `ColltrlRECostIsAllowable` |  | |  | `flg_deduct_cost` | `CHAR(1)` | Flag - Allowable Costs |
| `ColltrlREAllowableCostAmount` |  | |  | `deduct_cst_amt` | `CURR(17)` | Allowable Cost Amount |
| `ColltrlREAllowableCostCurrency` |  | |  | `deduct_cst_curr` | `CUKY(5)` | Allowable Cost Currency |
| `ColltrlREAllowableCostPercent` |  | |  | `deduct_cst_pct` | `DEC(10)` | Allowable Cost In Percentage |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessoryMaster` | | ✓ | | | | |
| `_ColltrlREPartPartner` | | ✓ | | | | |
| `_ColltrlREPartValue` | | ✓ | | | | |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_CollateralRealEstateCostType` | | ✓ | | | | |
| `_ColltrlRealEstateCostMeasure` | | ✓ | | | | |
| `_ColltrlREBaseMeasure` | | ✓ | | | | |
| `_ColltrlRealEstateCostCurrency` | | ✓ | | | | |
| `_ColltrlREPlannedCostCurrency` | | ✓ | | | | |
| `_ColltrlREAllowableCostCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..1] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_ColltrlREPartAccessoryMaster` | `I_ColltrlREPartAccessoryMaster` | [0..*] |
| `_ColltrlREPartPartner` | `I_ColltrlREPartPartner` | [0..*] |
| `_ColltrlREPartValue` | `I_ColltrlREPartValue` | [0..*] |
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_CollateralRealEstateCostType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlRealEstateCostMeasure` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREBaseMeasure` | `I_ColltrlREBaseMeasure` | [0..1] |
| `_ColltrlRealEstateCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREPlannedCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREAllowableCostCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREPARTCOST',
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
    representativeKey: 'ColltrlRealEstatePartCostUUID'
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
@EndUserText.label: 'Cost Details for Collateral RE Part'
define view I_CollateralRealEstatePartCost
  as select from cms_re_prt_cst
  association [0..1] to I_CollateralRealEstatePart     as _CollateralRealEstatePart      on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePart.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREPartMaster          as _ColltrlREPartMaster           on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory        on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessory.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessoryMaster as _ColltrlREPartAccessoryMaster  on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessoryMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartPartner         as _ColltrlREPartPartner          on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartPartner.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartValue           as _ColltrlREPartValue            on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartValue.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlRELandRegister        as _ColltrlRELandRegister         on  $projection.CollateralRealEstatePartUUID = _ColltrlRELandRegister.CollateralRealEstatePartUUID
  association [0..1] to I_CollateralAttributeIndType   as _CollateralRealEstateCostType  on  $projection.CollateralRealEstateCostType                = _CollateralRealEstateCostType.CollateralAttributeIndType
                                                                                         and _CollateralRealEstateCostType.CollateralAttributeIndCat = 'REO012'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlRealEstateCostMeasure  on  $projection.ColltrlRealEstateCostMeasure                = _ColltrlRealEstateCostMeasure.CollateralAttributeIndType
                                                                                         and _ColltrlRealEstateCostMeasure.CollateralAttributeIndCat = 'REO017'
  association [0..1] to I_ColltrlREBaseMeasure         as _ColltrlREBaseMeasure          on  $projection.ColltrlRECostBaseMeasure = _ColltrlREBaseMeasure.ColltrlRealEstateBaseMeasure
  association [0..1] to I_Currency                     as _ColltrlRealEstateCostCurrency on  $projection.ColltrlRealEstateCostCurrency = _ColltrlRealEstateCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREPlannedCostCurrency  on  $projection.ColltrlREPlannedCostCurrency = _ColltrlREPlannedCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREAllowableCostCrcy    on  $projection.ColltrlREAllowableCostCurrency = _ColltrlREAllowableCostCrcy.Currency

{
  key prt_cst_guid     as ColltrlRealEstatePartCostUUID,
      obj_prt_guid     as CollateralRealEstatePartUUID,
      part_id          as CollateralRealEstatePartID,
      @ObjectModel.foreignKey.association: '_CollateralRealEstateCostType'
      cost_type        as CollateralRealEstateCostType,
      cost_desc        as ColltrlRECostDescription,
      cost_date        as CollateralRealEstateCostDate,
      @Semantics.amount.currencyCode: 'ColltrlRealEstateCostCurrency'
      cost_amt         as CollateralRealEstateCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRealEstateCostCurrency'
      cost_curr        as ColltrlRealEstateCostCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlREBaseMeasure'
      cost_base_meas   as ColltrlRECostBaseMeasure,
      @Semantics.amount.currencyCode: 'ColltrlREPlannedCostCurrency'
      plan_cost_amt    as ColltrlREPlannedCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREPlannedCostCurrency'
      plan_cost_curr   as ColltrlREPlannedCostCurrency,
      ind_val_maintain as ColltrlRECostValueEnhancing,
      @ObjectModel.foreignKey.association: '_ColltrlRealEstateCostMeasure'
      cst_measure      as ColltrlRealEstateCostMeasure,
      @Semantics.booleanIndicator: true
      flg_deduct_cost  as ColltrlRECostIsAllowable,
      @Semantics.amount.currencyCode: 'ColltrlREAllowableCostCurrency'
      deduct_cst_amt   as ColltrlREAllowableCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREAllowableCostCrcy'
      deduct_cst_curr  as ColltrlREAllowableCostCurrency,
      deduct_cst_pct   as ColltrlREAllowableCostPercent,

      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ColltrlREPartAccessory,
      _ColltrlREPartAccessoryMaster,
      _ColltrlREPartPartner,
      _ColltrlREPartValue,
      _ColltrlRELandRegister,
      _CollateralRealEstateCostType,
      _ColltrlRealEstateCostMeasure,
      _ColltrlREBaseMeasure,
      _ColltrlRealEstateCostCurrency,
      _ColltrlREPlannedCostCurrency,
      _ColltrlREAllowableCostCrcy

}
```
