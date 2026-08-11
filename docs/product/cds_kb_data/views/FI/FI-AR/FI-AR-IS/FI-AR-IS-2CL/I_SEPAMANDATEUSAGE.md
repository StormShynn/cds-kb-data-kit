---
name: I_SEPAMANDATEUSAGE
description: "This CDS view provides the data to answer the following business questions: Which SEPA Mandate has been used? What is SEPA Mandate Usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATEUSAGE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: Which SEPA Mandate has been used? What is SEPA Mandate Usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Mandate Usage — CDS view giao diện dựa trên sepa_mandate_use."
keywords:
  - "sepa"
  - "mandate"
  - "usage"
  - "date"
  - "object"
  - "type"
  - "payment"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_SEPAMANDATEUSAGE

**This CDS view provides the data to answer the following business questions: Which SEPA Mandate has been used? What is SEPA Mandate Usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATEUSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateUUID` | ✓ | |  | `mguid` | `RAW(16)` | Globally Unique Identifier |
| `SEPAMandateUseDate` | ✓ | |  | `use_date` | `DATS(8)` | Date |
| `SEPAMandateUseObjectType` | ✓ | |  | `use_doctype` | `CHAR(10)` | Object Type |
| `SEPAMandateUsePaymentDoc` | ✓ | |  | `use_docid` | `CHAR(70)` | Object key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATEUSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATEUSAGE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'SEPA Mandate Usage'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
      enabled: true,
      delta.changeDataCapture:{
          automatic : true
       }
   }
}
@ObjectModel: {
    usageType:{
      serviceQuality: #X,
      sizeCategory: #S,
      dataClass: #MIXED
    },
    modelingPattern: #ANALYTICAL_FACT,
    sapObjectNodeType.name: 'SEPAMandateUsage',
    supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
}
define view entity I_SEPAMandateUsage as select from sepa_mandate_use {
  key mguid       as SEPAMandateUUID,
  key use_date    as SEPAMandateUseDate,
  key use_doctype as SEPAMandateUseObjectType,
  key use_docid   as SEPAMandateUsePaymentDoc
}
```
