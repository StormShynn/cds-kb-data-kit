---
name: I_CABUSTRANSACTIVITY
description: "Cabustransactivity"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSTRANSACTIVITY

**Cabustransactivity**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusinessTransactionActivity` | ✓ | |  | `cast( left( dd07l.domvalue_l, 4 ) as evl_actid_kk preserving type )` |  |  |
| `_CABusTransActivityText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABusTransActivityText` | `I_CABusTransActivityText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Activity'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessTransactionActivity',
                sapObjectNodeType.name: 'ContrAcctgBusTransActivity',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransActivity
  as select from dd07l

  association [1..*] to I_CABusTransActivityText as _CABusTransActivityText on $projection.CABusinessTransactionActivity = _CABusTransActivityText.CABusinessTransactionActivity

{
      @ObjectModel.text.association: '_CABusTransActivityText'
  key cast( left( dd07l.domvalue_l, 4 ) as evl_actid_kk preserving type ) as CABusinessTransactionActivity,
      
      _CABusTransActivityText
}
where
      domname        = 'EVL_ACTID_KK'
  and dd07l.as4local = 'A'
```
