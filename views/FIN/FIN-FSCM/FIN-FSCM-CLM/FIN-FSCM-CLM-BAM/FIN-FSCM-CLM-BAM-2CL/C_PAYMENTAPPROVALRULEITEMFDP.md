---
name: C_PAYMENTAPPROVALRULEITEMFDP
description: "This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value
semantic_en: "This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - metadata-only
---
# C_PAYMENTAPPROVALRULEITEMFDP

**This CDS view provides the detail information about a payment approval rule item such as the Payment Approval Category, the information whether an Unlimited Payment Approval Authorization is granted, and the default limit amount and currency. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentApprovalRule` |  | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleItem` |  | |  |  | `CHAR(10)` | Payment Approval Rule Item |
| `PaymentApprovalCategory` |  | |  |  | `CHAR(3)` | Payment Approval Category |
| `PaymentApprovalCategoryName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsUnlimited` |  | |  |  | `CHAR(1)` | Unlimited Payment Approval Authorization |
| `PaytApprvlLmtAmtInDfltLmtCrcy` |  | |  |  | `CURR(23)` | Default Limit Amount |
| `PaytApprvlDfltLmtCurrency` |  | |  |  | `CUKY(5)` | Default Limit Currency |
