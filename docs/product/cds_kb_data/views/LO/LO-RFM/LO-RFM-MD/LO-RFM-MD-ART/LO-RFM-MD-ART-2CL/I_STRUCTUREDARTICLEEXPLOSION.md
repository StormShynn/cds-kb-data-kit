---
name: I_STRUCTUREDARTICLEEXPLOSION
description: "Split Structure material"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value
semantic_en: "Split Structure material"
semantic_vi: "Split Structure material — CDS view giao diện dựa trên twzla."
keywords:
  - "split"
  - "structure"
  - "material"
  - "sequence"
  - "number"
  - "product"
  - "category"
  - "strucd"
  - "article"
  - "explsn"
  - "rlvt"
  - "appl"
  - "plant"
  - "sales"
  - "organization"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - material
---
# I_STRUCTUREDARTICLEEXPLOSION

**Split Structure material**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SequenceNumber` | ✓ | |  | `lfdnr` | `NUMC(3)` | Sequence Number (Three Characters) |
| `ProductCategory` | ✓ | |  | `attyp` | `CHAR(2)` | Material Category |
| `StrucdArticleExplsnRlvtAppl` | ✓ | |  | `keytr` | `NUMC(3)` | Transaction Key |
| `PlantCategory` |  | |  | `vlfkz` | `CHAR(1)` | Plant category |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Site` |  | |  | `werks` | `CHAR(4)` | Plant |
| `Customer` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `Product` |  | |  | `strnr` | `CHAR(40)` | Structured Material |
| `StructuredArticleExplsnType` |  | |  | `kzksn` | `CHAR(1)` | Indicates splitting type of a structured material |
| `_ProductCategory` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_MatSplitTypeVal` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MatTransKeyVal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCategory` | `I_ProductCategory` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_MatSplitTypeVal` | `I_StructuredArticleExplsnType` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_Product` | `I_Material` | [1..1] |
| `_MatTransKeyVal` | `I_StrucdArticleExplsnRlvtAppl` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STRUCTUREDARTICLEEXPLOSION')/$value)*

```abap
//Splitting types for structured materials
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'SequenceNumber'
@EndUserText.label: 'Split Structure material'
@ObjectModel.sapObjectNodeType.name: 'StructuredArticleExplosion'
@ObjectModel:{
modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION  ],
 usageType.dataClass : #MASTER,
 usageType.serviceQuality: #A,
  usageType.sizeCategory: #S
 }
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
// For Data Extraction
@Analytics: {
//dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}

define view entity I_StructuredArticleExplosion
  as select from twzla
  association [1..1] to I_ProductCategory             as _ProductCategory     on $projection.ProductCategory = _ProductCategory.ProductCategory
  association [1..1] to I_SalesOrganization           as _SalesOrganization   on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [1..1] to I_DistributionChannel         as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [1..1] to I_Plant                       as _Plant               on $projection.Site = _Plant.Plant
  association [1..1] to I_StructuredArticleExplsnType as _MatSplitTypeVal     on $projection.StructuredArticleExplsnType = _MatSplitTypeVal.StructuredArticleExplsnType
  association [1..1] to I_Customer                    as _Customer            on $projection.Customer = _Customer.Customer
  association [1..1] to I_Material                    as _Product             on $projection.Product = _Product.Material
  association [1..1] to I_StrucdArticleExplsnRlvtAppl as _MatTransKeyVal      on $projection.StrucdArticleExplsnRlvtAppl = _MatTransKeyVal.StrucdArticleExplsnRlvtAppl
{
  key  lfdnr as SequenceNumber,
       @ObjectModel.foreignKey.association:'_ProductCategory'
  key  attyp as ProductCategory,
       @ObjectModel.foreignKey.association: '_MatTransKeyVal'
  key  keytr as StrucdArticleExplsnRlvtAppl, //TransactionKey,
       vlfkz as PlantCategory,
       @ObjectModel.foreignKey.association:'_SalesOrganization'
       vkorg as SalesOrganization,
       @ObjectModel.foreignKey.association:'_DistributionChannel'
       vtweg as DistributionChannel,
       @ObjectModel.foreignKey.association:'_Plant'
       werks as Site,
       @ObjectModel.foreignKey.association:'_Customer'
       kunnr as Customer,
       @ObjectModel.foreignKey.association: '_Product'
       strnr as Product,
       @ObjectModel.foreignKey.association: '_MatSplitTypeVal'
       kzksn as StructuredArticleExplsnType, //SplittingTypeFlag

       //Expose Association
       _ProductCategory,
       _SalesOrganization,
       _DistributionChannel,
       _Plant,
       _MatTransKeyVal,
       _Customer,
       _Product,
       _MatSplitTypeVal
}
```
