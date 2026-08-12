---
name: C_CREDITDECISIONDOCUMENTQ_2
description: "This CDS view is designed to provide a comprehensive overview of credit decision documents, including details about business partners, credit segments, and various credit-related metrics. It serves as an analytical query to facilitate the analysis and monitoring of credit decisions and their associated risks. This CDS view provides the data to answer the following business questions: What are the details of credit decision documents, including their status, priority, and category? Who are the business partners involved in these credit decisions, and what are their associated credit segments and regions? What are the key dates related to the creation, last change, and closure of credit decision documents? How many credit decision documents are there, and what is the number of days the planned close date has been exceeded? What is the open credit amount, checked credit risk amount, customer credit limit amount, and customer credit exposure amount in the specified display currency? What is the percentage of credit limit utilization for each customer? Are there any failed credit checks related to static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open items? What are the related SAP object types and reference documents associated with credit decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of credit decision documents, including details about business partners, credit segments, and various credit-related metrics. It serves as an analytical query to facilitate the analysis and monitoring of credit decisions and their associated risks. This CDS view provides the data to answer the following business questions: What are the details of credit decision documents, including their status, priority, and category? Who are the business partners involved in these credit decisions, and what are their associated credit segments and regions? What are the key dates related to the creation, last change, and closure of credit decision documents? How many credit decision documents are there, and what is the number of days the planned close date has been exceeded? What is the open credit amount, checked credit risk amount, customer credit limit amount, and customer credit exposure amount in the specified display currency? What is the percentage of credit limit utilization for each customer? Are there any failed credit checks related to static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open items? What are the related SAP object types and reference documents associated with credit decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Decision Document V2 Query — CDS view tiêu dùng dựa trên Credit Decision Document V2 Query."
keywords:
  - "credit"
  - "decision"
  - "document"
  - "query"
  - "business"
  - "partner"
  - "crdt"
  - "mgmt"
  - "group"
  - "segment"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - customer
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - plan
---
# C_CREDITDECISIONDOCUMENTQ_2

**This CDS view is designed to provide a comprehensive overview of credit decision documents, including details about business partners, credit segments, and various credit-related metrics. It serves as an analytical query to facilitate the analysis and monitoring of credit decisions and their associated risks. This CDS view provides the data to answer the following business questions: What are the details of credit decision documents, including their status, priority, and category? Who are the business partners involved in these credit decisions, and what are their associated credit segments and regions? What are the key dates related to the creation, last change, and closure of credit decision documents? How many credit decision documents are there, and what is the number of days the planned close date has been exceeded? What is the open credit amount, checked credit risk amount, customer credit limit amount, and customer credit exposure amount in the specified display currency? What is the percentage of credit limit utilization for each customer? Are there any failed credit checks related to static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open items? What are the related SAP object types and reference documents associated with credit decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentUUID` |  | |  |  | `RAW(16)` | UUID of DCD |
| `CreditDecisionDocument` |  | |  |  | `CHAR(12)` | DCD ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CrdtDcsnDocumentProcessingUser` |  | |  |  | `CHAR(12)` | Processor |
| `CrdtDcsnDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | DCD Created By (User) |
| `CrdtDcsnDocLastChangedByUser` |  | |  |  | `CHAR(12)` | DCD Changed By (User) |
| `CrdtDcsnDocumentClosedByUser` |  | |  |  | `CHAR(12)` | DCD Closed By (User) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CreditDecisionDocumentReason` |  | |  |  | `CHAR(4)` | Reason for the Documented Credit Decision |
| `CreditDecisionDocumentStatus` |  | |  |  | `NUMC(1)` | DCD Status |
| `CreditDecisionDocumentPriority` |  | |  |  | `NUMC(1)` | DCD Priority |
| `CreditDecisionDocumentCategory` |  | |  |  | `CHAR(4)` | Category of the Documented Credit Decision |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `CrdtDcsnDocCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CrdtDcsnDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `CrdtDcsnDocumentCloseDate` |  | |  |  | `DATS(8)` | Closed On |
| `CrdtDcsnDocPlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CreditDecisionDocumentIsClosed` |  | |  |  | `CHAR(1)` |  |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` |  |
| `ProcessingDays` |  | |  |  | `INT4(10)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OpenCreditAmount` |  | |  |  | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  |  | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `RelatedSAPObjectType` |  | |  |  | `CHAR(30)` | SAP Object Node Type - Camel Case Node Name |
| `CreditDecisionReferenceDoc` |  | |  |  | `CHAR(70)` | Number of Document with Credit Block |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Document Value |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Oldest Open Item |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Overdue Open Items |
| `CreditLimitUtilizationPct` |  | |  | `ratio_of( portion => ( curr_to_decfloat_amount(CustomerCreditExposureAmount) ), total => ( curr_to_decfloat_amount(CustomerCreditLimitAmount ) ) ) * 100` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value)*

