---
name: I_PROFITCENTERTOPRODUCT
description: "Profit CenterTOPRODUCT"
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
  - product
  - profit-center
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:ProfitCenter
---
# I_PROFITCENTERTOPRODUCT

**Profit CenterTOPRODUCT**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `ValidityStartDate` | ✓ | |  | `valid_from` |  |  |
| `ValidityEndDate` |  | |  | `valid_to` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ProfitCenterBeforeOrglChange` |  | |  | `prctr_old` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `OrganizationalChange` |  | |  | `orgl_change` |  |  |
| `OrglChangeReassignmentStatus` |  | |  | `reassgmt_status` |  |  |
| `ProfitCenterDerivationSrceType` |  | |  | `prctr_drvtn_source_type` |  |  |
| `_OrglChgReassignmentStatus` | | ✓ | | | | |
| `_ProfitCtrDerivationSrceType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
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
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_OrglChange` | `I_OrganizationalChange` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_ProfitCtr` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenterBeforeOrglChange` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCRTMAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Assgmt of PrftCtr to Product'
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY 
@ObjectModel.representativeKey: 'Product'
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
define view I_ProfitCenterToProduct
  as select from finoc_rt_mat
  association [1]    to I_OrglChangeReassignmentStatus as _OrglChgReassignmentStatus    on  $projection.OrglChangeReassignmentStatus = _OrglChgReassignmentStatus.OrglChangeReassignmentStatus
  association [0..1] to I_ProfitCtrDerivationSrceType  as _ProfitCtrDerivationSrceType  on  $projection.ProfitCenterDerivationSrceType = _ProfitCtrDerivationSrceType.ProfitCenterDerivationSrceType
  association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Product                      as _Product                      on  $projection.Product = _Product.Product
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
  key matnr                   as Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                   as Plant,
      @Semantics.businessDate.from:true
  key valid_from              as ValidityStartDate,
      @Semantics.businessDate.to:true
      valid_to                as ValidityEndDate,
      kokrs                   as ControllingArea,
      bukrs                   as CompanyCode,
      prctr_old               as ProfitCenterBeforeOrglChange,
      prctr                   as ProfitCenter,
      orgl_change             as OrganizationalChange,
      reassgmt_status         as OrglChangeReassignmentStatus,
      prctr_drvtn_source_type as ProfitCenterDerivationSrceType,
      _OrglChgReassignmentStatus,
      _Product,
      _Plant,
      _ProfitCtrDerivationSrceType,
      _OrglChange,
      _CompanyCode,
      _ControllingArea,
      _ProfitCtr,
      _ProfitCenterBeforeOrglChange
}
```
