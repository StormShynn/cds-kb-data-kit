---
name: I_CABILLGPLNTYPETEXT
description: "Cabillgplntypetext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CABILLGPLNTYPETEXT

**Cabillgplntypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnType` | ✓ | | `_tfk8211t` | `biptype` |  |  |
| `Language` | ✓ | | `_tfk8211t` | `langu` |  |  |
| `CABillgPlnTypeText` |  | |  | `cast( _tfk8211t.text as biptype_txt_gfn_kk preserving type )` |  |  |
| `_CABillgPlnType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnType` | `I_CABillgPlnType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Art des Abrechnungsplans (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnType',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanTypeText',
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

define view entity I_CABillgPlnTypeText
  as select from tfk8211t as _tfk8211t
  association [0..1] to I_CABillgPlnType as _CABillgPlnType on $projection.CABillgPlnType = _CABillgPlnType.CABillgPlnType
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnType'
  key _tfk8211t.biptype                                            as CABillgPlnType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8211t.langu                                              as Language,
      @Semantics.text: true
      cast( _tfk8211t.text as biptype_txt_gfn_kk preserving type ) as CABillgPlnTypeText,

      _CABillgPlnType,
      _Language
}
```
