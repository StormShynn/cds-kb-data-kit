---
name: C_CNTRLCONTRCNSMPNQRY
description: "Query view for central contract consumption"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value
semantic_en: "Query view for central contract consumption"
semantic_vi: "Query view for central contract consumption — CDS view tiêu dùng dựa trên C_CntrlContractCnsmpn."
keywords:
  - "query"
  - "for"
  - "central"
  - "contract"
  - "consumption"
  - "purchase"
  - "item"
  - "distribution"
  - "type"
  - "supplier"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - contract
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_CNTRLCONTRCNSMPNQRY

**Query view for central contract consumption**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  | `CHAR(10)` | Central Purchase Contract |
| `CentralPurchaseContractItem` | ✓ | |  |  | `NUMC(5)` | Central Purchase Contract Item |
| `DistributionKey` | ✓ | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PurchaseContractType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProcmtHubPurchasingOrg` |  | |  |  | `CHAR(4)` | Connected Purchasing Organization |
| `ProcmtHubPurchasingGroup` |  | |  |  | `CHAR(3)` | Back-End Purchasing Group |
| `ProcmtHubPlant` |  | |  |  | `CHAR(4)` | Connected Plant |
| `ProcmtHubCompanyCode` |  | |  |  | `CHAR(4)` | Connected Company Code |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  | `_Product._Text[1: Language = $session.system_language].ProductName` | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  | `_ProductGroup._ProductGroupText[1: Language = $session.system_language].ProductGroupName` | `CHAR(20)` | Product Group Description |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start of Validity Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End of Validity Period |
| `PurgDocChangeRequestStatus` |  | |  |  | `CHAR(2)` | Change Request Status |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TargetQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `TargetAmount` |  | |  |  | `CURR(21)` | Target Amount |
| `ReleaseOrderItemNetAmount` |  | |  |  | `CURR(15)` | Release Net Amount |
| `ReleaseOrderItemOrderQuantity` |  | |  |  | `QUAN(13)` | Release Order Quantity |
| `ContractConsumptionRatio` |  | |  | `1` | `INT1(3)` |  |
| `ContractConsumptionInPct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED 
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #L 
@AbapCatalog.sqlViewName: 'CNTRLCONCNSMPNQY'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Query view for central contract consumption'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #ANALYTIC_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTIC_QUERY
define view C_CntrlContrCnsmpnQry 

 with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency : displaycurrency,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid,
    
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
    P_EndDate: vdm_validitystart
    

            as select from C_CntrlContractCnsmpn( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                                         P_StartDate: $parameters.P_StartDate,
                                                         P_EndDate: $parameters.P_EndDate ) 
                                                         
                                                           
           
            
            {
                key CentralPurchaseContract, 
                key CentralPurchaseContractItem, 
                key DistributionKey, 
                
                PurchaseContractType,
                
                @ObjectModel.text.element:  [ 'SupplierName' ]
                @Consumption.semanticObject: 'Supplier'
//                @AnalyticsDetails.query.display: #KEY_TEXT
                Supplier,
               @Semantics.text: true
                _Supplier.SupplierName,
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                PurchasingGroup, 
              //  _PurchasingGroup.PurchasingGroupName,
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                PurchasingOrganization,
               //_PurchasingOrganization.PurchasingOrganizationName,
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                CompanyCode,
             //   _CompanyCode.CompanyCodeName,
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                Plant,
              //  _Plant.PlantName,
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                ProcmtHubPurchasingOrg,
                //@Semantics.text: true
                //ProcmtHubPurgOrgName,
                @AnalyticsDetails.query.display: #KEY_TEXT
                ProcmtHubPurchasingGroup, 
               // @Semantics.text: true
                //PurchasingGroupName ,
                @AnalyticsDetails.query.display: #KEY_TEXT
                ProcmtHubPlant,
               // @Semantics.text: true
              //  PlantName as ProcmtHubPlantName,
                @AnalyticsDetails.query.display: #KEY_TEXT                
                ProcmtHubCompanyCode,
                //@Semantics.text: true
               // ProcmtHubCompanyCodeName,                
                
                @Semantics.unitOfMeasure: true
                OrderQuantityUnit,
                
//                @AnalyticsDetails.query.display: #KEY_TEXT
                Material,
                @Semantics.text: true
                _Product._Text[1: Language = $session.system_language].ProductName as MaterialName,
                
              //  @ObjectModel.text.element:  [ 'MaterialGroupName' ]
              //  @Consumption.labelElement: 'MaterialGroupName'
//                @AnalyticsDetails.query.display: #KEY_TEXT
                MaterialGroup,
                @Semantics.text: true
                _ProductGroup._ProductGroupText[1: Language = $session.system_language].ProductGroupName as MaterialGroupName,
                  
//                @ObjectModel.text.element: ['PurgCatName']
//                @Consumption.labelElement: 'PurgCatName'
//                PurchasingCategory,
//                @Semantics.text: true
//                PurgCatName,
                                
                PurchasingDocumentCategory,                            
                 
                CalendarYear, 
                CalendarQuarter, 
                CalendarMonth, 
                CalendarWeek, 
                
                ValidityStartDate,
                ValidityEndDate,     
                
                @AnalyticsDetails.query.display: #KEY_TEXT
                PurgDocChangeRequestStatus,                
                
                @Semantics.currencyCode: true
                DisplayCurrency, 
                
                @DefaultAggregation: #SUM
                @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
                TargetQuantity, 
                
                @DefaultAggregation: #SUM
                @Semantics.amount.currencyCode: 'DisplayCurrency'
                TargetAmount,
                 
                @DefaultAggregation: #SUM
                @Semantics.amount.currencyCode: 'DisplayCurrency'
                ReleaseOrderItemNetAmount,
                
                @DefaultAggregation: #SUM
                @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
                ReleaseOrderItemOrderQuantity,
                
                @DefaultAggregation: #FORMULA
                @AnalyticsDetails.query.formula: '$projection.ReleaseOrderItemNetAmount / $projection.TargetAmount'
                @EndUserText.label: 'Consumption %'
                1 as ContractConsumptionRatio,
                
                @DefaultAggregation: #FORMULA
                @AnalyticsDetails.query.formula: '$projection.ReleaseOrderItemNetAmount  * 100 / $projection.TargetAmount'
                @EndUserText.label: 'Consumption Percentage'
                1 as ContractConsumptionInPct               
                
            }
```
