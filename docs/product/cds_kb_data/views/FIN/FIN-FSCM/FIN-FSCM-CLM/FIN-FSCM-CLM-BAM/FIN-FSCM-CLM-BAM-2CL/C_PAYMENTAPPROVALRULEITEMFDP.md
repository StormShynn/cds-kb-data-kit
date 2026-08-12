---
name: C_PAYMENTAPPROVALRULEITEMFDP
description: "This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value
semantic_en: "This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for PAR Item — CDS view tiêu dùng dựa trên I_PaymentApprovalRuleItem."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "par"
  - "item"
  - "payment"
  - "approval"
  - "rule"
  - "category"
  - "unlimited"
  - "payt"
  - "apprvl"
  - "dflt"
  - "crcy"
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
# C_PAYMENTAPPROVALRULEITEMFDP

**This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentApprovalRule` | ✓ | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleItem` | ✓ | |  |  | `CHAR(10)` | Payment Approval Rule Item |
| `PaymentApprovalCategory` |  | |  |  | `CHAR(3)` | Payment Approval Category |
| `IsUnlimited` |  | |  |  | `CHAR(1)` | Unlimited Payment Approval Authorization |
| `PaytApprvlLmtAmtInDfltLmtCrcy` |  | |  |  | `CURR(23)` | Default Limit Amount |
| `PaytApprvlDfltLmtCurrency` |  | |  |  | `CUKY(5)` | Default Limit Currency |
| `_ApproverGroup` | | ✓ | | | | |
| `_Limit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApproverGroup` | `C_PaytApprvlRuleApprvrGroupFDP` | [0..*] |
| `_Limit` | `C_PaymentApprovalRuleLimitFDP` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Form Data Provider for PAR Item'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType: { serviceQuality: #C,
                          sizeCategory: #S,
                          dataClass: #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_PaymentApprovalRuleItemFDP
  as select from I_PaymentApprovalRuleItem
  association [0..*] to C_PaytApprvlRuleApprvrGroupFDP as _ApproverGroup on  $projection.PaymentApprovalRule     = _ApproverGroup.PaymentApprovalRule
                                                                         and $projection.PaymentApprovalRuleItem = _ApproverGroup.PaymentApprovalRuleItem
  association [0..*] to C_PaymentApprovalRuleLimitFDP  as _Limit         on  $projection.PaymentApprovalRule     = _Limit.PaymentApprovalRule
                                                                         and $projection.PaymentApprovalRuleItem = _Limit.PaymentApprovalRuleItem
{
  key PaymentApprovalRule,
  key PaymentApprovalRuleItem,
      PaymentApprovalCategory,
      _PaymentApprovalCategoryText[1:Language = $session.system_language].PaymentApprovalCategoryName,
      IsUnlimited,
      @Semantics.amount.currencyCode: 'PaytApprvlDfltLmtCurrency'
      PaytApprvlLmtAmtInDfltLmtCrcy,
      PaytApprvlDfltLmtCurrency,
      _ApproverGroup,
      _Limit
}
```
