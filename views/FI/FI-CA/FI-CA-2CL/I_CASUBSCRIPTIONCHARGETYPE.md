---
name: I_CASUBSCRIPTIONCHARGETYPE
description: "Casubscriptionchargetype"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBSCRIPTIONCHARGETYPE

**Casubscriptionchargetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASubscriptionChargeType` | ✓ | |  | `cast( left( dd07l.domvalue_l,2 ) as charge_type_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CASubscriptionChargeTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Subscription Charge Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASubscriptionChargeType',
                sapObjectNodeType.name: 'ContrAcctgSubscrpnChargeType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubscriptionChargeType
  as select from dd07l

  association [1..*] to I_CASubscriptionChargeTypeText as _Text on $projection.CASubscriptionChargeType = _Text.CASubscriptionChargeType

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,2 ) as charge_type_kk preserving type ) as CASubscriptionChargeType,

      _Text
}
where
      domname  = 'CHARGE_TYPE_KK'
  and as4local = 'A'
```
