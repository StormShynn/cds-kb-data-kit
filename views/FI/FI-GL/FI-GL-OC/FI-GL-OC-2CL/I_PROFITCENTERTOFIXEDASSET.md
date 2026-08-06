---
name: I_PROFITCENTERTOFIXEDASSET
description: Profit CenterTOFixed Asset
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - profit-center
  - fixed-asset
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:ProfitCenter
  - bo:Asset
---
# I_PROFITCENTERTOFIXEDASSET

**Profit CenterTOFixed Asset**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `MasterFixedAsset` | `anln1` |
| key `FixedAsset` | `anln2` |
| key `ValidityStartDate` | `valid_from` |
| `ValidityEndDate` | `valid_to` |
| `ControllingArea` | `kokrs` |
| `ProfitCenterBeforeOrglChange` | `prctr_old` |
| `ProfitCenter` | `prctr` |
| `OrganizationalChange` | `orgl_change` |
| `OrglChangeReassignmentStatus` | `reassgmt_status` |
| `ProfitCenterDerivationSrceType` | `prctr_drvtn_source_type` |
| `SourceCostCenter` | `srce_kostl` |
| `SourceWBSElementInternalID` | `cast( srce_ps_psp_pnr as ps_s4_pspnr preserving type)` |
| `SourceProjectInternalID` | `cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type)` |
| `SourceOrder` | `srce_aufnr` |
| `OrglChangeEffectiveDate` | `_OrglChange.OrglChangeEffectiveDate` |
| `_OrglChange` | *Association* |
| `_OrglChgReassignmentStatus` | *Association* |
| `_ProfitCtrDerivationSrceType` | *Association* |
| `_MasterFixedAsset` | *Association* |
| `_FixedAsset` | *Association* |
| `_FixedAssetAssignment` | *Association* |
| `_CompanyCode` | *Association* |
| `_ControllingArea` | *Association* |
| `_ProfitCtr` | *Association* |
| `_ProfitCenterBeforeOrglChange` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrglChange` | `I_OrganizationalChange` | [0..1] |
| `_OrglChgReassignmentStatus` | `I_OrglChangeReassignmentStatus` | [1] |
| `_ProfitCtrDerivationSrceType` | `I_ProfitCtrDerivationSrceType` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_FixedAssetAssignment` | `I_FixedAssetAssgmt` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_ProfitCtr` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenterBeforeOrglChange` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCRTFA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Assgmt of PrftCtr to Fixed Asset'
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'FixedAsset'
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@Analytics.internalName:#LOCAL

@ObjectModel:{
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern:  #ANALYTICAL_DIMENSION 
}
@Metadata.allowExtensions:true
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_ProfitCenterToFixedAsset
  as select from finoc_rt_fa
  association [0..1] to I_OrganizationalChange         as _OrglChange                   on  $projection.OrganizationalChange = _OrglChange.OrganizationalChange
  association [1]    to I_OrglChangeReassignmentStatus as _OrglChgReassignmentStatus    on  $projection.OrglChangeReassignmentStatus = _OrglChgReassignmentStatus.OrglChangeReassignmentStatus
  association [0..1] to I_ProfitCtrDerivationSrceType  as _ProfitCtrDerivationSrceType  on  $projection.ProfitCenterDerivationSrceType = _ProfitCtrDerivationSrceType.ProfitCenterDerivationSrceType
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset             on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAsset                   as _FixedAsset                   on  $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _FixedAsset.FixedAsset
                                                                                        and $projection.CompanyCode      = _FixedAsset.CompanyCode
  association [0..1] to I_FixedAssetAssgmt             as _FixedAssetAssignment         on  $projection.MasterFixedAsset        =  _FixedAssetAssignment.MasterFixedAsset
                                                                                        and $projection.FixedAsset              =  _FixedAssetAssignment.FixedAsset
                                                                                        and $projection.CompanyCode             =  _FixedAssetAssignment.CompanyCode
                                                                                        and $projection.OrglChangeEffectiveDate >= _FixedAssetAssignment.ValidityStartDate
                                                                                        and $projection.OrglChangeEffectiveDate <= _FixedAssetAssignment.ValidityEndDate
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_ProfitCenter                 as _ProfitCtr                    on  $projection.ControllingArea   =  _ProfitCtr.ControllingArea
                                                                                        and $projection.ProfitCenter      =  _ProfitCtr.ProfitCenter
                                                                                        and $projection.ValidityStartDate >= _ProfitCtr.ValidityStartDate
                                                                                        and $projection.ValidityStartDate <= _ProfitCtr.ValidityEndDate
  association [0..1] to I_ProfitCenter                 as _ProfitCenterBeforeOrglChange on  $projection.ControllingArea              =  _ProfitCenterBeforeOrglChange.ControllingArea
                                                                                        and $projection.ProfitCenterBeforeOrglChange =  _ProfitCenterBeforeOrglChange.ProfitCenter
                                                                                        and $projection.ValidityStartDate            >= _ProfitCenterBeforeOrglChange.ValidityStartDate
                                                                                        and $projection.ValidityStartDate            <= _ProfitCenterBeforeOrglChange.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                                      as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key anln1                                                      as MasterFixedAsset,
  key anln2                                                      as FixedAsset,
      @Semantics.businessDate.from:true
  key valid_from                                                 as ValidityStartDate,
      @Semantics.businessDate.to:true
      valid_to                                                   as ValidityEndDate,
      kokrs                                                      as ControllingArea,
      prctr_old                                                  as ProfitCenterBeforeOrglChange,
      prctr                                                      as ProfitCenter,
      orgl_change                                                as OrganizationalChange,
      reassgmt_status                                            as OrglChangeReassignmentStatus,
      prctr_drvtn_source_type                                    as ProfitCenterDerivationSrceType,
      srce_kostl                                                 as SourceCostCenter,
      cast( srce_ps_psp_pnr as ps_s4_pspnr preserving type)      as SourceWBSElementInternalID,
      cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type) as SourceProjectInternalID,
      srce_aufnr                                                 as SourceOrder,
      _OrglChange.OrglChangeEffectiveDate                        as OrglChangeEffectiveDate,
      _OrglChgReassignmentStatus,
      _MasterFixedAsset,
      _FixedAsset,
      _FixedAssetAssignment,
      _ProfitCtrDerivationSrceType,
      _OrglChange,
      _CompanyCode,
      _ControllingArea,
      _ProfitCtr,
      _ProfitCenterBeforeOrglChange
}
```
