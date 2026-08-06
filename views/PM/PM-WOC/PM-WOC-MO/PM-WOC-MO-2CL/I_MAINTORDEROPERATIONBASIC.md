---
name: I_MAINTORDEROPERATIONBASIC
description: Maintorderoperationbasic
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
# I_MAINTORDEROPERATIONBASIC

**Maintorderoperationbasic**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `afko.aufnr` |
| key `MaintenanceOrderOperation` | `cast (afvc.vornr as maintenanceorderoperation preserving type )` |
| `MaintenanceOrderSubOperation` | `cast ( '0000' as maintenanceordersuboperation )` |
| `MaintOrderRoutingNumber` | `afvc.aufpl` |
| `MaintOrderOperationCounter` | `afvc.aplzl` |
| `Plant` | `afvc.werks` |
| `OperationWorkCenterTypeCode` | `'A'` |
| `OperationWorkCenterInternalID` | `afvc.arbid` |
| `OperationControlKey` | `afvc.steus` |
| `OperationDescription` | `afvc.ltxa1` |
| `OperationStandardTextCode` | `afvc.ktsch` |
| `Language` | `cast(afvc.txtsp as spras preserving type )` |
| `NumberOfTimeTickets` | `afvc.loanz` |
| `OperationPurgInfoRecdSearchTxt` | `afvc.sortl` |
| `OperationSupplier` | `afvc.lifnr` |
| `OpExternalProcessingPrice` | `afvc.preis` |
| `MaintOrdOpProcgPriceUnitValue` | `afvc.peinh` |
| `CostElement` | `afvc.sakto` |
| `OpExternalProcessingCurrency` | `afvc.waers` |
| `OperationPurchasingInfoRecord` | `afvc.infnr` |
| `PurchasingOrganization` | `afvc.ekorg` |
| `PurchasingGroup` | `afvc.ekgrp` |
| `MaterialGroup` | `afvc.matkl` |
| `OpPurchaseOutlineAgreement` | `cast (afvc.ebeln as konnr preserving type )` |
| `OpPurchaseOutlineAgreementItem` | `cast (afvc.ebelp as ktpnr preserving type)` |
| `OperationRequisitionerName` | `afvc.afnam` |
| `OperationTrackingNumber` | `afvc.bednr` |
| `NumberOfCapacities` | `afvc.anzzl` |
| `OperationWorkPercent` | `afvc.prznt` |
| `OperationCalculationControl` | `afvc.indet` |
| `ActivityType` | `afvc.larnt` |
| `OperationSystemCondition` | `afvc.anlzu` |
| `OperationGoodsRecipientName` | `afvc.wempf` |
| `OperationUnloadingPointName` | `afvc.ablad` |
| `OperationPersonResponsible` | `afvc.pernr` |
| `Equipment` | `afvc.equnr` |
| `FunctionalLocation` | `cast( afvc.tplnr as vdm_eam_tplnr preserving type )` |
| `BusinessArea` | `afvc.gsber` |
| `ProfitCenter` | `afvc.prctr` |
| `CostingSheet` | `afvc.kalsm` |
| `TaxJurisdiction` | `afvc.txjcd` |
| `FunctionalArea` | `afvc.func_area` |
| `Assembly` | `afvc.istru` |
| `MaintOperationExecStageCode` | `cast( afvc.maintopexecutionphasecode as eam_premainpost_cds preserving type )` |
| `CostCtrActivityType` | `afvc.larnt` |
| `ReqgCostCenterControllingArea` | `afvc.anfkokrs` |
| `CapacityRequirement` | `afvc.bedid` |
| `CapacityRequirementItem` | `afvc.bedzl` |
| `PurchaseRequisition` | `afvc.banfn` |
| `MaintOrderOperationInternalID` | `afvc.objnr` |
| `PurchaseRequisitionItem` | `afvc.bnfpo` |
| `MaintOrderConfirmation` | `afvc.rueck` |
| `OperationMilestoneUsageCode` | `afvc.mlstn` |
| `MaintOrderConfCntrValue` | `afvc.rmzhl` |
| `OperationHasLongText` | `cast ( case afvc.txtsp when '' then '' else 'X' end as xfeld preserving type)` |
| `ControllingArea` | `aufk.kokrs` |
| `MaintOrdOpProcessPhaseCode` | `afvc.maintordopprocessphasecode` |
| `MaintOrdOpProcessSubPhaseCode` | `afvc.maintordopprocesssubphasecode` |
| `MaintOperationalChecklistType` | `afvc.cl_type` |
| `_MaintenanceOrder` | *Association* |
| `_Plant` | *Association* |
| `_OperationControlKey` | *Association* |
| `_Language` | *Association* |
| `_Supplier` | *Association* |
| `_OpExternalProcessingCurrency` | *Association* |
| `_PersonResponsible` | *Association* |
| `_Assembly` | *Association* |
| `_MaintOperationExecStageCode` | *Association* |
| `_EAMProcessPhase` | *Association* |
| `_EAMProcessSubPhase` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceOrder` | `I_MaintenanceOrderBasic` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_OperationControlKey` | `I_OperationControlProfile` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_OpExternalProcessingCurrency` | `I_Currency` | [0..1] |
| `_PersonResponsible` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Assembly` | `I_Material` | [0..1] |
| `_MaintOperationExecStageCode` | `I_MaintOperationExecStageCode` | [1..1] |
| `_EAMProcessPhase` | `I_EAMProcessPhase` | [0..1] |
| `_EAMProcessSubPhase` | `I_EAMProcessSubPhase` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Order Operation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'MaintenanceOrderOperation'
@ObjectModel.semanticKey:  [ 'MaintenanceOrder', 'MaintenanceOrderOperation' ]

