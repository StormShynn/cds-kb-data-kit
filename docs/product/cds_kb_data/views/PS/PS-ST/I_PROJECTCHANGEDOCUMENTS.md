---
name: I_PROJECTCHANGEDOCUMENTS
description: "Change document for Project data"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value
semantic_en: "Change document for Project data"
semantic_vi: "Change document for Project data — CDS view cơ bản (transactional data) dựa trên I_ProjectData_2."
keywords:
  - "change"
  - "document"
  - "for"
  - "project"
  - "data"
  - "object"
  - "class"
  - "database"
  - "table"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - document
  - interface-view
  - project
  - PS-ST
---
# I_PROJECTCHANGEDOCUMENTS

**Change document for Project data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  | `CHAR(90)` | Object value |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `ChangeDocument` | ✓ | |  |  | `CHAR(10)` | Change Number of Document |
| `DatabaseTable` | ✓ | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocTableKey` | ✓ | |  |  | `CHAR(70)` | Key of Modified Table Row |
| `ChangeDocDatabaseTableField` | ✓ | |  |  | `CHAR(30)` | Field Name |
| `ChangeDocItemChangeType` | ✓ | |  |  | `CHAR(1)` | Type of Change |
| `ProjectInternalID` | ✓ | |  |  | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ChangeDocGlobalFieldName` |  | |  | `GFNName` | `CHAR(30)` | DD: Field Name Original Spelling |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ChangeDocPreviousUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for Old Field Content |
| `ChangeDocNewUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for New Field Content |
| `ChangeDocPreviousCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for Old Field Content |
| `ChangeDocNewCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for New Field Content |
| `ChangeDocumentOldFieldValue` |  | |  | `ChangeDocPreviousFieldValue` | `CHAR(254)` | Old Content of Changed Field |
| `ChangeDocumentNewFieldValue` |  | |  | `ChangeDocNewFieldValue` | `CHAR(254)` | New Content of Changed Field |
| `LastChangedByUser` |  | |  | `CreatedByUser` | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `LastChangeDate` |  | |  | `CreationDate` | `DATS(8)` | Creation Date of Change Document |
| `LastChangeTime` |  | |  | `CreationTime` | `TIMS(6)` | Time of Change |
| `_ControllingArea` |  | |  |  |  |  |
| `_ProfitCenter` |  | |  |  |  |  |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResponsiblePerson` | `I_ProjectResponsiblePerson` | [0..1] |
| `_ProjectApplicant` | `I_ProjectApplicant` | [0..1] |
| `_WBSElement` | `I_WBSElementData_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value)*

```abap
@AbapCatalog: {
          sqlViewName: 'IPROJCHGDOC',
          compiler.compareFilter: true,
          preserveKey: true
          }

@AccessControl: {
    authorizationCheck: #CHECK
    }
@EndUserText.label: 'Change document for Project data'

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
   viewType: #BASIC,
   lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    compositionRoot: true,

    usageType: {
        serviceQuality: #C,
        sizeCategory : #XL,
        dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true
    }
 }
@Metadata.ignorePropagatedAnnotations:true
define view I_ProjectChangeDocuments
  as select from           I_ProjectData_2                                                                             as proj
    inner join             I_ChangeDocument                                                                            as cdhdr        on  cdhdr.ChangeDocObject      = proj.ProjectInternalID
                                                                                                                                       and cdhdr.ChangeDocObjectClass = 'PROJ'
    inner join             I_ChangeDocumentItem                                                                        as cdpos        on  cdpos.ChangeDocObject = proj.ProjectInternalID
                                                                                                                                       and cdpos.ChangeDocument  = cdhdr.ChangeDocument
                                                                                                                                       and (
                                                                                                                                          cdpos.DatabaseTable    = 'PROJ'
                                                                                                                                        )
    left outer to one join P_ProjectFieldMappingForChgDoc( p_tabname: 'I_PROJECTDATA_2' , p_viewname:'IPROJECTDATA2' ) as FieldmapProj on FieldmapProj.DDICName = cdpos.ChangeDocDatabaseTableField

  // DPP Changes
  // Person in Responsible for Project
  association [0..1] to I_ProjectResponsiblePerson as _ResponsiblePerson on $projection.ResponsiblePerson = _ResponsiblePerson.ResponsiblePerson
  // Project Applicant
  association [0..1] to I_ProjectApplicant         as _ProjectApplicant  on $projection.ApplicantCode = _ProjectApplicant.ApplicantCode
  // WBS Element
  association [0..*] to I_WBSElementData_2         as _WBSElement        on $projection.ProjectInternalID = _WBSElement.ProjectInternalID

{
  key cdhdr.ChangeDocObject             as ChangeDocObject,

  key cdhdr.ChangeDocObjectClass        as ChangeDocObjectClass,

  key cdpos.ChangeDocument              as ChangeDocument,
  key cdpos.DatabaseTable               as DatabaseTable,
  key cdpos.ChangeDocTableKey           as ChangeDocTableKey,
      // Field Name
  key cdpos.ChangeDocDatabaseTableField as ChangeDocDatabaseTableField,

      // Change Indicator
  key cdpos.ChangeDocItemChangeType     as ChangeDocItemChangeType,
  key proj.ProjectInternalID            as ProjectInternalID,

      proj.ProjectExternalID            as ProjectExternalID,

      FieldmapProj.GFNName              as ChangeDocGlobalFieldName,

      @Semantics.text: true
      proj.ProjectDescription           as ProjectDescription,

      @Consumption.hidden: true
      proj.ControllingArea              as ControllingArea,

      @Consumption.hidden: true
      proj.ProfitCenter                 as ProfitCenter,

      @Consumption.hidden: true
      proj.ResponsiblePerson            as ResponsiblePerson,

      @Consumption.hidden: true
      proj.ApplicantCode                as ApplicantCode,

      cdpos.ChangeDocPreviousUnit       as ChangeDocPreviousUnit,

      cdpos.ChangeDocNewUnit            as ChangeDocNewUnit,

      cdpos.ChangeDocPreviousCurrency   as ChangeDocPreviousCurrency,

      cdpos.ChangeDocNewCurrency        as ChangeDocNewCurrency,

      // Old Value
      @EndUserText.label: 'Old Value'
      cdpos.ChangeDocPreviousFieldValue as ChangeDocumentOldFieldValue,

      // New Value
      @EndUserText.label: 'New Value'
      cdpos.ChangeDocNewFieldValue      as ChangeDocumentNewFieldValue,

      // Changed By
      cdhdr.CreatedByUser               as LastChangedByUser,

      // Separate Date
      // LastChangedDate needed for Smart Filter Bar
      @Semantics.systemDate.createdAt: true
      cdhdr.CreationDate                as LastChangeDate,

      // Separate Time
      // LastChangeTime needed for sorting
      @Semantics.systemTime.createdAt: true
      cdhdr.CreationTime                as LastChangeTime,

      //Associations
      @Consumption.hidden: true
      proj._ControllingArea             as _ControllingArea,

      @Consumption.hidden: true
      proj._ProfitCenter                as _ProfitCenter,

      @Consumption.hidden: true
      _ResponsiblePerson,
      @Consumption.hidden: true
      _ProjectApplicant,
      @Consumption.hidden: true
      _WBSElement

}
where
      cdhdr.ChangeDocObjectClass = 'PROJ'
  and cdpos.ChangeDocObjectClass = 'PROJ'
  and cdpos.DatabaseTable        = 'PROJ'
```
