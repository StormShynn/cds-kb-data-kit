---
name: I_BATCHTEXT_2
description: "This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHTEXT_2')/$value
semantic_en: "This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Batch Information by Batch Key - Text — CDS view tổng hợp (master data) dựa trên R_BatchText."
keywords:
  - "batch"
  - "information"
  - "key"
  - "text"
  - "language"
  - "material"
  - "identifying"
  - "plant"
  - "description"
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
# I_BATCHTEXT_2

**This CDS view of the batch master record is aligned with the SAP business object Batch. This CDS view is intended to replace the CDS view Batch Distinct (Successor available) (I_BatchDistinct). This CDS view provides the data to answer the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `BatchIdentifyingPlant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `BatchDescription` |  | |  |  | `CHAR(40)` | Batch Description |
| `_Batch` | | ✓ | | | | |
| `_BatchIdentifyingPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Batch` | `I_Batch_2` | [1..1] |
| `_BatchIdentifyingPlant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHTEXT_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@EndUserText.label: 'Batch Information by Batch Key - Text'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType:{
      serviceQuality: #A,
      sizeCategory: #L,
      dataClass: #MASTER
    },
    dataCategory: #TEXT,
    representativeKey: 'Batch',
    supportedCapabilities: [
      #LANGUAGE_DEPENDENT_TEXT,
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE,
      #CDS_MODELING_ASSOCIATION_TARGET
    ]
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_BatchText_2
  as select from R_BatchText
  association [1..1] to I_Batch_2 as _Batch                 on  $projection.Material              = _Batch.Material
                                                            and $projection.BatchIdentifyingPlant = _Batch.BatchIdentifyingPlant
                                                            and $projection.Batch                 = _Batch.Batch
  association [0..1] to I_Plant   as _BatchIdentifyingPlant on  $projection.BatchIdentifyingPlant = _BatchIdentifyingPlant.Plant
  association [1..1] to I_Product as _Product               on  $projection.Material = _Product.Product
{
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_Product'
  key Material,
      @ObjectModel.foreignKey.association: '_BatchIdentifyingPlant'
  key BatchIdentifyingPlant,
      @ObjectModel.foreignKey.association: '_Batch'
  key Batch,

      @Semantics.text: true
      BatchDescription,

      _Batch,
      _Product,
      _BatchIdentifyingPlant
}
```
