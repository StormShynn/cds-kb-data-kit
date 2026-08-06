---
name: I_PERSONWORKAGRMTFORKEYDATE
description: This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - plan
  - metadata-only
---
# I_PERSONWORKAGRMTFORKEYDATE

**This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
| `KeyDate` | `DATS(8)` |  |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `Job` | `NUMC(8)` | Job |
| `PersonWorkAgrmtAuthznGrpg` | `CHAR(14)` | Organizational Key |
| `OrganizationalUnit` | `NUMC(8)` | Organizational Unit |
| `WorkAgreementStatus` | `CHAR(1)` | Model S: Employment Status |
| `WorkingTimePercentage` | `DEC(5)` | Employment percentage |
| `WeeklyWorkdays` | `DEC(4)` | Weekly Workdays |
| `WeeklyWorkingHours` | `DEC(5)` | Hours per week |
| `ServiceCostLevel` | `NUMC(4)` | Service Cost Level |
