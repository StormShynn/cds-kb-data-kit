---
name: C_CRDTLMTCHGREQAPPRVLSITNTMPL
description: "This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value
semantic_en: "This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "C_CRDTLMTCHGREQAPPRVLSITNTMPL — CDS view tiêu dùng (transactional data) dựa trên R_CrdtLmtChgReqApprvlHierTP."
keywords:
  - "crdtlmtchgreqapprvlsitntmpl"
  - "case"
  - "crdt"
  - "apprvl"
  - "hier"
  - "level"
  - "credit"
  - "limit"
  - "change"
  - "approver"
  - "apprvr"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - consumption-view
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - lob:finance
  - transaction
---
# C_CRDTLMTCHGREQAPPRVLSITNTMPL

**This CDS view is designed to facilitate the approval process for credit limit change requests by providing a structured template for managing and viewing approval hierarchies. It serves as a consumption view that integrates with transactional data related to credit limit requests, ensuring that the approval process is streamlined and efficient. This CDS view provides the data to answer the following business questions: What is the current status of a credit limit change request approval? Who are the approvers involved in the credit limit change request process? What is the hierarchical level of each approver in the credit limit change request approval process? Which credit segment is associated with a particular credit limit change request? What is the unique identifier (CaseID) for each credit limit change request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CrdtLmtChgReqApprvlHierUUID` | ✓ | |  |  | `RAW(16)` | UUID serving as key (parent key, root key) |
| `CrdtLmtChgReqApprvlHierLevel` |  | |  |  | `INT2(5)` | Approval Level |
| `CreditLimitChangeReqApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditLimitChgReqApprvrGroup` |  | |  |  | `CHAR(40)` | Approver Group |
| `CreditLimitChgReqApprvlStatus` |  | |  |  | `CHAR(1)` | Status |
| `CreditSegment` |  | | `_CreditLimitRequest` | `CreditSegment` | `CHAR(10)` | Credit Segment |
| `CaseID` |  | | `_CreditLimitRequest` | `CaseID` | `CHAR(12)` | Case ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CCLRAPPRSITTMPL',
                compiler:    { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #CHECK,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED } }
@EndUserText: { label: 'Credit Limit Request Approval Template' }
@VDM: { viewType: #CONSUMPTION,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #C,
                             sizeCategory:   #XL,
                             dataClass:      #TRANSACTIONAL },
        semanticKey:       [ 'CrdtLmtChgReqApprvlHierUUID' ],
        supportedCapabilities: [ #SITUATION_ANCHOR,
                                 #SITUATION_TRIGGER ] }
@Metadata: { ignorePropagatedAnnotations: true }

define view C_CrdtLmtChgReqApprvlSitnTmpl
  as select from R_CrdtLmtChgReqApprvlHierTP

{

      // VDM Fields
      @UI: { hidden: true }
  key CaseUUID,

      @UI: { hidden: true }
  key CrdtLmtChgReqApprvlHierUUID,

      CrdtLmtChgReqApprvlHierLevel,

      @UI: { hidden: true }
      CreditLimitChangeReqApprover,

      @UI: { hidden: true }
      CreditLimitChgReqApprvrGroup,

      CreditLimitChgReqApprvlStatus,
      _CreditLimitRequest.CreditSegment as CreditSegment,
      _CreditLimitRequest.CaseID        as CaseID

}
```
