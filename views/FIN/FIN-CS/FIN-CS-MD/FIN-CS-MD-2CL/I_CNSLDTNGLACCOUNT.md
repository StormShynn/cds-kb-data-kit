---
name: I_CNSLDTNGLACCOUNT
description: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value
semantic_en: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNGLACCOUNT

**This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | G/L Chart of Accounts |
| `AdditionalMasterDataSource` |  | |  |  | `CHAR(10)` | Consolidation Additional Master Data Source |
| `CnsldtnIsAdditionalMasterData` |  | |  |  | `CHAR(1)` | Is Additional Master Data |
