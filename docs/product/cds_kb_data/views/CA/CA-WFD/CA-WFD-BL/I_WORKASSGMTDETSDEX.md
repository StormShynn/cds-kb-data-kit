---
name: I_WORKASSGMTDETSDEX
description: "You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value
semantic_en: "You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workforce Person Assignment Details — CDS view giao diện dựa trên wfd_d_assgmtdets."
keywords:
  - "workforce"
  - "person"
  - "assignment"
  - "details"
  - "work"
  - "start"
  - "date"
  - "external"
  - "business"
  - "partner"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - plan
  - bo:salesorder
---
# I_WORKASSGMTDETSDEX

**You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  | `workforce_assgmt_id` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` | ✓ | |  | `start_date` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  | `end_date` | `DATS(8)` | End Date |
| `WorkforcePersonExternalID` | ✓ | |  | `person_id_external` | `CHAR(100)` | External Person ID |
| `BusinessPartner` | ✓ | |  | `business_partner_id` | `CHAR(10)` | Business Partner Number |
| `WorkAssignmentIsPrimary` |  | |  | `main_employment_indicator` | `CHAR(1)` | Primary Employment Indicator |
| `WorkAssignmentExternalID` | ✓ | |  | `user_id` | `CHAR(100)` | External User ID |
| `SupervisorWorkAssignmentID` |  | |  | `manager_work_assgmt` | `NUMC(8)` | Manager Workforce Assignment ID |
| `SupervisorWorkAssignmentExtID` |  | |  | `manager_work_assignment_ext_id` | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WorkforcePersonJobTitle` |  | |  | `job_title` | `CHAR(256)` | Job Title |
| `WorkforcePersonJobCode` |  | |  | `job_code` | `CHAR(128)` | Job Code |
| `WorkingHoursPerWeek` |  | |  | `weekly_working_hours` | `DEC(5)` | Working Hours in a Week |
| `EmploymentPercent` |  | |  | `employment_percent` | `DEC(5)` | Employment Percentage |
| `WorkingDaysPerWeek` |  | |  | `weekly_working_days` | `DEC(4)` | Working Days in a Week |
| `WorkAssignmentStatus` |  | |  | `employment_status` | `CHAR(1)` | Employment Status |
| `CompanyCode` |  | |  | `company_code` | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  | `cost_center` | `CHAR(10)` | Cost Center |
| `CountryOrRegion` |  | |  | `cast( assgmtdets.country as land1 )` | `CHAR(3)` | Country/Region Key |
| `_WorkforcePerson` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkforcePerson` | `I_WorkforcePersonDEX` | [1] |
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_CostCenter` | `I_CostCenter` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType: #BASIC

@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {

            mapping:[
               {
                    table: 'wfd_d_assgmtdets', role: #MAIN,
                    viewElement: ['WorkAssignment','WorkAssignmentStartDate'],
                    tableElement: ['workforce_assgmt_id','start_date']
                },
                  {
                    table: 'wfd_d_keymap', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id']
                }
            ]
        }
    }

@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Workforce Person Assignment Details'

define view entity I_WorkAssgmtDetsDEX
  as select from wfd_d_assgmtdets as assgmtdets
    inner join   wfd_d_keymap     as keymap on keymap.workforce_assgmt_id = assgmtdets.workforce_assgmt_id
 
  association [1] to I_WorkforcePersonDEX as _WorkforcePerson on $projection.BusinessPartner = _WorkforcePerson.BusinessPartner
  association [1] to I_CompanyCode        as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1] to I_CostCenter         as _CostCenter      on $projection.CostCenter = _CostCenter.CostCenter

{
  key assgmtdets.workforce_assgmt_id            as WorkAssignment,
  key assgmtdets.start_date                     as WorkAssignmentStartDate,

      assgmtdets.end_date                       as WorkAssignmentEndDate,
      keymap.person_id_external                 as WorkforcePersonExternalID,
      keymap.business_partner_id                as BusinessPartner,
      
      @Semantics.booleanIndicator: true
      assgmtdets.main_employment_indicator      as WorkAssignmentIsPrimary,

      keymap.user_id                            as WorkAssignmentExternalID,

      assgmtdets.manager_work_assgmt            as SupervisorWorkAssignmentID,
      assgmtdets.manager_work_assignment_ext_id as SupervisorWorkAssignmentExtID,
      assgmtdets.job_title                      as WorkforcePersonJobTitle,
      assgmtdets.job_code                       as WorkforcePersonJobCode,
      assgmtdets.weekly_working_hours           as WorkingHoursPerWeek,
     
      assgmtdets.employment_percent             as EmploymentPercent, 
      assgmtdets.weekly_working_days            as WorkingDaysPerWeek,
      @Semantics.booleanIndicator: true
      assgmtdets.employment_status              as WorkAssignmentStatus,
      assgmtdets.company_code                   as CompanyCode,
      assgmtdets.cost_center                    as CostCenter,
      cast( assgmtdets.country as land1  )      as CountryOrRegion,
      _WorkforcePerson,
      _CompanyCode,
      _CostCenter

}
where keymap.block_ind        =  ''
  and assgmtdets.block_ind    =  ''
  and assgmtdets.company_code <> '' and assgmtdets.technical_inactive_ind is initial  //To filter the technically inactive records
```
