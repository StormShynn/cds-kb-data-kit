---
name: I_CAWITHHOLDINGTAXCAT
description: Cawithholdingtaxcat
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
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAWITHHOLDINGTAXCAT

**Cawithholdingtaxcat**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAWithholdingTaxCategory` | ✓ | |  | `cast( left( domvalue_l, 1 ) as qsptp_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAWithholdingTaxCatText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Withholding Tax Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAWithholdingTaxCategory',
                sapObjectNodeType.name: 'ContrAcctgWithholdingTaxCat',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAWithholdingTaxCat
  as select from dd07l

  association [1..*] to I_CAWithholdingTaxCatText as _Text on $projection.CAWithholdingTaxCategory = _Text.CAWithholdingTaxCategory

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as qsptp_kk preserving type ) as CAWithholdingTaxCategory,

      _Text
}
where
      domname  = 'QSPTP_KK'
  and as4local = 'A'
```
