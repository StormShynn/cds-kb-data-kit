---
name: I_CABILLGDOCORIGINPROCESSTEXT
description: Cabillgdocoriginprocesstext
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
# I_CABILLGDOCORIGINPROCESSTEXT

**Cabillgdocoriginprocesstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgDocOriginProcess` | `_tfk2641t.srcprocess` |
| key `Language` | `_tfk2641t.spras` |
| `CABillgDocOriginProcessText` | `cast( _tfk2641t.srcproctext as srcproctext_gfn_kk preserving type )` |
| `_CABillgDocOriginProcess` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocOriginProcess` | `I_CABillgDocOriginProcess` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'ICA2641T'
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Herkunftsprozess des Abr.belegs (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocOriginProcess',
  sapObjectNodeType.name: 'ContrAcctgBillgDocOrignProcTxt',
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

define view entity I_CABillgDocOriginProcessText
  as select from tfk2641t as _tfk2641t
  association [0..1] to I_CABillgDocOriginProcess as _CABillgDocOriginProcess on $projection.CABillgDocOriginProcess = _CABillgDocOriginProcess.CABillgDocOriginProcess
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgDocOriginProcess'
  key _tfk2641t.srcprocess                                                as CABillgDocOriginProcess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2641t.spras                                                     as Language,
      @Semantics.text: true
      cast( _tfk2641t.srcproctext as srcproctext_gfn_kk preserving type ) as CABillgDocOriginProcessText,

      _CABillgDocOriginProcess,
      _Language
}
```
