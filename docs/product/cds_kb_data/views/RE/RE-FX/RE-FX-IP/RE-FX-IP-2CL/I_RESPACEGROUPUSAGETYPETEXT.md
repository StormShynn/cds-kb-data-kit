---
name: I_RESPACEGROUPUSAGETYPETEXT
description: "Real Estate Space Grp Usage Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPETEXT')/$value
semantic_en: "Real Estate Space Grp Usage Type - Text"
semantic_vi: "Real Estate Space Grp Usage Type - Text — CDS view giao diện dựa trên tivipsgusagetypt."
keywords:
  - "real"
  - "estate"
  - "space"
  - "grp"
  - "usage"
  - "type"
  - "text"
  - "group"
  - "language"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:project
---
# I_RESPACEGROUPUSAGETYPETEXT

**Real Estate Space Grp Usage Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGroupUsageType` | ✓ | |  | `iosgusagetype` | `CHAR(4)` | Group Usage Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RESpaceGroupUsageTypeText` |  | |  | `xiosgusagetype` | `CHAR(60)` | Description for Group Usage Type |
| `_RESpaceGroupUsageType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RESpaceGroupUsageType` | `I_RESpaceGroupUsageType` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPETEXT')/$value)*

```abap
@EndUserText.label: 'Real Estate Space Grp Usage Type - Text'
@AbapCatalog.sqlViewName: 'IRESPGRPUSATYPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RESpaceGroupUsageType'
@ObjectModel.semanticKey: ['RESpaceGroupUsageType']

@Search.searchable: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_RESpaceGroupUsageTypeText
  as select from tivipsgusagetypt
  association [0..1] to I_RESpaceGroupUsageType as _RESpaceGroupUsageType on $projection.RESpaceGroupUsageType = _RESpaceGroupUsageType.RESpaceGroupUsageType
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  key iosgusagetype      as RESpaceGroupUsageType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      xiosgusagetype as RESpaceGroupUsageTypeText,

      _RESpaceGroupUsageType,
      _Language
}
```
