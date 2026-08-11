---
name: I_CRDTDCSNDOCAPPRVLSTEPSTSVH
description: "This CDS view is designed to provide a value help for the approval step status in credit decision documents. It serves as a composite view that offers metadata and semantic information about the approval status, facilitating easier access and understanding for end users. The view is optimized for service quality and is intended for use in local APIs. This view provides value help for CreditDecisionDocApprvlStatus. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the possible statuses for approval steps in credit decision documents? How can users search for specific approval statuses using text associations? What is the semantic meaning of each approval status in the context of credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSVH')/$value
semantic_en: "This CDS view is designed to provide a value help for the approval step status in credit decision documents. It serves as a composite view that offers metadata and semantic information about the approval status, facilitating easier access and understanding for end users. The view is optimized for service quality and is intended for use in local APIs. This view provides value help for CreditDecisionDocApprvlStatus. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the possible statuses for approval steps in credit decision documents? How can users search for specific approval statuses using text associations? What is the semantic meaning of each approval status in the context of credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CRDTDCSNDOCAPPRVLSTEPSTSVH — CDS view tổng hợp dựa trên I_CrdtDcsnDocApprvlStepStatus."
keywords:
  - "crdtdcsndocapprvlstepstsvh"
  - "credit"
  - "decision"
  - "apprvl"
  - "status"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - document
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - interface-view
  - lob:finance
  - bo:project
---
# I_CRDTDCSNDOCAPPRVLSTEPSTSVH

**This CDS view is designed to provide a value help for the approval step status in credit decision documents. It serves as a composite view that offers metadata and semantic information about the approval status, facilitating easier access and understanding for end users. The view is optimized for service quality and is intended for use in local APIs. This view provides value help for CreditDecisionDocApprvlStatus. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the possible statuses for approval steps in credit decision documents? How can users search for specific approval statuses using text associations? What is the semantic meaning of each approval status in the context of credit decision documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocApprvlStatus` | ✓ | |  |  | `CHAR(1)` | Status |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSVH')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IDCDAPSTVH',
                compiler: { compareFilter: true } }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Approval Step Status' }
@VDM: { viewType:  #COMPOSITE,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #META },
                dataCategory: #VALUE_HELP,
                semanticKey: [ 'CreditDecisionDocApprvlStatus' ],
                supportedCapabilities:[#VALUE_HELP_PROVIDER],
                representativeKey: 'CreditDecisionDocApprvlStatus',
                resultSet: { sizeCategory: #XS } }
@Search.searchable: true
define view I_CrdtDcsnDocApprvlStepStsVH
  as select from I_CrdtDcsnDocApprvlStepStatus
{

      // VDM Fields
      @ObjectModel: { text: { association: '_Text' } }
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #HIGH }
  key CreditDecisionDocApprvlStatus,

      // Exposed Associations      
      _Text

}
```
