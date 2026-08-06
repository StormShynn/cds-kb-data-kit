---
name: I_CAPARTNERSETTLEMENTSTATUS
description: Capartnersettlementstatus
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
  - status
  - partner
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPARTNERSETTLEMENTSTATUS

**Capartnersettlementstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAPartnerSettlementStatus` | `cast( left( dd07l.domvalue_l, 1 ) as ptitm_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPartnerSettlementStatusT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Partner Settlement Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPartnerSettlementStatus',
                sapObjectNodeType.name: 'ContrAcctgPrtnSettlementStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPartnerSettlementStatus
  as select from dd07l

  association [1..*] to I_CAPartnerSettlementStatusT as _Text on $projection.CAPartnerSettlementStatus = _Text.CAPartnerSettlementStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as ptitm_kk preserving type ) as CAPartnerSettlementStatus,

      _Text
}
where
      domname  = 'PTITM_KK'
  and as4local = 'A'
```
