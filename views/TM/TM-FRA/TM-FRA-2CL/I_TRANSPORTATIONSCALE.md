---
name: I_TRANSPORTATIONSCALE
description: Transportationscale
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transport
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPORTATIONSCALE

**Transportationscale**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationScaleUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_rate_scale_uuid preserving type)` |
| `TranspRateScaleRefUUID` |  | |  | `cast(rate_scale_ref_key as /scmtms/transpratescalref_uuid preserving type)` |
| `TransportationRateUUID` |  | | `_TranspRateScaleReference` | `TransportationRateUUID` |
| `TransportationScale` |  | |  | `cast(scaid as /scmtms/vdm_rate_scale preserving type)` |
| `TransportationScaleType` |  | |  | `cast(scatyp as /scmtms/vdm_rt_scale_type preserving type)` |
| `TransportationScaleBase` |  | |  | `cast(scalebase as /scmtms/vdm_rt_scale_base preserving type)` |
| `TranspScaleQuantityUnit` |  | |  | `cast(scale_uom as /scmtms/vdm_rt_sc_qty_unit preserving type)` |
| `TransportationScaleCurrency` |  | |  | `scale_curr` |
| `CreatedByUser` |  | |  | `cast(created_by as vdm_createdbyuserid preserving type)` |
| `CreationDateTime` |  | |  | `cast(created_on as log_created_on preserving type)` |
| `LastChangedByUser` |  | |  | `cast(changed_by as vdm_lastchangedbyuserid preserving type)` |
| `ChangedDateTime` |  | |  | `cast(changed_on as /scmtms/vdm_tm_tstmp_cht preserving type)` |
| `_CreatedBy` | | ✓ | | |
| `_ChangedBy` | | ✓ | | |
| `_TranspScaleQuantityUnit` | | ✓ | | |
| `_TranspScaleCurrency` | | ✓ | | |
| `_TransportationScaleType` | | ✓ | | |
| `_TransportationScaleBase` | | ✓ | | |
| `_TransportationRate` | | ✓ | | |
| `_TranspScaleItem` | | ✓ | | |
| `_TranspRateScaleReference` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedBy` | `I_User` | [1..1] |
| `_ChangedBy` | `I_User` | [1..1] |
| `_TranspScaleQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspScaleCurrency` | `I_Currency` | [0..1] |
| `_TransportationScaleType` | `I_TransportationScaleType_2` | [1..1] |
| `_TransportationScaleBase` | `I_TransportationScaleBase_2` | [1..1] |
| `_TransportationRate` | `I_TransportationRate` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_CreatedBy',
                                          '_ChangedBy'] }
@Analytics.technicalName: 'ITSCALE'
@EndUserText: {label: 'Transportation Scale'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableScale',
               representativeKey: 'TransportationScaleUUID',
//               compositionRoot:    true,
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TransportationScale
  as select from /scmtms/d_scah1
  /* Business Object related Node Associations*/
  composition [0..*] of I_TransportationScaleItem   as _TranspScaleItem
  
  association to parent I_TranspRateScaleReference  as _TranspRateScaleReference on $projection.TranspRateScaleRefUUID = _TranspRateScaleReference.TranspRateScaleRefUUID
  /* Foreign Key and Text Associations */
  association [1..1] to I_User                      as _CreatedBy                on $projection.CreatedByUser = _CreatedBy.UserID
  association [1..1] to I_User                      as _ChangedBy                on $projection.LastChangedByUser = _ChangedBy.UserID
  association [0..1] to I_UnitOfMeasure             as _TranspScaleQuantityUnit  on $projection.TranspScaleQuantityUnit = _TranspScaleQuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency                  as _TranspScaleCurrency      on $projection.TransportationScaleCurrency = _TranspScaleCurrency.Currency
  association [1..1] to I_TransportationScaleType_2 as _TransportationScaleType  on $projection.TransportationScaleType = _TransportationScaleType.TransportationScaleType
  association [1..1] to I_TransportationScaleBase_2 as _TransportationScaleBase  on $projection.TransportationScaleBase = _TransportationScaleBase.TransportationScaleBase
  association [1..1] to I_TransportationRate as _TransportationRate            on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
{
  key cast(db_key as /scmtms/vdm_rate_scale_uuid preserving type)   as TransportationScaleUUID,
      cast(rate_scale_ref_key as /scmtms/transpratescalref_uuid preserving type) as TranspRateScaleRefUUID,
      _TranspRateScaleReference.TransportationRateUUID              as TransportationRateUUID,
      cast(scaid as /scmtms/vdm_rate_scale preserving type)         as TransportationScale,
      @ObjectModel.foreignKey.association: '_TransportationScaleType'
      cast(scatyp as /scmtms/vdm_rt_scale_type preserving type)     as TransportationScaleType,
      @ObjectModel.foreignKey.association: '_TransportationScaleBase'
      cast(scalebase as /scmtms/vdm_rt_scale_base preserving type)  as TransportationScaleBase,
      @ObjectModel.foreignKey.association: '_TranspScaleQuantityUnit'
      cast(scale_uom as /scmtms/vdm_rt_sc_qty_unit preserving type) as TranspScaleQuantityUnit,
      @ObjectModel.foreignKey.association: '_TranspScaleCurrency'
      scale_curr                                                    as TransportationScaleCurrency,
      @Semantics.user.createdBy: true
      cast(created_by as vdm_createdbyuserid preserving type)       as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      cast(created_on as log_created_on preserving type)            as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      cast(changed_by as vdm_lastchangedbyuserid preserving type)   as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(changed_on as /scmtms/vdm_tm_tstmp_cht preserving type)  as ChangedDateTime,

      /*Associations*/
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspScaleItem,
      _CreatedBy,
      _ChangedBy,
      _TranspScaleCurrency,
      _TranspScaleQuantityUnit,
      _TransportationScaleType,
      _TransportationScaleBase,
      
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TranspRateScaleReference,
      
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationRate
}
```
