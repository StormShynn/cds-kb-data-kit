---
name: I_CNDNCONTREXTSLSCOMMSNSTDVH
description: "This CDS view exposes the values of condition contracts that represent external sales commission agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to external sales commission agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTREXTSLSCOMMSNSTDVH')/$value
semantic_en: "This CDS view exposes the values of condition contracts that represent external sales commission agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to external sales commission agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTREXTSLSCOMMSNSTDVH

**This CDS view exposes the values of condition contracts that represent external sales commission agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to external sales commission agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTREXTSLSCOMMSNSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `CndnContrTypeDesc` |  | |  |  | `CHAR(40)` | Condition Contract Type Description |
| `Customer` |  | |  |  | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
