---
name: I_CARETURNREASON
description: Careturnreason
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
# I_CARETURNREASON

**Careturnreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAReturnReason` | `rlgrd` |
| key `HouseBank` | `hbkid` |
| `CAReturnType` | `rltyp` |
| `CAReturnHistoryDays` | `histt` |
| `CACreditWorthinessRatingValue` | `bonig` |
| `CAClarificationAccount` | `klaeh` |
| `CAChequeVoidingReason` | `voidr` |
| `_HouseBank` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HouseBank` | `I_Housebank` | [1..*] |
| `_Text` | `I_CAReturnReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Return Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAReturnReason',
                sapObjectNodeType.name: 'ContrAcctgReturnReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAReturnReason
  as select from tfk045a

  association [1..*] to I_Housebank          as _HouseBank on  $projection.HouseBank  = _HouseBank.HouseBank
                                                           and _HouseBank.CompanyCode is not initial
  association [0..*] to I_CAReturnReasonText as _Text      on  $projection.CAReturnReason = _Text.CAReturnReason
                                                           and $projection.HouseBank      = _Text.HouseBank

{
      @ObjectModel.text.association: '_Text'
  key rlgrd as CAReturnReason,
      @ObjectModel.foreignKey.association : '_HouseBank'
  key hbkid as HouseBank,

      rltyp as CAReturnType,
      histt as CAReturnHistoryDays,
      bonig as CACreditWorthinessRatingValue,
      klaeh as CAClarificationAccount,
      voidr as CAChequeVoidingReason,

      _HouseBank,
      _Text
}
```