```abap
@EndUserText.label: 'Credit Decision Document V2 Query'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{
                          serviceQuality: #D,
                          sizeCategory: #XXL,
                          dataClass: #MIXED },
                modelingPattern: #ANALYTICAL_QUERY,          
                supportedCapabilities: [ #ANALYTICAL_QUERY ] }
                
define transient view entity C_CreditDecisionDocumentQ_2 
  provider contract analytical_query
  with parameters 
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    P_ReadLineItem     : read_fiar_lineitems
  as projection on I_CreditDecisionDocumentC_2
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType,
                 P_ReadLineItem : $parameters.P_ReadLineItem
                 )
{
      CreditDecisionDocumentUUID,
      CreditDecisionDocument,
      @UI.textArrangement: #TEXT_LAST
      @Consumption.semanticObject: 'BusinessPartner'
      BusinessPartner,
      @UI.textArrangement: #TEXT_LAST
      CrdtMgmtBusinessPartnerGroup,
      @UI.textArrangement: #TEXT_LAST
      CreditSegment,
      @UI.textArrangement: #TEXT_LAST
      Country,
      @UI.textArrangement: #TEXT_LAST
      Region,
      @UI.textArrangement: #TEXT_LAST
      CrdtDcsnDocumentProcessingUser,
      @UI.textArrangement: #TEXT_LAST
      CrdtDcsnDocumentCreatedByUser,
      CrdtDcsnDocLastChangedByUser,
      CrdtDcsnDocumentClosedByUser,
      @UI.textArrangement: #TEXT_LAST
      CreditRiskClass,
      @UI.textArrangement: #TEXT_LAST
      CreditDecisionDocumentReason,
      @UI.textArrangement: #TEXT_LAST
      CreditDecisionDocumentStatus,
      @UI.textArrangement: #TEXT_LAST
      CreditDecisionDocumentPriority,
      @UI.textArrangement: #TEXT_LAST
      CreditDecisionDocumentCategory,

      NumberOfCreditDecisionDocs,
      CrdtDcsnDocCreationDate,
      CrdtDcsnDocLastChangeDate,
      CrdtDcsnDocumentCloseDate,
      CrdtDcsnDocPlannedCloseDate,
      NmbrOfDaysPlndClsDateExceeded,
      CreditDecisionDocumentIsClosed,
      CasePlannedCloseDateIsExceeded,
      //ProcessingHours,
      ProcessingDays,

      DisplayCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      OpenCreditAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CheckedCreditRiskAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditLimitAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditExposureAmount,

      @EndUserText.label: 'Document Type'
      RelatedSAPObjectType,
      CreditDecisionReferenceDoc,

      StaticLmtUtilznCrdtChkIsFailed,
      MaxDocAmountCreditChkIsFailed,
      DynLimitUtilznCrdtChkIsFailed,
      MaxDunningLevelCrdtChkIsFailed,
      OldestOpenItemCrdtChkIsFailed,
      DaysSlsOutStdgCrdtChkIsFailed,
      OverdueOpenItemCrdtChkIsFailed,

      //  CreditLimitUtilizationPct,
      @EndUserText.label: 'Credit Limit Used %'
      @Aggregation.default: #FORMULA
      @AnalyticsDetails.query.decimals: 2

      ratio_of( portion => ( curr_to_decfloat_amount(CustomerCreditExposureAmount) ),
                total   => ( curr_to_decfloat_amount(CustomerCreditLimitAmount ) ) ) * 100 as CreditLimitUtilizationPct

}
```
