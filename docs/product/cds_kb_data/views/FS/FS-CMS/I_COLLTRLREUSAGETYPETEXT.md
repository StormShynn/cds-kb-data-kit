---
name: I_COLLTRLREUSAGETYPETEXT
description: "Usage Type for Collateral RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPETEXT')/$value
semantic_en: "Usage Type for Collateral RE - Text"
semantic_vi: "Usage Type for Collateral RE - Text — CDS view giao diện dựa trên tcms_re_u_typ_t."
keywords:
  - "usage"
  - "type"
  - "for"
  - "collateral"
  - "text"
  - "real"
  - "estate"
  - "language"
  - "colltrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREUSAGETYPETEXT

**Usage Type for Collateral RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateUsageType` | ✓ | |  | `usage_type` | `CHAR(6)` | Usage Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `ColltrlRealEstateUsageTypeText` |  | |  | `name` | `CHAR(40)` | Name in a specified language |
| `_Language` | | ✓ | | | | |
| `_ColltrlREUsageType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREUsageType` | `I_ColltrlREUsageType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREUSAGETYPETXT',
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
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                          
    representativeKey: 'CollateralRealEstateUsageType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Type for Collateral RE - Text'
define view I_ColltrlREUsageTypeText
  as select from tcms_re_u_typ_t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREUsageType as _ColltrlREUsageType on $projection.CollateralRealEstateUsageType = _ColltrlREUsageType.CollateralRealEstateUsageType
{
      @ObjectModel.foreignKey.association: '_ColltrlREUsageType'
  key usage_type as CollateralRealEstateUsageType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language   as Language,
      @Semantics.text: true
      name       as ColltrlRealEstateUsageTypeText,

      _Language,
      _ColltrlREUsageType
      
}
```
