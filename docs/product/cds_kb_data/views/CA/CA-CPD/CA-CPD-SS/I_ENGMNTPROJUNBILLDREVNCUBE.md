---
name: I_ENGMNTPROJUNBILLDREVNCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?"
semantic_vi: "Unbilled Revn in Engmnt Project – Cube — CDS view tổng hợp dựa trên P_EngmntProjUnbilledRevCumltv."
keywords:
  - "unbilled"
  - "revn"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "sales"
  - "order"
  - "item"
  - "fiscal"
  - "year"
  - "period"
  - "ledger"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGMNTPROJUNBILLDREVNCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `EngagementProjectCategory` |  | | `_EngagementProject` | `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `EngagementProjectType` |  | | `_EngagementProject` | `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | | `_EngagementProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `EngagementProjectServiceOrg` |  | | `_EngagementProject` | `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ProjectStartDate` |  | | `_EngagementProject` | `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | | `_EngagementProject` | `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `ControllingArea` |  | | `_EngagementProject` | `ControllingArea` | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | | `_EngagementProject` | `CompanyCode` | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | | `_EngagementProject` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` |  | | `_EngagementProject` | `CostCenter` | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | | `_EngagementProject` | `Customer` | `CHAR(10)` | Customer Number |
| `ProjectManager` |  | |  | `ProjectManagerExternalID` | `CHAR(60)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `SalesOrderItemCategory` |  | | `_SalesOrderItem` | `SalesOrderItemCategory` | `CHAR(4)` | Sales Document Item Category |
| `Material` |  | |  | `cast(_SalesOrderItem.Material as abap.char( 40 ))` | `CHAR(40)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `EngagementProjectStage` |  | | `_EngagementProject` | `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `UnbilldRevnAmountInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `ProjectVisibility` |  | | `_EngagementProject` | `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManagerWorkAgreement` |  | | `_EngagementProject` | `ProjectManagerWorkAgreement` | `NUMC(8)` |  |
| `_EngagementProject` | | ✓ | | | | |
| `_EngagementProjectSrvcOrg` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_EngagementProjectSrvcOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IENGPRJUNBREVCU',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL
}
@VDM: {
  viewType:#COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@ObjectModel.usageType: {
  sizeCategory: #XL,
  dataClass: #MIXED,
  serviceQuality: #D
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Unbilled Revn in Engmnt Project – Cube'
@ObjectModel: {modelingPattern: #ANALYTICAL_CUBE,
               supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
define view I_EngmntProjUnbilldRevnCube
  as select from P_EngmntProjUnbilledRevCumltv
  association [0..1] to I_EngagementProject         as _EngagementProject        on  $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..1] to I_EngagementProjectSrvcOrg  as _EngagementProjectSrvcOrg on  $projection.engagementprojectserviceorg = _EngagementProjectSrvcOrg.EngagementProjectServiceOrg
  association [0..1] to I_Customer                  as _Customer                 on  $projection.customer = _Customer.Customer
  association [1]    to I_SalesOrder                as _SalesOrder               on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem            as _SalesOrderItem           on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                 and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_Currency                  as _Currency                 on  $projection.ProjectCurrency = _Currency.Currency
  association [0..1] to I_Product                   as _Product                  on  $projection.Material = _Product.Product
  association [0..1] to I_SalesDocumentItemCategory as _ItemCategory             on  $projection.salesorderitemcategory = _ItemCategory.SalesDocumentItemCategory
  association [1]    to E_CustomerProject           as _Extension                on  $projection.EngagementProject = _Extension.CustomerProject
  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1    on  $projection.projectmanagerworkagreement = _PersonWorkAgreement_1.PersonWorkAgreement
{

  @ObjectModel.foreignKey.association: '_EngagementProject'
  @EndUserText.label: 'Engagement Project'
  EngagementProject,

  @ObjectModel.foreignKey.association: '_SalesOrder'
  @EndUserText.label: 'Sales Order'
  SalesOrder,

  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  @EndUserText.label: 'Sales Order Item'
  SalesOrderItem,

  @EndUserText.label: 'Fiscal Year Period'
  FiscalYearPeriod,

  @Consumption.hidden: true
  Ledger,

  @Consumption.hidden: true
  _EngagementProject.EngagementProjectCategory,

  @Consumption.hidden: true
  _EngagementProject.EngagementProjectType,

  @Consumption.hidden: true
  _EngagementProject.ProjectProfileCode,

  @ObjectModel.foreignKey.association: '_EngagementProjectSrvcOrg'
  @EndUserText.label: 'Service Organization'
  _EngagementProject.EngagementProjectServiceOrg,

  @EndUserText.label: 'Start Date'
  _EngagementProject.ProjectStartDate,

  @EndUserText.label: 'End Date'
  _EngagementProject.ProjectEndDate,

  @ObjectModel.foreignKey.association: '_ControllingArea'
  @EndUserText.label: 'Controlling Area'
  _EngagementProject.ControllingArea,

  @ObjectModel.foreignKey.association: '_CompanyCode'
  @EndUserText.label: 'Company Code'
  _EngagementProject.CompanyCode,

  @ObjectModel.foreignKey.association: '_ProfitCenter'
  @EndUserText.label: 'Profit Center'
  _EngagementProject.ProfitCenter,

  @ObjectModel.foreignKey.association: '_CostCenter'
  @EndUserText.label: 'Cost Center'
  _EngagementProject.CostCenter,

  @ObjectModel.foreignKey.association: '_Customer'
  @EndUserText.label: 'Customer'
  _EngagementProject.Customer,

  @EndUserText.label: 'Project Manager'
  @ObjectModel.text.element: 'ProjectManagerName'
  ProjectManagerExternalID                          as ProjectManager,

  @EndUserText.label: 'Project Manager'
  @Semantics.text: true
  ProjectManagerName,

  @ObjectModel.foreignKey.association: '_ItemCategory'
  @EndUserText.label: 'Billing Item Type'
  _SalesOrderItem.SalesOrderItemCategory,

  @ObjectModel.foreignKey.association: '_Product'
  @EndUserText.label: 'Material'
  cast(_SalesOrderItem.Material as abap.char( 40 )) as Material,

  @Semantics.booleanIndicator: true
  @EndUserText.label: 'My Projects'
  IsMyProject,

  @ObjectModel.foreignKey.association: '_Currency'
  @Semantics.currencyCode: true
  @EndUserText.label: 'Project Currency'
  ProjectCurrency,

  @ObjectModel.foreignKey.association: '_EngagementProjectStage'
  @EndUserText.label: 'Project Stage'
  _EngagementProject.EngagementProjectStage,

  @Semantics.amount.currencyCode: 'ProjectCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Unbilled Revenue Till Period'
  UnbilldRevnAmountInProjCrcy,

  @EndUserText.label:'Confidential Project'
  @Analytics.internalName: #LOCAL
  _EngagementProject.ProjectVisibility              as ProjectVisibility,    
  
  @Consumption.hidden: true  
  _EngagementProject.ProjectManagerWorkAgreement,
  
  _EngagementProject,
  _EngagementProjectSrvcOrg,
  _SalesOrder,
  _SalesOrderItem,
  _Currency,
  @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
  _Product,
  _EngagementProject._ControllingArea,
  _EngagementProject._CompanyCode,
  _EngagementProject._ProfitCenter,
  @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
  _EngagementProject._CostCenter,
  //_EngagementProject._Customer,
  _Customer,
  _EngagementProject._EngagementProjectStage,
  _ItemCategory,
  
  @Consumption.hidden: true
  _PersonWorkAgreement_1
}
where
       _EngagementProject.EngagementProjectCategory = 'C'
  and(
       _EngagementProject.EngagementProjectStage    = 'P003'
    or _EngagementProject.EngagementProjectStage    = 'P004'
    or _EngagementProject.EngagementProjectStage    = 'P005'
    
  )
```
