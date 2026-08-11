---
name: C_COLLECTIONSMCHNLRNGINFERENCE
description: "This CDS view provide insights into SAP Collections Management and SAP Credit Management by leveraging machine learning inference data. It integrates various financial and operational metrics related to accounting documents, customer behavior, and payment patterns, allowing businesses to analyze and predict credit risk and collection efficiency. This CDS view provides the data to answer the following business questions: What is the credit risk classification of customers based on historical payment behavior and current financial metrics? How do payment terms and net due dates affect the collection process and overdue amounts? What is the average delay in clearing payments, and how does it compare to previous periods (12 and 24 months ago)? How many accounting document items are overdue, and what is the total overdue amount in the target currency? What are the trends in dunning levels and clearing delays over time? How does the number of payments and clearing amounts in the target currency vary over different periods? What is the impact of country and customer account group on payment behavior and credit risk? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGINFERENCE')/$value
semantic_en: "This CDS view provide insights into SAP Collections Management and SAP Credit Management by leveraging machine learning inference data. It integrates various financial and operational metrics related to accounting documents, customer behavior, and payment patterns, allowing businesses to analyze and predict credit risk and collection efficiency. This CDS view provides the data to answer the following business questions: What is the credit risk classification of customers based on historical payment behavior and current financial metrics? How do payment terms and net due dates affect the collection process and overdue amounts? What is the average delay in clearing payments, and how does it compare to previous periods (12 and 24 months ago)? How many accounting document items are overdue, and what is the total overdue amount in the target currency? What are the trends in dunning levels and clearing delays over time? How does the number of payments and clearing amounts in the target currency vary over different periods? What is the impact of country and customer account group on payment behavior and credit risk? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "C_COLLECTIONSMCHNLRNGINFERENCE — CDS view tiêu dùng dựa trên P_CollectionsMchnLrngInference."
keywords:
  - "collectionsmchnlrnginference"
  - "company"
  - "code"
  - "accounting"
  - "document"
  - "fiscal"
  - "year"
  - "item"
  - "source"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - consumption-view
  - customer
  - document
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
---
# C_COLLECTIONSMCHNLRNGINFERENCE

**This CDS view provide insights into SAP Collections Management and SAP Credit Management by leveraging machine learning inference data. It integrates various financial and operational metrics related to accounting documents, customer behavior, and payment patterns, allowing businesses to analyze and predict credit risk and collection efficiency. This CDS view provides the data to answer the following business questions: What is the credit risk classification of customers based on historical payment behavior and current financial metrics? How do payment terms and net due dates affect the collection process and overdue amounts? What is the average delay in clearing payments, and how does it compare to previous periods (12 and 24 months ago)? How many accounting document items are overdue, and what is the total overdue amount in the target currency? What are the trends in dunning levels and clearing delays over time? How does the number of payments and clearing amounts in the target currency vary over different periods? What is the impact of country and customer account group on payment behavior and credit risk? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGINFERENCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `SourceCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `NetDueDteToSplitDteDurnInDays` |  | |  |  | `INT4(10)` | Number of Days Until or Since Net Due Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `ClrgDelayInDaysIsOverThreshold` |  | |  |  | `NUMC(1)` | Clearing Delay is Over Threshold |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `NetDueDateWeekDay` |  | |  |  | `NUMC(1)` | Weekday of Net Due Date |
| `NetDueDateCalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year of Net Due Date |
| `NetDueDateCalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month of Net Due Date |
| `NetDueDateDayOfMonth` |  | |  |  | `NUMC(2)` | Calendar Day of Net Due Date |
| `NetDueDateCalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week of Net Due Date |
| `DueCalcBaseDateWeekDay` |  | |  |  | `NUMC(1)` | Weekday of Baseline Date |
| `DueCalcBaseDateCalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year of Baseline Date |
| `DueCalcBaseDateCalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month of Baseline Date |
| `DueCalcBaseDateDayOfMonth` |  | |  |  | `NUMC(2)` | Calendar Day of Baseline Date |
| `DueCalcBaseDateCalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week of Baseline Date |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | Target Currency (USD) |
| `AmountInTargetCurrency` |  | |  |  | `CURR(23)` | Invoice Amount in Target Currency (USD) |
| `DueCalcBaseToNetDueDurnInDays` |  | |  |  | `INT4(10)` | Days Between Invoice Creation and Net Due Date of Invoice |
| `NetDueDatePositionInMonthValue` |  | |  |  | `CHAR(1)` | Net Due Date Position within the Month |
| `ClearingDatePosInMonthValue` |  | |  |  | `CHAR(1)` | Average Clearing Date Position within the Month |
| `NrOfOvrdAcctgDocItems` |  | |  |  | `INT4(10)` | Total No. of Overdue Invoices for Customer |
| `NumberOfDunnedAcctgDocItems` |  | |  |  | `INT8(19)` | Total No. of Dunned Invoices for Customer |
| `AverageOverdueDays` |  | |  |  | `DEC(15)` | Average Days Overdue |
| `OverdueAmountInTargetCurrency` |  | |  |  | `CURR(31)` | Amount of Overdue Invoices for Customer in USD |
| `NrOfDundAcctgDocItms12MnthsAgo` |  | |  |  | `INT4(10)` | Number of Dunned Invoices for Customer (Last 12 Months) |
| `AvgClrgDelay12MonthsAgoInDays` |  | |  |  | `DEC(12)` | Average Clearing Delay for Customer (Last 12 Months) |
| `NumberOfPayments12MonthsAgo` |  | |  |  | `INT4(10)` | Number of Cleared Invoices for Customer (Last 12 Months) |
| `ClrgDelay12MonthsAgoPercent` |  | |  |  | `DEC(8)` | Percentage of Clearing Delay Over 30 Days (Last 12 Months) |
| `AvgClrgAmtInTgtCrcy12MonthsAgo` |  | |  |  | `CURR(23)` | Average Clearing Amount (Last 12 Months) |
| `NrOfDundAcctgDocItms24MnthsAgo` |  | |  |  | `INT4(10)` | Number of Dunned Invoices for Customer (Last 24 Months) |
| `AvgClrgDelay24MonthsAgoInDays` |  | |  |  | `DEC(12)` | Average Clearing Delay for Customer (Last 24 Months) |
| `NumberOfPayments24MonthsAgo` |  | |  |  | `INT4(10)` | Number of Cleared Invoices for Customer (Last 24 Months) |
| `ClrgDelay24MonthsAgoPercent` |  | |  |  | `DEC(8)` | Percentage of Clearing Delay Over 30 Days (Last 24 Months) |
| `AvgClrgAmtInTgtCrcy24MonthsAgo` |  | |  |  | `CURR(23)` | Average Clearing Amount (Last 24 Months) |
| `_OperationalAcctgDocItem` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGINFERENCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGINFERENCE')/$value)*

```abap
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@AbapCatalog: { sqlViewName: 'CCOLLMLINFERENCE',
                compiler: { compareFilter: true },
                preserveKey: true }
