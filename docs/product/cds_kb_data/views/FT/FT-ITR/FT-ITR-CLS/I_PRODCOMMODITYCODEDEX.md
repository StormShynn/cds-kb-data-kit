---
name: I_PRODCOMMODITYCODEDEX
description: "This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value
semantic_en: "This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Data Extraction for Product Commodity Code by Country/Region — CDS view giao diện dựa trên I_ProductTrdClassfctn."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "product"
  - "commodity"
  - "code"
  - "country/region"
  - "classfctn"
  - "nmbr"
  - "schm"
  - "validity"
  - "start"
  - "date"
  - "country"
tags:
  - FT
  - bo:companycode
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
  - product
  - bo:material
---
# I_PRODCOMMODITYCODEDEX

**This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchm` | ✓ | |  |  | `CHAR(10)` | Trade Classification Numbering Scheme |
| `Product` | ✓ | |  |  | `CHAR(40)` | Product |
| `CommodityCode` | ✓ | |  | `cast (Classification.TrdClassfctnNmbr as /sapsll/comco)` | `CHAR(30)` | Commodity Code |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid From |
| `Country` | ✓ | | `_TrdClassfctnNmbrSchmUsge` | `Country` | `CHAR(3)` | Country/Region |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To |
| `TrdClassfctnNmbrUUID` |  | |  |  | `RAW(16)` | NodeID |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdClassfctnNmbrSchmUsge` | `I_TrdClassfctnNmbrSchmUsge` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction for Product Commodity Code by Country/Region'
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPRCMDTYCDDX'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true 
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE  ]
@ObjectModel.representativeKey: 'CommodityCode'
@Metadata.allowExtensions:true
@Analytics: { 
    dataCategory: #DIMENSION,
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        alternativeKey: [ 'TrdClassfctnNmbrUUID' ]
    }
 }
@ObjectModel.sapObjectNodeType.name:'ProdIntlTradeClassification'

define view I_ProdCommodityCodeDEX
  as select from           I_ProductTrdClassfctn                                     as Classification
    association [0..1] to  I_TrdClassfctnNmbrSchmUsge                                as _TrdClassfctnNmbrSchmUsge on _TrdClassfctnNmbrSchmUsge.TrdClassfctnNmbrSchm = Classification.TrdClassfctnNmbrSchm
                                                                                                           
{     
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrSchm'  
  key Classification.TrdClassfctnNmbrSchm,
      @ObjectModel.foreignKey.association: '_Product'  
  key Classification.Product,
  key cast (Classification.TrdClassfctnNmbr as /sapsll/comco) as CommodityCode,
  @Semantics.businessDate.from: true
  key Classification.ValidityStartDate,
  @ObjectModel.foreignKey.association: '_Country'
  key _TrdClassfctnNmbrSchmUsge.Country,
  @Semantics.businessDate.to: true
      Classification.ValidityEndDate,
      Classification.TrdClassfctnNmbrUUID,
      
//      _TrdClassfctnNmbrSchmUsge.Country,
       
      _TrdClassfctnNmbrSchm,
      _Product,
      _TrdClassfctnNmbrSchmUsge._Country
} where _TrdClassfctnNmbrSchmUsge.TrdClassfctnNmbrSchmType = '01'
```
