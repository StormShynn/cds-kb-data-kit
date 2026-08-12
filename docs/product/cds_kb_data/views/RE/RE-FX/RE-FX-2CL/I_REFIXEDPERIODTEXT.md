---
name: I_REFIXEDPERIODTEXT
description: "Refixedperiodtext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REFIXEDPERIODTEXT

**Refixedperiodtext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REFixedPeriod` | ✓ | |  | `fixper` |  |  |
| `REFixedPeriodDesc` |  | |  | `xfixper` |  |  |
| `_FixedPeriod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixedPeriod` | `I_REFixedPeriod` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREFIXPERIODT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Fixed Period - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REFixedPeriod',
  semanticKey: ['REFixedPeriod'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT, 
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateFixedPeriodText'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
define view entity I_REFixedPeriodText
  as select from tivcdfixpert
  association [0..1] to I_REFixedPeriod as _FixedPeriod on $projection.REFixedPeriod = _FixedPeriod.REFixedPeriod
  association [0..1] to I_Language      as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_FixedPeriod'
  key fixper  as REFixedPeriod,
      @Semantics.text: true
      xfixper as REFixedPeriodDesc,

      _FixedPeriod,
      _Language
}
```
