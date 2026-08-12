---
name: C_RDPBATCHGENERALDEX
description: "This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
