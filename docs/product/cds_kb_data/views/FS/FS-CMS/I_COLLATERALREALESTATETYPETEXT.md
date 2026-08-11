---
name: I_COLLATERALREALESTATETYPETEXT
description: "Type of Collateral Real Estate - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPETEXT')/$value
semantic_en: "Type of Collateral Real Estate - Text"
semantic_vi: "Type of Collateral Real Estate - Text — CDS view giao diện dựa trên tcms_re_typ_t."
keywords:
  - "type"
  - "collateral"
  - "real"
  - "estate"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALREALESTATETYPETEXT

**Type of Collateral Real Estate - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateType` | ✓ | |  | `object_type` | `CHAR(6)` | Real Estate Object Type ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `CollateralRealEstateTypeText` |  | |  | `name` | `CHAR(40)` | Name in a specified language |
| `_Language` | | ✓ | | | | |
| `_CollateralRealEstateType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralRealEstateType` | `I_CollateralRealEstateType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLRETYPETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralRealEstateType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Type of Collateral Real Estate - Text'
define view I_CollateralRealEstateTypeText
  as select from tcms_re_typ_t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_CollateralRealEstateType as _CollateralRealEstateType on $projection.CollateralRealEstateType = _CollateralRealEstateType.CollateralRealEstateType
{
      @ObjectModel.foreignKey.association: '_CollateralRealEstateType'
  key object_type as CollateralRealEstateType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      name        as CollateralRealEstateTypeText,

      _Language,
      _CollateralRealEstateType
}
```
