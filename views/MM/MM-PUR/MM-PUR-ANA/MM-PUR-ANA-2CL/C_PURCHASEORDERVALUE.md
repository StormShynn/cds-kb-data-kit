---
name: C_PURCHASEORDERVALUE
description: "Purchase Order Value"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value
semantic_en: "Purchase Order Value"
semantic_vi: "Purchase Order Value — CDS view tiêu dùng dựa trên P_PURCHASEORDERVALUE."
keywords:
  - "purchase"
  - "order"
  - "value"
  - "item"
  - "account"
  - "assignment"
  - "number"
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
  - order
  - purchase-order
---
# C_PURCHASEORDERVALUE

**Purchase Order Value**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  | `cast(P_PurOrdItmAcctAssgmt.PurchaseOrder as vdm_purchaseorder)` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  | `cast(PurchaseOrderItem as vdm_purchaseorderitem)` | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | ✓ | |  |  | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` | ✓ | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `PurgCatUUID` |  | |  |  | `RAW(16)` | Purchasing Category UUID |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Country` |  | |  | `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | | `_Supplier` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | | `_CalendarDate` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `PostingMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | | `_CalendarDate` | `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `YearQuarter` |  | | `_CalendarDate` | `YearQuarter` | `NUMC(5)` | Year Quarter |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | | `_PurchasingOrganization` | `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` |  | | `_PurchasingGroup` | `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  | `_MaterialText._Text[1: Language = $session.system_language].ProductName` | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  | `_MaterialGroupText._Text[1: Language = $session.system_language].MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `ProductTypeCode` |  | |  | `ProductType` | `CHAR(2)` | Product Type Group |
| `ProductType` |  | |  | `cast ( ProductType as producttype)` | `CHAR(4)` | Product Type |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatRelatedToMaterialGroup` |  | |  | `coalesce(PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory,'')` | `CHAR(20)` |  |
| `PurgCatName` |  | |  | `case when PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName is null then cast( _Doc.DomainText as /srmsmc/puc_name preserving type) else PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName end` | `CHAR(60)` | Name of Purchasing Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `CustomerProjectName` |  | | `_WBSElement` | `CustomerProjectName` | `CHAR(40)` | Customer Project Name |
| `CustProjWorkPackageName` |  | | `_WBSElement` | `CustProjWorkPackageName` | `CHAR(60)` | Plan Item Description |
| `WBSElement` |  | | `_WBSElementByInternal` | `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSDescription` |  | | `_WBSElementByInternal` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as displaycurrency )` | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `NmbrOfCmpltlyDlvrdPurOrdItms` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `_MaterialText` | | ✓ | | | | |
| `_MaterialGroupText` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarMonthWithText` | | ✓ | | | | |
| `_CountryGeoPoint` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElement` | `P_Purordmaintaincustproj` | [1..1] |
| `_MaterialText` | `I_Product` | [1..1] |
| `_MaterialGroupText` | `I_ProductGroup` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_WBSElementByInternal` | `I_WBSElementByInternalKey` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarMonthWithText` | `I_CalendarMonth` | [1..1] |
| `_CountryGeoPoint` | `I_CountryGeoPoint` | [0..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Purchase Order Value'
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@AbapCatalog.sqlViewName: 'CMMPURORDVALUE'
@OData.publish: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view C_PurchaseOrderValue

  with parameters
    P_DisplayCurrency : displaycurrency,


    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate       : bedat,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate         : bedat,

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language        : sylangu

  as select from    P_PURCHASEORDERVALUE( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                            P_StartDate : $parameters.P_StartDate,
                                            P_EndDate : $parameters.P_EndDate ) as P_PurOrdItmAcctAssgmt

  //    inner join      P_RelevantDates(    P_Date: $parameters.P_Date,
  //                    P_EvaluationTimeFrameInDays: $parameters.P_EvaluationTimeFrameInDays) as _Date                       on PurchaseOrderDate = _Date.CalendarDate
    left outer join I_PurchasingCategoryMatlGroup                               as PurchasingCategoryMatlGroup on P_PurOrdItmAcctAssgmt.MaterialGroup = PurchasingCategoryMatlGroup.MaterialGroup
    left outer join P_UNSGNDMATGRPTXT                                           as _Doc                        on _Doc.DocNumber = '1'
  association [1..1] to P_Purordmaintaincustproj  as _WBSElement             on $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [1..1] to I_Product                 as _MaterialText           on $projection.Material = _MaterialText.Product
  association [1..1] to I_ProductGroup            as _MaterialGroupText      on $projection.MaterialGroup = _MaterialGroupText.MaterialGroup
  association [1..1] to I_CalendarDate            as _CalendarDate           on $projection.PurchaseOrderDate = _CalendarDate.CalendarDate
  association [0..1] to I_WBSElementByInternalKey as _WBSElementByInternal   on $projection.WBSElementInternalID = _WBSElementByInternal.WBSElementInternalID
  association [1..1] to I_PurchasingGroup         as _PurchasingGroup        on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to I_PurchasingOrganization  as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [1..1] to I_CalendarMonth           as _CalendarMonth          on _CalendarDate.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarMonth           as _CalendarMonthWithText  on $projection.PostingMonth = _CalendarMonthWithText.CalendarMonth
  association [0..1] to I_CountryGeoPoint         as _CountryGeoPoint        on $projection.Country = _CountryGeoPoint.Country
  association [0..1] to I_Region                  as _SupplierRegion         on  $projection.region  = _SupplierRegion.Region
                                                                                 and $projection.SupplierCountry = _SupplierRegion.Country

{
      /* Keys */
  key cast(P_PurOrdItmAcctAssgmt.PurchaseOrder as vdm_purchaseorder)                     as PurchaseOrder,
  key cast(PurchaseOrderItem as vdm_purchaseorderitem)                                   as PurchaseOrderItem,
  key AccountAssignmentNumber,
      @Environment.sql.passValue: true
  key PurgDocMigrtnIsCmpltdForAnlyts,
      @Consumption.hidden: true
      PurgCatUUID,
      /* Supplier */
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @Semantics.text: true
      _Supplier.SupplierName,
      @ObjectModel.foreignKey.association: '_SupplierCountry'      
      SupplierCountry,
      @Semantics.text: true
      _SupplierCountry._Text[1: Language = $parameters.P_Language].CountryName,
      @ObjectModel.foreignKey.association: '_CountryGeoPoint'
      SupplierCountry as Country,
      @ObjectModel.foreignKey.association: '_SupplierRegion'
      _Supplier.Region,
      /* Order Date */
      //@Consumption.hidden: true Commented because of BOC stories
      PurchaseOrderDate,
      IsCompletelyDelivered,
      @Semantics.calendar.year: true
      _CalendarDate.CalendarYear,
      _CalendarDate.CalendarQuarter,
      
      @VDM.lifecycle.status:#DEPRECATED 
      @VDM.lifecycle.successor: 'PostingMonth'
      _CalendarDate.CalendarMonth,
      
      @ObjectModel.foreignKey.association: '_CalendarMonthWithText'
      _CalendarDate.CalendarMonth as PostingMonth,
      
      _CalendarDate.CalendarWeek,
      @Consumption.hidden: true
      _CalendarDate.YearQuarter,

      /* Header */
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @Semantics.text: true
      _PurchasingOrganization.PurchasingOrganizationName,
      CompanyCode,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,
      @Semantics.text: true
      _PurchasingGroup.PurchasingGroupName,

      /* Item Data */
      @ObjectModel.foreignKey.association: '_MaterialText'
      Material,
      @Semantics.text: true
      _MaterialText._Text[1: Language = $session.system_language].ProductName            as MaterialName,
      @ObjectModel.foreignKey.association: '_MaterialGroupText'
      P_PurOrdItmAcctAssgmt.MaterialGroup,
      @Semantics.text: true
      _MaterialGroupText._Text[1: Language = $session.system_language].MaterialGroupName as MaterialGroupName,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @Semantics.text: true
      _Plant.PlantName,

      ProductType                                                                        as ProductTypeCode,

      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor:'ProductTypeCode'
      cast ( ProductType as producttype)                                                 as ProductType,

      ServicePerformer,
      
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'PurgCatRelatedToMaterialGroup'
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @EndUserText.label: 'Purchasing Category(Deprecated)'
      PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory                 as PurchasingCategory,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @EndUserText.label: 'Purchasing Category'
      coalesce(PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory,'')    as PurgCatRelatedToMaterialGroup,

      case when PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName is null then
       cast( _Doc.DomainText as /srmsmc/puc_name preserving type)
      //  'Material Group not linked to purchasing category'
       else PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName   end            as PurgCatName,
      WBSElementInternalID,
      @Consumption.hidden: true
      _WBSElement.CustomerProjectName,
      @Consumption.hidden: true
      _WBSElement.CustProjWorkPackageName,

      @ObjectModel.text.element: ['WBSDescription']
      @Consumption.labelElement: 'WBSDescription'
      _WBSElementByInternal.WBSElement,
      @Semantics.text: true
      _WBSElementByInternal.WBSDescription,

      CostCenter,
      @UI.hidden: true
      @Semantics.currencyCode:true
      cast( :P_DisplayCurrency as displaycurrency )                                      as DisplayCurrency,

      /* Order Amount*/
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation:#SUM
      PurOrdNetAmountInDisplayCrcy,

      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as abap.int4 )                                                             as NumberOfPurchaseOrders,

      // new Field name Proposed : NmbrOfCmpltlyDlvrdPurOrdItms
      
      // Deprecating the field 'NmbrOfCmpltlyDlvrdPurOrdItms' (Count of delivery completed PO Items) as this  measure not achievable since the key definition of the CDS is not at Purchase Order Item. 
      // The key definition is at Account Assignment Number level. The successor field 'NumberOfPurchaseOrderItems' would show the count of Purchaser Order Items as a measure.
      //  JIRA reference - https://jira.tools.sap/browse/S4HPROCANALYTICS-1476
      @Aggregation.referenceElement: ['PurchaseOrderItem']
      @Aggregation.default: #COUNT_DISTINCT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'NumberOfPurchaseOrderItems'
      cast( 1 as abap.int4 )                                                             as NmbrOfCmpltlyDlvrdPurOrdItms,
      
      @Aggregation.referenceElement: ['PurchaseOrderItem']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as abap.int4 )                                                             as NumberOfPurchaseOrderItems,    
      

      _MaterialGroupText,
      _Plant,
      _PurchasingGroup,
      _PurchasingOrganization,
      _Supplier,
      _SupplierCountry,
      _MaterialText,
       _CalendarMonthWithText,
      @VDM.lifecycle.status:#DEPRECATED 
      @VDM.lifecycle.successor: '_CalendarMonthWithText' 
      _CalendarMonth,
      _CountryGeoPoint,
      _SupplierRegion

}
```
