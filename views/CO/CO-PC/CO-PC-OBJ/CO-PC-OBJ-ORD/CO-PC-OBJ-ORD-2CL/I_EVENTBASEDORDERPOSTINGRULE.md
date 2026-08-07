---
name: I_EVENTBASEDORDERPOSTINGRULE
description: Eventbasedorderpostingrule
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDORDERPOSTINGRULE

**Eventbasedorderpostingrule**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventBasedDistrPostingRuleUUID` | ✓ | |  |  |
| `OrderID` |  | |  |  |
| `OrderItem` |  | |  |  |
| `EventBasedDistributionRuleSqnc` |  | |  |  |
| `CompanyCode` |  | | `_ManufacturingOrder` | `CompanyCode` |
| `ProductionPlant` |  | | `_ManufacturingOrder` | `ProductionPlant` |
| `EventBasedDistributionType` |  | |  |  |
| `EvtBsdDistrSourceStructure` |  | |  |  |
| `EvtBsdDistrSourceAssignment` |  | |  |  |
| `EventBasedDistrRateInPercent` |  | |  |  |
| `EvtBsdDistrEquivalenceFactor` |  | |  |  |
| `EventBasedDistributionDfltRule` |  | |  |  |
| `OrderCategory` |  | |  |  |
| `SalesOrder` |  | |  |  |
| `SalesOrderItem` |  | |  | `} ] SalesOrderItem` |
| `WBSElementInternalID` |  | |  | `} ] WBSElementInternalID` |
| `WBSElementExternalID` |  | |  | `} ] _WBSElementBasicData.WBSElementExternalID` |
| `PartnerControllingObjectType` |  | |  |  |
| `EvtBsdPostingRuleReceiver` |  | |  |  |
| `EvtBsdPostingRuleReceiverText` |  | |  |  |
| `EvtBsdDistrTracingFctrDetnMeth` |  | |  |  |
| `MfgOrdNonMatlRcvrAcctDetnMeth` |  | |  |  |
| `EnteredByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `RecentlyChangedDateTime` |  | |  |  |
| `MfgOrderHasMultipleItems` |  | | `_ManufacturingOrder` | `MfgOrderHasMultipleItems` |
| `ManufacturingOrderText` |  | | `_ManufacturingOrder` | `ManufacturingOrderText` |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` |
| `WBSDescription` |  | | `_WBSElementBasicData` | `WBSDescription` |
| `MfgOrdNonMatlRcvrDetnMethName` |  | | `_MfgOrdNonMatRcvrAcctDetnMeth` | `MfgOrdNonMatlRcvrDetnMethName` |
| `_ManufacturingOrder` | | ✓ | | |
| `_ManufacturingOrderItem` | | ✓ | | |
| `_OrderCategory` | | ✓ | | |
| `_OrderCategoryText` | | ✓ | | |
| `_SalesOrder` | | ✓ | | |
| `_SalesOrderItem` | | ✓ | | |
| `_WBSElementBasicData` | | ✓ | | |
| `_EnteredByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_MfgOrdNonMatRcvrAcctDetnMeth` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ManufacturingOrderItem` | `I_ManufacturingOrderItem` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [1..1] |
| `_OrderCategoryText` | `I_OrderCategoryText` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_EnteredByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_MfgOrdNonMatRcvrAcctDetnMeth` | `I_MfgOrdNonMatRcvrAcctDetnMeth` | [0..1] |

## Source Code

```abap
//@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_EnteredByUser', '_LastChangedByUser']
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Event-Based Mfg Order Posting Rule'

@Metadata.ignorePropagatedAnnotations: true
@VDM: {
   viewType: #COMPOSITE,
   lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  sapObjectNodeType.name:'EventBasedOrderPostingRule',
  representativeKey: 'EventBasedDistrPostingRuleUUID',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY],
  semanticKey: [ 'OrderID', 'OrderItem', 'EventBasedDistributionRuleSqnc' ],
  usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
     }
}
@Metadata.allowExtensions: true
@Search.searchable: true
@Analytics.dataExtraction.enabled:true
@Analytics.dataCategory:#DIMENSION
@Analytics.internalName: #LOCAL

