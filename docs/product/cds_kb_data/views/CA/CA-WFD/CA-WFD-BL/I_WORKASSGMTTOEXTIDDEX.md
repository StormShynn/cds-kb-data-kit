---
name: I_WORKASSGMTTOEXTIDDEX
description: "You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value
semantic_en: "You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Ext IDs of Work Assgmt and Wrkfrc Person — CDS view giao diện dựa trên wfd_d_keymap."
keywords:
  - "ext"
  - "ids"
  - "work"
  - "assgmt"
  - "and"
  - "wrkfrc"
  - "person"
  - "assignment"
  - "start"
  - "date"
  - "workforce"
  - "external"
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
# I_WORKASSGMTTOEXTIDDEX

**You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  | `workforce_assgmt_id` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  | `start_date` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  | `end_date` | `DATS(8)` | End Date |
| `WorkforcePersonExternalID` | ✓ | |  | `person_id_external` | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` | ✓ | |  | `user_id` | `CHAR(100)` | External User ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value)*

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
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name:'WorkAssignment'

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Ext IDs of Work Assgmt and Wrkfrc Person'

define view entity I_WorkAssgmtToExtIDDEX
  as select from wfd_d_keymap as keymap
    inner join   wfd_d_assgmt as assgmt on keymap.workforce_assgmt_id = assgmt.workforce_assgmt_id
{
  key keymap.workforce_assgmt_id as WorkAssignment,
  
      assgmt.start_date          as WorkAssignmentStartDate,
      assgmt.end_date            as WorkAssignmentEndDate,
      keymap.person_id_external  as WorkforcePersonExternalID,
      keymap.user_id             as WorkAssignmentExternalID
}
where
      keymap.block_ind = ''
  and assgmt.block_ind = ''
```
