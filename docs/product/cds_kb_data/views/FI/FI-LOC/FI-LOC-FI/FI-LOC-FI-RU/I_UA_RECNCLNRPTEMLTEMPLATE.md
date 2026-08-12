---
name: I_UA_RECNCLNRPTEMLTEMPLATE
description: "UA Reconciliation Report Email Template"
app_component: FI-LOC-FI-RU
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value
semantic_en: "UA Reconciliation Report Email Template"
semantic_vi: "UA Reconciliation Report Email Template — CDS view giao diện dựa trên P_Z0_RecnclnRptEmlTemplate1."
keywords:
  - "reconciliation"
  - "report"
  - "email"
  - "template"
  - "language"
  - "company"
  - "code"
  - "business"
  - "partner"
  - "name"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-LOC-FI-RU
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-RU
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_UA_RECNCLNRPTEMLTEMPLATE

**UA Reconciliation Report Email Template**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-RU` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReconciliationReportUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CompanyCodeName` |  | |  |  | `CHAR(163)` |  |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [#OUTPUT_EMAIL_DATA_PROVIDER]
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AccessControl.personalData.blocking: #REQUIRED 
@EndUserText.label: 'UA Reconciliation Report Email Template'
define view entity I_UA_RecnclnRptEmlTemplate 
  as select from P_Z0_RecnclnRptEmlTemplate1     as ReconRep
{
  key ReconciliationReportUUID, 
  key Language,
      CompanyCode,
      BusinessPartner,
      
      @EndUserText.label: 'Company Name'
      CompanyCodeName,
      StartDate,
      EndDate
}
```
