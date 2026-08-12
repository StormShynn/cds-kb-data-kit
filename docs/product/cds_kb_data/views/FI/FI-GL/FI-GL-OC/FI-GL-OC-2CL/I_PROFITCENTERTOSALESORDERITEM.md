---
name: I_PROFITCENTERTOSALESORDERITEM
description: "Profit CenterTOSales OrderITEM"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - sales-order
  - profit-center
  - item-level
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:SalesOrder
  - bo:ProfitCenter
---
# I_PROFITCENTERTOSALESORDERITEM

**Profit CenterTOSales OrderITEM**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  | `cast(kdauf as vbeln_va preserving type)` |  |  |
| `SalesDocumentItem` | ✓ | |  | `cast(kdpos as posnr_va preserving type)` |  |  |
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
| `SourceOrder` |  | |  | `cast(srce_aufnr as aufnr preserving type)` |  |  |
| `SourceCostCenter` |  | |  | `cast(srce_kostl as kostl preserving type)` |  |  |
| `_OrglChgReassignmentStatus` | | ✓ | | | | |
| `_ProfitCtrDerivationSrceType` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
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
| `_SalesDocument` | `I_SalesDocument` | [1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [1] |
| `_OrglChange` | `I_OrganizationalChange` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_ProfitCtr` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenterBeforeOrglChange` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCRTSOI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Assgmt of PrftCtr to SlsOrd Item'
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY 
@ObjectModel.representativeKey: 'SalesDocumentItem'
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
define view I_ProfitCenterToSalesOrderItem
  as select from finoc_rt_soi
  association [1]    to I_OrglChangeReassignmentStatus as _OrglChgReassignmentStatus    on  $projection.OrglChangeReassignmentStatus = _OrglChgReassignmentStatus.OrglChangeReassignmentStatus
  association [0..1] to I_ProfitCtrDerivationSrceType  as _ProfitCtrDerivationSrceType  on  $projection.ProfitCenterDerivationSrceType = _ProfitCtrDerivationSrceType.ProfitCenterDerivationSrceType
  association [1]    to I_SalesDocument                as _SalesDocument                on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [1]    to I_SalesDocumentItem            as _SalesDocumentItem            on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                                        and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem
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
         @ObjectModel.foreignKey.association: '_SalesDocument'
  key    cast(kdauf as vbeln_va preserving type)                    as SalesDocument,
  key    cast(kdpos as posnr_va preserving type)                    as SalesDocumentItem,
         @Semantics.businessDate.from:true
  key    valid_from                                                 as ValidityStartDate,
         @Semantics.businessDate.to:true
         valid_to                                                   as ValidityEndDate,
         kokrs                                                      as ControllingArea,
         bukrs                                                      as CompanyCode,
         prctr_old                                                  as ProfitCenterBeforeOrglChange,
         prctr                                                      as ProfitCenter,
         orgl_change                                                as OrganizationalChange,
         reassgmt_status                                            as OrglChangeReassignmentStatus,
         prctr_drvtn_source_type                                    as ProfitCenterDerivationSrceType,
         srce_ps_psp_pnr                                            as SourceWBSElementInternalID,                                         
         cast (srce_ps_prj_pnr as ps_s4_proj_pspnr preserving type) as SourceProjectInternalID,
         srce_matnr                                                 as SourceProduct,
         srce_werks                                                 as SourcePlant,
         cast(srce_aufnr as aufnr preserving type)                  as SourceOrder,  
         cast(srce_kostl as kostl preserving type)                  as SourceCostCenter,    
         _OrglChgReassignmentStatus,
         _ProfitCtrDerivationSrceType,
         _SalesDocument,
         _SalesDocumentItem,
         _OrglChange,
         _CompanyCode,
         _ControllingArea,
         _ProfitCtr,
         _ProfitCenterBeforeOrglChange
}
```
