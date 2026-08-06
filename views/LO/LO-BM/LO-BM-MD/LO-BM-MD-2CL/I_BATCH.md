---
name: I_BATCH
description: Batch
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-BM
  - LO-BM-MD
  - interface-view
  - batch
  - component:LO-BM-MD-2CL
  - lob:Logistics General
---
# I_BATCH

**Batch**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `Plant` |
| key `Material` | `Material` |
| key `Batch` | `Batch` |
| `BatchIsMarkedForDeletion` | `BatchIsMarkedForDeletion` |
| `MatlBatchIsInRstrcdUseStock` | `MatlBatchIsInRstrcdUseStock` |
| `Supplier` | `Supplier` |
| `BatchBySupplier` | `BatchBySupplier` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `RegionOfOrigin` | `RegionOfOrigin` |
| `MatlBatchAvailabilityDate` | `MatlBatchAvailabilityDate` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `ManufactureDate` | `ManufactureDate` |
| `NextInspectionDate` | `NextInspectionDate` |
| `LastGoodsReceiptDate` | `LastGoodsReceiptDate` |
| `FreeDefinedDate1` | `FreeDefinedDate1` |
| `FreeDefinedDate2` | `FreeDefinedDate2` |
| `FreeDefinedDate3` | `FreeDefinedDate3` |
| `FreeDefinedDate4` | `FreeDefinedDate4` |
| `FreeDefinedDate5` | `FreeDefinedDate5` |
| `FreeDefinedDate6` | `FreeDefinedDate6` |
| `BatchCertificationDate` | `BatchCertificationDate` |
| `DefinitionOfBatchLevel` | `DefinitionOfBatchLevel` |
| `IsSubordinateBatch` | `cast(' ' as subordinate_batch preserving type )` |
| `BatchIdentifyingPlant` | `Plant` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `ClfnObjectInternalID` | `ClfnObjectInternalID` |
| `BatchExtWhseMgmtInternalId` | `BatchExtWhseMgmtInternalId` |
| `StockSegment` | `StockSegment` |
| `ExportAndImportProductGroup` | `ExportAndImportProductGroup` |
| `InventoryValuationType` | `InventoryValuationType` |
| `_Plant` | *Association* |
| `_Material` | *Association* |
| `_Supplier` | *Association* |
| `_CountryOfOrigin` | *Association* |
| `_RegionOfOrigin` | *Association* |
| `_Product` | *Association* |
| `_ClfnObjectClassForKeyDate` | *Association* |
| `_ClfnObjectCharcValForKeyDate` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBATCH'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Batch information'


@AccessControl.authorizationCheck: #CHECK

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass:#MASTER
@ObjectModel.representativeKey: 'Batch'
@ObjectModel.supportedCapabilities: [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #ANALYTICAL_DIMENSION
]

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 

@Analytics.dataCategory: #DIMENSION

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
define view I_Batch as 
select from I_BatchDistinct {
  @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
  @ObjectModel.foreignKey.association: '_Material'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_MaterialStdVH',
                 element: 'Material' }
    }]
  key Material,
  key Batch,
  BatchIsMarkedForDeletion,

  MatlBatchIsInRstrcdUseStock,
  @ObjectModel.foreignKey.association: '_Supplier'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_Supplier_VH',
                 element: 'Supplier' }
    }]
  Supplier,
  BatchBySupplier,
  @ObjectModel.foreignKey.association: '_CountryOfOrigin'
  CountryOfOrigin,
  @ObjectModel.foreignKey.association: '_RegionOfOrigin'
  RegionOfOrigin,
  
  MatlBatchAvailabilityDate,
  ShelfLifeExpirationDate,
  ManufactureDate,
  NextInspectionDate,
  LastGoodsReceiptDate,
  FreeDefinedDate1,
  FreeDefinedDate2,
  FreeDefinedDate3,
  FreeDefinedDate4,
  FreeDefinedDate5,
  FreeDefinedDate6,
  BatchCertificationDate,
  DefinitionOfBatchLevel,
  cast(' ' as subordinate_batch preserving type ) as IsSubordinateBatch,
  Plant as BatchIdentifyingPlant,
  
  @Semantics.systemDateTime.createdAt: true
  CreationDateTime,
  @Semantics.systemDateTime.lastChangedAt: true
  LastChangeDateTime,
  
  ClfnObjectInternalID,
  BatchExtWhseMgmtInternalId,
  StockSegment,
  ExportAndImportProductGroup,
  InventoryValuationType,
  
  _Plant,
  _Material,
  _Supplier,
  _CountryOfOrigin,
  _RegionOfOrigin,
  _Product,
  _ClfnObjectClassForKeyDate,
  _ClfnObjectCharcValForKeyDate
}
union all
// Finally consider the case that a customer has cross-plant batches but uses the value help and searches by
// plant. In this case, both tables are filled but the main attributes are on I_BatchCrossPlant. 
// This will lead to additional entries to the first read from I_BatchCrossPlant having the Plant as part of
// the key. It will not lead to additional entries if the batch is not cross-plant as I_BatchCrossPlant would
// be empty in that case and thus the result of the inner join.
select from P_BatchPlant
//  re-enable if plant-level to be supported
//inner join I_BatchConfiguration on DefinitionOfBatchLevel <> '0'
inner join I_BatchCrossPlant on P_BatchPlant.Material = I_BatchCrossPlant.Material and
                                P_BatchPlant.Batch = I_BatchCrossPlant.Batch         
