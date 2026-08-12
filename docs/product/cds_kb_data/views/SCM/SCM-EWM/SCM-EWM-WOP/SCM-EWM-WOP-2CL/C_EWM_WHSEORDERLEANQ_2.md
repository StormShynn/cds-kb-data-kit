---
name: C_EWM_WHSEORDERLEANQ_2
description: "This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WHSEORDERLEANQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Order Lean - Query — CDS view tiêu dùng dựa trên I_EWM_WhseOrderCube_2."
keywords:
  - "warehouse"
  - "order"
  - "lean"
  - "query"
  - "creation"
  - "rule"
  - "status"
  - "name"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - order
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# C_EWM_WHSEORDERLEANQ_2

**This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WHSEORDERLEANQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrder` | ✓ | |  |  | `NUMC(10)` | Warehouse Order Number |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WhseOrderOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WhseOrderLastChgUTCDateTime` |  | |  |  | `DEC(15)` | Time of Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `WarehouseOrderHasWhseTask` |  | |  |  | `CHAR(1)` | Warehouse Order Contains Warehouse Task |
| `WarehouseOrderHasPhysInvtryDoc` |  | |  |  | `CHAR(1)` | WO Contains Physical Inventory Document |
| `WhseOrderCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderCrtnWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderCrtnWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderCrtnWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderCrtnWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderCrtnWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrdLtstStrtWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrdLtstStrtWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrdLtstStrtWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrdLtstStrtWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrdLtstStrtWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrdLtstStrtWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderConfWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderConfWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderConfWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderConfWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `WhseOrderConfUTCDateTime` |  | |  |  | `DEC(15)` | Time of Confirmation |
| `WarehouseOrderConfirmedBy` |  | |  |  | `CHAR(12)` | Confirmed By |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  | `_ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName` | `CHAR(40)` | Description |
| `WrhsOrdCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `NumberOfWarehouseOrders` |  | |  |  | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WHSEORDERLEANQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WHSEORDERLEANQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Order Lean - Query'

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMWOLQ3'
define view entity C_EWM_WhseOrderLeanQ_2
  with parameters     
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language                 : /scwm/lang
 as select from I_EWM_WhseOrderCube_2( P_Language: $parameters.P_Language )
{
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: false,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse'
  key EWMWarehouse,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      } 
      @EndUserText.label: 'Warehouse Order'
  key WarehouseOrder,

      @EndUserText.label: 'Warehouse Order Creation Rule'
      WarehouseOrderCreationRule,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }       
      @EndUserText.label: 'Warehouse Order Status'
      WarehouseOrderStatus,
      @EndUserText.label: 'Description of Warehouse Order Status'
      WarehouseOrderStatusName,
      @EndUserText.label: 'Overdue Time (Hour)'
      WhseOrderOverdueHours,       
     
      @EndUserText.label: 'WO Last Changed On (UTC)'
      WhseOrderLastChgUTCDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WO Last Changed By'
      LastChangedByUser,
      @EndUserText.label: 'Has Warehouse Task'
      WarehouseOrderHasWhseTask,      
      @EndUserText.label: 'Has Physical Inventory Document'
      WarehouseOrderHasPhysInvtryDoc,        
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date and Time of Whse Order'
      WhseOrderCrtnWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Year) of Warehouse Order'
      WhseOrderCrtnWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Month) of Warehouse Order'
      WhseOrderCrtnWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date of Warehouse Order'
      WhseOrderCrtnWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time (Hour) of Warehouse Order'
      WhseOrderCrtnWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time of Warehouse Order'
      WhseOrderCrtnWhseTmznTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Date and Time of Whse Order'
      WhseOrdLtstStrtWhseTmznDteTme,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Date (Year) of Whse Order'
      WhseOrdLtstStrtWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Date (Month) of Whse Order'
      WhseOrdLtstStrtWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Date of Whse Order'
      WhseOrdLtstStrtWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Time (Hour) of Whse Order'
      WhseOrdLtstStrtWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Latest Start Time of Warehouse Order'
      WhseOrdLtstStrtWhseTmznTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date and Time of Whse Order'
      WhseOrderConfWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Year) of Whse Order'
      WhseOrderConfWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Month) of Whse Order'
      WhseOrderConfWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date of Warehouse Order'
      WhseOrderConfWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Time (Hour) of Whse Order'
      WhseOrderConfWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Time of Warehouse Order'
      WhseOrderConfWhseTmznTime,
      
      @EndUserText.label: 'WO Started On (UTC)'
      WrhsOrdStrtUTCDateTime,
      
      @EndUserText.label: 'WO Confirmed On (UTC)'
      WhseOrderConfUTCDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WO Confirmed By'
      WarehouseOrderConfirmedBy,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Wave'
      EWMWave,    
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Activity Area'
      ActivityArea,      
      @EndUserText.label: 'Description of Activity Area'
      _ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName as ActivityAreaName,
      
      @EndUserText.label: 'WO Created On (UTC)'
      WrhsOrdCrtnUTCDateTime,  
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WO Created By'
      CreatedByUser,
   
      //replace COUNT by SUM for sake of performance
      @EndUserText.label: 'Number of Warehouse Orders'
      @AnalyticsDetails.query.decimals: 0
/*      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
      exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['Warehouse', 'WarehouseOrder']} ]}
      1                  as */     
      NumberOfWarehouseOrders        
}
```
