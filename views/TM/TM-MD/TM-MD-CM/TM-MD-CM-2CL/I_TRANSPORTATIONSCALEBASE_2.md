---
name: I_TRANSPORTATIONSCALEBASE_2
description: "Transportationscalebase 2"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transport
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPORTATIONSCALEBASE_2

**Transportationscalebase 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationScaleBase` | ✓ | |  | `scalebase` |  |  |
| `TransportationFieldAssignment` |  | |  | `cast(ass_field as /scmtms/vdm_sc_base_fld_assgmt preserving type)` |  |  |
| `TranspScaleBaseHasUoM` |  | |  | `cast(unit_check as /scmtms/vdm_sc_base_uom_rlvt preserving type)` |  |  |
| `TranspScaleBaseDimension` |  | |  | `cast(dimid as /scmtms/vdm_sc_base_dimension preserving type)` |  |  |
| `TranspScaleBaseIsNumeric` |  | |  | `cast(all_numc_flag as /scmtms/vdm_sc_base_is_numeric preserving type)` |  |  |
| `TranspScaleBaseIsAmount` |  | |  | `cast(is_cur as /scmtms/vdm_sc_base_is_amount preserving type)` |  |  |
| `TranspScaleBaseIsRawValue` |  | |  | `cast(is_raw as /scmtms/vdm_sc_base_is_raw_val preserving type)` |  |  |
| `TranspScaleBaseIsDate` |  | |  | `cast(is_date as /scmtms/vdm_sc_base_is_date preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Consumption.ranked: true
@EndUserText:{label: 'Transportation Scale Base'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TransportationScaleBase',
                 representativeKey:  'TransportationScaleBase',
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING}}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TransportationScaleBase_2
  as select from /scmtms/c_scbase
  composition [0..*] of I_TranspScaleBaseText_2 as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key scalebase                                                             as TransportationScaleBase,
      cast(ass_field as /scmtms/vdm_sc_base_fld_assgmt preserving type)     as TransportationFieldAssignment,
      @Semantics.booleanIndicator: true
      cast(unit_check as /scmtms/vdm_sc_base_uom_rlvt preserving type)      as TranspScaleBaseHasUoM,
      cast(dimid as /scmtms/vdm_sc_base_dimension preserving type)          as TranspScaleBaseDimension,
      cast(all_numc_flag as /scmtms/vdm_sc_base_is_numeric preserving type) as TranspScaleBaseIsNumeric,
      cast(is_cur as /scmtms/vdm_sc_base_is_amount preserving type)         as TranspScaleBaseIsAmount,
      cast(is_raw as /scmtms/vdm_sc_base_is_raw_val preserving type)        as TranspScaleBaseIsRawValue,
      cast(is_date as /scmtms/vdm_sc_base_is_date preserving type)          as TranspScaleBaseIsDate,

      /* Associations */
      _Text
}
```
