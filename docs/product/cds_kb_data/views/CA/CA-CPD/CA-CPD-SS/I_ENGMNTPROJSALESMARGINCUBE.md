---
name: I_ENGMNTPROJSALESMARGINCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?"
semantic_vi: "Sales Margin in Engmnt Project - Cube — CDS view giao diện dựa trên P_ENGMNTPROJSLSPLANDATAAGGRGN."
keywords:
  - "sales"
  - "margin"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "order"
  - "item"
  - "engmt"
  - "proj"
  - "employee"
  - "staffed"
  - "unit"
  - "measure"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# I_ENGMNTPROJSALESMARGINCUBE

**This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  | `cast(EngagementProject as /cpd/project preserving type )` | `CHAR(40)` | Project |
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | ✓ | |  |  | `NUMC(6)` | Sales Order Item |
| `EngmtProjEmployeeIsStaffed` | ✓ | |  |  | `CHAR(1)` | Confirmation of staffed Employee |
| `UnitOfMeasure` | ✓ | |  |  | `UNIT(3)` | Unit of Measure |
| `BaseUnit` | ✓ | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PersonnelNumber` | ✓ | |  |  | `NUMC(8)` | Personnel Number |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Period |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `EngmntProjPlanLineType` | ✓ | |  |  | `CHAR(1)` | Line type |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ControllingAreaCurrency` |  | | `_ControllingArea` | `ControllingAreaCurrency` | `CUKY(5)` | Controlling Area Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocumentStatus` |  | |  |  | `CHAR(2)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` |  |
| `BilledEffort` |  | |  |  | `QUAN(31)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PlndCostInCoCodeCrcy` |  | |  | `coalesce( PlndCostInCoCodeCrcy, 0 )` | `CURR(17)` |  |
| `PlndRevnInCoCodeCrcy` |  | |  | `coalesce( PlndRevnInCoCodeCrcy, 0 )` | `CURR(17)` |  |
| `ActlRevnInCoCodeCrcy` |  | |  | `coalesce( ActlRevnInCoCodeCrcy, 0 )` | `CURR(23)` |  |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  | `coalesce( ActlRevnInCoCodeCrcy, 0 )` | `CURR(23)` |  |
| `ActlCostInCoCodeCrcy` |  | |  | `coalesce( ActlCostInCoCodeCrcy, 0 )` | `CURR(23)` |  |
| `PlndCostAmtInCtrlgAreaCrcy` |  | |  | `coalesce( PlndCostAmtInCtrlgAreaCrcy, 0 )` | `CURR(17)` |  |
| `PlndRevenueAmtInCtrlgAreaCrcy` |  | |  | `coalesce( PlndRevenueAmtInCtrlgAreaCrcy, 0 )` | `CURR(17)` |  |
| `ActlRevenueAmtInCtrlgAreaCrcy` |  | |  | `coalesce( ActlRevenueAmtInCtrlgAreaCrcy, 0 )` | `CURR(23)` |  |
| `BilledRevnAmtInCtrlgAreaCrcy` |  | |  | `coalesce( ActlRevenueAmtInCtrlgAreaCrcy, 0 )` | `CURR(23)` |  |
| `ProjectVisibility` |  | | `_EngagementProject` | `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectProfileCode` |  | | `_EngagementProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `_EngagementProject` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_EngagementProjectSrvcOrg` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_Customer_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_Customer` | `I_EngmntProjCustInfo` | [0..1] |
| `_EngagementProjectSrvcOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Customer_2` | `I_Customer` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPROJSLSMARCUBE'
@AbapCatalog.compiler.compareFilter: true
@Analytics: { dataCategory: #CUBE }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Sales Margin in Engmnt Project - Cube'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {modelingPattern: #ANALYTICAL_CUBE,
               supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
define view I_EngmntProjSalesMarginCube
  as select from P_ENGMNTPROJSLSPLANDATAAGGRGN

  association [0..1] to I_EngagementProject         as _EngagementProject        on  $projection.EngagementProject = _EngagementProject.EngagementProject

  association [0..1] to I_EngmntProjCustInfo        as _Customer                 on  $projection.Customer = _Customer.Customer

  association [0..1] to I_EngagementProjectSrvcOrg  as _EngagementProjectSrvcOrg on  $projection.EngagementProjectServiceOrg = _EngagementProjectSrvcOrg.EngagementProjectServiceOrg

  association [0..1] to I_EngagementProjectStage    as _EngagementProjectStage   on  $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage

  association [0..1] to I_ControllingArea           as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter              as _ProfitCenter             on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                 and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_SalesOrder                as _SalesOrder               on  $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..1] to I_SalesOrderItem            as _SalesOrderItem           on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                 and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocumentItemCategory as _ItemCategory             on  $projection.SalesOrderItemCategory = _ItemCategory.SalesDocumentItemCategory

  association [0..1] to I_Currency                  as _Currency                 on  $projection.Currency = _Currency.Currency

  association [0..1] to I_Currency                  as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure            on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_CompanyCode               as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Country                   as _Country                  on  $projection.Country = _Country.Country

  association [1..1] to E_CustomerProject           as _Extension                on  $projection.EngagementProject = _Extension.CustomerProject
  
  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1    on  $projection.PersonnelNumber = _PersonWorkAgreement_1.PersonWorkAgreement
  
  association [0..1] to I_Customer                  as _Customer_2               on  $projection.Customer = _Customer_2.Customer
{
        @ObjectModel.foreignKey.association: '_EngagementProject'
  key   cast(EngagementProject as /cpd/project preserving type ) as EngagementProject,

        @ObjectModel.foreignKey.association: '_SalesOrder'
  key   SalesOrder                                               as SalesOrder,

        @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key   SalesOrderItem                                           as SalesOrderItem,

        @Semantics.booleanIndicator:true
  key   EngmtProjEmployeeIsStaffed                               as EngmtProjEmployeeIsStaffed,

        @ObjectModel.foreignKey.association: '_UnitOfMeasure'
        @Semantics.unitOfMeasure: true
  key   UnitOfMeasure                                            as UnitOfMeasure,

        @ObjectModel.foreignKey.association: '_BaseUnit'
        @Semantics.unitOfMeasure: true
  key   BaseUnit                                                 as BaseUnit,

  key   PersonnelNumber                                          as PersonnelNumber,

        @EndUserText.label: 'Month'
  key   FiscalPeriod                                             as FiscalPeriod,
        @EndUserText.label: 'Year'
  key   FiscalYear                                               as FiscalYear,

  key   EngmntProjPlanLineType                                   as EngmntProjPlanLineType,

        ProjectStartDate                                         as ProjectStartDate,

        ProjectEndDate                                           as ProjectEndDate,

        @ObjectModel.foreignKey.association: '_Customer'
        Customer                                                 as Customer,

        EngagementProjectType,

        EngagementProjectResourceType,

        @ObjectModel.foreignKey.association: '_EngagementProjectStage'
        EngagementProjectStage                                   as EngagementProjectStage,

        @ObjectModel.foreignKey.association: '_EngagementProjectSrvcOrg'
        EngagementProjectServiceOrg                              as EngagementProjectServiceOrg,

        EngagementProjectCategory                                as EngagementProjectCategory,

        @ObjectModel.foreignKey.association: '_CompanyCode'
        CompanyCode                                              as CompanyCode,

        @ObjectModel.foreignKey.association: '_Country'
        _CompanyCode.Country                                     as Country,

        @ObjectModel.foreignKey.association: '_ItemCategory'
        SalesOrderItemCategory                                   as SalesOrderItemCategory,

        @ObjectModel.foreignKey.association: '_ControllingArea'
        ControllingArea                                          as ControllingArea,

        @Semantics.currencyCode: true
        _ControllingArea.ControllingAreaCurrency                 as ControllingAreaCurrency,

        @ObjectModel.foreignKey.association: '_ProfitCenter'
        ProfitCenter                                             as ProfitCenter,

        AccountingDocumentStatus                                 as AccountingDocumentStatus,

        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        @DefaultAggregation: #SUM
        ActlEffortQty                                            as ActlEffortQty,

        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        @DefaultAggregation: #SUM
        BilledEffort                                             as BilledEffort,

        @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
        @DefaultAggregation: #SUM
        PlndEffortQty                                            as PlndEffortQty,

        @EndUserText.label: 'Year/Month'
        FiscalYearPeriod                                         as FiscalYearPeriod,

        @ObjectModel.foreignKey.association: '_Currency'
        @Semantics.currencyCode: true
        Currency                                                 as Currency,
        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        @Semantics.currencyCode: true
        CompanyCodeCurrency                                      as CompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @DefaultAggregation: #SUM
        coalesce( PlndCostInCoCodeCrcy, 0 )                      as PlndCostInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @DefaultAggregation: #SUM
        coalesce( PlndRevnInCoCodeCrcy, 0 )                      as PlndRevnInCoCodeCrcy,
        
        @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'BilledRevenueAmtInCoCodeCrcy'
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @DefaultAggregation: #SUM
        coalesce( ActlRevnInCoCodeCrcy, 0 )                      as ActlRevnInCoCodeCrcy,
        
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @DefaultAggregation: #SUM
        coalesce( ActlRevnInCoCodeCrcy, 0 )                      as BilledRevenueAmtInCoCodeCrcy,
        
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @DefaultAggregation: #SUM
        coalesce( ActlCostInCoCodeCrcy, 0 )                      as ActlCostInCoCodeCrcy,

        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        @DefaultAggregation: #SUM
        coalesce( PlndCostAmtInCtrlgAreaCrcy, 0 )                as PlndCostAmtInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        @DefaultAggregation: #SUM
        coalesce( PlndRevenueAmtInCtrlgAreaCrcy, 0 )             as PlndRevenueAmtInCtrlgAreaCrcy,
        
        @VDM.lifecycle.status: #DEPRECATED
        @VDM.lifecycle.successor: 'BilledRevnAmtInCtrlgAreaCrcy'    
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        @DefaultAggregation: #SUM
        coalesce( ActlRevenueAmtInCtrlgAreaCrcy, 0 )             as ActlRevenueAmtInCtrlgAreaCrcy,
        
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        @DefaultAggregation: #SUM
        coalesce( ActlRevenueAmtInCtrlgAreaCrcy, 0 )             as BilledRevnAmtInCtrlgAreaCrcy,

        @EndUserText.label:'Confidential Project'
        @Analytics.internalName: #LOCAL
        _EngagementProject.ProjectVisibility                     as ProjectVisibility,

        @Consumption.hidden: true
        _EngagementProject.ProjectProfileCode,

        @EndUserText.label: 'My Projects'
        @Semantics.booleanIndicator:true
        IsMyProject                                              as IsMyProject,

        _EngagementProject,
         @API.element: {
         successor: '_Customer_2',
         releaseState: #DEPRECATED
         }
         @VDM.lifecycle: {
         successor: '_Customer_2',
         status: #DEPRECATED
         }
        _Customer,
        _EngagementProjectSrvcOrg,
        _EngagementProjectStage,
        _SalesOrder,
        _SalesOrderItem,
        _ItemCategory,
        _ControllingArea,
        _ProfitCenter,
        _Currency,
        _CompanyCodeCurrency,
        _UnitOfMeasure,
        _BaseUnit,
        _CompanyCode,
        _Country,
        @Consumption.hidden: true
        _PersonWorkAgreement_1,
        _Customer_2
}

where
  EngmtProjFinPlanVersion = '1'
```
