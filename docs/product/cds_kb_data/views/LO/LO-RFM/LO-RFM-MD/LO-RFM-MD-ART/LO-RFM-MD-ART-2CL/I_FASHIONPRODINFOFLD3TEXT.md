---
name: I_FASHIONPRODINFOFLD3TEXT
description: "Fashion Product Information 3 - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD3TEXT')/$value
semantic_en: "Fashion Product Information 3 - Text"
semantic_vi: "Fashion Product Information 3 - Text — CDS view cơ bản dựa trên fsh_mg_attrib3_t."
keywords:
  - "fashion"
  - "product"
  - "information"
  - "text"
  - "prod"
  - "field3"
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
# I_FASHIONPRODINFOFLD3TEXT

**Fashion Product Information 3 - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD3TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionProdInformationField3` | ✓ | |  | `attribute_3` | `CHAR(6)` | Fashion Information Field: 3 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FashionProdInfoField3Text` |  | |  | `attribute3_text` | `CHAR(40)` | Fashion Information Field: Description for field 3 |
| `_FashionProdInfoField3` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FashionProdInfoField3` | `I_FashionProdInfoField3` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD3TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD3TEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFSHPRODINFO3T'

@EndUserText.label: 'Fashion Product Information 3 - Text'
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
    representativeKey: 'FashionProdInformationField3',
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
define view I_FashionProdInfoFld3Text
  as select from fsh_mg_attrib3_t
  association [0..1] to I_FashionProdInfoField3 as _FashionProdInfoField3
  on  $projection.FashionProdInformationField3  = _FashionProdInfoField3.FashionProdInformationField3
                                                                                  
  association [0..1] to I_Language                  as _Language                  
  on  $projection.Language = _Language.Language
  
{  
       @ObjectModel.foreignKey.association: '_FashionProdInfoField3'      
   key fsh_mg_attrib3_t.attribute_3 as FashionProdInformationField3,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key fsh_mg_attrib3_t.spras as Language,
       @Semantics.text: true
       @EndUserText.label: 'Fashion Product Information 3 - Text'
       @Search: {
        ranking: #LOW,
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8
       }
       fsh_mg_attrib3_t.attribute3_text as FashionProdInfoField3Text,
  
       _FashionProdInfoField3,
       _Language
}
```
