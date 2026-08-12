---
name: I_CABUSPRTNADDLLOCKEXSTCCODE
description: "Cabusprtnaddllockexstccode"
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
# I_CABUSPRTNADDLLOCKEXSTCCODE

**Cabusprtnaddllockexstccode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusPartnerAddlLockExstcCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as bpl_xaddl_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusPrtnAddlLockExstcCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'BP Additional Lock Existence Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusPartnerAddlLockExstcCode',
                sapObjectNodeType.name: 'ContrAcctgBPAddlLockExstcCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
                             
@VDM.viewType: #BASIC

define view entity I_CABusPrtnAddlLockExstcCode
  as select from dd07l

  association [1..*] to I_CABusPrtnAddlLockExstcCodeT as _Text on $projection.CABusPartnerAddlLockExstcCode = _Text.CABusPartnerAddlLockExstcCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as bpl_xaddl_kk preserving type ) as CABusPartnerAddlLockExstcCode,

      _Text
}
where
      domname  = 'BPL_XADDL_KK'
  and as4local = 'A'
```
