---
name: C_PARTSPERMILLIONQUERY
description: "Parts Per Million Query View"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value
semantic_en: "Parts Per Million Query View"
semantic_vi: "Parts Per Million Query View — CDS view tiêu dùng dựa trên C_PartsPerMillionCube."
keywords:
  - "parts"
  - "per"
  - "million"
  - "query"
  - "material"
  - "document"
  - "item"
  - "year"
  - "purchase"
  - "order"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_PARTSPERMILLIONQUERY

**Parts Per Million Query View**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocument` | ✓ | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` | ✓ | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentYear` | ✓ | |  |  | `NUMC(4)` | Material Document Year |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `GoodsReceiptQtyInOrderUnit` |  | |  |  | `QUAN(13)` | Goods Reciepts Quantity in Order Unit |
| `NotificationComplaintQuantity` |  | |  |  | `QUAN(13)` | Complaint Quantity |
| `NmbrOfReturnedPartsSecondMsr` |  | |  |  | `DEC(13)` |  |
| `NmbrOfReturnedPartsMainMeasure` |  | |  |  | `DEC(13)` |  |
| `NmbrOfReceivedPartsMainMeasure` |  | |  |  | `DEC(13)` |  |
| `RjctdGdsRatioFor2ndMsrInPPM` |  | |  | `cast(1 as mmpur_ana_partspermillion )` | `DEC(15)` | Parts Per Million |
| `RejectedGoodsRatioInPPM` |  | |  | `cast(1 as mmpur_ana_partspermillion )` | `DEC(15)` | Parts Per Million |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPPMQUERY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:#D
@ObjectModel.usageType.sizeCategory:  #L
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Analytics.settings.maxProcessingEffort:#LOW
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@EndUserText.label: 'Parts Per Million Query View'

define view C_PartsPerMillionQuery
  with parameters
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' }  ]
    }
    @Consumption.hidden: true
    P_StartDate       : bedat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate         : bedat,
    
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction              : datefunctionid 
  as select from C_PartsPerMillionCube(P_StartDate: $parameters.P_StartDate,
                                                     P_EndDate : $parameters.P_EndDate)  
                                                     
                                                                                                      
{

  key MaterialDocument as MaterialDocument,
  key MaterialDocumentItem,
  key MaterialDocumentYear,
  
      PurchaseOrder,
      PurchaseOrderItem,
      
      //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false} 
      @Environment.sql.passValue: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      Supplier,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      PurchasingGroup,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      PurchasingOrganization,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      Material,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      MaterialGroup,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      Plant,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      Region,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL 
      Country,
      
      PurchasingCategory,       
      PurgCatName,      
      
      CalendarMonth,
      CalendarYear,
      CalendarWeek,
      CalendarQuarter,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
        
      GoodsMovementType,
      PostingDate,
      
//      @EndUserText.label: 'Quantity'
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      GoodsReceiptQtyInOrderUnit,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NotificationComplaintQuantity,
            
      @Consumption.hidden: true
      @DefaultAggregation: #SUM      
      NmbrOfReturnedPartsSecondMsr,
      
       @Consumption.hidden: true
      @DefaultAggregation: #SUM 
      NmbrOfReturnedPartsMainMeasure,
      
       @Consumption.hidden: true
      @DefaultAggregation: #SUM 
      NmbrOfReceivedPartsMainMeasure,
            
      @EndUserText.label: 'Based On Quality Notification'
      @DefaultAggregation: #FORMULA      
      @AnalyticsDetails.query.formula: 'case when $projection.NmbrOfReceivedPartsMainMeasure = 0 then 0 else $projection.NmbrOfReturnedPartsSecondMsr  * 1000000 / $projection.NmbrOfReceivedPartsMainMeasure end'
      cast(1  as mmpur_ana_partspermillion ) as RjctdGdsRatioFor2ndMsrInPPM,
      
      @EndUserText.label: 'Based On Return Delivery'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NmbrOfReceivedPartsMainMeasure = 0 then 0 else $projection.NmbrOfReturnedPartsMainMeasure  * 1000000 / $projection.NmbrOfReceivedPartsMainMeasure end'      
      cast(1  as mmpur_ana_partspermillion ) as RejectedGoodsRatioInPPM
}
```
