---
name: I_CNSLDTNMDSOURCE
description: This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value
semantic_en: This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_CNSLDTNMDSOURCE

**This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AdditionalMasterDataSource` | `CHAR(10)` | Master Data Source |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
