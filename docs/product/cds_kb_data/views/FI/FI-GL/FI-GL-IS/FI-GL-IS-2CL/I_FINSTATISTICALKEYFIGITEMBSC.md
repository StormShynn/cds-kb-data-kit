---
name: I_FINSTATISTICALKEYFIGITEMBSC
description: "Finstatisticalkeyfigitembsc"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_FINSTATISTICALKEYFIGITEMBSC

**Finstatisticalkeyfigitembsc**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatisticalKeyFigure` | ✓ | |  | `stagr` |  |  |
| `StatisticalKeyFigureItem` | ✓ | |  | `recid` |  |  |
| `ValidityStartDate` | ✓ | |  | `date_from` |  |  |
| `StatisticalKeyFigureCategory` |  | |  | `grtyp` |  |  |
| `StatisticalKeyFigQtyUnit` |  | |  | `runit` |  |  |
| `StatisticalKeyFigureQuantity` |  | |  | `msl` |  |  |
| `LastChangeDateTime` |  | |  | `timestamp` |  |  |
| `CompanyCode` |  | |  | `rbukrs` |  |  |
| `GLRecordType` |  | |  | `rrcty` |  |  |
| `PlanningCategory` |  | |  | `category` |  |  |
| `CostCenter` |  | |  | `rcntr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `FunctionalArea` |  | |  | `rfarea` |  |  |
| `BusinessArea` |  | |  | `rbusa` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `ControllingBusTransacType` |  | |  | `vorgn` |  |  |
| `AccountAssignmentType` |  | |  | `accasty` |  |  |
| `LogicalSystem` |  | |  | `logsys` |  |  |
| `ControllingObject` |  | |  | `objnr` |  |  |
| `ControllingKeySubNumber` |  | |  | `hrkft` |  |  |
| `ControllingObjectClass` |  | |  | `scope` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `OrderCategory` |  | |  | `autyp` |  |  |
| `WBSElementInternalID` |  | |  | `ps_psp_pnr` |  |  |
| `WBSElement` |  | |  | `ps_posid` |  |  |
| `ProjectInternalID` |  | |  | `ps_prj_pnr` |  |  |
| `Project` |  | |  | `ps_pspid` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `Fund` |  | |  | `rfund` |  |  |
| `GrantID` |  | |  | `rgrant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `rbudget_pd` |  |  |
| `SalesDocument` |  | |  | `kdauf` |  |  |
| `SalesDocumentItem` |  | |  | `kdpos` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `ServiceDocumentType` |  | |  | `service_doc_type` |  |  |
| `ServiceDocument` |  | |  | `service_doc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |  |  |
| `_FiscalCalYearPeriodForLedger` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_StatisticalKeyFigure` | | ✓ | | | | |
| `_StatisticalKeyFigureCat` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_ControllingObject` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalCalYearPeriodForLedger` | `I_FiscalCalYearPeriodForLedger` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_StatisticalKeyFigure` | `I_StatisticalKeyFigure` | [1] |
| `_StatisticalKeyFigureCat` | `I_StatisticalKeyFigureCat` | [1] |
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
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions:true 
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Statistical Keyfigure Items'
@VDM.viewType: #BASIC
//@ObjectModel.representativeKey: 'StatisticalKeyFigureItem'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A   
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE

@Analytics: {
      technicalName: 'IFIFINSSKF',
      dataCategory: #CUBE,
      internalName: #LOCAL,
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                table: 'FINSSKF',
                role: #MAIN,
                viewElement: ['StatisticalKeyFigure', 'StatisticalKeyFigureItem', 'ValidityStartDate'],
                tableElement: ['stagr', 'recid', 'date_from']
              }
            ]
         }
      }
    }
    
@ObjectModel.sapObjectNodeType.name: 'FinStatisticalKeyFigureItem'     

@Metadata.ignorePropagatedAnnotations: true
define view entity I_FinStatisticalKeyFigItemBsc as select from P_Finsskf as P_Finsskf

association[0..*] to I_FiscalCalYearPeriodForLedger as _FiscalCalYearPeriodForLedger  
                                   on  _FiscalCalYearPeriodForLedger.CompanyCode = P_Finsskf.rbukrs
                                   and (   ( P_Finsskf.grtyp = '1' and  
                                             P_Finsskf.date_from > _FiscalCalYearPeriodForLedger.FiscalPeriodEndDate )
                                        or ( P_Finsskf.grtyp = '2' and  
                                             P_Finsskf.date_from >= _FiscalCalYearPeriodForLedger.FiscalPeriodStartDate and
                                             P_Finsskf.date_from <= _FiscalCalYearPeriodForLedger.FiscalPeriodEndDate )
                                       )  

association[1]    to I_ControllingArea           as _ControllingArea         on $projection.ControllingArea              = _ControllingArea.ControllingArea

association[0..1] to I_CompanyCode               as _CompanyCode             on $projection.CompanyCode                  = _CompanyCode.CompanyCode

association[0..*] to I_CostCenter                as _CostCenter              on $projection.ControllingArea              = _CostCenter.ControllingArea and  
                                                                                $projection.CostCenter                   = _CostCenter.CostCenter
                                                                                
association[0..*] to I_ProfitCenter              as _ProfitCenter            on $projection.ControllingArea              = _ProfitCenter.ControllingArea and
                                                                                $projection.ProfitCenter                 = _ProfitCenter.ProfitCenter

association[1]    to I_StatisticalKeyFigure      as _StatisticalKeyFigure    on $projection.ControllingArea              = _StatisticalKeyFigure.ControllingArea and  
                                                                                $projection.StatisticalKeyFigure         = _StatisticalKeyFigure.StatisticalKeyFigure                                                                                                                                                                

