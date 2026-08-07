---
name: C_CMHDGEVALRPTKEYDATEQUERY
description: CMMF Hedge Acc Eval Report Keydate - Qry
app_component: FIN-FSCM-CMM-HACC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value
semantic_en: CMMF Hedge Acc Eval Report Keydate - Qry
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CMM-HACC
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-HACC
  - lob:finance
  - lob:sourcing & procurement
  - metadata-only
---
# C_CMHDGEVALRPTKEYDATEQUERY

**CMMF Hedge Acc Eval Report Keydate - Qry**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-HACC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `FinTransactionCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinTransactionDealIdentifier` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CmmdtyHdgEvalRunDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Counterparty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(100)` | Text (100 characters) |
| `OnBehalfOfCompany` |  | |  |  | `CHAR(4)` | On Behalf of Company Code |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `HedgingClassification` |  | |  |  | `CHAR(5)` | Hedging Classification |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `FinTransContractStartDate` |  | |  |  | `DATS(8)` | Contract Conclusion Date |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Payment or Delivery Date |
| `FinTransactionPricingStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `FinTransactionPricingEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `Quantity` |  | |  |  | `QUAN(13)` | Quantity |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmHdgFinTransCmmdtyPriceAmt` |  | |  |  | `DEC(13)` | Commodity Price |
| `FinancialTransactionAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXBuyAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmmdtyHdgFinTransFXBuyCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXSellAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmmdtyHdgFinTransFXSellCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXCrcyRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `CmmdtyHdgFinTransFXSpotRate` |  | |  |  | `DEC(13)` | Spot Rate |
| `CmmdtyHdgFinTransFXSwapRate` |  | |  |  | `DEC(13)` | Swap Rate |
| `CommodityHedgePlanExposureID` |  | |  |  | `CHAR(13)` | Plan Exposure ID |
| `CmmdtyHdgPlanExposureDirection` |  | |  |  | `CHAR(4)` | Buy or Sell Transaction |
| `CmmdtyHedgePlanExposureDCSID` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `CmmdtyHdgPlnExpsrPrcgStartDate` |  | |  |  | `DATS(8)` | Start of Pricing Period |
| `CmmdtyHdgPlnExpsrPrcgEndDate` |  | |  |  | `DATS(8)` | End of Pricing Period |
| `CmmdtyHdgPlnExpsrDelivStrtDate` |  | |  |  | `DATS(8)` | Start of Delivery Period |
| `CmmdtyHdgPlnExpsrDelivEndDate` |  | |  |  | `DATS(8)` | End of Delivery Period |
| `CmmdtyHdgPlanExposureHedgeBook` |  | |  |  | `CHAR(10)` | Commodity Hedge Book |
| `CmmdtyHdgPlnExpsrIsAcctgRlvt` |  | |  |  | `CHAR(1)` | Hedge Accounting Relevance |
| `CmmdtyHdgPlnExpsrHedgingArea` |  | |  |  | `CHAR(20)` | Commodity Hedging Area |
| `CmmdtyHdgPlnExpsrValidFromDate` |  | |  |  | `DATS(8)` | Valid-From Date of Planning Data |
| `CmmdtyHedgePlnExposureQuantity` |  | |  |  | `QUAN(13)` | Quantity |
| `CmmdtyHdgPlnExpsrQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CounterdealItemCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CounterdealItemDealIdentifier` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CounterdealRequestIdentifier` |  | |  |  | `CHAR(13)` | Hedge Request ID |
| `ValuationCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmHdgTransKeyDteEvalPrcCrcy` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmHdgFinTransKeyDteEvalPrcUoM` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmHdgFinTransKeyDteFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteInPsCFairAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVRskFreeAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgTransKeyDteNPVSpotAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtNPVSptRskFrAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVFwdAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtNPVFwdRskFrAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgTransKeyDteCCBSAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtCCBSRskFreeAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVOtherAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgKeyDteNPVOthRskFreeAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDateCrdtValAdjAmt` |  | |  |  | `CURR(21)` | Credit Value Adjustment |
| `CmHdgTransKeyDteDebitValAdjAmt` |  | |  |  | `CURR(21)` | Debit Value Adjustment |
| `CmHdgFinTransKeyDateEvalPrcAmt` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `TreasuryValuationArea` |  | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `HedgingRelationship` |  | |  |  | `CHAR(10)` | Hedging Relationship Number (External/Internal) |
| `HedgingRelationshipFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Hedging Relationship |
| `HedgingRelationshipStatus` |  | |  |  | `CHAR(2)` | Hedging Relationship Display Status |
| `FinancialExposureSubItem` |  | |  |  | `CHAR(13)` | Exposure Subitem ID |
| `CmmdtyHdgHyptclDrvtvIdentifier` |  | |  |  | `CHAR(13)` | Hypothetical Derivative Instrument Number |
| `CmmdtyHdgHyptclDrvtvPriceAmt` |  | |  |  | `DEC(13)` | Commodity Price |
| `CmmdtyHdgHyptclDrvtvPrcCrcy` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmmdtyHdgHyptclDrvtvPriceUoM` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmmdtyHdgHyptclDrvtvFXRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `HdgKeyDteHyptclDrvtvFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvFwdValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvSpotValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgKeyDteHyptclDrvtvCCBSAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvNPVOthAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgHdggRelshpDsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmmdtyHdggRelshpIsLateDsgntd` |  | |  |  | `CHAR(1)` | General Flag |
| `CmmdtyHdgHdgRelNetDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmHdgHdggRelshpGrssDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmmdtyHdggRelshpPlndDdsgntnDte` |  | |  |  | `DATS(8)` | Field of type DATS |
