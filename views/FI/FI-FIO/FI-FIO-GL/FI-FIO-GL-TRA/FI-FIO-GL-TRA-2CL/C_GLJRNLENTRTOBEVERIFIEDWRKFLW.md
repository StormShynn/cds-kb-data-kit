---
name: C_GLJRNLENTRTOBEVERIFIEDWRKFLW
description: Jrnl entry to be verified and work item
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value
semantic_en: Jrnl entry to be verified and work item
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
  - metadata-only
---
# C_GLJRNLENTRTOBEVERIFIEDWRKFLW

**Jrnl entry to be verified and work item**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ObjectKey` |  | |  |  | `CHAR(20)` | Object key |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
