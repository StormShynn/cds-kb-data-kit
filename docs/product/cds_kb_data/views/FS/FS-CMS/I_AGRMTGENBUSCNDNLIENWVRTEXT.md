---
name: I_AGRMTGENBUSCNDNLIENWVRTEXT
description: "GBC Lien on Agreement - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVRTEXT')/$value
semantic_en: "GBC Lien on Agreement - Text"
semantic_vi: "GBC Lien on Agreement - Text — CDS view giao diện dựa trên tcms_cag_gbcln_t."
keywords:
  - "gbc"
  - "lien"
  - "agreement"
  - "text"
  - "agrmt"
  - "cndn"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTGENBUSCNDNLIENWVRTEXT

**GBC Lien on Agreement - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVRTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtGenBusCndnLienWvr` | ✓ | |  | `ind_gbc_lien` | `CHAR(2)` | GBC Lien on Agreement |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgrmtGenBusCndnLienWvrText` |  | |  | `name` | `CHAR(40)` | GBC Lien Name |
| `_Language` | | ✓ | | | | |
| `_AgrmtGenBusCndnLienWvr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgrmtGenBusCndnLienWvr` | `I_AgrmtGenBusCndnLienWvr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVRTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVRTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGGBCLNTEXT',
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
    representativeKey: 'AgrmtGenBusCndnLienWvr'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'GBC Lien on Agreement - Text'
define view I_AgrmtGenBusCndnLienWvrText
  as select from tcms_cag_gbcln_t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_AgrmtGenBusCndnLienWvr as _AgrmtGenBusCndnLienWvr on $projection.AgrmtGenBusCndnLienWvr = _AgrmtGenBusCndnLienWvr.AgrmtGenBusCndnLienWvr
{
      @ObjectModel.foreignKey.association: '_AgrmtGenBusCndnLienWvr'
  key ind_gbc_lien as AgrmtGenBusCndnLienWvr,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as AgrmtGenBusCndnLienWvrText,

      _Language,
      _AgrmtGenBusCndnLienWvr
}
```
