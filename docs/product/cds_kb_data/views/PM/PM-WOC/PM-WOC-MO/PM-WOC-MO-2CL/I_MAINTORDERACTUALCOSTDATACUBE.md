---
name: I_MAINTORDERACTUALCOSTDATACUBE
description: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value
semantic_en: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
semantic_vi: "Maint Order Actual Cost Data - Cube — CDS view giao diện dựa trên I_JournalEntryItem."
keywords:
  - "Maintenance Order Actual Cost - Analytics Cube"
  - "maint"
  - "order"
  - "actual"
  - "cost"
  - "data"
  - "cube"
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
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - material
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTORDERACTUALCOSTDATACUBE

**This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `PostingMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `MaintenanceOrder` |  | |  | `OrderID` | `CHAR(12)` | Order ID |
| `MaintenanceOrderType` |  | | `_MaintenanceOrder` | `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `MainWorkCenterInternalID` |  | | `_MaintenanceOrder` | `WorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `MaintOrdMainWorkCenter` |  | | `_MaintenanceOrder._MainWorkCenter` | `WorkCenter` | `CHAR(8)` | Work Center |
| `MaintOrdMainWorkCenterPlant` |  | | `_MaintenanceOrder._MainWorkCenter` | `Plant` | `CHAR(4)` | Plant |
| `MaintenancePlannerGroup` |  | | `_MaintenanceOrder` | `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlan` |  | | `_MaintenanceOrder` | `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` |  | | `_MaintenanceOrder` | `MaintenanceItem` | `CHAR(16)` | Maintenance Item |
| `PlantSection` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `PlantSection` | `CHAR(3)` | Plant Section |
| `AssetLocation` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `ABCIndicator` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  | `Plant` | `CHAR(4)` | Plant |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `IsSettlement` |  | |  | `case when ControllingDebitCreditCode = 'A' then 'X' else '' end` | `CHAR(1)` |  |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
| `ManufacturerPartTypeName` |  | |  | `cast( coalesce( _Equipment.ManufacturerPartTypeName, _FunctionalLocation.ManufacturerPartTypeName ) as typbz preserving type )` | `CHAR(20)` | Manufacturer model number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `TechnicalObjectType` |  | |  | `cast( coalesce(_Equipment.TechnicalObjectType, _FunctionalLocation.TechnicalObjectType) as eqart preserving type )` | `CHAR(10)` | Type of Technical Object |
| `AssetManufacturerName` |  | |  | `cast( coalesce(_Equipment.AssetManufacturerName, _FunctionalLocation.AssetManufacturerName) as herst preserving type )` | `CHAR(30)` | Manufacturer of Asset |
| `MaintenancePlanningPlant` |  | | `_MaintenanceOrder` | `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlant` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `LocAcctAssgmtControllingArea` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `LocAcctAssgmtCostCenter` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `CostCenter` | `CHAR(10)` | Cost Center |
| `ResponsibleCostCenter` |  | | `_MaintenanceOrder` | `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `CatalogProfile` |  | | `_MaintenanceOrder._MaintenanceNotification` | `CatalogProfile` | `CHAR(9)` | Catalog Profile |
| `ConstructionMaterial` |  | | `_Equipment._CurrentTimeSegment` | `ConstructionMaterial` | `CHAR(40)` | Construction type material of the object |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccountHierarchy` |  | |  | `_GLAccountInChartOfAccounts._GLAccountHierarchyNode[ 1: GLAccountHierarchy = GLAccountHierarchy and NodeType = 'L' and ValidityEndDate = '99991231' ].GLAccountHierarchy` | `CHAR(42)` | G/L Account Hierarchy |
| `CostElementGroup` |  | |  | `_GLAccountInChartOfAccounts._GLAccountHierarchyNode[ 1: GLAccountHierarchy = GLAccountHierarchy and NodeType = 'L' and ValidityEndDate = '99991231' ].ParentNode` | `CHAR(50)` | Hierarchy parent node |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `_MaintOrdMainWorkCenterPlant` |  | | `_MaintenanceOrder._MainWorkCenter` | `_Plant` |  |  |
| `_Currency` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_GLAccountLineItem` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAcctInChartOfAccountsText` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |
| `_GLAccountLineItem` | `I_GLAccountLineItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IMTORDACTCOSTDC'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@ObjectModel.sapObjectNodeType.name:'MaintenanceOrder'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maint Order Actual Cost Data - Cube'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #EXTRACTION_DATA_SOURCE] -- ATC check
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #CUBE,
    dataExtraction: {
        enabled: true
    }
}
@Metadata: {
  ignorePropagatedAnnotations,
  allowExtensions
}

