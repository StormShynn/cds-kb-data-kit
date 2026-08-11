---
name: I_AGRMTLANDCHRGENFORCETYPETEXT
description: "Agrmt Land Chrg Enforcement Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETYPETEXT')/$value
semantic_en: "Agrmt Land Chrg Enforcement Type - Text"
semantic_vi: "Agrmt Land Chrg Enforcement Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agrmt"
  - "land"
  - "chrg"
  - "enforcement"
  - "type"
  - "text"
  - "language"
  - "enforce"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTLANDCHRGENFORCETYPETEXT

**Agrmt Land Chrg Enforcement Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgrmtLandChrgEnforcementType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as CMS_DTE_IND_CAG_LCHG_ENFC_TYP preserving type )` | `CHAR(2)` | Enforcement Type |
| `AgrmtLandChrgEnforceTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgrmtLandChrgEnforcementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgrmtLandChrgEnforcementType` | `I_AgrmtLandChrgEnforcementType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTLANDCHRGENFORCETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGLCENFCTYPTXT',
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
    representativeKey: 'AgrmtLandChrgEnforcementType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agrmt Land Chrg Enforcement Type - Text'
define view I_AgrmtLandChrgEnforceTypeText
  as select from dd07t
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
  association [0..1] to I_AgrmtLandChrgEnforcementType as _AgrmtLandChrgEnforcementType on $projection.AgrmtLandChrgEnforcementType = _AgrmtLandChrgEnforcementType.AgrmtLandChrgEnforcementType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                          as Language,
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgEnforcementType'
  key cast(substring(domvalue_l, 1, 2) as CMS_DTE_IND_CAG_LCHG_ENFC_TYP preserving type ) as AgrmtLandChrgEnforcementType,
      @Semantics.text: true
      ddtext                                                                              as AgrmtLandChrgEnforceTypeText,

      _Language,
      _AgrmtLandChrgEnforcementType
}
where
      dd07t.domname  = 'CMS_IND_CAG_LCHG_ENFC_TYP'
  and dd07t.as4local = 'A'
```