association [1..1] to I_Product                   as _Product                       on  $projection.Material = _Product.Product
association [0..1] to I_ClfnObjectClassForKeyDate as _ClfnObjectClassForKeyDate     on  $projection.ClfnObjectInternalID = _ClfnObjectClassForKeyDate.ClfnObjectInternalID
association [0..*] to I_ClfnObjectCharcValForKeyDate as _ClfnObjectCharcValForKeyDate on  $projection.ClfnObjectInternalID = _ClfnObjectCharcValForKeyDate.ClfnObjectInternalID
{
    @ObjectModel.foreignKey.association: '_Plant'
    key P_BatchPlant.Plant,
    @ObjectModel.foreignKey.association: '_Material'
    key P_BatchPlant.Material,
    key P_BatchPlant.Batch,
    
    I_BatchCrossPlant.BatchIsMarkedForDeletion,

    I_BatchCrossPlant.MatlBatchIsInRstrcdUseStock,
    @ObjectModel.foreignKey.association: '_Supplier'
    I_BatchCrossPlant.Supplier,
    I_BatchCrossPlant.BatchBySupplier,
    @ObjectModel.foreignKey.association: '_CountryOfOrigin'
    I_BatchCrossPlant.CountryOfOrigin,
    @ObjectModel.foreignKey.association: '_RegionOfOrigin'
    I_BatchCrossPlant.RegionOfOrigin,
    
    I_BatchCrossPlant.MatlBatchAvailabilityDate,
    I_BatchCrossPlant.ShelfLifeExpirationDate,
    I_BatchCrossPlant.ManufactureDate,
    I_BatchCrossPlant.NextInspectionDate,
    I_BatchCrossPlant.LastGoodsReceiptDate,
    I_BatchCrossPlant.FreeDefinedDate1,
    I_BatchCrossPlant.FreeDefinedDate2,
    I_BatchCrossPlant.FreeDefinedDate3,
    I_BatchCrossPlant.FreeDefinedDate4,
    I_BatchCrossPlant.FreeDefinedDate5,
    I_BatchCrossPlant.FreeDefinedDate6,
    I_BatchCrossPlant.BatchCertificationDate,
    cast('1' as kzdch) as DefinitionOfBatchLevel,
    cast('X' as subordinate_batch preserving type ) as IsSubordinateBatch,
    cast('    ' as werks_d preserving type) as BatchIdentifyingPlant, 
    
    @Semantics.systemDateTime.createdAt: true
    I_BatchCrossPlant.CreationDateTime,
    @Semantics.systemDateTime.lastChangedAt: true
    I_BatchCrossPlant.LastChangeDateTime,
    
    I_BatchCrossPlant.ClfnObjectInternalID,
    P_BatchPlant.BatchExtWhseMgmtInternalId,
    I_BatchCrossPlant.StockSegment,
    I_BatchCrossPlant.ExportAndImportProductGroup,
    P_BatchPlant.InventoryValuationType,
    P_BatchPlant._Plant,
    P_BatchPlant._Material,
    I_BatchCrossPlant._Supplier,
    I_BatchCrossPlant._CountryOfOrigin,
    I_BatchCrossPlant._RegionOfOrigin,
    _Product,
    _ClfnObjectClassForKeyDate,
    _ClfnObjectCharcValForKeyDate
}
```
