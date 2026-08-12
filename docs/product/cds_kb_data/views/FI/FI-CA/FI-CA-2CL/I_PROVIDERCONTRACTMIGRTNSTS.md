---
name: I_PROVIDERCONTRACTMIGRTNSTS
description: "Providercontractmigrtnsts"
app_component: FI-CA-2CL
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
  - interface-view
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTMIGRTNSTS

**Providercontractmigrtnsts**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAProviderContractMigrtnStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as migst_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractMigrtnStsT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Migration Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractMigrtnStatus',
                sapObjectNodeType.name: 'PrvdrContractMigrationStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractMigrtnSts
  as select from dd07l

  association [1..*] to I_ProviderContractMigrtnStsT as _Text on $projection.CAProviderContractMigrtnStatus = _Text.CAProviderContractMigrtnStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as migst_kk preserving type ) as CAProviderContractMigrtnStatus,

      _Text
}
where
      domname  = 'MIGST_KK'
  and as4local = 'A'
```