define view I_MaintOrderActualCostDataCube
  as select from I_JournalEntryItem
  //association [0..1] to I_Currency                  as _DisplayCurrency           on  _DisplayCurrency.Currency = $projection.displaycurrency
  association [0..1] to I_Currency                  as _Currency           on  _Currency.Currency = $projection.CompanyCodeCurrency
                                                                                        and _Currency.Currency = $projection.GlobalCurrency
                                                                                        and _Currency.Currency = $projection.TransactionCurrency
//  association [0..1] to I_Indicator                 as _MaintenanceOrderIsPlanned on  _MaintenanceOrderIsPlanned.IndicatorValue = $projection.MaintenanceOrderIsPlanned
  //association [0..1] to P_EquipmentClfnStandardClass as _EquipmentClfnStandardClass on  _EquipmentClfnStandardClass.Equipment = I_JournalEntryItem.Equipment
  association [0..1] to I_MaintenanceOrder          as _MaintenanceOrder          on  _MaintenanceOrder.MaintenanceOrder = I_JournalEntryItem.OrderID
  association [0..1] to E_MaintenanceOrder          as _MaintenanceOrderExtension          on  _MaintenanceOrderExtension.MaintenanceOrder = I_JournalEntryItem.OrderID
//  association [0..1] to I_TechnicalObject           as _TechnicalObject           on  _TechnicalObject.TechnicalObject           = $projection.technicalobject
//                                                                                  and _TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.techobjisequiporfuncnlloc
//  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.techobjisequiporfuncnlloc
  association [0..1] to I_GLAccountLineItem         as _GLAccountLineItem         on  _GLAccountLineItem.SourceLedger       = $projection.SourceLedger
                                                                                  and _GLAccountLineItem.CompanyCode        = $projection.CompanyCode
                                                                                  and _GLAccountLineItem.FiscalYear         = $projection.FiscalYear
                                                                                  and _GLAccountLineItem.AccountingDocument = $projection.AccountingDocument
                                                                                  and _GLAccountLineItem.LedgerGLLineItem   = $projection.LedgerGLLineItem
                                                                                  and _GLAccountLineItem.Ledger             = $projection.Ledger
  //  association [0..*] to I_GLAccountHierarchyNodeT    as _GLAccountHierarchyNodeText on  _GLAccountHierarchyNodeText.GLAccountHierarchy = $projection.GLAccountHierarchyID
  //                                                                                    and _GLAccountHierarchyNodeText.HierarchyNode = $projection.CostElementGroup
  //                                                                                    and _GLAccountHierarchyNodeText.ValidityEndDate >= $session.system_date
