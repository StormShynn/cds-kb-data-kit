---
name: I_CADOCUMENTGLITEMPAYMENTDATA
description: "Cadocumentglitempaymentdata"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - payment
  - document
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTGLITEMPAYMENTDATA

**Cadocumentglitempaymentdata**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  | `opbel` |  |  |
| `CAGLItemNumber` | ✓ | |  | `opupk` |  |  |
| `PaymentCardType` |  | |  | `ccins` |  |  |
| `PaytCardByDigitalPaymentSrvc` |  | |  | `ccnum` |  |  |
| `PaymentCardSequenceNumber` |  | |  | `ccfol` |  |  |
| `PaymentCardValidityStartDate` |  | |  | `datab` |  |  |
| `PaymentCardValidityEndDate` |  | |  | `datbi` |  |  |
| `PaymentCardHolderName` |  | |  | `ccname` |  |  |
| `CAAuthznByDigitalPaytSrvc` |  | |  | `aunum` |  |  |
| `CAAuthorizationByAcquirer` |  | |  | `autra` |  |  |
| `AuthorizationDate` |  | |  | `audat` |  |  |
| `AuthorizationTime` |  | |  | `autim` |  |  |
| `CAAuthorizationType` |  | |  | `auart` |  |  |
| `AuthorizedAmountInAuthznCrcy` |  | |  | `autwr` |  |  |
| `AuthorizationCurrency` |  | |  | `ccwae` |  |  |
| `CAPaytServiceProviderMerchant` |  | |  | `merch` |  |  |
| `AuthorizationExpirationDate` |  | |  | `expdt` |  |  |
| `AuthorizationExpirationTime` |  | |  | `exptm` |  |  |
| `CAPaymentIDAuthznWithBilling` |  | |  | `aucid` |  |  |
| `CASettlementPaymentAdviceRef` |  | |  | `avref` |  |  |
| `PaymentCardAuthznRelationID` |  | |  | `dp_auth_rel_id` |  |  |
| `DigitalPaymentFraudRisk` |  | |  | `dp_fraud_risk` |  |  |
| `CAPostingDate` |  | |  | `budat` |  |  |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `CAPaymentBillingStatus` |  | |  | `xsett` |  |  |
| `CASettlementMassRunID` |  | |  | `laufi` |  |  |
| `CASettlementDocument` |  | |  | `stdoc` |  |  |
| `CAPaytCardSupplementIsResent` |  | |  | `resend` |  |  |
| `CAReturnLot` | ✓ | |  | `keyr1` |  |  |
| `CAReturnReason` |  | |  | `rlgrd` |  |  |
| `CASettlmtChrgAmtInSettlmtCrcy` |  | |  | `ccfam` |  |  |
| `CAPaymentCardSettlementID` |  | |  | `srqid` |  |  |
| `CASettlmtAmountInSettlmtCrcy` |  | |  | `setam` |  |  |
| `SettlementCurrency` |  | |  | `setcu` |  |  |
| `DgtlPaytDisbursementReference` |  | |  | `dsbid` |  |  |
| `CreationDate` |  | |  | `crdat` |  |  |
| `CreationTime` |  | |  | `crtms` |  |  |
| `CreatedByUser` |  | |  | `crnam` |  |  |
| `PaymentCardUUID` |  | |  | `cguid` |  |  |
| `EncryptionType` |  | |  | `enctp` |  |  |
| `CAKeyForPaymentCardSupplement` |  | |  | `xguid` |  |  |
| `PaymentServiceProvider` |  | |  | `pays_prov` |  |  |
| `PaymentRefByPaytSrvcProvider` |  | |  | `pays_tran` |  |  |
| `OriglPaytRefByPaytSrvcProvider` |  | |  | `orig_pays_tran` |  |  |
| `OriginalSourceOfCredit` |  | |  | `orig_credit` |  |  |
| `PaymentCardMaskedNumber` |  | |  | `masked_id` |  |  |
| `DigitalPaymentType` |  | |  | `dp_payment_type` |  |  |
| `PaymentByDigitalPaymentService` |  | |  | `dp_trans_id` |  |  |
| `MerchantByClearingHouse` |  | |  | `merch` |  |  |
| `_CAAuthorizationType` | | ✓ | | | | |
| `_CACreditPostingOrigin` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAPaymentBillingStatus` | | ✓ | | | | |
| `_CAReturnReason` | | ✓ | | | | |
| `_AuthorizationCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SettlementCurrency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAAuthorizationType` | `I_CAAuthorizationType` | [0..1] |
| `_CACreditPostingOrigin` | `I_CACreditPostingOrigin` | [0..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CAPaymentBillingStatus` | `I_CAPaymentBillingStatus` | [0..1] |
| `_CAReturnReason` | `I_CAReturnReason` | [0..*] |
| `_AuthorizationCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_SettlementCurrency` | `I_Currency` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document G/L Item Payment Data'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgDocGenLdgrItmPaytDta',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_CADocumentGLItemPaymentData
  as select from dfkkopkc
  
  association [0..1] to I_CAAuthorizationType    as _CAAuthorizationType    on $projection.CAAuthorizationType = _CAAuthorizationType.CAAuthorizationType
  association [0..1] to I_CACreditPostingOrigin  as _CACreditPostingOrigin  on $projection.OriginalSourceOfCredit = _CACreditPostingOrigin.OriginalSourceOfCredit
  association [1..1] to I_CADocument             as _CADocument             on $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CAPaymentBillingStatus as _CAPaymentBillingStatus on $projection.CAPaymentBillingStatus = _CAPaymentBillingStatus.CAPaymentBillingStatus
  association [0..*] to I_CAReturnReason         as _CAReturnReason         on $projection.CAReturnReason = _CAReturnReason.CAReturnReason                      
                                                                            and _CAReturnReason.HouseBank is not initial
  association [1..1] to I_Currency               as _AuthorizationCurrency  on $projection.AuthorizationCurrency = _AuthorizationCurrency.Currency
  association [1..1] to I_Currency               as _TransactionCurrency    on $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Currency               as _SettlementCurrency     on $projection.SettlementCurrency = _SettlementCurrency.Currency
  association [1..1] to I_CompanyCode            as _CompanyCode            on $projection.CompanyCode = _CompanyCode.CompanyCode
  
  // not c1 released and therefore cannot be used here:
  //association [1..1] to I_PaytServiceProviderIdn as _PaymentServiceProvider on $projection.PaymentServiceProvider = _PaymentServiceProvider.PaymentServiceProvider