@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrderOperation'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]


define view entity I_MaintOrderOperationBasic as select from  afvc as afvc
    left outer to one join afko as afko on afvc.aufpl = afko.aufpl
    left outer to one join aufk as aufk on aufk.aufnr = afko.aufnr
    
    association [0..1] to I_MaintenanceOrderBasic        as _MaintenanceOrder             on  $projection.MaintenanceOrder = _MaintenanceOrder.MaintenanceOrder
    association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
    association [0..1] to I_OperationControlProfile      as _OperationControlKey          on  $projection.OperationControlKey = _OperationControlKey.OperationControlProfile
    association [0..1] to I_Language                     as _Language                     on  $projection.Language = _Language.Language
    association [0..1] to I_Supplier                     as _Supplier                     on  $projection.OperationSupplier = _Supplier.Supplier
    association [0..1] to I_Currency                     as _OpExternalProcessingCurrency on  $projection.OpExternalProcessingCurrency = _OpExternalProcessingCurrency.Currency
    association [0..1] to I_PersonWorkAgreement_1        as _PersonResponsible            on  $projection.OperationPersonResponsible = _PersonResponsible.PersonWorkAgreement
    association [0..1] to I_Material                     as _Assembly                     on  $projection.Assembly = _Assembly.Material
    association [1..1] to I_MaintOperationExecStageCode  as _MaintOperationExecStageCode  on  $projection.MaintOperationExecStageCode = _MaintOperationExecStageCode.MaintOperationExecStageCode
    association [0..1] to I_EAMProcessPhase              as _EAMProcessPhase              on  $projection.MaintOrdOpProcessPhaseCode = _EAMProcessPhase.EAMProcessPhaseCode
    association [0..1] to I_EAMProcessSubPhase           as _EAMProcessSubPhase           on  $projection.MaintOrdOpProcessSubPhaseCode = _EAMProcessSubPhase.EAMProcessSubPhaseCode

