---
name: I_PRODUCTSTORAGE_2
description: Productstorage 2
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTORAGE_2

**Productstorage 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |
| `StorageConditions` |  | |  | `raube` |
| `TemperatureConditionInd` |  | |  | `tempb` |
| `HazardousMaterialNumber` |  | |  | `stoff` |
| `NmbrOfGROrGISlipsToPrintQty` |  | |  | `wesch` |
| `LabelType` |  | |  | `etiar` |
| `LabelForm` |  | |  | `etifo` |
| `MinRemainingShelfLife` |  | |  | `mhdrz` |
| `ProductExpirationDateCode` |  | |  | `sled_bbd` |
| `StorageBinInstruction` |  | |  | `behvo` |
| `TotalShelfLifeStoragePercent` |  | |  | `mhdlp` |
| `ShelfLifeExpirationDatePeriod` |  | |  | `cast(mara.iprkz as shelflifeexpirationdateperiod preserving type )` |
| `ShelfLifeExprtnDateRndngRule` |  | |  | `rdmhd` |
| `AuthorizationGroup` |  | |  | `begru` |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |
| `TotalShelfLife` |  | |  | `mhdhb` |
| `BaseUnit` |  | |  | `meins` |
| `_Product` | | ✓ | | |
| `_StorageCondition` | | ✓ | | |
| `_TemperatureConditionInd` | | ✓ | | |
| `_TemperatureConditionText` | | ✓ | | |
| `_ShelfLifeExprtnDateRndngRule` | | ✓ | | |
| `_StorageBinInstruction` | | ✓ | | |
| `_LabelForm` | | ✓ | | |
| `_ShelfLifeExpirationDatePeriod` | | ✓ | | |
| `_LabelType` | | ✓ | | |
| `_ProductExpirationDateCode` | | ✓ | | |
| `_BaseUnitOfMeasure` | | ✓ | | |
| `_ShelfLifeExprtnDatePeriodText` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |
| `_BaseUnitOfMeasureText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdStorageExt` | `E_Product` | [0..1] |
| `_StorageCondition` | `I_Storagecondition` | [0..1] |
| `_TemperatureConditionInd` | `I_Tempindcndn` | [0..1] |
| `_TemperatureConditionText` | `I_Tempindcndntext` | [0..*] |
| `_ShelfLifeExprtnDateRndngRule` | `I_ShelfLifeExprtnDateRndngRule` | [0..1] |
| `_StorageBinInstruction` | `I_CtnRqmtsForProduct` | [0..1] |
| `_LabelForm` | `I_LabelForm` | [0..1] |
| `_ShelfLifeExpirationDatePeriod` | `I_ProdShelfLifeExprtnDtePerdVH` | [0..1] |
| `_LabelType` | `I_LabelType` | [0..1] |
| `_ProductExpirationDateCode` | `I_ProductExpirationDateCode` | [0..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShelfLifeExprtnDatePeriodText` | `I_ProdShelfLifeExprtnDtePerdT` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
sqlViewName: 'IPRDROOTSTORAGE2',
compiler.compareFilter: true,
preserveKey: true
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Storage'
@ObjectModel.representativeKey: 'Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true

@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
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
@ObjectModel.sapObjectNodeType.name:'ProductStorage'

define view I_ProductStorage_2
  as select from mara
  association [1..1] to I_Product                      as _Product                       on $projection.Product = _Product.Product
  association [0..1] to E_Product                      as _ProdStorageExt                on $projection.Product = _ProdStorageExt.Product
  association [0..1] to I_Storagecondition             as _StorageCondition              on $projection.StorageConditions = _StorageCondition.StorageConditions
  association [0..1] to I_Tempindcndn                  as _TemperatureConditionInd       on $projection.TemperatureConditionInd = _TemperatureConditionInd.TemperatureConditionInd
  association [0..*] to I_Tempindcndntext              as _TemperatureConditionText      on $projection.TemperatureConditionInd = _TemperatureConditionText.TemperatureConditionInd
  association [0..1] to I_ShelfLifeExprtnDateRndngRule as _ShelfLifeExprtnDateRndngRule  on $projection.ShelfLifeExprtnDateRndngRule = _ShelfLifeExprtnDateRndngRule.ShelfLifeExprtnDateRndngRule
  association [0..1] to I_CtnRqmtsForProduct           as _StorageBinInstruction         on $projection.StorageBinInstruction = _StorageBinInstruction.StorageBinInstruction
  association [0..1] to I_LabelForm                    as _LabelForm                     on $projection.LabelForm = _LabelForm.LabelForm
  association [0..1] to I_ProdShelfLifeExprtnDtePerdVH as _ShelfLifeExpirationDatePeriod on $projection.ShelfLifeExpirationDatePeriod = _ShelfLifeExpirationDatePeriod.ShelfLifeExpirationDatePeriod
  association [0..1] to I_LabelType                    as _LabelType                     on $projection.LabelType = _LabelType.LabelType
  association [0..1] to I_ProductExpirationDateCode    as _ProductExpirationDateCode     on $projection.ProductExpirationDateCode = _ProductExpirationDateCode.ProductExpirationDateCode
  association [0..1] to I_UnitOfMeasure                as _BaseUnitOfMeasure             on $projection.BaseUnit = _BaseUnitOfMeasure.UnitOfMeasure
  association [0..*] to I_ProdShelfLifeExprtnDtePerdT  as _ShelfLifeExprtnDatePeriodText on $projection.ShelfLifeExpirationDatePeriod = _ShelfLifeExprtnDatePeriodText.DomainValue
  association [0..*] to I_ProductDescription_2         as _ProductDescription            on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_UnitOfMeasureText            as _BaseUnitOfMeasureText         on $projection.BaseUnit = _BaseUnitOfMeasureText.UnitOfMeasure
{
  key mara.matnr                                                          as Product,
      @ObjectModel.foreignKey.association:'_Storagecondition'
      mara.raube                                                          as StorageConditions,
      _StorageCondition,
      @ObjectModel.text.association: '_TemperatureConditionText'
      mara.tempb                                                          as TemperatureConditionInd,
      _TemperatureConditionInd,
      _TemperatureConditionText,
      mara.stoff                                                          as HazardousMaterialNumber,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      mara.wesch                                                          as NmbrOfGROrGISlipsToPrintQty,
      @ObjectModel.foreignKey.association:'_LabelType'
      mara.etiar                                                          as LabelType,
      @ObjectModel.foreignKey.association:'_LabelForm'
      mara.etifo                                                          as LabelForm,
      mara.mhdrz                                                          as MinRemainingShelfLife,
      @ObjectModel.foreignKey.association:'_ProductExpirationDateCode'
      mara.sled_bbd                                                       as ProductExpirationDateCode,

      //    Retail Field
      @ObjectModel.foreignKey.association:'_StorageBinInstruction'
      mara.behvo                                                          as StorageBinInstruction,
      _StorageBinInstruction,
      //      mara.mhdhb                                      as TotalShelfLife, //pstat changes
      mara.mhdlp                                                          as TotalShelfLifeStoragePercent,

      @ObjectModel.foreignKey.association:'_ShelfLifeExpirationDatePeriod'
      @ObjectModel.sapObjectNodeTypeReference:'ShelfLifeExpirationDatePeriod'
      cast(mara.iprkz as shelflifeexpirationdateperiod  preserving type ) as ShelfLifeExpirationDatePeriod,

      @ObjectModel.foreignKey.association:'_ShelfLifeExprtnDateRndngRule'
      mara.rdmhd                                                          as ShelfLifeExprtnDateRndngRule,
      mara.begru                                                          as AuthorizationGroup,
      cast( 'X' as sdraft_is_active preserving type )                     as IsActiveEntity, // to enbale extensibility in Draft 2.0
      mara.mhdhb                                                          as TotalShelfLife, // as per mdg model the field should be part of storage

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      mara.meins                                                          as BaseUnit,
      _ShelfLifeExprtnDateRndngRule,
      _LabelForm,
      _ShelfLifeExpirationDatePeriod,
      _LabelType,
      _ProductExpirationDateCode,
      _Product,
      _BaseUnitOfMeasure,
      _ProductDescription,
      _ShelfLifeExprtnDatePeriodText,
      _BaseUnitOfMeasureText

}
```
