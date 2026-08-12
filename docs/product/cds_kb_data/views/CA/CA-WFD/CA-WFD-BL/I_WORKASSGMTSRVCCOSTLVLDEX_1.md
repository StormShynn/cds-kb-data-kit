---
name: I_WORKASSGMTSRVCCOSTLVLDEX_1
description: "This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value
semantic_en: "This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workforce Person Service Cost Level — CDS view giao diện dựa trên I_WorkAssignmentKeyMapping."
keywords:
  - "workforce"
  - "person"
  - "service"
  - "cost"
  - "level"
  - "work"
  - "assignment"
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
# I_WORKASSGMTSRVCCOSTLVLDEX_1

**This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` | ✓ | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `StartDate` | ✓ | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignmentDEX_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Workforce Person Service Cost Level'

@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {

            mapping:[
               {
                    table: 'WFD_D_SRVCOSTLVL',
                    role: #MAIN,
                    viewElement: ['WorkAssignment' ,'StartDate'],
                    tableElement: ['workforce_assgmt_id','start_date']
                },
                  {
                    table: 'wfd_d_keymap',
                    role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id']
                }
            ]
        }
    }

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'ServiceCostLevelDetails'

define view entity I_WorkAssgmtSrvcCostLvlDEX_1
  as select from I_WorkAssignmentKeyMapping as Assignment

    inner join   I_WrkAssgmtSrvcCostLvl_2   as SrvcCostLvl on Assignment.WorkAssignment = SrvcCostLvl.WorkforceAssignment

  association [0..1] to I_WorkAssignmentDEX_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignment = $projection.WorkAssignment

  association [1]    to I_WorkforcePersonDEX_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID

{
  key Assignment.WorkAssignment,
  key SrvcCostLvl.StartDate,
        SrvcCostLvl.EndDate,
     Assignment.WorkAssignmentExternalID,
     Assignment.Country2DigitISOCode,
      Assignment.WorkforcePersonExternalID,

      SrvcCostLvl.ServiceCostLevel,      
      
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      Assignment.IsBlocked,


      /*Association */
      _WorkAssignment,
      _WorkforcePerson
}
```
