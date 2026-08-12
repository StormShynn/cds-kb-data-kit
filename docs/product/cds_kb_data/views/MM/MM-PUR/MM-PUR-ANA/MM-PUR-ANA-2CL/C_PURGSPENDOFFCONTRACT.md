---
name: C_PURGSPENDOFFCONTRACT
description: "Off Contract Spend"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value
semantic_en: "Off Contract Spend"
semantic_vi: "Off Contract Spend — CDS view tiêu dùng dựa trên C_PurgSpendOffContract2."
keywords:
  - "off"
  - "contract"
  - "spend"
  - "purchase"
  - "order"
  - "item"
  - "account"
  - "assignment"
  - "number"
  - "purg"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
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
# C_PURGSPENDOFFCONTRACT

**Off Contract Spend**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | ✓ | |  |  | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | | `_PurchasingOrganization` | `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` |  | | `_PurchasingGroup` | `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ReceivingCompanyCode` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `PurgDocHdrCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `PurchaseOrderType` |  | |  |  | `CHAR(4)` | Order Type (Purchasing) |
| `PurchasingDocumentTypeName` |  | |  | `_PurchasingDocumentType._Text[1: Language = $session.system_language].PurchasingDocumentTypeName` | `CHAR(20)` | Short Description of Purchasing Document Type |
| `PurchaseOrderItemCategory` |  | |  |  | `CHAR(1)` | Item category in purchasing document |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  | `_MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `PurchaseOrderAmount` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `AmtWithContractRefInDspCrcy` |  | |  |  | `CURR(21)` | Amount with Contract Reference |
| `AmtWithoutContractRefInDspCrcy` |  | |  |  | `CURR(21)` | Amount without Contract Reference |
| `NonContractPurchaseRatio` |  | |  | `1` | `INT1(3)` |  |
| `NonContractPurchaseRateInPct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'CMMSPNDCNTRCT'
//Commented by VDM CDS Suite Plugin:@ClientDependent: true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Off Contract Spend'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_PurgSpendOffContract

  with parameters
    @Consumption.defaultValue: 'EUR' 
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency           : displaycurrency,

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language                  : sylangu,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ] 
    } 
    @Consumption.hidden: true
    P_StartDate: bedat,
    
    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ] 
    } 
    @Consumption.hidden: true
    P_EndDate: bedat,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction              : datefunctionid 
    
  as select from C_PurgSpendOffContract2(
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_StartDate  : $parameters.P_StartDate,
                 P_EndDate   : $parameters.P_EndDate )

{
      /* keys */
  key PurchaseOrder,
  key PurchaseOrderItem,
  key AccountAssignmentNumber,
  
  
  
  @Consumption: {
                  filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
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
 
  @Consumption.hidden : true
  PurgDocMigrtnIsCmpltdForAnlyts,
      /* Supplier */

      Supplier,
      _Supplier.SupplierName,
      
      SupplierCountry,
      @Semantics.text: true
      _Country._Text[1: Language = $parameters.P_Language].CountryName,

      /* Order Date */
      @EndUserText.label: 'Purchase Order Date'
      PurchaseOrderDate,
      CalendarYear,
      CalendarMonth,
      CalendarQuarter,
      CalendarWeek,

      CreatedByUser,

      /* Header */
      PurchasingOrganization,
      _PurchasingOrganization.PurchasingOrganizationName,
      PurchasingGroup,
      _PurchasingGroup.PurchasingGroupName,
    
      @EndUserText.label: 'Receiving Plant Company Code'
      @EndUserText.quickInfo: 'Receiving Plant Company Code'           
      CompanyCode,  
      @EndUserText.label: 'Receiving Plant Company Code Name'
      @EndUserText.quickInfo: 'Receiving Plant Company Code Name'                                         
      @Semantics.text: true                                 
      _CompanyCode.CompanyCodeName as ReceivingCompanyCode,                         
      
      @EndUserText.label: 'Company Code'  
      @EndUserText.quickInfo: 'Company Code'            
      PurgDocHdrCompanyCode,                                          
      @Semantics.text: true  
      @EndUserText.label: 'Company Code Name'  
      @EndUserText.quickInfo: 'Company Code Name'                               
      _CompanyCode.CompanyCodeName, 
      
      @EndUserText.label: 'Document Type'
      PurchaseOrderType,
      @Semantics.text: true
      _PurchasingDocumentType._Text[1: Language = $session.system_language].PurchasingDocumentTypeName as PurchasingDocumentTypeName,
      
      @EndUserText.label: 'Item Category'
      PurchaseOrderItemCategory,
      @Semantics.text: true
      _PurgDocumentItemCategory._Text[1: Language = $session.system_language].PurgDocItemCategoryName, 
      

      /* Line Item Data */
            
      //@ObjectModel.text.element: ['MaterialName'] //Inserted by VDM CDS Suite Plugin

      //Commented by VDM CDS Suite Plugin:@Consumption.labelElement: 'MaterialName'
      //Commented by VDM CDS Suite Plugin:
      Material,
      @Semantics.text: true
      _Material._Text[1: Language = $session.system_language].MaterialName,

//      @ObjectModel.text.element: ['MaterialGroupName'] //Inserted by VDM CDS Suite Plugin

      //Commented by VDM CDS Suite Plugin:@Consumption.labelElement: 'MaterialGroupName'
      //Commented by VDM CDS Suite Plugin:
      MaterialGroup,
      @Semantics.text: true
      _MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName as MaterialGroupName,

 //     @ObjectModel.text.element: ['PlantName'] //Inserted by VDM CDS Suite Plugin

      //Commented by VDM CDS Suite Plugin:@Consumption.labelElement: 'PlantName'
      //Commented by VDM CDS Suite Plugin:
      Plant,
      @Semantics.text: true
      _Plant.PlantName,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      PurchasingCategory,
      @Semantics.text: true
      PurgCatName,

      CostCenter,
      WBSElementInternalID,

      @Semantics.currencyCode: true
      DisplayCurrency,

      /* Measures */
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      PurchaseOrderAmount,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      AmtWithContractRefInDspCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      AmtWithoutContractRefInDspCrcy,
      
//      Below annotation has been commented out since the field representation term is 'Ratio' and annotation mismatches.      
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.PurchaseOrderAmount > 0 THEN  $projection.AmtWithoutContractRefInDspCrcy / $projection.PurchaseOrderAmount ELSE 0 END'
      @EndUserText.label: 'Off Contract Spend %'
      1                                                                            as NonContractPurchaseRatio,
      
      @AnalyticsDetails.query.decimals: 0
//      Below annotation has been commented out since the field representation term is 'Rate' and annotation mismatches.
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula:  '$projection.NonContractPurchaseRatio * 100 '
      @EndUserText.label: 'Off Contract Spend In Percentage'
      1                                                                            as NonContractPurchaseRateInPct

}
```
