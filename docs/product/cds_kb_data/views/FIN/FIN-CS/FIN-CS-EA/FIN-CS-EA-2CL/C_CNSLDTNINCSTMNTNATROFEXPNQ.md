---
name: C_CNSLDTNINCSTMNTNATROFEXPNQ
description: "This query corresponds to the data provider for the Nature of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTNATROFEXPNQ')/$value
semantic_en: "This query corresponds to the data provider for the Nature of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Income Statement - Nature of Expense — CDS view tiêu dùng dựa trên Income Statement - Nature of Expense."
keywords:
  - "Income Statement - Nature of Expense"
  - "income"
  - "statement"
  - "nature"
  - "expense"
  - "amount"
  - "transaction"
  - "currency"
  - "group"
  - "local"
  - "cnsldtn"
  - "quantity"
  - "base"
  - "unit"
  - "sign"
  - "adjd"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
---
# C_CNSLDTNINCSTMNTNATROFEXPNQ

**This query corresponds to the data provider for the Nature of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTNATROFEXPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `AmountInGroupCurrency` |  | |  | `curr_to_decfloat_amount(AmountInGroupCurrency)` | `DECF(34)` |  |
| `AmountInLocalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInLocalCurrency)` | `DECF(34)` |  |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInTransCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInLocalCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInGroupCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  | `$projection.CnsldtnIntSignQtyInBaseUnit * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `QUAN(31)` |  |
| `ClsgFiscalYearAmount` |  | |  | `case when ( FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `PrevFiscalYearAmount` |  | |  | `case when ( FiscalYear = $parameters.P_PreviousFiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaClsgPrevFiscalYearAmount` |  | |  | `$projection.ClsgFiscalYearAmount - $projection.PrevFiscalYearAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFiscalYearRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFiscalYearAmount, total=>$projection.PrevFiscalYearAmount) * 100` | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` |  | |  | `case when ( FiscalYear = $parameters.P_FiscalYear and FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `PrevFiscalYearPeriodAmount` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaClsgPrevFsclPeriodAmount` |  | |  | `$projection.ClsgFiscalYearPeriodAmount - $projection.PrevFiscalYearPeriodAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFsclPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFsclPeriodAmount, total=>$projection.PrevFiscalYearPeriodAmount) * 100` | `DECF(34)` |  |
| `ClsgFiscalQuarterAmount` |  | |  | `case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarter and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `PrevFiscalQuarterAmount` |  | |  | `case when ( FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter and ConsolidationVersion = $parameters.P_ConsolidationVersion) then 1 end` | `INT1(3)` |  |
| `DeltaClsgPrevFiscalQtrAmount` |  | |  | `$projection.ClsgFiscalQuarterAmount - $projection.PrevFiscalQuarterAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFiscalQtrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFiscalQtrAmount, total=>$projection.PrevFiscalQuarterAmount) * 100` | `DECF(34)` |  |
| `FiscalYearQtrPrevYearAmount` |  | |  | `case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear and ConsolidationVersion = $parameters.P_ConsolidationVersion) then 1 end` | `INT1(3)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` |  | |  | `$projection.ClsgFiscalQuarterAmount - $projection.FiscalYearQtrPrevYearAmount` | `INT4(10)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgFsclYrQtrPrevYrAmt, total=>$projection.FiscalYearQtrPrevYearAmount) * 100` | `DECF(34)` |  |
| `cuky` |  | |  | `virtual CnsldtnReportingCurrency : abap.cuky` |  |  |
| `ClsgFiscalYearToDateAmount` |  | |  | `case when ( FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `ClsgPrevFiscalYearToDateAmount` |  | |  | `case when ( FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaClsgPrevFsclYTDAmount` |  | |  | `$projection.ClsgFiscalYearToDateAmount - $projection.ClsgPrevFiscalYearToDateAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFsclYTDRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFsclYTDAmount, total=>$projection.ClsgPrevFiscalYearToDateAmount) * 100` | `DECF(34)` |  |
| `FiscalYrPeriodPrevYrAmt` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaActFsclYrPerdPrevYrAmt` |  | |  | `$projection.ClsgFiscalYearPeriodAmount - $projection.FiscalYrPeriodPrevYrAmt` | `INT4(10)` |  |
| `DeltaActFsclYrPerdPrevYrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActFsclYrPerdPrevYrAmt, total=>$projection.FiscalYrPeriodPrevYrAmt) * 100` | `DECF(34)` |  |
| `ClsgFiscalPeriodAmount` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `BudgetFiscalPeriodAmount` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationBudgetVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaActBdgtFsclPeriodAmount` |  | |  | `$projection.ClsgFiscalPeriodAmount - $projection.BudgetFiscalPeriodAmount` | `INT4(10)` |  |
| `DeltaActBdgtFsclPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActBdgtFsclPeriodAmount, total=>$projection.BudgetFiscalPeriodAmount) * 100` | `DECF(34)` |  |
| `ActualFiscalYearToDateAmount` |  | |  | `case when ( FiscalPeriod <= $parameters.P_FiscalPeriod and FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `BudgetFiscalYearToDateAmount` |  | |  | `case when ( FiscalPeriod <= $parameters.P_FiscalPeriod and FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationBudgetVersion) then 1 end` | `INT1(3)` |  |
| `DeltaActBdgtFsclYearToDateAmt` |  | |  | `$projection.ActualFiscalYearToDateAmount - $projection.BudgetFiscalYearToDateAmount` | `INT4(10)` |  |
| `DeltaActBdgtFsclYTDRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActBdgtFsclYearToDateAmt, total=>$projection.BudgetFiscalYearToDateAmount) * 100` | `DECF(34)` |  |
| `ActCnstntCrcyFsclPerdAmt` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_CnsldtnCnstntCrcyVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaActCnstntFsclYrPerdAmt` |  | |  | `$projection.ActCnstntCrcyFsclPerdAmt - $projection.ClsgFiscalPeriodAmount` | `INT4(10)` |  |
| `DeltaBdgtActCnstntFYPerdAmt` |  | |  | `$projection.BudgetFiscalPeriodAmount - $projection.ActCnstntCrcyFsclPerdAmt` | `INT4(10)` |  |
| `CnsldtnSourceAmount` |  | |  | `case when ( ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `CnsldtnUnitLevelAmount` |  | |  | `$projection.CnsldtnRepDataIntAccAmount + $projection.CnsldtnRepDataExtAccAmount + $projection.CnsldtnAdjustmentsAmount` | `INT4(10)` |  |
| `CnsldtnRepDataIntAccAmount` |  | |  | `case when ( PostingLevel = '' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `CnsldtnRepDataExtAccAmount` |  | |  | `case when ( PostingLevel = '00' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `CnsldtnAdjustmentsAmount` |  | |  | `case when ( ( PostingLevel = '01' or PostingLevel = '10' ) and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `CnsldtnGroupLevelAmount` |  | |  | `$projection.CnsldtnEliminationsAmount + $projection.CnsldtnConsolidationsAmount` | `INT4(10)` |  |
| `CnsldtnEliminationsAmount` |  | |  | `case when ( PostingLevel = '20' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `CnsldtnConsolidationsAmount` |  | |  | `case when ( ( PostingLevel = '02' or PostingLevel = '12' or PostingLevel = '22' or PostingLevel = '30' ) and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` |  | |  |  | `CHAR(18)` | Investor Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Entry Date Time in Short Form (YYYYMMDDhhmmss) |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `GHGCategory` |  | |  |  | `CHAR(10)` | Greenhouse Gas Category |
| `GHGScope` |  | |  |  | `CHAR(1)` | Greenhouse Gas Scope |
| `GHGScope2CalculationMethod` |  | |  |  | `CHAR(2)` | Greenhouse Gas Scope 2 Calculation Method |
| `GHGScope2ContractualInstrument` |  | |  |  | `CHAR(5)` | Greenhouse Gas Scope 2 Contractual Instrument |
| `GHGDataQualityCharacteristic` |  | |  |  | `CHAR(4)` | Greenhouse Gas Data Quality Characteristic |
| `GHGEnergyClassification` |  | |  |  | `CHAR(4)` | Greenhouse Gas Energy Classification |
| `GHGEnergyMix` |  | |  |  | `CHAR(9)` | Greenhouse Gas Energy Mix |
| `GHGEnergySourcingType` |  | |  |  | `CHAR(10)` | Greenhouse Gas Energy Sourcing Type |
| `SustainabilityModeOfTransport` |  | |  |  | `CHAR(3)` | Sustainability Mode of Transport |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  | `CHAR(4)` | Cash Origin Chart of Accounts |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  | `curr_to_decfloat_amount(CnsldtnIntSignAmtInTransCrcy)` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  | `curr_to_decfloat_amount(CnsldtnIntSignAmtInGroupCrcy)` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  | `curr_to_decfloat_amount(CnsldtnIntSignAmtInLocalCrcy)` | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `ConsolidationQuestion` |  | |  |  | `CHAR(32)` | Question |
| `ConsolidationPredefinedAnswer` |  | |  |  | `CHAR(32)` | Predefined Answer |
| `ConsolidationFreeTextAnswer` |  | |  |  | `CHAR(32)` | Reported Answer |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTNATROFEXPNQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTNATROFEXPNQ')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics: {
    technicalName: 'CCNSLDTISNOE',
    variableCheck.implementedBy: 'className:cl_fincs_query_variable_check',
    document.defaultAssociationToStorage: '_DocumentStore'
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        dataClass: #MIXED,
        sizeCategory: #XL,
        serviceQuality: #D
    },
    supportedCapabilities:[#ANALYTICAL_QUERY, #KEY_USER_COPYING_TEMPLATE]
}
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@VDM: {
    viewType: #CONSUMPTION
}
@EndUserText.label: 'Income Statement - Nature of Expense'

define transient view entity C_CnsldtnIncStmntNatrOfExpnQ
  provider contract analytical_query
  with parameters

    @AnalyticsDetails.query.variableSequence : 5
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'F_CnsldtnUsrDfltCnsldtnVersion', resultElement: 'ConsolidationVersion' }
    @Consumption.valueHelpDefinition: [{ entity: {
        name: 'I_CnsldtnVersion',
        element: 'ConsolidationVersion' }}]
    P_ConsolidationVersion       : fincs_rvers,

    @AnalyticsDetails.query.variableSequence : 8
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'F_ConsolidationBudgetVersion',
        resultElement: 'ConsolidationVersion',
        binding: [
            { targetParameter: 'P_FiscalYearPeriod', type : #PARAMETER, value: 'P_FiscalYearPeriod' },
            { targetParameter: 'P_ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' }
            ]
    }
    @Consumption.valueHelpDefinition: [{ entity: {
          name: 'I_CnsldtnVersionVH',
          element: 'ConsolidationVersion' }}]
    P_ConsolidationBudgetVersion : fincs_rbudget_vers,

    @AnalyticsDetails.query.variableSequence : 9
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'F_CnsldtnCnstntCurrencyVersion',
        resultElement: 'ConsolidationVersion',
        binding: [
            { targetParameter: 'P_FiscalYearPeriod', type : #PARAMETER, value: 'P_FiscalYearPeriod' },
            { targetParameter: 'P_ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' }
            ]
    }
    @Consumption.valueHelpDefinition: [{ entity: {
        name: 'I_CnsldtnVersionVH',
        element: 'ConsolidationVersion' }}]
    P_CnsldtnCnstntCrcyVersion   : fincs_ractcc_vers,

    @AnalyticsDetails.query.variableSequence : 10
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYear', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'F_CnsldtnUserDefaultFiscalYear', resultElement: 'FiscalYear' }
    @Semantics.fiscal.year: true
    P_FiscalYear                 : ryear,

    @AnalyticsDetails.query.variableSequence : 20
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalPeriod', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
    lookupEntity: 'F_CnsldtnUserDfltFiscalPeriod',
    resultElement: 'FiscalPeriod' }
    @Semantics.fiscal.period: true
    P_FiscalPeriod               : poper,

    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYearVariant', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
    lookupEntity: 'F_CnsldtnFiscalYearVariant',
    resultElement: 'FiscalYearVariant',
    binding: [{ targetParameter: 'P_ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' }]
        }
    @Consumption.hidden: true
    P_FiscalYearVariant          : fis_periv,

    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalPeriodEndDate', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'F_FiscalPeriodEndDate',
        resultElement: 'FiscalPeriodEndDate',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Semantics.businessDate.at: true
    P_KeyDate                    : vdm_v_key_date,

    @AnalyticsDetails.query.variableSequence : 60
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FinancialStatementItemHier', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: 'PL'
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_FinStmntItmHierDirVH',
                element: 'FinancialStatementItemHier' }
    }]
    P_FinancialStatementItemHier : fincs_ithry,

    @AnalyticsDetails.query.variableSequence : 70
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationUnitHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: 'CS17/DEFAULT_HIERARCHY'
    @Consumption.valueHelpDefinition:
        [{ entity: { name: 'I_CnsldtnUnitHierarchyVH',
                    element: 'ConsolidationUnitHierarchy' }
    }]
    P_ConsolidationUnitHierarchy : fincs_hryid_consunit,

    @AnalyticsDetails.query.variableSequence : 80
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'AdditionalMasterDataHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:
        [ { entity: { name: 'I_CnsldtnProfitCenterHierVH',
                      element: 'ConsolidationPrftCtrHierarchy' }
    }]
    @EndUserText.label: 'Profit Center Hierarchy for Elimination'
    P_ConsolidationPrftCtrHier   : fincs_hryid_profitcenter,

    @AnalyticsDetails.query.variableSequence : 90
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationSegmentHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:
        [{ entity: { name: 'I_CnsldtnSegmentHierarchyVH',
                     element: 'ConsolidationSegmentHierarchy' }

    }]
    @EndUserText.label: 'Segment Hierarchy for Elimination'
    P_ConsolidationSegmentHier   : fincs_hryid_segment,

    //********************************************************************************
    // Closing Year vs. Previous Year
    //********************************************************************************
    @Consumption.derivation: {
        lookupEntity:  'F_FiscalYearShift',
        resultElement: 'ShiftedFiscalYear',
        binding: [

             { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
             { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
             { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
             { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'Y' }
             ]
     }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    P_PreviousFiscalYear         : fis_gjahr,

    //*************************************************************
    // Closing Quarter vs. Previous Quarter
    //**************************************************************
    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearQtrByFsclPeriod',
        resultElement: 'FiscalYearQuarter',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarter          : fins_fyearquarter,

    @Consumption.derivation: {
        lookupEntity: 'F_FiscalYearQuarterShift',
        resultElement: 'ShiftedFiscalYearQuarter',
        binding: [
            { targetParameter: 'P_FiscalYearQuarter', type : #PARAMETER, value: 'P_FiscalYearQuarter' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
            { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
            { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'Q' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_PreviousFiscalYearQuarter  : fins_fyearquarter,

    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYearQuarter', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearQtrByFsclPeriod',
        resultElement: 'FiscalYearQuarter',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_PreviousFiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarterPrevYear  : fins_fyearquarter,

    //********************************************************************************
    // Closing Period vs. Previous Period
    //*********************************************************************************
    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
        resultElement: 'FiscalYearPeriod',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod           : fis_jahrper_conv,
    @Consumption.derivation: {
             lookupEntity: 'F_FiscalYearPeriodShift',
             resultElement: 'ShiftedFiscalYearPeriod',
             binding: [
                 { targetParameter: 'P_FiscalYearPeriod', type : #PARAMETER, value: 'P_FiscalYearPeriod' },
                 { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
                 { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
                 { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'P' } ]
         }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,

    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
        resultElement: 'FiscalYearPeriod',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_PreviousFiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriodPrevYear   : fis_jahrper_conv,

    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'GroupCurrency', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'F_ConsolidationGroupCurrency',
        resultElement: 'GroupCurrency',
            binding: [ { targetParameter: 'P_ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' } ]
    }
    @Consumption.hidden: true
    @UI.hidden: true
    P_GroupCurrency              : fincs_ui_gcurr

  as projection on I_CnsldtnGrpJrnlItemC(
                    P_ConsolidationUnitHierarchy : $parameters.P_ConsolidationUnitHierarchy,
                    P_ConsolidationPrftCtrHier   : $parameters.P_ConsolidationPrftCtrHier,
                    P_ConsolidationSegmentHier   : $parameters.P_ConsolidationSegmentHier,
                    P_KeyDate                    : $parameters.P_KeyDate ) as MatrixCnsldtnFndnCube
{

          //*******************************************************************
          // Measures
          //*******************************************************************
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @AnalyticsDetails.query.hidden: true
          curr_to_decfloat_amount(AmountInTransactionCurrency)                                                                                                                                as AmountInTransactionCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'GroupCurrency'
          @AnalyticsDetails.query.hidden: true
          curr_to_decfloat_amount(AmountInGroupCurrency)                                                                                                                                      as AmountInGroupCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @AnalyticsDetails.query.hidden: true
          curr_to_decfloat_amount(AmountInLocalCurrency)                                                                                                                                      as AmountInLocalCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Aggregation.default: #SUM
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          CnsldtnQuantityInBaseUnit,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Sign-Adjusted Amount in Trans. Currency'
          $projection.CnsldtnIntSignAmtInTransCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                    as CnsldtnSignAdjdAmtInTransCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Sign-Adjusted Amount in Local Currency'
          $projection.CnsldtnIntSignAmtInLocalCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                    as CnsldtnSignAdjdAmtInLocalCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'GroupCurrency'
          @EndUserText.label: 'Sign-Adjusted Amount in Group Currency'
          $projection.CnsldtnIntSignAmtInGroupCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                    as CnsldtnSignAdjdAmtInGroupCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          @EndUserText.label: 'Sign-Adjusted Quantity'
          @AnalyticsDetails.query.hidden: true
          $projection.CnsldtnIntSignQtyInBaseUnit * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                     as CnsldtnSignAdjdQtyInBaseUnit,

          //*******************************************************************
          // Non-Measure Structure Members
          //*******************************************************************

          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          case when ( FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion )  then 1  end                                                      as ClsgFiscalYearAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          case when ( FiscalYear = $parameters.P_PreviousFiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                as PrevFiscalYearAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CY &1 △PY &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          $projection.ClsgFiscalYearAmount - $projection.PrevFiscalYearAmount                                                                                                                 as DeltaClsgPrevFiscalYearAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CY &1 △PY &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaClsgPrevFiscalYearAmount, total=>$projection.PrevFiscalYearAmount) * 100                                                                        as DeltaClsgPrevFiscalYearRatio,

          /****Closing Period vs. Previous Period******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYear = $parameters.P_FiscalYear and FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end  as ClsgFiscalYearPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                    as PrevFiscalYearPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CP &1 △PP &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalYearPeriodAmount - $projection.PrevFiscalYearPeriodAmount                                                                                                     as DeltaClsgPrevFsclPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CP &1 △PP &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaClsgPrevFsclPeriodAmount, total=>$projection.PrevFiscalYearPeriodAmount) * 100                                                                  as DeltaClsgPrevFsclPeriodRatio,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarter and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                          as ClsgFiscalQuarterAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          case when ( FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter and ConsolidationVersion = $parameters.P_ConsolidationVersion) then 1 end                                   as PrevFiscalQuarterAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CQ &1 △PQ &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          $projection.ClsgFiscalQuarterAmount - $projection.PrevFiscalQuarterAmount                                                                                                           as DeltaClsgPrevFiscalQtrAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CQ &1 △PQ &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaClsgPrevFiscalQtrAmount, total=>$projection.PrevFiscalQuarterAmount) * 100                                                                      as DeltaClsgPrevFiscalQtrRatio,


          /****Current Quarter vs Same Quarter PY.******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Quarter Previous Year &1', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear and ConsolidationVersion = $parameters.P_ConsolidationVersion) then 1 end                                   as FiscalYearQtrPrevYearAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CQ &1 △CQPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalQuarterAmount - $projection.FiscalYearQtrPrevYearAmount                                                                                                       as DeltaClsgFsclYrQtrPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CQ &1 △CQPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaClsgFsclYrQtrPrevYrAmt, total=>$projection.FiscalYearQtrPrevYearAmount) * 100                                                                   as DeltaClsgFsclYrQtrPrevYrRatio,

          /****Closing YTD vs. Previous YTD******/
  virtual CnsldtnReportingCurrency : abap.cuky,
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod
                 and ConsolidationVersion = $parameters.P_ConsolidationVersion )  then 1 end                                                                                                  as ClsgFiscalYearToDateAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod
                        and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                                            as ClsgPrevFiscalYearToDateAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'YTD &1 △ &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalYearToDateAmount - $projection.ClsgPrevFiscalYearToDateAmount                                                                                                 as DeltaClsgPrevFsclYTDAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%YTD &1 △ &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaClsgPrevFsclYTDAmount, total=>$projection.ClsgPrevFiscalYearToDateAmount) * 100                                                                 as DeltaClsgPrevFsclYTDRatio,

          /****Closing PERIOD vs. Same Period Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear
                        and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                                            as FiscalYrPeriodPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CP &1 △CPPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalYearPeriodAmount - $projection.FiscalYrPeriodPrevYrAmt                                                                                                        as DeltaActFsclYrPerdPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CP &1 △CPPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaActFsclYrPerdPrevYrAmt, total=>$projection.FiscalYrPeriodPrevYrAmt) * 100                                                                       as DeltaActFsclYrPerdPrevYrRatio,


          /********************************* Actual vs. Budget  Begin ***************************************/

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'ACT &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                            as ClsgFiscalPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'BUD &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationBudgetVersion ) then 1 end                                      as BudgetFiscalPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'ACT &1 △BUD &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriod'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalPeriodAmount - $projection.BudgetFiscalPeriodAmount                                                                                                           as DeltaActBdgtFsclPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%ACT &1 △BUD &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriod'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaActBdgtFsclPeriodAmount, total=>$projection.BudgetFiscalPeriodAmount) * 100                                                                     as DeltaActBdgtFsclPeriodRatio,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'ACT YTD 001- &1', binding: [ { index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalPeriod <= $parameters.P_FiscalPeriod and FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end         as ActualFiscalYearToDateAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'BUD YTD 001- &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalPeriod <= $parameters.P_FiscalPeriod and FiscalYear = $parameters.P_FiscalYear and ConsolidationVersion = $parameters.P_ConsolidationBudgetVersion) then 1 end    as BudgetFiscalYearToDateAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @EndUserText.label: 'ACT YTD △ BUD YTD'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ActualFiscalYearToDateAmount - $projection.BudgetFiscalYearToDateAmount                                                                                                 as DeltaActBdgtFsclYearToDateAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @EndUserText.label: '%ACT YTD △ BUD YTD'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaActBdgtFsclYearToDateAmt, total=>$projection.BudgetFiscalYearToDateAmount) * 100                                                                as DeltaActBdgtFsclYTDRatio,

          /*********actuals @ constant/budget Currency******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'ACT@cc. &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_CnsldtnCnstntCrcyVersion ) then 1 end                                        as ActCnstntCrcyFsclPerdAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @EndUserText.label: 'ACT@cc △ ACT'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActBudComp', groupLabel: 'Actual vs. Budget' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ActCnstntCrcyFsclPerdAmt - $projection.ClsgFiscalPeriodAmount                                                                                                           as DeltaActCnstntFsclYrPerdAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @EndUserText.label: 'BUD △ ACT@cc'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          $projection.BudgetFiscalPeriodAmount - $projection.ActCnstntCrcyFsclPerdAmt                                                                                                         as DeltaBdgtActCnstntFYPerdAmt,

          //***************************************************************
          // Column Definition for the Source of Data
          //**************************************************************
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @EndUserText.label: 'Source'
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: true
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                                                  as CnsldtnSourceAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @EndUserText.label: 'Unit Level'
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnSourceAmount'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.CnsldtnRepDataIntAccAmount + $projection.CnsldtnRepDataExtAccAmount + $projection.CnsldtnAdjustmentsAmount                                                              as CnsldtnUnitLevelAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnUnitLevelAmount'
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( PostingLevel = '' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                            as CnsldtnRepDataIntAccAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnUnitLevelAmount'
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( PostingLevel = '00' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                          as CnsldtnRepDataExtAccAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnUnitLevelAmount'
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( ( PostingLevel = '01' or PostingLevel = '10' ) and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                               as CnsldtnAdjustmentsAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnSourceAmount'
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.CnsldtnEliminationsAmount + $projection.CnsldtnConsolidationsAmount                                                                                                     as CnsldtnGroupLevelAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnGroupLevelAmount'
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( PostingLevel = '20' and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                          as CnsldtnEliminationsAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.elementHierarchy.parent: 'CnsldtnGroupLevelAmount'
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'SourceComp', groupLabel: 'Source Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( ( PostingLevel = '02' or PostingLevel = '12' or PostingLevel = '22' or PostingLevel = '30' ) and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end as CnsldtnConsolidationsAmount,

          //***************************************************************
          // Dimensions
          //***************************************************************
          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
          @AnalyticsDetails.query.variableSequence : 30
          @Consumption.derivation: { lookupEntity: 'F_CnsldtnUserDefaultCnsldtnCOA', resultElement: 'ConsolidationChartOfAccounts' }
          ConsolidationChartOfAccounts,

          @Consumption.filter: {
          hierarchyBinding : [
                              { type : #ELEMENT, value : 'ConsolidationChartOfAccounts'},
                              { type : #PARAMETER, value : 'P_FinancialStatementItemHier' }],
          selectionType: #HIERARCHY_NODE,
          multipleSelections: true,
          mandatory:          false
          }
          @AnalyticsDetails.query: {
              variableSequence :  70,
              axis:               #ROWS,
              displayHierarchy:   #FILTER_ONLY,
              hierarchyInitialLevel: 3,
              hierarchySettings.childNodePosition: #ABOVE
          }
          @UI.textArrangement: #TEXT_ONLY
          @Consumption.semanticObject: 'ConsolidationFinanceSItem'
          FinancialStatementItem,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true}
          @Consumption.derivation: {
           lookupEntity: 'F_CnsldtnFiscalYearVariant',
           resultElement: 'FiscalYearVariant',
           binding: [{ targetParameter: 'P_ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' }]
                  }
          @Semantics.fiscal.yearVariant: true
          FiscalYearVariant,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.year: true
          FiscalYear,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.period: true
          FiscalPeriod,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.yearPeriod: true
          FiscalYearPeriod,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.yearQuarter: true
          FiscalYearQuarter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.quarter: true
          FiscalQuarter,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
          @Consumption.derivation: { lookupEntity: 'F_CnsldtnUsrDfltCnsldtnGroup', resultElement: 'ConsolidationGroup' }
          @AnalyticsDetails.query.variableSequence : 60
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationGroup,

          @Consumption.filter: {
            selectionType: #HIERARCHY_NODE,
            multipleSelections: true,
            hierarchyBinding: [{ type: #PARAMETER, value: 'P_ConsolidationUnitHierarchy' }],
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 71,
            axis: #FREE,
            displayHierarchy: #FILTER_ONLY,
            hierarchyInitialLevel: 3
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerConsolidationUnit,

          @Consumption.filter: {
          selectionType: #HIERARCHY_NODE,
          multipleSelections: true,
          hierarchyBinding: [{ type: #PARAMETER, value: 'P_ConsolidationUnitHierarchy' }],
          mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 71,
            axis: #FREE,
            displayHierarchy: #FILTER_ONLY,
            hierarchyInitialLevel: 3
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationUnitForElim,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          InvesteeConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          InvestorConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          Company,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerCompany,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 81,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          ProfitCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerProfitCenter,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 83,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationPrftCtrForElim,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 91,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          Segment,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerSegment,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 93,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationSegmentForElim,

          @AnalyticsDetails.query: {axis: #FREE}
          @AnalyticsDetails.query.totals: #HIDE
          GLAccount,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          CostCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerCostCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          FunctionalArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerFunctionalArea,


          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          BusinessArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerBusinessArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ControllingArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationVersion,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationVersionElement,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PostingLevel,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationDocumentType,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          SubItemCategory,

          @AnalyticsDetails.query: {axis: #FREE, totals: #SHOW }
          @UI.textArrangement: #TEXT_LAST
          SubItem,

          @UI.hidden: true
          @AnalyticsDetails.query.hidden: true
          ConsolidationDimension,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          CreationDateTime,

          //***************************************************************
          // Units and Currencies
          //***************************************************************
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          TransactionCurrency,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          LocalCurrency,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          GroupCurrency,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          BaseUnit,

          //Industry-specific fields  Financial services: Banking Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialServicesProductGroup,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialServicesBranch,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialDataSource,

          // industry-specific fields  Financial services: Green House Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGCategory,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope2CalculationMethod,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope2ContractualInstrument,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGDataQualityCharacteristic,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergyClassification,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergyMix,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergySourcingType,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          SustainabilityModeOfTransport,

          // industry-specific fields  Financial services: Public Sector Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialManagementArea,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          Fund,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GrantID,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          CnsldtnCashLedgerChartOfAccts,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          CashLedgerAccount,

          CnsldtnGroupJrnlEntryItem,

          CnsldtnGroupJrnlEntry,

          @Consumption.hidden: true
          PeriodMode,

          @AnalyticsDetails.query.axis: #COLUMNS
          //          @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #LAST, exceptionAggregationElements: ['FiscalYearPeriod'] }]
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(CnsldtnIntSignAmtInTransCrcy)                                                                                                                               as CnsldtnIntSignAmtInTransCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          //          @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #LAST, exceptionAggregationElements: ['FiscalYearPeriod'] }]
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'GroupCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(CnsldtnIntSignAmtInGroupCrcy)                                                                                                                               as CnsldtnIntSignAmtInGroupCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          //          @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #LAST, exceptionAggregationElements: ['FiscalYearPeriod'] }]
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(CnsldtnIntSignAmtInLocalCrcy)                                                                                                                               as CnsldtnIntSignAmtInLocalCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          //          @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #LAST, exceptionAggregationElements: ['FiscalYearPeriod'] }]
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          @Consumption.hidden: true
          CnsldtnIntSignQtyInBaseUnit                                                                                                                                                         as CnsldtnIntSignQtyInBaseUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationQuestion,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationPredefinedAnswer,
          
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @EndUserText.label: 'Free Text Answer'
          ConsolidationFreeTextAnswer,

          _DocumentStore
}
where
       ConsolidationDimension =  'Y1'
  and  GLRecordType           <> 'R'
  and(
       ConsolidationVersion   = $parameters.P_ConsolidationVersion
    or ConsolidationVersion   = $parameters.P_ConsolidationBudgetVersion
    or ConsolidationVersion   = $parameters.P_CnsldtnCnstntCrcyVersion
  )
  and  PeriodMode             =  'PER'
  and(
       FiscalYear             = $parameters.P_FiscalYear
    or FiscalYear             = $parameters.P_PreviousFiscalYear
  )
```
