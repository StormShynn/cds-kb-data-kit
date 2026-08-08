---
name: I_CABILLGPROCESSTEXT
description: "Cabillgprocesstext"
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
# I_CABILLGPROCESSTEXT

**Cabillgprocesstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgProcess` | ✓ | | `_tfk8110t` | `bill_process` |  |  |
| `Language` | ✓ | | `_tfk8110t` | `langu` |  |  |
| `CABillgProcessText` |  | |  | `cast( _tfk8110t.text as bill_process_txt_gfn_kk preserving type )` |  |  |
| `_CABillgProcess` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgProcess` | `I_CABillgProcess` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Abrechnungsprozesse (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgProcess',
  sapObjectNodeType.name: 'ContrAcctgBillingProcessText',
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

define view entity I_CABillgProcessText
  as select from tfk8110t as _tfk8110t
  association [0..1] to I_CABillgProcess as _CABillgProcess on $projection.CABillgProcess = _CABillgProcess.CABillgProcess
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgProcess'
  key _tfk8110t.bill_process                                            as CABillgProcess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8110t.langu                                                   as Language,
      @Semantics.text: true
      cast( _tfk8110t.text as bill_process_txt_gfn_kk preserving type ) as CABillgProcessText,

      _CABillgProcess,
      _Language
}
```