{

      @ObjectModel.foreignKey.association: '_MaintenanceOrder'
  key afko.aufnr                                                                    as MaintenanceOrder,
  
        @ObjectModel.text.element: ['OperationDescription']
  key cast (afvc.vornr as  maintenanceorderoperation  preserving type )             as MaintenanceOrderOperation,
      cast ( '0000'  as maintenanceordersuboperation )  as MaintenanceOrderSubOperation,
       afvc.aufpl                                                                    as MaintOrderRoutingNumber,
      afvc.aplzl                                                                    as MaintOrderOperationCounter,


      @ObjectModel.foreignKey.association: '_Plant'
      afvc.werks                                                                    as Plant,
      'A'                                                                           as OperationWorkCenterTypeCode,
  
      afvc.arbid                                                                    as OperationWorkCenterInternalID,
      
      @ObjectModel.foreignKey.association: '_OperationControlKey'
      afvc.steus                                                                    as OperationControlKey,
      
      @Semantics.text
      afvc.ltxa1                                                                    as OperationDescription,
      afvc.ktsch                                                                    as OperationStandardTextCode,
      @ObjectModel.foreignKey.association: '_Language'
      cast(afvc.txtsp as spras preserving type )                                                     as Language,
      afvc.loanz                                                                    as NumberOfTimeTickets,
   
      afvc.sortl                                                                    as OperationPurgInfoRecdSearchTxt,

      @ObjectModel.foreignKey.association: '_Supplier'
      afvc.lifnr                                                                    as OperationSupplier,

      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      @Aggregation.default: #NONE
      afvc.preis                                                                    as OpExternalProcessingPrice,
//       @Semantics.quantity.unitOfMeasur
      afvc.peinh                                                                    as MaintOrdOpProcgPriceUnitValue,
      afvc.sakto                                                                    as CostElement,
      @ObjectModel.foreignKey.association: '_OpExternalProcessingCurrency'
      afvc.waers                                                                    as OpExternalProcessingCurrency,
      
      afvc.infnr                                                                    as OperationPurchasingInfoRecord,
      afvc.ekorg                                                                    as PurchasingOrganization,
      afvc.ekgrp                                                                    as PurchasingGroup,
      afvc.matkl                                                                    as MaterialGroup,
      cast (afvc.ebeln as konnr preserving type )                                   as OpPurchaseOutlineAgreement,
      cast (afvc.ebelp as ktpnr preserving type)                                    as OpPurchaseOutlineAgreementItem,
      afvc.afnam                                                                    as OperationRequisitionerName,
      afvc.bednr                                                                    as OperationTrackingNumber,
      @Aggregation.default: #NONE
      afvc.anzzl                                                                    as NumberOfCapacities,
      afvc.prznt                                                                    as OperationWorkPercent,
      afvc.indet                                                                    as OperationCalculationControl,
      afvc.larnt                                                                    as ActivityType,
      @ObjectModel.foreignKey.association: '_OperationSystemCondition'
      afvc.anlzu                                                                    as OperationSystemCondition,
      //afvc.vertl                                                                    as DistrCapReqmts,
      afvc.wempf                                                                    as OperationGoodsRecipientName,
      afvc.ablad                                                                    as OperationUnloadingPointName,

      @ObjectModel.foreignKey.association: '_PersonResponsible'
      afvc.pernr                                                                    as OperationPersonResponsible,
      afvc.equnr                                                                    as Equipment,
      cast( afvc.tplnr  as vdm_eam_tplnr preserving type )                          as FunctionalLocation, 
      afvc.gsber                                                                    as BusinessArea,
  
      afvc.prctr                                                                    as ProfitCenter,
      afvc.kalsm                                                                    as CostingSheet,
     
      afvc.txjcd                                                                    as TaxJurisdiction,
    
      afvc.func_area                                                                as FunctionalArea,
     
      @ObjectModel.foreignKey.association: '_Assembly'
      afvc.istru                                                                    as Assembly, //long one - 40 char
  
      @ObjectModel.foreignKey.association: '_MaintOperationExecStageCode'
      cast( afvc.maintopexecutionphasecode as eam_premainpost_cds preserving type ) as MaintOperationExecStageCode,
      afvc.larnt                                                                    as CostCtrActivityType,
      afvc.anfkokrs                                                                 as ReqgCostCenterControllingArea,
      afvc.bedid                                                                    as CapacityRequirement,
      afvc.bedzl                                                                    as CapacityRequirementItem,
      afvc.banfn                                                                    as PurchaseRequisition,
      afvc.objnr                                                                    as MaintOrderOperationInternalID,
      afvc.bnfpo                                                                    as PurchaseRequisitionItem,
      afvc.rueck                                                                    as MaintOrderConfirmation,
      afvc.mlstn                                                                    as OperationMilestoneUsageCode,
      afvc.rmzhl                                                                    as MaintOrderConfCntrValue,
      
      cast (
        case afvc.txtsp
            when '' then ''
            else 'X'
      end as xfeld preserving type)                                                 as OperationHasLongText,
      -- needed for some associations, e.g. activity type
      aufk.kokrs                                                                    as ControllingArea,
      @ObjectModel.foreignKey.association: '_EAMProcessPhase'
      afvc.maintordopprocessphasecode                                               as MaintOrdOpProcessPhaseCode,
      @ObjectModel.foreignKey.association: '_EAMProcessSubPhase'
      afvc.maintordopprocesssubphasecode                                            as MaintOrdOpProcessSubPhaseCode,
      afvc.cl_type                                                                  as MaintOperationalChecklistType,
      
      // associations :
      _MaintenanceOrder,
      _Plant,
      _OperationControlKey,
      _Language,
      _Supplier,
      _OpExternalProcessingCurrency,
      _PersonResponsible,
      _Assembly,
      _MaintOperationExecStageCode,
      _EAMProcessPhase,
      _EAMProcessSubPhase
      
}
where
      afvc.sumnr = '00000000'
  and afko.plnaw = 'I'
```
