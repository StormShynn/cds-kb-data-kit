---
name: C_SUPLREVALBYQUALITYQRY
description: "Supplier Evaluation by Quality"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value
semantic_en: "Supplier Evaluation by Quality"
semantic_vi: "Supplier Evaluation by Quality — CDS view tiêu dùng dựa trên C_SuplrEvalByQualityCube."
keywords:
  - "supplier"
  - "evaluation"
  - "quality"
  - "inspection"
  - "purchase"
  - "order"
  - "item"
  - "country"
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
# C_SUPLREVALBYQUALITYQRY

**Supplier Evaluation by Quality**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  | `NUMC(12)` | Inspection Lot Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentCategoryName` |  | |  | `_PurchasingDocumentCatName._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName` | `CHAR(60)` | Purchasing Document Category Name |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `InspectionLotQltyScoreValue` |  | |  | `InspectionLotQualityScore` | `DEC(5)` | Variance Score |
| `NumberOfInspectionLots` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `PurchaseOrderItemUniqueID` |  | |  |  | `CHAR(15)` | Concatenation of EBELN and EBELP |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `InspectionLotQualityScore` |  | |  | `cast( 1 as mm_a_variance_score )` | `DEC(5)` | Variance Score |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'CSUPEVALQLTYQRY'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Supplier Evaluation by Quality'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

define view C_SuplrEvalByQualityQry

  with parameters
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate    : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate      : vdm_validityend,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid

  as select from C_SuplrEvalByQualityCube ( P_StartDate: $parameters.P_StartDate, P_EndDate: $parameters.P_EndDate ) as I_InspectionLotCube
  //, P_DateFunction: $parameters.P_DateFunction

{
  key I_InspectionLotCube.InspectionLot,

      @EndUserText.label: 'Purchasing Document'          -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document'
      PurchaseOrder,
      @EndUserText.label: 'Purchasing Document Item'     -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document Item'
      PurchaseOrderItem,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      I_InspectionLotCube.Supplier,


      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      // @Consumption.labelElement: 'CountryName'
      SupplierCountry,


      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Region,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingGroup,


      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CompanyCode,

  //Purchasing Document Category            
     @EndUserText.label: 'Purchasing Document Category'
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory  ,
      @Semantics.text: true
      _PurchasingDocumentCatName._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName as PurchasingDocumentCategoryName ,
      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },
      //                     hidden: true,
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
      //      @Semantics.booleanIndicator:true
      @Environment.sql.passValue: true
      @UI.hidden: true
      SuplrEvalRelevantDocCategory,



      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,


      CalendarYear,
      CalendarQuarter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CalendarMonth,
      CalendarWeek,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      //    @ObjectModel.text.element: ['Product']
      //  @Consumption.labelElement: 'Product'
      I_InspectionLotCube.Material,


      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      MaterialGroup,


      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      // @Consumption.labelElement: 'PlantName'
      I_InspectionLotCube.Plant,


      PurchasingCategory,
      @EndUserText.label: 'Purchasing Category Name'
      PurgCatName,

      @Consumption.hidden: true
      InspectionLotQualityScore        as InspectionLotQltyScoreValue,

      @Consumption.hidden: true
      NumberOfInspectionLots,
      @UI.hidden: true
      PurchaseOrderItemUniqueID,

      @EndUserText.label: 'Number of Purchasing Documents'
      NumberOfPurchaseOrders,
      @EndUserText.label: 'Number of Purchasing Document Items'
      NumberOfPurchaseOrderItems,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Variance Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberofInspectionLots > 0 THEN $projection.InspectionLotQltyScoreValue / $projection.NumberofInspectionLots ELSE 0 END'
      cast( 1 as mm_a_variance_score ) as InspectionLotQualityScore

}
```
