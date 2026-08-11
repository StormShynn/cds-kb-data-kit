---
name: I_WORKFORCEPERSONSKILLTAGS
description: "Workforce Person Skill Tags"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value
semantic_en: "Workforce Person Skill Tags"
semantic_vi: "Workforce Person Skill Tags — CDS view giao diện dựa trên I_EmployeeskillTags."
keywords:
  - "workforce"
  - "person"
  - "skill"
  - "tags"
  - "type"
  - "name"
  - "system"
  - "record"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
---
# I_WORKFORCEPERSONSKILLTAGS

**Workforce Person Skill Tags**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Person` | ✓ | |  | `HumRsceRelatedObjectId` | `CHAR(45)` | ID of Related Object |
| `WorkforcePersonSkillTagID` | ✓ | |  | `EmployeeSkillTagID` | `RAW(16)` | GUID in 'RAW' format |
| `WorkforcePersonSkillTagType` |  | |  | `EmployeeSkillTagType` | `CHAR(1)` | Tag Type |
| `WorkforcePersonSkillTagName` |  | |  | `EmployeeSkillTagName` |  |  |
| `SystemOfRecordID` |  | |  |  | `CHAR(80)` | System ID |
| `LastChangeDate` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `BusinessPartner` |  | | `_BusinessPartner` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `_CreatedByUser` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWFPERSSKILLTAGS'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.sapObjectNodeType.name:'WorkforcePerson'
@AbapCatalog.compiler.compareFilter: true
//@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Workforce Person Skill Tags'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE] 
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view I_WorkforcePersonSkillTags
  as select from I_EmployeeskillTags as Tags
  
    inner join   I_HrRelation        as RelationCP_BP on  RelationCP_BP.HumRsceObjectId            = Tags.PersonnelNumber
                                                      and RelationCP_BP.HumRsceRelshpSpecification = 'B'
                                                      and RelationCP_BP.HumRsceRelationship        = '207'
                                                      and RelationCP_BP.EndDate                    = '99991231'
  association [0..1] to I_User            as _CreatedByUser   on $projection.LastChangedByUser = _CreatedByUser.UserID

  association [1]    to I_BusinessPartner as _BusinessPartner on $projection.Person = _BusinessPartner.BusinessPartner
{

  key RelationCP_BP.HumRsceRelatedObjectId as Person,
  key Tags.EmployeeSkillTagID              as WorkforcePersonSkillTagID,
      Tags.EmployeeSkillTagType            as WorkforcePersonSkillTagType,
      Tags.EmployeeSkillTagName            as WorkforcePersonSkillTagName,
      Tags.SystemOfRecordID,
      Tags.LastChangeDate,
      Tags.LastChangedByUser,
      _BusinessPartner.AuthorizationGroup,
      _CreatedByUser, //Added to display User Full Name from CE1708,
      _BusinessPartner,
      @Consumption.hidden:true
      @UI.hidden:true
      _BusinessPartner.BusinessPartner as BusinessPartner

}
```
