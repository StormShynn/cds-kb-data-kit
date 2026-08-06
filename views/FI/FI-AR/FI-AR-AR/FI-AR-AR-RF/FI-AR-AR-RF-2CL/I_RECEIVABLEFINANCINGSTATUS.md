---
name: I_RECEIVABLEFINANCINGSTATUS
description: Receivablefinancingstatus
app_component: FI-AR-AR-RF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - status
  - component:FI-AR-AR-RF-2CL
  - lob:Finance
---
# I_RECEIVABLEFINANCINGSTATUS

**Receivablefinancingstatus**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-RF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReceivableFinancingStatus` | `cast( left(dd07l.domvalue_l, 1) as frp_rcvbl_financing_status preserving type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RblFinancingStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Receivable Financing Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ReceivableFinancingStatus'
@ObjectModel: { usageType: { dataClass: #META,
                             serviceQuality: #A,
                             sizeCategory: #S },
                supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                modelingPattern:  #ANALYTICAL_DIMENSION }                                                                    
@ObjectModel.resultSet.sizeCategory: #XS
@VDM.viewType: #BASIC
define view entity I_ReceivableFinancingStatus 

  as select from dd07l

  association [0..*] to I_RblFinancingStatusText as _Text on $projection.ReceivableFinancingStatus = _Text.ReceivableFinancingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( left(dd07l.domvalue_l, 1) as frp_rcvbl_financing_status preserving type) as ReceivableFinancingStatus,

      _Text

}

where
      dd07l.domname  = 'FARP_RBL_FINCG_STATUS'
  and dd07l.as4local = 'A'
```
