---
name: C_SUPLREVALBYQUANTITYQRY
description: "Supplier Evaluation by Quantity"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value
semantic_en: "Supplier Evaluation by Quantity"
semantic_vi: "Supplier Evaluation by Quantity — CDS view tiêu dùng dựa trên C_SuplrEvalByQuantityCube."
keywords:
  - "supplier"
  - "evaluation"
  - "quantity"
  - "purchase"
  - "order"
  - "item"
  - "suplr"
  - "eval"
  - "critra"
  - "deliv"
  - "completed"
  - "purg"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
---
# C_SUPLREVALBYQUANTITYQRY

**Supplier Evaluation by Quantity**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `SuplrEvalCritraDelivCompleted` |  | |  |  | `CHAR(10)` | Delivery Completed |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurOrdItmFirstGRPostingDate` |  | |  |  | `DATS(8)` | First Goods Receipt Date |
| `PurOrdItmFinalGRPostingDate` |  | |  |  | `DATS(8)` | Final Goods Receipt Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OrderedQuantity` |  | |  |  | `QUAN(13)` | Ordered Quantity |
| `GoodsReceiptQty` |  | |  |  | `QUAN(18)` |  |
| `QuantityVarianceInOrdUnit` |  | |  |  | `QUAN(13)` | Quantity Variance in Order Unit |
| `QuantityVarianceInDspCrcy` |  | |  |  | `CURR(15)` | Quantity Variance in Display Currency |
| `QuantityVarianceScore` |  | |  |  | `DEC(5)` | Variance Score |
| `QuantityVarianceInPctValue` |  | |  |  | `DEC(14)` | Percentage Variance |
| `TotalQuantityVarianceScore` |  | |  | `cast ( 1 as mm_a_variance_score )` | `DEC(5)` | Variance Score |
| `QuantityVarianceInPct` |  | |  | `cast ( 1 as mmpur_ana_de_quantityvar_pct )` | `DEC(14)` | Percentage Variance |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMQUANTVARQRY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation by Quantity'
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.query: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
define view C_SuplrEvalByQuantityQry

  with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency : displaycurrency,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate       : vdm_validitystart,

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
  as select from C_SuplrEvalByQuantityCube( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                           P_StartDate : $parameters.P_StartDate,
                                           P_EndDate : $parameters.P_EndDate) as QuantityVariance
{
      /* Keys */
      @EndUserText.label: 'Purchasing Document'      -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document'
  key PurchaseOrder,
      @EndUserText.label: 'Purchasing Document Item' -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document Item'
  key PurchaseOrderItem,

      @Consumption: {
                          filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                    mandatory: false,
                                    hidden: true,
                                    selectionType: #SINGLE,
                                    multipleSelections: false
                                  },
      //                     hidden: true,
                          derivation: {
                                        lookupEntity: 'F_SuplrEvalCriteriaGenConfign',
                                        resultElement: 'SuplrEvalCritraDelivCompleted'
                                      }
                        }
      @Environment.sql.passValue: true
      @UI.hidden: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      SuplrEvalCritraDelivCompleted,

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
      @Environment.sql.passValue: true
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
      @AnalyticsDetails.query.display: #KEY_TEXT 
      @UI.hidden: true     
      SuplrEvalRelevantDocCategory,


      /* Order Date */
      PurOrdItmFirstGRPostingDate,
      PurOrdItmFinalGRPostingDate,
      CalendarYear,
      CalendarQuarter,
      CalendarMonth,

      CalendarWeek,

      /* Org Data */

      @AnalyticsDetails.query.display: #KEY_TEXT
      QuantityVariance.PurchasingOrganization,

      @AnalyticsDetails.query.display: #KEY_TEXT
      PurchasingGroup,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,

      /* Supplier Data */
      @AnalyticsDetails.query.display: #KEY_TEXT
      Supplier,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,

      /* Item Data */
      @AnalyticsDetails.query.display: #KEY_TEXT
      Material,

      @AnalyticsDetails.query.display: #KEY_TEXT
      QuantityVariance.MaterialGroup,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      PurchasingDocumentCategory,
      
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      PurchasingCategory,

      @Semantics.text: true
      PurgCatName,

      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,

//      @Consumption.filter.hidden: true
      @Semantics.currencyCode: true
      DisplayCurrency,

      /* Measures */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      OrderedQuantity,
      @EndUserText.label: 'Goods Receipt Quantity'
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      GoodsReceiptQty,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      QuantityVarianceInOrdUnit,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      QuantityVarianceInDspCrcy,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      QuantityVarianceScore,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      QuantityVarianceInPctValue,

      @DefaultAggregation:#FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NumberOfPurchaseOrderItems = 0 then 0 else $projection.QuantityVarianceScore / $projection.NumberOfPurchaseOrderItems end'
      cast ( 1 as mm_a_variance_score ) as TotalQuantityVarianceScore,

      @DefaultAggregation:#FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NumberOfPurchaseOrderItems = 0 then 0 else $projection.QuantityVarianceInPctValue / $projection.NumberOfPurchaseOrderItems end'
      cast ( 1 as mmpur_ana_de_quantityvar_pct )   as QuantityVarianceInPct, // changed the DE to avoid numeric overflow error , as this filed holds the variance and not percentage mm_a_timevar_statdeliv_pct 

      @DefaultAggregation: #SUM
      @EndUserText.label: 'Number of Purchasing Document Items'
      NumberOfPurchaseOrderItems,

      @EndUserText.label: 'Number of Purchasing Documents'
      @DefaultAggregation: #SUM
      NumberOfPurchaseOrders

}
```
