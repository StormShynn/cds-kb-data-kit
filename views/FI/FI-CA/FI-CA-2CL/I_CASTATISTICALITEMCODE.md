---
name: I_CASTATISTICALITEMCODE
description: Castatisticalitemcode
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASTATISTICALITEMCODE

**Castatisticalitemcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAStatisticalItemCode` | ✓ | |  | `cast( left( domvalue_l,1 ) as stakz_kk preserving type )` |  |  |
| `_CAStatisticalItemCodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAStatisticalItemCodeText` | `I_CAStatisticalItemCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Statistical Item Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAStatisticalItemCode',
                sapObjectNodeType.name: 'ContrAcctgStatisticalItemCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAStatisticalItemCode
  as select from dd07l

  association [1..*] to I_CAStatisticalItemCodeText as _CAStatisticalItemCodeText on $projection.CAStatisticalItemCode = _CAStatisticalItemCodeText.CAStatisticalItemCode
{
      @ObjectModel.text.association: '_CAStatisticalItemCodeText'
  key cast( left( domvalue_l,1 ) as stakz_kk preserving type ) as CAStatisticalItemCode,

      _CAStatisticalItemCodeText
}
where
      domname  = 'STAKZ_KK'
  and as4local = 'A'
```
