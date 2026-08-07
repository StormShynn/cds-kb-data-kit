---
name: I_CABILLGTYPETEXT
description: "Cabillgtypetext"
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
# I_CABILLGTYPETEXT

**Cabillgtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgType` | ✓ | | `_tfk8112t` | `bill_type` |  |  |
| `Language` | ✓ | | `_tfk8112t` | `langu` |  |  |
| `CABillgTypeText` |  | | `_tfk8112t` | `text` |  |  |
| `_CABillgType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgType` | `I_CABillgType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Abrechnungsarten (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgType',
  sapObjectNodeType.name: 'ContrAcctgBillingTypeText',
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

define view entity I_CABillgTypeText
  as select from tfk8112t as _tfk8112t
  association [0..1] to I_CABillgType as _CABillgType on $projection.CABillgType = _CABillgType.CABillgType
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgType'
  key _tfk8112t.bill_type as CABillgType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8112t.langu     as Language,
      @Semantics.text: true
      _tfk8112t.text      as CABillgTypeText,

      _CABillgType,
      _Language
}
```
