---
name: C_COSTCENTERACTUALQUERY
description: Cost CenterACTUALQUERY
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
# C_COSTCENTERACTUALQUERY

**Cost CenterACTUALQUERY**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  |  |  |
| `IsStatisticalCostCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ActualPlanCode` |  | |  |  |  |  |
| `SourceLedger` |  | |  |  |  |  |
| `AccountingDocument` |  | |  |  |  |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  |  |  |
| `FinancialPlanningDataPacket` |  | |  |  |  |  |
| `ActualPlanJournalEntryItem` |  | |  |  |  |  |
| `PlanningCategory` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalQuarter` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearQuarter` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` |  |  |
| `CurrentFiscalYearValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_LedgerFiscalYear ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `PrevFiscalYearValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `CurrentFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `PreviousFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFYPeriodValue` |  | |  | `cast( $projection.CurrentFYPeriodValue - $projection.PreviousFYPeriodValue as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFYPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=>$projection.PreviousFYPeriodValue ) * 100` |  |  |
| `PrevYearCurrentFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurFYPerPreFYPerValue` |  | |  | `cast( $projection.CurrentFYPeriodValue - $projection.PrevYearCurrentFYPeriodValue as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurFYPerPreFYPerRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurFYPerPreFYPerValue, total=>$projection.PrevYearCurrentFYPeriodValue ) * 100` |  |  |
| `CurrentFYYearToDateValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_LedgerFiscalYear and PostingDate <= $parameters.P_ReportingDate ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `PreviousFYYearToDateValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear and PostingDate <= $parameters.P_ComparisonReportingDate ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurYTDPrevYTDValue` |  | |  | `cast( $projection.CurrentFYYearToDateValue - $projection.PreviousFYYearToDateValue as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurYTDPrevYTDRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurYTDPrevYTDValue, total=>$projection.PreviousFYYearToDateValue ) * 100` |  |  |
| `CurrentFiscalQuarterValue` |  | |  | `cast( case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `PrevFiscalQuarterValue` |  | |  | `cast( case when ( FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFiscalQtrValue` |  | |  | `cast( $projection.CurrentFiscalQuarterValue - $projection.PrevFiscalQuarterValue as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFiscalQtrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFiscalQtrValue, total=>$projection.PrevFiscalQuarterValue ) * 100` |  |  |
| `PrevYearCurrentFYQuarterValue` |  | |  | `cast( case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFYQuarterValue` |  | |  | `cast( $projection.CurrentFiscalQuarterValue - $projection.PrevYearCurrentFYQuarterValue as abap.dec( 23, 2 ) )` |  |  |
| `DeltaCurPrevFYQuarterRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFYQuarterValue, total=>$projection.PrevYearCurrentFYQuarterValue ) * 100` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck     : #NOT_ALLOWED
@AccessControl.personalData.blocking  : #REQUIRED
@EndUserText.label                    : 'Cost Center Actuals - Query'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : { serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED }
@VDM.viewType                         : #CONSUMPTION
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FCO_RB_CC_CHECK_VAR'
@ObjectModel.modelingPattern          : #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities    : [#ANALYTICAL_QUERY]
@UI.textArrangement                   : #TEXT_FIRST

define transient view entity C_CostCenterActualQuery
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

    //    @AnalyticsDetails.query.variableSequence         : 36
    //    @AnalyticsDetails.variable: {  usageType         : #FILTER,
    //                                   referenceElement  : 'BudgetCarryingCostCenter',
    //                                   mandatory         : false,
    //                                   selectionType     : #HIERARCHY_NODE,
    //                                   multipleSelections: true,
    //                                   hierarchyAssociation: '_BudgetCCHier'
    //    //                             hierarchyBinding  : [{type: #CONSTANT,value: 'A000' }, {type: #PARAMETER, value: 'P_CostCenterHierarchy' }]
    //                                }
    //    @EndUserText.label        : 'Budget Cost Center (Node)'
    //    P_BudCostCenter              : kostl,

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
    P_FiscalYearPeriodPrevYear   : fis_jahrper_conv,

    //*************************************************************
    // Current Quarter vs. Previous Quarter
    //**************************************************************
    @AnalyticsDetails.query.variableSequence : 58
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYearQuarter' }
    @Consumption.derivation: {  lookupEntity : 'F_FsclYearQtrByFsclPeriod',
                                resultElement: 'FiscalYearQuarter',
                                binding      : [{ targetParameter: 'P_FiscalYear',        type :#PARAMETER, value: 'P_LedgerFiscalYear' },
                                                { targetParameter: 'P_FiscalPeriod',      type :#PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetParameter: 'P_FiscalYearVariant', type :#PARAMETER, value: 'P_FiscalYearVariant' } ]
                             }
    @Consumption.hidden          : true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarter          : fins_fyearquarter,

    @AnalyticsDetails.query.variableSequence   : 59
    @Consumption.derivation: {  lookupEntity : 'F_FiscalYearQuarterShift',
                                resultElement: 'ShiftedFiscalYearQuarter',
                                binding      : [{ targetParameter: 'P_FiscalYearQuarter',             type: #PARAMETER,  value: 'P_FiscalYearQuarter' },
                                                { targetParameter: 'P_FiscalYearVariant',             type: #PARAMETER,  value: 'P_FiscalYearVariant' },
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration',  type: #CONSTANT,   value: '-1' },
                                                { targetParameter: 'P_FiscalTimePeriodOffsetUnit',    type: #CONSTANT,   value: 'Q' } ]
                             }
    @Consumption.hidden          : true
    @Semantics.fiscal.yearQuarter: true
    @UI.hidden                   : true
    P_PreviousFiscalYearQuarter  : fins_fyearquarter,

    @AnalyticsDetails.query.variableSequence   : 60
    @Consumption.derivation: {  lookupEntity : 'I_FiscalCalendarDate',
                                resultElement: 'FiscalYearQuarter',
                                binding      : [{ targetElement: 'FiscalYear',        type: #PARAMETER, value: 'P_ComparisonLedgerFiscalYear' },
                                                { targetElement: 'FiscalPeriod',      type: #PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' } ]
                             }
    @Consumption.hidden          : true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarterPrevYear  : fins_fyearquarter

  //    //  -------- It's added to to match the where Condition with Plan Query-------------------
  //    //  -------- Needed for Comment Sharing via Document Store
  //    @EndUserText.label                      : 'Plan Category'
  //    @Consumption.defaultValue               : 'ACT01'
  //    @AnalyticsDetails.query.variableSequence: 45
  //    @Consumption.hidden    : true
  //    P_PlanningCategory           : fcom_category

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

  //  @Consumption.hidden: true
  //  _CurrentCostCenter.CostCenter                                                                                       as BufferCostCenter,
  //  @Consumption.hidden: true
  //  _CurrentCostCenter.ControllingArea                                                                                  as BufferControllingArea,
  //  _CurrentCostCenter._BudgetCCHier( P_KeyDate: $parameters.P_ReportingDate )                                          as _BudgetCCHier,
  //  @AnalyticsDetails.query: {  variableSequence     : 70,
  //                              axis                 : #FREE,
  //                              displayHierarchy     : #FILTER_ONLY,
  //                              totals : #SHOW,
  //                              hierarchyAssociation: '_BudgetCCHier',
  //                              hierarchyInitialLevel: 2,
  //                              keyDisplay           : #NOT_COMPOUND
  //                           }
  //
  //  @UI.textArrangement:#TEXT_ONLY
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

  @Consumption.filter :{  selectionType     : #SINGLE,
                          multipleSelections: false,
                          mandatory         : false,
                          defaultValue      : 'A'
                       }
  @Consumption.hidden: true
  ActualPlanCode,

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
  @Consumption.hidden: true
  PlanningCategory,
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

  //  ------ Structures ---------

  @EndUserText.label: 'Ratio Unit %'
  cast( '%' as abap.unit )                                                                                            as RatioUnit,

  @EndUserText.label: 'Reporting Year'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Year &1',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
  cast( case when
    (
      LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
    )  then 1
    end                                                 as abap.dec( 23, 2 ) )                                        as CurrentFiscalYearValue,

  @EndUserText.label: 'Previous Year'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Previous Year &1',
                                binding: [{ index: 1, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
  cast( case when
    (
      LedgerFiscalYear  = $parameters.P_ComparisonLedgerFiscalYear
    )  then 1
    end                                                 as abap.dec( 23, 2 )  )                                       as PrevFiscalYearValue,

  //  ------ Fiscal Period --------

  @EndUserText.label: 'Reporting Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Fiscal Period &1',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  cast( case when
    (
    FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
    )  then 1
    end                                                 as abap.dec( 23, 2 ) )                                        as CurrentFYPeriodValue,

  @EndUserText.label: 'Previous Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Previous Fiscal Period &1',
                                binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  cast( case when
    (
    FiscalYearPeriod  = $parameters.P_PreviousFiscalYearPeriod
    )  then 1
    end                                                 as abap.dec( 23, 2 ) )                                        as PreviousFYPeriodValue,

  //  ------ Fiscal Period in previous year --------

  @EndUserText.label: 'Diff. RP - PP'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
  @Consumption.dynamicLabel: {  label  : 'Diff. RP &1 - PP &2',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'},
                                          { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  cast( $projection.CurrentFYPeriodValue - $projection.PreviousFYPeriodValue as abap.dec( 23, 2 ) )                   as DeltaCurPrevFYPeriodValue,

  @EndUserText.label: '% Diff. RP - PP'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: {  label  : '% Diff. RP &1 - PP &2',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'},
                                          { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  @AnalyticsDetails.query.decimals:2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=>$projection.PreviousFYPeriodValue ) * 100          as DeltaCurPrevFYPeriodRatio,

  //  ------ Fiscal Period in previous year --------

  @EndUserText.label: 'Reporting Period Previous FY'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Period Previous FY &1',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  cast( case when ( FiscalYearPeriod  = $parameters.P_FiscalYearPeriodPrevYear ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                               as PrevYearCurrentFYPeriodValue,

  @EndUserText.label: 'Diff. RP - RP in PY'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
  @Consumption.dynamicLabel: {  label  : 'Diff. RP &1 - RP in PY &2',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'},
                                          { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  cast( $projection.CurrentFYPeriodValue - $projection.PrevYearCurrentFYPeriodValue as abap.dec( 23, 2 ) )            as DeltaCurFYPerPreFYPerValue,

  @EndUserText.label: '% Diff. RP - RP in PY'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: {  label  : '% Diff. RP &1 - RP in PY &2',
                                binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'},
                                          { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'Period Comparison' }]
  @AnalyticsDetails.query.decimals:2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurFYPerPreFYPerValue, total=>$projection.PrevYearCurrentFYPeriodValue ) * 100  as DeltaCurFYPerPreFYPerRatio,


  //  ------ Year-to-date: current year vs. previous year -----

  @EndUserText.label: 'Reporting Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Year-to-Date &1',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast(
    case
    when
    (
          LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
      and PostingDate      <= $parameters.P_ReportingDate
  //      and FiscalYearPeriod <= $parameters.P_FiscalYearPeriod
    )  then 1
    end                                                 as abap.dec( 23, 2 ) )                                        as CurrentFYYearToDateValue,

  @EndUserText.label: 'Previous Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label: 'Previous Year-to-Date &1',
                                binding: [{ index: 1, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast(
    case
    when
    (
          LedgerFiscalYear  = $parameters.P_ComparisonLedgerFiscalYear
      and PostingDate      <= $parameters.P_ComparisonReportingDate
  //      and FiscalYearPeriod <= $parameters.P_PreviousFiscalYearPeriod
    )  then 1
    end                                                 as abap.dec( 23, 2 ) )                                        as PreviousFYYearToDateValue,

  @EndUserText.label: 'Diff. RYtD - PYtD'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Diff. RYtD &1 - PYtD &2',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'},
                                         { index: 2, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( $projection.CurrentFYYearToDateValue - $projection.PreviousFYYearToDateValue as abap.dec( 23, 2 ) )           as DeltaCurYTDPrevYTDValue,

  @EndUserText.label: '% Diff. RYtD - PYtD'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: {  label  : '% Diff. RYtD &1 - PYtD &2',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'},
                                          { index: 2, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  @AnalyticsDetails.query.decimals:2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurYTDPrevYTDValue, total=>$projection.PreviousFYYearToDateValue ) * 100        as DeltaCurYTDPrevYTDRatio,


  //  ------ Current Quarter vs. Previous Quarter -----

  @EndUserText.label: 'Reporting Quarter'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Quarter &1.&2',
                                binding: [{ index: 1, parameter: 'P_FiscalYearQuarter', offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 2, parameter: 'P_FiscalYearQuarter',            length: 4, format: #KEY_INTERNAL }]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.hidden: true
  cast( case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )          as CurrentFiscalQuarterValue,

  @EndUserText.label: 'Previous Quarter'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Previous Quarter &1.&2',
                                binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter', offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 2, parameter: 'P_PreviousFiscalYearQuarter',            length: 4, format: #KEY_INTERNAL }]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.hidden: true
  cast( case when ( FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )   as PrevFiscalQuarterValue,

  @EndUserText.label: 'Diff. RQ - PQ'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: {  label  : 'Diff. RQ &1.&2 - PQ &3.&4',
                                binding: [{ index: 1, parameter: 'P_FiscalYearQuarter',         offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 2, parameter: 'P_FiscalYearQuarter',                    length: 4, format: #KEY_INTERNAL },
                                          { index: 3, parameter: 'P_PreviousFiscalYearQuarter', offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 4, parameter: 'P_PreviousFiscalYearQuarter',            length: 4, format: #KEY_INTERNAL }]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.hidden: true
  cast( $projection.CurrentFiscalQuarterValue - $projection.PrevFiscalQuarterValue as abap.dec( 23, 2 ) )             as DeltaCurPrevFiscalQtrValue,

  @EndUserText.label: '% Diff. RQ - PQ'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: {  label  : '% Diff. RQ &1.&2 - PQ &3.&4',
                                binding: [{ index: 1, parameter: 'P_FiscalYearQuarter',         offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 2, parameter: 'P_FiscalYearQuarter',                    length: 4, format: #KEY_INTERNAL },
                                          { index: 3, parameter: 'P_PreviousFiscalYearQuarter', offset: 4, length: 1, format: #KEY_INTERNAL },
                                          { index: 4, parameter: 'P_PreviousFiscalYearQuarter', length: 4,            format: #KEY_INTERNAL }]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.decimals:2
  @AnalyticsDetails.query.hidden: true
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurPrevFiscalQtrValue, total=>$projection.PrevFiscalQuarterValue ) * 100        as DeltaCurPrevFiscalQtrRatio,

  /****Current Quarter vs Same Quarter PY******/
  @EndUserText.label: 'Reporting Quarter Previous Year'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Reporting Quarter Previous Year &1.&2',
                               binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear', offset: 4, length: 1, format: #KEY_INTERNAL },
                                         { index: 2, parameter: 'P_FiscalYearQuarterPrevYear',            length: 4, format: #KEY_INTERNAL }]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.hidden: true
  cast( case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )   as PrevYearCurrentFYQuarterValue,

  @EndUserText.label: 'Diff. RQ - RQPY'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label  : 'Diff. RQ &1.&2 - RQPY &3.&4',
                               binding: [{ index: 1, parameter: 'P_FiscalYearQuarter',         offset: 4, length: 1, format: #KEY_INTERNAL },
                                         { index: 2, parameter: 'P_FiscalYearQuarter',                    length: 4, format: #KEY_INTERNAL },
                                         { index: 3, parameter: 'P_FiscalYearQuarterPrevYear', offset: 4, length: 1, format: #KEY_INTERNAL },
                                         { index: 4, parameter: 'P_FiscalYearQuarterPrevYear',            length: 4, format: #KEY_INTERNAL }]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.hidden: true
  cast( $projection.CurrentFiscalQuarterValue - $projection.PrevYearCurrentFYQuarterValue as abap.dec( 23, 2 ) )      as DeltaCurPrevFYQuarterValue,

  @EndUserText.label: '% Diff. RQ - RQPY'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label  : '% Diff. RQ &1.&2 - RQPY &3.&4',
                               binding: [{ index: 1, parameter: 'P_FiscalYearQuarter',         offset: 4, length: 1, format: #KEY_INTERNAL },
                                         { index: 2, parameter: 'P_FiscalYearQuarter',                    length: 4, format: #KEY_INTERNAL },
                                         { index: 3, parameter: 'P_FiscalYearQuarterPrevYear', offset: 4, length: 1, format: #KEY_INTERNAL },
                                         { index: 4, parameter: 'P_FiscalYearQuarterPrevYear',            length: 4, format: #KEY_INTERNAL }]
                             }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
  @AnalyticsDetails.query.decimals:2
  @AnalyticsDetails.query.hidden: true
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurPrevFYQuarterValue, total=>$projection.PrevYearCurrentFYQuarterValue ) * 100 as DeltaCurPrevFYQuarterRatio

//  _DocumentStore

}
where
       Ledger           = $parameters.P_Ledger
  and  CompanyCode      = $parameters.P_CompanyCode
  and  CostCenter       = $parameters.P_CostCenter
  and  CostCenter       <> ''
//  and(
//       PlanningCategory =  'ACT01'
//    or PlanningCategory =  'PLN'
//  )
  and(
       LedgerFiscalYear = $parameters.P_LedgerFiscalYear
    or LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear

  )
```
