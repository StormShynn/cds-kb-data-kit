---
name: C_PURORDOUTPUTAUTOMNRATE
description: "PO Output Automn & non Automn percentage"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value
semantic_en: "PO Output Automn & non Automn percentage"
semantic_vi: "PO Output Automn & non Automn percentage — CDS view tiêu dùng dựa trên C_PurOrdOutputAutomnCube."
keywords:
  - "output"
  - "automn"
  - "non"
  - "percentage"
  - "purchase"
  - "order"
  - "message"
  - "item"
  - "channel"
  - "supplier"
  - "purchasing"
  - "organization"
tags:
  - MM
  - bo:purchaseorder
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_PURORDOUTPUTAUTOMNRATE

**PO Output Automn & non Automn percentage**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `POOutputMessageItemID` | ✓ | |  |  | `NUMC(6)` | ID of an Output Request Item |
| `POOutputChannel` |  | |  |  | `CHAR(5)` | Output Channel |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `POOutputChannelManualUniqueID` |  | |  |  | `CHAR(14)` | Text field length 14 |
| `POOutputChannelAutomnUniqueID` |  | |  |  | `CHAR(14)` | Text field length 14 |
| `PurchaseOrderOutputIsAutomated` |  | |  |  | `CHAR(1)` | Is Automated |
| `NmbrOfPOOutputItems` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPurchaseOrdersPrinted` |  | |  |  | `INT4(10)` | Number of Purchase Orders - Printed |
| `NmbrOfPurchaseOrdersEmailed` |  | |  |  | `INT4(10)` | Number of Purchase Orders Mailed |
| `NmbrOfPurOrdersOutputAsXML` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as XML |
| `NmbrOfPurOrdersOutputAsIDOC` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as IDOC |
| `NmbrOfPurOrdersOutputAsEDI` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as EDI |
| `NmbrOfPurOrdsWithAutomnOutput` |  | |  | `case when POOutputChannelAutomnUniqueID <> ' ' then NmbrOfPurOrdsWithAutomnOutput else 0 end` | `INT4(10)` |  |
| `NmbrOfPurOrdsWithNonAutomnOutp` |  | |  | `case when POOutputChannelManualUniqueID <> ' ' then NmbrOfPurOrdsWithNonAutomnOutp else 0 end` | `INT4(10)` |  |
| `POOutputAutomationPercent` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `POOutputNonAutomnPercent` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMPOOPAUTOMN'
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
@Analytics.settings.maxProcessingEffort:#MEDIUM
@EndUserText.label: 'PO Output Automn & non Automn percentage'
@Metadata.allowExtensions: true 
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]

define view C_PurOrdOutputAutomnRate
  with parameters
   @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ] 
    } 
    @Consumption.hidden: true
    P_StartDate: vdm_validitystart,
    
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ] 
    } 
    @Consumption.hidden: true    
    P_EndDate         : vdm_validityend,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid

  as select from C_PurOrdOutputAutomnCube( P_StartDate:$parameters.P_StartDate , P_EndDate: $parameters.P_EndDate)
{
      @EndUserText.label: 'Purchase Order'
  key PurchaseOrder,
      @EndUserText.label: 'Item ID'
  key POOutputMessageItemID,
     
      POOutputChannel,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Supplier,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingGroup,

//      @EndUserText.label: 'Message Creation Date'
//      CreationDate,
      CalendarYear,
      CalendarQuarter,
      CalendarMonth,
      CalendarWeek,
      
      //Fields to count distinct POs
      @UI.hidden: true
       @EndUserText.label: 'Manual'
      POOutputChannelManualUniqueID,
      @UI.hidden: true
       @EndUserText.label: 'Automn'
      POOutputChannelAutomnUniqueID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName:#LOCAL
     PurchaseOrderOutputIsAutomated,
     @EndUserText.label: 'Count'
     NmbrOfPOOutputItems,
      
      // Non Automated Channel Attributes
     @DefaultAggregation: #SUM
      NmbrOfPurchaseOrdersPrinted,
      @DefaultAggregation: #SUM
      NmbrOfPurchaseOrdersEmailed,


      //Automated Channel Attributes
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsXML,
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsIDOC,
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsEDI,

      // Total Automated and Non automated Output Messages
    
     @EndUserText.label: 'No. of POs - Automn'
     case when POOutputChannelAutomnUniqueID <> ' ' then  NmbrOfPurOrdsWithAutomnOutput else 0 end as NmbrOfPurOrdsWithAutomnOutput,
      @EndUserText.label: 'No. of POs - Manual'
    case when POOutputChannelManualUniqueID <> ' ' then  NmbrOfPurOrdsWithNonAutomnOutp else 0 end as NmbrOfPurOrdsWithNonAutomnOutp,
   
      //Calculation of Automated and Non automated Percentages
     @DefaultAggregation: #FORMULA
      @EndUserText.label: 'POs Auto. Output %'
      @AnalyticsDetails.query.formula :' $projection.NmbrOfPurOrdsWithAutomnOutput /  $projection.NmbrOfPOOutputItems '
      cast( 1 as abap.dec(15,3) )  as POOutputAutomationPercent,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'POs Manual Output %'
      @AnalyticsDetails.query.formula :'( 1- $projection.POOutputAutomationPercent )'
      cast( 1 as abap.dec(15,3) )  as POOutputNonAutomnPercent
}
```
