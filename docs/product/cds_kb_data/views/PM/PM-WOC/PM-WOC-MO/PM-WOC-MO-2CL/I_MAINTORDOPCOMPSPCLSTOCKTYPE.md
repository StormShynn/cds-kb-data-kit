---
name: I_MAINTORDOPCOMPSPCLSTOCKTYPE
description: "Maintordopcompspclstocktype"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDOPCOMPSPCLSTOCKTYPE

**Maintordopcompspclstocktype**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdOpCompSpecialStockType` | ✓ | |  | `cast ( domvalue_l as co_sobkz_d )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintOrdOpCompSpclStkTypeTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maint Ord Component Special Stock Type'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'MaintOrdOpCompSpecialStockType'
@Analytics.technicalName: 'IMAINTSPCLSTKTYP'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_MaintOrdOpCompSpclStockType as select from dd07l

association [0..*] to I_MaintOrdOpCompSpclStkTypeTxt as _Text on $projection.MaintOrdOpCompSpecialStockType = _Text.MaintOrdOpCompSpecialStockType

{
  key cast ( domvalue_l as co_sobkz_d ) as MaintOrdOpCompSpecialStockType,
  _Text
}
where dd07l.domname = 'CO_SOBKZ_D' and dd07l.as4local = 'A'
and ( dd07l.domvalue_l = '' or dd07l.domvalue_l = '2' )
```
