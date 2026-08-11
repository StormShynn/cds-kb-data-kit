---
name: I_CABLLBLEITMMAINRAWEXCPTD
description: "This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value
semantic_en: "This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Billable Item Main Data Raw Excepted — CDS view giao diện (transactional data) dựa trên Billable Item Main Data Raw Excepted."
keywords:
  - "Billable Item Main Data Raw Excepted"
  - "billable"
  - "item"
  - "main"
  - "data"
  - "raw"
  - "excepted"
  - "bllble"
  - "package"
  - "pack"
  - "source"
  - "trans"
  - "type"
  - "contract"
  - "account"
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
---
# I_CABLLBLEITMMAINRAWEXCPTD

**This CDS view retrieves the main item data with status Raw Excepted of a billable item in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which data exists for a business transaction or event that has been excluded from billing? What net amount is receivable or payable for the business transaction or event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmPackageUUID` | ✓ | |  | `bitpackuuid` | `RAW(16)` | GUID of Package of Billable Items |
| `CABllbleItmPackNo` | ✓ | |  | `bitpackcno` | `NUMC(8)` | Sequence Number of Billable Item in Package |
| `CABllbleItmSourceTransId` | ✓ | |  | `srctaid` | `CHAR(22)` | Source Transaction ID |
| `CABllbleItmSourceTransType` | ✓ | |  | `cast(srctatype as srctatype_gfn_kk preserving type )` | `CHAR(5)` | Source Transaction Type |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number for Billing and Invoicing |
| `CAAmountPerUnitAmount` |  | |  | `amount_per_unit_amnt` | `CURR(13)` | Amount per Quantity |
| `CAAmountPerUnitCurrency` |  | |  | `amount_per_unit_cuky` | `CUKY(5)` | Currency of Amount per Quantity |
| `CAAmountPerUnitQuantityUnit` |  | |  | `amount_per_unit_qtyu` | `UNIT(3)` | Unit of Measure for Amount per Quantity |
| `CAAmountPerUnitQuantity` |  | |  | `amount_per_unit_quan` | `QUAN(31)` | Quantity of Amount per Quantity |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CAInvcgAccrualPostingType` |  | |  | `cast(billac_type as billac_type_gfn_kk preserving type )` | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `CABillgReqReason` |  | |  | `cast(billreqrsn as billreqrsn_gfn_kk preserving type )` | `CHAR(4)` | Billing Request Reason |
| `CABillgBaseDate` |  | |  | `bill_basedate` | `DATS(8)` | Baseline Date for Period Assignment in Billing |
| `CABillgFirstDate` |  | |  | `bill_first` | `DATS(8)` | Target Date for Billing |
| `CABllbleItmClass` |  | |  | `bitcat` | `CHAR(4)` | Billable Item Class |
| `CABllbleItmCreationDate` |  | |  | `bitcrdate` | `DATS(8)` | Created On |
| `CABllbleItmCreationMode` |  | |  | `bitcrmode` | `CHAR(1)` | Mode of Creation of Billable Item |
| `CABllbleItmCreationTime` |  | |  | `bitcrtime` | `TIMS(6)` | Created At |
| `CABllbleItmDataPackageID` |  | |  | `bitdatapackid` | `RAW(16)` | ID of a data package of billable items |
| `CABllbleItmDate` |  | |  | `bitdate` | `DATS(8)` | Date of Origin of Billable Item |
| `CABllbleItmStartDate` |  | |  | `bitdate_from` | `DATS(8)` | Start Date of Usage Period |
| `CABllbleItmEndDate` |  | |  | `bitdate_to` | `DATS(8)` | End Date of Usage Period |
| `CABllbleItmFieldDrvtnSchema` |  | |  | `bitfieldschema` | `CHAR(5)` | Field Derivation Schema for Billable Items |
| `CABllbleItmPackageNrOfItms` |  | |  | `bitpacknum` | `INT4(10)` | Number of Billable Main Items of Package |
| `CABllbleItmPackNoPrimary` |  | |  | `bitpkcno_primary` | `NUMC(8)` | Sequence Number of the Primary Item Package |
| `CABllbleItmPackageUUIDPrimary` |  | |  | `bitpkid_primary` | `RAW(16)` | GUID of the Primary Item Package |
| `CABllbleItmExternalReference` |  | |  | `bitref32` | `CHAR(32)` | External Reference of Billable Item (32 Places) |
| `CABllbleItmIsReversal` |  | |  | `bitreversal` | `CHAR(1)` | Reversal Item for Billable Item |
| `CABllbleItmIsReversed` |  | |  | `bitreversed` | `CHAR(1)` | Reversed Billable Item |
| `CABllbleItmStatus` |  | |  | `bitstatus` | `CHAR(1)` | Status of Billable Item |
| `CABllbleItmMainText` |  | |  | `bittext50` | `CHAR(50)` | Text of Main Billable Item (50 Characters) |
| `CABllbleItmTime` |  | |  | `bittime` | `TIMS(6)` | Time of Origin of Billable Item |
| `CABllbleItmStartTime` |  | |  | `bittime_from` | `TIMS(6)` | Time of the Start of the Usage Period |
| `CABllbleItmEndTime` |  | |  | `bittime_to` | `TIMS(6)` | Time of the End of the Usage Period |
| `CABllbleItmType` |  | |  | `bittype` | `CHAR(4)` | Type of Billable Item |
| `CABllbleItmAmount` |  | |  | `bit_amount` | `CURR(13)` | Amount of Billable Item |
| `CABllbleItmCurrency` |  | |  | `bit_curr` | `CUKY(5)` | Currency of Billable Item |
| `CABllbleItmQuantityGroup` |  | |  | `bit_qty_group` | `CHAR(4)` | Billing Quantity Quantity Group |
| `CABllbleItmQtyUnit` |  | |  | `bit_qty_unit` | `UNIT(3)` | Unit for the Billing Quantity of Billable Items |
| `CABllbleItmQty` |  | |  | `bit_quantity` | `QUAN(31)` | Billing Quantity of Billable Item |
| `CABllbleItmTaxAmount` |  | |  | `bit_tax_amount` | `CURR(13)` | Tax Amount |
| `CABllbleItmTaxAmountTaxCode` |  | |  | `cast(bit_tax_amt_mwskz as bit_tax_amt_mwskz_gfn_kk preserving type )` | `CHAR(2)` | Billable Item Tax Amount Tax Code |
| `CABllbleItmTaxAmountType` |  | |  | `bit_tax_amt_type` | `CHAR(1)` | Billable Item Tax Amount Type |
| `BusinessPartnerIDByExtSystem` |  | |  | `bpext` | `CHAR(20)` | Business Partner Number in External System |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CABllbleItmChgHistIsExstc` |  | |  | `chhist` | `CHAR(1)` | History Record Exists for Change |
| `CACnsmpnItmClass` |  | |  | `cast(citcat as citcat_gfn_kk preserving type )` | `CHAR(4)` | Consumption Item Class |
| `CACnsmpnItmID` |  | |  | `citid` | `CHAR(32)` | Consumption Item ID |
| `CACnsmpnItmIDType` |  | |  | `citidtype` | `CHAR(5)` | Type of Consumption Item ID |
| `ConditionType` |  | |  | `condition_type` | `CHAR(4)` | Condition Type |
| `CAProviderContractItemCharUUID` |  | |  | `cast (contractitemid as vtpid_c_gfn_kk preserving type )` | `CHAR(32)` | External GUID of Provider Contract Items (CHAR) |
| `CABllbleItmCostSubType` |  | |  | `cast(co_subtype as co_subtype_gfn_kk preserving type )` | `CHAR(8)` | Billable Item Cost Subtype |
| `CABllbleItmCostType` |  | |  | `cast(co_type as co_type_gfn_kk preserving type )` | `CHAR(8)` | Billable Item Cost Type |
| `CABllbleItmDiscountKey` |  | |  | `cast(disckey as disckey_gfn_kk preserving type )` | `CHAR(8)` | Discount/Charge Key |
| `CABllbleItmDiscountVersion` |  | |  | `disckey_versno` | `NUMC(2)` | Version Number of Disccount on Billable Items |
| `CADiscBaseItmAmount` |  | |  | `disc_base_amt` | `CURR(13)` | Base Amount of Discount/Charge Base Item |
| `CADiscBaseItmGroup` |  | |  | `disc_basgr` | `NUMC(4)` | Grouping of Base Items in Billing Document |
| `CADiscBaseItmNrOfBllbleItm` |  | |  | `disc_bit_number` | `INT4(10)` | Number of Billable Items of a Base Item |
| `CADiscBaseItmIsCalculationRlvt` |  | |  | `disc_calc_rel` | `CHAR(1)` | Item Relevant for Discount/Charge Calculation |
| `CADiscBaseItmIsConditionRlvt` |  | |  | `disc_cond_rel` | `CHAR(1)` | Item Relevant for Discount/Charge Condition |
| `CADiscBaseItmNrOfItmInGroup` |  | |  | `disc_grnum` | `INT1(3)` | Number of Base Items in Discount/Charge Group |
| `CADiscBaseItmProcessingLevel` |  | |  | `disc_level` | `NUMC(4)` | Processing Level for Discount/Charge in Billing |
| `CADiscBaseItmNrOfItmInBillgDoc` |  | |  | `disc_num` | `INT1(3)` | Number of Base Items in Billing Document |
| `CADependentItemReason` |  | |  | `ditrsn` | `CHAR(8)` | Dependent Item Reason |
| `CADependentItemType` |  | |  | `dittype` | `CHAR(8)` | Dependent Item Type |
| `CATaxDeterminationCode` |  | |  | `ermwskz` | `CHAR(2)` | Indicator: Tax Determination Code |
| `CAAltvTaxDeterminationCode` |  | |  | `ermwskz_b2b` | `CHAR(2)` | Alternative Tax Determination Code for Foreign Deliveries |
| `CABllbleItmExcptnHistIsExstc` |  | |  | `exchist` | `CHAR(1)` | History Record Exists for Exception |
| `CAExternalTaxDate` |  | |  | `ext_tax_date` | `DATS(8)` | External Tax Date |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CAFileItem` |  | |  | `file_item` | `CHAR(10)` | File Item |
| `BusinessPartner` |  | |  | `gpart` | `CHAR(10)` | Business Partner Number for Billing and Invoicing |
| `CABusinessPartnerPrimary` |  | |  | `gpart_primary` | `CHAR(10)` | Business Partner of Primary Item |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CAIntcoCompanyCodeRequesting` |  | |  | `ico_bukrs_req` | `CHAR(4)` | Requesting Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` | `CHAR(4)` | Supplying Company Code |
| `CAIntcoSubtype` |  | |  | `ico_subtype` | `CHAR(4)` | Intercompany Settlement Subtype |
| `CAIntcoType` |  | |  | `ico_type` | `CHAR(4)` | Intercompany Settlement Type |
| `CASubAreaForParallelization` | ✓ | |  | `keypp` | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CAAccountDeterminationCode` |  | |  | `kofiz` | `CHAR(2)` | Account Determination ID |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `CAInvcgMasterDataType` |  | |  | `mdcat` | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CAAltvTaxCode` |  | |  | `mwskz_b2b` | `CHAR(2)` | Alternative Tax Code for Deliveries Abroad |
| `CAInvcgIsNotBPRelevant` |  | |  | `not_bprel` | `CHAR(1)` | Not Relevant for Business Partner Items |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingGroup` |  | |  | `offset_group` | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` | `CHAR(20)` | Offsetting Reference Key |
| `CAPostingArea8120ExternalKey1` |  | |  | `cast(pa8120_pos_id1 as pa8120_pos_id1_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8120 External Key 1 |
| `CAPostingArea8120ExternalKey2` |  | |  | `cast(pa8120_pos_id2 as pa8120_pos_id1_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8120 External Key 1 |
| `CAPostingArea8120ExternalKey3` |  | |  | `cast(pa8120_pos_id3 as pa8120_pos_id2_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8120 External Key 2 |
| `CAPostingArea8120ExternalKey4` |  | |  | `cast(pa8120_pos_id4 as pa8120_pos_id3_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8120 External Key 3 |
| `CAPostingArea8121ExternalKey1` |  | |  | `cast(pa8121_pos_id1 as pa8121_pos_id1_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8121 External Key 1 |
| `CAPostingArea8121ExternalKey2` |  | |  | `cast(pa8121_pos_id2 as pa8121_pos_id2_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8121 External Key 2 |
| `CAPostingArea8121ExternalKey3` |  | |  | `cast(pa8121_pos_id3 as pa8121_pos_id3_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8121 External Key 3 |
| `CAPostingArea8121ExternalKey4` |  | |  | `cast(pa8121_pos_id4 as pa8121_pos_id4_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8121 External Key 4 |
| `CAPostingArea8122ExternalKey1` |  | |  | `cast(pa8122_pos_id1 as pa8122_pos_id1_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8122 External Key 1 |
| `CAPostingArea8122ExternalKey2` |  | |  | `cast(pa8122_pos_id2 as pa8122_pos_id2_gfn_kk preserving type )` | `CHAR(12)` | Posting Area 8120 External Key 2 |
| `CAInvcgIsItemPostingRelevant` |  | |  | `postrel` | `CHAR(1)` | Item Is Relevant for Posting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `CAInvcgIsItemPrintingRelevant` |  | |  | `printrel` | `CHAR(1)` | Item Is Relevant for Printing |
| `CAInvcgSubstituteGroupPrinting` |  | |  | `print_substitute` | `CHAR(4)` | Substitute Group for Invoice Printing |
| `CAPaymentMethod` |  | |  | `pymet` | `CHAR(1)` | Payment Method |
| `CABllbleItmGroupingPaymentData` |  | |  | `py_group` | `CHAR(8)` | Grouping of Payment Data Items |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevnAcctgRlvnceDetnType` |  | |  | `rarel_det_type` | `CHAR(1)` | Determination of Data Relevant for Revenue Accounting |
| `CARatingDate` |  | |  | `ratingdate` | `DATS(8)` | Date of Rating |
| `CARatingID` |  | |  | `ratingid` | `NUMC(20)` | Rating ID |
| `RAItemType` |  | |  | `cast(ra_item_type as rai_item_type_gfn_kk preserving type)` | `CHAR(2)` | Type of Revenue Accounting Item |
| `RAOriginalDocItemID` |  | |  | `ra_origdoc_id` | `CHAR(35)` | Original Item ID |
| `RAOriginalDocItemLogicalSystem` |  | |  | `cast(ra_origdoc_logsys as rai_orils_gfn_kk preserving type)` | `CHAR(10)` | Logical System of the Original Item |
| `RAOriginalDocItemType` |  | |  | `cast(ra_origdoc_type as rai_ority_gfn_kk preserving type)` | `CHAR(4)` | Revenue Accounting Original Item Type |
| `RevenueAccountingReference` |  | |  | `ra_refid` | `CHAR(30)` | Reference ID for Revenue Accounting |
| `RevenueAccountingRefType` |  | |  | `ra_reftype` | `CHAR(3)` | Reference Type for Revenue Accounting |
| `CABllbleItmPrimaryType` |  | |  | `reltype_primary` | `CHAR(2)` | Type of Relationship to Primary Item |
| `Segment` |  | |  | `segmt` | `CHAR(10)` | Segment for Segmental Reporting |
| `CABllbleItmControlOfUnit` |  | |  | `separate_inv` | `CHAR(1)` | Control of Billing and Invoicing Unit |
| `CARevenueAccountingServiceType` |  | |  | `service_type` | `CHAR(6)` | Service Type for Revenue Accounting |
| `CABllbleItmSimlnSts` |  | |  | `simulated` | `CHAR(1)` | Billable Item Is Simulated |
| `CABllbleItmExceptionDate` |  | |  | `excdate` | `DATS(8)` | Exception Date |
| `CABllbleItmExceptionTime` |  | |  | `exctime` | `TIMS(6)` | Time of Exception |
| `CABllbleItmExceptionReason` |  | |  | `excreason` | `CHAR(2)` | Exception/Reversal Reason for Billable Items |
| `CABllbleItmExceptionUserName` |  | |  | `excusnam` | `CHAR(12)` | Name of User Who Excepted the Item |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `CABllbleItmSrceTransIDCrrtd` |  | |  | `srctaid_corr` | `CHAR(22)` | Source Transaction ID of the Corrected Source Transaction |
| `CABllbleItmSourceTransIDPrim` |  | |  | `srctaid_primary` | `CHAR(22)` | Source Transaction ID of Primary Item |
| `CABllbleItmSourceTransItmID` |  | |  | `srctasubid` | `CHAR(10)` | Source Transaction Item ID |
| `CABllbleItmSrceTransItmIDCrrtd` |  | |  | `srctasubid_corr` | `CHAR(10)` | Source Trans. Item ID of the Corrected Source Transaction |
| `CABllbleItmSrceTransTypeCrrtd` |  | |  | `srctatype_corr` | `CHAR(5)` | Type of Corrected Source Transaction |
| `CABllbleItmSourceTransTypePrim` |  | |  | `srctaty_primary` | `CHAR(5)` | Source Transaction Type of Primary Item |
| `CABllbleItmSrceTransCrrtnCat` |  | |  | `srcta_corrcat` | `CHAR(2)` | Correction Category of Source Transaction |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CAOtherTaxCode` |  | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CASubApplicationPrimary` |  | |  | `subap_primary` | `CHAR(1)` | Subapplication of Contract of Primary Item |
| `CABillgSubprocess` |  | |  | `subprocess` | `CHAR(4)` | Subprocess of Billing |
| `CATaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Country/Region for Tax Report |
| `CATaxDateType` |  | |  | `tax_date_type` | `CHAR(2)` | Type of Tax Date |
| `CATaxDetnType` |  | |  | `tax_det_type` | `CHAR(2)` | Type of Tax Calculation |
| `CABllbleItmGroupingTaxData` |  | |  | `tax_group` | `CHAR(8)` | Grouping of Tax Items |
| `CATaxIsIncluded` |  | |  | `tax_included` | `CHAR(1)` | Tax Included in Amount |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `CABllbleItmGroupingTextData` |  | |  | `txt_group` | `CHAR(8)` | Grouping of Attachment Items |
| `ContractAccountExtReference` |  | |  | `vkona` | `CHAR(20)` | Contract Account Number in Legacy System |
| `CAContractAccountPrimary` |  | |  | `vkont_primary` | `CHAR(12)` | Contract Account of the Primary Item |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CAContractPrimary` |  | |  | `vtref_primary` | `CHAR(20)` | Contract of Primary Item |
| `CAIsDownPaymentRequest` |  | |  | `xanza` | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CABllbleItmPrimary` |  | |  | `xprimary` | `CHAR(1)` | Primary Billable Item |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CABllbleItmSrceTransType` | | ✓ | | | | |
| `_CABllbleItmSrceTransTypeCrrtd` | | ✓ | | | | |
| `_CABllbleItmSrceTransTypePrim` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CABusinessPartnerPrimary` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_CAContractAccountPrimary` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CAInvcgAccrualPostingType` | | ✓ | | | | |
| `_CABillgReqReason` | | ✓ | | | | |
| `_CABllbleItmClass` | | ✓ | | | | |
| `_CABllbleItmCreationMode` | | ✓ | | | | |
| `_CABllbleItmDataPackage` | | ✓ | | | | |
| `_CABllbleItmFieldDrvtnSchema` | | ✓ | | | | |
| `_CABllbleItmStatus` | | ✓ | | | | |
| `_CABllbleItmType` | | ✓ | | | | |
| `_CABllbleItmCurrency` | | ✓ | | | | |
| `_CAAmountPerUnitCurrency` | | ✓ | | | | |
| `_CABllbleItmQtyUnit` | | ✓ | | | | |
| `_CAAmountPerUnitQuantityUnit` | | ✓ | | | | |
| `_CABllbleItmTaxAmountType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CAIntcoCompanyCodeRequesting` | | ✓ | | | | |
| `_CAIntcoCompanyCodeSupplying` | | ✓ | | | | |
| `_CACnsmpnItmClass` | | ✓ | | | | |
| `_CACnsmpnItmIDType` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |
| `_CABllbleItmCostType` | | ✓ | | | | |
| `_CABllbleItmCostSubtype` | | ✓ | | | | |
| `_CABllbleItmDiscountKey` | | ✓ | | | | |
| `_CADependentItemReason` | | ✓ | | | | |
| `_CADependentItemType` | | ✓ | | | | |
| `_CABllbleItmExcptnReason` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CAMainTransaction` | | ✓ | | | | |
| `_CASubTransaction` | | ✓ | | | | |
| `_CAIntcoType` | | ✓ | | | | |
| `_CAIntcoSubtype` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_CAInvcgMasterDataType` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CAIsRevnAcctgRelevant` | | ✓ | | | | |
| `_CARevnAcctgRlvnceDetnType` | | ✓ | | | | |
| `_CARevenueAccountingRefType` | | ✓ | | | | |
| `_RAOriginalDocItemLogicalSyst` | | ✓ | | | | |
| `_RAItemType` | | ✓ | | | | |
| `_RAOriginalDocItemType` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CABllbleItmControlOfUnit` | | ✓ | | | | |
| `_CABllbleItmPrimaryType` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CABllbleItmSimlnSts` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CASubApplicationPrimary` | | ✓ | | | | |
| `_CABillgSubprocess` | | ✓ | | | | |
| `_CATaxCountry` | | ✓ | | | | |
| `_CATaxDateType` | | ✓ | | | | |
| `_CATaxDetnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CABllbleItmSrceTransType` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_CABllbleItmSrceTransTypeCrrtd` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_CABllbleItmSrceTransTypePrim` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CABusinessPartnerPrimary` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_CAContractAccountPrimary` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_CAInvcgAccrualPostingType` | `I_CAInvcgAccrualPostingType` | [0..1] |
| `_CABillgReqReason` | `I_CABillgReqReason` | [0..1] |
| `_CABllbleItmClass` | `I_CABllbleItmClass` | [0..1] |
| `_CABllbleItmCreationMode` | `I_CABllbleItmCreationMode` | [0..1] |
| `_CABllbleItmDataPackage` | `I_CABllbleItmDataPackage` | [0..1] |
| `_CABllbleItmFieldDrvtnSchema` | `I_CABllbleItmFieldDrvtnSchema` | [0..1] |
| `_CABllbleItmStatus` | `I_CABllbleItmStatus` | [0..1] |
| `_CABllbleItmType` | `I_CABllbleItmType` | [0..1] |
| `_CABllbleItmCurrency` | `I_Currency` | [0..1] |
| `_CAAmountPerUnitCurrency` | `I_Currency` | [0..1] |
| `_CABllbleItmQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CAAmountPerUnitQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CABllbleItmTaxAmountType` | `I_CABllbleItmTaxAmountType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeRequesting` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeSupplying` | `I_CompanyCode` | [0..1] |
| `_CACnsmpnItmClass` | `I_CACnsmpnItmClass` | [0..1] |
| `_CACnsmpnItmIDType` | `I_CACnsmpnItmIDType` | [0..1] |
| `_ConditionType` | `I_ConditionType` | [0..1] |
| `_CABllbleItmCostType` | `I_CABllbleItmCostType` | [0..1] |
| `_CABllbleItmCostSubtype` | `I_CABllbleItmCostSubtype` | [0..1] |
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_CADependentItemReason` | `I_CADependentItemReason` | [0..1] |
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_CABllbleItmExcptnReason` | `I_CABllbleItmExcptnReason` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAMainTransaction` | `I_CAMainTransaction` | [0..1] |
| `_CASubTransaction` | `I_CASubTransaction` | [0..1] |
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoSubtype` | `I_CAIntcoSubtype` | [0..1] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CAIsRevnAcctgRelevant` | `I_CAIsRevnAcctgRelevant` | [0..1] |
| `_CARevnAcctgRlvnceDetnType` | `I_CARevnAcctgRlvnceDetnType` | [0..1] |
| `_CARevenueAccountingRefType` | `I_CARevenueAccountingRefType` | [0..1] |
| `_RAOriginalDocItemLogicalSyst` | `I_LogicalSystem` | [0..1] |
| `_RAItemType` | `I_RAItemType` | [0..1] |
| `_RAOriginalDocItemType` | `I_RASndgCompDocumentItemType` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CABllbleItmControlOfUnit` | `I_CABllbleItmControlOfUnit` | [0..1] |
| `_CABllbleItmPrimaryType` | `I_CABllbleItmPrimaryType` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CABllbleItmSimlnSts` | `I_CABllbleItmSimlnSts` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CASubApplicationPrimary` | `I_CASubApplication` | [0..1] |
| `_CABillgSubprocess` | `I_CABillgSubProcess` | [0..1] |
| `_CATaxCountry` | `I_Country` | [0..1] |
| `_CATaxDateType` | `I_CATaxDateType` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_Extension` | `E_CABllbleItmMainRawExcptd` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABLLBLEITMMAINRAWEXCPTD')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'CABllbleItmMainRawExcptd',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Billable Item Main Data Raw Excepted'
define view entity I_CABllbleItmMainRawExcptd
  as select from /1fe/00sap1it as _0SAP01T
  association [0..1] to I_CAApplicationArea           as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CABllbleItmSrceTransType    as _CABllbleItmSrceTransType      on  $projection.CABllbleItmSourceTransType = _CABllbleItmSrceTransType.CABllbleItmSourceTransType
  association [0..1] to I_CABllbleItmSrceTransType    as _CABllbleItmSrceTransTypeCrrtd on  $projection.CABllbleItmSrceTransTypeCrrtd = _CABllbleItmSrceTransTypeCrrtd.CABllbleItmSourceTransType
  association [0..1] to I_CABllbleItmSrceTransType    as _CABllbleItmSrceTransTypePrim  on  $projection.CABllbleItmSourceTransTypePrim = _CABllbleItmSrceTransTypePrim.CABllbleItmSourceTransType
  association [0..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _CABusinessPartnerPrimary      on  $projection.CABusinessPartnerPrimary = _CABusinessPartnerPrimary.BusinessPartner
  association [0..1] to I_ContractAccountHeader       as _ContractAccountHeader         on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _CAContractAccountPrimary      on  $projection.CAContractAccountPrimary = _CAContractAccountPrimary.ContractAccount
  association [0..1] to I_ContractAccountPartner      as _ContractAccountPartner        on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                        and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  //  association [0..1] to I_CAAllowance                 as _CAAllowance                   on  $projection.CAAllowance = _CAAllowance.CAAllowance
  association [0..1] to I_CAInvcgAccrualPostingType   as _CAInvcgAccrualPostingType     on  $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType
  association [0..1] to I_CABillgReqReason            as _CABillgReqReason              on  $projection.CABillgReqReason = _CABillgReqReason.CABillgReqReason
  association [0..1] to I_CABllbleItmClass            as _CABllbleItmClass              on  $projection.CABllbleItmClass = _CABllbleItmClass.CABllbleItmClass
  association [0..1] to I_CABllbleItmCreationMode     as _CABllbleItmCreationMode       on  $projection.CABllbleItmCreationMode = _CABllbleItmCreationMode.CABllbleItmCreationMode
  association [0..1] to I_CABllbleItmDataPackage      as _CABllbleItmDataPackage        on  $projection.CABllbleItmClass         = _CABllbleItmDataPackage.CABllbleItmClass
                                                                                        and $projection.CABllbleItmDataPackageID = _CABllbleItmDataPackage.CABllbleItmDataPackageID
  association [0..1] to I_CABllbleItmFieldDrvtnSchema as _CABllbleItmFieldDrvtnSchema   on  $projection.CABllbleItmFieldDrvtnSchema = _CABllbleItmFieldDrvtnSchema.CABllbleItmFieldDrvtnSchema
  association [0..1] to I_CABllbleItmStatus           as _CABllbleItmStatus             on  $projection.CABllbleItmStatus = _CABllbleItmStatus.CABllbleItmStatus
  association [0..1] to I_CABllbleItmType             as _CABllbleItmType               on  $projection.CABllbleItmType = _CABllbleItmType.CABllbleItmType
  association [0..1] to I_Currency                    as _CABllbleItmCurrency           on  $projection.CABllbleItmCurrency = _CABllbleItmCurrency.Currency
  association [0..1] to I_Currency                    as _CAAmountPerUnitCurrency       on  $projection.CAAmountPerUnitCurrency = _CAAmountPerUnitCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _CABllbleItmQtyUnit            on  $projection.CABllbleItmQtyUnit = _CABllbleItmQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _CAAmountPerUnitQuantityUnit   on  $projection.CAAmountPerUnitQuantityUnit = _CAAmountPerUnitQuantityUnit.UnitOfMeasure
  association [0..1] to I_CABllbleItmTaxAmountType    as _CABllbleItmTaxAmountType      on  $projection.CABllbleItmTaxAmountType = _CABllbleItmTaxAmountType.CABllbleItmTaxAmountType
  association [0..1] to I_CompanyCode                 as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CAIntcoCompanyCodeRequesting  on  $projection.CAIntcoCompanyCodeRequesting = _CAIntcoCompanyCodeRequesting.CompanyCode
  association [0..1] to I_CompanyCode                 as _CAIntcoCompanyCodeSupplying   on  $projection.CAIntcoCompanyCodeSupplying = _CAIntcoCompanyCodeSupplying.CompanyCode
  association [0..1] to I_CACnsmpnItmClass            as _CACnsmpnItmClass              on  $projection.CACnsmpnItmClass = _CACnsmpnItmClass.CACnsmpnItmClass
  association [0..1] to I_CACnsmpnItmIDType           as _CACnsmpnItmIDType             on  $projection.CACnsmpnItmIDType = _CACnsmpnItmIDType.CACnsmpnItmIDType
  association [0..1] to I_ConditionType               as _ConditionType                 on  $projection.ConditionType           = _ConditionType.ConditionType
                                                                                        and _ConditionType.ConditionUsage       = 'A'
                                                                                        and _ConditionType.ConditionApplication = 'V'
  association [0..1] to I_CABllbleItmCostType         as _CABllbleItmCostType           on  $projection.CABllbleItmCostType = _CABllbleItmCostType.CABllbleItmCostType
  association [0..1] to I_CABllbleItmCostSubtype      as _CABllbleItmCostSubtype        on  $projection.CABllbleItmCostType    = _CABllbleItmCostSubtype.CABllbleItmCostType
                                                                                        and $projection.CABllbleItmCostSubType = _CABllbleItmCostSubtype.CABllbleItmCostSubType
  association [0..1] to I_CABllbleItmDiscountKey      as _CABllbleItmDiscountKey        on  $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_CADependentItemReason       as _CADependentItemReason         on  $projection.CADependentItemReason = _CADependentItemReason.CADependentItemReason
  association [0..1] to I_CADependentItemType         as _CADependentItemType           on  $projection.CADependentItemType = _CADependentItemType.CADependentItemType
  association [0..1] to I_CABllbleItmExcptnReason     as _CABllbleItmExcptnReason       on  $projection.CABllbleItmExceptionReason = _CABllbleItmExcptnReason.CABllbleItmExceptionReason
  //  association [0..1] to I_CABllbleItmExtnType         as _CABllbleItmExtnType           on  $projection.CABllbleItmExtnType = _CABllbleItmExtnType.CABllbleItmExtnType
  association [0..1] to I_BusinessArea                as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CAMainTransaction           as _CAMainTransaction             on  $projection.CAMainTransaction = _CAMainTransaction.CAMainTransaction
                                                                                        and $projection.CAApplicationArea = _CAMainTransaction.CAApplicationArea
  association [0..1] to I_CASubTransaction            as _CASubTransaction              on  $projection.CAMainTransaction = _CASubTransaction.CAMainTransaction
                                                                                        and $projection.CASubTransaction  = _CASubTransaction.CASubTransaction
                                                                                        and $projection.CAApplicationArea = _CASubTransaction.CAApplicationArea
  association [0..1] to I_CAIntcoType                 as _CAIntcoType                   on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_CAIntcoSubtype              as _CAIntcoSubtype                on  $projection.CAIntcoType    = _CAIntcoSubtype.CAIntcoType
                                                                                        and $projection.CAIntcoSubtype = _CAIntcoSubtype.CAIntcoSubtype
  association [0..1] to I_CAAccountDetnCode           as _CAAccountDetnCode             on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_Material                    as _Material                      on  $projection.Material = _Material.Material
  association [0..1] to I_CAInvcgMasterDataType       as _CAInvcgMasterDataType         on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_CAInvcgOffsettingAction     as _CAInvcgOffsettingAction       on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CAInvcgOffsettingCategory   as _CAInvcgOffsettingCategory     on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure  as _CAInvcgOffsettingProcedure    on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  //  association [0..1] to I_WBSElement                  as _WBSElement                    on  $projection.WBSEelement = _WBSElement.WBSElement
  association [0..1] to I_CAIsRevnAcctgRelevant       as _CAIsRevnAcctgRelevant         on  $projection.CAIsRevenueAccountingRelevant = _CAIsRevnAcctgRelevant.CAIsRevenueAccountingRelevant
  association [0..1] to I_CARevnAcctgRlvnceDetnType   as _CARevnAcctgRlvnceDetnType     on  $projection.CARevnAcctgRlvnceDetnType = _CARevnAcctgRlvnceDetnType.CARevnAcctgRlvnceDetnType
  association [0..1] to I_CARevenueAccountingRefType  as _CARevenueAccountingRefType    on  $projection.RevenueAccountingRefType = _CARevenueAccountingRefType.CARevenueAccountingRefType
  association [0..1] to I_LogicalSystem               as _RAOriginalDocItemLogicalSyst  on  $projection.RAOriginalDocItemLogicalSystem = _RAOriginalDocItemLogicalSyst.LogicalSystem
  association [0..1] to I_RAItemType                  as _RAItemType                    on  $projection.RAItemType = _RAItemType.RAItemType
  association [0..1] to I_RASndgCompDocumentItemType  as _RAOriginalDocItemType         on  $projection.RAOriginalDocItemType = _RAOriginalDocItemType.RASndgCompDocumentItemType
  association [0..1] to I_Segment                     as _Segment                       on  $projection.Segment = _Segment.Segment
  association [0..1] to I_CABllbleItmControlOfUnit    as _CABllbleItmControlOfUnit      on  $projection.CABllbleItmControlOfUnit = _CABllbleItmControlOfUnit.CABllbleItmControlOfUnit
  association [0..1] to I_CABllbleItmPrimaryType      as _CABllbleItmPrimaryType        on  $projection.CABllbleItmPrimaryType = _CABllbleItmPrimaryType.CABllbleItmPrimaryType
  association [0..1] to I_CARevnAcctgServiceType      as _CARevnAcctgServiceType        on  $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CABllbleItmSimlnSts         as _CABllbleItmSimlnSts           on  $projection.CABllbleItmSimlnSts = _CABllbleItmSimlnSts.CABllbleItmSimlnSts
  association [0..1] to I_Division                    as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_CAStatisticalItemCode       as _CAStatisticalItemCode         on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CASubApplication            as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CASubApplication            as _CASubApplicationPrimary       on  $projection.CASubApplicationPrimary = _CASubApplicationPrimary.CASubApplication
  association [0..1] to I_CABillgSubProcess           as _CABillgSubprocess             on  $projection.CABillgSubprocess = _CABillgSubprocess.CABillgSubprocess
  association [0..1] to I_Country                     as _CATaxCountry                  on  $projection.CATaxCountry = _CATaxCountry.Country
  association [0..1] to I_CATaxDateType               as _CATaxDateType                 on  $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_CATaxDetnType               as _CATaxDetnType                 on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType

  // extension
  association [0..1] to E_CABllbleItmMainRawExcptd    as _Extension                     on  $projection.CABllbleItmPackNo          = _Extension.CABllbleItmPackNo
                                                                                        and $projection.CABllbleItmPackageUUID     = _Extension.CABllbleItmPackageUUID
                                                                                        and $projection.CABllbleItmSourceTransId   = _Extension.CABllbleItmSourceTransId
                                                                                        and $projection.CABllbleItmSourceTransType = _Extension.CABllbleItmSourceTransType
{
  key      bitpackuuid                                                          as CABllbleItmPackageUUID,
  key      bitpackcno                                                           as CABllbleItmPackNo,
  key      srctaid                                                              as CABllbleItmSourceTransId,

           @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransType'
  key      cast(srctatype as srctatype_gfn_kk preserving type )                 as CABllbleItmSourceTransType,

           @ObjectModel.foreignKey.association: '_ContractAccountHeader'
           vkont                                                                as ContractAccount,

           //           @ObjectModel.foreignKey.association: '_CAAllowance'
           //           allowance                                                            as CAAllowance, -- op only
           //           allowance_id                                                         as CAAllowanceID, -- op only

           @Semantics.amount.currencyCode: 'CAAmountPerUnitCurrency'
           amount_per_unit_amnt                                                 as CAAmountPerUnitAmount,

           @ObjectModel.foreignKey.association: '_CAAmountPerUnitCurrency'
           amount_per_unit_cuky                                                 as CAAmountPerUnitCurrency,

           @ObjectModel.foreignKey.association: '_CAAmountPerUnitQuantityUnit'
           amount_per_unit_qtyu                                                 as CAAmountPerUnitQuantityUnit,

           @Semantics.quantity.unitOfMeasure: 'CAAmountPerUnitQuantityUnit'
           amount_per_unit_quan                                                 as CAAmountPerUnitQuantity,

           @ObjectModel.foreignKey.association: '_CAApplicationArea'
           applk                                                                as CAApplicationArea,

           @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
           cast(billac_type as billac_type_gfn_kk preserving type )             as CAInvcgAccrualPostingType,

           @ObjectModel.foreignKey.association: '_CABillgReqReason'
           cast(billreqrsn as billreqrsn_gfn_kk preserving type )               as CABillgReqReason,

           bill_basedate                                                        as CABillgBaseDate,
           bill_first                                                           as CABillgFirstDate,

           @ObjectModel.foreignKey.association: '_CABllbleItmClass'
           bitcat                                                               as CABllbleItmClass,
           bitcrdate                                                            as CABllbleItmCreationDate,

           @ObjectModel.foreignKey.association: '_CABllbleItmCreationMode'
           bitcrmode                                                            as CABllbleItmCreationMode,
           bitcrtime                                                            as CABllbleItmCreationTime,

           @ObjectModel.foreignKey.association: '_CABllbleItmDataPackage'
           bitdatapackid                                                        as CABllbleItmDataPackageID,
           bitdate                                                              as CABllbleItmDate,
           bitdate_from                                                         as CABllbleItmStartDate,
           bitdate_to                                                           as CABllbleItmEndDate,

           @ObjectModel.foreignKey.association: '_CABllbleItmFieldDrvtnSchema'
           bitfieldschema                                                       as CABllbleItmFieldDrvtnSchema,
           bitpacknum                                                           as CABllbleItmPackageNrOfItms,
           bitpkcno_primary                                                     as CABllbleItmPackNoPrimary,
           //           cast(bitpkid_primary as bitpkdid_gfn_primary preserving type)       as CABllbleItmPackageUUIDPrimary,
           bitpkid_primary                                                      as CABllbleItmPackageUUIDPrimary,
           bitref32                                                             as CABllbleItmExternalReference,
           bitreversal                                                          as CABllbleItmIsReversal,
           bitreversed                                                          as CABllbleItmIsReversed,

           @ObjectModel.foreignKey.association: '_CABllbleItmStatus'
           bitstatus                                                            as CABllbleItmStatus,
           bittext50                                                            as CABllbleItmMainText,
           bittime                                                              as CABllbleItmTime,
           bittime_from                                                         as CABllbleItmStartTime,
           bittime_to                                                           as CABllbleItmEndTime,

           @ObjectModel.foreignKey.association: '_CABllbleItmType'
           bittype                                                              as CABllbleItmType,

           @Semantics.amount.currencyCode: 'CABllbleItmCurrency'
           bit_amount                                                           as CABllbleItmAmount,

           @ObjectModel.foreignKey.association: '_CABllbleItmCurrency'
           bit_curr                                                             as CABllbleItmCurrency,

           bit_qty_group                                                        as CABllbleItmQuantityGroup,

           @ObjectModel.foreignKey.association: '_CABllbleItmQtyUnit'
           bit_qty_unit                                                         as CABllbleItmQtyUnit,

           @Semantics.quantity.unitOfMeasure: 'CABllbleItmQtyUnit'
           bit_quantity                                                         as CABllbleItmQty,

           @Semantics.amount.currencyCode: 'CABllbleItmCurrency'
           bit_tax_amount                                                       as CABllbleItmTaxAmount,

           //           @ObjectModel.foreignKey.association: '_CABllbleItmTaxAmountTaxCode' - not unique
           cast(bit_tax_amt_mwskz as bit_tax_amt_mwskz_gfn_kk preserving type ) as CABllbleItmTaxAmountTaxCode,

           @ObjectModel.foreignKey.association: '_CABllbleItmTaxAmountType'
           bit_tax_amt_type                                                     as CABllbleItmTaxAmountType,

           bpext                                                                as BusinessPartnerIDByExtSystem,

           @ObjectModel.foreignKey.association: '_CompanyCode'
           bukrs                                                                as CompanyCode,

           chhist                                                               as CABllbleItmChgHistIsExstc,

           @ObjectModel.foreignKey.association: '_CACnsmpnItmClass'
           cast(citcat as citcat_gfn_kk preserving type )                       as CACnsmpnItmClass,

           citid                                                                as CACnsmpnItmID,

           @ObjectModel.foreignKey.association: '_CACnsmpnItmIDType'
           citidtype                                                            as CACnsmpnItmIDType,

           @ObjectModel.foreignKey.association: '_ConditionType'
           condition_type                                                       as ConditionType,

           cast (contractitemid as vtpid_c_gfn_kk preserving type )             as CAProviderContractItemCharUUID,

           @ObjectModel.foreignKey.association: '_CABllbleItmCostSubtype'
           cast(co_subtype as co_subtype_gfn_kk preserving type )               as CABllbleItmCostSubType,

           @ObjectModel.foreignKey.association: '_CABllbleItmCostType'
           cast(co_type as co_type_gfn_kk preserving type )                     as CABllbleItmCostType,

           @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
           cast(disckey as disckey_gfn_kk preserving type )                     as CABllbleItmDiscountKey,

           disckey_versno                                                       as CABllbleItmDiscountVersion,

           @Semantics.amount.currencyCode: 'CABllbleItmCurrency'
           disc_base_amt                                                        as CADiscBaseItmAmount,
           disc_basgr                                                           as CADiscBaseItmGroup,
           disc_bit_number                                                      as CADiscBaseItmNrOfBllbleItm,
           disc_calc_rel                                                        as CADiscBaseItmIsCalculationRlvt,
           disc_cond_rel                                                        as CADiscBaseItmIsConditionRlvt,
           disc_grnum                                                           as CADiscBaseItmNrOfItmInGroup,
           disc_level                                                           as CADiscBaseItmProcessingLevel,
           disc_num                                                             as CADiscBaseItmNrOfItmInBillgDoc,

           @ObjectModel.foreignKey.association: '_CADependentItemReason'
           ditrsn                                                               as CADependentItemReason,

           @ObjectModel.foreignKey.association: '_CADependentItemType'
           dittype                                                              as CADependentItemType,

           ermwskz                                                              as CATaxDeterminationCode,
           ermwskz_b2b                                                          as CAAltvTaxDeterminationCode,
           exchist                                                              as CABllbleItmExcptnHistIsExstc,

           //           extn_id                                                              as CABllbleItmExtnID, -- op only
           //           extn_subid                                                           as CABllbleItmExtnItmID, -- op only
           //
           //           @ObjectModel.foreignKey.association: '_CABllbleItmExtnType'
           //           extn_type                                                            as CABllbleItmExtnType, -- op only
           ext_tax_date                                                         as CAExternalTaxDate,
           faedn                                                                as CANetDueDate,
           file_item                                                            as CAFileItem,

           @ObjectModel.foreignKey.association: '_BusinessPartner'
           gpart                                                                as BusinessPartner,

           @ObjectModel.foreignKey.association: '_CABusinessPartnerPrimary'
           gpart_primary                                                        as CABusinessPartnerPrimary,

           @ObjectModel.foreignKey.association: '_BusinessArea'
           gsber                                                                as BusinessArea,

           @ObjectModel.foreignKey.association: '_CAMainTransaction'
           hvorg                                                                as CAMainTransaction,

           @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeRequesting'
           ico_bukrs_req                                                        as CAIntcoCompanyCodeRequesting,

           @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeSupplying'
           ico_bukrs_sup                                                        as CAIntcoCompanyCodeSupplying,

           @ObjectModel.foreignKey.association: '_CAIntcoSubtype'
           ico_subtype                                                          as CAIntcoSubtype,

           @ObjectModel.foreignKey.association: '_CAIntcoType'
           ico_type                                                             as CAIntcoType,

           keypp                                                                as CASubAreaForParallelization,

           @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
           kofiz                                                                as CAAccountDeterminationCode,

           @ObjectModel.foreignKey.association: '_Material'
           matnr                                                                as Material,

           @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
           mdcat                                                                as CAInvcgMasterDataType,

           mwskz                                                                as TaxCode,
           mwskz_b2b                                                            as CAAltvTaxCode,
           not_bprel                                                            as CAInvcgIsNotBPRelevant,
           @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
           offset_action                                                        as CAInvcgOffsettingAction,
           @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
           offset_cat                                                           as CAInvcgOffsettingCategory,
           offset_group                                                         as CAInvcgOffsettingGroup,
           @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
           offset_proc                                                          as CAInvcgOffsettingProcedure,
           offset_refid                                                         as CAInvcgOffsettingReferenceKey,
           cast(pa8120_pos_id1 as pa8120_pos_id1_gfn_kk preserving type )       as CAPostingArea8120ExternalKey1,
           cast(pa8120_pos_id2 as pa8120_pos_id1_gfn_kk preserving type )       as CAPostingArea8120ExternalKey2,
           cast(pa8120_pos_id3 as pa8120_pos_id2_gfn_kk preserving type )       as CAPostingArea8120ExternalKey3,
           cast(pa8120_pos_id4 as pa8120_pos_id3_gfn_kk preserving type )       as CAPostingArea8120ExternalKey4,
           cast(pa8121_pos_id1 as pa8121_pos_id1_gfn_kk preserving type )       as CAPostingArea8121ExternalKey1,
           cast(pa8121_pos_id2 as pa8121_pos_id2_gfn_kk preserving type )       as CAPostingArea8121ExternalKey2,
           cast(pa8121_pos_id3 as pa8121_pos_id3_gfn_kk preserving type )       as CAPostingArea8121ExternalKey3,
           cast(pa8121_pos_id4 as pa8121_pos_id4_gfn_kk preserving type )       as CAPostingArea8121ExternalKey4,
           cast(pa8122_pos_id1 as pa8122_pos_id1_gfn_kk preserving type )       as CAPostingArea8122ExternalKey1,
           cast(pa8122_pos_id2 as pa8122_pos_id2_gfn_kk preserving type )       as CAPostingArea8122ExternalKey2,
           postrel                                                              as CAInvcgIsItemPostingRelevant,
           prctr                                                                as ProfitCenter,
           //           prepaid                                                              as CAIsPrepaid, -- op only
           printrel                                                             as CAInvcgIsItemPrintingRelevant,
           print_substitute                                                     as CAInvcgSubstituteGroupPrinting,

           //           @VDM.lifecycle.status:    #DEPRECATED
           //           @VDM.lifecycle.successor: '???'
           //           @ObjectModel.foreignKey.association: '_WBSElement'
           //           cast( ps_posid as fis_wbs_no_conv preserving type )                  as WBSElement,

           pymet                                                                as CAPaymentMethod,
           py_group                                                             as CABllbleItmGroupingPaymentData,

           @ObjectModel.foreignKey.association: '_CAIsRevnAcctgRelevant'
           rarel                                                                as CAIsRevenueAccountingRelevant,

           @ObjectModel.foreignKey.association: '_CARevnAcctgRlvnceDetnType'
           rarel_det_type                                                       as CARevnAcctgRlvnceDetnType,
           ratingdate                                                           as CARatingDate,
           ratingid                                                             as CARatingID,

           @ObjectModel.foreignKey.association: '_RAItemType'
           cast(ra_item_type as rai_item_type_gfn_kk preserving type)           as RAItemType,
           ra_origdoc_id                                                        as RAOriginalDocItemID,

           @ObjectModel.foreignKey.association: '_RAOriginalDocItemLogicalSyst'
           cast(ra_origdoc_logsys as rai_orils_gfn_kk preserving type)          as RAOriginalDocItemLogicalSystem,

           @ObjectModel.foreignKey.association: '_RAOriginalDocItemType'
           cast(ra_origdoc_type as rai_ority_gfn_kk preserving type)            as RAOriginalDocItemType,
           ra_refid                                                             as RevenueAccountingReference,

           @ObjectModel.foreignKey.association: '_CARevenueAccountingRefType'
           ra_reftype                                                           as RevenueAccountingRefType,

           @ObjectModel.foreignKey.association: '_CABllbleItmPrimaryType'
           reltype_primary                                                      as CABllbleItmPrimaryType,

           @ObjectModel.foreignKey.association: '_Segment'
           segmt                                                                as Segment,

           @ObjectModel.foreignKey.association: '_CABllbleItmControlOfUnit'
           separate_inv                                                         as CABllbleItmControlOfUnit,

           @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
           service_type                                                         as CARevenueAccountingServiceType,

           @ObjectModel.foreignKey.association: '_CABllbleItmSimlnSts'
           simulated                                                            as CABllbleItmSimlnSts,

           excdate                                                              as CABllbleItmExceptionDate,
           exctime                                                              as CABllbleItmExceptionTime,

           @ObjectModel.foreignKey.association: '_CABllbleItmExcptnReason'
           excreason                                                            as CABllbleItmExceptionReason,

           excusnam                                                             as CABllbleItmExceptionUserName,

           @ObjectModel.foreignKey.association: '_Division'
           spart                                                                as Division,
           srctaid_corr                                                         as CABllbleItmSrceTransIDCrrtd,
           srctaid_primary                                                      as CABllbleItmSourceTransIDPrim,
           srctasubid                                                           as CABllbleItmSourceTransItmID,
           srctasubid_corr                                                      as CABllbleItmSrceTransItmIDCrrtd,

           @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransTypeCrrtd'
           srctatype_corr                                                       as CABllbleItmSrceTransTypeCrrtd,

           @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransTypePrim'
           srctaty_primary                                                      as CABllbleItmSourceTransTypePrim,
           srcta_corrcat                                                        as CABllbleItmSrceTransCrrtnCat,

           @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
           stakz                                                                as CAStatisticalItemCode,
           strkz                                                                as CAOtherTaxCode,

           @ObjectModel.foreignKey.association: '_CASubApplication'
           subap                                                                as CASubApplication,

           @ObjectModel.foreignKey.association: '_CASubApplicationPrimary'
           subap_primary                                                        as CASubApplicationPrimary,

           @ObjectModel.foreignKey.association: '_CABillgSubprocess'
           subprocess                                                           as CABillgSubprocess,

           @ObjectModel.foreignKey.association: '_CATaxCountry'
           tax_country                                                          as CATaxCountry,

           @ObjectModel.foreignKey.association: '_CATaxDateType'
           tax_date_type                                                        as CATaxDateType,

           @ObjectModel.foreignKey.association: '_CATaxDetnType'
           tax_det_type                                                         as CATaxDetnType,
           tax_group                                                            as CABllbleItmGroupingTaxData,
           tax_included                                                         as CATaxIsIncluded,

           @ObjectModel.foreignKey.association: '_CASubTransaction'
           tvorg                                                                as CASubTransaction,
           txjcd                                                                as TaxJurisdiction,
           txt_group                                                            as CABllbleItmGroupingTextData,
           vkona                                                                as ContractAccountExtReference,

           @ObjectModel.foreignKey.association: '_CAContractAccountPrimary'
           vkont_primary                                                        as CAContractAccountPrimary,
           vtpos                                                                as CAProviderContractItemNumber,
           vtref                                                                as CAContract,
           vtref_primary                                                        as CAContractPrimary,
           xanza                                                                as CAIsDownPaymentRequest,
           xprimary                                                             as CABllbleItmPrimary,

           //          Associations
           _CAApplicationArea,
           _CABllbleItmSrceTransType,
           _CABllbleItmSrceTransTypeCrrtd,
           _CABllbleItmSrceTransTypePrim,
           _BusinessPartner,
           _CABusinessPartnerPrimary,
           _ContractAccountHeader,
           _CAContractAccountPrimary,
           _ContractAccountPartner,
           //           _CAAllowance,
           _CAInvcgAccrualPostingType,
           _CABillgReqReason,
           _CABllbleItmClass,
           _CABllbleItmCreationMode,
           _CABllbleItmDataPackage,
           _CABllbleItmFieldDrvtnSchema,
           _CABllbleItmStatus,
           _CABllbleItmType,
           _CABllbleItmCurrency,
           _CAAmountPerUnitCurrency,
           _CABllbleItmQtyUnit,
           _CAAmountPerUnitQuantityUnit,
           _CABllbleItmTaxAmountType,
           _CompanyCode,
           _CAIntcoCompanyCodeRequesting,
           _CAIntcoCompanyCodeSupplying,
           _CACnsmpnItmClass,
           _CACnsmpnItmIDType,
           _ConditionType,
           _CABllbleItmCostType,
           _CABllbleItmCostSubtype,
           _CABllbleItmDiscountKey,
           _CADependentItemReason,
           _CADependentItemType,
           _CABllbleItmExcptnReason,
           //           _CABllbleItmExtnType,
           _BusinessArea,
           _CAMainTransaction,
           _CASubTransaction,
           _CAIntcoType,
           _CAIntcoSubtype,
           _CAAccountDetnCode,
           _Material,
           _CAInvcgMasterDataType,
           _CAInvcgOffsettingAction,
           _CAInvcgOffsettingCategory,
           _CAInvcgOffsettingProcedure,
           //           _WBSElement,
           _CAIsRevnAcctgRelevant,
           _CARevenueAccountingRefType,
           _CARevnAcctgRlvnceDetnType,
           _RAOriginalDocItemLogicalSyst,
           _RAItemType,
           _RAOriginalDocItemType,
           _CABllbleItmPrimaryType,
           _Segment,
           _CABllbleItmControlOfUnit,
           _CARevnAcctgServiceType,
           _CABllbleItmSimlnSts,
           _Division,
           _CAStatisticalItemCode,
           _CASubApplication,
           _CASubApplicationPrimary,
           _CABillgSubprocess,
           _CATaxCountry,
           _CATaxDateType,
           _CATaxDetnType
}
```
