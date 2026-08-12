---
name: I_PROVIDERCONTRACTTYPE
description: "Providercontracttype"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTTYPE

**Providercontracttype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAProviderContractType` | ✓ | |  | `cast( left( dd07l.domvalue_l,1 ) as vtchr_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractType',
                sapObjectNodeType.name: 'ProviderContractType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractType
  as select from dd07l

  association [1..*] to I_ProviderContractTypeText as _Text on $projection.CAProviderContractType = _Text.CAProviderContractType

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,1 ) as vtchr_kk preserving type ) as CAProviderContractType,

      _Text
}
where
      domname  = 'VTCHR_KK'
  and as4local = 'A'
```
