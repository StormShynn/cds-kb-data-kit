---
name: I_CABLLBLEITMMAINBILLED
description: Billable Item Main Data Billed
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINBILLED')/$value
semantic_en: Billable Item Main Data Billed
keywords:
  - Billable Item Main Data Billed
tags:
  - FI
  - component:FI-CA-INV-2CL
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CABLLBLEITMMAINBILLED

**Billable Item Main Data Billed**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINBILLED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocCreationDate` |  | |  |  | `DATS(8)` | Date on Which Billing Document Was Created |
| `CABillgDocument` |  | |  |  | `CHAR(12)` | Number of Billing Document |
| `CABillgGroupingBillableItem` |  | |  |  | `NUMC(8)` | Grouping of Billable Items in Billing Document |
| `CABllbleItmBillgDocMainSqncNo` |  | |  |  | `NUMC(8)` | Sequence Number of Billed Item of Billing Document |
| `CABillgDocCreationTime` |  | |  |  | `TIMS(6)` | Time at Which Billing Document Was Created |
| `CABillgDocIsReversed` |  | |  |  | `CHAR(1)` | Billing Document Is Reversed |
| `CABillgDocIsReversal` |  | |  |  | `CHAR(1)` | Billing Document Is a Reversal Document |
| `CABllbleItmSourceTransType` |  | |  |  | `CHAR(5)` | Source Transaction Type |
| `CABllbleItmSourceTransId` |  | |  |  | `CHAR(22)` | Source Transaction ID |
| `CABllbleItmSourceTransItmID` |  | |  |  | `CHAR(10)` | Source Transaction Item ID |
| `CABllbleItmPackageUUID` |  | |  |  | `RAW(16)` | GUID of Package of Billable Items |
| `CABllbleItmPackNo` |  | |  |  | `NUMC(8)` | Sequence Number of Billable Item in Package |
| `CABllbleItmPackageNrOfItms` |  | |  |  | `INT4(10)` | Number of Billable Main Items of Package |
| `CABllbleItmClass` |  | |  |  | `CHAR(4)` | Billable Item Class |
| `CABllbleItmStatus` |  | |  |  | `CHAR(1)` | Status of Billable Item |
| `CABillgSubprocess` |  | |  |  | `CHAR(4)` | Subprocess of Billing |
| `CABllbleItmType` |  | |  |  | `CHAR(4)` | Type of Billable Item |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number for Billing and Invoicing |
| `CAContractAccountPrimary` |  | |  |  | `CHAR(12)` | Contract Account of the Primary Item |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number for Billing and Invoicing |
| `CAInvcgMasterDataType` |  | |  |  | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `CABillgBaseDate` |  | |  |  | `DATS(8)` | Baseline Date for Period Assignment in Billing |
| `CABillgFirstDate` |  | |  |  | `DATS(8)` | Target Date for Billing |
| `CABllbleItmDate` |  | |  |  | `DATS(8)` | Date of Origin of Billable Item |
| `CABllbleItmTime` |  | |  |  | `TIMS(6)` | Time of Origin of Billable Item |
| `CABllbleItmStartDate` |  | |  |  | `DATS(8)` | Start Date of Usage Period |
| `CABllbleItmEndDate` |  | |  |  | `DATS(8)` | End Date of Usage Period |
| `CABllbleItmCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CABllbleItmCreationMode` |  | |  |  | `CHAR(1)` | Mode of Creation of Billable Item |
| `CABllbleItmCreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `CABllbleItmDataPackageID` |  | |  |  | `RAW(16)` | ID of a data package of billable items |
| `CABllbleItmAmount` |  | |  |  | `CURR(13)` | Amount of Billable Item |
| `CABllbleItmCurrency` |  | |  |  | `CUKY(5)` | Currency of Billable Item |
| `CABllbleItmQty` |  | |  |  | `QUAN(31)` | Billing Quantity of Billable Item |
| `CABllbleItmQtyUnit` |  | |  |  | `UNIT(3)` | Unit for the Billing Quantity of Billable Items |
| `CASubAreaForParallelization` |  | |  |  | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CABllbleItmExcptnHistIsExstc` |  | |  |  | `CHAR(1)` | History Record Exists for Exception |
| `CABllbleItmChgHistIsExstc` |  | |  |  | `CHAR(1)` | History Record Exists for Change |
| `CABllbleItmIsReversal` |  | |  |  | `CHAR(1)` | Reversal Item for Billable Item |
| `CABllbleItmIsReversed` |  | |  |  | `CHAR(1)` | Reversed Billable Item |
| `CABillgDocPrevious` |  | |  |  | `CHAR(12)` | Document Number of Previous Billing Document |
| `CAInvcgIsItemPostingRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Posting |
| `CAInvcgIsItemPrintingRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Printing |
| `CAInvcgIsNotBPRelevant` |  | |  |  | `CHAR(1)` | Not Relevant for Business Partner Items |
| `CAInvcgSubstituteGroupPrinting` |  | |  |  | `CHAR(4)` | Substitute Group for Invoice Printing |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CAMainTransaction` |  | |  |  | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  |  | `CHAR(4)` | Subtransaction for Document Item |
| `CAAccountDeterminationCode` |  | |  |  | `CHAR(2)` | Account Determination ID |
| `CATaxIsIncluded` |  | |  |  | `CHAR(1)` | Tax Included in Amount |
| `CATaxDetnType` |  | |  |  | `CHAR(2)` | Type of Tax Calculation |
| `CATaxDateType` |  | |  |  | `CHAR(2)` | Type of Tax Date |
| `CAExternalTaxDate` |  | |  |  | `DATS(8)` | External Tax Date |
| `CATaxDeterminationCode` |  | |  |  | `CHAR(2)` | Indicator: Tax Determination Code |
| `CAAltvTaxDeterminationCode` |  | |  |  | `CHAR(2)` | Alternative Tax Determination Code for Foreign Deliveries |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CAAltvTaxCode` |  | |  |  | `CHAR(2)` | Alternative Tax Code for Deliveries Abroad |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `CAIsDownPaymentRequest` |  | |  |  | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `CABllbleItmExternalReference` |  | |  |  | `CHAR(32)` | External Reference of Billable Item (32 Places) |
| `CABllbleItmGroupingPaymentData` |  | |  |  | `CHAR(8)` | Grouping of Payment Data Items |
| `CABllbleItmControlOfUnit` |  | |  |  | `CHAR(1)` | Control of Billing and Invoicing Unit |
| `CABllbleItmSimlnSts` |  | |  |  | `CHAR(1)` | Billable Item Is Simulated |
| `CABillgReqReason` |  | |  |  | `CHAR(4)` | Billing Request Reason |
| `CABllbleItmMainText` |  | |  |  | `CHAR(50)` | Text of Main Billable Item (50 Characters) |
| `CABllbleItmStartTime` |  | |  |  | `TIMS(6)` | Time of the Start of the Usage Period |
| `CABllbleItmEndTime` |  | |  |  | `TIMS(6)` | Time of the End of the Usage Period |
| `CAFileItem` |  | |  |  | `CHAR(10)` | File Item |
| `CAInvcgSourceDocumentNumber` |  | |  |  | `CHAR(20)` | Source Document Number |
| `CATaxCountry` |  | |  |  | `CHAR(3)` | Country/Region for Tax Report |
| `CACnsmpnItmClass` |  | |  |  | `CHAR(4)` | Consumption Item Class |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CAContractPrimary` |  | |  |  | `CHAR(20)` | Contract of Primary Item |
| `CAProviderContractItemNumber` |  | |  |  | `NUMC(6)` | Contract: Item Number |
| `CAProviderContractItemUUID` |  | |  |  | `RAW(16)` | External GUID of Provider Contract Items |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CASubApplicationPrimary` |  | |  |  | `CHAR(1)` | Subapplication of Contract of Primary Item |
| `CAPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CACnsmpnItmID` |  | |  |  | `CHAR(32)` | Consumption Item ID |
| `CACnsmpnItmIDType` |  | |  |  | `CHAR(5)` | Type of Consumption Item ID |
| `CARatingDate` |  | |  |  | `DATS(8)` | Date of Rating |
| `CARatingID` |  | |  |  | `NUMC(20)` | Rating ID |
| `CARevenueAccountingServiceType` |  | |  |  | `CHAR(6)` | Service Type for Revenue Accounting |
| `CAOtherTaxCode` |  | |  |  | `CHAR(2)` | Tax Code for Other Taxes |
| `CABllbleItmGroupingTaxData` |  | |  |  | `CHAR(8)` | Grouping of Tax Items |
| `CABllbleItmGroupingTextData` |  | |  |  | `CHAR(8)` | Grouping of Attachment Items |
| `CABllbleItmDiscountKey` |  | |  |  | `CHAR(8)` | Discount/Charge Key |
| `CABllbleItmDiscountVersion` |  | |  |  | `NUMC(2)` | Version Number of Disccount on Billable Items |
| `CADiscBaseItmAmount` |  | |  |  | `CURR(13)` | Base Amount of Discount/Charge Base Item |
| `CADiscBaseItmGroup` |  | |  |  | `NUMC(4)` | Grouping of Base Items in Billing Document |
| `CADiscBaseItmNrOfBllbleItm` |  | |  |  | `INT4(10)` | Number of Billable Items of a Base Item |
| `CADiscBaseItmIsCalculationRlvt` |  | |  |  | `CHAR(1)` | Item Relevant for Discount/Charge Calculation |
| `CADiscBaseItmIsConditionRlvt` |  | |  |  | `CHAR(1)` | Item Relevant for Discount/Charge Condition |
| `CADiscBaseItmNrOfItmInGroup` |  | |  |  | `INT1(3)` | Number of Base Items in Discount/Charge Group |
| `CADiscBaseItmProcessingLevel` |  | |  |  | `NUMC(4)` | Processing Level for Discount/Charge in Billing |
| `CADiscBaseItmNrOfItmInBillgDoc` |  | |  |  | `INT1(3)` | Number of Base Items in Billing Document |
| `CABllbleItmPrimary` |  | |  |  | `CHAR(1)` | Primary Billable Item |
| `CABllbleItmPrimaryType` |  | |  |  | `CHAR(2)` | Type of Relationship to Primary Item |
| `CADependentItemReason` |  | |  |  | `CHAR(8)` | Dependent Item Reason |
| `CABllbleItmPackNoPrimary` |  | |  |  | `NUMC(8)` | Sequence Number of the Primary Item Package |
| `CABllbleItmPackageUUIDPrimary` |  | |  |  | `RAW(16)` | GUID of the Primary Item Package |
| `CADependentItemType` |  | |  |  | `CHAR(8)` | Dependent Item Type |
| `CABusinessPartnerPrimary` |  | |  |  | `CHAR(10)` | Business Partner of Primary Item |
| `CABllbleItmSourceTransIDPrim` |  | |  |  | `CHAR(22)` | Source Transaction ID of Primary Item |
| `CABllbleItmSourceTransTypePrim` |  | |  |  | `CHAR(5)` | Source Transaction Type of Primary Item |
| `CAInvcgOffsettingAction` |  | |  |  | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingCategory` |  | |  |  | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingGroup` |  | |  |  | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgOffsettingProcedure` |  | |  |  | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingReferenceKey` |  | |  |  | `CHAR(20)` | Offsetting Reference Key |
| `CABllbleItmTransferDate` |  | |  |  | `DATS(8)` | Transfer Date of Billable Item |
| `CABllbleItmTransferTime` |  | |  |  | `TIMS(6)` | Transfer Time of Billable Item |
| `CABllbleItmSrceTransCrrtnCat` |  | |  |  | `CHAR(2)` | Correction Category of Source Transaction |
| `CABllbleItmSrceTransIDCrrtd` |  | |  |  | `CHAR(22)` | Source Transaction ID of the Corrected Source Transaction |
| `CABllbleItmSrceTransItmIDCrrtd` |  | |  |  | `CHAR(10)` | Source Trans. Item ID of the Corrected Source Transaction |
| `CABllbleItmSrceTransTypeCrrtd` |  | |  |  | `CHAR(5)` | Type of Corrected Source Transaction |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `CAInvcgAccrualPostingType` |  | |  |  | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `CABllbleItmCostSubType` |  | |  |  | `CHAR(8)` | Billable Item Cost Subtype |
| `CABllbleItmCostType` |  | |  |  | `CHAR(8)` | Billable Item Cost Type |
| `CANetDueDate` |  | |  |  | `DATS(8)` | Due date for net payment |
| `CABllbleItmFieldDrvtnSchema` |  | |  |  | `CHAR(5)` | Field Derivation Schema for Billable Items |
| `CAAmountPerUnitAmount` |  | |  |  | `CURR(13)` | Amount per Quantity |
| `CAAmountPerUnitCurrency` |  | |  |  | `CUKY(5)` | Currency of Amount per Quantity |
| `CAAmountPerUnitQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Amount per Quantity |
| `CAAmountPerUnitQuantity` |  | |  |  | `QUAN(31)` | Quantity of Amount per Quantity |
| `CAIsRevenueAccountingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevnAcctgRlvnceDetnType` |  | |  |  | `CHAR(1)` | Determination of Data Relevant for Revenue Accounting |
| `RAItemType` |  | |  |  | `CHAR(2)` | Type of Revenue Accounting Item |
| `RAOriginalDocItemID` |  | |  |  | `CHAR(35)` | Original Item ID |
| `RAOriginalDocItemLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of the Original Item |
| `RAOriginalDocItemType` |  | |  |  | `CHAR(4)` | Revenue Accounting Original Item Type |
| `RevenueAccountingReference` |  | |  |  | `CHAR(30)` | Reference ID for Revenue Accounting |
| `RevenueAccountingRefType` |  | |  |  | `CHAR(3)` | Reference Type for Revenue Accounting |
| `CAPartnerSettlementAdjmtAmount` |  | |  |  | `CURR(13)` | Adjustment Amount for Partner Settlement |
| `CAPartnerSettlementRule` |  | |  |  | `CHAR(4)` | Partner Settlement Rule |
| `CAIntcoCompanyCodeRequesting` |  | |  |  | `CHAR(4)` | Requesting Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  |  | `CHAR(4)` | Supplying Company Code |
| `CAIntcoProcedure` |  | |  |  | `CHAR(2)` | Intercompany Settlement Procedure |
| `CAIntcoType` |  | |  |  | `CHAR(4)` | Intercompany Settlement Type |
| `CAIntcoSubtype` |  | |  |  | `CHAR(4)` | Intercompany Settlement Subtype |
| `CABllbleItmQuantityGroup` |  | |  |  | `CHAR(4)` | Billing Quantity Quantity Group |
| `CABllbleItmTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount |
| `CABllbleItmTaxAmountType` |  | |  |  | `CHAR(1)` | Billable Item Tax Amount Type |
| `CABllbleItmTaxAmountTaxCode` |  | |  |  | `CHAR(2)` | Billable Item Tax Amount Tax Code |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
