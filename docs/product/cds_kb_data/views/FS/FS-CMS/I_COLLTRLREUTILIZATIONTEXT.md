---
name: I_COLLTRLREUTILIZATIONTEXT
description: "Utilization for Collateral RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATIONTEXT')/$value
semantic_en: "Utilization for Collateral RE - Text"
semantic_vi: "Utilization for Collateral RE - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "utilization"
  - "for"
  - "collateral"
  - "text"
  - "language"
  - "colltrl"
  - "real"
  - "estate"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREUTILIZATIONTEXT

**Utilization for Collateral RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ColltrlRealEstateUtilization` | ✓ | |  | `cast(substring(domvalue_l, 1, 6) as cms_re_dte_prt_utilization preserving type )` | `CHAR(6)` | Utilization of the Object |
| `ColltrlREUtilizationText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ColltrlREUtilization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREUtilization` | `I_ColltrlREUtilization` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATIONTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREUTILZTNTXT',
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
    representativeKey: 'ColltrlRealEstateUtilization'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Utilization for Collateral RE - Text'
define view I_ColltrlREUtilizationText
  as select from dd07t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREUtilization as _ColltrlREUtilization on $projection.ColltrlRealEstateUtilization = _ColltrlREUtilization.ColltrlRealEstateUtilization

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                       as Language,
      @ObjectModel.foreignKey.association: '_ColltrlREUtilization'
  key cast(substring(domvalue_l, 1, 6) as cms_re_dte_prt_utilization preserving type ) as ColltrlRealEstateUtilization,

      @Semantics.text: true
      ddtext                                                                           as ColltrlREUtilizationText,

      _Language,
      _ColltrlREUtilization
}
where
      domname  = 'CMS_RE_UTIL'
  and as4local = 'A'
```
