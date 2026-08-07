---
name: I_BATCH_2
description: "This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value
semantic_en: "This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Batch Information by Batch Key — CDS view tổng hợp (master data) dựa trên R_Batch."
keywords:
  - "batch"
  - "information"
  - "key"
  - "material"
  - "identifying"
  - "plant"
  - "marked"
  - "deletion"
  - "matl"
  - "rstrcd"
  - "stock"
tags:
  - LO
  - bo:companycode
  - component:LO-BM-MD-2CL
  - interface-view
  - LO-BM
  - LO-BM-MD
  - LO-BM-MD-2CL
  - lob:logistics general
  - supplier
---
# I_BATCH_2

**This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `BatchIdentifyingPlant` | ✓ | |  | `Plant` | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `BatchIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for All Data in a Batch |
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
| `DefinitionOfBatchLevel` |  | |  |  | `CHAR(1)` | Indicator: definition of batch management level |
| `BatchCertificationDate` |  | |  |  | `DATS(8)` | Date of Certification |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On Timestamp |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Timestamp |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal object no.: Batch classification |
| `BatchExtWhseMgmtInternalId` |  | |  |  | `RAW(16)` | Batch ID |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `ExportAndImportProductGroup` |  | |  |  | `CHAR(4)` | Material Group for Intrastat |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `_BatchIdentifyingPlant` |  | |  | `_Plant` |  |  |
| `_BatchText` | | ✓ | | | | |
| `_BatchWithPlant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CountryOfOrigin` | | ✓ | | | | |
| `_RegionOfOrigin` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ClfnObjectClassForKeyDate` | | ✓ | | | | |
| `_ClfnObjectCharcValForKeyDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BatchText` | `I_BatchText_2` | [0..*] |
| `_BatchWithPlant` | `I_BatchWithPlant_2` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@EndUserText.label: 'Batch Information by Batch Key '

@ObjectModel: {
    representativeKey:  'Batch',
    usageType: {
        sizeCategory: #L,
        serviceQuality: #A,
        dataClass: #MASTER
    },
    supportedCapabilities: [
        #SQL_DATA_SOURCE,
        #CDS_MODELING_DATA_SOURCE,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #ANALYTICAL_DIMENSION
      ]
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

define view entity I_Batch_2
  as select from R_Batch
  association [0..*] to I_BatchText_2      as _BatchText      on  $projection.Material              = _BatchText.Material
                                                              and $projection.BatchIdentifyingPlant = _BatchText.BatchIdentifyingPlant
                                                              and $projection.Batch                 = _BatchText.Batch
  association [1..*] to I_BatchWithPlant_2 as _BatchWithPlant on  $projection.Material              = _BatchWithPlant.Material
                                                              and $projection.BatchIdentifyingPlant = _BatchWithPlant.BatchIdentifyingPlant
                                                              and $projection.Batch                 = _BatchWithPlant.Batch                                                           
{

      @ObjectModel.foreignKey.association: '_Product'
  key Material,
      @ObjectModel.foreignKey.association: '_BatchIdentifyingPlant'
  key Plant as BatchIdentifyingPlant,
      @ObjectModel.text.association: '_BatchText'
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

      _Plant as _BatchIdentifyingPlant,
      _Supplier,
      _CountryOfOrigin,
      _RegionOfOrigin,
      _Product,
      _ClfnObjectClassForKeyDate,
      _ClfnObjectCharcValForKeyDate,
      _BatchText,
      _BatchWithPlant
}
```
