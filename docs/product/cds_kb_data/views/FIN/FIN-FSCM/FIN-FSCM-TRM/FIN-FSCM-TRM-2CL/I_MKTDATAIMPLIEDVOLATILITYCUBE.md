---
name: I_MKTDATAIMPLIEDVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_MKTDATAIMPLIEDVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityType` |  | |  |  | `CHAR(3)` | Volatility Type |
| `ImpliedVolatilityName` |  | |  |  | `CHAR(15)` | Volatility Name |
| `VolatilityProfile` |  | |  |  | `CHAR(15)` | Volatility Pofile |
| `ImpliedVolatilityValue` |  | |  |  | `DEC(11)` | Implied Volatility Value |