association[1]    to I_StatisticalKeyFigureCat   as _StatisticalKeyFigureCat on $projection.StatisticalKeyFigureCategory = _StatisticalKeyFigureCat.StstcKeyFigCategory

association[1]    to I_UnitOfMeasure             as _UnitOfMeasure           on $projection.StatisticalKeyFigQtyUnit     = _UnitOfMeasure.UnitOfMeasure
                                                                                                                                                                
association[0..1] to I_Segment                   as _Segment                 on $projection.Segment                      = _Segment.Segment                                                                                
                                                                              
association[0..1] to I_FunctionalArea            as _FunctionalArea          on $projection.FunctionalArea               = _FunctionalArea.FunctionalArea   

association[0..1] to I_BusinessArea              as _BusinessArea            on $projection.BusinessArea                 = _BusinessArea.BusinessArea

association[0..1] to I_Order                     as _Order                   on $projection.OrderID                      = _Order.OrderID

association[0..1] to I_SalesDocument             as _SalesDocument           on $projection.SalesDocument                = _SalesDocument.SalesDocument

association[0..1] to I_SalesDocumentItem         as _SalesDocumentItem       on $projection.SalesDocument                = _SalesDocumentItem.SalesDocument and  
                                                                                $projection.SalesDocumentItem            = _SalesDocumentItem.SalesDocumentItem
                                                                                
association[0..1] to I_ControllingObject         as _ControllingObject       on $projection.ControllingObject            = _ControllingObject.ControllingObject    

association[0..1] to I_BudgetPeriod              as _BudgetPeriod            on $projection.BudgetPeriod                 = _BudgetPeriod.BudgetPeriod                                                                                                                                                                

association[0..1] to I_PlanningCategory          as _PlanningCategory        on $projection.PlanningCategory             = _PlanningCategory.PlanningCategory

association[0..1] to I_ProjectBasicData          as _ProjectBasicData        on  $projection.ProjectInternalID           = _ProjectBasicData.ProjectInternalID

association[0..1] to I_WBSElementBasicData       as _WBSElementBasicData     on  $projection.WBSElementInternalID        = _WBSElementBasicData.WBSElementInternalID

association[0..1] to I_ServiceDocumentType       as _ServiceDocumentType     on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

association[0..1] to I_SrvcDocByDocumentType     as _ServiceDocument         on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                             and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

association[0..1] to I_SrvcDocItemByDocumentType as _ServiceDocumentItem     on  $projection.ServiceDocumentType = _ServiceDocumentItem.ServiceDocumentType
                                                                             and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                             and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem

{
key P_Finsskf.stagr as StatisticalKeyFigure, 
key P_Finsskf.recid as StatisticalKeyFigureItem, 
key P_Finsskf.date_from as ValidityStartDate,

 
P_Finsskf.grtyp as StatisticalKeyFigureCategory,
@ObjectModel.foreignKey.association: '_UnitOfMeasure' 
P_Finsskf.runit as StatisticalKeyFigQtyUnit,  
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
P_Finsskf.msl as StatisticalKeyFigureQuantity, 
P_Finsskf.timestamp as LastChangeDateTime, 
P_Finsskf.rbukrs as CompanyCode, 
P_Finsskf.rrcty as GLRecordType, 
P_Finsskf.category as PlanningCategory, 
P_Finsskf.rcntr as CostCenter, 
P_Finsskf.prctr as ProfitCenter, 
P_Finsskf.rfarea as FunctionalArea, 
P_Finsskf.rbusa as BusinessArea, 
P_Finsskf.kokrs as ControllingArea, 
P_Finsskf.segment as Segment, 
P_Finsskf.vorgn as ControllingBusTransacType, 
P_Finsskf.accasty as AccountAssignmentType, 
P_Finsskf.logsys as LogicalSystem, 
P_Finsskf.objnr as ControllingObject, 
P_Finsskf.hrkft as ControllingKeySubNumber, 
P_Finsskf.scope as ControllingObjectClass, 
P_Finsskf.aufnr as OrderID, 
P_Finsskf.autyp as OrderCategory, 
P_Finsskf.ps_psp_pnr as WBSElementInternalID, 
P_Finsskf.ps_posid as WBSElement,                         // 3.4.24 without DOMA-EXIT ; without #DEPRECATED
P_Finsskf.ps_prj_pnr as ProjectInternalID, 
P_Finsskf.ps_pspid as Project,                            // 3.4.24 without DOMA-EXIT ; without #DEPRECATED
// P_Finsskf.nplnr as ProjectNetwork,                     // not used in Cloud 
// P_Finsskf.nplnr_vorgn as RelatedNetworkActivity,       // not used in Cloud   
// P_Finsskf.prznr as BusinessProcess,                    // not used in Cloud 
P_Finsskf.kstrg as CostObject, 
P_Finsskf.rfund as Fund, 
P_Finsskf.rgrant_nbr as GrantID, 
P_Finsskf.rbudget_pd as BudgetPeriod, 
P_Finsskf.kdauf as SalesDocument, 
P_Finsskf.kdpos as SalesDocumentItem, 
P_Finsskf.lstar as CostCtrActivityType,
P_Finsskf.service_doc_type as ServiceDocumentType,
P_Finsskf.service_doc_id as ServiceDocument,
P_Finsskf.service_doc_item_id as ServiceDocumentItem,

_FiscalCalYearPeriodForLedger,
_ControllingArea,
_CompanyCode,
_CostCenter,                                                                                           
_ProfitCenter,
_StatisticalKeyFigure,
_StatisticalKeyFigureCat,
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
_ProjectBasicData,
_WBSElementBasicData,
_ServiceDocumentType,
_ServiceDocument,
_ServiceDocumentItem

}
```
