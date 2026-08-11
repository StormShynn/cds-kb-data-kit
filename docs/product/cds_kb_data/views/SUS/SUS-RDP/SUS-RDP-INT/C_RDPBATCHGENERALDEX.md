---
name: C_RDPBATCHGENERALDEX
description: "This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "RDP Specific Data Extractor for general Batch data — CDS view tiêu dùng (master data) dựa trên I_Batch."
keywords:
  - "rdp"
  - "specific"
  - "data"
  - "extractor"
  - "for"
  - "general"
  - "batch"
  - "material"
  - "plant"
  - "manufacture"
  - "date"
tags:
  - SUS
  - bo:companycode
  - component:SUS-RDP-INT
  - consumption-view
  - product
  - SUS-RDP
  - SUS-RDP-INT
---
# C_RDPBATCHGENERALDEX

**This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
    sqlViewName: 'CRDPBTCHGENDEX',
    compiler.compareFilter: true
}

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  sapObjectNodeType.name: 'Batch',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  modelingPattern: #NONE
 }

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}

@EndUserText.label: 'RDP Specific Data Extractor for general Batch data'

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
      enabled: true,
      delta.changeDataCapture:
        { mapping:
        [
          { role: #MAIN, table: 'mcha', tableElement: ['charg', 'matnr', 'werks'], viewElement: ['Batch', 'Material','Plant'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'mch1', tableElement: ['charg', 'matnr'], viewElement: ['Batch', 'Material'] }
        ]
      }
    },
  internalName:#LOCAL
}
define view C_RDPBatchGeneralDEX as select from I_Batch
{
  key Batch,
  key Material,
  key Plant,
  ManufactureDate
}
```
