---
name: I_CACOLLECTIONAGENCY
description: "Cacollectionagency"
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
  - collection
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACOLLECTIONAGENCY

**Cacollectionagency**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACollectionAgency` | ✓ | |  | `inkgp` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `CAPostChrgAndIntrstAsOpenItems` |  | |  | `xcollnoclearing` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAHeader` | `I_ContractAccountHeader` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Collection Agency'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE, 
                representativeKey: 'CACollectionAgency',
                sapObjectNodeType.name: 'ContrAcctgCollectionAgency',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACollectionAgency
  as select from tfk050b

  association [1..1] to I_BusinessPartner       as _BusinessPartner on $projection.CACollectionAgency = _BusinessPartner.BusinessPartner
  association [1..1] to I_ContractAccountHeader as _CAHeader        on $projection.ContractAccount = _CAHeader.ContractAccount

{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key inkgp           as CACollectionAgency,

      @ObjectModel.foreignKey.association: '_CAHeader'
      vkont           as ContractAccount,
      xcollnoclearing as CAPostChrgAndIntrstAsOpenItems,

      _BusinessPartner,
      _CAHeader
}
```