@AccessControl: { personalData: { blocking: #BLOCKED_DATA_EXCLUDED },
                  authorizationCheck:    #MANDATORY }
@EndUserText: { label: 'Collections Machine Learning Inference' }
@VDM: { viewType: #CONSUMPTION }
@Metadata: { ignorePropagatedAnnotations: true }
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE ],
                usageType: { sizeCategory:   #XL,
                             dataClass:      #MIXED,
                             serviceQuality: #X } }
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

define view C_CollectionsMchnLrngInference
  as select from P_CollectionsMchnLrngInference
                 ( P_ExchangeRateType         : 'M',
                 P_TargetCurrency             : 'USD',
                 P_CollsMchnLrngInferenceDate : $session.system_date )
{

      // VDM Fields
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,
  key AccountingDocumentItem,

      CompanyCode as SourceCompanyCode,
      Customer,
      BusinessPartner,
      CreditRiskClass,
      PaymentTerms,
      NetDueDteToSplitDteDurnInDays,
      Country,
      CustomerAccountGroup,
      ClrgDelayInDaysIsOverThreshold,
      DunningLevel,
      NetDueDateWeekDay,
      NetDueDateCalendarYear,
      NetDueDateCalendarMonth,
      NetDueDateDayOfMonth,
      NetDueDateCalendarWeek,
      DueCalcBaseDateWeekDay,
      DueCalcBaseDateCalendarYear,
      DueCalcBaseDateCalendarMonth,
      DueCalcBaseDateDayOfMonth,
      DueCalcBaseDateCalendarWeek,

      @Semantics: { currencyCode: true }
      TransactionCurrency,

      @Semantics: { currencyCode: true }
      TargetCurrency,

      @Semantics: { amount: { currencyCode: 'TargetCurrency' } }
      AmountInTargetCurrency,

      DueCalcBaseToNetDueDurnInDays,
      NetDueDatePositionInMonthValue,
      ClearingDatePosInMonthValue,
      NrOfOvrdAcctgDocItems,
      NumberOfDunnedAcctgDocItems,
      AverageOverdueDays,

      @Semantics: { amount: { currencyCode: 'TargetCurrency' } }
      OverdueAmountInTargetCurrency,

      NrOfDundAcctgDocItms12MnthsAgo,
      AvgClrgDelay12MonthsAgoInDays,
      NumberOfPayments12MonthsAgo,
      ClrgDelay12MonthsAgoPercent,

      @Semantics: { amount: { currencyCode: 'TargetCurrency' } }
      AvgClrgAmtInTgtCrcy12MonthsAgo,

      NrOfDundAcctgDocItms24MnthsAgo,
      AvgClrgDelay24MonthsAgoInDays,
      NumberOfPayments24MonthsAgo,

      ClrgDelay24MonthsAgoPercent,
      @Semantics: { amount: { currencyCode: 'TargetCurrency' } }
      AvgClrgAmtInTgtCrcy24MonthsAgo,

      // Exposed associations
      _OperationalAcctgDocItem

}
```
