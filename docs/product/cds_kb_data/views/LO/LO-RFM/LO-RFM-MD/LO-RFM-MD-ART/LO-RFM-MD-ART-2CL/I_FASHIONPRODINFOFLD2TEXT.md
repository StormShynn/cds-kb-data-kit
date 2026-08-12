---
name: I_FASHIONPRODINFOFLD2TEXT
description: "Fashion Product Information 2 - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD2TEXT')/$value
semantic_en: "Fashion Product Information 2 - Text"
semantic_vi: "Fashion Product Information 2 - Text — CDS view cơ bản dựa trên fsh_mg_attrib2_t."
keywords:
  - "fashion"
  - "product"
  - "information"
  - "text"
  - "prod"
  - "field2"
  - "language"
  - "info"
tags:
  - LO
  - bo:material
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - product
---
# I_FASHIONPRODINFOFLD2TEXT

**Fashion Product Information 2 - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD2TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionProdInformationField2` | ✓ | |  | `attribute_2` | `CHAR(10)` | Fashion Information Field: 2 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FashionProdInfoField2Text` |  | |  | `attribute2_text` | `CHAR(40)` | Fashion Information Field: Description for field 2 |
| `_FashionProdInfoField2` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FashionProdInfoField2` | `I_FashionProdInfoField2` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD2TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD2TEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFSHPRODINFO2T'

@EndUserText.label: 'Fashion Product Information 2 - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM: { 
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'FashionProdInformationField2',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT
]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_FashionProdInfoFld2Text
  as select from fsh_mg_attrib2_t
  association [0..1] to I_FashionProdInfoField2 as _FashionProdInfoField2
  on  $projection.FashionProdInformationField2  = _FashionProdInfoField2.FashionProdInformationField2
                                                                                  
  association [0..1] to I_Language                  as _Language                  
  on  $projection.Language = _Language.Language
  
{  
       @ObjectModel.foreignKey.association: '_FashionProdInfoField2'
   key fsh_mg_attrib2_t.attribute_2 as FashionProdInformationField2,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key fsh_mg_attrib2_t.spras as Language,
       @Semantics.text: true
       @EndUserText.label: 'Fashion Product Information 2 - Text'
       @Search: {
        ranking: #LOW,
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8
       }       
       fsh_mg_attrib2_t.attribute2_text as FashionProdInfoField2Text,
  
       _FashionProdInfoField2,
       _Language
}
```
