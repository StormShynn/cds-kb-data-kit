---
name: I_PROVIDERCONTRACTSENDER
description: "Providercontractsender"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTSENDER

**Providercontractsender**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAProviderContractSender` | ✓ | |  | `sender` |  |  |
| `CAProviderContractSenderCat` |  | |  | `sendercat` |  |  |
| `ExternalNumberRangeInterval` |  | |  | `cast(nrext as nrext_vt_kk preserving type )` |  |  |
| `InternalNumberRangeInterval` |  | |  | `cast(nrint as nrint_vt_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_SenderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractSenderText` | [0..*] |
| `_SenderCategory` | `I_ProviderContractSenderCat` | [1] |

## Source Code

```abap
@AbapCatalog.dataMaintenance: #RESTRICTED

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Sender'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractSender',
                sapObjectNodeType.name: 'ProviderContractSender',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractSender
  as select from tfk_vt_sender

  association [0..*] to I_ProviderContractSenderText as _Text           on $projection.CAProviderContractSender = _Text.CAProviderContractSender
  association [1]    to I_ProviderContractSenderCat  as _SenderCategory on $projection.CAProviderContractSenderCat = _SenderCategory.CAProviderContractSenderCat

{
      @ObjectModel.text.association: '_Text'
  key sender                                      as CAProviderContractSender,

      @ObjectModel.foreignKey.association: '_SenderCategory'  
      sendercat                                   as CAProviderContractSenderCat,
      cast(nrext as nrext_vt_kk preserving type ) as ExternalNumberRangeInterval,
      cast(nrint as nrint_vt_kk preserving type ) as InternalNumberRangeInterval,

      /* Associations */
      _SenderCategory,
      _Text
}
```
