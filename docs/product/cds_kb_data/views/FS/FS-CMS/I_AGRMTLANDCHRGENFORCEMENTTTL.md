---
name: I_AGRMTLANDCHRGENFORCEMENTTTL
description: "Agreement Land Charge Enforcement Title"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCEMENTTTL')/$value
semantic_en: "Agreement Land Charge Enforcement Title"
semantic_vi: "Agreement Land Charge Enforcement Title — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "land"
  - "charge"
  - "enforcement"
  - "title"
  - "agrmt"
  - "chrg"
  - "enfrcmnt"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTLANDCHRGENFORCEMENTTTL

**Agreement Land Charge Enforcement Title**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCEMENTTTL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtLandChrgEnfrcmntTtlType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lchg_enfc_titl preserving type )` | `CHAR(2)` | Indicator for Enforcement Title |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtLandChrgEnforceTtlText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCEMENTTTL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCEMENTTTL')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGLCENFTTL',
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
    representativeKey: 'AgrmtLandChrgEnfrcmntTtlType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Land Charge Enforcement Title'
define view I_AgrmtLandChrgEnforcementTtl
  as select from dd07l
  association [0..*] to I_AgrmtLandChrgEnforceTtlText as _Text on $projection.AgrmtLandChrgEnfrcmntTtlType = _Text.AgrmtLandChrgEnfrcmntTtlType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lchg_enfc_titl preserving type ) as AgrmtLandChrgEnfrcmntTtlType,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_CAG_LCHG_ENFC_TITLE'
  and dd07l.as4local = 'A'
```
