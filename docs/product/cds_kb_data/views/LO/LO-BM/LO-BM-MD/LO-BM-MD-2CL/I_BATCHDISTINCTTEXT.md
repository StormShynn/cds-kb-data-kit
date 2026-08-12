---
name: I_BATCHDISTINCTTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?"
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?"
semantic_vi: "Batch information by batch key - Text — CDS view giao diện dựa trên R_BatchText."
keywords:
  - "batch"
  - "information"
  - "key"
  - "text"
  - "language"
  - "material"
  - "plant"
  - "description"
tags:
  - LO
  - bo:plant
  - component:LO-BM-MD-2CL
  - interface-view
  - LO-BM
  - LO-BM-MD
  - LO-BM-MD-2CL
  - lob:logistics general
  - supplier
---
# I_BATCHDISTINCTTEXT

**This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  | `BatchIdentifyingPlant` | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `BatchDescription` |  | |  |  | `CHAR(40)` | Batch Description |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Batch information by batch key - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'Batch'
@ObjectModel.supportedCapabilities: [
  #LANGUAGE_DEPENDENT_TEXT,
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET
]
define view entity I_BatchDistinctText
  as select from R_BatchText
  association [0..1] to I_Plant as _Plant     on $projection.Plant = _Plant.Plant
  association [1..1] to I_Product as _Product on $projection.Material = _Product.Product
{
  @Semantics.language: true
  key Language,
  @ObjectModel.foreignKey.association: '_Product'
  key Material,
  @ObjectModel.foreignKey.association: '_Plant'
  key BatchIdentifyingPlant as Plant,
  @ObjectModel.foreignKey.association: '_Batch'
  key Batch,
   
  @Semantics.text: true
  BatchDescription,

  _Batch,
  _Product,
  _Plant
}
```