{
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel           as CADocumentNumber,
  key opupk           as CAGLItemNumber,

      ccins           as PaymentCardType,
      ccnum           as PaytCardByDigitalPaymentSrvc,
      ccfol           as PaymentCardSequenceNumber,
      datab           as PaymentCardValidityStartDate,
      datbi           as PaymentCardValidityEndDate,
      ccname          as PaymentCardHolderName,
      aunum           as CAAuthznByDigitalPaytSrvc,
      autra           as CAAuthorizationByAcquirer,
      audat           as AuthorizationDate,
      autim           as AuthorizationTime,
      @ObjectModel.foreignKey.association: '_CAAuthorizationType'
      auart           as CAAuthorizationType,
      @Semantics.amount.currencyCode: 'AuthorizationCurrency'
      autwr           as AuthorizedAmountInAuthznCrcy,
      @ObjectModel.foreignKey.association: '_AuthorizationCurrency'
      ccwae           as AuthorizationCurrency,
      merch           as CAPaytServiceProviderMerchant,
      expdt           as AuthorizationExpirationDate,
      exptm           as AuthorizationExpirationTime,
      //extmp,
      //autmp,
      aucid           as CAPaymentIDAuthznWithBilling,
      avref           as CASettlementPaymentAdviceRef,
      dp_auth_rel_id  as PaymentCardAuthznRelationID,
      dp_fraud_risk   as DigitalPaymentFraudRisk,
      budat           as CAPostingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw           as CAAmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers           as TransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs           as CompanyCode,
      valut           as ValueDate,
      @ObjectModel.foreignKey.association: '_CAPaymentBillingStatus'
      xsett           as CAPaymentBillingStatus,
      laufi           as CASettlementMassRunID,
      stdoc           as CASettlementDocument,
      resend          as CAPaytCardSupplementIsResent,
      keyr1           as CAReturnLot,
      @ObjectModel.foreignKey.association: '_CAReturnReason'
      rlgrd           as CAReturnReason,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ccfam           as CASettlmtChrgAmtInSettlmtCrcy,
      srqid           as CAPaymentCardSettlementID,
      @Semantics.amount.currencyCode: 'SettlementCurrency'
      setam           as CASettlmtAmountInSettlmtCrcy,
      @ObjectModel.foreignKey.association: '_SettlementCurrency'
      setcu           as SettlementCurrency,
      //laufi_info
      //mwskz
      //taxam      
      dsbid           as DgtlPaytDisbursementReference,
      //laufd_pyp,
      //laufi_pyp,
      //orign_pyp,
      //anzrate,
      crdat           as CreationDate,
      crtms           as CreationTime,
      crnam           as CreatedByUser,
      //cvval,
      //cvvct,
      //cvvst,
      cguid           as PaymentCardUUID,
      enctp           as EncryptionType,
      xguid           as CAKeyForPaymentCardSupplement,
      //keypp
      //encvl
      //xtrid
      //@ObjectModel.foreignKey.association: '_PaymentServiceProvider'
      pays_prov       as PaymentServiceProvider,
      pays_tran       as PaymentRefByPaytSrvcProvider,
      orig_pays_tran  as OriglPaytRefByPaytSrvcProvider,
      @ObjectModel.foreignKey.association: '_CACreditPostingOrigin'
      orig_credit     as OriginalSourceOfCredit,
      //_dataaging,
      masked_id       as PaymentCardMaskedNumber,
      //iban         as SEPAMandateSenderIBAN,
      //swift        as SEPAMandateSenderBankSWIFTCode,
      //koinh_ip,
      //txtvw,
      //meref_ip,
      //bkref_ip,
      //pyref_ip,
      dp_payment_type as DigitalPaymentType,
      dp_trans_id     as PaymentByDigitalPaymentService,

      // Associations
      _AuthorizationCurrency,
      _CAAuthorizationType,
      _CACreditPostingOrigin,
      _CADocument,
      _CAPaymentBillingStatus,
      _CAReturnReason,
      _CompanyCode,
      //_PaymentServiceProvider,
      _SettlementCurrency,
      _TransactionCurrency,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAPaytServiceProviderMerchant'
      merch           as MerchantByClearingHouse
}
```
