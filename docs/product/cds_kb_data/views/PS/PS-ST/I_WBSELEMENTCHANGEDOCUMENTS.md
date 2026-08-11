---
name: I_WBSELEMENTCHANGEDOCUMENTS
description: "Change document for WBS Element data"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value
semantic_en: "Change document for WBS Element data"
semantic_vi: "Change document for WBS Element data — CDS view cơ bản (transactional data) dựa trên I_WBSElementData_2."
keywords:
  - "change"
  - "document"
  - "for"
  - "wbs"
  - "element"
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
  - PS-ST
---
# I_WBSELEMENTCHANGEDOCUMENTS

**Change document for WBS Element data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value) |

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
| `WBSElementInternalID` | ✓ | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ChangeDocGlobalFieldName` |  | |  | `GFNName` | `CHAR(30)` | DD: Field Name Original Spelling |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ChangeDocPreviousUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for Old Field Content |
| `ChangeDocNewUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for New Field Content |
| `ChangeDocPreviousCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for Old Field Content |
| `ChangeDocNewCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for New Field Content |
| `ChangeDocumentOldFieldValue` |  | |  | `ChangeDocPreviousFieldValue` | `CHAR(254)` | Old Content of Changed Field |
| `ChangeDocumentNewFieldValue` |  | |  | `ChangeDocNewFieldValue` | `CHAR(254)` | New Content of Changed Field |
| `LastChangedByUser` |  | |  | `CreatedByUser` | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `LastChangeDate` |  | |  | `CreationDate` | `DATS(8)` | Creation Date of Change Document |
| `LastChangeTime` |  | |  | `CreationTime` | `TIMS(6)` | Time of Change |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `RespCostCenterControllingArea` |  | |  |  | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `FreeDefinedAttribute01` |  | |  |  | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  |  | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  |  | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  |  | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedIndicator1` |  | |  |  | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  |  | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `_ControllingArea` |  | |  |  |  |  |
| `_ProfitCenter` |  | |  |  |  |  |
| `_ResponsibleCostCenter` |  | |  |  |  |  |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResponsiblePerson` | `I_ProjectResponsiblePerson` | [0..1] |
| `_ProjectApplicant` | `I_ProjectApplicant` | [0..1] |
| `_Project` | `I_ProjectData_2` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value)*

