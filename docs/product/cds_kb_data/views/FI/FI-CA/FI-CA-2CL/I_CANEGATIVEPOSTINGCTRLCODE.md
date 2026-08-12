---
name: I_CANEGATIVEPOSTINGCTRLCODE
description: "Canegativepostingctrlcode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CANEGATIVEPOSTINGCTRLCODE

**Canegativepostingctrlcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CANegativePostingControlCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as negbu_kk )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CANegativePostingCtrlCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Negative Posting Control Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CANegativePostingControlCode',
                sapObjectNodeType.name: 'ContrAcctgNgtvPostingCtrlCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CANegativePostingCtrlCode
  as select from dd07l

  association [1..*] to I_CANegativePostingCtrlCodeT as _Text on $projection.CANegativePostingControlCode = _Text.CANegativePostingControlCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as negbu_kk ) as CANegativePostingControlCode,

      _Text
}
where
      domname  = 'NEGBU_KK'
  and as4local = 'A'
```
