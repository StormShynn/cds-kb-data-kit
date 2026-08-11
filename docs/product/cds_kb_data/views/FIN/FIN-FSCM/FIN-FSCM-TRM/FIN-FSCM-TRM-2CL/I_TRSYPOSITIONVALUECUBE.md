---
name: I_TRSYPOSITIONVALUECUBE
description: "You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value
semantic_en: "You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?"
semantic_vi: "Treasury Position Values - Cube — CDS view giao diện dựa trên I_TrsyPosValuesCompatible."
keywords:
  - "treasury"
  - "position"
  - "values"
  - "cube"
  - "valuation"
  - "area"
  - "class"
  - "company"
  - "code"
  - "security"
  - "account"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - product
  - bo:purchaseorder
---
# I_TRSYPOSITIONVALUECUBE

**You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryValuationArea` |  | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `TreasuryValuationClass` |  | |  |  | `NUMC(4)` | Valuation Class |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `LoanContract` |  | |  |  | `CHAR(13)` | Loan Contract Number |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryGLAccountAssignmentRef` |  | |  |  | `CHAR(12)` | Account Assignment Reference of Position Management |
| `TreasuryPositionLot` |  | |  |  | `RAW(16)` | Identifier of the Lot |
| `CentralClearingAccount` |  | |  |  | `CHAR(10)` | Central Clearing Account |
| `CentralClearingAccountCurrency` |  | |  |  | `CUKY(5)` | Central Clearing Account Currency |
| `TrsyPosManagementProcedure` |  | |  |  | `CHAR(4)` | Position Management Procedure |
| `TreasuryPosition` |  | |  |  | `CHAR(32)` | Treasury Position UUID |
| `FinancialExposureItem` |  | |  |  | `CHAR(13)` | Exposure Item ID |
| `FinancialExposureSubItem` |  | |  |  | `CHAR(13)` | Exposure Subitem ID |
| `FinancialInstrValuationClass` |  | |  |  | `NUMC(4)` | General Valuation Class |
| `SecurityAccountGroup` |  | |  |  | `CHAR(10)` | Securities Account Group |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `TrsyPosCustomDiffntnTerm1` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 1 (Value) |
| `TrsyPosCustomDiffntnTerm2` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 2 (Value) |
| `TrsyPosCustomDiffntnTerm3` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 3 (Value) |
| `TrsyPosCustomDiffntnTerm4` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 4 (Value) |
| `TrsyPosCustomDiffntnTerm5` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 5 (Value) |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CommitmentBusinessPartner` |  | |  |  | `CHAR(10)` | Partner with Whom Commitment Exists |
| `TreasuryPositionLedgerDate` |  | |  |  | `DATS(8)` | Treasury Ledger Date |
| `TreasuryBusinessTransCategory` |  | |  |  | `NUMC(4)` | Business Transaction Category |
| `TreasuryUpdateType` |  | |  |  | `CHAR(8)` | Update Type |
| `TreasuryPosAssetLiabilityCode` |  | |  |  | `CHAR(1)` | Asset/Liability Position |
| `TreasuryAccountingCode` |  | |  |  | `CHAR(4)` | Accounting Code |
| `IsFreestanding` |  | |  | `case when I_Ftr_Position_Values._TreasurySubPosition.IsFreestanding is null then 'X' else ' ' end` | `CHAR(1)` |  |
| `DesignatedNominalCurrency` |  | |  | `case when I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency is null then NominalCurrency else I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency end` | `CUKY(5)` |  |
| `DesignatedQuantityInPieces` |  | |  | `cast(I_Ftr_Position_Values.DesignatedQuantityInPieces as ftr_gen_des_quant_in_units_l)` | `DEC(30)` | Designated Quantity in Pieces |
| `DesignatedAmountInNominalCrcy` |  | |  |  | `CURR(21)` | Designated Nominal Amount |
| `DesignatedOrigAmtInNominalCrcy` |  | |  |  | `CURR(21)` | Designated Original Nominal Amount |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Position Currency |
| `ValuationCurrency` |  | |  |  | `CUKY(5)` | Valuation Currency |
| `NominalCurrency` |  | |  |  | `CUKY(5)` | Nominal Currency |
| `TrsyHedgingRelshpRiskCurrency` |  | |  | `cast( case when I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency is null then I_Ftr_Position_Values.NominalCurrency else I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency end as ftr_gen_hrel_risk_currency preserving type)` | `CUKY(5)` | Risk Currency of Hedging Relationship |
| `BookValueAmountInValnCurrency` |  | |  |  | `CURR(21)` | Book Value in Valuation Currency |
| `BookValueAmtInPositionCurrency` |  | |  |  | `CURR(21)` | Book Value in Position Currency |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(21)` | Nominal Amount |
| `OriglNominalAmtInNominalCrcy` |  | |  |  | `CURR(21)` | Original Nominal Amount |
| `PurchaseValueInValuationCrcy` |  | |  |  | `CURR(21)` | Purchase Value in Valuation Currency |
| `PurchaseValueInPositionCrcy` |  | |  |  | `CURR(21)` | Purchase Value in Position Currency |
| `OCIScrtyValnAmountInValnCrcy` |  | |  |  | `CURR(21)` | Security Valuation, Not Affecting P/L, in Valuation Currency |
| `OCISecurityValnAmountInPosCrcy` |  | |  |  | `CURR(21)` | Security Valuation, Not Affecting P/L, in Position Currency |
| `IdxClnOCIScrtyValnAmtInPosCrcy` |  | |  |  | `CURR(21)` | Security Valuation, Not Affecting P/L, Index-Clean, in PC |
| `ForeignCrcyValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Foreign Currency Valuation in Valuation Currency |
| `CostExcldBookValAmtInValnCrcy` |  | |  |  | `CURR(21)` | Book Value Excluding Costs in Valuation Currency |
| `CostInPositionCurrency` |  | |  |  | `CURR(21)` | Costs in Position Currency |
| `SecurityCostValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, Security, in Valuation Currency |
| `SecurityCostValnAmtInPosCrcy` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, Security, in Position Currency |
| `FrgnExchCostValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Valuation of Capitalized Costs, FX, in Valuation Currency |
| `AmortizationAmtInValuationCrcy` |  | |  |  | `CURR(21)` | Amortization in Valuation Currency |
| `AmortizationAmtInPositionCrcy` |  | |  |  | `CURR(21)` | Amortization in Position Currency |
| `ClrdPremDiscDefrlAmtInValnCrcy` |  | |  |  | `CURR(21)` | Cleared PD Deferral/Tax Compensation in Valuation Currency |
| `ClrdPremDiscDefrlTxCompnAmount` |  | |  |  | `CURR(21)` | Cleared PD Deferral/Tax Compensation in Position Currency |
| `IndexValuationAmountInValnCrcy` |  | |  |  | `CURR(21)` | Index Valuation in Valuation Currency |
| `IndexValuationAmountInPosCrcy` |  | |  |  | `CURR(21)` | Index Valuation in Position Currency |
| `FXValnAmtzdAcqnAmtInValnCrcy` |  | |  |  | `CURR(21)` | FX Valuation of Amort. Acquisition Value in Valuation Crcy |
| `VariationMarginAmtInValnCrcy` |  | |  |  | `CURR(21)` | Variation Margin in Valuation Currency |
| `VariationMarginAmountInPosCrcy` |  | |  |  | `CURR(21)` | Variation Margin in Position Currency |
| `OCIFrgnExchValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Foreign Currency Valuation, Not Affecting P/L, in Val. Crcy |
| `OCIIndexValnAmountInValnCrcy` |  | |  |  | `CURR(21)` | Index Valuation, Not Affecting P/L, in Valuation Currency |
| `OCIIndexValnAmountInPosCrcy` |  | |  |  | `CURR(21)` | Index Valuation, Not Affecting P/L, in Position Currency |
| `OCIScrtyCostValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, Sec., Not Aff. P/L in Val. Crcy |
| `OCIScrtyCostValnAmtInPosCrcy` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, Sec., Not Aff. P/L in Position Crcy |
| `OCICostFXValnAmountInValnCrcy` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, FX, Not Aff. P/L in Valuation Crcy |
| `AccruedInterestInValuationCrcy` |  | |  |  | `CURR(21)` | Accrued Interest (Position Component) in Valuation Currency |
| `AccruedInterestInPositionCrcy` |  | |  |  | `CURR(21)` | Accrued Interest (Position Component) in Position Currency |
| `CostExcldBookValueAmtInPosCrcy` |  | |  |  | `CURR(21)` | Book Value Excluding Costs in Position Currency |
| `AcquisitionAmountInValnCrcy` |  | |  |  | `CURR(21)` | Acquisition Value in Valuation Currency |
| `AcquisitionAmtInPositionCrcy` |  | |  |  | `CURR(21)` | Acquisition Value in Position Currency |
| `AmortizedAcqnAmountInValnCrcy` |  | |  |  | `CURR(21)` | Amortized Acquisition Value in Valuation Currency |
| `AmortizedAcqnAmountInPosCrcy` |  | |  |  | `CURR(21)` | Amortized Acquisition Value in Position Currency |
| `QuantityInPieces` |  | |  | `cast(I_Ftr_Position_Values.QuantityInPieces as ftr_gen_quantity_in_units_l)` | `DEC(30)` | Quantity in Pieces |
| `SecurityValuationAmtInValnCrcy` |  | |  |  | `CURR(21)` | Security Valuation in Valuation Currency |
| `SecurityValuationAmtInPosCrcy` |  | |  |  | `CURR(21)` | Security Valuation in Position Currency |
| `ClearingAmountInPositionCrcy` |  | |  |  | `CURR(21)` | Clearing Component in Position Currency |
| `ClearingAmountInValuationCrcy` |  | |  |  | `CURR(21)` | Clearing Component in Valuation Currency |
| `CostInValuationCurrency` |  | |  |  | `CURR(21)` | Costs in Valuation Currency |
| `PurValDeferralItmAmtInPosCrcy` |  | |  |  | `CURR(21)` | Deferral Item for Purchase Value in Position Currency |
| `PurValDeferralItmAmtInValnCrcy` |  | |  |  | `CURR(21)` | Deferral Item for Purchase Value in Valuation Currency |
| `NegttnSpreadAmtznAmtInPosCrcy` |  | |  |  | `CURR(21)` | Amortized Negotiation Spread in Position Currency |
| `NegttnSpreadAmtznAmtInValnCrcy` |  | |  |  | `CURR(21)` | Amortized Negotiation Spread in Valuation Currency |
| `CumltvRepaymentAmountInPosCrcy` |  | |  |  | `CURR(21)` | Cumulative Repayment in Position Currency |
| `CumltvRepaymentAmtInValnCrcy` |  | |  |  | `CURR(21)` | Cumulative Repayment in Valuation Currency |
| `PurCrcySpotValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Spot Valuation of Purchase Currency in Valuation Currency |
| `SaleCrcySpotValnAmtInValnCrcy` |  | |  |  | `CURR(21)` | Spot Valuation of Sale Currency in Valuation Currency |
| `SwapAccrualAmountInPosCurrency` |  | |  |  | `CURR(21)` | Swap/Margin Accrual/Deferral in Position Currency |
| `SwapAccrualAmountInValnCrcy` |  | |  |  | `CURR(21)` | Swap or Margin Accrual/Deferral in Valuation Currency |
| `SwapValuationAmountInValnCrcy` |  | |  |  | `CURR(21)` | Swap Valuation in Valuation Currency |
| `ImpairmentAmountInPositionCrcy` |  | |  |  | `CURR(21)` | Impairment in Position Currency |
| `ImpairmentAmtInValuationCrcy` |  | |  |  | `CURR(21)` | Impairment in Valuation Currency |
| `HedgeAmortizationAmtInPosCrcy` |  | |  |  | `CURR(21)` | Hedge Amortization in Position Currency |
| `HedgeAmortizationAmtInValnCrcy` |  | |  |  | `CURR(21)` | Hedge Amortization in Valuation Currency |
| `FrgnExchValnDiffAmtInValnCrcy` |  | |  |  | `CURR(21)` | Foreign Currency Valuation Differences |
| `GainValueAdjmtAmountInPosCrcy` |  | |  |  | `CURR(21)` | Value Adjustment of Gains in Position Currency |
| `GainValueAdjmtAmountInValnCrcy` |  | |  |  | `CURR(21)` | Value Adjustment of Gains in Valuation Currency |
| `LossValueAdjmtAmountInPosCrcy` |  | |  |  | `CURR(21)` | Value Adjustment of Losses in Position Currency |
| `LossValueAdjmtAmountInValnCrcy` |  | |  |  | `CURR(21)` | Value Adjustment of Losses in Valuation Currency |
| `OriginalValueAdjmtAmtInPosCrcy` |  | |  |  | `CURR(21)` | Original Value Adjustment in Position Currency |
| `OriginalValAdjmtAmtInValnCrcy` |  | |  |  | `CURR(21)` | Original Value Adjustment in Valuation Currency |
| `CapitalizationRsrvInPosCrcy` |  | |  |  | `CURR(21)` | Capitalization Reserve in Position Currency |
| `CapitalizationRsrvInValnCrcy` |  | |  |  | `CURR(21)` | Capitalization Reserve in Valuation Currency |
| `ForeignExchImprmtAmtInValnCrcy` |  | |  |  | `CURR(21)` | FX Impairment in Valuation Currency |
| `CnsldtdScrtyGainAmtInPosCrcy` |  | |  |  | `CURR(21)` | Consolidated Security Gains in Position Currency |
| `CnsldtdScrtyGainAmtInValnCrcy` |  | |  |  | `CURR(21)` | Consolidated Security Gains in Valuation Currency |
| `CnsldtdScrtyLossAmtInPosCrcy` |  | |  |  | `CURR(21)` | Consolidated Security Losses in Position Currency |
| `CnsldtdScrtyLossAmtInValnCrcy` |  | |  |  | `CURR(21)` | Consolidated Security Losses in Valuation Currency |
| `CnsldtdForExGainAmtInValnCrcy` |  | |  |  | `CURR(21)` | Consolidated FX Gains in Valuation Currency |
| `CnsldtdForExLossAmtInValnCrcy` |  | |  |  | `CURR(21)` | Consolidated FX Losses in Valuation Currency |
| `InterestIncomeInPositionCrcy` |  | |  |  | `CURR(21)` | Interest Income in Position Currency |
| `InterestIncomeInValuationCrcy` |  | |  |  | `CURR(21)` | Interest Income in Valuation Currency |
| `SecurityWriteUpAmountInPosCrcy` |  | |  |  | `CURR(21)` | Security Write-Up in Position Currency |
| `SecurityWriteDownAmtInPosCrcy` |  | |  |  | `CURR(21)` | Security Write-Down in Position Currency |
| `SecurityWriteUpAmtInValnCrcy` |  | |  |  | `CURR(21)` | Security Write-Up in Valuation Currency |
| `ScrtyWriteDownAmtInValnCrcy` |  | |  |  | `CURR(21)` | Security Write-Down in Valuation Currency |
| `FrgnExchWriteUpAmtInValnCrcy` |  | |  |  | `CURR(21)` | Forex Write-Up in Valuation Currency |
| `FrgnExchWriteDownAmtInValnCrcy` |  | |  |  | `CURR(21)` | Forex Write-Down in Valuation Currency |
| `ScrtyCostWriteUpAmtInPosCrcy` |  | |  |  | `CURR(21)` | Write-Up of Capitalized Costs, Security Val. in Pos.Crcy |
| `ScrtyCostWriteDownAmtInPosCrcy` |  | |  |  | `CURR(21)` | Write-Down of Capitalized Costs, Security Valn in Pos. Crcy |
| `ScrtyCostWriteUpAmtInValnCrcy` |  | |  |  | `CURR(21)` | Write-Up of Capitalized Costs, Security Val. in Val.Crcy |
| `ScrtyCostWrtDownAmtInValnCrcy` |  | |  |  | `CURR(21)` | Write-Down of Capitalized Costs, Security Valn in Val.Crcy |
| `FrgnExchCostWrtUpAmtInValnCrcy` |  | |  |  | `CURR(21)` | Write-Up of Capitalized Costs, FX Valuation in Val.Crcy |
| `FXCostWriteDownAmtInValnCrcy` |  | |  |  | `CURR(21)` | Write-Down of Capitalized Costs, FX Valuation in Val.Crcy |
| `IndexWriteUpAmountInPosCrcy` |  | |  |  | `CURR(21)` | Index Write-Up in Position Currency |
| `IndexWriteDownAmountInPosCrcy` |  | |  |  | `CURR(21)` | Index Write-Down in Position Currency |
| `IndexWriteUpAmountInValnCrcy` |  | |  |  | `CURR(21)` | Index Write-Up in Valuation Currency |
| `IndexWriteDownAmtInValnCrcy` |  | |  |  | `CURR(21)` | Index Write-Down in Valuation Currency |
| `IndexCleanClearingAmtInPosCrcy` |  | |  |  | `CURR(21)` | Clearing Component, Index Clean, in Position Crcy |
| `IndexCleanPurchaseValInPosCrcy` |  | |  |  | `CURR(21)` | Purchase Value, Index-Clean, in Position Currency |
| `IdxCleanScrtyValnAmtInPosCrcy` |  | |  |  | `CURR(21)` | Security Valuation, Index-Clean, in Position Currency |
| `IndexCleanCostInPositionCrcy` |  | |  |  | `CURR(21)` | Costs, Index-Clean, in Position Currency |
| `IndexClnScrtyCostValuationAmt` |  | |  |  | `CURR(21)` | Valuation of Cap. Costs, Security, Index-Clean, in Pos. Crcy |
| `IndexCleanAmtznAmountInPosCrcy` |  | |  |  | `CURR(21)` | Amortization, Index-Clean, in Position Currency |
| `IdxClnClrdPremDiscDeferralAmt` |  | |  |  | `CURR(21)` | Cleared PD Deferral/Tax Compensation in PC: Index-Clean |
| `IdxClnPurValDefrlAmtInPosCrcy` |  | |  |  | `CURR(21)` | Deferral Item for Purchase Value, Index-Clean, in Pos.Crcy |
| `IdxClnOCIScrtyCostValuationAmt` |  | |  |  | `CURR(21)` | Val.of Cap.Costs, SE, Not Aff.P/L, Index-Clean, in Pos.Crcy |
| `IndexCleanNegttnAmtznInPosCrcy` |  | |  |  | `CURR(21)` | Amort. Negotiation Spread, Index-Clean, in Position Currency |
| `IndexCleanRpaytAmtInPosCrcy` |  | |  |  | `CURR(21)` | Cumulative Repayment, Index-Clean, in Position Currency |
| `IndexCleanInterestIncInPosCrcy` |  | |  |  | `CURR(21)` | Interest Income, Index-Clean, in Position Currency |
| `IdxCleanHedgeAmtznAmtInPosCrcy` |  | |  |  | `CURR(21)` | Hedge Amortization, Index-Clean, in Position Currency |
| `IndexCleanImprmtAmtInPosCrcy` |  | |  |  | `CURR(21)` | Impairment, Index-Clean, in Position Currency |
| `IndexClnBookValueAmtInPosCrcy` |  | |  |  | `CURR(21)` | Book Value, Index-Clean, in Position Currency |
| `IdxClnCostExcldBookValueAmount` |  | |  |  | `CURR(21)` | Book Value Excluding Costs, Index-Clean, in Position Crcy |
| `IndexCleanAcqnAmountInPosCrcy` |  | |  |  | `CURR(21)` | Acquisition Value, Index-Clean, in Position Currency |
| `IdxCleanAmtzdAcqnAmtInPosCrcy` |  | |  |  | `CURR(21)` | Amortized Acquisition Value, Index-Clean, in Position Crcy |
| `EffctvAmtInValnCrcy` |  | |  |  | `CURR(21)` | Effective Amount in Valuation Currency |
| `EffctvAmtInPosCrcy` |  | |  |  | `CURR(21)` | Effective Amount in Position Currency |
| `IneffctvAmtInPosCrcy` |  | |  |  | `CURR(21)` | Ineffective Amount in Position Currency |
| `IneffctvAmtInValnCrcy` |  | |  |  | `CURR(21)` | Ineffective Amount in Valuation Currency |
| `EffctvCostHdggRsrvInPosCrcy` |  | |  |  | `CURR(21)` | Effective/Cost of Hedging Reserve in Position Currency |
| `EffctvCostHdggRsrvInValnCrcy` |  | |  |  | `CURR(21)` | Effective/Cost of Hedging Reserve in Valuation Currency |
| `IneffctvHdggRsrvPnLInPosCrcy` |  | |  |  | `CURR(21)` | Ineffective/Hedging Rsrv Through Profit & Loss in Pos Crcy |
| `IneffctvHdggRsrvPnLInValnCrcy` |  | |  |  | `CURR(21)` | Ineffective/Hedging Rsrv Through Profit & Loss in Vln Crcy |
| `EffctvHdggRsrvPnLInPosCrcy` |  | |  |  | `CURR(21)` | Effective/Hedging Rsrv Through Profit & Loss in Pos. Crcy |
| `IneffctvCostHdgRsrvPnLPosCrcy` |  | |  |  | `CURR(21)` | Ineffective/Cost of Hdg Rsrv Through Profit & Loss in PC |
| `IneffctvCostHdgRsrvPnLValnCrcy` |  | |  |  | `CURR(21)` | Ineffective/Cost of Hdg Rsrv Through Profit & Loss in VC |
| `EffctvCostHdgRsrvPnLInPosCrcy` |  | |  |  | `CURR(21)` | Effective/Cost of Hdg Rsrv Thr. Profit & Loss in Pos. Crcy |
| `EffctvCostHdgRsrvPnLInValnCrcy` |  | |  |  | `CURR(21)` | Effective/Cost of Hdg Rsrv Thr. Profit & Loss in Vln Crcy |
| `LossAllowanceAmountInPosCrcy` |  | |  |  | `CURR(21)` | Loss Allowance in Position Currency |
| `LossAllowanceAmountInValnCrcy` |  | |  |  | `CURR(21)` | Loss Allowance in Valuation Currency |
| `FXLossAllowanceAmtInValnCrcy` |  | |  |  | `CURR(21)` | Loss Allowance FX in Valuation Currency |
| `OffstLossAllowanceAmtInPosCrcy` |  | |  |  | `CURR(21)` | Offset Loss Allowance in Position Currency |
| `OffsetLossAllwncAmtInValnCrcy` |  | |  |  | `CURR(21)` | Offset Loss Allowance in Valuation Currency |
| `OCIOffstLossAllwncAmtInPosCrcy` |  | |  |  | `CURR(21)` | OCI Offset Loss Allowance in Position Currency |
| `FXOffstLossAllwncAmtInValnCrcy` |  | |  |  | `CURR(21)` | Offset Loss Allowance FX in Valuation Currency |
| `FXOffstOCILossAllwncInValnCrcy` |  | |  |  | `CURR(21)` | OCI Offset Loss Allowance FX in Valuation Currency |
| `AmtznAdjmtLossAllwncInPosCrcy` |  | |  |  | `CURR(21)` | Amortization Adjustm. of Loss Allowance in Position Currency |
| `AmtznAdjmtLossAllwncInValnCrcy` |  | |  |  | `CURR(21)` | Amortization Adj. of Loss Allowance in Valuation Currency |
| `ContractChangeAmtInPosCrcy` |  | |  |  | `CURR(21)` | Contractual Change in Position Currency |
| `ContractChangeAmtInValnCrcy` |  | |  |  | `CURR(21)` | Contractual Change in Valuation Currency |
| `FrgnExchContrChgAmtInValnCrcy` |  | |  |  | `CURR(21)` | Contractual Change FX in Valuation Currency |
| `AmortizedCostInPositionCrcy` |  | |  |  | `CURR(21)` | OBSOLETE: Amortized Cost in Position Currency |
| `AmortizedCostInValuationCrcy` |  | |  |  | `CURR(21)` | OBSOLETE: Amortized Cost in Valuation Currency |
| `PnLDesignatedAmtInPosCrcy` |  | |  |  | `CURR(21)` | Profit/Loss Effective / Designated Comp. in Position Crcy |
| `PnLDesignatedAmtInVC` |  | |  |  | `CURR(21)` | Profit/Loss Effective / Designated Comp. in Valuation Crcy |
| `PnLNonDesignatedAmtInPosCrcy` |  | |  |  | `CURR(21)` | Profit/Loss Effective / Non-Designated Component in PC |
| `PnLNonDesignatedAmtInVC` |  | |  |  | `CURR(21)` | Profit/Loss Effective / Non-Designated Component in VC |
| `AmtznNonDesignatedAmtInPosCrcy` |  | |  |  | `CURR(21)` | Amortization / Non-Designated Component in Position Currency |
| `AmtznNonDesignatedAmtInVC` |  | |  |  | `CURR(21)` | Amortization / Non-Designated Comp. in Valuation Currency |
| `_TreasuryValuationArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CentralClearingAccount` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_ValuationCurrency` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_TreasuryValuationClass` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_TreasuryGLAccountAssignRef` | | ✓ | | | | |
| `_TreasuryPositionAccount` | | ✓ | | | | |
| `_TrsyPosManagementProcedure` | | ✓ | | | | |
| `_CommitmentBusinessPartner` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CentralClearingAccount` | `I_CentralClearingAccount` | [0..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |
| `_ProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_ValuationCurrency` | `I_Currency` | [0..1] |
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_TreasuryValuationClass` | `I_TreasuryValuationClass` | [0..1] |
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_TreasuryGLAccountAssignRef` | `I_TreasuryGLAccountAssignRef` | [0..1] |
| `_TreasuryPositionAccount` | `I_TreasuryPositionAccount` | [0..1] |
| `_TrsyPosManagementProcedure` | `I_TrsyPosManagementProcedure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #CUBE
@Analytics.technicalName: 'ITRSYPOSVALCUBE'
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Treasury Position Values - Cube'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #COMPOSITE
--@OData.publish: true --> not needed for auth maintainance in case of cube

define view entity I_TrsyPositionValueCube

  as select from I_TrsyPosValuesCompatible as I_Ftr_Position_Values 
  association [0..1] to I_TreasuryValuationArea      as _TreasuryValuationArea      on  $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  // cardinality of CentralClearingAccount should be fine
  association [0..1] to I_CentralClearingAccount     as _CentralClearingAccount     on  $projection.CompanyCode            = _CentralClearingAccount.CompanyCode
                                                                                    and $projection.CentralClearingAccount = _CentralClearingAccount.CentralClearingAccount

  association [0..1] to I_SecurityAccount            as _SecurityAccount            on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                                    and $projection.CompanyCode     = _SecurityAccount.CompanyCode
  association [0..1] to I_FinancialinstrProductType  as _ProductType                on  $projection.FinancialInstrumentProductType = _ProductType.FinancialInstrumentProductType
  association [0..1] to I_Currency                   as _PositionCurrency           on  $projection.PositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency                   as _ValuationCurrency          on  $projection.ValuationCurrency = _ValuationCurrency.Currency
  association [0..1] to I_SecurityClass              as _SecurityClass              on  $projection.SecurityClass = _SecurityClass.SecurityClass
  association [0..1] to I_TreasuryValuationClass     as _TreasuryValuationClass     on  $projection.TreasuryValuationClass = _TreasuryValuationClass.TreasuryValuationClass
                                                                                    and $projection.TreasuryValuationArea  = _TreasuryValuationClass.TreasuryValuationArea
  // do not expose LoanContract (not C1 released)
  //  association [0..1]  to I_LoanContract                as _LoanContract               on  $projection.LoanContract = _LoanContract.LoanContract
  //                                                                                  and $projection.CompanyCode  = _LoanContract.CompanyCode
  association [0..1] to I_FinancialTransaction       as _FinancialTransaction       on  $projection.FinancialTransaction = _FinancialTransaction.FinancialTransaction
                                                                                    and $projection.CompanyCode          = _FinancialTransaction.CompanyCode
  // we do not want to join FinancialTransaction for the on-condition to get FinancialInstrTransactionType
  //  association [0..1]  to I_FinancialInstrTransType     as _TransactionType            on  $projection.FinancialInstrumentProductType = _TransactionType.FinancialInstrumentProductType
  //                                                                                  and $projection.FinancialInstrTransactionType = _TransactionType.FinancialInstrTransactionType
  // not C1-released / customized labels in OnPrem-context are currently not considered (feature "dynamic column headers" presented by Joerg Franke might be worth to consider)
  //  association [0..1]  to I_TrltPosattrib               as _TrltPosattrib              on  $projection.TreasuryPosition = _TrltPosattrib.TreasuryPosition
  association [0..1] to I_TreasuryGLAccountAssignRef as _TreasuryGLAccountAssignRef on  $projection.TreasuryGLAccountAssignmentRef = _TreasuryGLAccountAssignRef.TreasuryGLAccountAssignmentRef
  //$projection.treasuryglaccountassignmentref =  _TreasuryGLAccountAssignRef.TreasuryGLAccountAssignmentRef
  // we do not want to join FinancialTransaction for the on-condition to get BusinessArea
  //  association [0..1]  to I_BusinessArea                as _BusinessArea               on $projection.businessarea = _BusinessArea.BusinessArea
  association [0..1] to I_TreasuryPositionAccount    as _TreasuryPositionAccount    on  $projection.TreasuryPositionAccount = _TreasuryPositionAccount.TreasuryPositionAccount
                                                                                    and $projection.CompanyCode             = _TreasuryPositionAccount.CompanyCode


  association [0..1] to I_TrsyPosManagementProcedure as _TrsyPosManagementProcedure on  $projection.TrsyPosManagementProcedure = _TrsyPosManagementProcedure.TrsyPosManagementProcedure

{
  @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
  I_Ftr_Position_Values.TreasuryValuationArea,
  @ObjectModel.foreignKey.association: '_TreasuryValuationClass'
  I_Ftr_Position_Values.TreasuryValuationClass,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  I_Ftr_Position_Values.CompanyCode,
  @ObjectModel.foreignKey.association: '_SecurityAccount'
  I_Ftr_Position_Values.SecurityAccount,
  @ObjectModel.foreignKey.association: '_SecurityClass'
  I_Ftr_Position_Values.SecurityClass,
  //@ObjectModel.foreignKey.association: '_LoanContract'
  I_Ftr_Position_Values.LoanContract,
  I_Ftr_Position_Values.TreasuryPositionLongShortCode,
  @ObjectModel.foreignKey.association: '_FinancialTransaction'
  I_Ftr_Position_Values.FinancialTransaction,
  @ObjectModel.foreignKey.association: '_ProductType'
  I_Ftr_Position_Values.FinancialInstrumentProductType,
  @ObjectModel.foreignKey.association: '_TreasuryPositionAccount'
  I_Ftr_Position_Values.TreasuryPositionAccount,
  --  I_Ftr_Position_Values.FinInstrProductGroup,

  // Obsolete: DO NO USE I_Ftr_Position_Values.TreasuryPositionAccount but use association _TrsyLdgrGLAcctAssgmtRef.TreasuryGLAccountAssignmentRef
  @ObjectModel.foreignKey.association: '_TreasuryGLAccountAssignRef'
  I_Ftr_Position_Values.TreasuryGLAccountAssignmentRef,
  I_Ftr_Position_Values.TreasuryPositionLot,
  //  @ObjectModel.foreignKey.association: '_CentralClearingAccount'  //does not work, null object gets thrown
  I_Ftr_Position_Values.CentralClearingAccount,
  I_Ftr_Position_Values.CentralClearingAccountCurrency,
  @ObjectModel.foreignKey.association: '_TrsyPosManagementProcedure'
  I_Ftr_Position_Values.TrsyPosManagementProcedure,
  I_Ftr_Position_Values.TreasuryPosition,

  I_Ftr_Position_Values.FinancialExposureItem,
  I_Ftr_Position_Values.FinancialExposureSubItem,


  // potentially missing semantical key fields from POS_IDENT:
  I_Ftr_Position_Values.FinancialInstrValuationClass,
  // see comment at corresponding association
  //@ObjectModel.foreignKey.association: '_DifferentiationPortfolio'
  //I_Ftr_Position_Values.DifferentiationPortfolio,
  //TRADER --> skip for DPP reasons
  I_Ftr_Position_Values.SecurityAccountGroup,
  I_Ftr_Position_Values.Fund,
  I_Ftr_Position_Values.GrantID,
  I_Ftr_Position_Values.WBSElementInternalID,
  I_Ftr_Position_Values.ProfitCenter,
  I_Ftr_Position_Values.CostCenter,
  I_Ftr_Position_Values.FunctionalArea,
  I_Ftr_Position_Values.TrsyPosCustomDiffntnTerm1,
  I_Ftr_Position_Values.TrsyPosCustomDiffntnTerm2,
  I_Ftr_Position_Values.TrsyPosCustomDiffntnTerm3,
  I_Ftr_Position_Values.TrsyPosCustomDiffntnTerm4,
  I_Ftr_Position_Values.TrsyPosCustomDiffntnTerm5,

  @ObjectModel.foreignKey.association: '_Portfolio'
  I_Ftr_Position_Values.Portfolio,
  @ObjectModel.foreignKey.association: '_CommitmentBusinessPartner'
  I_Ftr_Position_Values.CommitmentBusinessPartner,

  //  @ObjectModel.foreignKey.association: '_BusinessArea'
  //  _FinancialTransaction.BusinessArea,

  I_Ftr_Position_Values.TreasuryPositionLedgerDate,
  I_Ftr_Position_Values.TreasuryBusinessTransCategory,
  I_Ftr_Position_Values.TreasuryUpdateType,
  //  @ObjectModel.foreignKey.association: '_TransactionType'
  //  _FinancialTransaction.FinancialInstrTransactionType,
  I_Ftr_Position_Values.TreasuryPosAssetLiabilityCode,

  I_Ftr_Position_Values.TreasuryAccountingCode,
  case when I_Ftr_Position_Values._TreasurySubPosition.IsFreestanding is null then 'X' else ' ' end                                                                                                                                              as IsFreestanding,

  case when I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency is null then NominalCurrency else I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency end                                                                            as DesignatedNominalCurrency,

  @DefaultAggregation: #SUM
  cast(I_Ftr_Position_Values.DesignatedQuantityInPieces as ftr_gen_des_quant_in_units_l)                                                                                                                                   as DesignatedQuantityInPieces,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DesignatedNominalCurrency'
  I_Ftr_Position_Values.DesignatedAmountInNominalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DesignatedNominalCurrency'
  I_Ftr_Position_Values.DesignatedOrigAmtInNominalCrcy,

  I_Ftr_Position_Values.PositionCurrency,
  I_Ftr_Position_Values.ValuationCurrency,
  I_Ftr_Position_Values.NominalCurrency,

  cast( case when I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency is null then I_Ftr_Position_Values.NominalCurrency else I_Ftr_Position_Values._TreasurySubPosition.DesignatedNominalCurrency end as ftr_gen_hrel_risk_currency preserving type) as TrsyHedgingRelshpRiskCurrency,

  //Key Figures
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.BookValueAmountInValnCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.BookValueAmtInPositionCurrency,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'NominalCurrency'
  I_Ftr_Position_Values.NominalAmountInNominalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'NominalCurrency'
  I_Ftr_Position_Values.OriglNominalAmtInNominalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.PurchaseValueInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.PurchaseValueInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OCIScrtyValnAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OCISecurityValnAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxClnOCIScrtyValnAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ForeignCrcyValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CostExcldBookValAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CostInPositionCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SecurityCostValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.SecurityCostValnAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchCostValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AmortizationAmtInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AmortizationAmtInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ClrdPremDiscDefrlAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ClrdPremDiscDefrlTxCompnAmount,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IndexValuationAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexValuationAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FXValnAmtzdAcqnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.VariationMarginAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.VariationMarginAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OCIFrgnExchValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OCIIndexValnAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OCIIndexValnAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OCIScrtyCostValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OCIScrtyCostValnAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OCICostFXValnAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AccruedInterestInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AccruedInterestInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CostExcldBookValueAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AcquisitionAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AcquisitionAmtInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AmortizedAcqnAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AmortizedAcqnAmountInPosCrcy,
  @DefaultAggregation: #SUM
  cast(I_Ftr_Position_Values.QuantityInPieces as ftr_gen_quantity_in_units_l)                                                                                                                                              as QuantityInPieces,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SecurityValuationAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.SecurityValuationAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ClearingAmountInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ClearingAmountInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CostInValuationCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.PurValDeferralItmAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.PurValDeferralItmAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.NegttnSpreadAmtznAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.NegttnSpreadAmtznAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CumltvRepaymentAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CumltvRepaymentAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.PurCrcySpotValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SaleCrcySpotValnAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.SwapAccrualAmountInPosCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SwapAccrualAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SwapValuationAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ImpairmentAmountInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ImpairmentAmtInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.HedgeAmortizationAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.HedgeAmortizationAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchValnDiffAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.GainValueAdjmtAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.GainValueAdjmtAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.LossValueAdjmtAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.LossValueAdjmtAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OriginalValueAdjmtAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OriginalValAdjmtAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CapitalizationRsrvInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CapitalizationRsrvInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ForeignExchImprmtAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CnsldtdScrtyGainAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CnsldtdScrtyGainAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.CnsldtdScrtyLossAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CnsldtdScrtyLossAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CnsldtdForExGainAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.CnsldtdForExLossAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.InterestIncomeInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.InterestIncomeInValuationCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.SecurityWriteUpAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.SecurityWriteDownAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.SecurityWriteUpAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ScrtyWriteDownAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchWriteUpAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchWriteDownAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ScrtyCostWriteUpAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ScrtyCostWriteDownAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ScrtyCostWriteUpAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ScrtyCostWrtDownAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchCostWrtUpAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FXCostWriteDownAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexWriteUpAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexWriteDownAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IndexWriteUpAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IndexWriteDownAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanClearingAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanPurchaseValInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxCleanScrtyValnAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanCostInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IndexClnScrtyCostValuationAmt,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanAmtznAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxClnClrdPremDiscDeferralAmt,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxClnPurValDefrlAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IdxClnOCIScrtyCostValuationAmt,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanNegttnAmtznInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanRpaytAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanInterestIncInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxCleanHedgeAmtznAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanImprmtAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexClnBookValueAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxClnCostExcldBookValueAmount,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IndexCleanAcqnAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IdxCleanAmtzdAcqnAmtInPosCrcy,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.EffctvAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.EffctvAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IneffctvAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IneffctvAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.EffctvCostHdggRsrvInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.EffctvCostHdggRsrvInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IneffctvHdggRsrvPnLInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IneffctvHdggRsrvPnLInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.EffctvHdggRsrvPnLInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.IneffctvCostHdgRsrvPnLPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.IneffctvCostHdgRsrvPnLValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.EffctvCostHdgRsrvPnLInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.EffctvCostHdgRsrvPnLInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.LossAllowanceAmountInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.LossAllowanceAmountInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FXLossAllowanceAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OffstLossAllowanceAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.OffsetLossAllwncAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.OCIOffstLossAllwncAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FXOffstLossAllwncAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FXOffstOCILossAllwncInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AmtznAdjmtLossAllwncInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AmtznAdjmtLossAllwncInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.ContractChangeAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.ContractChangeAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.FrgnExchContrChgAmtInValnCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AmortizedCostInPositionCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AmortizedCostInValuationCrcy,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.PnLDesignatedAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.PnLDesignatedAmtInVC,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.PnLNonDesignatedAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.PnLNonDesignatedAmtInVC,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'PositionCurrency'
  I_Ftr_Position_Values.AmtznNonDesignatedAmtInPosCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  I_Ftr_Position_Values.AmtznNonDesignatedAmtInVC,

  // expose associations:

  _CompanyCode,
  _SecurityAccount,
  _TreasuryValuationArea,
  _ProductType,
  _PositionCurrency,
  _ValuationCurrency,
  _SecurityClass,
  _TreasuryValuationClass,
  // _LoanContract,
  _FinancialTransaction,
  // _BusinessArea,
  // TransactionType,
  _TreasuryPositionAccount,
  _TreasuryGLAccountAssignRef,
  _TrsyPosManagementProcedure,
  _CentralClearingAccount,
  _CommitmentBusinessPartner,
  _Portfolio
}
```
