---
name: I_COLAGRHTBLRGENFRCMNTWVR
description: "Agreement HBR Enforcement Waiver"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVR')/$value
semantic_en: "Agreement HBR Enforcement Waiver"
semantic_vi: "Agreement HBR Enforcement Waiver — CDS view giao diện dựa trên tcms_cag_hbrwv."
keywords:
  - "agreement"
  - "hbr"
  - "enforcement"
  - "waiver"
  - "enfrcmnt"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLAGRHTBLRGENFRCMNTWVR

**Agreement HBR Enforcement Waiver**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColAgrHtBlRgEnfrcmntWvr` | ✓ | |  | `ind_hbr_waiver` | `CHAR(2)` | Indicator for Waiver of HBR Enforcement |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColAgrHtBlRgEnfrcmntWvrText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLAGRHTBLRGENFRCMNTWVR')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGHBRENFWVR',
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
    representativeKey: 'ColAgrHtBlRgEnfrcmntWvr'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement HBR Enforcement Waiver'
define view I_ColAgrHtBlRgEnfrcmntWvr
  as select from tcms_cag_hbrwv
  association [0..*] to I_ColAgrHtBlRgEnfrcmntWvrText as _Text on $projection.ColAgrHtBlRgEnfrcmntWvr = _Text.ColAgrHtBlRgEnfrcmntWvr
{
      @ObjectModel.text.association: '_Text'
  key ind_hbr_waiver as ColAgrHtBlRgEnfrcmntWvr,

      _Text
}
```
