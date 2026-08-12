---
name: I_CAINTCOSUBTYPE
description: "Caintcosubtype"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINTCOSUBTYPE

**Caintcosubtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAIntcoType` | ✓ | |  | `cast(_tfk8250s.ico_type as ico_type_gfn_kk preserving type)` |  |  |
| `CAIntcoSubtype` | ✓ | |  | `cast(_tfk8250s.ico_subtype as ico_subtype_gfn_kk preserving type)` |  |  |
| `_CAIntcoType` | | ✓ | | | | |
| `_CAIntcoSubtypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoSubtypeText` | `I_CAIntcoSubtypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Unterart der konzerninternen Verrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAIntcoSubtype',
  sapObjectNodeType.name: 'ContrAcctgIntcoSettlmtSubtype',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CAIntcoSubtype
  as select from tfk8250s as _tfk8250s
  association [0..1] to I_CAIntcoType        as _CAIntcoType        on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..*] to I_CAIntcoSubtypeText as _CAIntcoSubtypeText on  $projection.CAIntcoType    = _CAIntcoSubtypeText.CAIntcoType
                                                                    and $projection.CAIntcoSubtype = _CAIntcoSubtypeText.CAIntcoSubtype
{
      @ObjectModel.foreignKey.association: '_CAIntcoType'
  key cast(_tfk8250s.ico_type as ico_type_gfn_kk preserving type)       as CAIntcoType,

      @ObjectModel.text.association: '_CAIntcoSubtypeText'
  key cast(_tfk8250s.ico_subtype as ico_subtype_gfn_kk preserving type) as CAIntcoSubtype,

      _CAIntcoType,
      _CAIntcoSubtypeText
}
```
