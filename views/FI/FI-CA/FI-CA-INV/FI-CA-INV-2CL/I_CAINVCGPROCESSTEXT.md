---
name: I_CAINVCGPROCESSTEXT
description: Cainvcgprocesstext
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
# I_CAINVCGPROCESSTEXT

**Cainvcgprocesstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgProcess` | `_tfk2602t.inv_process` |
| key `CAApplicationArea` | `_tfk2602t.applk` |
| key `Language` | `_tfk2602t.langu` |
| `CAInvcgProcessText` | `_tfk2602t.text` |
| `_CAInvcgProcess` | *Association* |
| `_CAApplicationArea` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgProcess` | `I_CAInvcgProcess` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungsprozesse (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgProcess',
  sapObjectNodeType.name: 'ContrAcctgInvoicingProcessText',
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

define view entity I_CAInvcgProcessText
  as select from tfk2602t as _tfk2602t
  association [0..1] to I_CAInvcgProcess    as _CAInvcgProcess    on  $projection.CAInvcgProcess    = _CAInvcgProcess.CAInvcgProcess
                                                                  and $projection.CAApplicationArea = _CAInvcgProcess.CAApplicationArea
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgProcess'
  key _tfk2602t.inv_process as CAInvcgProcess,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2602t.applk       as CAApplicationArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2602t.langu       as Language,
      @Semantics.text: true
      _tfk2602t.text        as CAInvcgProcessText,

      _CAApplicationArea,
      _CAInvcgProcess,
      _Language
}
```
