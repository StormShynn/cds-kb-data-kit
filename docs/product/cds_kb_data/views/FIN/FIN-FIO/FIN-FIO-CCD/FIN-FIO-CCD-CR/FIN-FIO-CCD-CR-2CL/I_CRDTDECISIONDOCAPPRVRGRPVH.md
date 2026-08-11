---
name: I_CRDTDECISIONDOCAPPRVRGRPVH
description: "This CDS view is designed to provide a value help for approver groups related to credit decision documents. It serves as a composite view that aggregates and presents data about approver groups, making it easier for users to search and select the appropriate group when working with credit decision documents. This view provides value help for RespyMgmtTeamID. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available approver groups for credit decision documents? How can I search for a specific approver group using a text-based search? What is the description or text associated with each approver group? How can I efficiently select an approver group with a high ranking in search results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCAPPRVRGRPVH')/$value
semantic_en: "This CDS view is designed to provide a value help for approver groups related to credit decision documents. It serves as a composite view that aggregates and presents data about approver groups, making it easier for users to search and select the appropriate group when working with credit decision documents. This view provides value help for RespyMgmtTeamID. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available approver groups for credit decision documents? How can I search for a specific approver group using a text-based search? What is the description or text associated with each approver group? How can I efficiently select an approver group with a high ranking in search results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CRDTDECISIONDOCAPPRVRGRPVH — CDS view tổng hợp dựa trên I_CreditDecisionDocApprvrGrp."
keywords:
  - "crdtdecisiondocapprvrgrpvh"
  - "respy"
  - "mgmt"
  - "team"
  - "credit"
  - "decision"
  - "apprvr"
  - "group"
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
---
# I_CRDTDECISIONDOCAPPRVRGRPVH

**This CDS view is designed to provide a value help for approver groups related to credit decision documents. It serves as a composite view that aggregates and presents data about approver groups, making it easier for users to search and select the appropriate group when working with credit decision documents. This view provides value help for RespyMgmtTeamID. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available approver groups for credit decision documents? How can I search for a specific approver group using a text-based search? What is the description or text associated with each approver group? How can I efficiently select an approver group with a high ranking in search results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCAPPRVRGRPVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtTeamID` | ✓ | |  |  | `NUMC(8)` | Object ID |
| `CreditDecisionDocApprvrGroup` |  | |  |  | `CHAR(40)` | Approver Group |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCAPPRVRGRPVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCAPPRVRGRPVH')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IDCDAPPRGRPVH',
                compiler: { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Approver Group' }
@VDM: { viewType:  #COMPOSITE,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #C,
                             sizeCategory: #S,
                             dataClass: #META },
                dataCategory: #VALUE_HELP,
                semanticKey: [ 'CreditDecisionDocApprvrGroup' ],
                supportedCapabilities: [#VALUE_HELP_PROVIDER  ],
                representativeKey: 'RespyMgmtTeamID',
                resultSet: { sizeCategory: #XS } }
@Consumption: { ranked: true }
@Search: { searchable: true }

define view I_CrdtDecisionDocApprvrGrpVH 
  as select from I_CreditDecisionDocApprvrGrp
{

      // VDM Fields
  key RespyMgmtTeamID,

      @ObjectModel: { text: { association: '_Text' } }
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #HIGH }
      CreditDecisionDocApprvrGroup,

      // Exposed Associations
      _Text

}
```
