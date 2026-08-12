---
name: C_BUSEVTLOGPAYLOADDEX_2
description: "This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE."
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value
semantic_en: "This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE."
semantic_vi: "Business Event Property Changes (v2) — CDS view tiêu dùng (transactional data) dựa trên I_BusEvtLogPayload."
keywords:
  - "business"
  - "event"
  - "property"
  - "changes"
  - "(v2)"
  - "object"
  - "type"
  - "field"
  - "name"
  - "value"
  - "unit"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
---
# C_BUSEVTLOGPAYLOADDEX_2

**This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` | ✓ | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` | ✓ | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogFieldName` | ✓ | |  |  | `CHAR(30)` | Field Identifier for SAP Object |
| `BusEvtLogOldFieldValue` |  | |  |  | `CHAR(256)` | Previous Value of an Attribute |
| `BusEvtLogOldFieldUnit` |  | |  |  | `UNIT(3)` | Previous Unit of Measure |
| `BusEvtLogNewFieldValue` |  | |  |  | `CHAR(256)` | Updated Value of an Attribute |
| `BusEvtLogNewFieldUnit` |  | |  |  | `UNIT(3)` | Updated Unit of Measure |
| `BusEvtLogOldFieldCurrency` |  | |  |  | `CUKY(5)` | Previous Currency Key |
| `BusEvtLogNewFieldCurrency` |  | |  |  | `CUKY(5)` | Updated Currency Key |
| `BusEvtLogFieldHasOldValue` |  | |  |  | `CHAR(1)` | Field has an Old Value |
| `BusEvtLogFieldIsQualifier` |  | |  |  | `CHAR(1)` | Specifies if the Attribute is a Qualifier |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |
| `BusEvtLogGlobalFieldName` |  | |  |  | `CHAR(30)` | Field Name |
| `BuEvLgGlobalFieldNameUpperCase` |  | |  |  | `CHAR(30)` | Property Name of the Object |
| `ChangeDocumentDatabaseTable` |  | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocDatabaseTableField` |  | |  |  | `CHAR(30)` | Field Name |
| `BusEvtLogPayloadFieldPath` |  | |  |  |  |  |
| `BusEvtLogBusinessActivity` |  | |  |  | `CHAR(32)` | Activity ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBELPAYLD2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataCategory: #FACT
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel:{
   sapObjectNodeType:{name: 'BusEvtLogEventPayload'},
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   },

   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'Business Event Property Changes (v2)'

define view C_BusEvtLogPayloadDEX_2 as select from I_BusEvtLogPayload {
  key BusinessEventUUID,
  key SAPObjectType,
  key BusEvtLogFieldName,
      BusEvtLogOldFieldValue,
      BusEvtLogOldFieldUnit,
      BusEvtLogNewFieldValue,
      BusEvtLogNewFieldUnit,
      BusEvtLogOldFieldCurrency,
      BusEvtLogNewFieldCurrency,
      BusEvtLogFieldHasOldValue,
      BusEvtLogFieldIsQualifier,
      BusEvtLogLastChangedDateTime,
      BusEvtLogGlobalFieldName,
      BuEvLgGlobalFieldNameUpperCase,
      ChangeDocumentDatabaseTable,
      ChangeDocDatabaseTableField,
      BusEvtLogPayloadFieldPath,
      BusEvtLogBusinessActivity
 
}
```
