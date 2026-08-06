---
name: I_FINSTATISTICALKEYFIGUREITEM
description: Finstatisticalkeyfigureitem
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINSTATISTICALKEYFIGUREITEM

**Finstatisticalkeyfigureitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Ledger` | `P_FinStatisticalKeyFigureItem.rldnr` |
| key `CompanyCode` | `P_FinStatisticalKeyFigureItem.rbukrs` |
| key `StatisticalKeyFigure` | `P_FinStatisticalKeyFigureItem.stagr` |
| key `FiscalYear` | `P_FinStatisticalKeyFigureItem.RYEAR` |
| key `FiscalPeriod` | `P_FinStatisticalKeyFigureItem.poper` |
| key `StatisticalKeyFigureItem` | `P_FinStatisticalKeyFigureItem.recid` |
| `FiscalYearPeriod` | `P_FinStatisticalKeyFigureItem.FISCYEARPER` |
| `FiscalYearVariant` | `P_FinStatisticalKeyFigureItem.periv` |
| `IsSpecialPeriod` | `P_FinStatisticalKeyFigureItem.IsSpecialPeriod` |
| `StatisticalKeyFigureCategory` | `P_FinStatisticalKeyFigureItem.grtyp` |
| `StatisticalKeyFigQtyUnit` | `P_FinStatisticalKeyFigureItem.runit` |
| `StatisticalKeyFigureQuantity` | `} cast( P_FinStatisticalKeyFigureItem.msl as fis_smexxx_long )` |
| `StatisticalKeyFigFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_fixed_smexxx_long preserving type )` |
| `StatisticalKeyFigSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_sum_smexxx_long preserving type )` |
| `StatisticalKeyFigureActlQty` | `} cast( case P_FinStatisticalKeyFigureItem.rrcty when '0' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_act_smexxx_long preserving type )` |
| `StatisticalKeyFigurePlanQty` | `} cast( case P_FinStatisticalKeyFigureItem.rrcty when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_pln_smexxx_long preserving type )` |
| `StatisticalKeyFigActlFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then ( case P_FinStatisticalKeyFigureItem.rrcty when '0' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_act_fixed_smexxx_long preserving type )` |
| `StatisticalKeyFigPlanFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then ( case P_FinStatisticalKeyFigureItem.rrcty when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_pln_fixed_smexxx_long preserving type )` |
| `StatisticalKeyFigActlSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then ( case P_FinStatisticalKeyFigureItem.rrcty when '0' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_act_sum_smexxx_long preserving type )` |
| `StatisticalKeyFigPlanSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then ( case P_FinStatisticalKeyFigureItem.rrcty when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_pln_sum_smexxx_long preserving type )` |
| `IntmdStatisticalKeyFigFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_fixed_smexxx_long preserving type )` |
| `IntmdStatisticalKeyFigSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_sum_smexxx_long preserving type )` |
| `StstclKeyFigIntmdActlFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then ( case P_FinStatisticalKeyFigureItem.rrcty when '0' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_act_fixed_smexxx_long preserving type )` |
| `StstclKeyFigIntmdPlanFixedQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '1' then ( case P_FinStatisticalKeyFigureItem.rrcty when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_pln_fixed_smexxx_long preserving type )` |
| `StstclKeyFigIntmdActlSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then ( case P_FinStatisticalKeyFigureItem.rrcty when '0' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_act_sum_smexxx_long preserving type )` |
| `StstclKeyFigIntmdPlanSumQty` | `} cast( case P_FinStatisticalKeyFigureItem.grtyp when '2' then ( case P_FinStatisticalKeyFigureItem.rrcty when '1' then P_FinStatisticalKeyFigureItem.msl else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end ) else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long ) end as fis_pln_sum_smexxx_long preserving type )` |
| `GLRecordType` | `P_FinStatisticalKeyFigureItem.rrcty` |
| `PlanningCategory` | `P_FinStatisticalKeyFigureItem.category` |
| `CostCenter` | `P_FinStatisticalKeyFigureItem.rcntr` |
| `ProfitCenter` | `P_FinStatisticalKeyFigureItem.prctr` |
| `FunctionalArea` | `P_FinStatisticalKeyFigureItem.rfarea` |
| `BusinessArea` | `P_FinStatisticalKeyFigureItem.rbusa` |
| `ControllingArea` | `P_FinStatisticalKeyFigureItem.kokrs` |
| `Segment` | `P_FinStatisticalKeyFigureItem.segment` |
| `ControllingBusTransacType` | `P_FinStatisticalKeyFigureItem.vorgn` |
| `AccountAssignmentType` | `P_FinStatisticalKeyFigureItem.accasty` |
| `ControllingObject` | `P_FinStatisticalKeyFigureItem.objnr` |
| `ControllingObjectClass` | `P_FinStatisticalKeyFigureItem.scope` |
| `OrderID` | `P_FinStatisticalKeyFigureItem.aufnr` |
| `OrderCategory` | `P_FinStatisticalKeyFigureItem.autyp` |
| `WBSElement` | `cast( P_FinStatisticalKeyFigureItem.ps_posid as fis_wbs preserving type )` |
| `WBSElementExternalID` | `P_FinStatisticalKeyFigureItem.WBSElementExternalID` |
| `Fund` | `P_FinStatisticalKeyFigureItem.rfund` |
| `GrantID` | `P_FinStatisticalKeyFigureItem.rgrant_nbr` |
| `BudgetPeriod` | `P_FinStatisticalKeyFigureItem.rbudget_pd` |
| `SalesOrder` | `P_FinStatisticalKeyFigureItem.kdauf` |
| `SalesOrderItem` | `P_FinStatisticalKeyFigureItem.kdpos` |
| `CostCtrActivityType` | `P_FinStatisticalKeyFigureItem.lstar` |
| `ServiceDocumentType` | `P_FinStatisticalKeyFigureItem.service_doc_type` |
| `ServiceDocument` | `P_FinStatisticalKeyFigureItem.service_doc_id` |
| `ServiceDocumentItem` | `P_FinStatisticalKeyFigureItem.service_doc_item_id` |
| `_ControllingArea` | *Association* |
| `_Ledger` | *Association* |
| `_CompanyCode` | *Association* |
| `_LedgerCompanyCodeVH` | *Association* |
| `_CostCenter` | *Association* |
| `_ProfitCenter` | *Association* |
| `_StatisticalKeyFigure` | *Association* |
| `_StatisticalKeyFigureCat` | *Association* |
| `_FiscalYearVariant` | *Association* |
| `_FiscalYear` | *Association* |
| `_FiscalPeriod` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Segment` | *Association* |
| `_FunctionalArea` | *Association* |
| `_BusinessArea` | *Association* |
| `_Order` | *Association* |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_ControllingObject` | *Association* |
| `_BudgetPeriod` | *Association* |
| `_PlanningCategory` | *Association* |
| `_WBSElementExternalID` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_LedgerCompanyCodeVH` | `I_LedgerCoCode` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_StatisticalKeyFigure` | `I_StatisticalKeyFigure` | [1] |
| `_StatisticalKeyFigureCat` | `I_StatisticalKeyFigureCat` | [1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriod` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_ControllingObject` | `I_ControllingObject` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Statistical Keyfigures per period'
//@ObjectModel.representativeKey: 'FiscalPeriod'
@ObjectModel.representativeKey: 'StatisticalKeyFigureItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIFINSSKFPER'
@Analytics.internalName: #LOCAL 
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, 
//                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     

define view entity I_FinStatisticalKeyFigureItem as select from P_FinStatisticalKeyFigureItem 

association[1]    to I_ControllingArea           as _ControllingArea         on $projection.ControllingArea              = _ControllingArea.ControllingArea

association[1..1] to I_Ledger                    as _Ledger                  on $projection.Ledger                       = _Ledger.Ledger

association[0..1] to I_CompanyCode               as _CompanyCode             on $projection.CompanyCode                  = _CompanyCode.CompanyCode

association[0..1] to I_LedgerCoCode              as _LedgerCompanyCodeVH     on $projection.Ledger                       = _LedgerCompanyCodeVH.Ledger and
                                                                                $projection.CompanyCode                  = _LedgerCompanyCodeVH.CompanyCode

association[0..*] to I_CostCenter                as _CostCenter              on $projection.ControllingArea              = _CostCenter.ControllingArea and  
                                                                                $projection.CostCenter                   = _CostCenter.CostCenter
                                                                                
association[0..*] to I_ProfitCenter              as _ProfitCenter            on $projection.ControllingArea              = _ProfitCenter.ControllingArea and
                                                                                $projection.ProfitCenter                 = _ProfitCenter.ProfitCenter

association[1]    to I_StatisticalKeyFigure      as _StatisticalKeyFigure    on $projection.ControllingArea              = _StatisticalKeyFigure.ControllingArea and  
                                                                                $projection.StatisticalKeyFigure         = _StatisticalKeyFigure.StatisticalKeyFigure                                                                                                                                                                

association[1]    to I_StatisticalKeyFigureCat   as _StatisticalKeyFigureCat on $projection.StatisticalKeyFigureCategory = _StatisticalKeyFigureCat.StstcKeyFigCategory

association[1..1] to I_FiscalYearVariant         as _FiscalYearVariant       on $projection.FiscalYearVariant            = _FiscalYearVariant.FiscalYearVariant

association[0..1] to I_FiscalYear                as _FiscalYear              on $projection.FiscalYearVariant            = _FiscalYear.FiscalYearVariant and
                                                                                $projection.FiscalYear                   = _FiscalYear.FiscalYear
                                                                                
association[0..1] to I_FiscalYearPeriod          as _FiscalPeriod            on $projection.FiscalYearVariant            = _FiscalPeriod.FiscalYearVariant and
                                                                                $projection.FiscalYear                   = _FiscalPeriod.FiscalYear and
                                                                                $projection.FiscalPeriod                 = _FiscalPeriod.FiscalPeriod                                                                                

association[1]    to I_UnitOfMeasure             as _UnitOfMeasure           on $projection.StatisticalKeyFigQtyUnit     = _UnitOfMeasure.UnitOfMeasure
                                                                                
                                                                                
association[0..1] to I_Segment                   as _Segment                 on $projection.Segment                      = _Segment.Segment                                                                                
                                                                              
association[0..1] to I_FunctionalArea            as _FunctionalArea          on $projection.FunctionalArea               = _FunctionalArea.FunctionalArea   

association[0..1] to I_BusinessArea              as _BusinessArea            on $projection.BusinessArea                 = _BusinessArea.BusinessArea

association[0..1] to I_Order                     as _Order                   on $projection.OrderID                      = _Order.OrderID

association[0..1] to I_SalesDocument             as _SalesDocument           on $projection.SalesOrder                   = _SalesDocument.SalesDocument

association[0..1] to I_SalesDocumentItem         as _SalesDocumentItem       on $projection.SalesOrder                   = _SalesDocumentItem.SalesDocument and  
                                                                                $projection.SalesOrderItem               = _SalesDocumentItem.SalesDocumentItem
                                                                                
association[0..1] to I_ControllingObject         as _ControllingObject       on $projection.ControllingObject            = _ControllingObject.ControllingObject    

association[0..1] to I_BudgetPeriod              as _BudgetPeriod            on $projection.BudgetPeriod                 = _BudgetPeriod.BudgetPeriod   
                                                                                
//association[0..1] to I_BusinessProcess           as _BusinessProcess         on $projection.ControllingArea              = _BusinessProcess.ControllingArea and                                                                                        
//                                                                                $projection.businessprocess              = _BusinessProcess.BusinessProcess                                                                                 

association[0..1] to I_PlanningCategory          as _PlanningCategory        on $projection.PlanningCategory             = _PlanningCategory.PlanningCategory

association [0..1] to I_WBSElementByExternalID   as _WBSElementExternalID    on $projection.WBSElementExternalID         = _WBSElementExternalID.WBSElementExternalID

{
@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
@ObjectModel.foreignKey.association: '_Ledger'
key P_FinStatisticalKeyFigureItem.rldnr as Ledger,


@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
//@Consumption.valueHelpDefinition: [{ entity: { name: 'I_LedgerCompanyCodeVH' , element: 'CompanyCode' },    
//                                     additionalBinding: [ { localElement: 'Ledger' , element: 'Ledger' } ]                                     
//                                  }]           
//@Consumption.valueHelp: '_LedgerCompanyCodeVH'
@ObjectModel.foreignKey.association: '_CompanyCode' 
key P_FinStatisticalKeyFigureItem.rbukrs as CompanyCode, 

@ObjectModel.foreignKey.association: '_StatisticalKeyFigure'                
key P_FinStatisticalKeyFigureItem.stagr as StatisticalKeyFigure,
 
///////////////////////////////////////////////////////////////////////////////////
// Attention !!!
// The following field is the LedgerFiscalYear (depends on ledger + company code) 
// Unfortunately we have called it FiscalYear (because the semantic seems to be clear)
// Because of compatibility reasons we can not change it anymore
//
// This view has no FiscalYear (depends on company code)
//
// if you use this view in your views on top please write:  FiscalYear as LedgerFiscalYear 
// then you can make a join or union with the field from ACDOCA: LedgerFiscalYear (please ignore in this case the FiscalYear from ACDOCA) 
/////////////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FiscalYear'
key P_FinStatisticalKeyFigureItem.RYEAR as FiscalYear, 

@ObjectModel.foreignKey.association: '_FiscalPeriod'
key P_FinStatisticalKeyFigureItem.poper as FiscalPeriod,

key P_FinStatisticalKeyFigureItem.recid as StatisticalKeyFigureItem,


P_FinStatisticalKeyFigureItem.FISCYEARPER as FiscalYearPeriod, 

@ObjectModel.foreignKey.association: '_FiscalYearVariant'
P_FinStatisticalKeyFigureItem.periv as FiscalYearVariant,
 
P_FinStatisticalKeyFigureItem.IsSpecialPeriod as IsSpecialPeriod,
           
// P_FinStatisticalKeyFigureItem.date_from as ValidityStartDate,

@ObjectModel.foreignKey.association: '_StatisticalKeyFigureCat'                                   
P_FinStatisticalKeyFigureItem.grtyp as StatisticalKeyFigureCategory,

@ObjectModel.foreignKey.association: '_UnitOfMeasure' 
P_FinStatisticalKeyFigureItem.runit as StatisticalKeyFigQtyUnit,

//-----------------------------------------------------------------------------------
// Quantity

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} } 
cast( P_FinStatisticalKeyFigureItem.msl as fis_smexxx_long ) as StatisticalKeyFigureQuantity, 

//-----------------------------------------------------------------------------------
// Fixed/Sum Quantity

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long  )
end as fis_fixed_smexxx_long  preserving type ) as StatisticalKeyFigFixedQty,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_sum_smexxx_long  preserving type ) as StatisticalKeyFigSumQty,

//-----------------------------------------------------------------------------------
// Actual/Plan Quantity

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.rrcty 
when '0' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long  )
end as fis_act_smexxx_long  preserving type ) as StatisticalKeyFigureActlQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.rrcty 
when '1' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long  )
end as fis_pln_smexxx_long  preserving type ) as StatisticalKeyFigurePlanQty,

//-----------------------------------------------------------------------------------
// Fixed/Sum Actual/Plan Quantity

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '0' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_act_fixed_smexxx_long  preserving type ) as StatisticalKeyFigActlFixedQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '1' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_pln_fixed_smexxx_long  preserving type ) as StatisticalKeyFigPlanFixedQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '0' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_act_sum_smexxx_long  preserving type ) as StatisticalKeyFigActlSumQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '1' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_pln_sum_smexxx_long  preserving type ) as StatisticalKeyFigPlanSumQty,

//-----------------------------------------------------------------------------------
// Intermediate Quantities (copies of quantities) : this will be used in C-View (Query) for calculation
// you will not need these Intermediate Quantities , if you waork on I-View 

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long  )
end as fis_fixed_smexxx_long  preserving type ) as IntmdStatisticalKeyFigFixedQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then P_FinStatisticalKeyFigureItem.msl             
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_sum_smexxx_long  preserving type ) as IntmdStatisticalKeyFigSumQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '0' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_act_fixed_smexxx_long  preserving type ) as StstclKeyFigIntmdActlFixedQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '1' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '1' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_pln_fixed_smexxx_long  preserving type ) as StstclKeyFigIntmdPlanFixedQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '0' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_act_sum_smexxx_long  preserving type ) as StstclKeyFigIntmdActlSumQty,


@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
cast(
case P_FinStatisticalKeyFigureItem.grtyp 
when '2' then 
( case P_FinStatisticalKeyFigureItem.rrcty
  when '1' then P_FinStatisticalKeyFigureItem.msl  
  else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
  end
)  
else cast( cast(0 as abap.quan(23,3)) as fis_smexxx_long )
end as fis_pln_sum_smexxx_long  preserving type ) as StstclKeyFigIntmdPlanSumQty,

//-----------------------------------------------------------------------------------

P_FinStatisticalKeyFigureItem.rrcty as GLRecordType,                                       

@ObjectModel.foreignKey.association: '_PlanningCategory'
P_FinStatisticalKeyFigureItem.category as PlanningCategory,

@ObjectModel.foreignKey.association: '_CostCenter'                       
P_FinStatisticalKeyFigureItem.rcntr as CostCenter,

@ObjectModel.foreignKey.association: '_ProfitCenter' 
P_FinStatisticalKeyFigureItem.prctr as ProfitCenter,
 
@ObjectModel.foreignKey.association: '_FunctionalArea' 
P_FinStatisticalKeyFigureItem.rfarea as FunctionalArea,

@ObjectModel.foreignKey.association: '_BusinessArea' 
P_FinStatisticalKeyFigureItem.rbusa as BusinessArea,

@ObjectModel.foreignKey.association: '_ControllingArea'              
P_FinStatisticalKeyFigureItem.kokrs as ControllingArea,

@ObjectModel.foreignKey.association: '_Segment' 
P_FinStatisticalKeyFigureItem.segment as Segment,
 
P_FinStatisticalKeyFigureItem.vorgn as ControllingBusTransacType,

P_FinStatisticalKeyFigureItem.accasty as AccountAssignmentType,
 
// P_FinStatisticalKeyFigureItem.logsys as LogicalSystem,                      

P_FinStatisticalKeyFigureItem.objnr as ControllingObject,
  
// P_FinStatisticalKeyFigureItem.hrkft as ControllingKeySubNumber,                          

P_FinStatisticalKeyFigureItem.scope as ControllingObjectClass,
 
@ObjectModel.foreignKey.association: '_Order'  
P_FinStatisticalKeyFigureItem.aufnr as OrderID,
 
P_FinStatisticalKeyFigureItem.autyp as OrderCategory,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'     
cast( P_FinStatisticalKeyFigureItem.ps_posid as fis_wbs preserving type ) as WBSElement,   //because of compatibility to old version with DOMA exit

@ObjectModel.foreignKey.association: '_WBSElementExternalID'               
P_FinStatisticalKeyFigureItem.WBSElementExternalID,  
 
//P_FinStatisticalKeyFigureItem.ps_prj_pnr as ProjectInternalID,        // not filled   
// 
//P_FinStatisticalKeyFigureItem.ps_pspid as Project,                   // not filled
 
//P_FinStatisticalKeyFigureItem.nplnr as ProjectNetwork,                // not filled   
// 
//P_FinStatisticalKeyFigureItem.nplnr_vorgn as RelatedNetworkActivity,  // not filled
// 
//P_FinStatisticalKeyFigureItem.prznr as BusinessProcess,               // not in cloud
// 
//P_FinStatisticalKeyFigureItem.kstrg as CostObject,                    // not in cloud
 
P_FinStatisticalKeyFigureItem.rfund as Fund,
 
P_FinStatisticalKeyFigureItem.rgrant_nbr as GrantID,

@ObjectModel.foreignKey.association: '_BudgetPeriod' 
P_FinStatisticalKeyFigureItem.rbudget_pd as BudgetPeriod,

@ObjectModel.foreignKey.association: '_SalesDocument' 
P_FinStatisticalKeyFigureItem.kdauf as SalesOrder,

@ObjectModel.foreignKey.association: '_SalesDocumentItem' 
P_FinStatisticalKeyFigureItem.kdpos as SalesOrderItem,
 
P_FinStatisticalKeyFigureItem.lstar as CostCtrActivityType,

P_FinStatisticalKeyFigureItem.service_doc_type     as ServiceDocumentType,

P_FinStatisticalKeyFigureItem.service_doc_id       as ServiceDocument,

P_FinStatisticalKeyFigureItem.service_doc_item_id  as ServiceDocumentItem,


_ControllingArea,
_Ledger,
_CompanyCode,
_LedgerCompanyCodeVH,
_CostCenter,
_ProfitCenter,
_StatisticalKeyFigure,
_StatisticalKeyFigureCat,
_FiscalYear,
_FiscalPeriod,
_FiscalYearVariant,
_UnitOfMeasure,
_Segment,
_FunctionalArea,
_BusinessArea,
_Order,
_SalesDocument,
_SalesDocumentItem,
_ControllingObject,
_BudgetPeriod,
_PlanningCategory,
_WBSElementExternalID

}
```
