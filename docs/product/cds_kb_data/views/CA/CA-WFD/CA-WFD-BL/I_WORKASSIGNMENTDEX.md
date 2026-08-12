---
name: I_WORKASSIGNMENTDEX
description: "You can use this CDS view to retrieve the data related to the external IDs of a work assignment and a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data you need to answer the following business question: How do you get the data related to the external IDs of the work assignment and workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX')/$value
semantic_en: "You can use this CDS view to retrieve the data related to the external IDs of a work assignment and a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data you need to answer the following business question: How do you get the data related to the external IDs of the work assignment and workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Work Assignments — CDS view giao diện dựa trên wfd_d_keymap."
keywords:
  - "work"
  - "assignments"
  - "assignment"
  - "start"
  - "date"
  - "workforce"
  - "person"
  - "external"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
---
# I_WORKASSIGNMENTDEX

**You can use this CDS view to retrieve the data related to the external IDs of a work assignment and a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data you need to answer the following business question: How do you get the data related to the external IDs of the work assignment and workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  | `workforce_assgmt_id` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  | `start_date` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  | `end_date` | `DATS(8)` | End Date |
| `WorkforcePersonExternalID` | ✓ | |  | `person_id_external` | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` | ✓ | |  | `user_id` | `CHAR(100)` | External User ID |
| `BusinessPartner` | ✓ | |  | `business_partner_id` | `CHAR(10)` | Business Partner Number |
| `IsContingentWorker` |  | |  | `case when assgmt.is_contingent_worker <> '' then 'X' else '' end` | `CHAR(1)` |  |
| `_WorkforcePerson` | | ✓ | | | | |
| `_WorkAssgmtDets` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkforcePerson` | `I_WorkforcePersonDEX` | [1] |
| `_WorkAssgmtDets` | `I_WorkAssgmtDetsDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX')/$value)*

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
                    table: 'wfd_d_keymap', role: #MAIN,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id']
                },
                  {
                    table: 'wfd_d_assgmt', role: #LEFT_OUTER_TO_ONE_JOIN,
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
@ObjectModel.sapObjectNodeType.name:'WorkAssignment'

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Work Assignments'

define view entity I_WorkAssignmentDEX
  as select from wfd_d_keymap as keymap
    inner join   wfd_d_assgmt as assgmt on keymap.workforce_assgmt_id = assgmt.workforce_assgmt_id
  association [1]    to I_WorkforcePersonDEX as _WorkforcePerson on $projection.BusinessPartner = _WorkforcePerson.BusinessPartner
  association [1..*] to I_WorkAssgmtDetsDEX  as _WorkAssgmtDets  on $projection.BusinessPartner = _WorkAssgmtDets.BusinessPartner

{
  key keymap.workforce_assgmt_id as WorkAssignment,

      assgmt.start_date          as WorkAssignmentStartDate,
      assgmt.end_date            as WorkAssignmentEndDate,
      keymap.person_id_external  as WorkforcePersonExternalID,
      keymap.user_id             as WorkAssignmentExternalID,
      keymap.business_partner_id as BusinessPartner,
      @EndUserText.label: 'Contingent Worker Flag'
      @Semantics.booleanIndicator:true
      case when assgmt.is_contingent_worker <> ''
      then 'X'
      else ''
      end                        as IsContingentWorker,
      _WorkforcePerson,
      _WorkAssgmtDets
}

where
      keymap.block_ind = ''
  and assgmt.block_ind = ''
```
