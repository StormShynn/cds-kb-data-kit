---
name: I_FASHIONPRODINFOFIELD3
description: "Fashion Product Information 3"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFIELD3')/$value
semantic_en: "Fashion Product Information 3"
semantic_vi: "Fashion Product Information 3 — CDS view cơ bản dựa trên fsh_mg_attrib3."
keywords:
  - "fashion"
  - "product"
  - "information"
  - "prod"
  - "field3"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - product
---
# I_FASHIONPRODINFOFIELD3

**Fashion Product Information 3**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFIELD3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionProdInformationField3` | ✓ | |  | `attribute_3` | `CHAR(6)` | Fashion Information Field: 3 |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FashionProdInfoFld3Text` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFIELD3')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONPRODINFOFIELD3')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFSHPRODINFO3'
@EndUserText.label: 'Fashion Product Information 3'

@AccessControl: {
    authorizationCheck: #NOT_REQUIRED,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true

@VDM: { 
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'FashionProdInformationField3',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #M,
    usageType.dataClass: #MASTER
}
@Consumption.ranked: true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION
]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
define view I_FashionProdInfoField3 
  as select from fsh_mg_attrib3
  association [0..*] to I_FashionProdInfoFld3Text as _Text 
      on $projection.FashionProdInformationField3  = _Text.FashionProdInformationField3
{ 
      @ObjectModel.text.association: '_Text'
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key attribute_3 as FashionProdInformationField3,
      _Text
}
```
