---
name: I_PRODUCTPLANTFORECASTTP_2
description: Productplantforecasttp 2
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTFORECASTTP_2

**Productplantforecasttp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Product` |
| key `Plant` | `Plant` |
| `ConsumptionRefUsageEndDate` | `ConsumptionRefUsageEndDate` |
| `CnsmpnQuantityMultiplierValue` | `CnsmpnQuantityMultiplierValue` |
| `ConsumptionReferenceProduct` | `ConsumptionReferenceProduct` |
| `ConsumptionReferencePlant` | `ConsumptionReferencePlant` |
| `CorrectionFactorIsRequired` | `CorrectionFactorIsRequired` |
| `ForecastModelIsReset` | `ForecastModelIsReset` |
| `_Product` | *Association* |
| `_ProductPlant` | *Association* |
| `_ConsumptionReferenceProduct` | *Association* |
| `_ProductDescription` | *Association* |
| `_CnsmpnRefProductDescription` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Forecast - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
define view entity I_ProductPlantForecastTP_2
  as projection on R_ProductPlantForecastTP as ProductPlantForecast
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      ConsumptionRefUsageEndDate,
      CnsmpnQuantityMultiplierValue,
      @ObjectModel.text.association: '_CnsmpnRefProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
      ConsumptionReferenceProduct,
      ConsumptionReferencePlant,
      @Semantics.booleanIndicator: true
      CorrectionFactorIsRequired,
      @Semantics.booleanIndicator: true
      ForecastModelIsReset,
      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _ConsumptionReferenceProduct,
      _ProductDescription,
      _CnsmpnRefProductDescription
}
```
