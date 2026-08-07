---
name: C_BUSEVTLOGPAYLOADDEX_2
description: "This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE."
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value
semantic_en: "This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE."
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_BUSEVTLOGPAYLOADDEX_2

**This CDS view provides a subset of event payload details. This CDS view provides the answer to these business questions: What are the event qualifiers? What are the field changes? The CDS view supports #EXTRACTION_DATA_SOURCE.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGPAYLOADDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` |  | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` |  | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogFieldName` |  | |  |  | `CHAR(30)` | Field Identifier for SAP Object |
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
| `BusEvtLogBusinessActivity` |  | |  |  | `CHAR(32)` | Activity ID |
