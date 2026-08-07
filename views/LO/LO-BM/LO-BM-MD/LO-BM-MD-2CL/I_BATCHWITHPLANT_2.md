---
name: I_BATCHWITHPLANT_2
description: "This CDS view of the batch master record provides both root and plant-specific data, and it is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch (Successor available) (I_BATCH). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? In which plants has the batch been used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHWITHPLANT_2')/$value
semantic_en: "This CDS view of the batch master record provides both root and plant-specific data, and it is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch (Successor available) (I_BATCH). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? In which plants has the batch been used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Batch Info with Plant Specific Data — CDS view tổng hợp (master data) dựa trên R_Batch."
keywords:
  - "batch"
  - "info"
  - "with"
  - "plant"
  - "specific"
  - "data"
  - "material"
  - "identifying"
  - "marked"
  - "deletion"
tags:
  - LO
  - bo:companycode
  - component:LO-BM-MD-2CL
  - interface-view
  - LO-BM
  - LO-BM-MD
  - LO-BM-MD-2CL
  - lob:logistics general
  - plan
  - supplier
---
# I_BATCHWITHPLANT_2

**This CDS view of the batch master record provides both root and plant-specific data, and it is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch (Successor available) (I_BATCH). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? In which plants has the batch been used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHWITHPLANT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `BatchIdentifyingPlant` |  | |  | `Plant` | `CHAR(4)` | Plant |
| `BatchIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for All Data in a Batch |
| `BatchPlantIsMarkedForDeletion` |  | |  | `cast('' as lvorm preserving type )` | `CHAR(1)` | Deletion Indicator |
| `MatlBatchIsInRstrcdUseStock` |  | |  |  | `CHAR(1)` | Batch in Restricted-Use Stock |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `BatchBySupplier` |  | |  |  | `CHAR(15)` | Supplier Batch Number |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin of Material (Non-Preferential Ori.) |
| `RegionOfOrigin` |  | |  |  | `CHAR(3)` | Region of Origin of Material (Non-Preferential Origin) |
| `MatlBatchAvailabilityDate` |  | |  |  | `DATS(8)` | Availability date |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `NextInspectionDate` |  | |  |  | `DATS(8)` | Next Inspection Date |
| `LastGoodsReceiptDate` |  | |  |  | `DATS(8)` | Date of last goods receipt |
| `FreeDefinedDate1` |  | |  |  | `DATS(8)` | Date for Free Use 1 |
| `FreeDefinedDate2` |  | |  |  | `DATS(8)` | Date for Free Use 2 |
| `FreeDefinedDate3` |  | |  |  | `DATS(8)` | Date for Free Use 3 |
| `FreeDefinedDate4` |  | |  |  | `DATS(8)` | Date for Free Use 4 |
| `FreeDefinedDate5` |  | |  |  | `DATS(8)` | Date for Free Use 5 |
| `FreeDefinedDate6` |  | |  |  | `DATS(8)` | Date for Free Use 6 |
| `BatchCertificationDate` |  | |  |  | `DATS(8)` | Date of Certification |
| `DefinitionOfBatchLevel` |  | |  |  | `CHAR(1)` | Indicator: definition of batch management level |
| `IsSubordinateBatch` |  | |  | `cast(' ' as subordinate_batch preserving type )` | `CHAR(1)` | Subordinate Batch |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On Timestamp |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Timestamp |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal object no.: Batch classification |
| `BatchExtWhseMgmtInternalId` |  | |  |  | `RAW(16)` | Batch ID |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `ExportAndImportProductGroup` |  | |  |  | `CHAR(4)` | Material Group for Intrastat |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `_Batch` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CountryOfOrigin` | | ✓ | | | | |
| `_RegionOfOrigin` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ClfnObjectClassForKeyDate` | | ✓ | | | | |
| `_ClfnObjectCharcValForKeyDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Batch` | `I_Batch_2` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHWITHPLANT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHWITHPLANT_2')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@EndUserText.label: 'Batch Info with Plant Specific Data'

@ObjectModel.representativeKey: 'Batch'
@ObjectModel:{
    usageType: {
      sizeCategory: #L,
      serviceQuality: #B,
      dataClass:#MASTER
    },
    supportedCapabilities: [
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE,
      #CDS_MODELING_ASSOCIATION_TARGET,
      #ANALYTICAL_DIMENSION
    ],
    modelingPattern: #NONE
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL
}

@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations:true
}

define view entity I_BatchWithPlant_2
  as select from R_Batch
  association [1..1] to I_Batch_2 as _Batch on  $projection.Material              = _Batch.Material
                                            and $projection.BatchIdentifyingPlant = _Batch.BatchIdentifyingPlant
                                            and $projection.Batch                 = _Batch.Batch                                             
{
      @ObjectModel.foreignKey.association: '_Product'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
  key Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
  key Batch,

      Plant                                           as BatchIdentifyingPlant,
      BatchIsMarkedForDeletion,
      cast('' as lvorm preserving type )              as BatchPlantIsMarkedForDeletion,

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

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      ClfnObjectInternalID,
      BatchExtWhseMgmtInternalId,
      StockSegment,
      ExportAndImportProductGroup,
      InventoryValuationType,

      _Batch,
      _Plant,
      _Supplier,
      _CountryOfOrigin,
      _RegionOfOrigin,
      _Product,
      _ClfnObjectClassForKeyDate,
      _ClfnObjectCharcValForKeyDate
}
union all select from P_BatchPlant
//  re-enable if plant-level to be supported
//inner join I_BatchConfiguration on DefinitionOfBatchLevel <> '0'
  inner join          R_Batch on  P_BatchPlant.Material = R_Batch.Material
                              and P_BatchPlant.Batch    = R_Batch.Batch
  association [1..1] to I_Batch_2 as _Batch on  $projection.Material              = _Batch.Material
                                            and $projection.BatchIdentifyingPlant = _Batch.BatchIdentifyingPlant
                                            and $projection.Batch                 = _Batch.Batch                                        
{
  key P_BatchPlant.Material,
  key P_BatchPlant.Plant,
  key P_BatchPlant.Batch,

      R_Batch.Plant                                   as BatchIdentifyingPlant,
      R_Batch.BatchIsMarkedForDeletion,
      P_BatchPlant.BatchIsMarkedForDeletion           as BatchPlantIsMarkedForDeletion,

      R_Batch.MatlBatchIsInRstrcdUseStock,
      R_Batch.Supplier,
      R_Batch.BatchBySupplier,
      R_Batch.CountryOfOrigin,
      R_Batch.RegionOfOrigin,

      R_Batch.MatlBatchAvailabilityDate,
      R_Batch.ShelfLifeExpirationDate,
      R_Batch.ManufactureDate,
      R_Batch.NextInspectionDate,
      R_Batch.LastGoodsReceiptDate,
      R_Batch.FreeDefinedDate1,
      R_Batch.FreeDefinedDate2,
      R_Batch.FreeDefinedDate3,
      R_Batch.FreeDefinedDate4,
      R_Batch.FreeDefinedDate5,
      R_Batch.FreeDefinedDate6,
      R_Batch.BatchCertificationDate,
      cast('1' as kzdch)                              as DefinitionOfBatchLevel,
      cast('X' as subordinate_batch preserving type ) as IsSubordinateBatch,


      R_Batch.CreationDateTime,
      R_Batch.LastChangeDateTime,

      R_Batch.ClfnObjectInternalID,
      P_BatchPlant.BatchExtWhseMgmtInternalId,
      R_Batch.StockSegment,
      R_Batch.ExportAndImportProductGroup,
      P_BatchPlant.InventoryValuationType,

      _Batch,
      P_BatchPlant._Plant,
      R_Batch._Supplier,
      R_Batch._CountryOfOrigin,
      R_Batch._RegionOfOrigin,
      P_BatchPlant._Product,
      R_Batch._ClfnObjectClassForKeyDate,
      R_Batch._ClfnObjectCharcValForKeyDate
}
```
