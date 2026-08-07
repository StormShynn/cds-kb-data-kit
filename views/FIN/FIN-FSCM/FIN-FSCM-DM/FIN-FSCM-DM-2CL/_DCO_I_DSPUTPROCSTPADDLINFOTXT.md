---
name: _DCO_I_DSPUTPROCSTPADDLINFOTXT
description: Add Info for Dispute Proc Step - Text
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCSTPADDLINFOTXT')/$value
semantic_en: Add Info for Dispute Proc Step - Text
tags:
  - FIN
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DSPUTPROCSTPADDLINFOTXT

**Add Info for Dispute Proc Step - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DSPUTPROCSTPADDLINFOTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoDisputeProcessStep` |  | |  |  | `NUMC(1)` | Processing Step for Disputes |
| `DCoDsputProcStpAddlInfoTxt` |  | |  |  | `SSTR(1020)` | Additional Information for Processing Step |
| `DCoDsputProcStpAddlInfoLinkTxt` |  | |  |  | `CHAR(100)` | Text to Display for URL |