//  association [0..*] to I_GLAccountHierarchyNodeT   as _CostElementGroupText      on  $projection.GLAccountHierarchy        = _CostElementGroupText.GLAccountHierarchy
//                                                                                  and $projection.CostElementGroup          = _CostElementGroupText.HierarchyNode
//                                                                                  and _CostElementGroupText.ValidityEndDate = '99991231'

  --and _CostElementGroupText.Language           = $session.system_language
{
      //I_JournalEntryItem
  key SourceLedger,
  key CompanyCode,
      @ObjectModel.foreignKey.association: null -- association hidden to prevent Fiscal Year-to-Company Code aggregation
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
  key Ledger,

      _CalendarDate.CalendarMonth                                                                                                                                                                                                                                                                                                      as PostingMonth,
//      @Consumption.hidden: true
      PostingDate,
      FiscalPeriod,
      FiscalYearVariant,
      OrderID                                                                                                                                                                                                                                                                                                                          as MaintenanceOrder,
      _MaintenanceOrder.MaintenanceOrderType                                                                                                                                                                                                                                                                                           as MaintenanceOrderType,

//      @ObjectModel.foreignKey.association: '_MaintenanceOrderIsPlanned'
      MaintenanceOrderIsPlanned,
      MaintenanceOrderPlanningCode,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency' // n3246650
      CompanyCodeCurrency,

//      @Semantics.currencyCode:true
//      @ObjectModel.foreignKey.association: '_DisplayCurrency'
//      cast(:P_DisplayCurrency as vdm_v_display_currency preserving type )                                                                                                                                                                                                                                                              as DisplayCurrency,

      // @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ClfnClassVH', element: 'Class' }}]
      // _EquipmentClfnStandardClass.Class                                                                                                                                                                    as EquipmentType,
      // @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ClfnClassVH', element: 'Class' }}]
      // _EquipmentClfnStandardClass.ParentClass                                                                                                                                                              as EquipmentClassFromClfn,
      // @Consumption.hidden: true
      // _EquipmentClfnStandardClass.ClassInternalID,
      // @Consumption.hidden: true
      // _EquipmentClfnStandardClass.ValidityStartDate,
      // @Consumption.hidden: true
      // _EquipmentClfnStandardClass.ValidityEndDate,

//      @Consumption.hidden: true
      _MaintenanceOrder.WorkCenterInternalID                                                                                                                                                                                                                                                                                           as MainWorkCenterInternalID,
      _MaintenanceOrder._MainWorkCenter.WorkCenter                                                                                                                                                                                                                                                                                     as MaintOrdMainWorkCenter,
      @ObjectModel.foreignKey.association: '_MaintOrdMainWorkCenterPlant'
//      @Consumption.groupWithElement: 'MaintenanceOrder'
      _MaintenanceOrder._MainWorkCenter.Plant                                                                                                                                                                                                                                                                                          as MaintOrdMainWorkCenterPlant,
      _MaintenanceOrder.MaintenancePlannerGroup,
      _MaintenanceOrder.MaintenancePlan,
      _MaintenanceOrder.MaintenanceItem,
      _MaintenanceOrder._LocationAccountAssignment.PlantSection,
      _MaintenanceOrder._LocationAccountAssignment.AssetLocation,
      _MaintenanceOrder._LocationAccountAssignment.ABCIndicator,

      I_JournalEntryItem._WorkCenter.WorkCenter,
      I_JournalEntryItem._WorkCenter.Plant                                                                                                                                                                                                                                                                                             as WorkCenterPlant,
//      @Consumption.hidden: true
//      I_JournalEntryItem.Equipment,
//      @Consumption.hidden: true
      WorkCenterInternalID,
      MaintenanceActivityType,
//      @EndUserText.label: 'Operation'
      OrderOperation,
//      @EndUserText.label: 'Suboperation'
      OrderSuboperation,

      case when ControllingDebitCreditCode = 'A' then 'X' else '' end                                                                                                                                                                                                                                                                  as IsSettlement,

//      @ObjectModel.foreignKey.association: '_TechnicalObject'
//      @UI.hidden
//      case when Equipment = '' then
//                  cast( FunctionalLocation as eams_tec_obj )
//           else cast( Equipment as eams_tec_obj ) end                                                                                                                                                                                                                                                                                  as TechnicalObject,
//
//      @ObjectModel.text.element: ['TechnicalObjectDescription']
//      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_TechnicalObjectLabelVH', element: 'TechnicalObjectLabel' },
//                                           additionalBinding: [{ localElement: 'TechObjIsEquipOrFuncnlLoc', element: 'TechObjIsEquipOrFuncnlLoc' }] }]
//      case when Equipment = '' then
//                  cast( _FunctionalLocation._FunctionalLocationLabel.FunctionalLocationLabelName as eams_tech_obj_conv )
//           else cast( Equipment as eams_tech_obj_conv ) end                                                                                                                                                                                                                                                                            as TechnicalObjectLabel,
//
//      @Semantics.text
//      case when Equipment = '' then
//                  cast( _FunctionalLocation._FunctionalLocationText[1: Language = $session.system_language ].FunctionalLocationName as eams_tec_obj_des preserving type )
//           else cast( _Equipment._EquipmentText[1: Language = $session.system_language ].EquipmentName as eams_tec_obj_des preserving type ) end                                                                                                                                                                                       as TechnicalObjectDescription,
//
//      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
//      cast( case when Equipment = '' and FunctionalLocation = '' then ''
//            else case when Equipment = '' then 'EAMS_FL'
//            else 'EAMS_EQUI' end end as eams_tec_obj_type_value )                                                                                                                                                                                                                                                                      as TechObjIsEquipOrFuncnlLoc,
      I_JournalEntryItem.Equipment,
      I_JournalEntryItem._Equipment._EquipmentText[1: Language = $session.system_language ].EquipmentName,
      I_JournalEntryItem.FunctionalLocation,
      I_JournalEntryItem._FunctionalLocation._FunctionalLocationLabel.FunctionalLocationLabelName,
      I_JournalEntryItem._FunctionalLocation._FunctionalLocationText[1: Language = $session.system_language ].FunctionalLocationName,
      cast( coalesce( _Equipment.ManufacturerPartTypeName, _FunctionalLocation.ManufacturerPartTypeName ) as typbz preserving type )                                                                                                                                                                                                   as ManufacturerPartTypeName,
      Assembly,
      cast( coalesce(_Equipment.TechnicalObjectType, _FunctionalLocation.TechnicalObjectType) as eqart preserving type )                                                                                                                                                                                                               as TechnicalObjectType,
      cast( coalesce(_Equipment.AssetManufacturerName, _FunctionalLocation.AssetManufacturerName) as herst preserving type )                                                                                                                                                                                                           as AssetManufacturerName,
      _MaintenanceOrder.MaintenancePlanningPlant,
      _MaintenanceOrder._LocationAccountAssignment.MaintenancePlant,
      GLAccount,
      ControllingArea,
      CostCenter,
      _MaintenanceOrder._LocationAccountAssignment.ControllingArea as LocAcctAssgmtControllingArea,
      _MaintenanceOrder._LocationAccountAssignment.CostCenter as LocAcctAssgmtCostCenter,
      _MaintenanceOrder.ResponsibleCostCenter,
      _MaintenanceOrder._MaintenanceNotification.CatalogProfile,
      _Equipment._CurrentTimeSegment.ConstructionMaterial,
//      @UI.hidden: true
      ChartOfAccounts,
//      @UI.hidden
//      @Consumption.filter.mandatory: null
      _GLAccountInChartOfAccounts._GLAccountHierarchyNode[ 1: GLAccountHierarchy = GLAccountHierarchy and NodeType = 'L' and ValidityEndDate = '99991231' ].GLAccountHierarchy as GLAccountHierarchy,
//      @ObjectModel.text.association: '_CostElementGroupText'
      _GLAccountInChartOfAccounts._GLAccountHierarchyNode[ 1: GLAccountHierarchy = GLAccountHierarchy and NodeType = 'L' and ValidityEndDate = '99991231' ].ParentNode                                                                                                                                                   as CostElementGroup,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//      @EndUserText.quickInfo: 'Costs in Company Code Currency'
      AmountInCompanyCodeCurrency,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_GlobalCurrency' // n3246650
      GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
//      @EndUserText.quickInfo: 'Costs in Global Currency'
      @DefaultAggregation: #SUM
      AmountInGlobalCurrency,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_TransactionCurrency' // n3246650
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
//      @EndUserText.quickInfo: 'Costs in Transaction Currency'
      @DefaultAggregation: #SUM
      AmountInTransactionCurrency,

//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      @EndUserText.quickInfo: 'Costs in Display Currency'
//      currency_conversion(
//        amount => AmountInCompanyCodeCurrency,
//        source_currency => CompanyCodeCurrency,
//        target_currency => :P_DisplayCurrency,
//        exchange_rate_date => PostingDate,
//        exchange_rate_type => :P_ExchangeRateType,
//        round => 'true',
//        decimal_shift => 'true',
//        decimal_shift_back => 'true'
//      )                                                                                                                                                                                                                                                                                                                                as AmountInDisplayCurrency,

//      _MaintenanceOrderIsPlanned,
      _CompanyCodeCurrency,
      _MaintenanceOrder,
      _MaintenanceOrder._MaintenanceOrderType,
      _MaintenanceOrder._MaintenancePlanningPlant,
      _MaintenanceOrder._MainWorkCenter._Plant                                                                                                                                                                                                                                                                                         as _MaintOrdMainWorkCenterPlant,
      _FiscalYear,
      _CalendarDate._CalendarMonth,
      _MaintenanceOrder._LocationAccountAssignment._MaintenancePlant,
      _MaintenanceOrder._MaintenanceNotification._TechnicalObjectCodeCatalog,
      _Equipment._CurrentTimeSegment._ConstructionMaterial,
      _CostCenter,
      _CalendarDate,
      _GLAccountInChartOfAccounts,
      _GLAcctInChartOfAccountsText,
      _ChartOfAccounts,
      _MaintOrdPlngDegreeCode,
      _MaintenanceOrder._LocationAccountAssignment._PlantSection,
      _Ledger,
      _GLAccountLineItem,
//      _EquipmentClfnStandardClass,
//      _TechnicalObject,
//      _TechObjIsEquipOrFuncnlLoc,
      _Currency,
//      _CostElementGroupText,
      _GlobalCurrency,
      _TransactionCurrency,
      _FunctionalLocation,
      _Equipment
}
where
       OrderCategory              = '30'
  and  _Order.OrderCategory       = '30' -- ensures that we are not selecting historical orders, where the category would be '31'.
  and(
       ControllingDebitCreditCode = 'H'
    or ControllingDebitCreditCode = 'L'
    or ControllingDebitCreditCode = 'S'
  )
//  and ControllingDebitCreditCode != replace(
//    $parameters.P_OpIsIncludedInCosting, 'NO', 'A'
//  )
```
