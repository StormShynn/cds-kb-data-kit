---
name: I_CAINVCGFUNCTIONTEXT
description: "Cainvcgfunctiontext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CAINVCGFUNCTIONTEXT

**Cainvcgfunctiontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgFunction` | ✓ | | `_tfk2601t` | `inv_function` |  |  |
| `Language` | ✓ | | `_tfk2601t` | `langu` |  |  |
| `CAInvcgFunctionText` |  | | `_tfk2601t` | `text` |  |  |
| `_CAInvcgFunction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgFunction` | `I_CAInvcgFunction` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Funktionen der Fakturierung (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgFunction',
  sapObjectNodeType.name: 'ContrAcctgInvcgFunctionText',
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

define view entity I_CAInvcgFunctionText
  as select from tfk2601t as _tfk2601t
  association [0..1] to I_CAInvcgFunction as _CAInvcgFunction on $projection.CAInvcgFunction = _CAInvcgFunction.CAInvcgFunction
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgFunction'
  key _tfk2601t.inv_function as CAInvcgFunction,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2601t.langu        as Language,
      @Semantics.text: true
      _tfk2601t.text         as CAInvcgFunctionText,

      _CAInvcgFunction,
      _Language
}
```
