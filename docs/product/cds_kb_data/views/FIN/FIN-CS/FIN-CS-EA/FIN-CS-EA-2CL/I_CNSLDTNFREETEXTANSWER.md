---
name: I_CNSLDTNFREETEXTANSWER
description: "This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value
semantic_en: "This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidation Free Text Answer — CDS view giao diện (master data) dựa trên I_CnsldtnReportedAnswer."
keywords:
  - "consolidation"
  - "free"
  - "text"
  - "answer"
  - "reported"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_CNSLDTNFREETEXTANSWER

**This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportedAnswer` | ✓ | | `_Source` | `ConsolidationReportedAnswer` | `CHAR(32)` | Reported Answer |
| `ConsolidationFreeTextAnswer` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value)*

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #M
    },
    representativeKey: 'ConsolidationReportedAnswer',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationFreeTextAnswer'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Free Text Answer'

define view entity I_CnsldtnFreeTextAnswer
  as select from I_CnsldtnReportedAnswer as _Source

{
      @ObjectModel.text.element: ['ConsolidationFreeTextAnswer']
  key _Source.ConsolidationReportedAnswer,
      @Semantics.text: true
      ConsolidationFreeTextAnswer
}
where
  ConsolidationPredefinedAnswer is initial
```
