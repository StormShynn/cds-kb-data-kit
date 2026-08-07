---
name: C_COSTCENTERBUDGETQUERY
description: Cost Center Budget - Query
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value
semantic_en: Cost Center Budget - Query
semantic_vi: Cost Center Budget - Query — CDS view tiêu dùng dựa trên Cost Center Budget - Query.
keywords:
  - cost
  - center
  - budget
  - query
  - ledger
  - statistical
  - origin
  - active
  - controlling
  - area
  - hier
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - consumption-view
  - lob:controlling
  - lob:cross_application components
---
# C_COSTCENTERBUDGETQUERY

**Cost Center Budget - Query**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `OriginCostCenter` |  | | `_CurrentCostCenter` | `CostCenter` | `CHAR(10)` | Cost Center |
| `ActiveControllingArea` |  | | `_CurrentCostCenter` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `_BudgetCostCenterHier` |  | |  | `_CurrentCostCenter._BudgetCostCenterHier( P_KeyDate: $parameters.P_ReportingDate )` |  |  |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Quantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` | `UNIT(3)` |  |
| `CurrentFYYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' and Ledger = $parameters.P_Ledger and LedgerFiscalYear = $parameters.P_LedgerFiscalYear ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlanFYYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and Ledger = $parameters.P_Ledger and LedgerFiscalYear = $parameters.P_LedgerFiscalYear ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BudgetFiscalYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_BudgetPlanningCategory and LedgerFiscalYear = $parameters.P_LedgerFiscalYear ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CmtmtFiscalYearToDateValue` |  | |  | `cast( case when ( IsCommitment = 'X' and PlanningCategory = 'ACT01' and Ledger = '0E' and LedgerFiscalYear = $parameters.P_LedgerFiscalYear ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActBdgtFsclYearToDteValue` |  | |  | `case when get_filter_type_of_cell( dimension => CostCenter ) = cell_filter_type.#hierarchy_node then ($projection.BudgetFiscalYearToDateValue - $projection.CurrentFYYearToDateValue - $projection.CmtmtFiscalYearToDateValue) else 0 end` | `DEC(25)` |  |
| `DeltaActBdgtFsclYTDRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActBdgtFsclYearToDteValue, total=>($projection.CurrentFYYearToDateValue + $projection.CmtmtFiscalYearToDateValue) ) * 100` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value)*

