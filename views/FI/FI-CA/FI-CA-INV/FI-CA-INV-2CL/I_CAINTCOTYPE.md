---
name: I_CAINTCOTYPE
description: Caintcotype
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINTCOTYPE

**Caintcotype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAIntcoType` | ✓ | |  | `cast(_tfk8250.ico_type as ico_type_gfn_kk preserving type)` |  |  |
| `_CAIntcoTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIntcoTypeText` | `I_CAIntcoTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art der konzerninternen Verrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAIntcoType',
  sapObjectNodeType.name: 'ContrAcctgIntcoSettlementType',
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
define view entity I_CAIntcoType
  as select from tfk8250 as _tfk8250
  association [0..*] to I_CAIntcoTypeText as _CAIntcoTypeText on $projection.CAIntcoType = _CAIntcoTypeText.CAIntcoType
{
      @ObjectModel.text.association: '_CAIntcoTypeText'
  key cast(_tfk8250.ico_type as ico_type_gfn_kk preserving type) as CAIntcoType,
      _CAIntcoTypeText
}
```
