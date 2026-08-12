---
name: I_REPETITIVEMFGCONFIRMATION
description: "Repetitivemfgconfirmation"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_REPETITIVEMFGCONFIRMATION

**Repetitivemfgconfirmation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RepetitiveMfgConfirmation` | ✓ | |  |  |  |  |
| `RepetitiveMfgConfirmationItem` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `EnteredByUser` |  | |  |  |  |  |
| `RepetitiveMfgConfirmationText` |  | |  |  |  |  |
| `RepetitiveMfgConfScenario` |  | |  |  |  |  |
| `RptvMfgConfProcessingType` |  | |  |  |  |  |
| `RptvMfgConfReversedCode` |  | |  |  |  |  |
| `RptvMfgConfPostingDate` |  | |  |  |  |  |
| `PostingDateYear` |  | |  |  |  |  |
| `RptvMfgConfDocumentDate` |  | |  |  |  |  |
| `BOMExplosionDate` |  | |  |  |  |  |
| `ConfHasRefToPlannedOrder` |  | |  |  |  |  |
| `BackflushReportingPoint` |  | |  |  |  |  |
| `ReportingPointOperation` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `ReceivingStorageLocation` |  | |  |  |  |  |
| `ReceivingBatch` |  | |  |  |  |  |
| `ProductionLine` |  | |  |  |  |  |
| `RepetitiveMfgPlanningGroup` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `ProductionLot` |  | |  |  |  |  |
| `ProductionLotInternalID` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `KanbanControlCycle` |  | |  |  |  |  |
| `KanbanControlCycleItem` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  | `cast(case when conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].MaterialDocument <> '' then conf.PostingDateYear when conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].MaterialDocument = '' then '' end as nsdm_mjahr)` |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `MaterialRevisionLevel_2` |  | |  |  |  |  |
| `PlantDataCollectionID` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `RptvMfgConfEntryQuantity` |  | |  |  |  |  |
| `ScrapQuantityInEntryUnit` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `QuantityIsRelevantForRework` |  | |  |  |  |  |
| `ConfFailureCostsReason` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PlanningPlant` | | ✓ | | | | |
| `_ProductSupplyPlanning` | | ✓ | | | | |
| `_ProductionVersion` | | ✓ | | | | |
| `_ProductionVersionBasic` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_Batch2` | | ✓ | | | | |
| `_ProductionLine` | | ✓ | | | | |
| `_PlanningGroup` | | ✓ | | | | |
| `_PlannedOrder` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_ProductionLot` | | ✓ | | | | |
| `_ProductionLot2` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_KanbanControlCycleItem` | | ✓ | | | | |
| `_MaterialDocument` | | ✓ | | | | |
| `_MaterialDocument2` | | ✓ | | | | |
| `_MaterialDocumentYear` | | ✓ | | | | |
| `_VarianceReason` | | ✓ | | | | |
| `_DocumentDate` | | ✓ | | | | |
| `_BOMExplosionDate` | | ✓ | | | | |
| `_PostingDate` | | ✓ | | | | |
| `_PostingDateYear` | | ✓ | | | | |
| `_RepetitiveMfgScenario` | | ✓ | | | | |
| `_RptvMfgConfProcessingType` | | ✓ | | | | |
| `_RptvMfgConfRevesalType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PlanningPlant` | `I_Plant` | [0..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_ProductionVersionBasic` | `I_ProductionVersionBasic` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..*] |
| `_Batch2` | `I_Batch` | [0..1] |
| `_ProductionLine` | `I_ProductionLine` | [0..1] |
| `_PlanningGroup` | `I_RepetitiveMfgPlanningGroup` | [0..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_ProductionLot` | `I_WBSElementBasicData` | [0..1] |
| `_ProductionLot2` | `I_WBSElementBasicData` | [0..1] |
| `_Reservation` | `I_ReservationDocumentHeader` | [0..1] |
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [0..1] |
| `_KanbanControlCycleItem` | `I_KanbanControlCycleItem` | [0..1] |
| `_MaterialDocument` | `I_MaterialDocumentHeader` | [1..1] |
| `_MaterialDocument2` | `I_MaterialDocumentHeader_2` | [1..1] |
| `_MaterialDocumentYear` | `I_MaterialDocumentYear` | [1..1] |
| `_VarianceReason` | `I_VarianceReason` | [0..1] |
| `_DocumentDate` | `I_CalendarDate` | [0..1] |
| `_BOMExplosionDate` | `I_CalendarDate` | [0..1] |
| `_PostingDate` | `I_CalendarDate` | [1..1] |
| `_PostingDateYear` | `I_CalendarYear` | [1..1] |
| `_RepetitiveMfgScenario` | `I_RepetitiveMfgScenario` | [1..1] |
| `_RptvMfgConfProcessingType` | `I_RptvMfgConfProcessingType` | [1..1] |
| `_RptvMfgConfRevesalType` | `I_RptvMfgConfReversalType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPREMCONF'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_EnteredByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'blpk',
                                          tableElement: ['prtnr'],
                                          viewElement:  ['RepetitiveMfgConfirmation']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'blpp',
                                          tableElement: ['prtnr'                    , 'prtps'],
                                          viewElement:  ['RepetitiveMfgConfirmation', 'RepetitiveMfgConfirmationItem']
                                        },    
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,               // RMIO obsolete but kept for compatibility
                                          table: 'rmio',
                                          tableElement: ['prtnr'],
                                          viewElement:  ['RepetitiveMfgConfirmation']
