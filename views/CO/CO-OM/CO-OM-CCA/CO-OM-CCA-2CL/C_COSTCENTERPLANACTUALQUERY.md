---
name: C_COSTCENTERPLANACTUALQUERY
description: Cost CenterPLANACTUALQUERY
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - CO-OM-CCA
  - consumption-view
  - analytical
  - cost-center
  - component:CO-OM-CCA-2CL
  - lob:Controlling
  - bo:CostCenter
---
# C_COSTCENTERPLANACTUALQUERY

**Cost CenterPLANACTUALQUERY**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Ledger` |  | |  |  |
| `IsStatisticalCostCenter` |  | |  |  |
| `CostCenter` |  | |  | `, {type :#PARAMETER,value :'P_CostCenterHierarchy' }], hierarchyInitialLevel: 2, keyDisplay : #NOT_COMPOUND } CostCenter` |
| `GLAccount` |  | |  | `], mandatory : false } GLAccount` |
| `CostCtrActivityType` |  | |  |  |
| `BusinessTransactionType` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `DebitCreditCode` |  | |  |  |
| `SourceLedger` |  | |  |  |
| `AccountingDocument` |  | |  |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  |
| `FinancialPlanningDataPacket` |  | |  |  |
| `ActualPlanJournalEntryItem` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `FiscalQuarter` |  | |  |  |
| `FiscalYearPeriod` |  | |  |  |
| `FiscalYearQuarter` |  | |  |  |
| `LedgerFiscalYear` |  | |  |  |
| `GlobalCurrency` |  | |  |  |
| `CompanyCodeCurrency` |  | |  |  |
| `AccountAssignmentType` |  | |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |
| `PartnerCostCenter` |  | |  |  |
| `PartnerProjectInternalID` |  | |  |  |
| `PartnerProjectExternalID` |  | |  |  |
| `PartnerWBSElementExternalID` |  | |  |  |
| `PartnerFunctionalArea` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |
| `AmountInGlobalCurrency` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `Quantity` |  | |  |  |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` |
| `CurrentFYYearToDateValue` |  | |  | `] } cast( case when ( PlanningCategory = 'ACT01' and LedgerFiscalYear = $parameters.P_LedgerFiscalYear and PostingDate <= $parameters.P_ReportingDate ) then 1 end as abap.dec( 23, 2 ) )` |
| `PreviousFYYearToDateValue` |  | |  | `] } cast( case when ( PlanningCategory = 'ACT01' and LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear and PostingDate <= $parameters.P_ComparisonReportingDate ) then 1 end as abap.dec( 23, 2 ) )` |
| `PlanFYYearToDateValue` |  | |  | `] } cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and LedgerFiscalYear = $parameters.P_LedgerFiscalYear and PostingDate <= $parameters.P_ReportingDate ) then 1 end as abap.dec( 23, 2 ) )` |
| `DeltaActPlanFYYearToDateValue` |  | |  | `] } cast( $projection.CurrentFYYearToDateValue - $projection.PlanFYYearToDateValue as abap.dec( 23, 2 ) )` |
| `DeltaActPlanFYYearToDateRatio` |  | |  | `] } ratio_of( portion=>$projection.DeltaActPlanFYYearToDateValue, total=>$projection.PlanFYYearToDateValue ) * 100` |
| `CurrentFYPeriodValue` |  | |  | `] } cast( case when ( PlanningCategory = 'ACT01' and FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` |
| `PreviousFYPeriodValue` |  | |  | `] } cast( case when ( PlanningCategory = 'ACT01' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` |
| `CurrentFYPeriodPlanValue` |  | |  | `] } cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` |
| `DeltaActPlanFYPeriodValue` |  | |  | `] } cast( $projection.CurrentFYPeriodValue - $projection.CurrentFYPeriodPlanValue as abap.dec( 23, 2 ) )` |
| `DeltaActPlanFYPeriodRatio` |  | |  | `] } ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.CurrentFYPeriodPlanValue ) * 100` |

## Source Code

```abap
@AccessControl.authorizationCheck     : #NOT_ALLOWED
@AccessControl.personalData.blocking  : #REQUIRED
@EndUserText.label                    : 'Cost Center Plan and Actual Values - Query'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : { serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED }
@VDM.viewType                         : #CONSUMPTION
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FCO_RB_CC_CHECK_VAR'
@ObjectModel.modelingPattern          : #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities    : [#ANALYTICAL_QUERY]
@UI.textArrangement                   : #TEXT_FIRST
define transient view entity C_CostCenterPlanActualQuery
  provider contract analytical_query
  with parameters

    @Consumption.derivation: {  lookupEntity : 'I_Ledger',
                                resultElement: 'Ledger',
                                binding      : [{ targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X' }]
                             }
    @AnalyticsDetails.query.variableSequence : 10
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_LedgerStdVH', element: 'Ledger' }}]
    P_Ledger                     : fins_ledger,

    @AnalyticsDetails.query.variableSequence : 11
    @AnalyticsDetails.variable               : { usageType: #FILTER, mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @EndUserText.label                       : 'Company Code'
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_JournalEntryCompanyCodeVH', element: 'CompanyCode' } }]
    P_CompanyCode                : bukrs,

    @AnalyticsDetails.query.variableSequence: 11
    @EndUserText.label                      : 'Reporting Date'
    @Semantics.businessDate.at              : true
    @Environment.systemField                : #SYSTEM_DATE
    P_ReportingDate              : vdm_v_key_date,

    @Consumption.derivation: {  lookupEntity     : 'F_LdgrCoCodeFsclYrVariant',
                                resultElement    : 'FiscalYearVariant',
                                resultAggregation:  #MAX,
                                binding          :  [{ targetElement: 'Ledger',      type: #PARAMETER, value: 'P_Ledger' },
                                                     { targetElement: 'CompanyCode', type: #PARAMETER, value: 'P_CompanyCode' }]
                             }
    @AnalyticsDetails.query.variableSequence : 12
    @Consumption.hidden                      : true
    P_FiscalYearVariant          : fis_periv,

    //  'Cost Center Hierarchy'
    @AnalyticsDetails.query.variableSequence : 20
    @Consumption.derivation: {  lookupEntity : 'I_ControllingArea',
                                resultElement: 'CostCenterStandardHierarchy',
                                binding      : [{ targetElement: 'ControllingArea', type: #CONSTANT, value: 'A000' }]
                             }
    @Consumption.hidden         : true
    P_CostCenterHierarchyShortID : fis_ksthi,

    @AnalyticsDetails.query.variableSequence : 22
    @EndUserText.label                       : 'Cost Center Hierarchy'
    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_CostCenterHierarchyVH', element: 'CostCenterHierarchy' }}]
    @Consumption.derivation: {  lookupEntity : 'I_CostCenterHierarchy',
                                resultElement: 'CostCenterHierarchy',
                                binding      : [{ targetElement: 'HierarchyShortID', type: #PARAMETER, value: 'P_CostCenterHierarchyShortID' }]
                             }
    P_CostCenterHierarchy        : fis_hryid_cctr,

    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable               : { mandatory: true }
    @EndUserText.label                       : 'G/L Account Hierarchy'
    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_GLAccountHierarchyStdVH', element: 'GLAccountHierarchy' }}]
    P_GLAccountHierarchy         : fis_hryid_glacc,


    @AnalyticsDetails.query.variableSequence         : 35
    @AnalyticsDetails.variable: {  usageType         : #FILTER,
                                   referenceElement  : 'CostCenter',
                                   mandatory         : false,
                                   selectionType     : #HIERARCHY_NODE,
                                   multipleSelections: true,
                                   hierarchyBinding  : [{type: #CONSTANT,value: 'A000' }, {type: #PARAMETER, value: 'P_CostCenterHierarchy' }]
                                }
    @EndUserText.label        : 'Cost Center (Node)'
    P_CostCenter                 : kostl,

    //  -------- Specific to plan data: -------------------
    @EndUserText.label                      : 'Plan Category'
    @Consumption.defaultValue               : 'PLN'
    @AnalyticsDetails.query.variableSequence: 45
    P_PlanningCategory           : fcom_category,

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
    P_LedgerFiscalYear           : fis_gjahr_no_conv,

    // 'Fiscal Period'
    @AnalyticsDetails.query.variableSequence : 52
    @Consumption.derivation: {  lookupEntity : 'I_FiscalCalendarDate',
                                resultElement: 'FiscalPeriod',
                                binding      : [{ targetElement: 'CalendarDate',      type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden     : true
    @Semantics.fiscal.period: true
    P_FiscalPeriod               : fins_fiscalperiod,

    //  'Previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence :  53
    @Consumption.derivation: {  lookupEntity : 'F_FiscalYearShift',
                                resultElement: 'ShiftedFiscalYear',
                                binding      : [{ targetParameter: 'P_FiscalYear',                   type: #PARAMETER, value: 'P_LedgerFiscalYear' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER, value: 'P_FiscalYearVariant' },
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,  value: '-1' },
                                                { targetParameter: 'P_FiscalTimePeriodOffsetUnit',   type: #CONSTANT,  value: 'Y' }]
                             }
    @Consumption.hidden   : true
    @Semantics.fiscal.year: true
    P_ComparisonLedgerFiscalYear : fis_gjahr_no_conv,

    // 'Key Date in previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 54
    @Consumption.derivation: {  lookupEntity : 'F_FiscalCalendarDayShift',
                                resultElement: 'ShiftedCalendarDate',
                                binding      : [{ targetParameter: 'P_CalendarDate',                 type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER, value: 'P_FiscalYearVariant' },
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,  value: '-365' } ]
                             }
    @Consumption.hidden      : true
    P_ComparisonReportingDate    : vdm_v_key_date,

    @AnalyticsDetails.query.variableSequence: 55
    @Consumption.derivation: { lookupEntity : 'F_FsclYearPeriodByFsclPeriod',
                               resultElement: 'FiscalYearPeriod',
                               binding      : [ { targetParameter: 'P_FiscalYear',        type: #PARAMETER, value: 'P_LedgerFiscalYear' },
                                                { targetParameter: 'P_FiscalPeriod',      type: #PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetParameter: 'P_FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod           : fis_jahrper_conv,

    // 'Previous Period'
    @AnalyticsDetails.query.variableSequence : 56
    @Consumption.derivation: {  lookupEntity : 'F_FiscalYearPeriodShift',
                                resultElement: 'ShiftedFiscalYearPeriod',
                                binding      : [{ targetParameter: 'P_FiscalYearPeriod',             type: #PARAMETER,  value: 'P_FiscalYearPeriod' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER,  value: 'P_FiscalYearVariant'},
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,   value: '-1' },
                                                { targetParameter: 'P_FiscalTimePeriodOffsetUnit',   type: #CONSTANT,   value: 'P' }]
                              }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,

    // 'Same Period in Previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 57
    @Consumption.derivation: {  lookupEntity : 'I_FiscalYearPeriod',
                                resultElement: 'FiscalYearPeriod',
                                binding      : [{ targetElement: 'FiscalYear',        type: #PARAMETER, value: 'P_ComparisonLedgerFiscalYear' },
                                                { targetElement: 'FiscalPeriod',      type: #PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriodPrevYear   : fis_jahrper_conv

  as projection on I_ActPlnCostCenterRptgCube
{

  @UI.textArrangement:#TEXT_FIRST
  Ledger,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: '#' }
  IsStatisticalCostCenter,

  @AnalyticsDetails.query: {  variableSequence     : 70,
                              axis                 : #FREE,
                              displayHierarchy     : #FILTER_ONLY,
                              hierarchyBinding     : [{type :#CONSTANT, value :'A000' }, {type :#PARAMETER,value :'P_CostCenterHierarchy' }],
                              hierarchyInitialLevel: 2,
                              keyDisplay           : #NOT_COMPOUND
                           }
  @UI.textArrangement:#TEXT_ONLY
  CostCenter,

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

  //  @Consumption.hidden: true
  //  ActualPlanCode,

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

  //  ------ Year-to-date: current year vs. previous year -----

  @EndUserText.label: 'Ratio Unit %'
  cast( '%' as abap.unit )                                                                                       as RatioUnit,

  @EndUserText.label                               : 'Reporting Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Year-to-Date &1',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYYearToDateValue,

  @EndUserText.label                               : 'Previous Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Previous Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and LedgerFiscalYear    =  $parameters.P_ComparisonLedgerFiscalYear
                    and PostingDate        <= $parameters.P_ComparisonReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PreviousFYYearToDateValue,

  @EndUserText.label                               : 'Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     PlanningCategory  = $parameters.P_PlanningCategory
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PlanFYYearToDateValue,

  @EndUserText.label                               : 'Diff. Actual - Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling        : {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Diff. Actual - Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @Aggregation.default        : #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( $projection.CurrentFYYearToDateValue - $projection.PlanFYYearToDateValue as abap.dec( 23, 2 ) )          as DeltaActPlanFYYearToDateValue,

  @EndUserText.label                               : '% Diff. Actual - Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Aggregation.default                             : #FORMULA
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label: '% Diff. Actual - Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis     : #COLUMNS
  @UI.fieldGroup                   : [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  @AnalyticsDetails.query.decimals :2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaActPlanFYYearToDateValue, total=>$projection.PlanFYYearToDateValue ) * 100 as DeltaActPlanFYYearToDateRatio,

  // Fiscal Period

  @EndUserText.label                               : 'Actual Reporting Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Actual Reporting Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYPeriodValue,

  @EndUserText.label                               : 'Actual Previous Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Actual Previous Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and FiscalYearPeriod  = $parameters.P_PreviousFiscalYearPeriod
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PreviousFYPeriodValue,

  @EndUserText.label                               : 'Plan Reporting Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Plan Reporting Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (     PlanningCategory  = $parameters.P_PlanningCategory
                    and FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
                  )  then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYPeriodPlanValue,

  @EndUserText.label                               : 'Diff. Actual - Plan Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling        : {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Diff. Actual - Plan Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @Aggregation.default        : #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( $projection.CurrentFYPeriodValue - $projection.CurrentFYPeriodPlanValue as abap.dec( 23, 2 ) )           as DeltaActPlanFYPeriodValue,

  @EndUserText.label                               : '% Diff. Actual - Plan Reporting Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label  : '% Diff. Actual - Plan Reporting Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @Aggregation.default             : #FORMULA
  @AnalyticsDetails.query.axis     : #COLUMNS
  @UI.fieldGroup: [{ qualifier     : 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  @AnalyticsDetails.query.decimals :2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.CurrentFYPeriodPlanValue ) * 100  as DeltaActPlanFYPeriodRatio

  //  _DocumentStore
}
where
       Ledger           = $parameters.P_Ledger
  and  CompanyCode      = $parameters.P_CompanyCode
  and  CostCenter       = $parameters.P_CostCenter
  and  CostCenter       <> ''
  and(
       PlanningCategory =  'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  )
  and(
       LedgerFiscalYear = $parameters.P_LedgerFiscalYear
    or LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear
  )
```
