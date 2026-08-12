---
name: I_PRODUCTPLANTFORECAST
description: "Productplantforecast"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTFORECAST

**Productplantforecast**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ConsumptionRefUsageEndDate` |  | |  |  |  |  |
| `ConsumptionQtyMultiplier` |  | |  |  |  |  |
| `ConsumptionReferenceProduct` |  | |  |  |  |  |
| `ConsumptionReferencePlant` |  | |  |  |  |  |
| `CorrectionFactorIsRequired` |  | |  |  |  |  |
| `ForecastModelIsReset` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ConsumptionReferenceProduct` | | ✓ | | | | |
| `_ConsumptionReferencePlant` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |
| `_CnsmpnRefProductDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdPlantForecastExt` | `E_Productplant` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ConsumptionReferenceProduct` | `I_Product` | [1..1] |
| `_ConsumptionReferencePlant` | `I_Plant` | [1..1] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_CnsmpnRefProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLANTFRCST',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Forecast'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name:'ProductPlantForecast'

define view I_ProductPlantForecast

  as select from P_ProductPlantBasic as Forecast
  association [0..1] to E_Productplant as _ProdPlantForecastExt        on  $projection.Product = _ProdPlantForecastExt.Product
                                                                       and $projection.Plant   = _ProdPlantForecastExt.Plant


  association [1..1] to I_Product      as _Product                     on  $projection.Product = _Product.Product
  association [1..1] to I_Product      as _ConsumptionReferenceProduct on  $projection.ConsumptionReferenceProduct = _ConsumptionReferenceProduct.Product
  association [1..1] to I_Plant        as _ConsumptionReferencePlant   on  $projection.ConsumptionReferencePlant = _ConsumptionReferencePlant.Plant
  association [0..*] to I_ProductDescription_2        as _ProductDescription            on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_ProductDescription_2        as _CnsmpnRefProductDescription   on  $projection.ConsumptionReferenceProduct = _CnsmpnRefProductDescription.Product
{
  key Forecast.Product,
  key Forecast.Plant,
      Forecast.ConsumptionRefUsageEndDate,
      Forecast.ConsumptionQtyMultiplier,
      @ObjectModel.foreignKey.association: '_ConsumptionReferenceProduct'
      Forecast.ConsumptionReferenceProduct,
      @ObjectModel.foreignKey.association: '_ConsumptionReferencePlant'
      Forecast.ConsumptionReferencePlant,

      // New fields from MDG model, as part of unified API development
      Forecast.CorrectionFactorIsRequired,
      Forecast.ForecastModelIsReset,

      _Product,
      _ConsumptionReferenceProduct,
      _ConsumptionReferencePlant,
      _ProductDescription,
      _CnsmpnRefProductDescription

}
```
