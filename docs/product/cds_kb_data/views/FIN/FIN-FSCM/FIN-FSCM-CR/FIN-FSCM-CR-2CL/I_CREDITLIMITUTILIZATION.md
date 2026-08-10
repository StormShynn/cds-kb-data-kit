---
name: I_CREDITLIMITUTILIZATION
description: "This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value
semantic_en: "This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITLIMITUTILIZATION

**This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CreditAccountGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group (Obsolete) |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `KeyDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `ValuationThresholdPercent` |  | |  |  | `DEC(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `HedgedExposureAmount` |  | |  |  | `CURR(15)` | Hedged Credit Exposure |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerIsAboveThreshold` |  | |  |  | `INT4(10)` | Threshold exceeded |
| `CrdtLmtExceededAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Limit Exceeded Amount |
| `RemainingCreditAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Credit Amount |
| `CrdtUsageWthnLmtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Amount used within Limit |
