---
name: C_PAYMENTAPPROVALRULELIMITFDP
description: "This CDS view provides the limit currency and limit amount for a payment approval rule item. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value
semantic_en: "This CDS view provides the limit currency and limit amount for a payment approval rule item. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for PAR Limit — CDS view tiêu dùng dựa trên I_PaymentApprovalRuleLimit."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "par"
  - "limit"
  - "payment"
  - "approval"
  - "rule"
  - "item"
  - "payt"
  - "apprvl"
  - "currency"
  - "amount"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - payment
---
# C_PAYMENTAPPROVALRULELIMITFDP

**This CDS view provides the limit currency and limit amount for a payment approval rule item. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentApprovalRule` | ✓ | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleItem` | ✓ | |  |  | `CHAR(10)` | Payment Approval Rule Item |
| `PaytApprvlLimitCurrency` | ✓ | |  |  | `CUKY(5)` | Limit Currency |
| `PaytApprvlAmountInLmtCurrency` |  | |  |  | `CURR(23)` | Limit Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Form Data Provider for PAR Limit'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType: { serviceQuality: #C,
                          sizeCategory: #S,
                          dataClass: #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_PaymentApprovalRuleLimitFDP
  as select from I_PaymentApprovalRuleLimit
{
  key PaymentApprovalRule,
  key PaymentApprovalRuleItem,
  key PaytApprvlLimitCurrency,
      @Semantics.amount.currencyCode: 'PaytApprvlLimitCurrency'
      PaytApprvlAmountInLmtCurrency

}
```
