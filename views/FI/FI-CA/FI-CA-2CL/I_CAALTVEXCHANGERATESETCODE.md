---
name: I_CAALTVEXCHANGERATESETCODE
description: CAALTVExchange RateSETCODE
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
  - exchange-rate
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAALTVEXCHANGERATESETCODE

**CAALTVExchange RateSETCODE**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAAltvExchangeRateSetCode` | ✓ | |  | `cast ( left( dd07l.domvalue_l, 1 ) as xdexr_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAltvExchangeRateSetCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Alternative Exchange Rate Set Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAltvExchangeRateSetCode',
                sapObjectNodeType.name: 'ContrAcctgAltvExchRateSetCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAltvExchangeRateSetCode 
 as select from dd07l

  association [1..*] to I_CAAltvExchangeRateSetCodeT as _Text on $projection.CAAltvExchangeRateSetCode = _Text.CAAltvExchangeRateSetCode

{
      @ObjectModel.text.association: '_Text'
  key cast ( left( dd07l.domvalue_l, 1 ) as xdexr_kk preserving type ) as CAAltvExchangeRateSetCode,

      _Text
}
where
      domname  = 'XDEXR_KK'
  and as4local = 'A'
```
