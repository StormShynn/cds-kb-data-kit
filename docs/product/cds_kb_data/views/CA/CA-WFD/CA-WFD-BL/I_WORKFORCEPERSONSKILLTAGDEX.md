---
name: I_WORKFORCEPERSONSKILLTAGDEX
description: "This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workforce Person Skill Tag — CDS view giao diện dựa trên I_WorkerCentralPerson."
keywords:
  - "workforce"
  - "person"
  - "skill"
  - "tag"
  - "central"
  - "external"
  - "business"
  - "partner"
  - "text"
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
# I_WORKFORCEPERSONSKILLTAGDEX

**This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPerson` | ✓ | |  |  | `NUMC(8)` | Central Person Workforce Assignment ID |
| `WorkforcePersonSkillTagID` | ✓ | |  | `EmployeeSkillTagID` | `RAW(16)` | GUID in 'RAW' format |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonTagText` |  | |  | `EmployeeSkillTagName` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Workforce Person Skill Tag'

@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {
            mapping:[
               {
                    table: '/shcm/d_ee_tag', 
                    role: #MAIN,
                    viewElement: ['CentralPerson','WorkforcePersonSkillTagID'],
                    tableElement: ['personnelnumber','tag_id']
                },
                  {
                  table : 'wfd_d_keymap',
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  viewElement: [ 'CentralPerson' ],
                  tableElement: [ 'workforce_assgmt_id' ]
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
@ObjectModel.sapObjectNodeType.name:'WorkforcePersonSkillTags'


define view entity I_WorkforcePersonSkillTagDEX
  as select from I_WorkerCentralPerson as Person

    inner join   I_EmployeeskillTags   as SkillTag on SkillTag.PersonnelNumber = Person.CentralPerson
  association [0..1] to I_BusinessPartner      as _BusinessPartner on _BusinessPartner.BusinessPartner = Person.BusinessPartner
  association [1] to I_WorkforcePersonDEX_1 as _WorkforcePerson on _WorkforcePerson.WorkforcePersonExternalID = Person.WorkforcePersonExternalID

{
  key Person.CentralPerson,
  key SkillTag.EmployeeSkillTagID   as WorkforcePersonSkillTagID,
      Person.WorkforcePersonExternalID,
      Person.BusinessPartner,
      SkillTag.EmployeeSkillTagName as WorkforcePersonTagText,
      

      /*Associations */
      _WorkforcePerson,
      _BusinessPartner

}
where
  SkillTag.EmployeeSkillTagType = 'U'
```
