---
name: I_CAPAYTSPECIFICATIONCAT
description: Capaytspecificationcat
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
# I_CAPAYTSPECIFICATIONCAT

**Capaytspecificationcat**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAPaymentSpecificationCategory` | `cast( left( domvalue_l, 1 ) as pdtyp_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPaytSpecificationCatText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Specification Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPaymentSpecificationCategory',
                sapObjectNodeType.name: 'ContrAcctgPaytSpecCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPaytSpecificationCat
  as select from dd07l

  association [1..*] to I_CAPaytSpecificationCatText as _Text on $projection.CAPaymentSpecificationCategory = _Text.CAPaymentSpecificationCategory

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as pdtyp_kk preserving type ) as CAPaymentSpecificationCategory,

      _Text
}
where
      domname  = 'PDTYP_KK'
  and as4local = 'A'
```
