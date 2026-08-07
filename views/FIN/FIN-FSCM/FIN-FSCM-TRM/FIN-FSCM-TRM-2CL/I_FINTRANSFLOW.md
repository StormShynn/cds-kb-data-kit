---
name: I_FINTRANSFLOW
description: This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value
semantic_en: This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# I_FINTRANSFLOW

**This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` |  | |  |  | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` |  | |  |  | `DATS(8)` | Entered On |
| `FinTransFlowCreationTime` |  | |  |  | `TIMS(6)` | Flow Entry Time |
| `FinTransFlowNumber` |  | |  |  | `NUMC(4)` | Transaction Flow |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinTransFlowCategory` |  | |  |  | `CHAR(2)` | Flow Category |
| `FinTransFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `FinTransFlowPaytAmt` |  | |  |  | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransFlowPaytAmtDirection` |  | |  |  | `CHAR(1)` | Flow Payment Amount Direction |
| `FinTransFlowNomAmt` |  | |  |  | `CURR(13)` | Flow Nominal Amount |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
| `FinTransFlowPositionAmount` |  | |  |  | `CURR(13)` | Financial Transaction Position Amount |
| `FinTransFlwPosAmtCrcy` |  | |  |  | `CUKY(5)` | Currency of Position Amount |
| `FinTransFlowInLoclCrcyPaytAmt` |  | |  |  | `CURR(13)` | Payment Amount in Local Currency |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FinTransFlowLoclCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Flow Conversion Rate in Local Currency |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransFlowPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `FinTransFlowIntrstRateFixDate` |  | |  |  | `DATS(8)` | Interest Rate Fixing Date |
| `CalculationPeriodStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `CalcPeriodStartDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for Start of a Calculation Period |
| `CalculationPeriodEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `CalcPeriodEndDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for the End of a Calculation Period |
| `NumberOfCalculationDays` |  | |  |  | `NUMC(6)` | Number of Days |
| `InterestCalculationMethod` |  | |  |  | `CHAR(1)` | Interest Calculation Method |
| `FinTransFlowCalcBaseAmount` |  | |  |  | `CURR(13)` | Calculation Base Amount |
| `FinTransFlowCalcBaseAmountCrcy` |  | |  |  | `CUKY(5)` | Currency of Calculation Basis |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `FinTransPresentationItemID` |  | |  |  | `CHAR(10)` | Presentation Item |
| `FinTransFlowPostingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowPostingBlkgReason` |  | |  |  | `NUMC(1)` | Reason Why Flow Is Blocked for Fixing |
| `FinTransFlowPostingRelease` |  | |  |  | `CHAR(1)` | Released for Flow Fixing |
| `FinTransFlowFixingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowFixingBlkgReason` |  | |  |  | `NUMC(1)` | Reason Why Flow Is Blocked for Fixing |
| `FinTransFlowIsFixingReleased` |  | |  |  | `CHAR(1)` | Released for Flow Fixing |
| `FinInterestRateAdjmtStatus` |  | |  |  | `CHAR(2)` | Status of Interest Rate Adjustment |
| `RepetitiveCode` |  | |  |  | `CHAR(20)` | Repetitive Code |
| `PaymentRepetitiveCode` |  | |  |  | `CHAR(20)` | Repetitive Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for Own House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | Short Key for House Bank Account |
| `PayerPayee` |  | |  |  | `CHAR(10)` | Payer/Payee |
| `PayerPayeeBankDetail` |  | |  |  | `CHAR(4)` | Partner Bank Details |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentMethodsList` |  | |  |  | `CHAR(10)` | List of Respected Payment Methods |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment method supplement |
| `TreasuryIndividualPayment` |  | |  |  | `CHAR(1)` | Individual Payment |
| `TreasuryPaymentIsIndividual` |  | |  |  | `CHAR(1)` | Individual Payment |
| `TrsyPaytGroupingSameDrctnIsRqd` |  | |  |  | `CHAR(1)` | Same Direction Necessary for Joint Payment? |
| `TreasuryPaymentRequestGrouping` |  | |  |  | `CHAR(1)` | Determine Grouping Definition |
| `TreasuryIntGrpgForPaytValue` |  | |  |  | `CHAR(20)` | Grouping Field for Automatic Payments |
| `FinancialTransactionDirection` |  | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinInstrConditionLogicGroup` |  | |  |  | `NUMC(4)` | Condition Logic Group |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `FinTransFlwLoclCrcyAmtCalcType` |  | |  |  | `CHAR(1)` | Indicator for Translation into Local Currency |
| `FinTransFlowCalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
| `FlowCalcDateIsExclusive` |  | |  |  | `CHAR(1)` | Exclusive Indicator for Calculation Date |
| `FlowCalcDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for the Calculation Date |
| `IntrstCalcMethFactoryCalendar` |  | |  |  | `CHAR(2)` | Interest Calendar |
| `InterestCalculationType` |  | |  |  | `NUMC(1)` | Type of Interest Calculation |
| `CalcPeriodStartDateIsInclusive` |  | |  |  | `CHAR(1)` | Inclusive Indicator for Start of Calculation Period |
| `CalcPeriodEndDateIsInclusive` |  | |  |  | `CHAR(1)` | Inclusive indicator for end of calculation period |
| `FinTransFlwDerivationProcedure` |  | |  |  | `CHAR(5)` | Procedure for Generating Derived Flows |
| `FinTransPaytRateInPercent` |  | |  |  | `DEC(10)` | Price as Percentage Quotation |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `FinTransFlowCreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `FinTransFlowLastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `FinTransFlowLastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `FinTransFlowLastChangeTime` |  | |  |  | `TIMS(6)` | Time Changed |
| `FinTransFlwAltvPaytDetIsStated` |  | |  |  | `CHAR(1)` | Alternative Payment Details Stated in Flow |
| `TrsyPaytIsPostdToGLAccount` |  | |  |  | `CHAR(1)` | Payment Is Posted to GL Account |
| `TrsyPaytRequestIsGenerated` |  | |  |  | `CHAR(1)` | Generate Payment Request |
| `FinTransFlowIsReversed` |  | |  |  | `CHAR(1)` | Flow Reversal in Treasury |
| `NrOfBaseDaysPerCalcPeriod` |  | |  |  | `NUMC(6)` | Number of Base Days in a Calculation Period |
| `FinTransFlowReferencedFlowType` |  | |  |  | `CHAR(4)` | Referenced Flow Type |
| `FinTransFlowPriceIndexValue` |  | |  |  | `DEC(18)` | Index Value (Independent of Basis) |
| `RepetitiveCodeReferenceText` |  | |  |  | `CHAR(50)` | Reference Text for Repetitive Code |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `TrsyPaymentSupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `PaymentWithAccruedIntrstAmount` |  | |  |  | `CURR(23)` | Payment Amount in Payment Currency |
| `FinTransFlwDerivdFlwGrpgTerm` |  | |  |  | `CHAR(16)` | Grouping Term for Derived Flows |
| `FXRateAdjustmentFixingDate` |  | |  |  | `DATS(8)` | Fixing Date |
| `FXRateAdjustmentStatus` |  | |  |  | `CHAR(2)` | Status of Rate Fixing |
| `FinTransFlowFXRateReadDate` |  | |  |  | `DATS(8)` | Date of the Exchange Rate Read |
| `PrcIdxAdjmtFixingLowDate` |  | |  |  | `DATS(8)` | Index Fixing Date Low |
| `FinTransFlowPrcIdxReadLowDate` |  | |  |  | `DATS(8)` | Index Read Date Low |
| `PrcIdxAdjmtFixingHighDate` |  | |  |  | `DATS(8)` | Index Fixing Date High |
| `FinTransFlowPrcIdxReadHighDate` |  | |  |  | `DATS(8)` | Index Read Date High |
| `PrcIdxAdjustmentStatus` |  | |  |  | `CHAR(2)` | Status of Price Index Fixing |
| `FinTransFlowIndexCleanAmount` |  | |  |  | `CURR(13)` | Amount Index-Clean that Changes the Position |
| `FinTransFlowPaytRsnIsChgd` |  | |  |  | `CHAR(1)` | Changed Status of Payment Reason |
| `FinCndnCrsRefcdAccmlnCndnGrp` |  | |  |  | `NUMC(4)` | Cross-Referenced Condition Group for Accumulation |
| `FinTransFlwReltdAccumulatingID` |  | |  |  | `CHAR(40)` | ID of Related Accumulating Flow |
| `FinTransFlowAccumulatingFlowID` |  | |  |  | `CHAR(40)` | Accumulating Flow ID |
| `FinTransFlowModificationStatus` |  | |  |  | `NUMC(1)` | Change Indicator for FiMa Flow Records |
| `TrsyTransacMgmtBizTransaction` |  | |  |  | `CHAR(60)` | Business Transaction Identifier in Transaction Management |
| `PaymentRequest` |  | |  |  | `CHAR(10)` | Key Number for Payment Request |
| `FinTransFlowPostingDate` |  | |  |  | `DATS(8)` | Flow Posting Date |