```abap
@AbapCatalog: {
          sqlViewName: 'IWBSCHGDOC',
          compiler.compareFilter: true,
          preserveKey: true
          }

@AccessControl: {
    authorizationCheck: #CHECK
    }
@EndUserText.label: 'Change document for WBS Element data'

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
define view I_WBSElementChangeDocuments
  as select from           I_WBSElementData_2                                                                              as prps
    inner join             I_ChangeDocument                                                                                as cdhdr        on  cdhdr.ChangeDocObject      = prps.ProjectInternalID
                                                                                                                                           and cdhdr.ChangeDocObjectClass = 'PROJ'
    inner join             I_ChangeDocumentItem                                                                            as cdpos        on  cdpos.ChangeDocObject      = prps.ProjectInternalID
                                                                                                                                           and cdpos.ChangeDocObjectClass = 'PROJ'
                                                                                                                                           and cdpos.ChangeDocument       = cdhdr.ChangeDocument
                                                                                                                                           and cdpos.ChangeDocTableKey    = concat(
      cast(
        $session.client                                                                                                    as char3
      ), prps.WBSElementInternalID
    )
                                                                                                                                           and (
                                                                                                                                              cdpos.DatabaseTable         = 'PRPS'
                                                                                                                                            )
    left outer to one join P_ProjectFieldMappingForChgDoc( p_tabname: 'I_WBSELEMENTDATA_2' , p_viewname:'IWBSELMNTDATA2' ) as FieldmapProj on FieldmapProj.DDICName = cdpos.ChangeDocDatabaseTableField
  // DPP Changes
  // Person in Responsible for Project
  association [0..1] to I_ProjectResponsiblePerson as _ResponsiblePerson on $projection.ResponsiblePerson = _ResponsiblePerson.ResponsiblePerson
  // Project Applicant
  association [0..1] to I_ProjectApplicant         as _ProjectApplicant  on $projection.ApplicantCode = _ProjectApplicant.ApplicantCode
  // Project Data
  association [1..1] to I_ProjectData_2            as _Project           on $projection.ChangeDocObject = _Project.ProjectInternalID

{
  key cdhdr.ChangeDocObject              as ChangeDocObject,
  key cdhdr.ChangeDocObjectClass         as ChangeDocObjectClass,

  key cdpos.ChangeDocument               as ChangeDocument,
  key cdpos.DatabaseTable                as DatabaseTable,
  key cdpos.ChangeDocTableKey            as ChangeDocTableKey,

      // Field Name
  key cdpos.ChangeDocDatabaseTableField  as ChangeDocDatabaseTableField,

      // Change Indicator
  key cdpos.ChangeDocItemChangeType      as ChangeDocItemChangeType,
  key prps.WBSElementInternalID          as WBSElementInternalID,
      prps.WBSElementExternalID          as WBSElementExternalID,
      FieldmapProj.GFNName               as ChangeDocGlobalFieldName,
      @Semantics.text: true
      prps.WBSDescription                as WBSDescription,


      cdpos.ChangeDocPreviousUnit        as ChangeDocPreviousUnit,

      cdpos.ChangeDocNewUnit             as ChangeDocNewUnit,

      cdpos.ChangeDocPreviousCurrency    as ChangeDocPreviousCurrency,

      cdpos.ChangeDocNewCurrency         as ChangeDocNewCurrency,

      @EndUserText.label: 'Old Value'
      cdpos.ChangeDocPreviousFieldValue  as ChangeDocumentOldFieldValue,

      // New Value
      @EndUserText.label: 'New Value'
      cdpos.ChangeDocNewFieldValue       as ChangeDocumentNewFieldValue,
      // Changed By
      cdhdr.CreatedByUser                as LastChangedByUser,

      // Separate Date
      // LastChangedDate needed for Smart Filter Bar
      @Semantics.systemDate.createdAt: true
      cdhdr.CreationDate                 as LastChangeDate,

      // Separate Time
      // LastChangeTime needed for sorting
      @Semantics.systemTime.createdAt: true
      cdhdr.CreationTime                 as LastChangeTime,


      @Consumption.hidden: true
      prps.ControllingArea               as ControllingArea,

      @Consumption.hidden: true
      prps.ProfitCenter                  as ProfitCenter,

      @Consumption.hidden: true
      prps.ResponsiblePerson             as ResponsiblePerson,

      @Consumption.hidden: true
      prps.ApplicantCode                 as ApplicantCode,

      @Consumption.hidden: true
      prps.RespCostCenterControllingArea as RespCostCenterControllingArea,

      @Consumption.hidden: true
      prps.ResponsibleCostCenter         as ResponsibleCostCenter,

      @Consumption.hidden: true
      prps.FreeDefinedAttribute01        as FreeDefinedAttribute01,

      @Consumption.hidden: true
      prps.FreeDefinedAttribute02        as FreeDefinedAttribute02,

      @Consumption.hidden: true
      prps.FreeDefinedAttribute03        as FreeDefinedAttribute03,

      @Consumption.hidden: true
      prps.FreeDefinedAttribute04        as FreeDefinedAttribute04,

      @Consumption.hidden: true
      prps.FreeDefinedIndicator1         as FreeDefinedIndicator1,

      @Consumption.hidden: true
      prps.FreeDefinedIndicator2         as FreeDefinedIndicator2,
      @Consumption.hidden: true
      prps.ProjectType                   as ProjectType,


      //Associations
      @Consumption.hidden: true
      prps._ControllingArea              as _ControllingArea,

      @Consumption.hidden: true
      prps._ProfitCenter                 as _ProfitCenter,

      @Consumption.hidden: true
      prps._ResponsibleCostCenter        as _ResponsibleCostCenter,

      @Consumption.hidden: true
      _ResponsiblePerson,
      @Consumption.hidden: true
      _ProjectApplicant,
      @Consumption.hidden: true
      _Project
}
where
      cdhdr.ChangeDocObjectClass = 'PROJ'
  and cdpos.ChangeDocObjectClass = 'PROJ'
```
