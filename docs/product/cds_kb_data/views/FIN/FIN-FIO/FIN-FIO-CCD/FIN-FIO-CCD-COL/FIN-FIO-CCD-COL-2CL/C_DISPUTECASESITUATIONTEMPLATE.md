---
name: C_DISPUTECASESITUATIONTEMPLATE
description: "This CDS view provides a comprehensive overview of situations created from dispute cases in SAP Dispute Management. It aggregates various attributes related to dispute cases, such as financial amounts, case details, and responsible personnel, enabling users to analyze and manage dispute situations effectively. This CDS view provides the data to answer the following business questions: What are the key details and financial metrics associated with each dispute case, including amounts originally disputed, paid, credited, and written off? Who are the coordinators and processors responsible for handling each dispute case? What are the root causes and reasons for the disputes, and how are they categorized and prioritized? What is the status and system status of each dispute case, and what are the planned and actual closure dates? How can the organization track changes and updates to dispute cases, including who created, last changed, and closed the cases? What are the external references and applications linked to each dispute case, and how do they relate to the company's operations? How can the organization manage customer-related dispute information, including disputed amounts and currencies? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value
semantic_en: "This CDS view provides a comprehensive overview of situations created from dispute cases in SAP Dispute Management. It aggregates various attributes related to dispute cases, such as financial amounts, case details, and responsible personnel, enabling users to analyze and manage dispute situations effectively. This CDS view provides the data to answer the following business questions: What are the key details and financial metrics associated with each dispute case, including amounts originally disputed, paid, credited, and written off? Who are the coordinators and processors responsible for handling each dispute case? What are the root causes and reasons for the disputes, and how are they categorized and prioritized? What is the status and system status of each dispute case, and what are the planned and actual closure dates? How can the organization track changes and updates to dispute cases, including who created, last changed, and closed the cases? What are the external references and applications linked to each dispute case, and how do they relate to the company's operations? How can the organization manage customer-related dispute information, including disputed amounts and currencies? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "C_DISPUTECASESITUATIONTEMPLATE — CDS view tiêu dùng (transactional data) dựa trên R_DisputeCase."
keywords:
  - "disputecasesituationtemplate"
  - "dispute"
  - "case"
  - "coordinator"
  - "root"
  - "cause"
  - "processing"
  - "deadline"
  - "date"
  - "original"
  - "amount"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FIO-CCD-COL-2CL
  - consumption-view
  - customer
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - lob:controlling
  - lob:finance
  - plan
---
# C_DISPUTECASESITUATIONTEMPLATE

**This CDS view provides a comprehensive overview of situations created from dispute cases in SAP Dispute Management. It aggregates various attributes related to dispute cases, such as financial amounts, case details, and responsible personnel, enabling users to analyze and manage dispute situations effectively. This CDS view provides the data to answer the following business questions: What are the key details and financial metrics associated with each dispute case, including amounts originally disputed, paid, credited, and written off? Who are the coordinators and processors responsible for handling each dispute case? What are the root causes and reasons for the disputes, and how are they categorized and prioritized? What is the status and system status of each dispute case, and what are the planned and actual closure dates? How can the organization track changes and updates to dispute cases, including who created, last changed, and closed the cases? What are the external references and applications linked to each dispute case, and how do they relate to the company's operations? How can the organization manage customer-related dispute information, including disputed amounts and currencies? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `CaseProcessingDeadlineDate` |  | |  |  | `DATS(8)` | Processing Deadline |
| `OriginalAmount` |  | |  |  | `CURR(15)` | Original Disputed Amount |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `CreditedAmount` |  | |  |  | `CURR(15)` | Amount Credited |
| `WriteOffAmount` |  | |  |  | `CURR(15)` | Amount Cleared Manually |
| `ManuallyClearedAmount` |  | |  |  | `CURR(15)` | Automatically Written Off |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `DisputeCaseCurrency` |  | |  |  | `CUKY(5)` | Currency of Dispute Case |
| `CustomerDisputedAmount` |  | |  |  | `CURR(15)` | Customer Disputed Amount |
| `CustomerDisputedCurrency` |  | |  |  | `CUKY(5)` | Currency of Customer-Disputed Amount |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `DisputeCaseExternalApplication` |  | |  |  | `CHAR(4)` | Processing by External Application |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseExternalReference` |  | |  |  | `CHAR(30)` | External Reference |
| `CaseCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `CaseCreatedOn` |  | |  |  | `DEC(15)` | Created At |
| `CaseLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CaseLastChangedOn` |  | |  |  | `DEC(15)` | Last Changed At |
| `CaseClosedBy` |  | |  |  | `CHAR(12)` | Closed by User |
| `CaseClosedTime` |  | |  |  | `DEC(15)` | Closed At |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `CaseResponsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  |  | `CHAR(4)` | Category |
| `CasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_DisputeCase` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CDISCASSITTMPL',
                compiler:    { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #CHECK}
@EndUserText: { label: 'Dispute Case Situation Template' }
@VDM: { viewType: #CONSUMPTION,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType:         { serviceQuality: #A,
                                     sizeCategory:   #L,
                                     dataClass:      #TRANSACTIONAL },
                semanticKey:       [ 'DisputeCaseUUID' ],
                representativeKey: 'DisputeCaseUUID',
                supportedCapabilities: [ #SITUATION_ANCHOR,
                                         #SITUATION_TRIGGER ] }
@Metadata: { ignorePropagatedAnnotations: true }                                      
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

define root view C_DisputeCaseSituationTemplate
  as select from R_DisputeCase
  // Extension Include View
  association [1] to E_DisputeCase as _Extension on $projection.DisputeCaseUUID = _Extension.DisputeCaseUUID
{
      @UI: { hidden: true }
  key DisputeCaseUUID,

      DisputeCaseCoordinator,
      DisputeCaseRootCause,
      CaseProcessingDeadlineDate,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      OriginalAmount,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      DisputedAmount,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      PaidAmount,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      CreditedAmount,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      WriteOffAmount,
      
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      ManuallyClearedAmount,

      @UI: { hidden: true }
      CaseID,

      DisputeCaseCurrency,
      
      @Semantics: { amount: { currencyCode: 'CustomerDisputedCurrency' } }
      CustomerDisputedAmount,
      
      CustomerDisputedCurrency,
      Customer,
      CompanyCode,
      DisputeCaseExternalApplication,
      CaseType,
      CaseExternalReference,
      CaseCreatedBy,
      CaseCreatedOn,
      CaseLastChangedBy,
      CaseLastChangedOn,
      CaseClosedBy,
      CaseClosedTime,
      CasePlannedCloseDate,
      CaseProcessor,
      CaseResponsible,
      CaseEscalationReason,
      CaseCategory,
      CasePriority,
      CaseStatus,
      CaseSystemStatus,
      CaseReason,

      //Exposed Associations
      _Customer
}
```
