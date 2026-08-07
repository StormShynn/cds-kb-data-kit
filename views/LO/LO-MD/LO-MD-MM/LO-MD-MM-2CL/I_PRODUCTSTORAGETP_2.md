---
name: I_PRODUCTSTORAGETP_2
description: Productstoragetp 2
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTORAGETP_2

**Productstoragetp 2**

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
| `StorageConditions` |  | |  |  |
| `ProdTemperatureConditionCode` |  | |  |  |
| `HazardousProduct` |  | |  |  |
| `NmbrOfGROrGISlipsToPrintQty` |  | |  |  |
| `LabelType` |  | |  |  |
| `LabelForm` |  | |  |  |
| `MinRemainingShelfLife` |  | |  |  |
| `ProductExpirationDateType` |  | |  |  |
| `StorageBinInstruction` |  | |  |  |
| `ShelfLifeExpirationDatePeriod` |  | |  |  |
| `ShelfLifeExprtnDateRndngRule` |  | |  |  |
| `TotalShelfLifeStoragePercent` |  | |  |  |
| `TotalShelfLife` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `_Product` | | ✓ | | |
| `_TemperatureConditionText` | | ✓ | | |
| `_LabelType` | | ✓ | | |
| `_LabelForm` | | ✓ | | |
| `_BaseUnitOfMeasure` | | ✓ | | |
| `_ShelfLifeExpirationDatePeriod` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |
| `_BaseUnitOfMeasureText` | | ✓ | | |
| `_ShelfLifeExprtnDatePeriodText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Storage - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductStorageTP_2
  as projection on R_ProductStorageTP as ProductStorage
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      StorageConditions,
      @ObjectModel.text.association: '_TemperatureConditionText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Tempindcndn', element : 'TemperatureConditionInd'} , useAsTemplate: true }]
      ProdTemperatureConditionCode,
      HazardousProduct,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      NmbrOfGROrGISlipsToPrintQty,
//      @ObjectModel.text.association: '_LabelType._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LABELTYPE', element : 'LabelType'} , useAsTemplate: true }]
      LabelType,
//      @ObjectModel.text.association: '_LabelForm._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LABELFORM', element : 'LabelForm'} , useAsTemplate: true }]
      LabelForm,
      MinRemainingShelfLife,
      ProductExpirationDateType,
      StorageBinInstruction,
      @ObjectModel.text.association: '_ShelfLifeExprtnDatePeriodText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdShelfLifeExprtnDtePerdVH', element : 'ShelfLifeExpirationDatePeriod'} , useAsTemplate: true }]
      ShelfLifeExpirationDatePeriod,
      ShelfLifeExprtnDateRndngRule,
      TotalShelfLifeStoragePercent,
      TotalShelfLife,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product : redirected to parent I_ProductTP_2,
      _TemperatureConditionText,
      _LabelType,
      _LabelForm,
      _BaseUnitOfMeasure,
      _ShelfLifeExpirationDatePeriod,
      _ProductDescription,
      _BaseUnitOfMeasureText,
      _ShelfLifeExprtnDatePeriodText
}
```
