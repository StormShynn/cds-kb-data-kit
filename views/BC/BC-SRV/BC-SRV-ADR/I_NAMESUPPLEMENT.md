---
name: I_NAMESUPPLEMENT
description: Namesupplement
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_NAMESUPPLEMENT

**Namesupplement**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonNameSupplementCode` | ✓ | |  | `title_key` |  |  |
| `NameSupplement` |  | |  | `title_text` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_NameSupplementText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Name Supplement'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'PersonNameSupplementCode'
@Analytics.technicalName: 'INAMESUPPLEMENT'
@ObjectModel.sapObjectNodeType.name: 'PersonNameSupplementCode'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_NameSupplement
  as select from tsad5
  association [0..*] to I_NameSupplementText as _Text on $projection.PersonNameSupplementCode = _Text.PersonNameSupplementCode
{
      @ObjectModel.text.element: [ 'NameSupplement']
  key title_key  as PersonNameSupplementCode,
      @Semantics.text: true
      @EndUserText.label: 'Name Supplement Text'
      title_text as NameSupplement,
      _Text
}
```
