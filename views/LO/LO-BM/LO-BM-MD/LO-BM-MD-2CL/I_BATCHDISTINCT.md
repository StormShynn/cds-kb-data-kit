---
name: I_BATCHDISTINCT
description: Batchdistinct
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
# I_BATCHDISTINCT

**Batchdistinct**

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
| `DefinitionOfBatchLevel` | `DefinitionOfBatchLevel` |
| `BatchCertificationDate` | `BatchCertificationDate` |
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
| `_BatchDistinctText` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBATCHDISTINCT'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Batch information by batch key'


@AccessControl.authorizationCheck: #CHECK

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
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

define view I_BatchDistinct as 
select from R_Batch 
{
    @ObjectModel.foreignKey.association: '_Plant'
    key Plant,
    @ObjectModel.foreignKey.association: '_Product'
    key Material,
    @ObjectModel.text.association: '_BatchDistinctText'
    key Batch,
     
    BatchIsMarkedForDeletion,

    MatlBatchIsInRstrcdUseStock,

   
    @ObjectModel.foreignKey.association: '_Supplier'
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
    DefinitionOfBatchLevel,
    BatchCertificationDate,
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
    _ClfnObjectCharcValForKeyDate,
    _BatchDistinctText
}
```
