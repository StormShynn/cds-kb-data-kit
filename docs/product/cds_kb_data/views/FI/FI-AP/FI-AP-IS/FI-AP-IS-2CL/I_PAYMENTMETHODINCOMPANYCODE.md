---
name: I_PAYMENTMETHODINCOMPANYCODE
description: "This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value
semantic_en: "This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_PAYMENTMETHODINCOMPANYCODE

**This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PayingCompanyCode` |  | |  |  | `CHAR(4)` | Paying Company Code |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaytMethodMinimumPaymentAmount` |  | |  |  | `CURR(23)` | Minimum Amount for a Payment Using This Payment Method |
| `PaytMethodMaximumPaymentAmount` |  | |  |  | `CURR(23)` | Maximum Amount for a Payment with This Payment Method |
| `PaytMethodDistributionAmount` |  | |  |  | `CURR(23)` | Distribution into Payments up to a Maximum of This Amount |
| `GroupingRuleIsSinglePayment` |  | |  |  | `CHAR(1)` | Indicator: One Payment per Item? |
| `GroupingRuleIsPaymentPerDueDay` |  | |  |  | `CHAR(1)` | Indicator: Payment per Due Day |
| `GrpgRuleIsExtendedIndivPayment` |  | |  |  | `CHAR(1)` | Indicator: Extended Individual Payment |
| `FrgnBusinessPartnerIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Foreign Business Partner Allowed? |
| `ForeignCurrencyIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Payment Method for Foreign Currencies Allowed |
| `BankAbroadIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Bank Abroad Allowed |
| `BkSelIsOptimizedByBankGroup` |  | |  |  | `CHAR(1)` | Indicator: Carry Out Bank Selection by Bank Group |
| `BkSelIsOptimizedByPostalCode` |  | |  |  | `CHAR(1)` | Indicator: Carry Out Bank Selection by Postal Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
