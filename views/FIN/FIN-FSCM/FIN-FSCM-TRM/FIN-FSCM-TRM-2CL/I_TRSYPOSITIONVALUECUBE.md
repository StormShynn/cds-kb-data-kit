---
name: I_TRSYPOSITIONVALUECUBE
description: "You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value
semantic_en: "You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?"
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
  - metadata-only
---
# I_TRSYPOSITIONVALUECUBE

**You can use this CDS view as the basis for your own queries for analyzing your Treasury positions by their attributes and position (component) values. Therefore, this CDS view provides the prerequisites for answering business questions for your Treasury positions, such as: What are the aggregated position values on the level of valuation areas, company codes, product types, or other dimensions, such as the account assignment reference? You can, for example, answer the following specific questions: What is the overall nominal amount invested in the different product types? What is the current book value of your debts and investments? What are the specific position values of a single treasury position in position currency or valuation currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYPOSITIONVALUECUBE')/$value) |

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
| `IsFreestanding` |  | |  |  | `CHAR(1)` |  |
| `DesignatedNominalCurrency` |  | |  |  | `CUKY(5)` |  |
| `DesignatedQuantityInPieces` |  | |  |  | `DEC(30)` | Designated Quantity in Pieces |
| `DesignatedAmountInNominalCrcy` |  | |  |  | `CURR(21)` | Designated Nominal Amount |
| `DesignatedOrigAmtInNominalCrcy` |  | |  |  | `CURR(21)` | Designated Original Nominal Amount |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Position Currency |
| `ValuationCurrency` |  | |  |  | `CUKY(5)` | Valuation Currency |
| `NominalCurrency` |  | |  |  | `CUKY(5)` | Nominal Currency |
| `TrsyHedgingRelshpRiskCurrency` |  | |  |  | `CUKY(5)` | Risk Currency of Hedging Relationship |
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
| `QuantityInPieces` |  | |  |  | `DEC(30)` | Quantity in Pieces |
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
