---
name: I_PRODUCTPLANTCOSTINGTP_2
description: Productplantcostingtp 2
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
# I_PRODUCTPLANTCOSTINGTP_2

**Productplantcostingtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `IsCoProduct` |  | |  |  |
| `CostingLotSize` |  | |  |  |
| `TaskListGroup` |  | |  |  |
| `TaskListType` |  | |  |  |
| `CostingSpecialProcurementType` |  | |  |  |
| `SourceBOMAlternative` |  | |  |  |
| `ProductBOMUsage` |  | |  |  |
| `ProductIsCostingRelevant` |  | |  |  |
| `TaskListGroupCounter` |  | |  |  |
| `VarianceKey` |  | |  |  |
| `CostingProductionVersion` |  | |  |  |
| `IsFixedPriceCoProduct` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `_BaseUnitOfMeasure` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductPlant` | | ✓ | | |
| `_BillOfMaterialUsageText` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |
| `_BaseUnitOfMeasureText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Costing - TP'
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
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductPlantCostingTP_2
  as projection on R_ProductPlantCostingTP as ProductPlantCosting
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @Semantics.booleanIndicator: true
      IsCoProduct,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CostingLotSize,
      TaskListGroup,
      TaskListType,
      CostingSpecialProcurementType,
      SourceBOMAlternative,
      @ObjectModel.text.association: '_BillOfMaterialUsageText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_BillOfMaterialUsageStdVH', element : 'BillOfMaterialVariantUsage' } , useAsTemplate: true }]
      ProductBOMUsage,
      ProductIsCostingRelevant,
      TaskListGroupCounter,
      VarianceKey,
      CostingProductionVersion,
      @Semantics.booleanIndicator: true
      IsFixedPriceCoProduct,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _BaseUnitOfMeasure,
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _BillOfMaterialUsageText,
      _ProductDescription,
      _BaseUnitOfMeasureText
}
```
