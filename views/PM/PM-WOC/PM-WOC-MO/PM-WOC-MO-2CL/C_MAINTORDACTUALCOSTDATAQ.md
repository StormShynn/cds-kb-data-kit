---
name: C_MAINTORDACTUALCOSTDATAQ
description: "Maintenance Order Actual Cost Data Query"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value
semantic_en: "Maintenance Order Actual Cost Data Query"
semantic_vi: "Maintenance Order Actual Cost Data Query — CDS view tiêu dùng dựa trên I_MaintOrderActualCostDataCube."
keywords:
  - "maintenance"
  - "order"
  - "actual"
  - "cost"
  - "data"
  - "query"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDACTUALCOSTDATAQ

**Maintenance Order Actual Cost Data Query**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `PostingMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order ID |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintOrdMainWorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `MaintOrdMainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `FunctionalLocationLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
| `ManufacturerPartTypeName` |  | |  |  | `CHAR(20)` | Manufacturer model number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `TechnicalObjectType` |  | |  |  | `CHAR(10)` | Type of Technical Object |
| `AssetManufacturerName` |  | |  |  | `CHAR(30)` | Manufacturer of Asset |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `LocAcctAssgmtControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LocAcctAssgmtCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `CostElementGroup` |  | |  |  | `CHAR(50)` | Hierarchy parent node |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | G/L Account Hierarchy |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `_MaintenanceOrderTypeText` | | ✓ | | | | |
| `_TechnicalObjectTypeText` | | ✓ | | | | |
| `_MaintOrdMainWorkCenterText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_MaintenanceActivityTypeText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_ConstructionMaterialText` | | ✓ | | | | |
| `_AssemblyText` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCodeText` | | ✓ | | | | |
| `_CatalogProfileText` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAcctInChartOfAccountsText` | | ✓ | | | | |
| `_GLAccountLineItem` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_MaintOrdMainWorkCenterPlant` | | ✓ | | | | |
| `_MaintenancePlant` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..1] |
| `_MaintenanceOrderTypeText` | `I_OrderTypeText` | [0..*] |
| `_TechnicalObjectTypeText` | `I_TechnicalObjectTypeText` | [0..*] |
| `_MaintOrdMainWorkCenterText` | `I_WorkCenterTextBySemanticKey` | [0..*] |
| `_WorkCenterText` | `I_WorkCenterTextBySemanticKey` | [0..*] |
| `_MaintenanceActivityTypeText` | `I_MaintenanceActivityTypeText` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_ConstructionMaterialText` | `I_ProductText` | [0..*] |
| `_AssemblyText` | `I_ProductText` | [0..*] |
| `_MaintOrdPlngDegreeCodeText` | `I_MaintOrdPlngDegreeCodeText` | [0..*] |
| `_CatalogProfileText` | `I_InspectionCatalogText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@AbapCatalog.sqlViewName: 'CMTORDACTCOSTDQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Maintenance Order Actual Cost Data Query'
@Analytics: { query: true } // dataExtraction.enabled: true
@OData.publish: true
@Metadata.allowExtensions: false
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY

@AccessControl.privilegedAssociations: ['_MaintenanceOrderTypeText', '_TechnicalObjectTypeText', '_GLAcctInChartOfAccountsText', '_MaintOrdMainWorkCenterText', '_WorkCenterText', '_MaintenanceActivityTypeText', '_CostCenterText',
                                        '_ConstructionMaterialText', '_AssemblyText', '_CatalogProfileText']

define view C_MaintOrdActualCostDataQ
  as select from I_MaintOrderActualCostDataCube
  association [0..1] to I_GLAccountHierarchy          as _Hierarchy                   on  _Hierarchy.GLAccountHierarchy = $projection.GLAccountHierarchy
                                                                                      and _Hierarchy.ValidityEndDate    >= $session.system_date
  association [0..*] to I_OrderTypeText               as _MaintenanceOrderTypeText    on  _MaintenanceOrderTypeText.OrderType = $projection.MaintenanceOrderType
  association [0..*] to I_TechnicalObjectTypeText     as _TechnicalObjectTypeText     on  _TechnicalObjectTypeText.TechnicalObjectType = $projection.TechnicalObjectType
  association [0..*] to I_WorkCenterTextBySemanticKey as _MaintOrdMainWorkCenterText  on  _MaintOrdMainWorkCenterText.WorkCenter = $projection.MaintOrdMainWorkCenter
                                                                                      and _MaintOrdMainWorkCenterText.Plant      = $projection.MaintOrdMainWorkCenterPlant
  association [0..*] to I_WorkCenterTextBySemanticKey as _WorkCenterText              on  _WorkCenterText.WorkCenter = $projection.WorkCenter
                                                                                      and _WorkCenterText.Plant      = $projection.WorkCenterPlant
  association [0..*] to I_MaintenanceActivityTypeText as _MaintenanceActivityTypeText on  _MaintenanceActivityTypeText.MaintenanceActivityType = $projection.MaintenanceActivityType
  association [0..*] to I_CostCenterText              as _CostCenterText              on  _CostCenterText.CostCenter      = $projection.CostCenter
                                                                                      and _CostCenterText.ControllingArea = $projection.ControllingArea
  association [0..*] to I_ProductText                 as _ConstructionMaterialText    on  _ConstructionMaterialText.Product = $projection.ConstructionMaterial
  association [0..*] to I_ProductText                 as _AssemblyText                on  _AssemblyText.Product = $projection.Assembly
  association [0..*] to I_MaintOrdPlngDegreeCodeText  as _MaintOrdPlngDegreeCodeText  on  _MaintOrdPlngDegreeCodeText.MaintenanceOrderPlanningCode = $projection.MaintenanceOrderPlanningCode
//  association [0..*] to I_TechObjIsEquipOrFuncnlLocT  as _TechObjIsEquipOrFuncnlLocT  on  _TechObjIsEquipOrFuncnlLocT.TechObjIsEquipOrFuncnlLoc = $projection.techobjisequiporfuncnlloc
  association [0..*] to I_InspectionCatalogText       as _CatalogProfileText          on  _CatalogProfileText.InspectionCatalog = $projection.CatalogProfile
//  association [0..*] to C_PMWorkCenterVH              as _WorkCenterVH             on  $projection.MaintOrdMainWorkCenter     = _WorkCenterVH.WorkCenter
//                                                                                   and $projection.MaintOrdMainWorkCenterPlant = _WorkCenterVH.Plant
//                                                                                   and _WorkCenterVH.WorkCenterTypeCode       = 'A'
 
{
      //I_MaintOrderActualCostCube
  key SourceLedger,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true, mandatory : false }
  key CompanyCode,
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : false, mandatory : false }
      ----@AnalyticsDetails.query.variableSequence: 10
  key Ledger,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @UI.textArrangement: #TEXT_ONLY
      ----@AnalyticsDetails.query.display: #TEXT
//      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_CalendarMonth', element: 'CalendarMonth' } }]
      PostingMonth,
//      @Consumption.semanticObject: 'MaintenanceOrder'
//      @EndUserText.label: 'Maintenance Order'
      MaintenanceOrder,
      ----@AnalyticsDetails.query.display: #KEY_TEXT
//      @UI.textArrangement: #TEXT_LAST
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
//      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MaintOrderTypeVH', element: 'MaintenanceOrderType' } }]
//      @ObjectModel.text.association: '_MaintenanceOrderTypeText'
      MaintenanceOrderType,
      ----@AnalyticsDetails.query.display: #TEXT
//      @UI.textArrangement: #TEXT_ONLY
      MaintenanceOrderIsPlanned,
      ----@AnalyticsDetails.query.display: #TEXT
//      @UI.textArrangement: #TEXT_ONLY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @EndUserText.label: 'Order Planning Indicator'
//      @ObjectModel.text.association: '_MaintOrdPlngDegreeCodeText'
//      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_MaintOrdPlngDegreeCode', element: 'MaintenanceOrderPlanningCode' }} ]
      MaintenanceOrderPlanningCode,

      // @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      // @EndUserText.label: 'Equipment Type'
      // EquipmentType,
      // @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      // @EndUserText.label: 'Equipment Class'
      // EquipmentClassFromClfn,
      --@AnalyticsDetails.query.display: #TEXT_KEY
      @EndUserText.label: 'Main Work Center'
//      @ObjectModel.text.association: '_MaintOrdMainWorkCenterText'
//      @UI.textArrangement: #TEXT_FIRST
//      @Consumption.valueHelp: '_WorkCenterVH'
//      @Consumption.valueHelpDefinition: null
      MaintOrdMainWorkCenter,

      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      @EndUserText.label: 'Main Work Center Plant'
//      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' } }]
      MaintOrdMainWorkCenterPlant,
      --@AnalyticsDetails.query.display: #TEXT_KEY
      MaintenancePlannerGroup,
      MaintenancePlan,
      MaintenanceItem,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      PlantSection,
      AssetLocation,
      ABCIndicator,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @ObjectModel.text.association: '_WorkCenterText'
//      @Consumption.valueHelp: '_WorkCenterVH'
//      @Consumption.valueHelpDefinition: null
      @EndUserText.label: 'Work Center'
      WorkCenter,
      @EndUserText.label: 'Work Center Plant'
      WorkCenterPlant,
      --@AnalyticsDetails.query.display: #TEXT_KEY
      @EndUserText.label: 'Maintenance Activity Type'
//      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_MaintActyTypeStdVH', element: 'MaintenanceActivityType' } }]
//      @ObjectModel.text.association: '_MaintenanceActivityTypeText'
      MaintenanceActivityType,
//      @Consumption.filter.hidden: true
//      OrderOperation,
//      @Consumption.filter.hidden: true
//      OrderSuboperation,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.semanticObject: 'MaintenanceObject'
//      TechnicalObjectLabel,
      FunctionalLocationLabelName,
      --@AnalyticsDetails.query.display: #TEXT
//      @UI.textArrangement: #TEXT_ONLY
//      @ObjectModel.text.association: '_TechObjIsEquipOrFuncnlLocT'
//      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_TechObjIsEquipOrFuncnlLoc', element: 'TechObjIsEquipOrFuncnlLoc' }}]
//      TechObjIsEquipOrFuncnlLoc,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      ManufacturerPartTypeName,
//      @ObjectModel.text.association: '_AssemblyText'
      Assembly,
//      @ObjectModel.text.association: '_TechnicalObjectTypeText'
      TechnicalObjectType,
      AssetManufacturerName,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.valueHelpDefinition: [{ entity: { name: 'C_MaintenancePlanPlantVH', element: 'MaintenancePlanningPlant' } }]
      MaintenancePlanningPlant,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
      MaintenancePlant,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @UI.textArrangement: #TEXT_FIRST
//      @ObjectModel.text.association: '_GLAcctInChartOfAccountsText'
      GLAccount,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Inspectioncatalog', element: 'InspectionCatalog' }}]
//      @ObjectModel.text.association: '_CatalogProfileText'
      CatalogProfile,
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @ObjectModel.text.association: '_ConstructionMaterialText'
      ConstructionMaterial,
      --@AnalyticsDetails.query.display: #TEXT_KEY
//      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true}
//      @ObjectModel.text.association: '_CostCenterText'
      CostCenter,
//      @EndUserText.label: 'Spend Category'
//      @ObjectModel.text.element: ['CostElementGroupName']
      --@AnalyticsDetails.query.display: #TEXT_KEY
      @EndUserText.label: 'Location Acct Assgmt Controlling Area'
      LocAcctAssgmtControllingArea,
      @EndUserText.label: 'Location Acct Assgmt Cost Center'
      LocAcctAssgmtCostCenter,
      @EndUserText.label: 'Responsible Cost Center'
      ResponsibleCostCenter,
      @EndUserText.label: 'Cost Element Group'
      CostElementGroup,
//      @UI.hidden
//      _CostElementGroupText[1: Language = $session.system_language ].HierarchyNodeText as CostElementGroupName,

//      @UI.hidden
//      IsSettlement,
//      @UI.hidden
//      LastChangeDateTime,
      ChartOfAccounts,
      ControllingArea,
      @EndUserText.label: 'Cost Element Hierarchy'
      GLAccountHierarchy,
//      @UI.hidden
//      $parameters.P_GLAccountHierarchy                                                 as GLAccountHierarchy,
//      @UI.hidden
//      TechnicalObject,

//      @EndUserText.label: 'Costs (Company Code Currency)'
//      @EndUserText.quickInfo: 'Costs in Company Code Currency'
      @DefaultAggregation: #SUM
      AmountInCompanyCodeCurrency,
//      @EndUserText.label: 'Company Code Currency'
//      @EndUserText.quickInfo: 'Company Code Currency'
//      @Consumption.filter.hidden: true
//      CompanyCodeCurrency,
//      @EndUserText.label: 'Costs (Global Currency)'
//      @EndUserText.quickInfo: 'Costs in Global Currency'
      @DefaultAggregation: #SUM
      AmountInGlobalCurrency,
//      @EndUserText.label: 'Global Currency'
//      @EndUserText.quickInfo: 'Global Currency'
//      @Consumption.filter.hidden: true
//      GlobalCurrency,
//      @EndUserText.label: 'Costs (Transaction Currency)'
//      @EndUserText.quickInfo: 'Costs in Transaction Currency'
      @DefaultAggregation: #SUM
      AmountInTransactionCurrency,
//      @EndUserText.label: 'Transaction Currency'
//      @EndUserText.quickInfo: 'Transaction Currency'
//      @Consumption.filter.hidden: true
//      TransactionCurrency,


//      @EndUserText.label: 'Costs'
//      @DefaultAggregation: #SUM
//      AmountInDisplayCurrency,
//      DisplayCurrency,

      _MaintenanceOrderTypeText,
      _TechnicalObjectTypeText,
      _MaintOrdMainWorkCenterText,
      _WorkCenterText,
      _MaintenanceActivityTypeText,
      _CostCenterText,
      _ConstructionMaterialText,
      _AssemblyText,
      _MaintOrdPlngDegreeCodeText,
//      _TechObjIsEquipOrFuncnlLocT,
      _CatalogProfileText,
      /* Inherited */
      --_TechnicalObjectCodeCatalog,
//      _TechObjIsEquipOrFuncnlLoc,
      _MaintenanceOrder,
      _GLAccountInChartOfAccounts,
      _GLAcctInChartOfAccountsText,
      _GLAccountLineItem,
      _MaintOrdPlngDegreeCode,
      _MaintOrdMainWorkCenterPlant,
      _MaintenancePlant,
      _MaintenancePlanningPlant
//      _WorkCenterVH
}
```
