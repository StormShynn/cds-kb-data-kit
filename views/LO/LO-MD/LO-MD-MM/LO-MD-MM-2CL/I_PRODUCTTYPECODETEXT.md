---
name: I_PRODUCTTYPECODETEXT
description: Producttypecodetext
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTYPECODETEXT

**Producttypecodetext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductTypeCode` | ✓ | |  | `prod_type_code` |
| `Language` | ✓ | |  | `spras` |
| `Name` |  | |  | `description` |
| `_ProductTypeCode` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductTypeCode` | `I_ProductTypeCode` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODTYPCODETXT',
  preserveKey: true,
  compiler.compareFilter: true
 }

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
  representativeKey: 'ProductTypeCode',
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory : #L,
    dataClass: #CUSTOMIZING
  },
  sapObjectNodeType.name:'ProductTypeGroupCodeText'
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Type Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE
]
@Search.searchable: true

define view I_ProductTypeCodeText
  as select from cmd_prdtype_t

  association [1..1] to I_ProductTypeCode as _ProductTypeCode on $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode
  association [1..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProductTypeCode'
  key prod_type_code as ProductTypeCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras          as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      description    as Name,

      _ProductTypeCode,
      _Language
}
```
