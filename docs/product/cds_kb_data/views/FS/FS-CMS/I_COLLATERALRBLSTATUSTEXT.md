---
name: I_COLLATERALRBLSTATUSTEXT
description: "Receivable Status - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLSTATUSTEXT')/$value
semantic_en: "Receivable Status - Text"
semantic_vi: "Receivable Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "receivable"
  - "status"
  - "text"
  - "language"
  - "collateral"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALRBLSTATUSTEXT

**Receivable Status - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CollateralRblStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_rbl_status preserving type )` | `CHAR(2)` | Status of Receivable |
| `CollateralRblStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_CollateralRblStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralRblStatus` | `I_CollateralRblStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLSTATUSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLRBLSTATUSTXT',
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
    representativeKey: 'CollateralRblStatus'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Status - Text'
define view I_CollateralRblStatusText
  as select from dd07t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_CollateralRblStatus as _CollateralRblStatus on $projection.CollateralRblStatus = _CollateralRblStatus.CollateralRblStatus
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                               as Language,
      @ObjectModel.foreignKey.association: '_CollateralRblStatus'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_rbl_status preserving type ) as CollateralRblStatus,
      @Semantics.text: true
      ddtext                                                                   as CollateralRblStatusText,

      _Language,
      _CollateralRblStatus
}
where
      dd07t.domname  = 'CMS_RBL_STATUS'
  and dd07t.as4local = 'A'
```
