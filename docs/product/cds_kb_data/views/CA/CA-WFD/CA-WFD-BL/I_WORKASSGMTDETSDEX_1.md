---
name: I_WORKASSGMTDETSDEX_1
description: "This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value
semantic_en: "This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workforce Person Assignment Details — CDS view giao diện dựa trên I_WorkAssignmentDetailsAll."
keywords:
  - "workforce"
  - "person"
  - "assignment"
  - "details"
  - "work"
  - "start"
  - "date"
  - "external"
  - "country2"
  - "digit"
  - "code"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_WORKASSGMTDETSDEX_1

**This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` | ✓ | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  | `upper(WorkAssignmentKeymap.WorkforcePersonExternalID)` | `CHAR(100)` |  |
| `WorkforceAssignmentIsPrimary` |  | |  |  | `CHAR(1)` | Primary Employment Indicator |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SupervisorWorkAssignmentExtID` |  | |  |  | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WorkforcePersonJobTitle` |  | |  |  | `CHAR(256)` | Job Title |
| `WorkforcePersonJobCode` |  | |  |  | `CHAR(128)` | Job Code |
| `WeeklyWorkingHours` |  | |  |  | `DEC(5)` | Working Hours in a Week |
| `WeeklyWorkingDays` |  | |  |  | `DEC(4)` | Working Days in a Week |
| `EmploymentPercent` |  | |  |  | `DEC(5)` | Employment Percentage |
| `WorkAssignmentStatus` |  | |  |  | `CHAR(1)` | Employment Status |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignmentDEX_1` | [1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType: #BASIC

@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
              {
              automatic: true
//                mapping:[
//                  {
//                    table: 'wfd_d_assgmtdets', role: #MAIN,
//                    viewElement: ['WorkAssignment','WorkAssignmentStartDate'],
//                    tableElement: ['workforce_assgmt_id','start_date']
//                  }
//                ]
              }
    }

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'

@EndUserText.label: 'Workforce Person Assignment Details'

define view entity I_WorkAssgmtDetsDEX_1
  as select from I_WorkAssignmentDetailsAll as WorkAssignmentDetails
    inner join   I_WorkAssignmentKeyMapping as WorkAssignmentKeymap on WorkAssignmentDetails.WorkAssignment = WorkAssignmentKeymap.WorkAssignment
  association [1]    to I_WorkAssignmentDEX_1  as _WorkAssignment  on $projection.WorkAssignment = _WorkAssignment.WorkAssignment
  association [1] to I_WorkforcePersonDEX_1 as _WorkforcePerson on  $projection.WorkforcePersonExternalID = _WorkforcePerson.WorkforcePersonExternalID

{
  key WorkAssignmentDetails.WorkAssignment,
  key WorkAssignmentDetails.WorkAssignmentStartDate,
      WorkAssignmentDetails.WorkAssignmentEndDate,
      

      WorkAssignmentKeymap.WorkAssignmentExternalID,
      WorkAssignmentKeymap.Country2DigitISOCode,
      upper(WorkAssignmentKeymap.WorkforcePersonExternalID) as WorkforcePersonExternalID,

      @Semantics.booleanIndicator: true
      WorkAssignmentDetails.WorkforceAssignmentIsPrimary,
      WorkAssignmentDetails.CompanyCode,
      WorkAssignmentDetails.CostCenter,
      WorkAssignmentDetails.SupervisorWorkAssignmentExtID,
      WorkAssignmentDetails.WorkforcePersonJobTitle,
      WorkAssignmentDetails.WorkforcePersonJobCode,
      WorkAssignmentDetails.WeeklyWorkingHours,
      WorkAssignmentDetails.WeeklyWorkingDays,
      WorkAssignmentDetails.EmploymentPercent,

      @Semantics.booleanIndicator: true
      WorkAssignmentDetails.WorkAssignmentStatus,

      @Semantics.booleanIndicator: true
      @UI.hidden: true
      WorkAssignmentKeymap.IsBlocked,

      // Associations //
      _WorkAssignment,
      _WorkforcePerson
}
```
