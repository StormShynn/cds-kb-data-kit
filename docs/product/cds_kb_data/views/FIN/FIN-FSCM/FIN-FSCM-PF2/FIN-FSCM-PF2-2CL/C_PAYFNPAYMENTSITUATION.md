---
name: C_PAYFNPAYMENTSITUATION
description: "Requested Payments Situation"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value
semantic_en: "Requested Payments Situation"
semantic_vi: "Requested Payments Situation — CDS view tiêu dùng dựa trên R_PayFnPaymentTP."
keywords:
  - "requested"
  - "payments"
  - "situation"
  - "payment"
  - "business"
  - "status"
  - "text"
  - "origin"
  - "document"
  - "type"
tags:
  - FIN
  - component:FIN-FSCM-PF2-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - FIN-FSCM-PF2-2CL
  - lob:finance
  - payment
---
# C_PAYFNPAYMENTSITUATION

**Requested Payments Situation**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PayFnPaymentUUID` | ✓ | |  |  | `RAW(16)` | Payment UUID |
| `PayFnBusinessStatus` |  | | `_PaymentBusinessStatus` | `PayFnBusinessStatus` | `CHAR(4)` | Payment Business Status |
| `PayFnBusinessStatusText` |  | |  | `_PaymentBusinessStatus._BusinessStatus._Text[1:Language = $session.system_language].PayFnBusinessStatusText` | `CHAR(140)` | Payment Business Status Description |
| `PayFnOriginDocument` |  | |  |  | `CHAR(35)` | Senders/Origin Document Identifier |
| `PayFnOriginDocumentTypeText` |  | |  | `_OriginDocumentType[1: Language=$session.system_language].PayFnCodeShortDescription` | `CHAR(140)` | ISO Code Name |
| `PayFnTransactionAmount` |  | |  |  | `DEC(22)` | Amount |
| `PayFnTransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `CategoryPurposeISOCode` |  | |  |  | `CHAR(4)` | External Category Purpose Code |
| `PurposeISOCode` |  | |  |  | `CHAR(4)` | External Purpose Code |
| `PayFnStatusReasonISOCode` |  | | `_PaymentStatusReason` | `PayFnStatusReasonISOCode` | `CHAR(35)` | Status Reason Standard ISO Code |
| `PaymentStatusReasonText` |  | | `_PaymentStatusReason` | `PaymentStatusReasonText` | `CHAR(1)` |  |
| `PayFnInitiatorCompanyCode` |  | |  |  | `CHAR(4)` | Payer Company Code |
| `PayFnApprovalDuration` |  | |  | `tstmp_seconds_between( _PaymentBusinessStatus.LastChangedAtDateTime, tstmp_current_utctimestamp(), 'NULL')` | `DEC(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel:{
  supportedCapabilities: [#SITUATION_ANCHOR, #SITUATION_TRIGGER],
  semanticKey: ['PayFnOriginDocument']
}

@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Requested Payments Situation'
define view entity C_PayFnPaymentSituation
  as select from R_PayFnPaymentTP
{
  key PayFnPaymentUUID, 

      _PaymentBusinessStatus.PayFnBusinessStatus,
      _PaymentBusinessStatus._BusinessStatus._Text[1:Language = $session.system_language].PayFnBusinessStatusText as PayFnBusinessStatusText,

      PayFnOriginDocument,
      _OriginDocumentType[1: Language=$session.system_language].PayFnCodeShortDescription                         as PayFnOriginDocumentTypeText,

      @Semantics.amount.currencyCode: 'PayFnTransactionCurrency'
      PayFnTransactionAmount,
      PayFnTransactionCurrency,

      CategoryPurposeISOCode,
      PurposeISOCode,

      _PaymentStatusReason.PayFnStatusReasonISOCode,
      _PaymentStatusReason.PaymentStatusReasonText,

      PayFnInitiatorCompanyCode,

      tstmp_seconds_between( _PaymentBusinessStatus.LastChangedAtDateTime, tstmp_current_utctimestamp(), 'NULL')  as PayFnApprovalDuration

}
```