//                                        },                                                                            
//                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
//                                          table: 'CEZP',
//                                          tableElement: ['REFBN'],
//                                          viewElement:  ['RepetitiveMfgConfirmation']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'RepetitiveMfgConfirmation'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'RepetitiveMfgConfirmation'
@ObjectModel.semanticKey: ['RepetitiveMfgConfirmation']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Repetitive Manufacturing Confirmation'

define view I_RepetitiveMfgConfirmation
  as select from           I_RepetitiveMfgConfBasic as conf
//    left outer to one join I_RepetitiveMfgConfItem  as item on  item.RepetitiveMfgConfirmation     = conf.RepetitiveMfgConfirmation
//                                                            and item.RepetitiveMfgConfirmationItem = '0001'

  association [0..1] to I_Product                    as _Product                   on  $projection.Product = _Product.Product
  association [1..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Plant                      as _PlanningPlant             on  $projection.PlanningPlant = _PlanningPlant.Plant
  association [0..1] to I_ProductSupplyPlanning      as _ProductSupplyPlanning     on  $projection.Product           = _ProductSupplyPlanning.Product
                                                                                   and $projection.Plant             = _ProductSupplyPlanning.Plant
  association [0..1] to I_ProductionVersion          as _ProductionVersion         on  $projection.Product           = _ProductionVersion.Material
                                                                                   and $projection.Plant             = _ProductionVersion.Plant
                                                                                   and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_ProductionVersionBasic     as _ProductionVersionBasic    on  $projection.Product           = _ProductionVersionBasic.Product
                                                                                   and $projection.Plant             = _ProductionVersionBasic.Plant
                                                                                   and $projection.ProductionVersion = _ProductionVersionBasic.ProductionVersion
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant                    = _StorageLocation.Plant
                                                                                   and $projection.ReceivingStorageLocation = _StorageLocation.StorageLocation
  association [0..*] to I_Batch                      as _Batch                     on  $projection.Product        = _Batch.Material  // DEPRICATED, use _Batch2 !
                                                                                   and $projection.ReceivingBatch = _Batch.Batch
  association [0..1] to I_Batch                      as _Batch2                    on  $projection.Plant          = _Batch2.Plant
                                                                                   and $projection.Product        = _Batch2.Material
                                                                                   and $projection.ReceivingBatch = _Batch2.Batch                                                                                   
  association [0..1] to I_ProductionLine             as _ProductionLine            on  $projection.Plant          = _ProductionLine.Plant
                                                                                   and $projection.ProductionLine = _ProductionLine.ProductionLine
  association [0..1] to I_RepetitiveMfgPlanningGroup as _PlanningGroup             on  $projection.Plant                       = _PlanningGroup.Plant
                                                                                   and $projection.RepetitiveMfgPlanningGroup  = _PlanningGroup.RepetitiveMfgPlanningGroup
  association [0..1] to I_PlannedOrder               as _PlannedOrder              on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
  association [0..1] to I_SalesOrder                 as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _ProductionLot             on  $projection.ProductionLot = _ProductionLot.WBSElementInternalID // DEPRICATED, use _ProductionLot2 !
  association [0..1] to I_WBSElementBasicData        as _ProductionLot2            on  $projection.ProductionLotInternalID = _ProductionLot2.WBSElementInternalID
  association [0..1] to I_ReservationDocumentHeader  as _Reservation               on  $projection.Reservation = _Reservation.Reservation
  association [0..1] to I_KanbanControlCycle         as _KanbanControlCycle        on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
  association [0..1] to I_KanbanControlCycleItem     as _KanbanControlCycleItem    on  $projection.KanbanControlCycle     = _KanbanControlCycleItem.KanbanControlCycle
                                                                                   and $projection.KanbanControlCycleItem = _KanbanControlCycleItem.KanbanControlCycleItem
  association [1..1] to I_MaterialDocumentHeader     as _MaterialDocument          on  $projection.materialdocument = _MaterialDocument.MaterialDocument // DEPRICATED, use _MaterialDocument2 !
                                                                                   and $projection.PostingDateYear  = _MaterialDocument.MaterialDocumentYear
  association [1..1] to I_MaterialDocumentHeader_2   as _MaterialDocument2         on  $projection.materialdocument     = _MaterialDocument2.MaterialDocument
                                                                                   and $projection.MaterialDocumentYear = _MaterialDocument2.MaterialDocumentYear
  association [1..1] to I_MaterialDocumentYear       as _MaterialDocumentYear      on  $projection.MaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [0..1] to I_VarianceReason             as _VarianceReason            on  $projection.Plant              = _VarianceReason.Plant
                                                                                   and $projection.VarianceReasonCode = _VarianceReason.VarianceReasonCode
  association [0..1] to I_CalendarDate               as _DocumentDate              on  $projection.RptvMfgConfDocumentDate = _DocumentDate.CalendarDate
  association [0..1] to I_CalendarDate               as _BOMExplosionDate          on  $projection.BOMExplosionDate = _BOMExplosionDate.CalendarDate
  association [1..1] to I_CalendarDate               as _PostingDate               on  $projection.RptvMfgConfPostingDate = _PostingDate.CalendarDate
  association [1..1] to I_CalendarYear               as _PostingDateYear           on  $projection.PostingDateYear = _PostingDateYear.CalendarYear
  association [1..1] to I_RepetitiveMfgScenario      as _RepetitiveMfgScenario     on  $projection.RepetitiveMfgConfScenario = _RepetitiveMfgScenario.RepetitiveMfgScenario
  association [1..1] to I_RptvMfgConfProcessingType  as _RptvMfgConfProcessingType on  $projection.RptvMfgConfProcessingType = _RptvMfgConfProcessingType.RptvMfgConfProcessingType
  association [0..1] to I_RptvMfgConfReversalType    as _RptvMfgConfRevesalType    on  $projection.RptvMfgConfReversedCode = _RptvMfgConfRevesalType.RptvMfgConfReversalType
{
      // Key
      @ObjectModel.text.element: ['RepetitiveMfgConfirmationText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key conf.RepetitiveMfgConfirmation,

      @Consumption.hidden: true  // is always 0001, needed for CDC extraction
      conf.RepetitiveMfgConfirmationItem,   

      // Admin
      @Semantics.systemDate.createdAt: true
      conf.CreationDate,
      @Semantics.systemTime.createdAt: true
      conf.CreationTime,
      @Semantics.user.createdBy: true
      conf.EnteredByUser,

      // Text
      @Semantics.text: true
      conf.RepetitiveMfgConfirmationText,

      // Attributes
      @ObjectModel.foreignKey.association: '_RepetitiveMfgScenario'
      conf.RepetitiveMfgConfScenario,
      @ObjectModel.foreignKey.association: '_RptvMfgConfProcessingType'
      conf.RptvMfgConfProcessingType,
      @ObjectModel.foreignKey.association: '_RptvMfgConfRevesalType'      
      conf.RptvMfgConfReversedCode,
      @Semantics.businessDate.at: true
      conf.RptvMfgConfPostingDate,
 --   @Semantics.calendar.year: true
      @ObjectModel.foreignKey.association: '_PostingDateYear'
      conf.PostingDateYear,
      @Semantics.businessDate.at: true
      conf.RptvMfgConfDocumentDate,
      conf.BOMExplosionDate, 
      conf.ConfHasRefToPlannedOrder,

      // Assignments
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ReportingPointOperation'
      conf.BackflushReportingPoint,
      conf.ReportingPointOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      conf.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      conf.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionBasicStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersionBasic'
      conf.ProductionVersion,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      conf.ReceivingStorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      conf.ReceivingBatch,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionLineStdVH', element: 'ProductionLine' } } ]
      @ObjectModel.foreignKey.association: '_ProductionLine'      
      conf.ProductionLine,
      @ObjectModel.foreignKey.association: '_PlanningGroup'      
      conf.RepetitiveMfgPlanningGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'      
      conf.PlannedOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      conf.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      conf.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductionLotInternalID'
      @ObjectModel.foreignKey.association: '_ProductionLot'
      conf.ProductionLot,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_ProductionLot2'
      conf.ProductionLotInternalID,
      @ObjectModel.foreignKey.association: '_Reservation'
      conf.Reservation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      conf.PlanningPlant,
      @ObjectModel.foreignKey.association: '_KanbanControlCycle'
      conf.KanbanControlCycle,
      @ObjectModel.foreignKey.association: '_KanbanControlCycleItem'      
      conf.KanbanControlCycleItem,
      @ObjectModel.foreignKey.association: '_MaterialDocument2'       
      conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].MaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
      cast(case
        when conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].MaterialDocument <> '' then conf.PostingDateYear
        when conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].MaterialDocument =  '' then '' 
      end as nsdm_mjahr) as MaterialDocumentYear,     
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      conf.MaterialRevisionLevel,
      conf.MaterialRevisionLevel_2,
      conf.PlantDataCollectionID,

      // HR data (custom include - OP only)
      conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].Personnel,
      conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].EmployeeWageType,
      conf._ConfirmationItem[RepetitiveMfgConfirmationItem = $projection.repetitivemfgconfirmationitem ].EmployeeWageGroup,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_EntryUnit'
      @Semantics.unitOfMeasure: true
      conf.EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      conf.RptvMfgConfEntryQuantity,
      @API.element.releaseState: #DEPRECATED             //the scrap qty is contained in RptvMfgConfEntryQuantity
      @API.element.successor: 'RptvMfgConfEntryQuantity' //and can be calculated separately in consuming views 
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      conf.ScrapQuantityInEntryUnit,        
      @ObjectModel.foreignKey.association: '_VarianceReason'
      conf.VarianceReasonCode,

      // Failure costs
      conf.QuantityIsRelevantForRework,
      conf.ConfFailureCostsReason,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      conf.CostCenter,

      // Associations
      _Product,
      _Plant,
      _PlanningPlant,
      _ProductSupplyPlanning,
      _ProductionVersion,
      _ProductionVersionBasic,
      _StorageLocation,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Batch2'
      _Batch,
      _Batch2,
      _ProductionLine,
      _PlanningGroup,
      _PlannedOrder,
      _SalesOrder,
      _SalesOrderItem,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_ProductionLot2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ProductionLot2' 
      _ProductionLot,
      _ProductionLot2,
      _Reservation,
      _KanbanControlCycle,
      _KanbanControlCycleItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocument2'
      _MaterialDocument,
      _MaterialDocument2,
      _MaterialDocumentYear,
      _VarianceReason,
      _BOMExplosionDate,
      _DocumentDate,
      _PostingDate,
      _PostingDateYear,
      _RepetitiveMfgScenario,
      _RptvMfgConfProcessingType,
      _RptvMfgConfRevesalType,
      conf._EnteredByUser,
      conf._EntryUnit
} where conf.RepetitiveMfgConfirmationItem = '0001'
```
