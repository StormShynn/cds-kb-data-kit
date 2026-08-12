---
name: I_PROFITCENTERTOPURORDERITEM
description: "Profit CenterTOPURORDERITEM"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - profit-center
  - item-level
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:ProfitCenter
---
# I_PROFITCENTERTOPURORDERITEM

**Profit CenterTOPURORDERITEM**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocument` | ✓ | |  | `ebeln` |  |  |
| `PurchasingDocumentItem` | ✓ | |  | `ebelp` |  |  |
| `AccountAssignmentNumber` | ✓ | |  | `zekkn` |  |  |
| `ValidityStartDate` | ✓ | |  | `valid_from` |  |  |
| `ValidityEndDate` |  | |  | `valid_to` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ProfitCenterBeforeOrglChange` |  | |  | `prctr_old` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `OrganizationalChange` |  | |  | `orgl_change` |  |  |
| `OrglChangeReassignmentStatus` |  | |  | `reassgmt_status` |  |  |
| `ProfitCenterDerivationSrceType` |  | |  | `prctr_drvtn_source_type` |  |  |
| `SourceWBSElementInternalID` |  | |  | `srce_ps_psp_pnr` |  |  |
| `SourceProjectInternalID` |  | |  | `cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type)` |  |  |
| `SourceProduct` |  | |  | `srce_matnr` |  |  |
| `SourcePlant` |  | |  | `srce_werks` |  |  |
| `SourceSalesDocument` |  | |  | `cast(srce_kdauf as vbeln_va preserving type)` |  |  |
| `SourceSalesDocumentItem` |  | |  | `cast(srce_kdpos as posnr_va preserving type)` |  |  |
| `SourceCostCenter` |  | |  | `cast(srce_kostl as kostl preserving type)` |  |  |
| `SourceMasterFixedAsset` |  | |  | `cast(srce_anln1 as anln1 preserving type)` |  |  |
| `SourceFixedAsset` |  | |  | `cast(srce_anln2 as anln2 preserving type)` |  |  |
| `SourceOrder` |  | |  | `cast(srce_aufnr as aufnr preserving type)` |  |  |
| `SourceNetworkActivity` |  | |  | `cast(srce_vornr as fis_networkactivity_no_conv preserving type)` |  |  |
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
| `_OrglChgReassignmentStatus` | `I_OrglChangeReassignmentStatus` | [1] |
| `_ProfitCtrDerivationSrceType` | `I_ProfitCtrDerivationSrceType` | [0..1] |
| `_OrglChange` | `I_OrganizationalChange` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_ProfitCtr` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenterBeforeOrglChange` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCRTPOI'
@AbapCatalog.compiler.compareFilter: true

@EndUserText.label: 'Assgmt of PrftCtr to PurOrd Item'
@VDM.viewType: #BASIC
//@Analytics: {
//  dataCategory: #DIMENSION
//}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'AccountAssignmentNumber'
@Metadata.ignorePropagatedAnnotations: true
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
define view I_ProfitCenterToPurOrderItem
  as select from finoc_rt_poi
  association [1]    to I_OrglChangeReassignmentStatus as _OrglChgReassignmentStatus    on  $projection.OrglChangeReassignmentStatus = _OrglChgReassignmentStatus.OrglChangeReassignmentStatus
  association [0..1] to I_ProfitCtrDerivationSrceType  as _ProfitCtrDerivationSrceType  on  $projection.ProfitCenterDerivationSrceType = _ProfitCtrDerivationSrceType.ProfitCenterDerivationSrceType
  association [0..1] to I_OrganizationalChange         as _OrglChange                   on  $projection.OrganizationalChange = _OrglChange.OrganizationalChange
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

  key    ebeln                                                           as PurchasingDocument,

  key    ebelp                                                           as PurchasingDocumentItem,
  key    zekkn                                                           as AccountAssignmentNumber,
         @Semantics.businessDate.from:true
  key    valid_from                                                      as ValidityStartDate,
         @Semantics.businessDate.to:true
         valid_to                                                        as ValidityEndDate,
         kokrs                                                           as ControllingArea,
         bukrs                                                           as CompanyCode,
         prctr_old                                                       as ProfitCenterBeforeOrglChange,
         prctr                                                           as ProfitCenter,
         orgl_change                                                     as OrganizationalChange,
         reassgmt_status                                                 as OrglChangeReassignmentStatus,
         prctr_drvtn_source_type                                         as ProfitCenterDerivationSrceType,
         srce_ps_psp_pnr                                                 as SourceWBSElementInternalID,
         cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type)      as SourceProjectInternalID,
         srce_matnr                                                      as SourceProduct,
         srce_werks                                                      as SourcePlant,
         cast(srce_kdauf as vbeln_va preserving type)                    as SourceSalesDocument,
         cast(srce_kdpos as posnr_va preserving type)                    as SourceSalesDocumentItem,
         cast(srce_kostl as kostl preserving type)                       as SourceCostCenter,
         cast(srce_anln1 as anln1 preserving type)                       as SourceMasterFixedAsset,
         cast(srce_anln2 as anln2 preserving type)                       as SourceFixedAsset,
         cast(srce_aufnr as aufnr preserving type)                       as SourceOrder,
         cast(srce_vornr as fis_networkactivity_no_conv preserving type) as SourceNetworkActivity,
         _OrglChgReassignmentStatus,
         _ProfitCtrDerivationSrceType,
         _OrglChange,
         _CompanyCode,
         _ControllingArea,
         _ProfitCtr,
         _ProfitCenterBeforeOrglChange
}
```