```abap
@AccessControl.authorizationCheck     : #NOT_ALLOWED
@AccessControl.personalData.blocking  : #REQUIRED
@EndUserText.label: 'Cost Center Budget - Query'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : { serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED }
@VDM.viewType                         : #CONSUMPTION
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FCO_RB_CC_CHECK_VAR'
@ObjectModel.modelingPattern          : #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities    : [#ANALYTICAL_QUERY]
@UI.textArrangement                   : #TEXT_FIRST
define transient view entity C_CostCenterBudgetQuery
  provider contract analytical_query
  with parameters

    @Consumption.derivation: {  lookupEntity : 'I_Ledger',
                                resultElement: 'Ledger',
                                binding      : [{ targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X' }]
                             }
    @AnalyticsDetails.query.variableSequence : 10
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_LedgerStdVH', element: 'Ledger' }}]
    P_Ledger                  : fins_ledger,

    @AnalyticsDetails.query.variableSequence : 11
    @AnalyticsDetails.variable               : { usageType: #FILTER, mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @EndUserText.label                       : 'Company Code'
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_JournalEntryCompanyCodeVH', element: 'CompanyCode' } }]
    P_CompanyCode             : bukrs,

    @AnalyticsDetails.query.variableSequence: 11
    @EndUserText.label                      : 'Reporting Date'
    @Semantics.businessDate.at              : true
    @Environment.systemField                : #SYSTEM_DATE
    P_ReportingDate           : vdm_v_key_date,

    @Consumption.derivation: {  lookupEntity     : 'F_LdgrCoCodeFsclYrVariant',
                                resultElement    : 'FiscalYearVariant',
                                resultAggregation:  #MAX,
                                binding          :  [{ targetElement: 'Ledger',      type: #PARAMETER, value: 'P_Ledger' },
                                                     { targetElement: 'CompanyCode', type: #PARAMETER, value: 'P_CompanyCode' }]
                             }
    @AnalyticsDetails.query.variableSequence : 12
    @Consumption.hidden                      : true
    P_FiscalYearVariant       : fis_periv,

    //    //  'Cost Center Hierarchy'
    //    @AnalyticsDetails.query.variableSequence : 20
    //    @Consumption.derivation: {  lookupEntity : 'I_ControllingArea',
    //                                resultElement: 'CostCenterStandardHierarchy',
    //                                binding      : [{ targetElement: 'ControllingArea', type: #CONSTANT, value: 'A000' }]
    //                             }
    //    @Consumption.hidden         : true
    //    P_CostCenterHierarchyShortID : fis_ksthi,
    //
    //    @AnalyticsDetails.query.variableSequence : 22
    //    @EndUserText.label                       : 'Cost Center Hierarchy'
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_CostCenterHierarchyVH', element: 'CostCenterHierarchy' }}]
    //    @Consumption.derivation: {  lookupEntity : 'I_CostCenterHierarchy',
    //                                resultElement: 'CostCenterHierarchy',
    //                                binding      : [{ targetElement: 'HierarchyShortID', type: #PARAMETER, value: 'P_CostCenterHierarchyShortID' }]
    //                             }
    //    P_CostCenterHierarchy        : fis_hryid_cctr,
    //
    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable               : { mandatory: true }
    @EndUserText.label                       : 'G/L Account Hierarchy'
    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_GLAccountHierarchyStdVH', element: 'GLAccountHierarchy' }}]
    P_GLAccountHierarchy      : fis_hryid_glacc,

//    @AnalyticsDetails.query.variableSequence : 35
//    @EndUserText.label                       : 'G/L Account Hierarchy Group'
//    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_AvailyCtrlProfileGLAcctGrpVH', element: 'GLAccountHierNodeSemanticKey' }}]
//    P_GLAccountHierarchyGroup : glaccounthierarchygroup,

    //  -------- Specific to plan data: -------------------
    @EndUserText.label                      : 'Plan Category'
    @Consumption.defaultValue               : 'PLN'
    @AnalyticsDetails.query.variableSequence: 45
    P_PlanningCategory        : fcom_category,

    @EndUserText.label: 'Budget Plan Category'
    //    @Consumption.defaultValue: 'BUDGET02'
    @Consumption.hidden: true
    @AnalyticsDetails.query.variableSequence: 47
    @Consumption.derivation: { lookupEntity: 'I_CostCenterBudgetPlngCategory',
      resultElement: 'PlanningCategory',
      binding:
      [ { targetElement : 'PlanningCatIsForAvailyCtrl' ,
          type          :  #CONSTANT,
          value         : 'X'
        }
      ]
    }
    P_BudgetPlanningCategory  : fcom_category,

    //  -------- Calculated Period values:

    // 'Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 51
    @Consumption.derivation: {  lookupEntity : 'I_FiscalCalendarDate',
                                resultElement: 'FiscalYear',
                                binding      : [{ targetElement: 'CalendarDate',      type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden    : true
    @Semantics.fiscal.year : true
    P_LedgerFiscalYear        : fis_gjahr_no_conv

  as projection on I_ActPlnCostCenterRptgCube
//  as projection on I_ActPlnCostCtrRptgBdgtCube
{

  @UI.textArrangement:#TEXT_FIRST
  Ledger,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: '#' }
  IsStatisticalCostCenter,

  @Consumption.hidden: true
  _CurrentCostCenter.CostCenter                                                                                                                                  as OriginCostCenter, //BufferCostCenter
  @Consumption.hidden: true
  _CurrentCostCenter.ControllingArea                                                                                                                             as ActiveControllingArea, //BufferControllingArea
  _CurrentCostCenter._BudgetCostCenterHier( P_KeyDate: $parameters.P_ReportingDate )                                                                             as _BudgetCostCenterHier,
  @AnalyticsDetails.query: {  variableSequence     : 70,
                              axis                 : #FREE,
                              displayHierarchy     : #ON, //FILTER_ONLY,
                              totals : #SHOW,
                              hierarchyAssociation: '_BudgetCostCenterHier',
                              hierarchyInitialLevel: 2,
                              keyDisplay           : #NOT_COMPOUND
                           }
  @UI.textArrangement:#TEXT_ONLY
  CostCenter,

//  @Consumption.filter :{  selectionType     : #SINGLE,
//                          multipleSelections: true,
//                          mandatory         : false
//                       }
//  @UI.textArrangement:#TEXT_FIRST
//  GLAccountHierNodeSemanticKey,




//  @AnalyticsDetails.query: {  variableSequence     : 70,
//                              axis                 : #FREE,
//  //                              displayHierarchy     : #ON, //FILTER_ONLY,
//                              totals : #SHOW,
//  //                              hierarchyAssociation: '_BudgetCostCenterHier',
//  //                              hierarchyInitialLevel: 2,
//                              keyDisplay           : #NOT_COMPOUND
//                           }
//
//  @UI.textArrangement:#TEXT_FIRST
//  BudgetCarryingCostCenter,





  @Consumption.filter: {  selectionType     : #HIERARCHY_NODE,
                          multipleSelections: true,
                          hierarchyBinding  : [{type :#PARAMETER,value :'P_GLAccountHierarchy' }],
                          mandatory         : false
                       }

  @AnalyticsDetails.query: {  variableSequence     : 71,
                              axis                 : #FREE,
                              displayHierarchy     : #FILTER_ONLY,
                              hierarchyInitialLevel: 2,
                              keyDisplay           : #NOT_COMPOUND
                            }
  @UI.textArrangement:#TEXT_FIRST
  GLAccount,

  CostCtrActivityType,

  @Consumption.filter :{  selectionType     : #SINGLE,
                          multipleSelections: true,
                          mandatory         : false
                       }
  @UI.textArrangement:#TEXT_FIRST
  BusinessTransactionType,

  @UI.textArrangement:#TEXT_FIRST
  CompanyCode,

  @UI.textArrangement:#TEXT_ONLY
  DebitCreditCode,

  // Fields added for Document Store
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  ActualPlanJournalEntryItem,
  // **********************************************************

  FiscalYear,
  FiscalPeriod,
  FiscalQuarter,
  FiscalYearPeriod,
  FiscalYearQuarter,
  LedgerFiscalYear,
  GlobalCurrency,
  CompanyCodeCurrency,
  AccountAssignmentType,

  @UI.textArrangement:#TEXT_ONLY
  PartnerAccountAssignmentType,

  FunctionalArea,
  PartnerCostCtrActivityType,

  @UI.textArrangement:#TEXT_ONLY
  PartnerCostCenter,

  @Analytics.internalName  : #LOCAL
  @API.element.releaseState: #DEPRECATED
  @API.element.successor   : 'PartnerProjectExternalID'
  @EndUserText.label       : 'Partner Project Internal ID (Deprecated)'
  PartnerProjectInternalID,
  PartnerProjectExternalID,

  PartnerWBSElementExternalID,
  PartnerFunctionalArea,
  ProfitCenter,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AmountInCompanyCodeCurrency,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
  AmountInGlobalCurrency,

  BaseUnit,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  Quantity,

  //  CostSourceUnit,
  //  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  //  ValuationFixedQuantity,

  //  ------ Structures ---------

  //  ------ Year-to-date: current year - Actuals -----

  @EndUserText.label: 'Ratio Unit %'
  cast( '%' as abap.unit )                                                                                                                                       as RatioUnit,

  @EndUserText.label                               : 'Reporting Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Year-to-Date &1',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     PlanningCategory  = 'ACT01'
                    and Ledger            = $parameters.P_Ledger
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
//                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1 else null
        end as abap.dec( 23, 2 )
      )                                                                                                                                                          as CurrentFYYearToDateValue,


  @EndUserText.label                               : 'Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     PlanningCategory  = $parameters.P_PlanningCategory
                    and Ledger            = $parameters.P_Ledger
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
//                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1 else null
        end as abap.dec( 23, 2 )
      )                                                                                                                                                          as PlanFYYearToDateValue,


  @EndUserText.label                               : 'Budget Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Budget Reporting Year-to-Date &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     PlanningCategory   = $parameters.P_BudgetPlanningCategory
                    and LedgerFiscalYear   = $parameters.P_LedgerFiscalYear
//                    and PostingDate       <= $parameters.P_ReportingDate
                  ) then 1 else null
        end as abap.dec( 23, 2 )
      )                                                                                                                                                          as BudgetFiscalYearToDateValue,


  @EndUserText.label                               : 'Commitment Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Commitment Reporting Year-to-Date &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     IsCommitment      = 'X'
                    and PlanningCategory  = 'ACT01'
                    and Ledger            = '0E'
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
//                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1 else null
    end as abap.dec( 23, 2 ) )                                                                                                                                   as CmtmtFiscalYearToDateValue,


  //Budget-Actual-Commitment
  //  @AnalyticsDetails.query.onCharacteristicStructure: true
  //  @AnalyticsDetails.query.collisionHandling: {formula:#CONCURRENT}
  //  @Consumption.dynamicLabel: { label: 'Available Budget-Delta - &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  //  @Aggregation.default: #FORMULA
  //  @AnalyticsDetails.query.axis: #COLUMNS
  //  @Consumption.hidden: true
  //  //  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  //  $projection.BudgetFiscalYearToDateValue - $projection.CurrentFYYearToDateValue - $projection.CmtmtFiscalYearToDateValue                                      as DeltaActBdgtFsclYearToDteValue,



  //    @EndUserText.label                               : 'Remaining Budget Year-to-Date'
  //    @Consumption.dynamicLabel: { label: 'MyBudget - &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  //    @AnalyticsDetails.query.onCharacteristicStructure: true
  //    @Aggregation.default: #FORMULA
  //    @AnalyticsDetails.query.axis: #COLUMNS
  ////    @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  ////    @Consumption.hidden: true
  //    case when (      $projection.BudgetFiscalYearToDateValue > abap.dec'0'
  //                or   $projection.BudgetFiscalYearToDateValue < abap.dec'0'
  //              ) then $projection.DeltaActBdgtFsclYearToDteValue else $projection.BudgetFiscalYearToDateValue
  //     end                                                                                                                     as MyBudget,


  // Available Budget
  @EndUserText.label                               : 'Available Budget Year-to-Date &1'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#CONCURRENT}
  @Consumption.dynamicLabel: { label: 'Available Budget Year-to-Date &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  //    @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  case when get_filter_type_of_cell( dimension => CostCenter ) = cell_filter_type.#hierarchy_node
          then ($projection.BudgetFiscalYearToDateValue - $projection.CurrentFYYearToDateValue - $projection.CmtmtFiscalYearToDateValue)
          else 0
          end                                                                                                                                                    as DeltaActBdgtFsclYearToDteValue,

  //  //Budget-Actual-Commitment
  //  @AnalyticsDetails.query.onCharacteristicStructure: true
  //  @AnalyticsDetails.query.collisionHandling: {formula:#CONCURRENT}
  //  @Consumption.dynamicLabel: { label: 'Reporting + Commitment Year-to-Date &1', binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}] }
  //  @Aggregation.default: #FORMULA
  //  @AnalyticsDetails.query.axis: #COLUMNS
  //  //  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  //  $projection.CurrentFYYearToDateValue + $projection.CmtmtFiscalYearToDateValue                                                                                  as SumActCmtmtFsclYearToDteValue,

  @EndUserText.label                               : '% Remaining Budget Year-to-Date &1'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Aggregation.default                             : #FORMULA
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label: '% Remaining Budget Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis     : #COLUMNS
  @UI.fieldGroup                   : [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  @AnalyticsDetails.query.decimals :2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaActBdgtFsclYearToDteValue, total=>($projection.CurrentFYYearToDateValue + $projection.CmtmtFiscalYearToDateValue)  ) * 100 as DeltaActBdgtFsclYTDRatio


//  _DocumentStore
}
where
  (
       Ledger           = $parameters.P_Ledger
    or Ledger           =  '0E'
  )
  and  CompanyCode      = $parameters.P_CompanyCode
  and  CostCenter       <> ''
  and(
       PlanningCategory =  'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
    or PlanningCategory = $parameters.P_BudgetPlanningCategory
  )
  and  LedgerFiscalYear = $parameters.P_LedgerFiscalYear
```
