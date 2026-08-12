---
name: I_AGRMTLANDCHRGENFORCETTLTEXT
description: "Agrmt Land Chrg Enforcement Title - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETTLTEXT')/$value
semantic_en: "Agrmt Land Chrg Enforcement Title - Text"
semantic_vi: "Agrmt Land Chrg Enforcement Title - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agrmt"
  - "land"
  - "chrg"
  - "enforcement"
  - "title"
  - "text"
  - "language"
  - "enfrcmnt"
  - "type"
  - "enforce"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTLANDCHRGENFORCETTLTEXT

**Agrmt Land Chrg Enforcement Title - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETTLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgrmtLandChrgEnfrcmntTtlType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lchg_enfc_titl preserving type )` | `CHAR(2)` | Indicator for Enforcement Title |
| `AgrmtLandChrgEnforceTtlText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgrmtLandChrgEnforcementTtl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgrmtLandChrgEnforcementTtl` | `I_AgrmtLandChrgEnforcementTtl` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETTLTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETTLTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGLCENFTTLTXT',
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
    representativeKey: 'AgrmtLandChrgEnfrcmntTtlType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agrmt Land Chrg Enforcement Title - Text'
define view I_AgrmtLandChrgEnforceTtlText
  as select from dd07t
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
  association [0..1] to I_AgrmtLandChrgEnforcementTtl as _AgrmtLandChrgEnforcementTtl on $projection.AgrmtLandChrgEnfrcmntTtlType = _AgrmtLandChrgEnforcementTtl.AgrmtLandChrgEnfrcmntTtlType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                           as Language,
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgEnforcementTtl'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lchg_enfc_titl preserving type ) as AgrmtLandChrgEnfrcmntTtlType,
      @Semantics.text: true
      ddtext                                                                               as AgrmtLandChrgEnforceTtlText,

      _Language,
      _AgrmtLandChrgEnforcementTtl
}
where
      dd07t.domname  = 'CMS_IND_CAG_LCHG_ENFC_TITLE'
  and dd07t.as4local = 'A'
```
