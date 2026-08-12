---
name: C_CRDTDCSNDOCAPPRVLSITNTMPL
description: "This CDS view is designed to provide insights into the approval hierarchy and status of credit decision documents. It is a consumption view that aggregates and presents data related to the approval process, including the hierarchy level, approver details, and approval status. This view is particularly useful for understanding the current state and progression of credit decision approvals within an organization. This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? Who are the approvers involved in the credit decision document approval process? What is the hierarchy level of the approval process for a given credit decision document? How is the credit decision document categorized in terms of credit segment and credit risk class? What is the unique identifier (CaseID) associated with each credit decision document approval case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value
semantic_en: "This CDS view is designed to provide insights into the approval hierarchy and status of credit decision documents. It is a consumption view that aggregates and presents data related to the approval process, including the hierarchy level, approver details, and approval status. This view is particularly useful for understanding the current state and progression of credit decision approvals within an organization. This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? Who are the approvers involved in the credit decision document approval process? What is the hierarchy level of the approval process for a given credit decision document? How is the credit decision document categorized in terms of credit segment and credit risk class? What is the unique identifier (CaseID) associated with each credit decision document approval case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "C_CRDTDCSNDOCAPPRVLSITNTMPL — CDS view tiêu dùng (transactional data) dựa trên R_CrdtDcsnDocApprvlHierTP."
keywords:
  - "crdtdcsndocapprvlsitntmpl"
  - "case"
  - "crdt"
  - "decision"
  - "apprvl"
  - "hier"
  - "credit"
  - "document"
  - "approver"
  - "apprvr"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - consumption-view
  - document
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - lob:finance
---
# C_CRDTDCSNDOCAPPRVLSITNTMPL

**This CDS view is designed to provide insights into the approval hierarchy and status of credit decision documents. It is a consumption view that aggregates and presents data related to the approval process, including the hierarchy level, approver details, and approval status. This view is particularly useful for understanding the current state and progression of credit decision approvals within an organization. This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? Who are the approvers involved in the credit decision document approval process? What is the hierarchy level of the approval process for a given credit decision document? How is the credit decision document categorized in terms of credit segment and credit risk class? What is the unique identifier (CaseID) associated with each credit decision document approval case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CrdtDecisionDocApprvlHierUUID` | ✓ | |  |  | `RAW(16)` | UUID serving as key (parent key, root key) |
| `CreditDecisionDocApprvlHierLvl` |  | |  |  | `INT2(5)` | Approval Level |
| `CreditDecisionDocumentApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditDecisionDocApprvrGroup` |  | |  |  | `CHAR(40)` | Approver Group |
| `CreditDecisionDocApprvlStatus` |  | |  |  | `CHAR(1)` | Status |
| `CreditSegment` |  | | `_CreditDecisionDocument` | `CreditSegment` | `CHAR(10)` | Credit Segment |
| `CreditRiskClass` |  | | `_CreditDecisionDocument` | `CreditRiskClass` | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CaseID` |  | | `_CreditDecisionDocument` | `CaseID` | `CHAR(12)` | Case ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CDCDAPPRSITTMPL',
                compiler:    { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #CHECK,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED } }
@EndUserText: { label: 'DCD Approval Hierarchy Situation' }
@VDM: { viewType: #CONSUMPTION,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #C,
                             sizeCategory:   #XL,
                             dataClass:      #TRANSACTIONAL },
        semanticKey:       [ 'CrdtDecisionDocApprvlHierUUID' ],
        supportedCapabilities: [ #SITUATION_ANCHOR,
                                 #SITUATION_TRIGGER ] }
@Metadata: { ignorePropagatedAnnotations: true }

define view C_CrdtDcsnDocApprvlSitnTmpl
  as select from R_CrdtDcsnDocApprvlHierTP 

{

      // VDM Fields
      @UI: { hidden: true }
  key CaseUUID,

      @UI: { hidden: true }
  key CrdtDecisionDocApprvlHierUUID,

      CreditDecisionDocApprvlHierLvl,

      @UI: { hidden: true }
      CreditDecisionDocumentApprover,

      @UI: { hidden: true }
      CreditDecisionDocApprvrGroup,
      
      CreditDecisionDocApprvlStatus,
      _CreditDecisionDocument.CreditSegment   as CreditSegment,
      _CreditDecisionDocument.CreditRiskClass as CreditRiskClass,
      _CreditDecisionDocument.CaseID          as CaseID 

}
```
