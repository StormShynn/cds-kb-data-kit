---
name: I_WORKASSIGNMENTDEX_1
description: "This CDS view is designed to extract data related to work assignments of a worker with details about assignment duration and its status. The view supports data extraction and change data capture, enabling efficient tracking and updating of work assignment information. This CDS view provides the data to answer the following business questions: What are the details of each work assignment, including start and end dates? Which workforce person is associated with each work assignment? Are there any contingent workers within the current work assignments? What is the country code associated with each work assignment? Are there any blocked work assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value
semantic_en: "This CDS view is designed to extract data related to work assignments of a worker with details about assignment duration and its status. The view supports data extraction and change data capture, enabling efficient tracking and updating of work assignment information. This CDS view provides the data to answer the following business questions: What are the details of each work assignment, including start and end dates? Which workforce person is associated with each work assignment? Are there any contingent workers within the current work assignments? What is the country code associated with each work assignment? Are there any blocked work assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Work Assignments — CDS view giao diện dựa trên I_WorkAssignmentKeyMapping."
keywords:
  - "work"
  - "assignments"
  - "assignment"
  - "external"
  - "country2"
  - "digit"
  - "code"
  - "workforce"
  - "person"
  - "start"
  - "date"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
---
# I_WORKASSIGNMENTDEX_1

**This CDS view is designed to extract data related to work assignments of a worker with details about assignment duration and its status. The view supports data extraction and change data capture, enabling efficient tracking and updating of work assignment information. This CDS view provides the data to answer the following business questions: What are the details of each work assignment, including start and end dates? Which workforce person is associated with each work assignment? Are there any contingent workers within the current work assignments? What is the country code associated with each work assignment? Are there any blocked work assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  | `upper( WorkAssignmentKeymap.WorkforcePersonExternalID )` | `CHAR(100)` |  |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `IsContingentWorker` |  | |  |  | `CHAR(1)` | Contingent Worker Flag |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignmentDetail` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignmentDetail` | `I_WorkAssgmtDetsDEX_1` | [1..*] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #BASIC

@Analytics:{
    dataExtraction:{
        enabled: true,
        delta.changeDataCapture:{
        
            mapping:[
               {
                    table: 'WFD_D_KEYMAP',
                    role:#MAIN,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id']
               },
                          {
                    table: 'WFD_D_ASSGMT',
                    role:#LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id']
               }
            
            ]
        
        }
      }
    }

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'WorkAssignment'

@EndUserText.label: 'Work Assignments'

define view entity I_WorkAssignmentDEX_1
  as select from I_WorkAssignmentKeyMapping as WorkAssignmentKeymap

  association [1..*] to I_WorkAssgmtDetsDEX_1  as _WorkAssignmentDetail on WorkAssignmentKeymap.WorkAssignment = _WorkAssignmentDetail.WorkAssignment
  association [1] to I_WorkforcePersonDEX_1 as _WorkforcePerson      on $projection.WorkforcePersonExternalID = _WorkforcePerson.WorkforcePersonExternalID 
{


  key WorkAssignmentKeymap.WorkAssignment,
      WorkAssignmentKeymap.WorkAssignmentExternalID ,
      WorkAssignmentKeymap.Country2DigitISOCode,

      upper( WorkAssignmentKeymap.WorkforcePersonExternalID ) as WorkforcePersonExternalID,
//      WorkAssignmentKeymap.BusinessPartner,

      WorkAssignmentKeymap.WorkAssignmentStartDate,
      WorkAssignmentKeymap.WorkAssignmentEndDate,
      WorkAssignmentKeymap.IsContingentWorker,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      WorkAssignmentKeymap.IsBlocked,
      
//      WorkAssignment,

      // Associations //
      _WorkAssignmentDetail,
      _WorkforcePerson
}
```