define view entity I_EventBasedOrderPostingRule
  as select from P_EventBasedOrderPostingRule
  //association [1..1] to I_ControllingObject      as _ControllingObject      on  $projection.controllingobject = _ControllingObject.ControllingObject
  association [1..1] to I_ManufacturingOrder     as _ManufacturingOrder     on  $projection.OrderID = _ManufacturingOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderItem as _ManufacturingOrderItem on  $projection.OrderID                   = _ManufacturingOrderItem.ManufacturingOrder
                                                                            and (
                                                                               (
                                                                                     $projection.mfgorderhasmultipleitems = 'X'
                                                                                 and $projection.OrderItem                = _ManufacturingOrderItem.ManufacturingOrderItem
                                                                               )
                                                                               or(
                                                                                     $projection.mfgorderhasmultipleitems = ''
                                                                                 and $projection.OrderItem                = '0000'
                                                                               )
                                                                             )
  association [1..1] to I_OrderCategory          as _OrderCategory          on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..1] to I_OrderCategoryText      as _OrderCategoryText      on  $projection.OrderCategory = _OrderCategoryText.OrderCategory
                                                                            and _OrderCategoryText.Language = $session.system_language
  association [0..1] to I_SalesOrder             as _SalesOrder             on  $projection.SalesOrder     = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem         as _SalesOrderItem         on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                            and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData    as _WBSElementBasicData    on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  //association [0..1] to I_WBSElementBasicData    as _WBSElementBasicData    on  $projection.WBSElementExternalID = _WBSElementBasicData.WBSElementExternalID
  association [1..1] to I_User                   as _EnteredByUser          on  $projection.EnteredByUser = _EnteredByUser.UserID
  association [0..1] to I_User                   as _LastChangedByUser      on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_MfgOrdNonMatRcvrAcctDetnMeth as _MfgOrdNonMatRcvrAcctDetnMeth on  $projection.MfgOrdNonMatlRcvrAcctDetnMeth = _MfgOrdNonMatRcvrAcctDetnMeth.MfgOrdNonMatlRcvrAcctDetnMeth
{
      @Consumption.hidden: true
  key EventBasedDistrPostingRuleUUID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.text.element: ['ManufacturingOrderText']
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      OrderID,
      @ObjectModel.foreignKey.association: '_ManufacturingOrderItem'
      OrderItem,
      EventBasedDistributionRuleSqnc,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.text.association: '_ManufacturingOrder._CompanyCodeText'
      @ObjectModel.foreignKey.association: '_CompanyCodeText'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _ManufacturingOrder.CompanyCode     as CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.text.association: '_ManufacturingOrder._ProductionPlantText'
      @ObjectModel.foreignKey.association: '_ProductionPlantText'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _ManufacturingOrder.ProductionPlant as ProductionPlant,
      //SAPObjectNodeType,
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingObjectStdVH', element: 'ControllingObject' } } ]
      //@ObjectModel.foreignKey.association: '_ControllingObject'
      //@Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      //ControllingObject,
      //@Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      //ControllingObjectType,
      EventBasedDistributionType,
      EvtBsdDistrSourceStructure,
      EvtBsdDistrSourceAssignment,
      EventBasedDistrRateInPercent,
      EvtBsdDistrEquivalenceFactor,
      EventBasedDistributionDfltRule,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderCategory', element: 'OrderCategory' } } ]
      @ObjectModel.text.association: '_OrderCategoryText'
      @ObjectModel.foreignKey.association: '_OrderCategory'
      OrderCategory,
      //@Semantics.booleanIndicator:true
      //@EndUserText.label: 'Is Settled'
      //IsSettled,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' },
                                            additionalBinding: [{ element: 'SalesOrder', usage: #FILTER_AND_RESULT }] } ]
      //@ObjectModel.foreignKey.association: '_SalesOrderItem'
      @ObjectModel.text.element: ['SalesOrderItemText']
      SalesOrderItem,
      @Consumption.valueHelpDefinition: [ { 
        entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' }, 
        additionalBinding: [ {
            usage: #FILTER_AND_RESULT,
            localElement: 'WBSElementExternalID',
            element: 'WBSElementExternalID'
      } ] } ]
      @ObjectModel.text.element: ['WBSDescription']
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { 
        entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementExternalID' }, 
        additionalBinding: [ {
            usage: #FILTER_AND_RESULT,
            localElement: 'WBSElementInternalID',
            element: 'WBSElementInternalID'
      } ] } ]
      @ObjectModel.text.element: ['WBSDescription']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _WBSElementBasicData.WBSElementExternalID,
      //ReceiverOrder,
      //PartnerOrderItem,
      //ProducedProduct,
      //ReceiverCostCenter,
      //ReceiverWBSElementInternalID,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      PartnerControllingObjectType,
      @ObjectModel.text.element: ['EvtBsdPostingRuleReceiverText']
      EvtBsdPostingRuleReceiver,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      EvtBsdPostingRuleReceiverText,
      EvtBsdDistrTracingFctrDetnMeth,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdNonMatRcvrAcctDetnMeth', element: 'MfgOrdNonMatlRcvrAcctDetnMeth' } } ]
      @ObjectModel.text.element: ['MfgOrdNonMatlRcvrDetnMethName']
      //@ObjectModel.foreignKey.association: '_MfgOrdNonMatRcvrAcctDetnMeth'
      MfgOrdNonMatlRcvrAcctDetnMeth,
      @Semantics.user.createdBy: true
      EnteredByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      RecentlyChangedDateTime,
      
      @Consumption.hidden: true
      @Semantics.booleanIndicator:true
      _ManufacturingOrder.MfgOrderHasMultipleItems,
      @Semantics.text:true
      _ManufacturingOrder.ManufacturingOrderText,
      @Semantics.text:true
      _SalesOrderItem.SalesOrderItemText,
      @Semantics.text:true
      _WBSElementBasicData.WBSDescription,
      @Semantics.text:true
      _MfgOrdNonMatRcvrAcctDetnMeth.MfgOrdNonMatlRcvrDetnMethName,

      _ManufacturingOrder._CompanyCodeText,
      _ManufacturingOrder._ProductionPlantText,
      //_ControllingObject,
      _ManufacturingOrder,
      _ManufacturingOrderItem,
      _OrderCategory,
      _OrderCategoryText,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElementBasicData,
      _EnteredByUser,
      _LastChangedByUser,
      _MfgOrdNonMatRcvrAcctDetnMeth
}
```
