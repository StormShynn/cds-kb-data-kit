---
name: C_PRICEVARIANCEQUERY
description: "Price Variance"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value
semantic_en: "Price Variance"
semantic_vi: "Price Variance — CDS view tiêu dùng dựa trên C_PriceVarianceCube."
keywords:
  - "price"
  - "variance"
  - "purchase"
  - "order"
  - "item"
  - "purg"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
  - "suplr"
  - "eval"
  - "relevant"
  - "category"
  - "date"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_PRICEVARIANCEQUERY

**Price Variance**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchase Order Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentCategoryName` |  | |  | `_PurchasingDocumentCatName._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName` | `CHAR(60)` | Purchasing Document Category Name |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `PriceVarianceInPct` |  | |  |  | `DEC(14)` | Price Variance in Percentage |
| `PriceVarianceAmount` |  | |  |  | `CURR(13)` |  |
| `PurchaseOrderNetPriceAmount` |  | |  |  | `CURR(13)` |  |
| `InvoicePrice` |  | |  |  | `CURR(13)` |  |
| `PriceVarianceScore` |  | |  |  | `DEC(5)` | Variance Score |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `SuplrEvalPriceVarcInPercent` |  | |  | `cast( 1 as mm_ana_price_var_pct)` | `DEC(14)` | Price Variance in Percentage |
| `SuplrEvalPriceVarianceAmt` |  | |  | `cast( 1 as abap.curr(13,3) )` | `CURR(13)` |  |
| `AmountPerPurchaseOrderPrcUnit` |  | |  | `cast( 1 as abap.curr(13,3) )` | `CURR(13)` |  |
| `PerInvoicePrcUnitAmount` |  | |  | `cast( 1 as abap.curr(13,3) )` | `CURR(13)` |  |
| `DeliveredQuantity` |  | |  |  | `QUAN(18)` |  |
| `OrderedQuantity` |  | |  |  | `QUAN(13)` | Purchase Order Quantity |
| `PriceVarianceScoreValue` |  | |  | `cast( 1 as mm_a_variance_score )` | `DEC(5)` | Variance Score |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMSEBYPRICEQRY'
@EndUserText.label: 'Price Variance'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.settings.maxProcessingEffort:#MEDIUM
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.query: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
define view C_PriceVarianceQuery
  with parameters
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : displaycurrency,

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
  as select from C_PriceVarianceCube( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                    P_StartDate : $parameters.P_StartDate,
                                    P_EndDate : $parameters.P_EndDate )
{

  @EndUserText.label: 'Purchasing Document'
  @EndUserText.quickInfo: 'Purchasing Document'
  key PurchaseOrder,
  
  @EndUserText.label: 'Purchasing Document Item'
  @EndUserText.quickInfo: 'Purchasing Document Item'
  key PurchaseOrderItem,
  
     @Consumption: {
                      filter: {                    
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },                  
                      derivation: {
                                    lookupEntity: 'F_ProcmtAnalyticsDataSelMeth',
                                    resultElement: 'PurgDocMigrtnIsCmpltdForAnlyts'
                                  }
                    }
     
      
      @UI.hidden: true
      PurgDocMigrtnIsCmpltdForAnlyts,
      
            @Consumption: {
                 filter: {                   
                           mandatory: false,
                           hidden: true,
                           selectionType: #SINGLE,
                           multipleSelections: false
                         },
                 derivation: {
                               lookupEntity: 'F_SuplrEvalDocCatConfign',
                               resultElement: 'SuplrEvalRelevantDocCategory'
                             }
               }
      @Environment.sql.passValue: true
      @UI.hidden: true
      SuplrEvalRelevantDocCategory,
      
         
  
      @UI.hidden: true
      PurchaseOrderDate,
      CalendarYear,
      CalendarQuarter,
      CalendarMonth,
      CalendarWeek,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Supplier,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      SupplierCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Plant,
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
      PurchasingCategory,
      PurgCatName,
      
      @EndUserText.label: 'Purchasing Document Category'
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,
      @Semantics.text: true
      _PurchasingDocumentCatName._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName as PurchasingDocumentCategoryName ,
       
      Currency,
      PurchaseOrderQuantityUnit,
      OrderPriceUnit,
      @UI.hidden: true
      DisplayCurrency,
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      PriceVarianceInPct,
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      PriceVarianceAmount,
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      PurchaseOrderNetPriceAmount,
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      InvoicePrice,
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      PriceVarianceScore,
       @DefaultAggregation: #SUM
      NumberOfPurchaseOrders,
      @DefaultAggregation: #SUM
      NumberOfPurchaseOrderItems,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: ' Variance %'
      @AnalyticsDetails.query.formula :' $projection.PriceVarianceInPct /  $projection.NumberOfPurchaseOrderItems'
      cast( 1 as mm_ana_price_var_pct)       as SuplrEvalPriceVarcInPercent,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: ' Price Variance Amount'
      @AnalyticsDetails.query.formula :' $projection.PriceVarianceAmount /  $projection.NumberOfPurchaseOrderItems'
      cast( 1 as abap.curr(13,3) )     as SuplrEvalPriceVarianceAmt,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'PO Price Per OPU'
      @AnalyticsDetails.query.formula :' $projection.PurchaseOrderNetPriceAmount /  $projection.NumberOfPurchaseOrderItems'
      cast( 1 as abap.curr(13,3) )     as AmountPerPurchaseOrderPrcUnit,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Invc Price Per OPU'
      @EndUserText.quickInfo: 'Invoice Price Per OPU'
      @AnalyticsDetails.query.formula :' $projection.InvoicePrice /  $projection.NumberOfPurchaseOrderItems'
      cast( 1 as abap.curr(13,3) )     as PerInvoicePrcUnitAmount,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Delivered Quantity'
      DeliveredQuantity,
      @DefaultAggregation: #SUM
      OrderedQuantity,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Variance Score'
      @AnalyticsDetails.query.formula :' $projection.PriceVarianceScore /  $projection.NumberOfPurchaseOrderItems'
      cast( 1 as mm_a_variance_score ) as PriceVarianceScoreValue
      

}
```
