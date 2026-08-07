---
name: I_CABILLGSUBPROCESSTEXT
description: "Cabillgsubprocesstext"
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
# I_CABILLGSUBPROCESSTEXT

**Cabillgsubprocesstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgSubprocess` | ✓ | | `_tfk8104t` | `subprocess` |  |  |
| `Language` | ✓ | | `_tfk8104t` | `langu` |  |  |
| `CABillgSubprocessText` |  | |  | `cast( _tfk8104t.text as subprocess_txt_gfn_kk preserving type )` |  |  |
| `_CABillgSubprocess` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgSubprocess` | `I_CABillgSubProcess` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Teilprozess der Abrechnung (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgSubprocess',
  sapObjectNodeType.name: 'ContrAcctgBillgSubprocessText',
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

define view entity I_CABillgSubProcessText
  as select from tfk8104t as _tfk8104t
  association [0..1] to I_CABillgSubProcess as _CABillgSubprocess on $projection.CABillgSubprocess = _CABillgSubprocess.CABillgSubprocess
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgSubprocess'
  key _tfk8104t.subprocess                                            as CABillgSubprocess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8104t.langu                                                 as Language,
      @Semantics.text: true
      cast( _tfk8104t.text as subprocess_txt_gfn_kk preserving type ) as CABillgSubprocessText,
      
      _CABillgSubprocess,
      _Language
}
```
