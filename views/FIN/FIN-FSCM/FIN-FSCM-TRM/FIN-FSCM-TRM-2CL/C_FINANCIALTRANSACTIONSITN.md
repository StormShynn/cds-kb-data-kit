---
name: C_FINANCIALTRANSACTIONSITN
description: This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value
semantic_en: This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - notification
  - product
  - transaction
  - metadata-only
---
# C_FINANCIALTRANSACTIONSITN

**This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransWithCompanyCode` |  | |  |  | `CHAR(18)` | Financial Transaction Number With Company Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `LetterOfCredit` |  | |  |  | `CHAR(16)` | Letter of Credit Number |
| `BankGuaranteeNumber` |  | |  |  | `CHAR(16)` | Bank Guarantee Number |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinTransActyConclusionDate` |  | |  |  | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FinTransGenActivityCategory` |  | |  |  | `NUMC(3)` | General Activity Category |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinTransCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TreasuryAdvisingBank` |  | |  |  | `CHAR(10)` | Advising Bank |
| `TreasuryApplicant` |  | |  |  | `CHAR(10)` | Applicant |
| `BankGuaranteeType` |  | |  |  | `CHAR(4)` | Bank Guarantee Type |
| `TreasuryBeneficiary` |  | |  |  | `CHAR(10)` | Beneficiary |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `CurrencyPair` |  | |  |  | `CHAR(20)` | Currency Pair |
| `FinTransExerciseDate` |  | |  |  | `DATS(8)` | Exercise Date |
| `OptionExpirationDate` |  | |  |  | `DATS(8)` | Expiration Date |
| `FinTransFixingDate` |  | |  |  | `DATS(8)` | Fixing Date |
| `TreasuryIssuingBank` |  | |  |  | `CHAR(10)` | Issuing Bank |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransPositionValueDate` |  | |  |  | `DATS(8)` | Position Value Date |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `ForeignExchangeValueDate` |  | |  |  | `DATS(8)` | Foreign Exchange Value Date |
| `FinTransPremiumPaymentDate` |  | |  |  | `DATS(8)` | Premium Payment Date |
