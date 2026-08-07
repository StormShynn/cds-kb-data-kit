---
name: I_CABLLBLEITMMAINRAWEXCPTD
description: This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value
semantic_en: This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Billable Item Main Data Raw Excepted
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - transaction
  - metadata-only
---
# I_CABLLBLEITMMAINRAWEXCPTD

**This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmPackageUUID` |  | |  |  | `RAW(16)` | GUID of Package of Billable Items |
| `CABllbleItmPackNo` |  | |  |  | `NUMC(8)` | Sequence Number of Billable Item in Package |
| `CABllbleItmSourceTransId` |  | |  |  | `CHAR(22)` | Source Transaction ID |
| `CABllbleItmSourceTransType` |  | |  |  | `CHAR(5)` | Source Transaction Type |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number for Billing and Invoicing |
| `CAAmountPerUnitAmount` |  | |  |  | `CURR(13)` | Amount per Quantity |
| `CAAmountPerUnitCurrency` |  | |  |  | `CUKY(5)` | Currency of Amount per Quantity |
| `CAAmountPerUnitQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Amount per Quantity |
| `CAAmountPerUnitQuantity` |  | |  |  | `QUAN(31)` | Quantity of Amount per Quantity |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `CAInvcgAccrualPostingType` |  | |  |  | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `CABillgReqReason` |  | |  |  | `CHAR(4)` | Billing Request Reason |
| `CABillgBaseDate` |  | |  |  | `DATS(8)` | Baseline Date for Period Assignment in Billing |
| `CABillgFirstDate` |  | |  |  | `DATS(8)` | Target Date for Billing |
| `CABllbleItmClass` |  | |  |  | `CHAR(4)` | Billable Item Class |
| `CABllbleItmCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CABllbleItmCreationMode` |  | |  |  | `CHAR(1)` | Mode of Creation of Billable Item |
| `CABllbleItmCreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `CABllbleItmDataPackageID` |  | |  |  | `RAW(16)` | ID of a data package of billable items |
| `CABllbleItmDate` |  | |  |  | `DATS(8)` | Date of Origin of Billable Item |
| `CABllbleItmStartDate` |  | |  |  | `DATS(8)` | Start Date of Usage Period |
| `CABllbleItmEndDate` |  | |  |  | `DATS(8)` | End Date of Usage Period |
| `CABllbleItmFieldDrvtnSchema` |  | |  |  | `CHAR(5)` | Field Derivation Schema for Billable Items |
| `CABllbleItmPackageNrOfItms` |  | |  |  | `INT4(10)` | Number of Billable Main Items of Package |
| `CABllbleItmPackNoPrimary` |  | |  |  | `NUMC(8)` | Sequence Number of the Primary Item Package |
| `CABllbleItmPackageUUIDPrimary` |  | |  |  | `RAW(16)` | GUID of the Primary Item Package |
| `CABllbleItmExternalReference` |  | |  |  | `CHAR(32)` | External Reference of Billable Item (32 Places) |
| `CABllbleItmIsReversal` |  | |  |  | `CHAR(1)` | Reversal Item for Billable Item |
| `CABllbleItmIsReversed` |  | |  |  | `CHAR(1)` | Reversed Billable Item |
| `CABllbleItmStatus` |  | |  |  | `CHAR(1)` | Status of Billable Item |
| `CABllbleItmMainText` |  | |  |  | `CHAR(50)` | Text of Main Billable Item (50 Characters) |
| `CABllbleItmTime` |  | |  |  | `TIMS(6)` | Time of Origin of Billable Item |
| `CABllbleItmStartTime` |  | |  |  | `TIMS(6)` | Time of the Start of the Usage Period |
| `CABllbleItmEndTime` |  | |  |  | `TIMS(6)` | Time of the End of the Usage Period |
| `CABllbleItmType` |  | |  |  | `CHAR(4)` | Type of Billable Item |
| `CABllbleItmAmount` |  | |  |  | `CURR(13)` | Amount of Billable Item |
| `CABllbleItmCurrency` |  | |  |  | `CUKY(5)` | Currency of Billable Item |
| `CABllbleItmQuantityGroup` |  | |  |  | `CHAR(4)` | Billing Quantity Quantity Group |
| `CABllbleItmQtyUnit` |  | |  |  | `UNIT(3)` | Unit for the Billing Quantity of Billable Items |
| `CABllbleItmQty` |  | |  |  | `QUAN(31)` | Billing Quantity of Billable Item |
| `CABllbleItmTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount |
| `CABllbleItmTaxAmountTaxCode` |  | |  |  | `CHAR(2)` | Billable Item Tax Amount Tax Code |
| `CABllbleItmTaxAmountType` |  | |  |  | `CHAR(1)` | Billable Item Tax Amount Type |
| `BusinessPartnerIDByExtSystem` |  | |  |  | `CHAR(20)` | Business Partner Number in External System |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CABllbleItmChgHistIsExstc` |  | |  |  | `CHAR(1)` | History Record Exists for Change |
| `CACnsmpnItmClass` |  | |  |  | `CHAR(4)` | Consumption Item Class |
| `CACnsmpnItmID` |  | |  |  | `CHAR(32)` | Consumption Item ID |
| `CACnsmpnItmIDType` |  | |  |  | `CHAR(5)` | Type of Consumption Item ID |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `CAProviderContractItemCharUUID` |  | |  |  | `CHAR(32)` | External GUID of Provider Contract Items (CHAR) |
| `CABllbleItmCostSubType` |  | |  |  | `CHAR(8)` | Billable Item Cost Subtype |
| `CABllbleItmCostType` |  | |  |  | `CHAR(8)` | Billable Item Cost Type |
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
| `CADependentItemReason` |  | |  |  | `CHAR(8)` | Dependent Item Reason |
| `CADependentItemType` |  | |  |  | `CHAR(8)` | Dependent Item Type |
| `CATaxDeterminationCode` |  | |  |  | `CHAR(2)` | Indicator: Tax Determination Code |
| `CAAltvTaxDeterminationCode` |  | |  |  | `CHAR(2)` | Alternative Tax Determination Code for Foreign Deliveries |
| `CABllbleItmExcptnHistIsExstc` |  | |  |  | `CHAR(1)` | History Record Exists for Exception |
| `CAExternalTaxDate` |  | |  |  | `DATS(8)` | External Tax Date |
| `CANetDueDate` |  | |  |  | `DATS(8)` | Due date for net payment |
| `CAFileItem` |  | |  |  | `CHAR(10)` | File Item |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number for Billing and Invoicing |
| `CABusinessPartnerPrimary` |  | |  |  | `CHAR(10)` | Business Partner of Primary Item |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CAMainTransaction` |  | |  |  | `CHAR(4)` | Main Transaction for Line Item |
| `CAIntcoCompanyCodeRequesting` |  | |  |  | `CHAR(4)` | Requesting Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  |  | `CHAR(4)` | Supplying Company Code |
| `CAIntcoSubtype` |  | |  |  | `CHAR(4)` | Intercompany Settlement Subtype |
| `CAIntcoType` |  | |  |  | `CHAR(4)` | Intercompany Settlement Type |
| `CASubAreaForParallelization` |  | |  |  | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CAAccountDeterminationCode` |  | |  |  | `CHAR(2)` | Account Determination ID |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `CAInvcgMasterDataType` |  | |  |  | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CAAltvTaxCode` |  | |  |  | `CHAR(2)` | Alternative Tax Code for Deliveries Abroad |
| `CAInvcgIsNotBPRelevant` |  | |  |  | `CHAR(1)` | Not Relevant for Business Partner Items |
| `CAInvcgOffsettingAction` |  | |  |  | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingCategory` |  | |  |  | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingGroup` |  | |  |  | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgOffsettingProcedure` |  | |  |  | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingReferenceKey` |  | |  |  | `CHAR(20)` | Offsetting Reference Key |
| `CAPostingArea8120ExternalKey1` |  | |  |  | `CHAR(12)` | Posting Area 8120 External Key 1 |
| `CAPostingArea8120ExternalKey2` |  | |  |  | `CHAR(12)` | Posting Area 8120 External Key 1 |
| `CAPostingArea8120ExternalKey3` |  | |  |  | `CHAR(12)` | Posting Area 8120 External Key 2 |
| `CAPostingArea8120ExternalKey4` |  | |  |  | `CHAR(12)` | Posting Area 8120 External Key 3 |
| `CAPostingArea8121ExternalKey1` |  | |  |  | `CHAR(12)` | Posting Area 8121 External Key 1 |
| `CAPostingArea8121ExternalKey2` |  | |  |  | `CHAR(12)` | Posting Area 8121 External Key 2 |
| `CAPostingArea8121ExternalKey3` |  | |  |  | `CHAR(12)` | Posting Area 8121 External Key 3 |
| `CAPostingArea8121ExternalKey4` |  | |  |  | `CHAR(12)` | Posting Area 8121 External Key 4 |
| `CAPostingArea8122ExternalKey1` |  | |  |  | `CHAR(12)` | Posting Area 8122 External Key 1 |
| `CAPostingArea8122ExternalKey2` |  | |  |  | `CHAR(12)` | Posting Area 8120 External Key 2 |
| `CAInvcgIsItemPostingRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Posting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CAInvcgIsItemPrintingRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Printing |
| `CAInvcgSubstituteGroupPrinting` |  | |  |  | `CHAR(4)` | Substitute Group for Invoice Printing |
| `CAPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CABllbleItmGroupingPaymentData` |  | |  |  | `CHAR(8)` | Grouping of Payment Data Items |
| `CAIsRevenueAccountingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevnAcctgRlvnceDetnType` |  | |  |  | `CHAR(1)` | Determination of Data Relevant for Revenue Accounting |
| `CARatingDate` |  | |  |  | `DATS(8)` | Date of Rating |
| `CARatingID` |  | |  |  | `NUMC(20)` | Rating ID |
| `RAItemType` |  | |  |  | `CHAR(2)` | Type of Revenue Accounting Item |
| `RAOriginalDocItemID` |  | |  |  | `CHAR(35)` | Original Item ID |
| `RAOriginalDocItemLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of the Original Item |
| `RAOriginalDocItemType` |  | |  |  | `CHAR(4)` | Revenue Accounting Original Item Type |
| `RevenueAccountingReference` |  | |  |  | `CHAR(30)` | Reference ID for Revenue Accounting |
| `RevenueAccountingRefType` |  | |  |  | `CHAR(3)` | Reference Type for Revenue Accounting |
| `CABllbleItmPrimaryType` |  | |  |  | `CHAR(2)` | Type of Relationship to Primary Item |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CABllbleItmControlOfUnit` |  | |  |  | `CHAR(1)` | Control of Billing and Invoicing Unit |
| `CARevenueAccountingServiceType` |  | |  |  | `CHAR(6)` | Service Type for Revenue Accounting |
| `CABllbleItmSimlnSts` |  | |  |  | `CHAR(1)` | Billable Item Is Simulated |
| `CABllbleItmExceptionDate` |  | |  |  | `DATS(8)` | Exception Date |
| `CABllbleItmExceptionTime` |  | |  |  | `TIMS(6)` | Time of Exception |
| `CABllbleItmExceptionReason` |  | |  |  | `CHAR(2)` | Exception/Reversal Reason for Billable Items |
| `CABllbleItmExceptionUserName` |  | |  |  | `CHAR(12)` | Name of User Who Excepted the Item |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CABllbleItmSrceTransIDCrrtd` |  | |  |  | `CHAR(22)` | Source Transaction ID of the Corrected Source Transaction |
| `CABllbleItmSourceTransIDPrim` |  | |  |  | `CHAR(22)` | Source Transaction ID of Primary Item |
| `CABllbleItmSourceTransItmID` |  | |  |  | `CHAR(10)` | Source Transaction Item ID |
| `CABllbleItmSrceTransItmIDCrrtd` |  | |  |  | `CHAR(10)` | Source Trans. Item ID of the Corrected Source Transaction |
| `CABllbleItmSrceTransTypeCrrtd` |  | |  |  | `CHAR(5)` | Type of Corrected Source Transaction |
| `CABllbleItmSourceTransTypePrim` |  | |  |  | `CHAR(5)` | Source Transaction Type of Primary Item |
| `CABllbleItmSrceTransCrrtnCat` |  | |  |  | `CHAR(2)` | Correction Category of Source Transaction |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `CAOtherTaxCode` |  | |  |  | `CHAR(2)` | Tax Code for Other Taxes |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CASubApplicationPrimary` |  | |  |  | `CHAR(1)` | Subapplication of Contract of Primary Item |
| `CABillgSubprocess` |  | |  |  | `CHAR(4)` | Subprocess of Billing |
| `CATaxCountry` |  | |  |  | `CHAR(3)` | Country/Region for Tax Report |
| `CATaxDateType` |  | |  |  | `CHAR(2)` | Type of Tax Date |
| `CATaxDetnType` |  | |  |  | `CHAR(2)` | Type of Tax Calculation |
| `CABllbleItmGroupingTaxData` |  | |  |  | `CHAR(8)` | Grouping of Tax Items |
| `CATaxIsIncluded` |  | |  |  | `CHAR(1)` | Tax Included in Amount |
| `CASubTransaction` |  | |  |  | `CHAR(4)` | Subtransaction for Document Item |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `CABllbleItmGroupingTextData` |  | |  |  | `CHAR(8)` | Grouping of Attachment Items |
| `ContractAccountExtReference` |  | |  |  | `CHAR(20)` | Contract Account Number in Legacy System |
| `CAContractAccountPrimary` |  | |  |  | `CHAR(12)` | Contract Account of the Primary Item |
| `CAProviderContractItemNumber` |  | |  |  | `NUMC(6)` | Contract: Item Number |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CAContractPrimary` |  | |  |  | `CHAR(20)` | Contract of Primary Item |
| `CAIsDownPaymentRequest` |  | |  |  | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CABllbleItmPrimary` |  | |  |  | `CHAR(1)` | Primary Billable Item |
