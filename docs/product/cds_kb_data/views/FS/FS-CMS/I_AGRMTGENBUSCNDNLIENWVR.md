---
name: I_AGRMTGENBUSCNDNLIENWVR
description: "GBC Lien on Agreement"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVR')/$value
semantic_en: "GBC Lien on Agreement"
semantic_vi: "GBC Lien on Agreement — CDS view giao diện dựa trên tcms_cag_gbcln."
keywords:
  - "gbc"
  - "lien"
  - "agreement"
  - "agrmt"
  - "cndn"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTGENBUSCNDNLIENWVR

**GBC Lien on Agreement**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtGenBusCndnLienWvr` | ✓ | |  | `ind_gbc_lien` | `CHAR(2)` | GBC Lien on Agreement |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtGenBusCndnLienWvrText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGENBUSCNDNLIENWVR')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGGBCLN',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgrmtGenBusCndnLienWvr'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'GBC Lien on Agreement'
define view I_AgrmtGenBusCndnLienWvr
  as select from tcms_cag_gbcln
  association [0..*] to I_AgrmtGenBusCndnLienWvrText as _Text on $projection.AgrmtGenBusCndnLienWvr = _Text.AgrmtGenBusCndnLienWvr
{
      @ObjectModel.text.association: '_Text'
  key ind_gbc_lien as AgrmtGenBusCndnLienWvr,

      _Text

}
```
