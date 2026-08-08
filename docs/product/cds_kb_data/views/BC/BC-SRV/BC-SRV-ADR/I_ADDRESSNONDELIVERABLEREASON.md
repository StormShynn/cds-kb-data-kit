---
name: I_ADDRESSNONDELIVERABLEREASON
description: "Addressnondeliverablereason"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSNONDELIVERABLEREASON

**Addressnondeliverablereason**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressNonDeliverableReason` | ✓ | |  | `undeliver` | `CHAR(4)` | Not Deliverable Flag |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressNonDeliverableReasonT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.representativeKey: 'AddressNonDeliverableReason'
@Analytics.technicalName: 'IBPADNONDLRSN'
@ObjectModel.sapObjectNodeType.name: 'AddressNonDeliverableReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'View for undeliverable address reasons'
define view entity I_AddressNonDeliverableReason
  as select from tsad12
  association [0..*] to I_AddressNonDeliverableReasonT as _Text on $projection.AddressNonDeliverableReason = _Text.AddressNonDeliverableReason
{
      @ObjectModel.text.association: '_Text'
  key undeliver as AddressNonDeliverableReason,
      _Text
}
```
