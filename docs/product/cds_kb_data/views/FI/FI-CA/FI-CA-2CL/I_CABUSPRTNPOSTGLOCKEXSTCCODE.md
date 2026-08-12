---
name: I_CABUSPRTNPOSTGLOCKEXSTCCODE
description: "Cabusprtnpostglockexstccode"
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
# I_CABUSPRTNPOSTGLOCKEXSTCCODE

**Cabusprtnpostglockexstccode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusPartnerPostgLockExstcCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as bpl_xpocl_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusPrtnPostgLockExstcCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICABPPOSTLOCKEC'
             
@EndUserText.label: 'BP Posting Lock Existence Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusPartnerPostgLockExstcCode',
                sapObjectNodeType.name: 'ContrAcctgBPPostgLockExstcCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusPrtnPostgLockExstcCode
  as select from dd07l

  association [1..*] to I_CABusPrtnPostgLockExstcCodeT as _Text on $projection.CABusPartnerPostgLockExstcCode = _Text.CABusPartnerPostgLockExstcCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as bpl_xpocl_kk preserving type ) as CABusPartnerPostgLockExstcCode,

      _Text
}
where
      domname  = 'BPL_XPOCL_KK'
  and as4local = 'A'
```
