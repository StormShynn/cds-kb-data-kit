---
name: I_CADEPENDENTITEMTYPETEXT
description: Cadependentitemtypetext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CADEPENDENTITEMTYPETEXT

**Cadependentitemtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADependentItemType` | ✓ | |  | `cast( _tfk8240t.dittype as ditrsn_gfn_kk preserving type )` |  |  |
| `Language` | ✓ | | `_tfk8240t` | `langu` |  |  |
| `CADependentItemTypeText` |  | | `_tfk8240t` | `text` |  |  |
| `_CADependentItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Arten abhängiger Positionen (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CADependentItemType',
  sapObjectNodeType.name: 'ContrAcctgDepdntItemTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CADependentItemTypeText
  as select from tfk8240t as _tfk8240t
  association [0..1] to I_CADependentItemType as _CADependentItemType on $projection.CADependentItemType = _CADependentItemType.CADependentItemType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CADependentItemType'
  key cast( _tfk8240t.dittype as ditrsn_gfn_kk preserving type ) as CADependentItemType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8240t.langu   as Language,
      @Semantics.text: true
      _tfk8240t.text    as CADependentItemTypeText,

      _CADependentItemType,
      _Language
}
```
