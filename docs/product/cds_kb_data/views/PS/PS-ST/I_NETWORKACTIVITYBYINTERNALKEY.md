---
name: I_NETWORKACTIVITYBYINTERNALKEY
description: "Network Activity Information By Internal Key"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value
semantic_en: "Network Activity Information By Internal Key"
semantic_vi: "Network Activity Information By Internal Key — CDS view giao diện dựa trên afvc."
keywords:
  - "Network Activity Information By Internal Key"
  - "network"
  - "activity"
  - "information"
  - "internal"
  - "key"
  - "project"
  - "description"
  - "superior"
  - "ntwk"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - PS-ST
---
# I_NETWORKACTIVITYBYINTERNALKEY

**Network Activity Information By Internal Key**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectNetworkInternalID` | ✓ | |  | `aufpl` | `NUMC(10)` | Routing Number of Operations in the Order |
| `NetworkActivityInternalID` | ✓ | |  | `aplzl` | `NUMC(8)` | General counter for order |
| `NetworkActivity` |  | |  | `cast ( afvc.vornr as ps_vornr )` | `CHAR(4)` | Activity number in network and standard network |
| `NetworkActivityDescription` |  | |  | `cast ( afvc.ltxa1 as ps_s4_ltxa1 )` | `CHAR(40)` | Operation short text |
| `SuperiorNtwkActivityInternalID` |  | |  | `sumnr` | `NUMC(8)` | Node Number of the Superior Operation |
| `WBSElementInternalID` |  | |  | `cast( projn as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `Supplier` |  | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `NetworkActivityObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `WorkCenterInternalID` |  | |  | `arbid` | `NUMC(8)` | Object ID of the resource |
| `CostCtrActivityType` |  | |  | `cast ( afvc.larnt as lstar )` | `CHAR(6)` | Activity Type |
| `NetworkActivityControlProfile` |  | |  | `cast ( afvc.steus as qsteus )` | `CHAR(4)` | Control Key |
| `OperationImportance` |  | |  | `nprio` | `CHAR(1)` | Priority |
| `ExternalProcessingPrice` |  | |  | `cast ( afvc.preis as preis )` | `CURR(11)` | Price |
| `CostElement` |  | |  | `cast ( afvc.sakto as kstar )` | `CHAR(10)` | Cost Element |
| `NetworkActivityCurrency` |  | |  | `cast ( afvc.waers as waers )` | `CUKY(5)` | Currency Key |
| `IsMarkedForDeletion` |  | |  | `cast ( afvc.loekz as ps_s4_loevm )` | `CHAR(1)` | Deletion Indicator |
| `ControllingArea` |  | | `_ProjectNetworkBasicData` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `NetworkActivityPriority` |  | |  | `cast ( afvc.pprio as prioritaet )` | `CHAR(2)` | Priority |
| `NetworkActivityObjectCurrency` |  | |  | `cast ( afvc.owaer as owaer )` | `CUKY(5)` | Currency Key |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `FactoryCalendar` |  | |  | `cast ( afvc.kalid as appca )` | `CHAR(2)` | Appointments: Calendar |
| `Equipment` |  | |  | `equnr` | `CHAR(18)` | Equipment Number |
| `Assembly` |  | |  | `istru` | `CHAR(40)` | Assembly |
| `FunctionalLocation` |  | |  | `cast ( afvc.tplnr as tplnr_unconverted )` | `CHAR(30)` | Functional location |
| `MaintOrdProcessPhaseCode` |  | |  | `maintordopprocessphasecode` | `CHAR(2)` | Process Phase |
| `MaintOrdProcessSubPhaseCode` |  | |  | `maintordopprocesssubphasecode` | `CHAR(4)` | Process Subphase |
| `ActyIsTakenAcctForProjSmmry` |  | |  | `clasf` | `CHAR(1)` | Ind.: Respect Activity for Project Summarization |
| `CapacityRequirementDistrKey` |  | |  | `vertl` | `CHAR(8)` | Distr.cap.reqmts (plant maint.,process order, network) |
| `NumberOfCapacities` |  | |  | `anzzl` | `INT1(3)` | Number of capacities required |
| `OperationWorkPercent` |  | |  | `prznt` | `INT1(3)` | Work percentage |
| `BusinessProcess` |  | |  | `prz01` | `CHAR(12)` | Business Process |
| `StandardTextInternalID` |  | |  | `ktsch` | `CHAR(7)` | Standard text key |
| `ExtProcgOperationHasSubcontrg` |  | |  | `frdlb` | `CHAR(1)` | Indicator: External Processing Operation with Subcontracting |
| `PurchasingInfoRecord` |  | |  | `infnr` | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  | `ekorg` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  | `ekgrp` | `CHAR(3)` | Purchasing Group for External Processing Activity |
| `NetworkActivityPriceBaseQty` |  | |  | `peinh` | `DEC(5)` | Price Unit |
| `NetworkActivityQuantityUnit` |  | |  | `cast( 'EA' as ps_s4_vorme )` | `UNIT(3)` | Unit of measure for activity |
| `PurgInfoRecdDataIsFixed` |  | |  | `kzfix` | `CHAR(1)` | Data of Purchasing Info Record Is Fixed |
| `PurchaseRequisition` |  | |  | `banfn` | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  | `bnfpo` | `NUMC(5)` | Item Number of Purchase Requisition in Order |
| `MaterialGroup` |  | |  | `matkl` | `CHAR(9)` | Material Group |
| `PurchasingInfoRecdAddlGrpgName` |  | |  | `sortl` | `CHAR(10)` | Sort Term for Non-Stock Info Records |
| `RequisitionerUser` |  | |  | `afnam` | `CHAR(12)` | Name of requisitioner/requester |
| `GoodsRecipientName` |  | |  | `wempf` | `CHAR(12)` | Goods Recipient |
| `OperationTrackingNumber` |  | |  | `bednr` | `CHAR(10)` | Requirement Tracking Number |
| `UnloadingPointName` |  | |  | `ablad` | `CHAR(25)` | Unloading Point |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `TaxJurisdictionCalcProcedure` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `OverheadCode` |  | |  | `zschl` | `CHAR(6)` | Overhead key |
| `ChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalArea` |  | |  | `func_area` | `CHAR(16)` | Functional Area |
| `ControllingObjectClass` |  | |  | `cast ( afvc.scope as ps_s4_scope_cv )` | `CHAR(2)` | Object Class |
| `ProgressAnlysAggregationWeight` |  | |  | `evgew` | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `NetworkActivityCost` |  | |  | `prkst` | `CURR(11)` | Costs in the activity |
| `PartnerCostCenter` |  | |  | `anfko` | `CHAR(10)` | Requesting Cost Center |
| `Language` |  | |  | `txtsp` | `LANG(1)` | Language Key |
| `NtwkAccountAssignmentCode` |  | |  | `netzkont` | `CHAR(1)` | Indicator for the account assignment of a network(hdr/act.) |
| `ProjNtwkIsRlvtForMatlPlng` |  | |  | `no_disp` | `CHAR(1)` | Effective for Materials Planning |
| `MatPlanningPrimaryCost` |  | |  | `mat_prkst` | `CURR(11)` | Material planning in networks: primary costs |
| `ReferencePoint` |  | |  | `rfpnt` | `CHAR(20)` | Reference point for BOM transfer |
| `ReferenceElement` |  | |  | `adpsp` | `CHAR(40)` | Reference Element PM/PS |
| `OperationCalculationControl` |  | |  | `indet` | `CHAR(1)` | Key for calculation |
| `UsageCode` |  | |  | `mlstn` | `CHAR(5)` | Usage |
| `StandardDurationIsFlexible` |  | |  | `ddehn` | `CHAR(1)` | Indicator: flexible duration |
| `LeadTimeReductionStrategy` |  | |  | `rstra` | `CHAR(2)` | Reduction Strategy per Operation |
| `OpPurchaseOutlineAgreement` |  | |  | `ebeln` | `CHAR(10)` | Purchasing Document Number |
| `OpPurchaseOutlineAgreementItem` |  | |  | `ebelp` | `NUMC(5)` | Item Number of Purchasing Document |
| `CreationDate` |  | |  | `ersda` | `DATS(8)` | Created On |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  | `laeda` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `StatusCombinationCode` |  | |  | `afvc_status` | `INT1(3)` | Status Combination |
| `_ActivityTypeText` | | ✓ | | | | |
| `_ProjectNetworkBasicData` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_NetworkActivityWorkCenter` | | ✓ | | | | |
| `_ActivityShortText` | | ✓ | | | | |
| `_NtwkActivityDatesQuantity` | | ✓ | | | | |
| `_NetworkActivityUserFields` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Superior` | | ✓ | | | | |
| `_OperationControlProfileText` | | ✓ | | | | |
| `_FactoryCalendarText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |
| `_ProjectNetworkBasicData` | `I_ProjectNetworkBasicData` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [1..1] |
| `_NetworkActivityWorkCenter` | `I_MaintenanceWorkCenterOrgUnit` | [1..1] |
| `_ActivityShortText` | `I_ProjectObjectShortText` | [0..1] |
| `_NtwkActivityDatesQuantity` | `I_NetworkActivityDatesQuantity` | [1..1] |
| `_NetworkActivityUserFields` | `I_NetworkActivityUserFields` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Superior` | `I_NetworkActivityByInternalKey` | [0..1] |
| `_OperationControlProfileText` | `I_OperationControlProfileText` | [1..1] |
| `_FactoryCalendarText` | `I_FactoryCalendarText` | [0..1] |
| `_Extension` | `E_NetworkActivity` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INWACTBYINT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Network Activity Information By Internal Key'
define view I_NetworkActivityByInternalKey
  as select from           afvc
    left outer to one join afvc_ps_admin on  afvc.aufpl = afvc_ps_admin.aufpl
                                         and afvc.aplzl = afvc_ps_admin.aplzl
  
  association [0..*] to I_CostCenterActivityTypeText   as _ActivityTypeText          on  $projection.CostCtrActivityType = _ActivityTypeText.CostCtrActivityType
                                                                                     and $projection.ControllingArea     = _ActivityTypeText.ControllingArea
  association [1..1] to I_ProjectNetworkBasicData      as _ProjectNetworkBasicData   on  $projection.ProjectNetworkInternalID   = _ProjectNetworkBasicData.ProjectNetworkInternalID
                                                                                     and _ProjectNetworkBasicData.OrderCategory = '20'
  //Add WorkCenter association to maintain DCL
  association [1..1] to I_WorkCenter                   as _WorkCenter                on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                     and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [1..1] to I_MaintenanceWorkCenterOrgUnit as _NetworkActivityWorkCenter on  $projection.WorkCenterInternalID = _NetworkActivityWorkCenter.WorkCenterInternalID
                                                                                     and _NetworkActivityWorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_ProjectObjectShortText       as _ActivityShortText         on  _ActivityShortText.Language                     = $session.system_language
                                                                                     and _ActivityShortText.ProjectApplicationIdentifier = 'PS'
                                                                                     and _ActivityShortText.ProjectObjectType            = 'NV'
                                                                                     and $projection.NetworkActivityObject               = _ActivityShortText.ProjectObjectNode

  association [1..1] to I_NetworkActivityDatesQuantity as _NtwkActivityDatesQuantity on  $projection.ProjectNetworkInternalID  = _NtwkActivityDatesQuantity.ProjectNetworkInternalID
                                                                                     and $projection.NetworkActivityInternalID = _NtwkActivityDatesQuantity.NetworkActivityInternalID
  association [1..1] to I_NetworkActivityUserFields    as _NetworkActivityUserFields on  $projection.ProjectNetworkInternalID  = _NetworkActivityUserFields.ProjectNetworkInternalID
                                                                                     and $projection.NetworkActivityInternalID = _NetworkActivityUserFields.NetworkActivityInternalID
  association [0..1] to I_ControllingArea              as _ControllingArea           on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_NetworkActivityByInternalKey as _Superior                  on  $projection.SuperiorNtwkActivityInternalID = _Superior.NetworkActivityInternalID
                                                                                     and $projection.ProjectNetworkInternalID       = _Superior.ProjectNetworkInternalID
  association [1..1] to I_OperationControlProfileText  as _OperationControlProfileText on  $projection.NetworkActivityControlProfile = _OperationControlProfileText.OperationControlProfile
                                                                                       and _OperationControlProfileText.Language     = $session.system_language
  association [0..1] to I_FactoryCalendarText          as _FactoryCalendarText         on  _FactoryCalendarText.FactoryCalendar = $projection.FactoryCalendar
                                                                                       and _FactoryCalendarText.Language        = $session.system_language
  association [1..1] to E_NetworkActivity              as _Extension                 on  $projection.ProjectNetworkInternalID  = _Extension.ProjectNetworkInternalID
                                                                                     and $projection.NetworkActivityInternalID = _Extension.NetworkActivityInternalID
  {
  key afvc.aufpl                                   as ProjectNetworkInternalID,
  key afvc.aplzl                                   as NetworkActivityInternalID,
      cast ( afvc.vornr as ps_vornr )              as NetworkActivity, 
      @Semantics.text: true
      cast ( afvc.ltxa1 as ps_s4_ltxa1 )           as NetworkActivityDescription,
      afvc.sumnr                                   as SuperiorNtwkActivityInternalID,
      cast( projn as ps_s4_pspnr preserving type ) as WBSElementInternalID,
      afvc.lifnr                                   as Supplier, 
      afvc.objnr                                   as NetworkActivityObject,
      afvc.werks                                   as Plant,
      afvc.arbid                                   as WorkCenterInternalID,
      cast ( afvc.larnt as lstar )                 as CostCtrActivityType, 
      cast ( afvc.steus as qsteus )                as NetworkActivityControlProfile, 
      afvc.nprio                                   as OperationImportance,
      @Semantics.amount.currencyCode: 'NetworkActivityCurrency'
      cast ( afvc.preis as preis )                 as ExternalProcessingPrice, 
      cast ( afvc.sakto as kstar )                 as CostElement, 
      cast ( afvc.waers as waers )                 as NetworkActivityCurrency, 
      cast ( afvc.loekz as ps_s4_loevm )           as IsMarkedForDeletion, 
      _ProjectNetworkBasicData.ControllingArea     as ControllingArea,
      cast ( afvc.pprio as prioritaet )            as NetworkActivityPriority, 
      cast ( afvc.owaer as owaer )                 as NetworkActivityObjectCurrency, 
      afvc.bukrs                                   as CompanyCode, 
      cast ( afvc.kalid as appca )                 as FactoryCalendar, 
      afvc.equnr                                   as Equipment,
      afvc.istru                                   as Assembly,
      cast ( afvc.tplnr as tplnr_unconverted )     as FunctionalLocation,
      afvc.maintordopprocessphasecode              as MaintOrdProcessPhaseCode,
      afvc.maintordopprocesssubphasecode           as MaintOrdProcessSubPhaseCode,
      afvc.clasf                                   as ActyIsTakenAcctForProjSmmry,
      afvc.vertl                                   as CapacityRequirementDistrKey,
      afvc.anzzl                                   as NumberOfCapacities,
      afvc.prznt                                   as OperationWorkPercent,
      afvc.prz01                                   as BusinessProcess,
      afvc.ktsch                                   as StandardTextInternalID,
      @Semantics.booleanIndicator: true
      afvc.frdlb                                   as ExtProcgOperationHasSubcontrg,
      afvc.infnr                                   as PurchasingInfoRecord,
      afvc.ekorg                                   as PurchasingOrganization,
      afvc.ekgrp                                   as PurchasingGroup,
      @Semantics.quantity.unitOfMeasure: 'NetworkActivityQuantityUnit'
      afvc.peinh                                   as NetworkActivityPriceBaseQty,
      cast( 'EA' as ps_s4_vorme )                  as NetworkActivityQuantityUnit,
      afvc.kzfix                                   as PurgInfoRecdDataIsFixed,
      afvc.banfn                                   as PurchaseRequisition,
      afvc.bnfpo                                   as PurchaseRequisitionItem,
      afvc.matkl                                   as MaterialGroup,
      afvc.sortl                                   as PurchasingInfoRecdAddlGrpgName,
      afvc.afnam                                   as RequisitionerUser,
      afvc.wempf                                   as GoodsRecipientName,
      afvc.bednr                                   as OperationTrackingNumber,
      afvc.ablad                                   as UnloadingPointName,
      afvc.gsber                                   as BusinessArea,
      afvc.kalsm                                   as TaxJurisdictionCalcProcedure,
      afvc.prctr                                   as ProfitCenter,
      afvc.zschl                                   as OverheadCode,
      afvc.aennr                                   as ChangeNumber,
      afvc.txjcd                                   as TaxJurisdiction,
      afvc.func_area                               as FunctionalArea,
      cast ( afvc.scope as ps_s4_scope_cv )        as ControllingObjectClass,
      afvc.evgew                                   as ProgressAnlysAggregationWeight,
      @Semantics.amount.currencyCode: 'NetworkActivityCurrency'
      afvc.prkst                                   as NetworkActivityCost,
      afvc.anfko                                   as PartnerCostCenter,
      afvc.txtsp                                   as Language,
      afvc.netzkont                                as NtwkAccountAssignmentCode,
      afvc.no_disp                                 as ProjNtwkIsRlvtForMatlPlng,      
      @Semantics.amount.currencyCode: 'NetworkActivityCurrency'
      afvc.mat_prkst                               as MatPlanningPrimaryCost, 
      afvc.rfpnt                                   as ReferencePoint, 
      afvc.adpsp                                   as ReferenceElement, 
      afvc.indet                                   as OperationCalculationControl,
      afvc.mlstn                                   as UsageCode,
      afvc.ddehn                                   as StandardDurationIsFlexible,
      afvc.rstra                                   as LeadTimeReductionStrategy,
      afvc.ebeln                                   as OpPurchaseOutlineAgreement,
      afvc.ebelp                                   as OpPurchaseOutlineAgreementItem,
      afvc_ps_admin.ersda                          as CreationDate,
      afvc_ps_admin.ernam                          as CreatedByUser,
      afvc_ps_admin.laeda                          as LastChangeDate,
      afvc_ps_admin.aenam                          as LastChangedByUser,
      afvc.afvc_status                             as StatusCombinationCode,      
      //Associations
      _ActivityTypeText,
      _ProjectNetworkBasicData,
      _WorkCenter, 
      _NetworkActivityWorkCenter,
      _OperationControlProfileText,
      _FactoryCalendarText,
      //Multi Language Short text
      _ActivityShortText,
      _NtwkActivityDatesQuantity,
      _NetworkActivityUserFields,
      _ControllingArea,
      _Superior
}
```
