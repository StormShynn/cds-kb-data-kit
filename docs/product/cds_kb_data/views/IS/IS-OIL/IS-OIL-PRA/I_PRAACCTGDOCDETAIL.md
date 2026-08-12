---
name: I_PRAACCTGDOCDETAIL
description: "PRA Accounting Document Detail"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCDETAIL')/$value
semantic_en: "PRA Accounting Document Detail"
semantic_vi: "PRA Accounting Document Detail — CDS view giao diện dựa trên PRA Accounting Document Detail."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "detail"
  - "company"
  - "code"
  - "fiscal"
  - "period"
  - "item"
  - "major"
  - "product"
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCTGDOCDETAIL

**PRA Accounting Document Detail**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `FiscalPeriod` | ✓ | |  | `cast (acct_period as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `AccountingDocument` | ✓ | |  | `doc_no` | `CHAR(10)` | Revenue Accounting Document Number |
| `AccountingDocumentItem` | ✓ | |  | `line_no` | `NUMC(8)` | Accounting Document Line Number |
| `MajorProduct` |  | | `_Product` | `MajorProduct` | `CHAR(1)` | Major product code |
| `MinorProduct` |  | | `_Product` | `MinorProduct` | `CHAR(2)` | Minor Product Code |
| `ItemIsRejected` |  | |  | `rej_fl` | `CHAR(1)` | Accounting Document rejection flag |
| `GLAccount` |  | |  | `acct_no` | `CHAR(10)` | G/L Account Number |
| `GLAccountType` |  | |  | `acct_type_cd` | `CHAR(2)` | Account Type |
| `AcctDeterminationCategory` |  | |  | `acct_cat_cd` | `CHAR(4)` | Account category code |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit Venture |
| `Product` |  | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `DocumentItemText` |  | |  | `line_desc` | `CHAR(60)` | PRA Account Documnet Line Item's Description |
| `Well` |  | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` |  | |  | `mp_no` | `CHAR(20)` | Measurement point number |
| `PRAContract` |  | |  | `vbeln` | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  | `vl_type_cd` | `CHAR(2)` | Volume Type Code |
| `SalesDate` |  | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `CostCenter` |  | |  | `cast( kostl as fis_kostl )` | `CHAR(10)` | Cost Center |
| `Country` |  | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `ProcessingCompanyCode` |  | |  | `proc_bukrs` | `CHAR(4)` | Processing Company Code |
| `Purchaser` |  | |  | `pur_no` | `CHAR(10)` | Purchaser Number |
| `PressureBaseQty` |  | |  | `ps_base_qy` | `QUAN(13)` | Pressure Base |
| `ItemIsSummarizedByProduct` |  | |  | `pd_cd_sum_ind` | `CHAR(1)` | PRA Product Code Summarize Indicator |
| `ItemIsWriteOff` |  | |  | `writeoff` | `CHAR(1)` | Accounting Document Writeoff flag |
| `ItemIsCleared` |  | |  | `clrng_fl` | `CHAR(1)` | Accounting Document Clearing |
| `OriginatingMeasurementPt` |  | |  | `orig_mp_no` | `CHAR(20)` | Originating Measurement Point Number |
| `AffiliatedCompanyCode` |  | |  | `intercocd` | `CHAR(4)` | Affiliated Company |
| `TaxClassification` |  | |  | `tax_cls` | `CHAR(4)` | Tax Class |
| `PriorPeriodAdjustmentReason` |  | |  | `ppa_rsn_cd` | `CHAR(2)` | Adjustment Reason Code |
| `County` |  | |  | `counc` | `CHAR(3)` | County Code |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `RelatedPRAContract` |  | |  | `related_vbeln` | `CHAR(10)` | Related contract number |
| `ProductBalancingAgreement` |  | |  | `pba_no` | `CHAR(10)` | PBA Number |
| `GasPlantJointVenture` |  | |  | `gplt_vname` | `CHAR(6)` | Gas Plant Venture |
| `GasPlantDivisionOfInterest` |  | |  | `gplt_doi_no` | `CHAR(5)` | Gasplant DOI No |
| `PRAContractType` |  | |  | `ct_type_cd` | `CHAR(2)` | Contract Type |
| `Transporter` |  | |  | `trnsp_no` | `CHAR(10)` | Transporter number |
| `PartnerCompany` |  | |  | `trd_partnr` | `CHAR(6)` | Trading Partner |
| `Remitter` |  | |  | `remt_no` | `CHAR(10)` | Remitter (Customer) |
| `AcctsRblMeasurementPt` |  | |  | `ar_mp_no` | `CHAR(20)` | AR MP |
| `AccountsReceivableJointVenture` |  | |  | `ar_vname` | `CHAR(6)` | AR Venture |
| `AcctsRblDivisionOfInterest` |  | |  | `ar_doi_no` | `CHAR(5)` | AR DOI |
| `AlternateProperty` |  | |  | `pu_vname` | `CHAR(18)` | Remitter Property |
| `AlternateProduct` |  | |  | `pu_pdcd` | `CHAR(3)` | Remitter Product |
| `PaymentReference` |  | |  | `check_no` | `CHAR(13)` | Check Number |
| `PaymentDate` |  | |  | `check_dt` | `DATS(8)` | Check Date |
| `CashReceiptDate` |  | |  | `cash_rcpt_dt` | `DATS(8)` | Cash Receipt Date |
| `SeveranceTaxType` |  | |  | `tax_type_cd` | `CHAR(2)` | Severance Tax Type |
| `MarketingType` |  | |  | `mkt_type_cd` | `CHAR(2)` | Marketing type code |
| `ExpenseJointVenture` |  | |  | `exp_vname` | `CHAR(6)` | Expense Property number |
| `ExpenseDivisionOfInterest` |  | |  | `exp_doi_no` | `CHAR(5)` | Expense DOI Number |
| `VolumeUnit` |  | |  | `vol_uom` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  | `energy_uom` | `UNIT(3)` | Energy Base Unit Of Measure |
| `HeatingValUnit` |  | |  | `heat_val_uom` | `UNIT(3)` | Heating Unit Of Measure |
| `CompanyCodeCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `HeatingValue` |  | |  | `heat_val` | `QUAN(13)` | Heating value |
| `APIGravityRatio` |  | |  | `gravity` | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `DisbursementDecimalRatio` |  | |  | `disb_decimal` | `DEC(9)` | Disbursement Decimal |
| `NetRevenueInterestRatio` |  | |  | `nri_decimal` | `DEC(9)` | Net Revenue Interest Percent |
| `GrossVolInVolUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `OwnerNetVolInVolUnit` |  | |  | `net_vol` | `QUAN(13)` | Owner Net Volume |
| `GrossEnergyInEnergyUnit` |  | |  | `gross_energy` | `QUAN(13)` | Gross Energy |
| `OwnerEnergyInEnergyUnit` |  | |  | `own_energy` | `QUAN(13)` | Owner Energy |
| `GrossVolReducnInVolUnit` |  | |  | `gross_pvr` | `QUAN(13)` | Gross PVR |
| `OwnrVolReducnInVolUnit` |  | |  | `own_pvr` | `QUAN(13)` | Owner PVR |
| `GrossEngyReductionInEngyUnit` |  | |  | `gross_ptr` | `QUAN(13)` | Gross PTR |
| `OwnerEnergyReducnInEnergyUnit` |  | |  | `own_ptr` | `QUAN(13)` | Owner PTR |
| `GrossAmount` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `OwnerGrossAmount` |  | |  | `owner_gross_val` | `CURR(13)` | Owner Gross Value |
| `NetTaxAmount` |  | |  | `line_tax_am` | `CURR(15)` | Line Item Net Tax Amount |
| `NetTaxReimbmtAmt` |  | |  | `line_rmb_am` | `CURR(15)` | Line Item Net Tax Reimbursement Amount |
| `NetInternalMarketingAmt` |  | |  | `line_int_mkt_val` | `CURR(15)` | Line Net Marketing Cost - Internal |
| `NetExternalMarketingAmt` |  | |  | `line_ext_mkt_val` | `CURR(15)` | Line Net Marketing Cost - External |
| `NetReimbmtMarketingAmt` |  | |  | `line_ded_rmb_am` | `CURR(15)` | Line Net Marketing Cost Reimbursement |
| `OtherDeductionAmount` |  | |  | `line_oth_ded_am` | `CURR(15)` | Line Other deducts amount |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `PRAOwner` |  | |  | `own_no` | `CHAR(10)` | PRA owner |
| `OwnerInterestType` |  | |  | `own_int_type_cd` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` |  | |  | `own_isq_no` | `CHAR(2)` | Owner Interest Sequence Number |
| `SuspenseReason` |  | |  | `susp_cd` | `CHAR(3)` | Suspense Reason Code |
| `CalculationBasis` |  | |  | `aes_cd` | `CHAR(1)` | Actual / Entitled / Settlement Code |
| `OwnerPaymentStatus` |  | |  | `pay_cd` | `CHAR(2)` | Pay Code |
| `OwnerIsJntIntrstBilgEnabled` |  | |  | `jib_offs_fl` | `CHAR(1)` | Joint Interest Billing Offset Flag |
| `JntIntrstBilgPartner` |  | |  | `jib_partn` | `CHAR(10)` | JIB Partner |
| `PRALegalForm` |  | |  | `enty_cd` | `CHAR(2)` | Entity Code |
| `TaxBasis` |  | |  | `tax_free_cd` | `CHAR(2)` | Tax Free Code |
| `ItemIsReallocated` |  | |  | `realloc_fl` | `CHAR(1)` | Reallocated flag -  results reallocated thru chain-of-title |
| `JntIntrstBilgVenture` |  | |  | `jva_name` | `CHAR(6)` | JIB  Venture |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` |  | |  | `egrup` | `CHAR(3)` | Equity Group |
| `RefFiscalPeriod` |  | |  | `cast (trace_acct_prd as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `RefAccountingDocument` |  | |  | `trace_doc_no` | `CHAR(10)` | Revenue Accounting Trace Document Number |
| `RefAccountingDocumentItem` |  | |  | `trace_line_no` | `NUMC(8)` | Accounting document trace line number |
| `RefValnDocYear` |  | |  | `cast( trace_vl_doc_yr as oiu_vdm_ref_vl_doc_year preserving type )` | `NUMC(4)` | Reference VL Document Year |
| `RefValnDoc` |  | |  | `cast( trace_vl_doc_no as oiu_vdm_ref_vl_doc_no preserving type )` | `CHAR(20)` | Reference VL Document Number |
| `RefValnDocItem` |  | |  | `cast( trace_vl_line_no as oiu_vdm_ref_vl_doc_line_no preserving type )` | `NUMC(5)` | Reference VL Document Accounting Line Item |
| `BookingReversalType` |  | |  | `book_rev_ind` | `CHAR(1)` | Booking/Reversal Indicator |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `LastChangedByUser` |  | |  | `cast( change_user as fclm_bam_changed_by )` | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  | `cast( change_timestamp as oiu_vdm_changed_on_ts )` | `DEC(15)` | Changed On Timestamp |
| `NumberOfItems` |  | |  | `cast( 1 as oiu_vdm_no_of_items )` | `INT4(10)` | Number of Items |
| `_PRAOwner` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OwnerInterestType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ProcessingCompanyCode` | | ✓ | | | | |
| `_AffiliatedCompanyCode` | | ✓ | | | | |
| `_AcctDeterminationCategory` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_JntIntrstBilgVenture` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_GasPlantJointVenture` | | ✓ | | | | |
| `_ExpenseJointVenture` | | ✓ | | | | |
| `_AccountsRblJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_GasPlantDivisionOfInterest` | | ✓ | | | | |
| `_AcctsRblDivisionOfInterest` | | ✓ | | | | |
| `_ExpenseDivisionOfInterest` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_OriginatingMeasurementPt` | | ✓ | | | | |
| `_AcctsRblMeasurementPt` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_PRAContractType` | | ✓ | | | | |
| `_RelatedPRAContract` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Purchaser` | | ✓ | | | | |
| `_Remitter` | | ✓ | | | | |
| `_Transporter` | | ✓ | | | | |
| `_JntIntrstBilgPartner` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_ProductBalancingAgreement` | | ✓ | | | | |
| `_CalculationBasis` | | ✓ | | | | |
| `_OwnerPaymentStatus` | | ✓ | | | | |
| `_SeveranceTaxType` | | ✓ | | | | |
| `_MarketingType` | | ✓ | | | | |
| `_TaxClassification` | | ✓ | | | | |
| `_TaxBasis` | | ✓ | | | | |
| `_PRALegalForm` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_SuspenseReason` | | ✓ | | | | |
| `_RefValnDocYear` | | ✓ | | | | |
| `_RefValnDocHdr` | | ✓ | | | | |
| `_JointVentureEquityType` | | ✓ | | | | |
| `_BookingReversalType` | | ✓ | | | | |
| `_MajorProduct` | | ✓ | | | | |
| `_MinorProduct` | | ✓ | | | | |
| `_ItemIsSummarizedByProduct` | | ✓ | | | | |
| `_ItemIsWriteOff` | | ✓ | | | | |
| `_ItemIsCleared` | | ✓ | | | | |
| `_OwnerIsJntIntrstBilgEnabled` | | ✓ | | | | |
| `_ItemIsReallocated` | | ✓ | | | | |
| `_ItemIsRejected` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_GLAccountType` | `I_PRAGLAccountType` | [0..1] |
| `_OwnerInterestType` | `I_OwnerInterestType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ProcessingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_AffiliatedCompanyCode` | `I_CompanyCode` | [0..1] |
| `_AcctDeterminationCategory` | `I_PRAAcctDetnCategory` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_JntIntrstBilgVenture` | `I_JointVenture` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_GasPlantJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_ExpenseJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_AccountsRblJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_GasPlantDivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_AcctsRblDivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_ExpenseDivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_OriginatingMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_AcctsRblMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_PRAContractType` | `I_PRAContractType` | [0..1] |
| `_RelatedPRAContract` | `I_PRAContract` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_CostCenter` | `I_PRACostCenter` | [0..*] |
| `_Purchaser` | `I_Customer` | [0..1] |
| `_Remitter` | `I_Customer` | [0..1] |
| `_Transporter` | `I_Customer` | [0..1] |
| `_JntIntrstBilgPartner` | `I_Customer` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_County` | `I_PRACounty` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ProductBalancingAgreement` | `I_ProductBalancingAgreement` | [0..1] |
| `_CalculationBasis` | `I_Calculationbasis` | [0..1] |
| `_OwnerPaymentStatus` | `I_OwnerPaymentStatus` | [0..1] |
| `_SeveranceTaxType` | `I_SeveranceTaxType` | [0..1] |
| `_MarketingType` | `I_MarketingType` | [0..1] |
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_TaxBasis` | `I_TaxBasis` | [0..1] |
| `_PRALegalForm` | `I_PRALegalForm` | [0..1] |
| `_PriorPeriodAdjustmentReason` | `I_PriorPeriodAdjustmentReason` | [0..1] |
| `_SuspenseReason` | `I_SuspenseReason` | [0..1] |
| `_RefValnDocYear` | `I_CalendarYear` | [0..1] |
| `_RefValnDocHdr` | `I_ValuationDocumentHdr` | [0..1] |
| `_JointVentureEquityType` | `I_JointVentureEquityType` | [0..1] |
| `_BookingReversalType` | `I_BookingReversalType` | [0..1] |
| `_MajorProduct` | `I_MajorProduct` | [0..1] |
| `_MinorProduct` | `I_MinorProduct` | [0..1] |
| `_ItemIsSummarizedByProduct` | `I_Indicator` | [0..1] |
| `_ItemIsWriteOff` | `I_Indicator` | [0..1] |
| `_ItemIsCleared` | `I_Indicator` | [0..1] |
| `_OwnerIsJntIntrstBilgEnabled` | `I_Indicator` | [0..1] |
| `_ItemIsReallocated` | `I_Indicator` | [0..1] |
| `_ItemIsRejected` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCDETAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCDETAIL')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Detail'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTGDOCDTL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAAcctDocDetail'
define view I_PRAAcctgDocDetail
  as select from /pra/acct_doc 
  association [0..1] to I_PRAOwner                    as _PRAOwner                    on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_PRAGLAccountType            as _GLAccountType               on  $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..1] to I_OwnerInterestType           as _OwnerInterestType           on  $projection.OwnerInterestType = _OwnerInterestType.OwnerInterestType
  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _ProcessingCompanyCode       on  $projection.ProcessingCompanyCode = _ProcessingCompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _AffiliatedCompanyCode       on  $projection.AffiliatedCompanyCode = _AffiliatedCompanyCode.CompanyCode
  //  association [0..1] to I_PRAFiscalPeriod             as _FiscalPeriod                on  $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  //                                                                                      and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
  //  association [0..1] to I_PRAAccountingDocumentHeader as _AccountingDocument          on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
  //                                                                                      and $projection.FiscalPeriod       = _AccountingDocument.FiscalPeriod
  //                                                                                      and $projection.AccountingDocument = _AccountingDocument.AccountingDocument
  association [0..1] to I_PRAAcctDetnCategory         as _AcctDeterminationCategory   on  $projection.AcctDeterminationCategory = _AcctDeterminationCategory.AcctDeterminationCategory
  association [0..1] to I_Material                    as _Material                    on  $projection.Material = _Material.Material
  association [0..1] to I_VolumeType                  as _VolumeType                  on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_Partnercompany              as _PartnerCompany              on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_JointVenture                as _JntIntrstBilgVenture        on  $projection.CompanyCode          = _JntIntrstBilgVenture.CompanyCode
                                                                                      and $projection.JntIntrstBilgVenture = _JntIntrstBilgVenture.JointVenture
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture             on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                      and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture            on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                      and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _GasPlantJointVenture        on  $projection.CompanyCode          = _GasPlantJointVenture.CompanyCode
                                                                                      and $projection.GasPlantJointVenture = _GasPlantJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _ExpenseJointVenture         on  $projection.CompanyCode         = _ExpenseJointVenture.CompanyCode
                                                                                      and $projection.ExpenseJointVenture = _ExpenseJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _AccountsRblJointVenture     on  $projection.CompanyCode                    = _AccountsRblJointVenture.CompanyCode
                                                                                      and $projection.AccountsReceivableJointVenture = _AccountsRblJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest          on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                      and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                      and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DivisionOfInterest          as _GasPlantDivisionOfInterest  on  $projection.CompanyCode                = _GasPlantDivisionOfInterest.CompanyCode
                                                                                      and $projection.GasPlantJointVenture       = _GasPlantDivisionOfInterest.JointVenture
                                                                                      and $projection.GasPlantDivisionOfInterest = _GasPlantDivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DivisionOfInterest          as _AcctsRblDivisionOfInterest  on  $projection.CompanyCode                    = _AcctsRblDivisionOfInterest.CompanyCode
                                                                                      and $projection.AccountsReceivableJointVenture = _AcctsRblDivisionOfInterest.JointVenture
                                                                                      and $projection.AcctsRblDivisionOfInterest     = _AcctsRblDivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DivisionOfInterest          as _ExpenseDivisionOfInterest   on  $projection.CompanyCode               = _ExpenseDivisionOfInterest.CompanyCode
                                                                                      and $projection.ExpenseJointVenture       = _ExpenseDivisionOfInterest.JointVenture
                                                                                      and $projection.ExpenseDivisionOfInterest = _ExpenseDivisionOfInterest.DivisionOfInterest
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount                on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                  on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EnergyUnit                  on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork             on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_Well                        as _Well                        on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion              on  $projection.Well           = _WellCompletion.Well
                                                                                      and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint            on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_MeasurementPoint            as _OriginatingMeasurementPt    on  $projection.OriginatingMeasurementPt = _OriginatingMeasurementPt.MeasurementPoint
  association [0..1] to I_MeasurementPoint            as _AcctsRblMeasurementPt       on  $projection.AcctsRblMeasurementPt = _AcctsRblMeasurementPt.MeasurementPoint
  association [0..1] to I_PRAContract                 as _PRAContract                 on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_PRAContractType             as _PRAContractType             on  $projection.PRAContractType = _PRAContractType.PRAContractType
  association [0..1] to I_PRAContract                 as _RelatedPRAContract          on  $projection.RelatedPRAContract = _RelatedPRAContract.PRAContract
  association [0..1] to I_PRAProduct                  as _Product                     on  $projection.Product = _Product.Product
  association [0..*] to I_PRACostCenter               as _CostCenter                  on  $projection.CompanyCode = _CostCenter.CompanyCode
                                                                                      and $projection.CostCenter  = _CostCenter.CostCenter
  association [0..1] to I_Customer                    as _Purchaser                   on  $projection.Purchaser = _Purchaser.Customer
  association [0..1] to I_Customer                    as _Remitter                    on  $projection.Remitter = _Remitter.Customer
  association [0..1] to I_Customer                    as _Transporter                 on  $projection.Transporter = _Transporter.Customer
  association [0..1] to I_Customer                    as _JntIntrstBilgPartner        on  $projection.JntIntrstBilgPartner = _JntIntrstBilgPartner.Customer
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_Region                      as _Region                      on  $projection.Country = _Region.Country
                                                                                      and $projection.Region  = _Region.Region
  association [0..1] to I_PRACounty                   as _County                      on  $projection.Country = _County.Country
                                                                                      and $projection.Region  = _County.Region
                                                                                      and $projection.County  = _County.County
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation       on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                      and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_ProductBalancingAgreement   as _ProductBalancingAgreement   on  $projection.ProductBalancingAgreement = _ProductBalancingAgreement.ProductBalancingAgreement
  association [0..1] to I_Calculationbasis            as _CalculationBasis            on  $projection.CalculationBasis = _CalculationBasis.CalculationBasis
  association [0..1] to I_OwnerPaymentStatus          as _OwnerPaymentStatus          on  $projection.OwnerPaymentStatus = _OwnerPaymentStatus.OwnerPaymentStatus
  association [0..1] to I_SeveranceTaxType            as _SeveranceTaxType            on  $projection.Country               = _SeveranceTaxType.Country
                                                                                      and $projection.PrimaryGeogrlLocation = _SeveranceTaxType.PrimaryGeogrlLocation
                                                                                      and $projection.SeveranceTaxType      = _SeveranceTaxType.SeveranceTaxType
  association [0..1] to I_MarketingType               as _MarketingType               on  $projection.MajorProduct  = _MarketingType.MajorProduct
                                                                                      and $projection.MarketingType = _MarketingType.MarketingType
  //  association [0..*] to I_MarketingType               as _MarketingType               on  $projection.MarketingType = _MarketingType.MarketingType
  association [0..1] to I_TaxClassification           as _TaxClassification           on  $projection.Country               = _TaxClassification.Country
                                                                                      and $projection.PrimaryGeogrlLocation = _TaxClassification.PrimaryGeogrlLocation
                                                                                      and $projection.TaxClassification     = _TaxClassification.TaxClassification
  association [0..1] to I_TaxBasis                    as _TaxBasis                    on  $projection.TaxBasis = _TaxBasis.TaxBasis
  association [0..1] to I_PRALegalForm                as _PRALegalForm                on  $projection.PRALegalForm = _PRALegalForm.PRALegalForm
  association [0..1] to I_PriorPeriodAdjustmentReason as _PriorPeriodAdjustmentReason on  $projection.PriorPeriodAdjustmentReason = _PriorPeriodAdjustmentReason.PriorPeriodAdjustmentReason
  association [0..1] to I_SuspenseReason              as _SuspenseReason              on  $projection.SuspenseReason = _SuspenseReason.SuspenseReason
  association [0..1] to I_CalendarYear                as _RefValnDocYear              on  $projection.RefValnDocYear = _RefValnDocYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr        as _RefValnDocHdr               on  $projection.RefValnDocYear = _RefValnDocHdr.ValuationDocumentYear
                                                                                      and $projection.RefValnDoc     = _RefValnDocHdr.ValuationDocumentNumber
  association [0..1] to I_JointVentureEquityType      as _JointVentureEquityType      on  $projection.CompanyCode            = _JointVentureEquityType.CompanyCode
                                                                                      and $projection.JointVentureEquityType = _JointVentureEquityType.JointVentureEquityType
  //  association [0..1] to I_JointVentureEquityGroup     as _JointVentureEquityGroup     on  $projection.CompanyCode             = _JointVentureEquityGroup.CompanyCode
  //                                                                                      and $projection.JointVenture            = _JointVentureEquityGroup.JointVenture
  //                                                                                      and $projection.JointVentureEquityGroup = _JointVentureEquityGroup.JointVentureEquityGroup
  association [0..1] to I_BookingReversalType         as _BookingReversalType         on  $projection.BookingReversalType = _BookingReversalType.BookingReversalType
  association [0..1] to I_MajorProduct                as _MajorProduct                on  $projection.MajorProduct = _MajorProduct.MajorProduct
  association [0..1] to I_MinorProduct                as _MinorProduct                on  $projection.MajorProduct = _MinorProduct.MajorProduct
                                                                                      and $projection.MinorProduct = _MinorProduct.MinorProduct
  association [0..1] to I_Indicator                   as _ItemIsSummarizedByProduct   on  $projection.ItemIsSummarizedByProduct = _ItemIsSummarizedByProduct.IndicatorValue
  association [0..1] to I_Indicator                   as _ItemIsWriteOff              on  $projection.ItemIsWriteOff = _ItemIsWriteOff.IndicatorValue
  association [0..1] to I_Indicator                   as _ItemIsCleared               on  $projection.ItemIsCleared = _ItemIsCleared.IndicatorValue
  association [0..1] to I_Indicator                   as _OwnerIsJntIntrstBilgEnabled on  $projection.OwnerIsJntIntrstBilgEnabled = _OwnerIsJntIntrstBilgEnabled.IndicatorValue
  association [0..1] to I_Indicator                   as _ItemIsReallocated           on  $projection.ItemIsReallocated = _ItemIsReallocated.IndicatorValue
  association [0..1] to I_Indicator                   as _ItemIsRejected              on  $projection.ItemIsRejected = _ItemIsRejected.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type )                           as CompanyCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriod'
  key cast (acct_period as oiu_vdm_fis_period preserving type)               as FiscalPeriod,
  key doc_no                                                                 as AccountingDocument,
  key line_no                                                                as AccountingDocumentItem,

      @ObjectModel.foreignKey.association: '_MajorProduct'
      _Product.MajorProduct                                                  as MajorProduct, // needed for association to marketing type
      @ObjectModel.foreignKey.association: '_MinorProduct'
      _Product.MinorProduct                                                  as MinorProduct,
      @ObjectModel.foreignKey.association: '_ItemIsRejected'
      rej_fl                                                                 as ItemIsRejected,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
      acct_no                                                                as GLAccount,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      acct_type_cd                                                           as GLAccountType,
      @ObjectModel.foreignKey.association: '_AcctDeterminationCategory'
      acct_cat_cd                                                            as AcctDeterminationCategory,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
      vname                                                                  as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
      doi_no                                                                 as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                             as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_Product'
      pd_cd                                                                  as Product,
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                                  as Material,
      @Semantics.text: true
      line_desc                                                              as DocumentItemText,
      @ObjectModel.foreignKey.association: '_Well'
      wl_no                                                                  as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
      wc_no                                                                  as WellCompletion,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
      mp_no                                                                  as MeasurementPoint,
      @ObjectModel.foreignKey.association: '_PRAContract'
      vbeln                                                                  as PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
      vl_type_cd                                                             as VolumeType,
      @Semantics.businessDate.at: true
      sale_dt                                                                as SalesDate,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                                  as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_CostCenter'
      cast( kostl as fis_kostl )                                             as CostCenter,
      @ObjectModel.foreignKey.association: '_Country'
      cast( land1 as land1_gp preserving type )                              as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      pri_geo_loc                                                            as PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_ProcessingCompanyCode'
      proc_bukrs                                                             as ProcessingCompanyCode,
      @ObjectModel.foreignKey.association: '_Purchaser'
      pur_no                                                                 as Purchaser,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      ps_base_qy                                                             as PressureBaseQty,
      @ObjectModel.foreignKey.association: '_ItemIsSummarizedByProduct'
      pd_cd_sum_ind                                                          as ItemIsSummarizedByProduct,
      @ObjectModel.foreignKey.association: '_ItemIsWriteOff'
      writeoff                                                               as ItemIsWriteOff,
      @ObjectModel.foreignKey.association: '_ItemIsCleared'
      clrng_fl                                                               as ItemIsCleared,
      @ObjectModel.foreignKey.association: '_OriginatingMeasurementPt'
      orig_mp_no                                                             as OriginatingMeasurementPt,
      @ObjectModel.foreignKey.association: '_AffiliatedCompanyCode'
      intercocd                                                              as AffiliatedCompanyCode,
      @ObjectModel.foreignKey.association: '_TaxClassification'
      tax_cls                                                                as TaxClassification,
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      ppa_rsn_cd                                                             as PriorPeriodAdjustmentReason,
      @ObjectModel.foreignKey.association: '_County'
      counc                                                                  as County,
      @ObjectModel.foreignKey.association: '_Region'
      regio                                                                  as Region,
      @ObjectModel.foreignKey.association: '_RelatedPRAContract'
      related_vbeln                                                          as RelatedPRAContract,
      @ObjectModel.foreignKey.association: '_ProductBalancingAgreement'
      pba_no                                                                 as ProductBalancingAgreement,
      @ObjectModel.foreignKey.association: '_GasPlantJointVenture'
      gplt_vname                                                             as GasPlantJointVenture,
      @ObjectModel.foreignKey.association: '_GasPlantDivisionOfInterest'
      gplt_doi_no                                                            as GasPlantDivisionOfInterest,
      @ObjectModel.foreignKey.association: '_PRAContractType'
      ct_type_cd                                                             as PRAContractType,
      @ObjectModel.foreignKey.association: '_Transporter'
      trnsp_no                                                               as Transporter,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      trd_partnr                                                             as PartnerCompany,
      @ObjectModel.foreignKey.association: '_Remitter'
      remt_no                                                                as Remitter,
      @ObjectModel.foreignKey.association: '_AcctsRblMeasurementPt'
      ar_mp_no                                                               as AcctsRblMeasurementPt,
      @ObjectModel.foreignKey.association: '_AccountsRblJointVenture'
      ar_vname                                                               as AccountsReceivableJointVenture,
      @ObjectModel.foreignKey.association: '_AcctsRblDivisionOfInterest'
      ar_doi_no                                                              as AcctsRblDivisionOfInterest,
      // no association, third party identifier
      pu_vname                                                               as AlternateProperty,
      // no association, third party identifier
      pu_pdcd                                                                as AlternateProduct,
      check_no                                                               as PaymentReference,
      check_dt                                                               as PaymentDate,
      cash_rcpt_dt                                                           as CashReceiptDate,
      @ObjectModel.foreignKey.association: '_SeveranceTaxType'
      tax_type_cd                                                            as SeveranceTaxType,
      @ObjectModel.foreignKey.association: '_MarketingType'
      mkt_type_cd                                                            as MarketingType,
      @ObjectModel.foreignKey.association: '_ExpenseJointVenture'
      exp_vname                                                              as ExpenseJointVenture,
      @ObjectModel.foreignKey.association: '_ExpenseDivisionOfInterest'
      exp_doi_no                                                             as ExpenseDivisionOfInterest,

      // units and currencies
      @Semantics.unitOfMeasure: true
      vol_uom                                                                as VolumeUnit,
      @Semantics.unitOfMeasure: true
      energy_uom                                                             as EnergyUnit,
      @Semantics.unitOfMeasure: true
      heat_val_uom                                                           as HeatingValUnit,
      @Semantics.currencyCode: true
      waers                                                                  as CompanyCodeCurrency,

      // individual characteristics where no default aggregation should occur
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      heat_val                                                               as HeatingValue,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      gravity                                                                as APIGravityRatio,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      disb_decimal                                                           as DisbursementDecimalRatio,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      nri_decimal                                                            as NetRevenueInterestRatio,

      // measurement amounts
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_vol                                                              as GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      net_vol                                                                as OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_energy                                                           as GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      own_energy                                                             as OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      // vol unit is undefined (typically MCF, where VolumeUnit will be Std Gallons)
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_pvr                                                              as GrossVolReducnInVolUnit,
      @DefaultAggregation: #SUM
      // vol unit is undefined (typically MCF, where VolumeUnit will be Std Gallons)
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      own_pvr                                                                as OwnrVolReducnInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_ptr                                                              as GrossEngyReductionInEngyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      own_ptr                                                                as OwnerEnergyReducnInEnergyUnit,

      //    currency amounts
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                              as GrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_gross_val                                                        as OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_tax_am                                                            as NetTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_rmb_am                                                            as NetTaxReimbmtAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_int_mkt_val                                                       as NetInternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_ext_mkt_val                                                       as NetExternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_ded_rmb_am                                                        as NetReimbmtMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      line_oth_ded_am                                                        as OtherDeductionAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_val                                                                as OwnerNetAmount,

      @ObjectModel.foreignKey.association: '_PRAOwner'
      own_no                                                                 as PRAOwner,
      @ObjectModel.foreignKey.association: '_OwnerInterestType'
      own_int_type_cd                                                        as OwnerInterestType,
      own_isq_no                                                             as OwnerInterestSequence,
      @ObjectModel.foreignKey.association: '_SuspenseReason'
      susp_cd                                                                as SuspenseReason,
      @ObjectModel.foreignKey.association: '_CalculationBasis'
      aes_cd                                                                 as CalculationBasis,
      @ObjectModel.foreignKey.association: '_OwnerPaymentStatus'
      pay_cd                                                                 as OwnerPaymentStatus,
      @ObjectModel.foreignKey.association: '_OwnerIsJntIntrstBilgEnabled'
      jib_offs_fl                                                            as OwnerIsJntIntrstBilgEnabled,
      @ObjectModel.foreignKey.association: '_JntIntrstBilgPartner'
      jib_partn                                                              as JntIntrstBilgPartner,
      @ObjectModel.foreignKey.association: '_PRALegalForm'
      enty_cd                                                                as PRALegalForm,
      @ObjectModel.foreignKey.association: '_TaxBasis'
      tax_free_cd                                                            as TaxBasis,
      @ObjectModel.foreignKey.association: '_ItemIsReallocated'
      realloc_fl                                                             as ItemIsReallocated,
      @ObjectModel.foreignKey.association: '_JntIntrstBilgVenture'
      jva_name                                                               as JntIntrstBilgVenture,
      @ObjectModel.foreignKey.association: '_JointVentureEquityType'
      etype                                                                  as JointVentureEquityType,
      //      @ObjectModel.foreignKey.association: '_JointVentureEquityGroup'
      egrup                                                                  as JointVentureEquityGroup,

      cast (trace_acct_prd as oiu_vdm_fis_period preserving type)            as RefFiscalPeriod,

      trace_doc_no                                                           as RefAccountingDocument,

      trace_line_no                                                          as RefAccountingDocumentItem,
      @ObjectModel.foreignKey.association: '_RefValnDocYear'
      cast( trace_vl_doc_yr as oiu_vdm_ref_vl_doc_year preserving type )     as RefValnDocYear,
      //      @ObjectModel.foreignKey.association: '_RefValnDocHdr'
      cast( trace_vl_doc_no as oiu_vdm_ref_vl_doc_no preserving type )       as RefValnDoc,
      cast( trace_vl_line_no as oiu_vdm_ref_vl_doc_line_no preserving type ) as RefValnDocItem,
      @ObjectModel.foreignKey.association: '_BookingReversalType'
      book_rev_ind                                                           as BookingReversalType,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                              as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                         as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      cast( change_user as fclm_bam_changed_by )                             as LastChangedByUser,
      cast( change_timestamp as oiu_vdm_changed_on_ts )                      as ChangedDateTime,

      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_items )                                       as NumberOfItems,

      //associations
      _PRAOwner,
      _GLAccountType,
      _AcctDeterminationCategory,
      _OwnerInterestType,
      _Material,
      _VolumeType,
      _CompanyCode,
      _CostCenter,
      _ItemIsRejected,
      //      _FiscalPeriod, // issue with ACCP types
      //      _AccountingDocument, // issue with ACCP types
      _PartnerCompany,
      _ProcessingCompanyCode,
      _AffiliatedCompanyCode,
      _JntIntrstBilgVenture,
      _PRAJointVenture,
      _JointVentureEquityType,
      //      _JointVentureEquityGroup, // can not have link to pra jv and to core jv concurrently
      _GasPlantJointVenture,
      _ExpenseJointVenture,
      _AccountsRblJointVenture,
      _DivisionOfInterest,
      _GasPlantDivisionOfInterest,
      _AcctsRblDivisionOfInterest,
      _ExpenseDivisionOfInterest,
      _UnitJointVenture,
      _Well,
      _WellCompletion,
      _MeasurementPoint,
      _OriginatingMeasurementPt,
      _AcctsRblMeasurementPt,
      _PRAContract,
      _PRAContractType,
      _RelatedPRAContract,
      _Product,
      _MajorProduct,
      _MinorProduct,
      _PRAGLAccount,
      _Purchaser,
      _Remitter,
      _JntIntrstBilgPartner,
      _Transporter,
      _CompanyCodeCurrency,
      _VolumeUnit,
      _EnergyUnit,
      _DeliveryNetwork,
      _CalculationBasis,
      _PriorPeriodAdjustmentReason,
      _SuspenseReason,
      _Country,
      _PrimaryGeogrlLocation,
      _Region,
      _County,
      _SeveranceTaxType,
      _MarketingType,
      _TaxClassification,
      _ProductBalancingAgreement,
      _OwnerPaymentStatus,
      _PRALegalForm,
      _TaxBasis,
      _BookingReversalType,
      _ItemIsSummarizedByProduct,
      _ItemIsCleared,
      _ItemIsWriteOff,
      _OwnerIsJntIntrstBilgEnabled,
      _ItemIsReallocated,
      _RefValnDocYear,
      _RefValnDocHdr
};
```
