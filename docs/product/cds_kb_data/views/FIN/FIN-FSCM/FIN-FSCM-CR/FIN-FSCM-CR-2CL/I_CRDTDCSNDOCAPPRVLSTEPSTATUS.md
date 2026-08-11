---
name: I_CRDTDCSNDOCAPPRVLSTEPSTATUS
description: "This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value
semantic_en: "This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CRDTDCSNDOCAPPRVLSTEPSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "crdtdcsndocapprvlstepstatus"
  - "credit"
  - "decision"
  - "apprvl"
  - "status"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - bo:project
---
# I_CRDTDCSNDOCAPPRVLSTEPSTATUS

**This CDS view is designed to provide information about the approval step status of credit decision documents. It retrieves and presents the status of these documents, allowing users to understand the current state of approval processes. This view provides supported values for CreditDecisionDocApprvlStatus. The values and their meanings are: Value Meaning 1 Pending 2 Approved 3 Rejected 4 Redundant This CDS view provides the data to answer the following business questions: What is the current approval status of a specific credit decision document? How can I access the descriptive text associated with each approval status? What are the possible approval statuses defined for credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocApprvlStatus` | ✓ | |  | `cast( domvalue_l as ukm_dcd_approval_status )` | `CHAR(1)` | Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtDcsnDocApprvlStepStsText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTATUS')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IDCDAPST',
                compiler: { compareFilter: true } }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Approval Step Status' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #META },
                supportedCapabilities: [ #NONE ],
                semanticKey: [ 'CreditDecisionDocApprvlStatus' ],
                representativeKey: 'CreditDecisionDocApprvlStatus' }

define view I_CrdtDcsnDocApprvlStepStatus
  as select from dd07l

  // VDM Associations
  // Approval Status Text
  association [0..*] to I_CrdtDcsnDocApprvlStepStsText as _Text on $projection.CreditDecisionDocApprvlStatus = _Text.CreditDecisionDocApprvlStatus

{

      // VDM Fields
      @ObjectModel: { text: { association: '_Text' } }
  key cast( domvalue_l as ukm_dcd_approval_status ) as CreditDecisionDocApprvlStatus,

      // Exposed Associations
      _Text

}

where
  domname = 'UKM_DCD_APPROVAL_STATUS'
```
