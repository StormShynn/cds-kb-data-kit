---
name: C_PURORDSERVICESPENDQUERY
description: "Service Spend"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value
semantic_en: "Service Spend"
semantic_vi: "Service Spend — CDS view tiêu dùng dựa trên C_PurOrdServiceSpend."
keywords:
  - "service"
  - "spend"
  - "purchase"
  - "order"
  - "item"
  - "supplier"
  - "name"
  - "purchasing"
  - "organization"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_PURORDSERVICESPENDQUERY

**Service Spend**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` |  | |  | `SupplierName` | `CHAR(10)` | Supplier |
| `SupplierName` |  | | `_SupplierName` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `PurchasingOrganization` |  | |  | `PurchasingOrganizationName` | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | | `_PurchasingOrganizationName` | `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingGroup` |  | |  | `PurchasingGroupName` | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` |  | | `_PurchasingGroupName` | `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `PurchasingDocumentStatus` |  | |  |  | `CHAR(2)` |  |
| `Material` |  | |  | `Product` | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  | `_Product._Text[1: Language = $session.system_language ].ProductName` | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  | `ProductGroup` | `CHAR(9)` | Material Group |
| `SupplierCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `Plant` |  | |  | `PlantName` | `CHAR(4)` | Plant |
| `PlantName` |  | | `_PlantName` | `PlantName` | `CHAR(30)` | Plant Name |
| `ProductType` |  | |  | `cast ( ProductType as producttype)` | `CHAR(4)` | Product Type |
| `ProductTypeCode` |  | |  |  | `CHAR(2)` | Product Type Group |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchase Order Date |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `PurchaseOrderItemCategory` |  | |  |  | `CHAR(1)` | Item category in purchasing document |
| `PurgDocItemCategoryName` |  | |  | `_PurgDocumentItemCategory._Text[1: Language = $session.system_language].PurgDocItemCategoryName` | `CHAR(20)` | Text for Item Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `TotalNetAmount` |  | |  |  | `CURR(21)` | Confirmed Amount of Service Entry Sheet |
| `InvoiceAmtInDisplayCurrency` |  | |  |  | `CURR(18)` | Invoice Amount |
| `ExpectedOverallLimitAmount` |  | |  |  | `CURR(13)` | Expected Value of Overall Limit |
| `OverallLimitAmount` |  | |  |  | `CURR(13)` | Overall Limit |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMPOSERSPNDQ'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Service Spend'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
define view C_PurOrdServiceSpendQuery

  with parameters
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : displaycurrency,

    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
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
    P_EndDate         : bedat

  as select from C_PurOrdServiceSpend( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                       P_StartDate: $parameters.P_StartDate,
                                       P_EndDate: $parameters.P_EndDate )

{

  key PurchaseOrder,
  key PurchaseOrderItem,

      @ObjectModel.text.element: ['SupplierName']
      @Consumption.labelElement: 'SupplierName'
      SupplierName                                                                                    as Supplier,
      @Semantics.text: true
      _SupplierName.SupplierName,

      @ObjectModel.text.element: ['PurchasingOrganizationName']
      @Consumption.labelElement: 'PurchasingOrganizationName'
      PurchasingOrganizationName                                                                      as PurchasingOrganization,
      @Semantics.text: true
      _PurchasingOrganizationName.PurchasingOrganizationName,

      CompanyCode,
      @ObjectModel.text.element: ['PurchasingGroupName']
      @Consumption.labelElement: 'PurchasingGroupName'
      PurchasingGroupName                                                                             as PurchasingGroup,
      @Semantics.text: true
      _PurchasingGroupName.PurchasingGroupName,

      @EndUserText.label: 'Status'
      @ObjectModel.text.element: ['PurchasingDocumentStatus']
      @Consumption.labelElement: 'PurchasingDocumentStatusName'
      PurchasingDocumentStatus,

      @EndUserText.label: 'Status Name'
      @Semantics.text: true
      _PurchasingDocumentStatus._Text[1:Language = $session.system_language].PurchasingDocumentStatusName,

      @ObjectModel.text.element: ['MaterialName']
      @Consumption.labelElement: 'MaterialName'
      Product                                                                                         as Material,
      @Semantics.text: true
      _Product._Text[1: Language = $session.system_language ].ProductName                             as MaterialName,

      @ObjectModel.text.element: ['MaterialGroupName']
      @Consumption.labelElement: 'MaterialGroupName'
      ProductGroup                                                                                    as MaterialGroup,
      @Semantics.text: true
      _ProductGroup._Text[1: Language = $session.system_language ].MaterialGroupName,

      @ObjectModel.text.element: ['CountryName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'CountryName'
      Country                                                                                         as SupplierCountry,
      @Semantics.text: true
      _CountryName._Text[1: Language = $session.system_language ].CountryName,

      @ObjectModel.text.element: ['PlantName']
      @Consumption.labelElement: 'PlantName'
      PlantName                                                                                       as Plant,
      @Semantics.text: true
      _PlantName.PlantName,



      //@VDM.lifecycle.status:#DEPRECATED
      //@VDM.lifecycle.successor: 'ProductTypeCode'
      @API.element: { releaseState: #DEPRECATED, successor: 'ProductTypeCode' }
      cast ( ProductType as producttype)                                                              as ProductType,
      ProductTypeCode,

      ServicePerformer,

      PurchaseOrderDate,
      CalendarWeek,
      CalendarMonth,
      CalendarQuarter,
      CalendarYear,
      @ObjectModel.text.element: ['PurgDocItemCategoryName']
      @Consumption.labelElement: 'PurgDocItemCategoryName'
      PurchaseOrderItemCategory,
      @Semantics.text: true
      _PurgDocumentItemCategory._Text[1: Language = $session.system_language].PurgDocItemCategoryName as PurgDocItemCategoryName,


      DisplayCurrency,
      @DefaultAggregation: #SUM
      PurOrdNetAmountInDisplayCrcy,

      @DefaultAggregation: #SUM
      TotalNetAmount,

      @DefaultAggregation: #SUM
      InvoiceAmtInDisplayCurrency,

      @DefaultAggregation: #SUM
      ExpectedOverallLimitAmount,

      @DefaultAggregation: #SUM
      OverallLimitAmount

}
```
