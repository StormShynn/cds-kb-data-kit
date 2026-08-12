---
name: I_COLAGRHTBLRGENFRCMNTWVRTEXT
description: "Agreement HBR Enforcement Waiver - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVRTEXT')/$value
semantic_en: "Agreement HBR Enforcement Waiver - Text"
semantic_vi: "Agreement HBR Enforcement Waiver - Text — CDS view giao diện dựa trên tcms_cag_hbrwv_t."
keywords:
  - "agreement"
  - "hbr"
  - "enforcement"
  - "waiver"
  - "text"
  - "enfrcmnt"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLAGRHTBLRGENFRCMNTWVRTEXT

**Agreement HBR Enforcement Waiver - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVRTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColAgrHtBlRgEnfrcmntWvr` | ✓ | |  | `ind_hbr_waiver` | `CHAR(2)` | Indicator for Waiver of HBR Enforcement |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ColAgrHtBlRgEnfrcmntWvrText` |  | |  | `name` | `CHAR(40)` | Waiver of HBR Enforcement Name |
| `_Language` | | ✓ | | | | |
| `_ColAgrHtBlRgEnfrcmntWvr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColAgrHtBlRgEnfrcmntWvr` | `I_ColAgrHtBlRgEnfrcmntWvr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVRTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVRTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGHBRENFWVRTXT',
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
    representativeKey: 'ColAgrHtBlRgEnfrcmntWvr'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement HBR Enforcement Waiver - Text'
define view I_ColAgrHtBlRgEnfrcmntWvrText
  as select from tcms_cag_hbrwv_t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_ColAgrHtBlRgEnfrcmntWvr as _ColAgrHtBlRgEnfrcmntWvr on $projection.ColAgrHtBlRgEnfrcmntWvr = _ColAgrHtBlRgEnfrcmntWvr.ColAgrHtBlRgEnfrcmntWvr
{
      @ObjectModel.foreignKey.association: '_ColAgrHtBlRgEnfrcmntWvr'
  key ind_hbr_waiver as ColAgrHtBlRgEnfrcmntWvr,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language       as Language,
      @Semantics.text: true
      name           as ColAgrHtBlRgEnfrcmntWvrText,

      _Language,
      _ColAgrHtBlRgEnfrcmntWvr
}
```
