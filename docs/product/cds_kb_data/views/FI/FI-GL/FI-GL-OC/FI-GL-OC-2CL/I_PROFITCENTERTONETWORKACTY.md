---
name: I_PROFITCENTERTONETWORKACTY
description: "Profit CenterTONETWORKACTY"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - profit-center
  - network
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:ProfitCenter
---
# I_PROFITCENTERTONETWORKACTY

**Profit CenterTONETWORKACTY**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectNetwork` | ✓ | |  | `cast ( aufnr as ps_s4_aufnr preserving type)` |  |  |
| `NetworkActivity` | ✓ | |  | `cast ( vornr as fis_networkactivity_no_conv preserving type)` |  |  |
| `ValidityStartDate` | ✓ | |  | `valid_from` |  |  |
| `ValidityEndDate` |  | |  | `valid_to` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ProfitCenterBeforeOrglChange` |  | |  | `prctr_old` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `OrganizationalChange` |  | |  | `orgl_change` |  |  |
| `OrglChangeReassignmentStatus` |  | |  | `reassgmt_status` |  |  |
| `ProfitCenterDerivationSrceType` |  | |  | `prctr_drvtn_source_type` |  |  |
| `SourceOrder` |  | |  | `cast(srce_aufnr as aufnr preserving type)` |  |  |
| `SourceProjectInternalID` |  | |  | `cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type)` |  |  |
| `SourceWBSElementInternalID` |  | |  | `cast(srce_ps_psp_pnr as fis_wbsint_no_conv preserving type)` |  |  |
| `ProjectNetworkInternalID` |  | |  | `aufpl` |  |  |
| `NetworkActivityInternalID` |  | |  | `aplzl` |  |  |
| `_Order` | | ✓ | | | | |
| `_OrglChgReassignmentStatus` | | ✓ | | | | |
| `_ProfitCtrDerivationSrceType` | | ✓ | | | | |
| `_OrglChange` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCtr` | | ✓ | | | | |
| `_ProfitCenterBeforeOrglChange` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_Order` | [1] |
| `_OrglChgReassignmentStatus` | `I_OrglChangeReassignmentStatus` | [1] |
| `_ProfitCtrDerivationSrceType` | `I_ProfitCtrDerivationSrceType` | [0..1] |
| `_OrglChange` | `I_OrganizationalChange` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_ProfitCtr` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenterBeforeOrglChange` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Assgmt of PrftCtr to Network Activity'

@ObjectModel:{
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern:  #ANALYTICAL_DIMENSION 
}
@Analytics: {
  dataCategory: #DIMENSION
}
@Metadata.allowExtensions:true
@ObjectModel.representativeKey:'NetworkActivity'
@Analytics.internalName:#LOCAL

define view entity I_ProfitCenterToNetworkActy
  as select from finoc_rt_nwa
  association [1]    to I_Order                        as _Order                        on  $projection.ProjectNetwork = _Order.OrderID
  association [1]    to I_OrglChangeReassignmentStatus as _OrglChgReassignmentStatus    on  $projection.OrglChangeReassignmentStatus = _OrglChgReassignmentStatus.OrglChangeReassignmentStatus
  association [0..1] to I_ProfitCtrDerivationSrceType  as _ProfitCtrDerivationSrceType  on  $projection.ProfitCenterDerivationSrceType = _ProfitCtrDerivationSrceType.ProfitCenterDerivationSrceType
  association [0..1] to I_OrganizationalChange         as _OrglChange                   on  $projection.OrganizationalChange = _OrglChange.OrganizationalChange
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ProfitCenter                 as _ProfitCtr                    on  $projection.ControllingArea   =  _ProfitCtr.ControllingArea
                                                                                        and $projection.ProfitCenter      =  _ProfitCtr.ProfitCenter
                                                                                        and $projection.ValidityStartDate >= _ProfitCtr.ValidityStartDate
                                                                                        and $projection.ValidityStartDate <= _ProfitCtr.ValidityEndDate
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ProfitCenter                 as _ProfitCenterBeforeOrglChange on  $projection.ControllingArea              =  _ProfitCenterBeforeOrglChange.ControllingArea
                                                                                        and $projection.ProfitCenterBeforeOrglChange =  _ProfitCenterBeforeOrglChange.ProfitCenter
                                                                                        and $projection.ValidityStartDate            >= _ProfitCenterBeforeOrglChange.ValidityStartDate
                                                                                        and $projection.ValidityStartDate            <= _ProfitCenterBeforeOrglChange.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_Order'
  key cast ( aufnr as ps_s4_aufnr preserving type)                 as ProjectNetwork,
      
  key cast ( vornr as fis_networkactivity_no_conv preserving type) as NetworkActivity,
      @Semantics.businessDate.from:true
  key valid_from                                                   as ValidityStartDate,
      @Semantics.businessDate.to:true
      valid_to                                                     as ValidityEndDate,
      kokrs                                                        as ControllingArea,
      bukrs                                                        as CompanyCode,
      prctr_old                                                    as ProfitCenterBeforeOrglChange,
      prctr                                                        as ProfitCenter,
      orgl_change                                                  as OrganizationalChange,
      reassgmt_status                                              as OrglChangeReassignmentStatus,
      prctr_drvtn_source_type                                      as ProfitCenterDerivationSrceType,
      cast(srce_aufnr as aufnr preserving type)                    as SourceOrder,
      cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type)   as SourceProjectInternalID,
      cast(srce_ps_psp_pnr as fis_wbsint_no_conv preserving type)  as SourceWBSElementInternalID,
      aufpl                                                        as ProjectNetworkInternalID,
      aplzl                                                        as NetworkActivityInternalID,
      _OrglChgReassignmentStatus,
      _ProfitCtrDerivationSrceType,
      _OrglChange,
      _CompanyCode,
      _ControllingArea,
      _ProfitCtr,
      _ProfitCenterBeforeOrglChange,
      _Order
}
```
