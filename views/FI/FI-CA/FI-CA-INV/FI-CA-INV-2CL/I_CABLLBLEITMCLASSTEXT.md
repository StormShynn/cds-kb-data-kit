---
name: I_CABLLBLEITMCLASSTEXT
description: "Cabllbleitmclasstext"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMCLASSTEXT

**Cabllbleitmclasstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmClass` | ✓ | | `_tfk8101t` | `bitcat` |  |  |
| `Language` | ✓ | | `_tfk8101t` | `langu` |  |  |
| `CABllbleItmClassText` |  | | `_tfk8101t` | `bitcat_txt` |  |  |
| `_CABllbleItmClass` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmClass` | `I_CABllbleItmClass` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Klassen der abr. Positionen (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABllbleItmClass',
  sapObjectNodeType.name: 'ContrAcctgBllbleItemClassText',
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

define view entity I_CABllbleItmClassText
  as select from tfk8101t as _tfk8101t
  association [0..1] to I_CABllbleItmClass as _CABllbleItmClass on $projection.CABllbleItmClass = _CABllbleItmClass.CABllbleItmClass
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABllbleItmClass'
  key _tfk8101t.bitcat as CABllbleItmClass,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8101t.langu as Language,
      @Semantics.text: true
      _tfk8101t.bitcat_txt as CABllbleItmClassText,
      
      _CABllbleItmClass,
      _Language
}
```
