---
name: C_PAYMENTAPPROVALRULEFDP
description: "This CDS view provides the detail information about the payment approval rule, such as the description, the status and the default limit currency of the payment approval rule. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value
semantic_en: "This CDS view provides the detail information about the payment approval rule, such as the description, the status and the default limit currency of the payment approval rule. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for PAR — CDS view tiêu dùng dựa trên I_PaymentApprovalRule."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "par"
  - "payment"
  - "approval"
  - "rule"
  - "name"
  - "status"
  - "payt"
  - "apprvl"
  - "dflt"
  - "currency"
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
# C_PAYMENTAPPROVALRULEFDP

**This CDS view provides the detail information about the payment approval rule, such as the description, the status and the default limit currency of the payment approval rule. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentApprovalRule` | ✓ | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleName` |  | |  |  | `CHAR(40)` | Description of Payment Approval Rule |
| `PaymentApprovalRuleStatus` |  | |  |  | `CHAR(2)` | Payment Approval Rule Status |
| `PaytApprvlDfltLmtCurrency` |  | |  |  | `CUKY(5)` | Default Limit Currency |
| `_PaymentApprovalRuleItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentApprovalRuleItem` | `C_PaymentApprovalRuleItemFDP` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Form Data Provider for PAR'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_PaymentApprovalRuleFDP
  as select from I_PaymentApprovalRule
  association [0..*] to C_PaymentApprovalRuleItemFDP as _PaymentApprovalRuleItem on $projection.PaymentApprovalRule = _PaymentApprovalRuleItem.PaymentApprovalRule
{
  key PaymentApprovalRule,
      PaymentApprovalRuleName,
      PaymentApprovalRuleStatus,
      _PaymentApprovalRuleStatusTxt[1:Language = $session.system_language].PaymentApprovalRuleStatusName,
      PaytApprvlDfltLmtCurrency,
      _PaymentApprovalRuleItem
}
```
