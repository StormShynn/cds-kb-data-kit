---
name: I_PROVIDERCONTRACTSTATUS
description: Providercontractstatus
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTSTATUS

**Providercontractstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAProviderContractStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l,1 ) as status_vt_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractStatus',
                sapObjectNodeType.name: 'ProviderContractStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractStatus
  as select from dd07l

  association [1..*] to I_ProviderContractStatusText as _Text on $projection.CAProviderContractStatus = _Text.CAProviderContractStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,1 ) as status_vt_kk preserving type ) as CAProviderContractStatus,

      _Text
}
where
      domname  = 'STATUS_VT_KK'
  and as4local = 'A'
```
