---
name: I_APMPAYMENTITEM
description: "APM Payment Transaction Item"
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value
semantic_en: "APM Payment Transaction Item"
semantic_vi: "APM Payment Transaction Item — CDS view giao diện dựa trên APM Payment Transaction Item."
keywords:
  - "apm"
  - "payment"
  - "transaction"
  - "item"
  - "clearing"
  - "area"
  - "date"
  - "number"
  - "process"
  - "status"
  - "code"
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - payment
  - transaction
---
# I_APMPAYMENTITEM

**APM Payment Transaction Item**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentItemUUID` | ✓ | |  | `guid` | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` |  | |  | `clearing_area` | `CHAR(6)` | Clearing Area |
| `PaymentItemDate` |  | |  | `pi_date` | `DATS(8)` | Payment Item Date |
| `PaymentItemNumber` |  | |  | `pi_no` | `NUMC(12)` | Payment Item Number from Number Range |
| `APMPayItemProcessStatusCode` |  | |  | `tech_stat` | `CHAR(3)` | Processing Status of Payment Item |
| `PaymentItemCategory` |  | |  | `pi_kind` | `CHAR(2)` | Payment Item Category |
| `APMReceiverConfirmationCode` |  | |  | `disp_stat` | `CHAR(6)` | External Status |
| `APMRouteID` |  | |  | `ref_route` | `CHAR(11)` | Route ID |
| `APMPaymentAgreementID` |  | |  | `ref_clearing` | `CHAR(11)` | Clearing Agreement ID |
| `APMAccountManagementAreaID` |  | |  | `ref_am_area` | `CHAR(6)` | Account Managing Area |
| `APMPredecessorPaymentItemDate` |  | |  | `ref_pred_pi_date` | `DATS(8)` | Date Reference to Predecessor Items |
| `APMPredecessorPaymentItmNumber` |  | |  | `ref_pred_pi_no` | `NUMC(12)` | Sequence Number Reference to Predecessor Items |
| `APMSuccessorPaymentItemDate` |  | |  | `ref_succ_pi_date` | `DATS(8)` | Date Reference to Successor Items |
| `APMSuccessorPaymentItemNumber` |  | |  | `ref_succ_pi_no` | `NUMC(12)` | Sequence Number Reference to Successor Items |
| `IncomingPaymentOrderDate` |  | |  | `ref_inp_po_date` | `DATS(8)` | Reference to Incoming Payment Order: PO Date |
| `IncomingPaymentOrderNumber` |  | |  | `ref_inp_po_no` | `NUMC(12)` | Reference to Incoming Payment Order |
| `OutgoingPaymentOrderDate` |  | |  | `ref_outp_po_date` | `DATS(8)` | Reference to Outgoing Payment Order: PO Date |
| `OutgoingPaymentOrderNumber` |  | |  | `ref_outp_po_no` | `NUMC(12)` | Reference to Outgoing Payment Order: Sequence Number |
| `APMPaymentBatchDate` |  | |  | `ref_coll_date` | `DATS(8)` | Payment Batch Date |
| `APMPaymentBatchNumber` |  | |  | `ref_coll_no` | `NUMC(10)` | Payment Batch Number from Number Range (Secondary Key) |
| `APMPaymentBatchSeqNumber` |  | |  | `ref_coll_seq_no` | `NUMC(5)` | Sequence Number of Payment Batch |
| `APMPrevSystTransactionUniqueID` |  | |  | `ref_item_ext_in` | `CHAR(35)` | External Item Reference - inbound messages |
| `APMPreviousSystemTransactionID` |  | |  | `ref_item_ext` | `CHAR(35)` | External Item Reference |
| `APMNextSystemTransactionID` |  | |  | `ref_item_ext_out` | `CHAR(35)` | External Item Reference - outbound messages |
| `UniqueEndToEndTransactionID` |  | |  | `uetr` | `CHAR(36)` | ISO UETR - Unique End-to-End Transaction reference Number |
| `APMCustomerGroupID` |  | |  | `ref_cust_grp` | `CHAR(11)` | Customer Group |
| `APMCustomerID` |  | |  | `ref_customer` | `CHAR(11)` | Customer |
| `CustomerSegment` |  | |  | `ref_cust_sgm` | `CHAR(11)` | Customer Segment |
| `Country` |  | |  | `country` | `CHAR(3)` | Bank Country/Region |
| `BankNumber` |  | |  | `bankkey` | `CHAR(15)` | Bank Number |
| `ClearingSystemIdentifierCode` |  | |  | `clrsysidcd` | `CHAR(5)` | Clearing System Member ID Code |
| `SWIFTCode` |  | |  | `bic` | `CHAR(11)` | Bank Identifier Code (BIC) |
| `IBAN` |  | |  | `iban` | `CHAR(34)` | IBAN After Account Substitution |
| `ISOAccountIdentifier` |  | |  | `acct_no` | `CHAR(34)` | Account Number |
| `AccountCurrency` |  | |  | `acct_cur` | `CUKY(5)` | Account Currency After Substitution |
| `BankAccountHolderName` |  | |  | `holder` | `CHAR(80)` | Substitute Account Holder Name |
| `APMRequestedValueDate` |  | |  | `orig_val_date` | `DATS(8)` | Original Value Date |
| `APMProposedPostingDate` |  | |  | `pi_post_date` | `DATS(8)` | Posting Date |
| `TransactionCurrency` |  | |  | `tr_curr` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  | `tr_amount` | `CURR(23)` | Amount in Transaction Currency |
| `APMDebitCreditCode` |  | |  | `tr_debcredind` | `CHAR(1)` | Transaction Debit/Credit |
| `APMChargeBearerCode` |  | |  | `fee_info` | `CHAR(6)` | Charge Bearer |
| `TransactionType` |  | |  | `trans_type` | `CHAR(6)` | Transaction Type (Advanced Payment Management) |
| `APMInternalCreationProcess` |  | |  | `process` | `CHAR(4)` | Creation Process of Payment Object |
| `APMPaymentPriorityCode` |  | |  | `priority` | `CHAR(2)` | Payment Priority |
| `APMChequeNumber` |  | |  | `cheque_no` | `CHAR(25)` | Check Number |
| `APMReturnOrRejectionCode` |  | |  | `return_code` | `CHAR(6)` | Return/Rejection Reason |
| `APMReleaseStatus` |  | |  | `release_status` | `CHAR(2)` | Release Status |
| `APMPaymentItemOffsetLinkValue` |  | |  | `item_group` | `CHAR(28)` | ORP/RCP item group reference |
| `BankAccountInternalID` |  | |  | `bam_id` | `NUMC(10)` | APM Copy of Bank Account Technical ID |
| `APMPaymentScenario` |  | |  | `payment_scenario` | `CHAR(1)` | Payment Scenario Description |
| `APMBankAccountStatus` |  | |  | `bam_status` | `CHAR(1)` | BAM Lookup Status |
| `DueDate` |  | |  | `due_date` | `DATS(8)` | Due Date Specified by Ordering Party |
| `DirectDebitMandate` |  | |  | `mandate_id` | `CHAR(35)` | Mandate Identification |
| `MandateCreditor` |  | |  | `uci` | `CHAR(35)` | Creditor ID |
| `PaymentEndToEndIdentification` |  | |  | `end_to_end_id` | `CHAR(35)` | Ordering Party Reference (Unique Number for ISO Payment) |
| `APMSequenceTypeCode` |  | |  | `direct_deb_type` | `CHAR(1)` | Direct Debit Type |
| `APMLocalInstrumentISOCode` |  | |  | `lcl_instrument` | `CHAR(35)` | ISO20022: Local Instrument Code or Proprietary Code |
| `APMCategoryPurposeISOCode` |  | |  | `category_purpose_code` | `CHAR(35)` | ISO20022: Category Purpose Code or Proprietary Code |
| `APMServiceLevelISOCode` |  | |  | `service_level` | `CHAR(35)` | ISO20022: Service Level Code or Proprietary Code |
| `CreationUserName` |  | |  | `crusr` | `CHAR(12)` | Creating User |
| `CreationDate` |  | |  | `crdat` | `DATS(8)` | Creation Date |
| `CreationTime` |  | |  | `crtim` | `TIMS(6)` | Creation Time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'APM Payment Transaction Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_APMPaymentItem
  as select from /pf1/db_item
{
  key guid                  as PaymentItemUUID,
      clearing_area         as ClearingArea,
      pi_date               as PaymentItemDate,
      pi_no                 as PaymentItemNumber,
      //  segmentation_key as SegmentationKey,
      //  time_part as TimePart,
      //  pi_stat as PiStat,
      tech_stat             as APMPayItemProcessStatusCode,
      //  prev_tech_stat as PrevTechStat,
      pi_kind               as PaymentItemCategory,
      //  flg_posted as FlgPosted,
      //  flg_reserved as FlgReserved,
      //  flg_error as FlgError,
      //  flg_fh_error as FlgFhError,
      //  flg_disp_success as FlgDispSuccess,
      //  flg_a_returned as FlgAReturned,
      //  flg_eh_error as FlgEhError,
      disp_stat             as APMReceiverConfirmationCode,
      //  flg_listener_reg as FlgListenerReg,
      //  update_counter as APMUpdateCounter,
      //  flg_remittance as FlgRemittance,
      //  flg_tchain as FlgTchain,
      //  tech_priority as TechPriority,
      //  flg_final as FlgFinal,
      ref_route             as APMRouteID,
      ref_clearing          as APMPaymentAgreementID,
      ref_am_area           as APMAccountManagementAreaID,
      //  predeterm_route as PredetermRoute,
      //  rp_to_determine as RpToDetermine,
      //  ref_acct_loc_srv as RefAcctLocSrv,
      //  flg_add_info as FlgAddInfo,
      //  ref_pi_am_area as RefPiAmArea,

      ref_pred_pi_date      as APMPredecessorPaymentItemDate,
      ref_pred_pi_no        as APMPredecessorPaymentItmNumber,
      ref_succ_pi_date      as APMSuccessorPaymentItemDate,
      ref_succ_pi_no        as APMSuccessorPaymentItemNumber,

      ref_inp_po_date       as IncomingPaymentOrderDate,
      ref_inp_po_no         as IncomingPaymentOrderNumber,
      ref_outp_po_date      as OutgoingPaymentOrderDate,
      ref_outp_po_no        as OutgoingPaymentOrderNumber,

      ref_coll_date         as APMPaymentBatchDate,
      ref_coll_no           as APMPaymentBatchNumber,
      ref_coll_seq_no       as APMPaymentBatchSeqNumber,

      //  coll_ent_date as CollEntDate,
      //  coll_ent_time as CollEntTime,
      //  ref_prenote_id as RefPrenoteId,
      ref_item_ext_in       as APMPrevSystTransactionUniqueID,
      ref_item_ext          as APMPreviousSystemTransactionID,
      ref_item_ext_out      as APMNextSystemTransactionID,
      uetr                  as UniqueEndToEndTransactionID,

      ref_cust_grp          as APMCustomerGroupID,
      ref_customer          as APMCustomerID,
      ref_cust_sgm          as CustomerSegment,
      //  ref_predef_grp as RefPredefGrp,
      country               as Country,
      bankkey               as BankNumber,
      clrsysidcd            as ClearingSystemIdentifierCode,
      bic                   as SWIFTCode,
      iban                  as IBAN,
      acct_no               as ISOAccountIdentifier,
      acct_cur              as AccountCurrency,
      holder                as BankAccountHolderName,
      //  ref_country as RefCountry,
      //  ref_bankkey as RefBankkey,
      //  ref_bic as RefBic,
      //  ref_iban as RefIban,
      //  ref_acct_no as RefAcctNo,
      //  ref_acct_cur as RefAcctCur,
      //  ref_holder as RefHolder,
      //  ref_clrsysidcd as RefClrsysidcd,
      orig_val_date         as APMRequestedValueDate,

      //  orig_val_time as OrigValTime,
      //  val_date as ValDate,
      //  val_time as ValTime,
      //  ref_valuta_id as RefValutaId,
      //  ref_ruleset_id as RefRulesetId,
      //  value_date_stat as ValueDateStat,
      //  flg_hld_val_date as FlgHldValDate,
      //  act_val_date as ActValDate,

      pi_post_date          as APMProposedPostingDate,

      //  pi_post_time as APMProposedPostingTime,
      //  pl_clr_date as APMPlannedClearingDate,
      //  pl_clr_time as APMPlannedClearingTime,

      //  pi_process_date as PiProcessDate,
      //  pi_process_time as PiProcessTime,
      //  act_post_date as ActPostDate,
      tr_curr               as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      tr_amount             as AmountInTransactionCurrency,
      tr_debcredind         as APMDebitCreditCode,
      //  tr_fee as TrFee,
      //  fee_debcred as FeeDebcred,
      fee_info              as APMChargeBearerCode,
      //  original_curr as OriginalCurr,
      //  original_amount as OriginalAmount,
      //  nom_amount_chng as NomAmountChng,
      //  a_amount as AAmount,
      //  a_amount_fee as AAmountFee,
      //  a_amount_curr as AAmountCurr,
      //  exchngrate as Exchngrate,
      trans_type            as TransactionType,
      process               as APMInternalCreationProcess,
      priority              as APMPaymentPriorityCode,
      //  flg_enforce_post as FlgEnforcePost,
      cheque_no             as APMChequeNumber,
      return_code           as APMReturnOrRejectionCode,
      //  release_activity as ReleaseActivity,
      release_status        as APMReleaseStatus,
      //  flg_ev_status as FlgEvStatus,
      //  ev_id as EvId,
      //  flg_internal as FlgInternal,
      //  split_indi as SplitIndi,
      item_group            as APMPaymentItemOffsetLinkValue,
      //  flg_item_auth as FlgItemAuth,
      //  flg_ev_status_opo as FlgEvStatusOpo,
      //  ev_id_opo as EvIdOpo,
      //  continue_ev_opo as ContinueEvOpo,
      //  account_holder_id as AccountHolderId,
      //  risk_score as RiskScore,
      bam_id                as BankAccountInternalID,
      payment_scenario      as APMPaymentScenario,
      bam_status            as APMBankAccountStatus,
      //  ref_recall_date as APMRecallDate,
      //  ref_recall_no   as APMRecallNo,

      due_date              as DueDate,
      mandate_id            as DirectDebitMandate,
      //      uci                   as APMUniqueCreditorID,
      uci                   as MandateCreditor,
      end_to_end_id         as PaymentEndToEndIdentification,
      direct_deb_type       as APMSequenceTypeCode,
      lcl_instrument        as APMLocalInstrumentISOCode,
      category_purpose_code as APMCategoryPurposeISOCode,
      service_level         as APMServiceLevelISOCode,
      //  bank_tx_domain_code as BankTxDomainCode,
      //  bank_tx_family_code as BankTxFamilyCode,
      //  bank_tx_sub_family_code as BankTxSubFamilyCode,
      //  unit as Unit,
      //  pn_number as PnNumber,
      //  pn_year as PnYear,
      //  payment_method as PaymentMethod,
      //  payment_method_supplement as PaymentMethodSupplement,
      //  flg_ihb_relevant as FlgIhbRelevant,

      crusr                 as CreationUserName,
      crdat                 as CreationDate,
      crtim                 as CreationTime
      //  crtim as Crtim
      //  chusr as Chusr,
      //  chdat as Chdat,
      //  chtim as Chtim,
      //  rlusr as Rlusr,
      //  rldat as Rldat,
      //  rltim as Rltim
}
```
