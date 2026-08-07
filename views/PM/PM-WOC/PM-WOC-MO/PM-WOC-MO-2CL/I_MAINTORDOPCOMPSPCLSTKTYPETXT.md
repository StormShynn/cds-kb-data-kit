---
name: I_MAINTORDOPCOMPSPCLSTKTYPETXT
description: Maintordopcompspclstktypetxt
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
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
# I_MAINTORDOPCOMPSPCLSTKTYPETXT

**Maintordopcompspclstktypetxt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintOrdOpCompSpecialStockType` | ✓ | |  | `cast ( domvalue_l as co_sobkz_d )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `MaintOrdOpCompSpclStkTypeText` |  | |  | `ddtext` |
| `_MaintOrdOpCompSpclStockType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdOpCompSpclStockType` | `I_MaintOrdOpCompSpclStockType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maint Ord Comp Special Stock Type - Txt'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMAINTSPCSTKTYPT'
@ObjectModel.representativeKey: 'MaintOrdOpCompSpecialStockType'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_MaintOrdOpCompSpclStkTypeTxt
  as select from dd07t

  association [0..1] to I_MaintOrdOpCompSpclStockType as _MaintOrdOpCompSpclStockType on $projection.MaintOrdOpCompSpecialStockType = _MaintOrdOpCompSpclStockType.MaintOrdOpCompSpecialStockType
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language

{

  key cast ( domvalue_l as co_sobkz_d ) as MaintOrdOpCompSpecialStockType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                        as Language,
      @Semantics.text: true
      dd07t.ddtext                      as MaintOrdOpCompSpclStkTypeText,
      _MaintOrdOpCompSpclStockType,
      _Language
}
where
      dd07t.domname  = 'CO_SOBKZ_D'
  and dd07t.as4local = 'A'
  and ( dd07t.domvalue_l = '' or dd07t.domvalue_l = '2' )
```
