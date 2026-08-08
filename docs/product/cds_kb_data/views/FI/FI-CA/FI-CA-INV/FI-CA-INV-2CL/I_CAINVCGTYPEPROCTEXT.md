---
name: I_CAINVCGTYPEPROCTEXT
description: "Cainvcgtypeproctext"
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
# I_CAINVCGTYPEPROCTEXT

**Cainvcgtypeproctext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgType` | ✓ | | `_tfk2603t` | `inv_type` |  |  |
| `CAInvcgProcess` | ✓ | | `_tfk2603t` | `inv_process` |  |  |
| `CAApplicationArea` | ✓ | | `_tfk2603t` | `applk` |  |  |
| `Language` | ✓ | | `_tfk2603t` | `langu` |  |  |
| `CAInvcgTypeProcText` |  | |  | `cast( _tfk2603t.text as inv_type_proc_txt_gfn_kk preserving type )` |  |  |
| `CAInvcgDocumentTitleText` |  | | `_tfk2603t` | `inv_doc_title` |  |  |
| `_Language` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgProcess` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgProcess` | `I_CAInvcgProcess` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fakt.art - prozessspezifisch (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgType',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
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

define view entity I_CAInvcgTypeProcText
  as select from tfk2603t as _tfk2603t
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAInvcgProcess    as _CAInvcgProcess    on  $projection.CAInvcgProcess    = _CAInvcgProcess.CAInvcgProcess
                                                                  and $projection.CAApplicationArea = _CAInvcgProcess.CAApplicationArea
{
  key _tfk2603t.inv_type                                                 as CAInvcgType,

      @ObjectModel.foreignKey.association: '_CAInvcgProcess'
  key _tfk2603t.inv_process                                              as CAInvcgProcess,

      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2603t.applk                                                    as CAApplicationArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2603t.langu                                                    as Language,
      @Semantics.text: true
      cast( _tfk2603t.text as inv_type_proc_txt_gfn_kk preserving type ) as CAInvcgTypeProcText,

      @Semantics.text: true
      _tfk2603t.inv_doc_title                                            as CAInvcgDocumentTitleText,

      _Language,
      _CAApplicationArea,
      _CAInvcgProcess
}
```
