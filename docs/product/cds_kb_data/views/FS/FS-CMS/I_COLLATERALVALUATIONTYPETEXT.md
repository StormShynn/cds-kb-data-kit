---
name: I_COLLATERALVALUATIONTYPETEXT
description: "Collateral Valuation Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPETEXT')/$value
semantic_en: "Collateral Valuation Type - Text"
semantic_vi: "Collateral Valuation Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "collateral"
  - "valuation"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALVALUATIONTYPETEXT

**Collateral Valuation Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CollateralValuationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_valn_typ preserving type )` | `CHAR(2)` | Type of Valuation Check performed on Collateral Object |
| `CollateralValuationTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_CollateralValuationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralValuationType` | `I_CollateralValuationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLVALNTYPETXT',
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
    representativeKey: 'CollateralValuationType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Valuation Type - Text'
define view I_CollateralValuationTypeText
  as select from dd07t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_CollateralValuationType as _CollateralValuationType on $projection.CollateralValuationType = _CollateralValuationType.CollateralValuationType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                 as Language,
      @ObjectModel.foreignKey.association: '_CollateralValuationType'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_valn_typ preserving type ) as CollateralValuationType,
      @Semantics.text: true
      ddtext                                                                     as CollateralValuationTypeText,

      _Language,
      _CollateralValuationType
}
where
      dd07t.domname  = 'CMS_VALN_TYP'
  and dd07t.as4local = 'A'
```
