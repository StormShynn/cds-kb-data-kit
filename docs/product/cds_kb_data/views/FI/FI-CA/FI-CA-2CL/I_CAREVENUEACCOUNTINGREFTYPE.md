---
name: I_CAREVENUEACCOUNTINGREFTYPE
description: "Carevenueaccountingreftype"
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
# I_CAREVENUEACCOUNTINGREFTYPE

**Carevenueaccountingreftype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CARevenueAccountingRefType` | ✓ | |  | `reference_type` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CARevenueAccountingRefTypeT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Revenue Accounting Reference Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARevenueAccountingRefType',
                sapObjectNodeType.name: 'ContrAcctgRevnAcctgRefType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARevenueAccountingRefType
  as select from tfk_ra_reftype

  association [0..*] to I_CARevenueAccountingRefTypeT as _Text on $projection.CARevenueAccountingRefType = _Text.CARevenueAccountingRefType

{
      @ObjectModel.text.association: '_Text'
  key reference_type as CARevenueAccountingRefType,

      _Text
}
```
