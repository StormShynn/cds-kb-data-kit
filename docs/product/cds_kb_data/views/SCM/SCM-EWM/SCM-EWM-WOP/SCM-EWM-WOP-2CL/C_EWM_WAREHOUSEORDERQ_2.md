---
name: C_EWM_WAREHOUSEORDERQ_2
description: "This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEORDERQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Order - Query — CDS view tiêu dùng dựa trên I_EWM_WhseOrderCube_2."
keywords:
  - "warehouse"
  - "order"
  - "query"
  - "creation"
  - "rule"
  - "whse"
  - "process"
  - "type"
  - "document"
  - "status"
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
# C_EWM_WAREHOUSEORDERQ_2

**This CDS view provides the prerequisites for answering questions about the total number of warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: How many warehouse orders are there in your warehouse? What is the warehouse-order-related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEORDERQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrder` | ✓ | |  |  | `NUMC(10)` | Warehouse Order Number |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WhseProcessTypeDocumentHdr` |  | |  |  | `CHAR(4)` | Document Header Warehouse Process Type |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `Wave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `PlndLoadCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActlReleasedUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WaveTemplate` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` |  | |  |  | `CHAR(40)` | Description |
| `LatestStartUTCDateTime` |  | |  |  | `DEC(15)` | Latest Starting Date (LSD) |
| `WhseOrderOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WhseOrderLastChgUTCDateTime` |  | |  |  | `DEC(15)` | Time of Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `WarehouseOrderIsSplit` |  | |  |  | `CHAR(1)` | Warehouse Order Was Split |
| `WhseOrderHigherLevelWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WhseOrderSubsequentWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Subsequent Warehouse Order |
| `WhseOrderHasSubsqntWhseOrder` |  | |  |  | `CHAR(1)` | WO Contains Warehouse Order |
| `WarehouseOrderHasWhseTask` |  | |  |  | `CHAR(1)` | Warehouse Order Contains Warehouse Task |
| `WarehouseOrderHasPhysInvtryDoc` |  | |  |  | `CHAR(1)` | WO Contains Physical Inventory Document |
| `HzdsSubstanceIsRlvtForStorage` |  | |  |  | `CHAR(1)` | Hazardous Substance Relevant for Storage |
| `WhseOrderCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderCrtnWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderCrtnWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderCrtnWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderCrtnWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderCrtnWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderCrtnRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrdLtstStrtWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrdLtstStrtWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrdLtstStrtWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrdLtstStrtWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrdLtstStrtWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrdLtstStrtWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrdLtstStrtRnddTo10MinsTme` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderConfWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderConfWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderConfWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderConfWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderConfRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `WhseOrderConfUTCDateTime` |  | |  |  | `DEC(15)` | Time of Confirmation |
| `WarehouseOrderConfirmedBy` |  | |  |  | `CHAR(12)` | Confirmed By |
| `Processor` |  | |  |  | `CHAR(12)` | Processor |
| `WarehouseOrderQueue` |  | |  |  | `CHAR(10)` | Queue |
| `WarehouseOrderQueueName` |  | |  | `_WarehouseOrderQueue._Text[1:Language = $parameters.P_Language].WarehouseOrderQueueName` | `CHAR(40)` | Description |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  | `_ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName` | `CHAR(40)` | Description |
| `WrhsOrdCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `WarehouseOrderPlannedDuration` |  | |  |  | `QUAN(15)` | Planned Execution Time of Warehouse Order |
| `WhseOrderPlanDurationTimeUnit` |  | |  |  | `UNIT(3)` | Warehouse Order: Time Unit |
| `NumberOfWarehouseOrders` |  | |  |  | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEORDERQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEORDERQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Order - Query'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@VDM.viewType:#CONSUMPTION
@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMWOQ2'
define view entity C_EWM_WarehouseOrderQ_2
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
      @EndUserText.label: 'Header Warehouse Process Type'
      WhseProcessTypeDocumentHdr,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }       
      @EndUserText.label: 'Warehouse Order Status'
      WarehouseOrderStatus,
      @EndUserText.label: 'Description of Warehouse Order Status'
      WarehouseOrderStatusName,
      
      @EndUserText.label: 'Wave'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      
      @EndUserText.label: 'Plnd Loading Completed On (UTC)'
      PlndLoadCompletionUTCDateTime,
      
      @EndUserText.label: 'Plnd Packing Completed On (UTC)'
      PlndPackCompletionUTCDateTime,
      
      @EndUserText.label: 'Plnd Picking Completed On (UTC)'
      PlndPickCompltnUTCDateTime,
      
      @EndUserText.label: 'Plnd Staging Completed On (UTC)'
      PlndStagingCompltnUTCDateTime,
      
      @EndUserText.label: 'Wave Actually Released On (UTC)'
      WaveActlReleasedUTCDateTime,
      
      @EndUserText.label: 'Cutoff Date and Time of Wave'
      WaveCutoffWhseTmznDateTime,
      @EndUserText.label: 'Planned Release Date and Time of Wave'
      WavePlndRelWhseTmznDateTime,
      @EndUserText.label: 'Picking Completion Date and Time of Wave'
      PlndPickCmpltWhseTmznDateTime,
      @EndUserText.label: 'Packing Completion Date and Time of Wave'
      PlndPackCmpltWhseTmznDateTime,
      @EndUserText.label: 'Staging Completion Date and Time of Wave'
      PlndStggCmpltWhseTmznDateTime,
      @EndUserText.label: 'Completion Date and Time of Wave'
      WaveCompletionWhseTmznDateTime,
      @EndUserText.label: 'Actual Released Date and Time of Wave'
      WaveActualReldWhseTmznDateTime,
      @EndUserText.label: 'Actual Released Date (Year) of Wave'
      WaveActualReldWhseTmznYear,
      @EndUserText.label: 'Actual Released Date (Month) of Wave'
      WaveActualReldWhseTmznMonth,
      @EndUserText.label: 'Actual Released Date of Wave'
      WaveActualReldWhseTmznDate,
      @EndUserText.label: 'Actual Released Time (Hour) of Wave'
      WaveActualReldWhseTmznHour,
      @EndUserText.label: 'Actual Released Time of Wave'
      WaveActualReldWhseTmznTime,
      
      @EndUserText.label: 'Wave Template'
      WaveTemplate,
      @EndUserText.label: 'Description of Wave Template'
      WaveTemplateName,
      
      
      @EndUserText.label: 'WO Latest Start Date and Time (UTC)'
      LatestStartUTCDateTime,
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
      @EndUserText.label: 'Warehouse Order Splitting'
      WarehouseOrderIsSplit,
      @EndUserText.label: 'Higher-Level Warehouse Order'
      WhseOrderHigherLevelWhseOrder,
      @EndUserText.label: 'Subsequent Warehouse Order'
      WhseOrderSubsequentWhseOrder,
      @EndUserText.label: 'Has Subsequent Warehouse Order'
      WhseOrderHasSubsqntWhseOrder,
      @EndUserText.label: 'Has Warehouse Task'
      WarehouseOrderHasWhseTask,      
      @EndUserText.label: 'Has Physical Inventory Document'
      WarehouseOrderHasPhysInvtryDoc,
      @EndUserText.label: 'Is Hzds Substance Relevant for Storage'
      HzdsSubstanceIsRlvtForStorage,     
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
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false}
      @EndUserText.label: 'Crtn Time of WO Down to Nearest 10 Mins'
      WhseOrderCrtnRnddTo10MinsTime,      
      
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
      @EndUserText.label: 'Latest Start Date of Warehouse Order'
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
      @EndUserText.label: 'WO Lat. Strt Tme Down to Nearest 10 Mins'
      WhseOrdLtstStrtRnddTo10MinsTme,      
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

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Conf. Time of WO Rounded Down to 10 Mins'
      WhseOrderConfRnddTo10MinsTime,
      
      
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
      @EndUserText.label: 'Processor'
      Processor,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Order Queue'
      WarehouseOrderQueue,
      @EndUserText.label: 'Description of Warehouse Order Queue'
      _WarehouseOrderQueue._Text[1:Language = $parameters.P_Language].WarehouseOrderQueueName as WarehouseOrderQueueName,
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
      
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseOrderPlanDurationTimeUnit'} }
      @EndUserText.label: 'Warehouse Order Planned Duration'
      @AnalyticsDetails.query.decimals: 3
      WarehouseOrderPlannedDuration,
      @EndUserText.label: 'Time Unit for Whse Order Plnd Duration'
      WhseOrderPlanDurationTimeUnit,      
   
      //replace COUNT by SUM for sake of performance
      @EndUserText.label: 'Number of Warehouse Orders'
      @AnalyticsDetails.query.decimals: 0
/*      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
      exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['Warehouse', 'WarehouseOrder']} ]}
      1                  as      */
      NumberOfWarehouseOrders        
}
```
