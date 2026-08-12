---
name: I_CAINVCGTYPETEXT
description: "Cainvcgtypetext"
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
# I_CAINVCGTYPETEXT

**Cainvcgtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgType` | ✓ | | `_tfk2603at` | `inv_type` |  |  |
| `CAApplicationArea` | ✓ | | `_tfk2603at` | `applk` |  |  |
| `Language` | ✓ | | `_tfk2603at` | `langu` |  |  |
| `CAInvcgTypeText` |  | | `_tfk2603at` | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgType` | `I_CAInvcgType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungsart (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgType',
  sapObjectNodeType.name: 'ContrAcctgInvoicingTypeText',
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

define view entity I_CAInvcgTypeText
  as select from tfk2603at as _tfk2603at
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAInvcgType       as _CAInvcgType       on  $projection.CAInvcgType       = _CAInvcgType.CAInvcgType
                                                                  and $projection.CAApplicationArea = _CAInvcgType.CAApplicationArea
{
      @ObjectModel.foreignKey.association: '_CAInvcgType'
  key _tfk2603at.inv_type as CAInvcgType,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2603at.applk    as CAApplicationArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2603at.langu    as Language,
      @Semantics.text: true
      _tfk2603at.text     as CAInvcgTypeText,

      _CAApplicationArea,
      _CAInvcgType,
      _Language
}
```
