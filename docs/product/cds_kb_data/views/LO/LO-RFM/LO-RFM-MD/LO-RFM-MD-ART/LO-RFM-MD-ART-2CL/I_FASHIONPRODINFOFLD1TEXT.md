---
name: I_FASHIONPRODINFOFLD1TEXT
description: "Fashion Product Information 1 - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD1TEXT')/$value
semantic_en: "Fashion Product Information 1 - Text"
semantic_vi: "Fashion Product Information 1 - Text — CDS view cơ bản dựa trên fsh_mg_attrib1_t."
keywords:
  - "fashion"
  - "product"
  - "information"
  - "text"
  - "prod"
  - "field1"
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
# I_FASHIONPRODINFOFLD1TEXT

**Fashion Product Information 1 - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD1TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionProdInformationField1` | ✓ | |  | `attribute_1` | `CHAR(10)` | Fashion Information Field: 1 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FashionProdInfoField1Text` |  | |  | `attribute1_text` | `CHAR(40)` | Fashion Information Field: Description for field 1 |
| `_FashionProdInfoField1` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FashionProdInfoField1` | `I_FashionProdInfoField1` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD1TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFLD1TEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFSHPRODINFO1T'

@EndUserText.label: 'Fashion Product Information 1 - Text'
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
    representativeKey: 'FashionProdInformationField1',
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
define view I_FashionProdInfoFld1Text
  as select from fsh_mg_attrib1_t
  association [0..1] to I_FashionProdInfoField1 as _FashionProdInfoField1
  on  $projection.FashionProdInformationField1  = _FashionProdInfoField1.FashionProdInformationField1
                                                                                  
  association [0..1] to I_Language                  as _Language                  
  on  $projection.Language = _Language.Language
  
{  
       @ObjectModel.foreignKey.association: '_FashionProdInfoField1'
   key fsh_mg_attrib1_t.attribute_1 as FashionProdInformationField1,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key fsh_mg_attrib1_t.spras as Language,
       @Semantics.text: true
       @EndUserText.label: 'Fashion Product Information 1 - Text'
       @Search: {
        ranking: #LOW,
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8
       }
       fsh_mg_attrib1_t.attribute1_text as FashionProdInfoField1Text,
  
       _FashionProdInfoField1,
       _Language
}
```
